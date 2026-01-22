---
title: Idempotency and retries
---

OGS game servers may retry operations in case of network errors or unexpected return codes.

## Required idempotency key
The wallet platform MUST treat the following combination as an idempotency key (depending on method):

- `gpid`
- `roundid`
- `transactionid`

If the same call is received again with the same key, the wallet MUST NOT apply the operation twice.

## Retry timing
Retries may occur minutes, hours, or even days after the original request.

## Session expiration rule
The wallet platform MUST NOT reject retried `Wager`, `Result`, or `Rollback` because:
- the session expired, or
- the round is already closed,
**if** the original operation was already processed.

## Practical expectation
If a `Result` was already applied and a retry arrives:
- respond with success (`rc=0`)
- return the same final balance / transaction id behavior your platform defines for idempotent repeats.

