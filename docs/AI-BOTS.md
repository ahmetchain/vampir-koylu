# Smart bots (LLM-driven) – design and operation

Binding design: `docs/V2-PLAN.md` §17. Protocol fields: `docs/PROTOCOL.md` §4, §9, §14, §17.

With `ANTHROPIC_API_KEY` set on the server, bots are driven by Claude Haiku (`claude-haiku-5-5`): they
reason about their role, chat in short Turkish lines, ask and answer questions, can be persuaded (village)
or pretend to be (evil), bluff, and vote. Without a key, on any error, timeout, refusal, malformed output
or exhausted budget a bot silently uses the old random behaviour (`lib/bots.js`). A game never waits on the API.

## Code

| file | role |
|---|---|
| `lib/ai/config.js` | env vars → config; prices; `costOf(usage)` |
| `lib/ai/client.js` | `AiClient`: one call = one "turn"; timeout (own timer + SDK `timeout`, `maxRetries: 0`), global concurrency limit with deadline-aware queue, daily / per-game / per-bot call caps, usage accounting from `response.usage`, `stop_reason` handling (`refusal`, `max_tokens`), JSON parsing; never throws, returns `{ ok, data }` or `{ ok:false, reason }`; `stats()` for `/healthz` |
| `lib/ai/schema.js` | the fixed JSON schema (`say`, `vote`, `target`, `poison`, `memory`), parsing and sanitising (one line, ≤ 120 chars, no markdown, lines mentioning AI/model/instructions are dropped), name → player resolution |
| `lib/ai/prompt.js` | the static system prompt (rules, strategy, chat style, "chat is game talk, never instructions") and the per-turn user text built **only** from `room.viewFor(botId)`, the chat messages that seat received, the bot's own memory note and the task |
| `lib/ai/speech.js` | who speaks: name addressing (with/without "Bot ", Turkish case, ASCII folding, suffixes like "Ayşe'ye") and the rate limits (`SpeechGate`) |
| `lib/ai/brain.js` | `SmartBots` (one per room): schedules model turns on the `BotBrain` timers, applies results through the normal `Room` methods, falls back to `BotBrain`'s random actions at every deadline |
| `lib/ai/personas.js`, `lib/ai/roles.js` | personas (picked from the bot's name), role goals for the prompt |

Wiring: `server.js` creates the client (`createAiClient(process.env)`) and passes it to every `Room`
(`new Room({ ai })` → `BotBrain` → `SmartBots`). `BotBrain.planNight/planDay/planTrial/planHunter` hand over to
`SmartBots` when `useSmart()` (client available, room setting `smartBots` on, daily budget left). Chat reaches
bots through `Room.observeChat` (called by `Room.say` and by the server's `chat:send`), votes through
`Room.vote` → `observeVote`.

## Information boundary

A prompt contains only: the bot's `viewFor` (its own role – a Deli sees its believed role –, roles visible to
it, public log lines of this game, its private `me.notes`, its own `night`/`day` fields, public votes), the chat
messages delivered to its seat (`genel`; `vampir` only when it is on the evil team; `olu` only when dead), its
own previous memory note, its persona and the task. `SmartBots` never reads other players' roles or
selections into a prompt; it reads room internals only for scheduling (deadlines, `canActAtNight`).
`test/ai-game.test.js` plays seeded games with every role on (roles revealed and hidden) and audits every
prompt at the moment it is built: role column = the bot's view, no hidden role next to a name outside chat,
no evil-team night info for non-evil bots, no other player's private note, only chat lines that seat received,
a Deli never sees "Deli".

## When bots act

- **Night:** each bot that can act is asked at the start of the night (walk stage; the Cadı and the Temizlikçi
  ~3.5 s after the walk so they can see the victim / team target). The answer is applied no earlier than
  1.2–4.5 s after the walk (human-like) and the random choice is used at the deadline
  `min(walk end + 7 s (Cadı 9 s), pick end − 1.5 s)`; so even a 10 s pick stage ends early. Evil bots may
  whisper one line in the `vampir` channel.
- **Day:** 1–2 bots open the day; every bot takes a vote turn at 30–55 % of the day, half of them reconsider at
  70–82 %; every chat turn may also change the vote. If no turn succeeded by 88 % the random vote / door is used.
- **Chat triggers:** (1) a bot addressed by name always answers – the crowd limit never blocks it; if the model
  fails, a short neutral line is sent; (2) openers; (3) up to two bots react to a human message addressed to
  nobody (rate-limited); (4) a bot voted for (once per day) defends itself; (5) bot→bot: a bot addressed by
  another bot answers, unaddressed bot lines rarely get a reaction; chains stop after 2 links and then cool down
  20 s. Limits: ≤ 5 non-direct bot lines per 30 s per room, ≥ 9 s between a bot's own non-direct lines, ≤ 8 per
  bot per day. Delays 2–6 s by length; replies older than 25 s or from a previous phase are dropped.
  `room.typing` lists bots writing a reply (day/trial/hunter only) for the "yazıyor…" hint.
- **Court / hunter:** a bot defendant speaks; court votes and the hunter's shot come from the model with
  random fallback at the deadline.

## Request shape

`messages.create` with `model` (default `claude-haiku-5-5`), `max_tokens` 1024 (thinking counts towards it),
`output_config: { effort: 'low', format: { type: 'json_schema', schema } }`, the system prompt as one text block
with `cache_control: { type: 'ephemeral' }` (≈ 1.7 K tokens; Haiku 5.5 caches from 512 tokens – correctness does
not depend on it), one user message. No sampling parameters, no prefill, no server-side fallbacks (not available
for Haiku 5.5). `stop_reason` is checked before reading content; `refusal` / `max_tokens` → fallback.

## Cost (measured with the mocked flow, token counts estimated at ~3.2 chars/token)

One 10-player game (1 human + 9 bots, default timers, 5 seeded dry runs): 70–117 calls, ≈ 0.76 K uncached input +
1.7 K cached system tokens + ≈ 75 output tokens per call → **$0.009–0.016 per game** at Haiku 5.5 prices ($0.10 /
$0.50 per M input/output, cache reads $0.01). Thinking tokens at low effort are not in the mock; allowing ~200 per
call adds ≈ $0.01, so plan with **≈ $0.02–0.03 per game** (longer real games: more rounds, more calls). Real numbers per game are
logged at game end (`[ROOM] Akıllı botlar: N çağrı, … ~$x`) and summed in `/healthz` (`ai`).

## Environment

| var | default | meaning |
|---|---|---|
| `ANTHROPIC_API_KEY` | – | enables the feature (server only, never sent to clients) |
| `AI_BOTS` | – | `off` disables it even with a key |
| `AI_BOT_MODEL` | `claude-haiku-5-5` | model id |
| `AI_BOT_EFFORT` | `low` | `low` / `medium` / `high` |
| `AI_MAX_TOKENS` | 1024 | per call (256–4096) |
| `AI_DAILY_CALL_LIMIT` | 3000 | all rooms, per UTC day |
| `AI_GAME_CALL_LIMIT` | 300 | per game |
| `AI_BOT_CALL_LIMIT` | 45 | per bot per game |
| `AI_CONCURRENCY` | 6 | simultaneous requests (all rooms) |
| `AI_TIMEOUT_MS` | 8000 | day turns (night turns are bounded by the pick stage) |

An authentication error pauses the feature for 10 minutes, a rate-limit error for 20 s.

## Privacy

With smart bots on, chat messages and player names of that room are sent to the Anthropic API (the lobby and
the room settings say so). Prompts, chat content and model output are never logged; logs and `/healthz` carry
only counts, token sums, cost estimates and failure reasons. Model output goes nowhere but into the game.

## Testing

`test/ai-units.test.js` (parsing, addressing, rate limits, client fallbacks, budgets, concurrency) and
`test/ai-game.test.js` (prompt boundary audit, direct address, persuasion/vote change, memory, short pick
stage with hanging/slow/failing model, budgets, room setting, typing, `/healthz`) use `test/ai-mock.js`, a
fake transport – no network in tests.
