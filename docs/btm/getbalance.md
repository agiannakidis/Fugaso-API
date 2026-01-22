---
title: GetBalance
---

## Purpose

`GetBalance` returns the current player balance for the active `GAMESESSIONID`.

It is used by OGS to:
- display the current balance in the game UI
- validate that the wallet is reachable and returns consistent data

---

## When is it called?

- After `GetAccount` (during game start)
- Periodically during gameplay (depending on the game)
- Before and/or after financial operations (implementation dependent)

---

## Request

### HTTP
- Method: `GET`
- Transport: `HTTPS`
- Encoding: `UTF-8`

### Parameters

| Name | Required | Type | Description |
|---|---|---|---|
| `request` | yes | string | Must be `getbalance` |
| `apiversion` | yes | string | BTM API version |
| `loginname` | yes | string | OGS username |
| `password` | yes | string | OGS password |
| `gamesessionid` | yes | string | Value returned by `GetAccount` |

### Example

```http
GET /wallet?
request=getbalance
&loginname=fogsuser
&password=qwerty
&apiversion=1.2
&gamesessionid=AAD8EE30-8C43-11DC-9755-668156D89593

