use super::*;

/// Function to claim tokens that are locked, after the scheduled period.
///
/// This function can produce the following errors:-
///  -  `TokensStillLocked` when claimed during the locked period.
///  -  `InsufficientFunds` when the locked amount is lesser than requested
///      amount.
pub fn process_claim(ctx: Context<Claim>) -> Result<()> {
    let stream = &mut ctx.accounts.stream;

    // Check locked period
    let now = Clock::get()
        .expect("Error getting current timestamp.")
        .unix_timestamp;

    require!(now > stream.next_pay_at, CustomError::TokensStillLocked);

    // Check Claim status
    require!(stream.remaining_amount > 0, CustomError::InsufficientFunds);

    let amount = std::cmp::min(stream.remaining_amount, stream.next_pay_amount);

    // Find bump for vault PDA
    let (_, bump) = Pubkey::find_program_address(&[ESCROW_TAG], &crate::ID);

    // Transfer reward amount from vault to user's account
    let cpi_program = ctx.accounts.token_program.to_account_info();
    let cpi_accounts = Transfer {
        from: ctx.accounts.escrow_account.to_account_info(),
        to: ctx.accounts.recipient.to_account_info(),
        authority: ctx.accounts.escrow_account.to_account_info(),
    };
    token::transfer(
        CpiContext::new_with_signer(cpi_program, cpi_accounts, &[&[ESCROW_TAG, &[bump]]]),
        amount,
    )?;

    stream.next_pay_at = calc_next_pay_date(stream.last_claimed_at, stream.release_frequency);
    stream.next_pay_amount = calc_pay_amount(
        stream.initial_staked_amount,
        stream.release_rate,
        stream.decimals,
    );
    stream.remaining_amount -= amount;
    stream.last_claimed_at = now;

    Ok(())
}

#[derive(Accounts)]
#[instruction()]
pub struct Claim<'info> {
    #[account(
        seeds = [GLOBAL_STATE_TAG],
        bump,
    )]
    pub global_state: Box<Account<'info, GlobalState>>,

    #[account(
        mut,
        seeds = [LOCK_STATE_TAG, authority.key().as_ref()],
        bump,
    )]
    pub stream: Box<Account<'info, StreamInstruction>>,

    #[account(
        mut,
        seeds = [ESCROW_TAG],
        bump,
    )]
    pub escrow_account: Box<Account<'info, TokenAccount>>,

    /// CHECK: Recipient address
    #[account(mut)]
    pub recipient: UncheckedAccount<'info>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub rent: Sysvar<'info, Rent>,
}
