---
title: Wager
---

## Purpose

`Wager` deducts the bet amount from the player's wallet for a specific game round.

This is a **financial** operation. The wallet MUST implement strict idempotency to prevent double-debits.

---

## When is it called?

- One or multiple times per round (depending on game type)
- Before a `Result` call for the same round
- May be retried by OGS due to network issues or unexpected responses

---

## Request

### HTTP
- Method: `GET`
- Transport: `HTTPS`
- Encoding: `UTF-8`

### Parameters

| Name | Required | Type | Description |
|---|---|---|---|
| `request` | yes | string | Must be `wager` |
| `apiversion` | yes | string | BTM API version |
| `loginname` | yes | string | OGS username |
| `password` | yes | string | OGS password |
| `gamesessionid` | yes | string | From `GetAccount` |
| `accountid` | yes | string | From `GetAccount` |
| `gpid` | yes | string | Game provider/game id |
| `roundid` | yes | string | Unique round identifier |
| `transactionid` | yes | string | Unique transaction id for this wager |
| `betamount` | yes | number | Amount to deduct |
| `currency` | yes | string | ISO 4217 (must match session currency) |
| `device` | no | string | `desktop` / `mobile` (optional) |

> The exact set of parameters may include additional game metadata. The wallet MUST ignore unknown optional parameters.

### Example

```http
GET /wallet?
request=wager
&loginname=fogsuser
&password=qwerty
&apiversion=1.2
&gamesessionid=AAD8EE30-8C43-11DC-9755-668156D89593
&accountid=100002
&gpid=1001
&roundid=987654321
&transactionid=TX-W-000001
&betamount=1.00
&currency=EUR
&device=desktop

