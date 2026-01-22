---
title: Error codes
---

OGS responses use an XML envelope with attributes:
- `rc` (return code)
- `msg` (optional explanation, used mainly for failures)

## Common return codes

| rc | Title | Meaning |
|---:|------|---------|
| 0 | Success | Request processed successfully |
| 1 | Technical error | Unspecified technical error |
| 102 | Wager not found | Rollback attempted on missing wager |
| 110 | Operation not allowed | Operation not allowed (OGS should not retry) |
| 1000 | Not logged on | Invalid/expired session |
| 1003 | Authentication failed | loginname/password invalid |
| 1006 | Out of money | Insufficient funds |
| 1007 | Unknown currency | Currency not supported |
| 1008 | Parameter required | Missing required parameter |
| 1019 | Gaming limits | Betting not allowed due to limits |
| 1035 | Account blocked | Account blocked |

> Recommendation: return a human-readable `msg` for failures.

