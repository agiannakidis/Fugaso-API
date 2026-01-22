---
title: Security
---

## Transport
All requests MUST be sent over HTTPS.

## Authentication
OGS Bet Transfer Module (BTM) calls the operator wallet endpoint using:
- `loginname`
- `password`

These parameters are included in every request.

## Request signing (signature)
Additional security can be enabled using the `signature` query parameter.

**Rule:**

`signature = MD5( UPPERCASE( <all request parameters concatenated> + <AccessKey> ) )`

- Parameters are concatenated as a query string (e.g. `a=1&b=2&c=3`) **without** the leading `?`.
- The AccessKey is appended at the end (no separator).
- The final string is uppercased before hashing with MD5.

### Example
AccessKey:

`NdsgzHt5KH0IbTv8ctOMzDaWA5arjGqQ`

Request (example):

`...&request=wager&device=desktop&accountid=34001004&betamount=1.0&...`

Then:

`signature = MD5( UPPERCASE( "loginname=...&request=wager&...<AccessKey>" ) )`

> Note: The signature algorithm must exactly match OGS expectations (parameter order and concatenation rules are critical).

