---
title: GetAccount
---

## Purpose

`GetAccount` is the first call made by OGS when a player launches a game.

It is used to:
- validate the operator session
- identify the player account
- establish a **game session** used for all subsequent calls

This method MUST be called successfully before any `GetBalance`, `Wager`, `Result`, or `Rollback` calls.

---

## When is it called?

- When the player launches a game via the OGS Game Launcher
- Exactly once per game session

---

## Request

### HTTP
- Method: `GET`
- Transport: `HTTPS`
- Encoding: `UTF-8`

### Parameters

| Name | Required | Type | Description |
|---|---|---|---|
| `request` | yes | string | Must be `getaccount` |
| `apiversion` | yes | string | BTM API version |
| `loginname` | yes | string | OGS username |
| `password` | yes | string | OGS password |
| `sessionid` | yes | string | Operator-generated session identifier |
| `device` | yes | string | `desktop` or `mobile` |

### Example

```http
GET /wallet?
request=getaccount
&loginname=fogsuser
&password=qwerty
&apiversion=1.2
&sessionid=CF125F-1624-FDGC21-102562
&device=desktop

