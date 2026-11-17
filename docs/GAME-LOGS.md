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
`vk_game_logs` also has four nullable columns for the server-side analysis (below): `analysis TEXT`, `analysis_cost DOUBLE PRECISION`, `analysis_model TEXT`, `analyzed_at BIGINT`.
Like `look_acc` / `game_log_id` they are added to a live table at start-up (`information_schema.columns` check, then one `ALTER TABLE ... ADD COLUMN` per missing column; if an `ALTER` fails the logs keep working, analyses are just not stored and `saveGameLogAnalysis` returns false). JSON store: the same fields (`analysis`, `analysisCost`, `analysisModel`, `analyzedAt`) on the log row in `game-logs.json`.
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
- `GET /api/admin/game-logs/:id` → `{ ok, log: { …same meta…, record: { …decompressed v:2 record… }, analysis } }`; `analysis` is `null` (never analysed) or `{ status: "done", text, cost, model, analyzedAt }`, `{ status: "running", startedAt }` or `{ status: "failed", reason, at }`.
  The list rows (and this meta) also carry `analyzed` (bool), `analyzedAt` (ISO | null) and `analysisCost` (number | null); the analysis text is never in the list.
- `POST /api/admin/game-logs/:id/analyze[?force=1]` (body `{ "force": true }` works too) → starts the analysis **on the server** (see below). Answers: `202 { ok, status: "running", alreadyRunning }` (job started or already running),
  `200 { ok, status: "done", cached: true, analysis: { status, cost, model, analyzedAt } }` (already analysed and no `force`: no model call, no cost), `404` unknown log, `429 daily_limit`, `503 analyze_disabled` (no `ANTHROPIC_API_KEY` on the server, `AI_ANALYZE=off` / `AI_BOTS=off`, or no analyzer wired), plus the usual 401/404/429 of the admin routes.
- `GET /api/admin/game-logs/:id/analysis` → `{ ok, analysis: { status: "none" | "running" | "done" | "failed", … } }`: the cheap poll (no record decompression); `done` carries `text`, `cost`, `model`, `analyzedAt`; `failed` carries `reason`
  (`auth`, `network`, `timeout`, `rate_limit`, `bad_request`, `api_error`, `refusal`, `empty`, `malformed`, `store`, `error`). `none` after a start means the job was lost (server restarted / went to sleep).

## Analysis runs on the server (`lib/ai/analyze.js`)

The developer's PC has no valid API key, so the analysis is done by the server with **its** `ANTHROPIC_API_KEY`, through the reviewer's transport (`sdkTransport`, same error classification).
`POST .../:id/analyze` loads the stored record, builds the Turkish markdown transcript (`logMarkdown`), sends it to `AI_ANALYZE_MODEL` (non-streaming, effort `AI_ANALYZE_EFFORT`, ≤ 16 K output tokens, 300 s timeout,
a network/TLS error is retried up to 3 times) with a fixed system prompt (the bots' rule book as reference; sections *Ne oldu · Dönüm noktaları · Botlar nasıl oynadı · İnsanlar botlara ne söyledi, botlar nasıl cevap verdi · Sorunlar · İyileştirme önerileri*)
and stores the markdown + cost + model + time next to the log (`store.saveGameLogAnalysis`).

**Async job, not a long request**: a real analysis takes 1-4 minutes, longer than Render's free-tier proxy waits for one HTTP response. So the POST answers `202` at once and the job runs in the process;
the client polls `GET .../:id/analysis` (a few hundred bytes while running). Job state lives in memory only (`running` / `failed`, the last 50 failures); the result lives in the store. If the process restarts or sleeps
mid-job the poll shows `none` and the client starts again (the daily slot of the lost job stays used). While polling, the Render instance stays awake (inbound requests).

| var | default | meaning |
|---|---|---|
| `AI_ANALYZE_MODEL` | `claude-sonnet-5-5` | analysis model (`claude-opus-5-5` also priced) |
| `AI_ANALYZE_DAILY_LIMIT` | `20` | analyses per UTC day, in memory, counted when a job starts (failures count; cached answers and polls do not). Separate from `AI_REVIEW_DAILY_LIMIT` and the bots' budget |
| `AI_ANALYZE_EFFORT` | `medium` | `low` / `medium` / `high` |
| `AI_ANALYZE` | – | `off` disables it (also off without `ANTHROPIC_API_KEY` or with `AI_BOTS=off`) |

**Log**: one line per analysis, numbers only: `[ai-analyze] oyun=<id> model=claude-sonnet-5-5 girdi=41234 çıktı=3120 maliyet≈$0.1137 süre=64sn`; a failure is `[ai-analyze] oyun=<id> atlandı: <reason> girdi=… çıktı=… maliyet≈$… süre=…`
(plus one `ağ hatası, yeniden deneniyor (n/2)` line per retry). Transcript and model output are never logged. `/healthz` gets `aiAnalyze: { enabled, model, today, dailyLimit, running, analyses, failures, costUsd }`.
A failed or refused analysis still costs tokens; they are counted in `costUsd`.

## Developer script `scripts/game-logs.js`

Reads `ADMIN_TOKEN` + `REVIEW_URL` from the environment or the git-ignored `.env.local` (never printed; `VK_NO_ENV_LOCAL=1` stops it from reading `.env.local`, used by the tests).

```
node scripts/game-logs.js                       # download new logs  -> ai-eval-out/game-logs/ (git-ignored)
node scripts/game-logs.js --all                 # re-download everything
node scripts/game-logs.js --analyze [id …]      # analyse the given logs ON THE SERVER (default: the newest) -> analysis-<id>.md, cost printed
node scripts/game-logs.js --analyze --latest N  # the N newest logs on the server (already analysed ones come back free)
node scripts/game-logs.js --analyze … --force   # analyse again even if the server already has an analysis
node scripts/game-logs.js --analyze … --local-model   # old behaviour: call the model from this PC with a local ANTHROPIC_API_KEY
node scripts/game-logs.js --local FILE [--analyze]   # a local record (e.g. ai-eval --selfplay writes selfplay-gamelog.json); analysis uses the local model
options: --out DIR  --limit N  --model claude-sonnet-5-5  --effort low|medium|high (the last two only with --local-model / --local)
```

Output per game: `json/<id>.json` (raw, as served), `<date>-<room>-<id>.md` (readable Turkish transcript: header with result/settings/models, a players table with true roles and
how/when each died, then a phase-by-phase timeline: log lines, chat with channel markers, votes with changes ("oyunu değiştirdi: A → B"), tallies, night picks "(gece seçimi, yalnızca X gördü)",
the resolved night, private results "(yalnızca X gördü)", smart-bot notes indented as `  - bot notu · mm:ss · Bot … düşünce/hafıza`), and with `--analyze` `analysis-<id>.md`.

`--analyze` (default) needs only `ADMIN_TOKEN` + `REVIEW_URL`: for each id (or the `--latest N` newest from the server list) it downloads the log (JSON + transcript), `POST`s `.../analyze`, polls `.../analysis` every 8 s
(`VK_ANALYZE_POLL_MS` overrides; waits `Retry-After` on a 429, gives up after 20 min or when the job is lost / failed) and writes `analysis-<id>.md` with a header line `Model · maliyet ≈ $… · sunucuda çözümlendi`; the cost is printed.
Server messages (analysis disabled, daily limit, unknown id, wrong token) are shown as they are.

`--local-model` (and `--local FILE --analyze`) keeps the old path: the script sends the transcript (not the JSON) through `sdkTransport` itself (a network error such as `SELF_SIGNED_CERT_IN_CHAIN` is retried up to 5 times)
with the same prompt (`lib/ai/analyze.js`), model `AI_ANALYZE_MODEL` / `--model`, and needs a valid `ANTHROPIC_API_KEY` on this PC. Expected cost (estimate, not yet measured against the real API): ≈ $0.05 for a small game
(13 K rule book + 5 K transcript + ≈ 3 K output); a full 200 K-character log ≈ $0.25.

## Privacy

Game chat of humans **is stored** (genel, and the vampire / dead channels), together with night actions and private results. The lobby sheet says so
(`public/ui/room.js`: "Oyun içi sohbet mesajları ve oyun geçmişi, oyunu geliştirmek için saklanır (IP adresi, oturum anahtarı ya da parola saklanmaz)."); the smart-bot notes about the AI
service remain. Nothing of it is logged: the log lines carry numbers only. Access only with `ADMIN_TOKEN`. The record contains player names (usernames) and no ids, IPs, tokens or passwords.

## Tests

`test/game-logs.test.js` (fake clock / transport, JSON store + pg-mem; no network): human-only game (order, picks per player, `nres`, per-recipient `priv`, channels, vote changes over time,
tallies, no ids/tokens), the review view without human private info, an abandoned game (and no log when closed before the first night, no double log), hook errors, a smart-bot game
(think/memory/fallbacks, human lines to bots, review linked), all-failing model (log still written), plain-bot game, size cap order, store behaviour in both stores incl. retention by count and
by bytes, the live-table migration (`game_log_id`), the server hook (one numbers-only line, `GAME_LOGS=off`, store failure), review ↔ log link, endpoint auth/404/rate limit/decompression,
`scripts/game-logs.js` against an in-process server, `--analyze --local-model` with a fake transport (prompt, cost, file, retry), the lobby note.
Server-side analysis (same file, fake transport, pg-mem + JSON, no network): store round trip, the live-table migration (old `vk_game_logs` without the columns; a failing `ALTER` does not hurt the logs), endpoint auth / 404 / 503 (no key, `AI_ANALYZE=off`, no analyzer),
202 + running poll -> done, cached answer without a second model call, `force`, daily limit (429), the single numbers-only log line, `/healthz` `aiAnalyze`, failures (auth, refusal, empty answer, store error) never crash the server and are retryable,
network retry, and `scripts/game-logs.js --analyze` against the in-process server (file written, cost printed, cache, `--force`, `--latest`, `--local-model`, lost job, 429 `Retry-After`).
