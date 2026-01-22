---
title: Bet Transfer Module overview
---

The Bet Transfer Module (BTM) is the interface between OGS game servers and the operator wallet.

BTM calls the operator wallet over HTTPS GET requests to:
- authenticate sessions
- check balance
- deduct bets
- award wins
- roll back failed rounds

## Methods
- `GetAccount`
- `GetBalance`
- `Close`
- `Wager`
- `Result`
- `Rollback`
- `Ping`
- `Jackpot`

