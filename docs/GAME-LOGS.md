# Game logs – the full history of every game (owner request 2026-11-17, V2-PLAN §20)

Goal: keep the history of **every** finished game as text so it can be analysed later ("what happened, how did the bots talk, what did the humans
say to the bots, what problems came up"). Independent of smart bots and of the Sonnet review.

## What is recorded

`lib/ai/gamerec.js` → `GameRecorder`; every `Room` owns one (`room.recorder`, fed through `room.rec(method, …)` calls in `game.js`: a try/catch wrapper,
a recorder error is one `console.error` line and never touches the game). A record is built when

- the game **ends** (`finish()`), or
- the room **closes while a game is running** (everyone left / the 10-minute empty timer) **and at least one night was played** (`round ≥ 1`) → `end: "abandoned"`.
  A room closed during the role-card phase leaves nothing. A server shutdown (`destroy()`) writes nothing.

Format (`v: 2`, JSON, names instead of ids, no user ids / sockets / IPs / tokens / passwords):

```
{ v, id, room (code), startedAt, endedAt (ISO), durationSec, end: "finished"|"abandoned", winner, rounds,
  settings: { nightSec, daySec, revealRoles, events, roleMode, smartBots, roles:[enabled], scenario? },
  game: { players, humans, bots, smartBots, rounds, winner, durationSec, model, botCalls:{calls,ok,failures,costUsd}, fallbacks:{kind:n}, distribution?, rolePool? },
  players: [{ name, kind: "human"|"bot"|"smart", role (final), startRole?, fakeRole?, team, evil, alive, left?, death?:{ph,how}, calls?, promoted?, framedAsVampire?, tracesErased?, stoleFrom? }],
  events: [ … in order …], truncated?: { bot, chat, vote, other } }
```

`kind: "smart"` = a bot that made at least one model call in this game (`bot` = random bot). `t` is seconds since the start, `ph` the phase tag (`gece 1`, `gün 2`, `mahkeme 2`, `avcı 3`…).

Events (`k`):

| k | fields | meaning |
|---|---|---|
| `phase` | `phase`, trial `step/speaker/accused` | every phase change (dedup) |
| `log` | `kind`, `text` | the public game log (dawn results, hangings, reveals, Avcı shots, events, win). Story/rumour/epilogue flavour lines and join lines are left out |
| `chat` | `ch` (`genel`/`vampir`/`olu`), `from`, `bot?`, `text` | ALL chat during the game, each message once (humans and bots) |
| `pick` / `pass` / `lock` | `who`, `role`, `as?` (Deli), `to`, `act?` (Cadı: heal/poison) | night picks, "wait this night", the Gardiyan's day lock choice, per player |
| `nres` | `trips[{who,to,kind,out}]`, `dies`, `saved`, `steal?`, `framed?`, `cleaned?` | the resolved night (what really happened) |
| `priv` | `to:[names]`, `kind`, `text` | a private result **per recipient**: Kahin pairs, Gözcü reports, protection worked / attacked and survived, door locked / rattled / bounced, Gardiyan report, theft, promotion. (`killed` is left out: it is the dawn line) |
| `vote` | `who`, `to` (`uyu`/null), `trial?`, `secret?` | every day / court vote change, with its time |
| `tally` | `counts`, `votes{target:[voters]}`, `sleeping`, `accused?`, `secret` | the count when the day / court vote is resolved (Mayor weights as `x2`) |
| `bot` | `who`, `kind`, `think?`, `say?`, `vote?`, `target?`, `poison?`, `memory?` | a smart bot's model turn (successful ones; empty fields omitted) |
| `fb` | `kind` | a decision that fell back to the random bot behaviour (`gece`, `oy`, `kilit`, `cevap`, `mahkeme`, `avcı`) |
| `end` | `winner` / `abandoned` | last event |

**Bounded** to ≈ 200 000 characters (`LOG_MAX_CHARS`): when over, the oldest `bot` notes go first, then the oldest `chat` lines, then vote changes (tallies stay), finally the oldest other
events (never `phase`/`end`); `truncated` says how much. In memory a room keeps at most 8000 events (oldest bot notes/chat dropped first).

Measured: a 2-round, 8-player game with 7 smart bots: 144 events, 17.9 K characters raw, **4.1 K** stored (gzip + base64, ratio ≈ 4.3). A full 200 K record ≈ 45 K stored. 500 games ≪ 200 MB.

## Storage

Table `vk_game_logs` (created at start-up when missing; Neon): `id, created_at, room, started_at, ended_at, end_kind, winner, players, humans, bots, smart, rounds, size, review_id, record`
(`record` = gzip + base64 JSON, `size` = its length). JSON store: separate file `game-logs.json` next to `accounts.json`.
**Retention**: the newest **500** games or **~200 MB** of stored data (sum of `size`), whichever limit is hit first; the newest game is always kept.
`vk_ai_reviews` gets a nullable column `game_log_id` (added at start-up with `ALTER TABLE … ADD COLUMN` if the live table lacks it; if that fails the reviews are saved without the link).

Writing is asynchronous after the game (`hooks.gameLog` in `server.js`: gzip off the main flow, then `store.saveGameLog`); a failure is one line
`[<time>] Oyun geçmişi kaydedilemedi (ABCDE): <message>` and never affects the game. Success is one line of numbers only:
`[game-log] oda=ABCDE oyun=<id> finished oyuncu=9 tur=3 olay=412 boyut=11.2KB` (no names, no text). `GAME_LOGS=off` disables saving.

## The Sonnet review stays

Smart-bot games (≥ 1 successful model call) are still reviewed exactly as in `docs/AI-BOTS.md` (same limits, prompt, schema). The review input is now a **view** of the game log
(`reviewView()` in `gamerec.js`: same v:1 shape as before, ≈ 60 K characters, **without human private info**: no human notes, picks, or whispers in the vampire/dead channels –
the full log keeps them, the external review model never gets them). When a review is saved it is linked both ways: `vk_ai_reviews.game_log_id` ↔ `vk_game_logs.review_id` (`hasReview` in the list).

## Admin endpoints

Same `ADMIN_TOKEN` (Bearer, constant-time, **same rate limit** as the review endpoints: 60 / 10 min / IP, wrong tries included; 404 when `ADMIN_TOKEN` is unset; `Cache-Control: no-store`):

- `GET /api/admin/game-logs[?limit=50&since=<ms>]` → `{ ok, logs: [{ id, createdAt, date, room, startedAt, endedAt, end, winner, players, humans, bots, smartBots, days, size, hasReview, reviewId }] }` (newest first, max 500).
- `GET /api/admin/game-logs/:id` → `{ ok, log: { …same meta…, record: { …decompressed v:2 record… } } }`.

## Developer script `scripts/game-logs.js`

Reads `ADMIN_TOKEN` + `REVIEW_URL` from the environment or the git-ignored `.env.local` (never printed; `VK_NO_ENV_LOCAL=1` stops it from reading `.env.local`, used by the tests).

```
node scripts/game-logs.js                       # download new logs  -> ai-eval-out/game-logs/ (git-ignored)
node scripts/game-logs.js --all                 # re-download everything
node scripts/game-logs.js --analyze [id …]      # analyse the given logs (default: the newest) with a strong model -> analysis-<id>.md, cost printed per call
node scripts/game-logs.js --local FILE [--analyze]   # a local record (e.g. ai-eval --selfplay writes selfplay-gamelog.json)
options: --out DIR  --model claude-sonnet-5-5  --effort low|medium|high  --limit N
```

Output per game: `json/<id>.json` (raw, as served), `<date>-<room>-<id>.md` (readable Turkish transcript: header with result/settings/models, a players table with true roles and
how/when each died, then a phase-by-phase timeline: log lines, chat with channel markers, votes with changes ("oyunu değiştirdi: A → B"), tallies, night picks "(gece seçimi, yalnızca X gördü)",
the resolved night, private results "(yalnızca X gördü)", smart-bot notes indented as `  - bot notu · mm:ss · Bot … düşünce/hafıza`), and with `--analyze` `analysis-<id>.md`.

`--analyze` sends the transcript (not the JSON) through the existing SDK transport (`sdkTransport`; a network error such as `SELF_SIGNED_CERT_IN_CHAIN` is retried up to 5 times) to
`AI_REVIEW_MODEL` / `--model` (default `claude-sonnet-5-5`, effort medium, free text, ≤ 16 K output tokens), with a fixed system prompt that includes the bots' rule book as reference, asking for
Turkish markdown with the sections *Ne oldu · Dönüm noktaları · Botlar nasıl oynadı · İnsanlar botlara ne söyledi, botlar nasıl cevap verdi · Sorunlar · İyileştirme önerileri*
(rule-book changes, game/UI/timing changes, regression scenarios). The cost (from `usage` and the price table) is printed and written at the top of the file. Expected (estimate, not yet measured
against the real API): ≈ $0.05 for a small game (13 K rule book + 5 K transcript + ≈ 3 K output); a full 200 K-character log ≈ $0.25.

## Privacy

Game chat of humans **is stored** (genel, and the vampire / dead channels), together with night actions and private results. The lobby sheet says so
(`public/ui/room.js`: "Oyun içi sohbet mesajları ve oyun geçmişi, oyunu geliştirmek için saklanır (IP adresi, oturum anahtarı ya da parola saklanmaz)."); the smart-bot notes about the AI
service remain. Nothing of it is logged: the log lines carry numbers only. Access only with `ADMIN_TOKEN`. The record contains player names (usernames) and no ids, IPs, tokens or passwords.

## Tests

`test/game-logs.test.js` (fake clock / transport, JSON store + pg-mem; no network): human-only game (order, picks per player, `nres`, per-recipient `priv`, channels, vote changes over time,
tallies, no ids/tokens), the review view without human private info, an abandoned game (and no log when closed before the first night, no double log), hook errors, a smart-bot game
(think/memory/fallbacks, human lines to bots, review linked), all-failing model (log still written), plain-bot game, size cap order, store behaviour in both stores incl. retention by count and
by bytes, the live-table migration (`game_log_id`), the server hook (one numbers-only line, `GAME_LOGS=off`, store failure), review ↔ log link, endpoint auth/404/rate limit/decompression,
`scripts/game-logs.js` against an in-process server, `--analyze` with a fake transport (prompt, cost, file, retry), the lobby note.
