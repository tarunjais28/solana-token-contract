export type Staking = {
  "version": "0.1.0",
  "name": "staking",
  "constants": [
    {
      "name": "SECONDS_PER_DAY",
      "type": "u64",
      "value": "60 * 60 * 24"
    },
    {
      "name": "GLOBAL_STATE_TAG",
      "type": {
        "defined": "&[u8]"
      },
      "value": "b\"global\""
    },
    {
      "name": "ESCROW_TAG",
      "type": {
        "defined": "&[u8]"
      },
      "value": "b\"escrow\""
    },
    {
      "name": "LOCK_STATE_TAG",
      "type": {
        "defined": "&[u8]"
      },
      "value": "b\"lock\""
    }
  ],
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stakedAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rewardAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "totalStakedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stakeState",
      "docs": [
        "The struct containing instructions for staking"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakedAmount",
            "docs": [
              "Initial staked amount"
            ],
            "type": "u64"
          },
          {
            "name": "stakedAt",
            "docs": [
              "Timestamp when token is going to staked"
            ],
            "type": "i64"
          },
          {
            "name": "rewards",
            "docs": [
              "Rewards earned"
            ],
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TokensStillLocked",
      "msg": "Error: You need to wait at least lockup period."
    },
    {
      "code": 6001,
      "name": "InsufficientFunds",
      "msg": "Error: Your balance is not enough."
    }
  ]
};

export const IDL: Staking = {
  "version": "0.1.0",
  "name": "staking",
  "constants": [
    {
      "name": "SECONDS_PER_DAY",
      "type": "u64",
      "value": "60 * 60 * 24"
    },
    {
      "name": "GLOBAL_STATE_TAG",
      "type": {
        "defined": "&[u8]"
      },
      "value": "b\"global\""
    },
    {
      "name": "ESCROW_TAG",
      "type": {
        "defined": "&[u8]"
      },
      "value": "b\"escrow\""
    },
    {
      "name": "LOCK_STATE_TAG",
      "type": {
        "defined": "&[u8]"
      },
      "value": "b\"lock\""
    }
  ],
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stakedAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rewardAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "totalStakedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stakeState",
      "docs": [
        "The struct containing instructions for staking"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakedAmount",
            "docs": [
              "Initial staked amount"
            ],
            "type": "u64"
          },
          {
            "name": "stakedAt",
            "docs": [
              "Timestamp when token is going to staked"
            ],
            "type": "i64"
          },
          {
            "name": "rewards",
            "docs": [
              "Rewards earned"
            ],
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TokensStillLocked",
      "msg": "Error: You need to wait at least lockup period."
    },
    {
      "code": 6001,
      "name": "InsufficientFunds",
      "msg": "Error: Your balance is not enough."
    }
  ]
};
