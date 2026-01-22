---
title: Test cases
---

This section contains practical scenarios to validate a correct wallet integration.

## Core flows

### 1. Standard round
1) `GetAccount` → `rc=0`  
2) `GetBalance` → `rc=0`  
3) `Wager` → `rc=0` and balance decreases  
4) `Result` (`gamestatus=pending`) → `rc=0` and balance increases  
5) `Result` (`gamestatus=completed`) → `rc=0`

### 2. Idempotent retry
- Send the same `Result` twice with the same `(gpid, roundid, transactionid)`
- Expected: only one payout, second call returns `rc=0` without double credit.

### 3. Rollback on missing wager
- Send `Rollback` for a wager that never reached the wallet
- Expected: `rc=102`

### 4. Rollback after Result
- `Wager` then `Result`, then rollback wager transaction
- Expected: `rc=110`

### 5. Expired session but late Result
- Session expires, then game server sends `Result`
- Expected: wallet MUST accept the result and return `rc=0`

