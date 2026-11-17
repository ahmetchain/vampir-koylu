# Vampir Köylü v2 – Server protocol

This is the protocol **as implemented** in `server.js`, `game.js` and `lib/`. Client code (UI, 3D
world) should be written against this file only. All user-facing strings are Turkish and are quoted
exactly. When this file and `docs/V2-PLAN.md` disagree, this file describes what the server does.

Contents: 1 Conventions · 2 Constants · 3 Roles · 4 Room settings · 5 REST API · 6 Socket.IO
connection · 7 Client → server events · 8 Server → client events · 9 The `state` view ·
10 Announces · 11 Chat · 12 Game flow and rules · 13 Stats · 14 Static files, health, caching ·
15 Client recipes · 16 Story: scenario, jobs, scenes, chronicle · 17 Bots.

---

## 1. Conventions

- Base URL: the game server origin. The client prefixes REST paths and the socket URL with
  `VK_CONFIG.serverUrl` (empty string = same origin).
- REST bodies and responses are JSON (`Content-Type: application/json`), request body limit 8 KB.
- Timestamps inside game messages (`ts`, `deadline`, `serverNow`) are **milliseconds since epoch on
  the server clock**. `user.createdAt` (REST) is an ISO-8601 string.
- IDs:
  - `user.id` – account id (UUID string). Only visible to its owner (`/api/me`, `state.me.userId`).
  - player id (`players[i].id`, `me.id`, `targetId`, …) – a random UUID **per seat in a room**,
    visible to everyone. It is different from the account id. It stays the same when the account
    reconnects to its seat.
  - room id – 5 characters from `ABCDEFGHJKLMNPQRSTUVWXYZ23456789`. The server upper-cases and trims
    room ids it receives, so `"abcde"` works.
- Every socket event that takes an ack callback answers `{ ok: true, ... }` or
  `{ ok: false, error: "Türkçe mesaj" }`. If the handler throws, the ack is
  `{ ok: false, error: "Sunucuda bir hata oluştu." }`. Payload may be omitted (`socket.emit(ev, ack)`).

## 2. Constants

| Name | Value | Meaning |
|---|---|---|
| `MIN_PLAYERS` | 5 | connected players needed for `game:start` |
| `MAX_PLAYERS` | 20 | seats per room |
| `FRAMER_MIN_PLAYERS`, `CLEANER_MIN_PLAYERS` | 7, 7 | the helpers İftiracı and Temizlikçi are only dealt with at least this many players |
| `SECOND_HELPER_MIN_PLAYERS` | 13 | random dealing: with both helpers enabled and this many players the second helper is dealt with 50 % chance |
| `THIEF_MIN_PLAYERS` | 7 | Hırsız is only dealt with at least this many players |
| vampire count | 1 for 5–9 players, 2 for 10–14, 3 for 15–20 | (`room.vampireCount`) |
| `REVEAL_MS` | 8000 | role-card phase before night 1 |
| `ALL_VOTED_MS` | 10000 | day timer drops to this when every alive connected player has voted |
| `HUNTER_MS` | 20000 | hunter's last-shot time |
| `NIGHT_WALK_MS` | 4000 | night stage `walk`: walk-home lead-in at the start of every night, before the pick countdown (`room.timerFrom`) |
| `nightSec` | 10–60, default 20 | night stage `pick` length (room setting; halved by `kisa-gece`) |
| `PICK_GRACE_MS` | 1500 | the pick stage ends this long after every awaited actor has picked or passed (§12.1a) |
| `NIGHT_SHOW_MS` | 20000 | night stage `show`: the resolved night is played back, then dawn |
| `NIGHT_RESULT_MS` | 14000 | private night results are emitted this long after the show stage started |
| `HOST_GRACE_MS` | 60000 | the host role moves to another human only after the host has been disconnected this long without a break (§12.5) |
| `TRIAL_TURN_MS` | 15000 | mahkeme: each defendant's defence turn (events only, §12.10) |
| `TRIAL_VOTE_MS` | 20000 | mahkeme: re-vote between the two defendants; drops to 3000 ms once everyone voted |
| `LOBBY_GRACE_MS` | 120000 | a player disconnected in `lobby`/`ended` is removed after this |
| `EMPTY_ROOM_MS` | 600000 | room is deleted after 10 min with nobody connected (immediately when it has no players) |
| `daySec` | 30–300, default 120 | room setting |
| `COLOR_COUNT` | 20 | `look.color` ∈ 0..19 (unique per room) |
| `HAT_COUNT` | 19 | `look.hat` ∈ 0..18 (0 = no hat; 9..18 are the procedural hats, 9 = Takke) |
| `ACC_COUNT` | 7 | `look.acc` ∈ 0..6 (optional; missing = 0 = no accessory; 0 is never stored) |
| `SKIN_COUNT` | 12 | `look.skin` ∈ 0..11 (character model) |
| plaza center | (0.5, 0.5) | campfire, normalized plaza coordinates |
| plaza ring | 0.10 ≤ dist(center) ≤ 0.48 | every `pos` is clamped to this ring |
| spawn ring | 0.22 ≤ dist ≤ 0.42 | random spawn position on join |
| state flush for moves | 100 ms | `state` broadcasts caused by `player:move` are coalesced per room |
| WebSocket compression | permessage-deflate, messages ≥ 1 KB | transparent for browsers and socket.io-client |
| chat | 300 chars max, 1 message / 400 ms per socket | whitespace collapsed |
| room log | last 250 entries | `state.log` (narration roughly doubles the entries; see §16) |
| room name | 3–24 chars | control chars stripped, whitespace collapsed |
| room password | 0–20 chars | empty = no password |
| username | 3–16 chars | see §5.2 |
| password | 6–72 chars | |
| session token lifetime | 30 days, sliding | §5.3 |
| rate limit | register 20 / 10 min / IP, login 40 / 10 min / IP | §5.4 |

## 3. Roles

| id | label (`ROLE_LABEL`) | team (`teamOf`) | night action | dealt when |
|---|---|---|---|---|
| `vampir` | Vampir | `vampir` | the team's **one** kill target: the first vampire to confirm sets it, every vampire goes there (not self, not another vampire, not İftiracı) | always (1–3, see §2) |
| `iftiraci` | İftiracı | `vampir` (helper) | frame a living non-evil player (not self): the Kahin sees `vampir` in the pair that night, and if the framed player dies that night or is voted out the next day they are publicly revealed as `vampir` (§12.12) | setting on **and** ≥ 7 players (§3 dealing) |
| `temizlikci` | Temizlikçi | `vampir` (helper) | visit a living non-evil player (not self): if that player dies this night (any cause) their role stays hidden until the game ends (§12.13) | setting on **and** ≥ 7 players (§3 dealing) |
| `doktor` | Doktor | `koylu` | protect any living player (self allowed) | setting (default on) |
| `kahin` | Kahin | `koylu` | inspect a living player (not self); learns **two roles, one of them real** (detective, §12.11) | setting (default on) |
| `gozcu` | Gözcü | `koylu` | watch any living player's house; sees arrivals in the show stage and the report (§12.6) | setting (default off) |
| `gardiyan` | Gardiyan | `koylu` | none at night; **by day** picks a door to lock for the coming night (`day:lock`, §12.7) | setting (default off) |
| `cadi` | Cadı | `koylu` | `heal` (once per game) / `poison` (once per game, not self) | setting (default off) |
| `avci` | Avcı | `koylu` | none; last shot when killed | setting (default off) |
| `muhtar` | Muhtar | `koylu` | none; day vote counts 2 | setting (default off) |
| `soytari` | Soytarı | `soytari` | none; wins alone if hanged | setting (default off) |
| `deli` | Deli | `koylu` | believes they are another role and acts as it, with no real effect (§12.8) | setting (default off) |
| `hirsiz` | Hırsız | `hirsiz` (neutral) until the theft | once per game: steal a living player's role (§12.9) | setting on **and** ≥ 7 players |
| `koylu` | Köylü | `koylu` | none | fills the rest |

Every night choice is **final** once accepted (no change, no clearing).

"Evil" / vampire team = `vampir` + the **helpers** `iftiraci` and `temizlikci` (they see each other's roles, share the vampire chat and the team target view, count as evil for parity).

Dealing depends on `settings.roleMode` (§4). In both modes Hırsız, İftiracı and Temizlikçi need ≥ 7 players, and if kahin and/or
gözcü are enabled and specials are drawn at random, at least one of them is always dealt.

- **`'random'` (default)**: vampires by player count (§2); with 7+ players **exactly one enabled helper** is dealt (chosen at random among the enabled ones); with 13+ players and both helpers enabled the second one is dealt with **50 %** chance;
  plain köylü = `max(1, round(players × 0.2))`; every remaining slot is filled by a random draw from the enabled village
  specials (doktor … hirsiz; all of them if they fit); slots still left are köylü.
- **`'all'`** (the previous rule): `[vampires..., helpers..., specials..., koylu...]`; every enabled helper when 7+;
  slots for village specials = players − vampires − helpers − (1 reserved plain `koylu` if players < 8); if the enabled
  specials fit, all are dealt, otherwise the dealt ones are chosen at random per game.

Lobby preview (`room.distribution` + `room.rolePool`, §9) is deterministic and never reveals a game's draw: `distribution`
lists the roles that are dealt in **every** draw (a helper is listed there only when it is the single enabled helper); the remaining `rolePool.pick` slots are:
`rolePool.helpers` slots that are certainly a helper, one of `rolePool.maybe` (lobby text: "1 yardımcı: İftiracı ya da Temizlikçi"), up to `rolePool.helpersMax − rolePool.helpers` more helpers that may be dealt (50 %, the other candidate), specials from `rolePool.from` (may or may not be dealt), and köylü for the rest. `maybe` is `[]` and `helpers`/`helpersMax` are 0 when no helper is uncertain.
In random mode the start log line does not list the roles ("Oyun başladı: 7 oyuncu. Roller rastgele dağıtıldı."); in
`'all'` mode it does ("Oyun başladı: 7 oyuncu (1 vampir, İftiracı, Doktor, Kahin, Gözcü, 2 köylü).").
Examples (random): 7 players with doktor, kahin, gözcü, iftiracı on → `distribution: [vampir, iftiraci, doktor, kahin, gozcu, koylu, koylu]`, `rolePool: null`;
7 players with doktor, kahin, iftiracı, temizlikçi on → `distribution: [vampir, doktor, kahin, koylu, koylu, koylu]`, `rolePool: { pick: 1, from: [], maybe: ['iftiraci', 'temizlikci'], helpers: 1, helpersMax: 1 }`; 13 players with both helpers → `helpers: 1, helpersMax: 2`; 7 players with 10 specials on →
`distribution: [vampir, koylu]`, `rolePool: { pick: 5, from: [10 specials], maybe: [], helpers: 0, helpersMax: 0 }` (with iftiracı also on: `distribution: [vampir, iftiraci, koylu]`, `pick: 4`).
`'all'`: 7 players with doktor, kahin, gözcü, iftiracı on → `vampir, iftiraci, doktor, kahin, gozcu, koylu, koylu`, `rolePool: null`.

## 4. Room settings

```js
settings = {
  nightSec: 20,          // 10..60 (integers, clamped): length of the night's pick stage
  daySec: 120,           // 30..300
  revealRoles: true,     // reveal the role of players who die / leave
  events: 'off',         // village events: 'off' | 'some' | 'often' (built, OFF by default and hidden in the UI; §12.10)
  roleMode: 'random',    // 'random' | 'all' – how roles are dealt (§3); anything else → 'random'
  smartBots: true,       // bots driven by Claude when the server has an API key (§17); no effect without one
  botModel: 'haiku',     // 'haiku' | 'sonnet'; only the owner account (lib/banter.js) may set 'sonnet' (others get an error; the field is hidden from their state); owner's `me.canChooseBotModel` is true
  roles: {               // all 12 keys always present, booleans
    doktor: true, kahin: true, gozcu: false, gardiyan: false, cadi: false,
    avci: false, muhtar: false, soytari: false, deli: false, hirsiz: false, iftiraci: false, temizlikci: false,
  },
}
```
`room:create` and `room:settings` accept partial objects; missing keys keep their value
(`room:settings` merges `roles` key by key). Unknown keys are ignored. The jester's role is revealed
when hanged even if `revealRoles` is false.

---

## 5. REST API

All paths are under `/api`. Every response has `Cache-Control: no-store`.

### 5.1 Common shapes

```js
user = {
  id: "uuid",
  username: "İrem",                     // display name exactly as registered (after cleanup)
  createdAt: "2026-11-13T10:00:00.000Z",
  look: { color: 0..19, hat: 0..8, skin: 0..11 },
  stats: {
    games: 0, wins: 0,
    teams: {
      koylu:   { games: 0, wins: 0 },   // village team (all village roles)
      vampir:  { games: 0, wins: 0 },   // vampires and İftiracı
      soytari: { games: 0, wins: 0 },
    },
  },
}
error = { ok: false, error: "Türkçe mesaj", code: "..." }   // with HTTP 4xx/5xx
```
New accounts get a random look.

Error codes:

| HTTP | `code` | `error` |
|---|---|---|
| 400 | `invalid_username` | "Kullanıcı adı 3-16 karakter olmalı; harf, rakam, boşluk ve _ - . kullanılabilir." |
| 400 | `invalid_password` | "Şifre 6-72 karakter olmalı." |
| 400 | `invalid_look` | "Geçersiz görünüm." |
| 400 | `bad_request` | "Geçersiz istek (JSON okunamadı)." |
| 401 | `wrong_credentials` | "Kullanıcı adı ya da şifre yanlış." (unknown user and wrong password are indistinguishable) |
| 401 | `unauthorized` | "Oturumun geçersiz ya da süresi dolmuş, tekrar giriş yap." |
| 404 | `not_found` | "Böyle bir adres yok." |
| 409 | `username_taken` | "Bu kullanıcı adı alınmış, başka bir ad dene." |
| 413 | `bad_request` | "İstek çok büyük." |
| 429 | `rate_limited` | "Çok fazla deneme yaptın, biraz bekleyip tekrar dene." (+ `Retry-After` header, seconds) |
| 500 | `server_error` | "Sunucuda bir hata oluştu, biraz sonra tekrar dene." |

### 5.2 Username rules

- Input is NFC-normalized, leading/trailing whitespace removed, inner whitespace runs collapsed to a
  single space (`"  Şule   Nur "` registers as `"Şule Nur"`).
- 3–16 characters; letters of any alphabet (Turkish included), digits, `_`, `-`, `.`, and single
  spaces between words. Regex: `^[\p{L}\p{N}_.-]+(?: [\p{L}\p{N}_.-]+)*$` (Unicode).
- Unique case-insensitively with Turkish lower-casing, **and dotted/dotless i are treated as the same
  letter**: `İREM`, `IREM`, `Irem`, `irem`, `ırem` are all the same name. Login accepts any of these
  spellings; the display name stays as registered.
- The username is the player's name in every room (players cannot choose another name).

### 5.3 Sessions

- `register` and `login` return a new random token (43 chars, base64url). Send it as
  `Authorization: Bearer <token>` and as the socket handshake `auth.token`.
- Tokens are stored hashed (SHA-256). Lifetime 30 days, sliding: each successful use (REST or socket
  connect) pushes expiry to now + 30 days (written at most once per hour).
- Several tokens per account may be valid at the same time (phone + laptop). `logout` invalidates only
  the token used, and the server immediately disconnects every socket that connected with that token.
- Passwords are hashed with scrypt (N=16384, r=8, p=1, 16-byte per-user salt).

### 5.4 Rate limit and CORS

- Per client IP, fixed window: `POST /api/auth/register` 20 per 10 min, `POST /api/auth/login`
  40 per 10 min (all attempts count). Other endpoints are not limited. Behind a proxy the server uses
  `X-Forwarded-For` only when `TRUST_PROXY` is set (automatic on Render).
- When `CLIENT_ORIGIN` is set (comma-separated origins, e.g. `https://vampir-koylu.netlify.app`),
  requests from those origins get `Access-Control-Allow-Origin: <origin>`,
  `Access-Control-Allow-Headers: Authorization, Content-Type`,
  `Access-Control-Allow-Methods: GET, POST, PATCH, OPTIONS`, `Access-Control-Max-Age: 600`.
  `OPTIONS` preflight answers 204. No cookies are used (no `credentials`).

### 5.5 Endpoints

**`POST /api/auth/register`** body `{ username, password }`
→ **201** `{ ok: true, token, user }`. Errors: 400 `invalid_username`, 400 `invalid_password`,
409 `username_taken`, 429.

**`POST /api/auth/login`** body `{ username, password }`
→ 200 `{ ok: true, token, user }`. Errors: 401 `wrong_credentials` (also for missing fields), 429.

**`POST /api/auth/logout`** header `Authorization: Bearer <token>`
→ 200 `{ ok: true }`. Errors: 401 `unauthorized`.

**`GET /api/me`** (Bearer) → 200 `{ ok: true, user }`. Errors: 401 `unauthorized`.

**`PATCH /api/me`** (Bearer) body `{ look: { color?, hat?, skin? } }`
→ 200 `{ ok: true, user }`. Partial update; each given field must be an integer in range, at least one
field must be given, otherwise 400 `invalid_look`. This changes the **profile** only; a seat already
in a room keeps its look (use `player:look` in a room – that also saves to the profile).

**`GET /api/leaderboard?limit=20`** (no auth) → 200
`{ ok: true, players: [{ username, look, stats }] }`. Only accounts with at least one game. Order:
wins desc, then games asc, then name. `limit` 1–100, default 20 (invalid → 20).

Any other `/api/*` path → 404 `not_found`.

---

## 6. Socket.IO connection

```js
const socket = io(SERVER, { auth: { token } });
socket.on('connect_error', (err) => {
  if (err.message === 'auth') { /* token missing/invalid/expired → go to login */ }
  if (err.message === 'unavailable') { /* account store unreachable → retry later */ }
});
```
- The token is checked once in the handshake. Missing, malformed, unknown or expired →
  connection refused with `connect_error` whose `message` is `'auth'` (socket.io-client does not
  auto-retry middleware errors). If the account store fails, the message is `'unavailable'`.
- After `POST /api/auth/logout` the server disconnects sockets of that token (`disconnect` reason
  `'io server disconnect'`; the client will not auto-reconnect).
- A connected socket is not in any room. It joins one with `room:create`, `room:join` or
  `session:resume`. One socket is bound to at most one seat.
- When the socket server is on a different origin, `CLIENT_ORIGIN` must list the UI origin.

## 7. Client → server events

"Room action" = needs a bound seat; otherwise ack `{ ok:false, error:"Bir odada değilsin." }`.
Unless stated otherwise the success ack is `{ ok: true }`.

### Lobby browser

| Event | Payload | Ack |
|---|---|---|
| `rooms:watch` | – | `{ ok:true, rooms:[RoomInfo] }`; socket then receives `rooms:update` |
| `rooms:unwatch` | – | `{ ok:true }` |
| `room:info` | `{ roomId }` | `{ ok:true, room: RoomInfo }` / "Oda bulunamadı." |

`RoomInfo = { id, name, players /* seats not left, bots included */, bots /* bots among them */, maxPlayers: 20, phase, hasPassword, hostName }`.
Lists contain rooms with ≥ 1 player, sorted: `lobby` first, then `ended`, then running games, then by name.
Binding to a seat removes the socket from the browse list.

### Seats

**`room:create`** `{ roomName, password?, settings? }` → `{ ok:true, roomId, playerId }`.
Creates a room and seats the account as host. Name = account username, look = profile look.
If the socket was seated elsewhere it leaves that room first (mid-game that counts as leaving the
game). Errors: "Oda adı en az 3 karakter olmalı."

**`room:join`** `{ roomId, password? }` → `{ ok:true, roomId, playerId, resumed }`.
- If the account already has a seat in that room (any phase, including mid-game after a disconnect or
  from another tab): the socket is bound to that seat, `resumed: true`, **no password needed**.
  The previously bound socket of that seat (if any) gets `kicked` "Bu oturum başka bir sekmede açıldı."
- Otherwise a new seat: `resumed: false`. The initial look is the profile look; if the profile color
  is taken in the room a random free color is used (hat and skin are kept). The profile is not changed.
- Errors: "Oda bulunamadı. Kapanmış olabilir.", "Oda şifresi yanlış.",
  "Oyun başlamış, şu an katılamazsın.", "Oda dolu (en fazla 20 kişi)."
- A seat whose owner left a running game (`left: true`) cannot be re-taken; that account is treated
  as new (and cannot join until the room is back in `lobby`).

**`session:resume`** `{ roomId }` → `{ ok:true, roomId, playerId }` or `{ ok:false, error:"Bu odada yerin yok." }`.
Same re-binding as above, never creates a seat, no password. Use this after a page reload / reconnect.

**`room:leave`** – → `{ ok:true }`. In `lobby`/`ended` the seat is removed. In a running game the
player is marked `left`, dies (announce `left`) and their seat stays in the list.

### Room actions

| Event | Payload | Who / when | Errors |
|---|---|---|---|
| `room:addBot` | – (`{}`) | host, lobby, room not full | Ack `{ ok:true, playerId }` (`playerId` starts with `bot-`). Errors: "Bot ekleyebilmek için oda sahibi olmalısın.", "Bot sadece lobide eklenebilir.", "Oda dolu (en fazla 20 kişi)." See §17. |
| `room:kick` | `{ playerId }` | host, lobby | "Sadece oda sahibi oyuncu çıkarabilir.", "Oyun sırasında oyuncu çıkarılamaz.", "Kendini çıkaramazsın.", "Oyuncu bulunamadı." The kicked socket gets `kicked` "Oda sahibi seni odadan çıkardı." Also removes bots. |
| `room:settings` | `{ settings }` (partial §4) | host, lobby | "Ayarları sadece oda sahibi değiştirebilir.", "Ayarlar sadece lobide değiştirilebilir." |
| `game:start` | – | host, lobby, ≥ 5 connected | "Oyunu sadece oda sahibi başlatabilir.", "Oyun zaten başladı.", "Oyunu başlatmak için en az 5 oyuncu gerekli." Disconnected seats are dropped at start. |
| `game:lobby` | – | host, ended | "Sadece oda sahibi lobiye döndürebilir.", "Oyun henüz bitmedi." Seats that left or are disconnected are removed; everyone else keeps seat, look and position. |
| `night:select` | `{ targetId, action? }` | alive night roles, night stages `walk`/`pick` | see below |
| `night:pass` | – (`{}`) | alive night roles, night stages `walk`/`pick` | "Bu gece bekle": the player does nothing more tonight (final, like a pick; e.g. Hırsız waiting, Cadı keeping her potions, or after a heal: no poison tonight). Errors: "Şu an gece değil.", "Ölüler seçim yapamaz.", "Köylüler gece seçim yapamaz.", "Gardiyan kilidini gündüz seçer; gece yapacağın bir şey yok.", "Bu rolün gece görevi yok, sabahı bekle.", "Seçim süresi doldu; gece oynanıyor." (show stage), "Kapın dışarıdan kilitlendi, bu gece evinden çıkamazsın.", "Tipi var: bu gece köylüler evlerinden çıkamaz.", "Bu gece beklemeye karar verdin; seçim kesindir." (passed already), "Bu gece yapacak bir seçimin kalmadı." (already picked everything possible). A Deli gets exactly the errors of the role they believe they have. |
| `hunter:shoot` | `{ targetId }` | the dying hunter, phase `hunter` | "Şu an atış zamanı değil.", "Sadece avcı ateş edebilir.", "Kendini vuramazsın.", "Bu oyuncu vurulamaz." |
| `day:vote` | `{ targetId }` = player id, `null` (withdraw) or `'sleep'` | alive, day (and the mahkeme re-vote) | "Oylama sadece gündüz yapılır.", "Ölüler oy veremez.", "Bu oyuncuya oy verilemez.", "Kendine oy veremezsin."; re-vote only: "Savunmalar bitmeden oy verilemez.", "Mahkemede Hızlı Uyu yok; iki sanıktan birini seç.", "Mahkemede yalnızca iki sanıktan birine oy verebilirsin." Voting the same value again withdraws it. |
| `day:lock` | `{ targetId }` = player id or `null` (clear) | the Gardiyan, alive, day (incl. a mahkeme) | "Kilitlenecek kapı sadece gündüz seçilir.", "Ölüler kapı kilitleyemez.", "Sadece gardiyan kapı kilitleyebilir.", "Bu kapı kilitlenemez.", "Kendi kapını kilitleyemezsin.", "Aynı kapıyı iki gece üst üste kilitleyemezsin." Changeable until the day ends; secret (only in the Gardiyan's `day.lock`). §12.7 |
| `player:look` | `{ color?, hat?, skin?, acc? }` | lobby or ended | "Görünüm sadece lobide değiştirilebilir.", "Bu renk başka bir oyuncuda." Values are parsed as integers and clamped to range (unparsable → unchanged). On success the full look is also saved to the account profile (background, failures only logged). |
| `player:move` | `{ x, y }` | living players: `lobby` and `ended` only; **dead players (ghosts): every phase of a running game** (`night` all stages, `day`, `trial`, `hunter`) and `ended` | "Şu an meydanda dolaşamazsın." for a living player outside `lobby`/`ended` (the UI need not show it), "Geçersiz konum." Every move is applied (clamped to the ring, §12.1); the resulting `state` broadcast is coalesced (≤ 1 per 100 ms per room). A ghost's position is visible only to dead viewers until the game ends (§9 `pos`). |
| `chat:send` | `{ text }` | see §11 | "Biraz yavaş yaz :)", "Boş mesaj gönderilemez.", "Gece köy uyur, konuşamazsın." |

**`night:select`** `{ targetId, action?: 'heal' | 'poison' }` (action only for Cadı; anything other
than `'poison'` means `'heal'`). **Final:** once accepted it cannot be changed or cleared (the Cadı's
heal and poison are separate, each final). Allowed in the `walk` and `pick` stages (not in `show`).
Nothing moves in the village until the show stage; a locked door is discovered only then (§12.2). Errors:
- any role: "Şu an gece değil.", "Ölüler seçim yapamaz.", "Seçim süresi doldu; gece oynanıyor." (show stage),
  "Bu oyuncu seçilemez." (target missing or dead),
  "Kapın dışarıdan kilitlendi, bu gece evinden çıkamazsın." (own door locked),
  "Bu gece beklemeye karar verdin; seçim kesindir." (passed tonight), "Seçimini yaptın; gece seçimleri kesindir." (already chosen)
- vampir: "Vampir kendini seçemez.", "Diğer vampirleri seçemezsin.", "İftiracı sizin takımınızda, onu seçemezsin.", "Temizlikçi sizin takımınızda, onu seçemezsin.",
  "Takımın hedefi zaten belli: `<name>`. Gece seçimleri kesindir." (another vampire already set the team target)
- iftiraci: "Kendine iftira atamazsın.", "Takım arkadaşına iftira atamazsın."
- temizlikci: "Kendi izini silemezsin.", "Takım arkadaşının izini silemezsin."
- kahin: "Kendi geleceğine bakamazsın."
- hirsiz: "Kendinden çalamazsın."
- cadi: "Hayat iksirini zaten kullandın.", "Zehri zaten kullandın." (earlier nights), "Hayat iksirini bu gece zaten verdin; seçim kesindir.",
  "Zehri bu gece zaten verdin; seçim kesindir.", "Kendini zehirleyemezsin.", "Aynı kişiye hem iksir hem zehir veremezsin."
- gardiyan: "Gardiyan kilidini gündüz seçer; gece yapacağın bir şey yok."
- koylu: "Köylüler gece seçim yapamaz."; avci, muhtar, soytari: "Bu rolün gece görevi yok, sabahı bekle."
- doktor and gözcü may select themselves (no trip). A Deli gets exactly the errors of the role they believe they have.

## 8. Server → client events

| Event | Payload | When |
|---|---|---|
| `state` | the viewer's view (§9) | after every change in the room, to every seated socket (each gets its own view) |
| `announce` | `{ kind, title, text, ...extra }` (§10) | game events; some kinds only to one player |
| `chat` | `{ channel, from, fromId, text, ts }` (§11) | chat message for this viewer |
| `music:play` (client → server, ack `{ok}`) | `{}` | The owner account presses the lobby "Müzik" button (visible only to it): everyone hears `entrance` again, 2-3 bots react with different lines each time; at most once per 21 s; lobby only. The same happens when the owner types e.g. "verin müziği" in the lobby chat. |
| `entrance` | `{ call }` | the owner account (lib/banter.js, default `ahmetchain`) joined someone else's room for the first time in its session while in the lobby (not when it created the room, not on reconnects, not after a game; also sent for `music:play` with `manual: true`). Every client plays `sfx('entrance')` and shows a small toast "🎺 {call} geldi!"; bots then cheer in the chat (2-4 lines, lobby only). |
| `kicked` | string | the seat was taken over by another tab ("Bu oturum başka bir sekmede açıldı.") or the host kicked you ("Oda sahibi seni odadan çıkardı."). The socket is no longer bound to a seat. |
| `rooms:update` | `[RoomInfo]` | to sockets that called `rooms:watch`, debounced 200 ms |

Ordering: an `announce` is emitted at the moment the event happens, usually **before** the `state`
that reflects it (e.g. `start` arrives before the `reveal` state; `death` before the `day` state).
Acks are usually sent after the resulting `state` for non-move actions, but do not rely on it. Treat
`state` as the source of truth and `announce` as a notification.

## 9. The `state` view

Sent per viewer. Full shape:

```js
{
  serverNow: 1763030000000,            // server clock, for deadline countdowns
  room: {
    id: "K7QPA",
    name: "Akşam Oyunu",
    phase: "lobby" | "reveal" | "night" | "day" | "trial" | "hunter" | "ended",   // "trial" only with events (§12.10)
    round: 0,                          // night/day number, 0 in lobby, increments at each night start
    deadline: 1763030030000 | null,    // when the current timed phase/stage really ends (null in lobby/ended);
                                       // at night: = night.pickUntil in walk/pick, = night.showUntil in show
    timerFrom: 1763030004000 | null,   // night only: when the pick countdown starts (= night start + 4000 ms
                                       // walk-home lead-in); unchanged during the whole night; null in every other phase
    night: null | {                    // phase 'night' only (§12.1a)
      stage: 'walk' | 'pick' | 'show',
      pickUntil: 1763030024000,        // end of the pick stage (moves earlier when everyone picked/passed; may move back)
      showUntil: 1763030038000,        // end of the show stage = dawn (= pickUntil + 20000 until the show starts)
    },
    hostId: "player-uuid" | null,
    settings: { nightSec, daySec, revealRoles, events, roleMode, smartBots, roles: {…} },   // §4
    hasPassword: false,
    aiAvailable: false,                // the server has an AI key: the "Akıllı botlar" setting exists (§17)
    typing: ["bot-…"],                 // bots writing a chat reply right now ("yazıyor…"); only in day/trial/hunter, else []
    winner: null | "koylu" | "vampir" | "soytari",                  // set in 'ended'
    winners: ["player-uuid", ...],      // player ids of the winning side still in the game (not left); [] until ended
    minPlayers: 5, maxPlayers: 20,
    vampireCount: 1,                   // computed from the current number of non-left seats
    distribution: ["vampir", "doktor", "kahin", "koylu", "koylu"],  // roles dealt in EVERY draw for the current
                                       // number of non-left seats (lobby preview; recomputed, so it shrinks when players leave mid-game);
                                       // length = players − rolePool.pick when rolePool is set (§3)
    rolePool: null | { pick: 6, from: ["doktor", "kahin", ...], maybe: ["iftiraci"] },
                                       // the uncertain part: `pick` slots filled at random from `from` (specials that may be dealt,
                                       // kahin/gozcu guaranteed at least one), `maybe` (İftiracı, 60 % in random mode; [] otherwise)
                                       // and köylü; null when nothing is uncertain
    hunterId: "player-uuid" | null,    // the hunter who is shooting (phase 'hunter')
    scenario: null | { id, name, intro },    // theme of this game (§16); set at game:start, null again after game:lobby
    epilogue: null | { title, text, story }, // "Köy Günlüğü" recap (§16); only in phase 'ended' (null on fallback)
    event: null | { id, name, desc, phase },  // active village event (events only, §12.10)
    trial: null | { step: 'defense'|'vote', accused: [id, id], counts: { [id]: n }, speaker: id|null },  // mahkeme (§12.10)
  },
  me: {                                // null only if the viewer has no seat (should not happen)
    id: "player-uuid",
    userId: "account-uuid",
    name: "İrem",
    seat: 0,
    job: null | { id, label },         // same as players[i].job for this seat
    role: null | "<role id>",          // null in lobby. A Deli sees their believed role here until their real role is public (§12.8)
    alive: true,
    look: { color, hat, skin },
    notes: [{ text, ts }],             // private notes: seer results, watch reports, promotion (this game only)
  },
  players: [                           // every seat, in join order (including 'left' ones during a game)
    {
      id: "player-uuid",
      name: "İrem",
      seat: 0,                         // fixed for the game; houses are laid out by seat
      job: null | { id: "terzi", label: "Terzi" },   // public cosmetic village job (§16), same for every viewer; null in lobby
      alive: true,
      connected: true,                 // bots are always true
      left: false,                     // left a running game (counts as dead)
      isHost: true,
      bot: false,                      // true for server-controlled bots (§17); same for every viewer
      role: null | "<role id>",        // visibility rules below
      framed: false,                   // true only in 'ended' for a player whose public reveal was a fake `vampir` (§12.12)
    cleaned: false,                  // true only in 'ended' for a player whose role was hidden by the Temizlikçi (§12.13)
    fakeRole: null | "<role id>",    // only when this entry's role is visible as "deli" (game end, or death with revealRoles): the role the Deli believed
      look: { color: 0..19, hat: 0..8, skin: 0..11 },
      pos: { x: 0..1, y: 0..1 },       // normalized plaza coordinates, see §12.1. A dead player who moved as a
                                       // ghost: dead viewers get the ghost position, living viewers the position at
                                       // death; at 'ended' everyone gets the ghost position (§12.1)
    },
  ],
  log: [{ text, kind, ts }],           // public room log, last 250 (oldest dropped first), identical for every viewer.
                                       // kind: info | night | day | death | safe | win  – factual lines (as v1)
                                       //       story    – one narrated line per narrated announce, in order (= the chronicle)
                                       //       rumor    – one town-crier rumour at each day start (missing on fallback)
                                       //       epilogue – the end-of-game recap (same text as room.epilogue.story)
                                       //       event    – a village event started (events only)
  night: null | { ... },               // see below
  day: null | { ... },                 // see below
}
```

**Role visibility** (`players[i].role`), first matching rule wins:
1. own seat → own role (a Deli sees their believed role until it becomes public, i.e. death with `revealRoles` or game end);
2. phase `ended` → everyone's role;
3. viewer is evil (vampir/iftiraci/temizlikci) and the player is evil → their role (the evil team sees each other,
   each other, both ways);
4. player is dead (or left), `settings.revealRoles`, and the role is not hidden (robbed §12.9 / cleaned §12.13) → their **public** role: `vampir` if a frame stuck (§12.12), else the real role (the same for every viewer, evil ones included);
5. otherwise `null`.

Note: when İftiracı is promoted, their role becomes `vampir` everywhere (also in the end-of-game reveal).

**`seat`**: the smallest non-negative integer not used by another seat in the room at join time.
Seats freed in the lobby are reused; seats never change during a game; `game:lobby` keeps seats
(gaps are possible).

**`night`** – only in phase `night`, only for an **alive** viewer (players who die tonight are still
alive until dawn) whose role (for a Deli: believed role) has a night role; **in the `show` stage every
alive viewer** gets it (roles without a night action get just the common fields, so they can see what
happens in their own house); otherwise `null`. Every `night` object has these common fields:
```js
{
  mySelection: id | null,   // this viewer's final choice tonight (see table)
  canAct: bool,             // a choice is still possible (false: already chosen, passed, locked in, tipi, show stage, …)
  passed: bool,             // the viewer sent night:pass tonight
  locked: bool,             // own door locked by the Gardiyan tonight
  bounced: bool,            // show stage only: one of this viewer's trips was turned back by a locked door (false before)
  team: [], framer: null, cleaner: null, teamTarget: null,   // filled only for the evil team
  show: null | { ... },     // show stage only: this viewer's playback (below); null in walk/pick
}
```

**`night.show`** – private playback of the resolved night (§12.2), computed at the start of the show
stage; every field is optional (absent = nothing to show; `{}` = watch the quiet village). It never contains
anything the viewer may not know (covered by the leak audit in `test/narration.test.js`).
```js
show: {
  trip:  { to, kind, outcome, interior },   // my own walk (the first one, see trips)
         // kind: 'kill' | 'steal' | 'protect' | 'heal' | 'poison' | 'inspect' | 'frame' | 'clean' | 'watch'
         // outcome: 'done'    – happened (kill/steal/poison: the victim dies or was already dead; others: done)
         //          'bounced' – turned back at a locked door (any kind except watch)
         //          'saved'   – kill/poison: the victim was saved; protect/heal: MY protection stopped an attack
         //          'foiled'  – steal: the doktor's protection stopped the theft (ability kept)
         // interior: true only for kill/steal/poison that got inside (outcome != 'bounced')
  trips: [trip, trip],      // only when I walked twice (Cadı: heal and poison the same night), in order
  team:  [{ id, to, kind, outcome }],     // evil viewers only: the other evil players' trips (kind 'kill', 'frame' or 'clean')
  home:  [{ kind, result }],              // what happened in MY house, in order; visitors are anonymous
         // kind: 'attack' (vampires) | 'steal' (Hırsız) | 'poison' (Cadı) | 'protect' (a protector who saved me;
         //       listed right after the attempt it stopped; absent when I protected/healed myself)
         // result: 'died' | 'saved'; nothing is listed after 'died'; a locked house has no entries
  dead:  true,                            // I die tonight (I see it now; public at dawn)
  watch: { houseId, arrivals: [{ id, blocked }], ownerWent: id | null, died: bool, saved: bool },
         // gözcü (and a Deli who believes so): who came to the watched house (sorted by name, gözcüs never count,
         // the owner never counts), whether/where the owner went, whether a death happened in a house the gözcü
         // saw (= report deathAt non-empty), `saved` = a protection/heal really stopped an attack on the watched house's owner (green plus signs; a Deli gets a plausible random one). rüzgâr event: ids and ownerWent are null
  saved: true,                            // doktor/cadı: my protection actually stopped an attack (green plus signs)
}
```
| viewer role | extra / meaning |
|---|---|
| vampir | `mySelection` = team target; `team: [{ vampId, name, targetId }]` all living vampires (`targetId` = team target if that vampire went, else null); `teamTarget: { targetId, by, byName } \| null` (who set it); `framer` = İftiracı's frame target |
| iftiraci / temizlikci | `mySelection` = own frame / clean target; `team`, `teamTarget` as above (read-only); `framer` = frame target, `cleaner` = clean target (both visible to the whole evil team) |
| doktor / kahin / hirsiz | `mySelection` = protected / inspected / steal target |
| gozcu | `mySelection` = watched house. **No live panel any more** (the old `night.watch` field is gone): arrivals come in `show.watch` and the 14 s `watch` report |
| gardiyan | `mySelection` = the door locked tonight (chosen yesterday), `canAct: false` |
| cadi | `witch: { heal, poison, healUsed, poisonUsed, victims: [id] }` – `victims` = the vampire team target (0–1 entries) |
| others / dead | `null` |

**`day`** – in phase `day` and `trial` (else `null`):
```js
{
  secret: false,             // true on a "sis" day (events): votes/voted/sleeping are empty for everyone
  votes: { [targetId]: [{ id: voterId, w: 1|2 }] },  // w = 2 for muhtar (visible to all); {} when secret
  counts: { [targetId]: n }, // weighted vote count per player (always filled)
  voted: [voterId],          // alive voters who voted (target or sleep); [] when secret
  sleeping: [voterId],       // voted 'sleep'; [] when secret
  votedCount: 3, sleepers: 2,// counts (also when secret)
  voters: 6,                 // alive and connected players
  myVote: id | "sleep" | null,
  shortened: false,          // true once the timer dropped because everyone voted
  lock: null | { targetId: id|null, lastTargetId: id|null },  // Gardiyan only (own secret choice; lastTargetId = cannot pick)
}
```
In `trial` the object holds the re-vote (empty during the defence turns).

## 10. Announces

`announce` payload: `{ kind, title, text, ...extra }`. "All" = every seat that has a connected socket
(alive, dead and spectating-dead players; seats that left the game have no socket).
`{role}` below is ` Rolü: <Label>.` (or ` (<Label>)` for `left`) when `revealRoles` is on, else empty.

**Narration.** Every announce marked *narrated* below also carries `story: string` – 1–2 narrated
sentences (≤ 220 chars) to show as a caption under the cinematic. The same text is appended to
`state.log` as `kind:'story'`. `story` and `scene` come from the story engine (§16).
**`story` may be an empty string** (engine failure / fallback): then `title`/`text` are the plain v1
lines and `scene` is its default – always be able to show just `text`. Private announces (`seer`,
`watch`, `promote`, `locked`, `bounced`, `lockreport`, `rattled`, `steal`, `stealfail`, `saved`, `attacked`, `killed`) are never narrated: no `story`, no `scene`.

**Night results timing.** `bounced`, `seer`, `watch`, `lockreport`, `steal`/`stealfail`, `saved`, `attacked` and
`killed` are emitted **14 s into the show stage** (`NIGHT_RESULT_MS`), in that order, while `room.night.stage` is
`'show'` (a `state` follows). A player who dies tonight gets only `killed` (rule 4 of §12.2: no results). The public
`death`/`safe` comes at dawn (end of the show stage).

| kind | to | title | text | extra |
|---|---|---|---|---|
| `start` | all, narrated | "Roller dağıtıldı" | "Kartına bak ve rolünü kimseye gösterme!" | `story` (= scenario intro), `scenario: { id, name, intro } \| null` |
| `night` | all, narrated | "`<round>`. Gece" | "Köy uyuyor... Gece rolleri seçimini yapsın." | `story` |
| `death` | all, narrated | "Sabah oldu" | per death "`<name>` bu gece vampir tarafından öldürüldü!`{role}`", "… zehirlenerek öldü!`{role}`" or "… soyulup öldürüldü!`{role}`" (Hırsız), joined with a space. `{role}` is " Rolü: `<public label>`." (Vampir after a stuck frame), " Rolü bilinmiyor; çalındı." (robbed) or " Rolü bilinmiyor; izler silinmiş." (cleaned) | `targets: [{ id, cause: 'vampir' \| 'zehir' \| 'hirsiz', scene }]` (1–3 entries; `bite`\|`bats`\|`vanish` for `vampir`, `poison` for `zehir`, always `vanish` for `hirsiz`), `scene` = `targets[0].scene`, `story` |
| `safe` | all, narrated | "Sabah oldu" | "Bu gece kimse ölmedi." | `story` (also when someone was saved; who was saved is never revealed) |
| `seer` | **kahin only** (14 s into show) | "Kristal küre konuştu" | "`<name>` şu ikisinden biri: `<A>` ya da `<B>`." (role labels, e.g. "Oyuncu3 şu ikisinden biri: Köylü ya da Vampir.") | `targets: [{ id }]`, `roles: [a, b]` (role ids in the text's order; one is the real role, §12.11) |
| `saved` | **the doktor / cadı** whose protection stopped an attack (14 s into show) | doktor: "Koruman işe yaradı"; cadı: "Hayat iksiri işe yaradı" | doktor: "`<X>` bu gece saldırıya uğradı; senin koruman sayesinde kurtuldu." / self: "Bu gece evine saldırı oldu; kendini korudun ve kurtuldun."; cadı: "`<X>` bu gece vampirlerin saldırısına uğradı; hayat iksirin onu kurtardı." / self: "Vampirler bu gece evine geldi; hayat iksirin seni kurtardı." | `targets: [{ id: savedId }]` |
| `attacked` | **the saved victim** (14 s into show) | "Saldırıdan kurtuldun" | "Bu gece evinde saldırıya uğradın ama sağ kurtuldun." (who/what is not said; `show.home` has the kinds) | `targets: [{ id: ownId }]` |
| `killed` | **the dying victim** (14 s into show) | "Bu gece öldün" | vampir: "Vampirler bu gece evine girdi. Sabahı göremeyeceksin."; zehir: "Bu gece zehirlendin. Sabahı göremeyeceksin."; hirsiz: "Bu gece evine biri girdi, seni soydu ve canını aldı. Sabahı göremeyeceksin." | `targets: [{ id: ownId }]`, `cause: 'vampir' \| 'zehir' \| 'hirsiz'` |
| `watch` | **gözcü only** (14 s into show) | "Gözcünün raporu" | e.g. "Bu gece `<X>'in` evine gelenler: A, B. Kilitli kapıdan dönenler: C. `<X>` gece evinden çıkıp `<Y>'nin` evine gitti. Sabah `<Y>'nin` evinden ölüm haberi geldi." / "… kimse gelmedi."; dark: "Rüzgârlı karanlıkta bu gece `<X>'in` evine 2 gölge geldi (1 tanesi kilitli kapıdan döndü). Ev sahibi gece dışarı çıktı." | `targets: [{ id: watchedId }]`, `visitors: [id]` (everyone who came, sorted by name), `blocked: [id]` (subset turned back), `count`, `blockedCount`, `ownerOut: bool`, `ownerWent: id\|null`, `dark: bool` (ids empty/null when dark), `saved: bool` (adds " Evden yeşil ışıklar yükseldi…" sentence), `deathAt: [id]` (houses the gözcü saw – watched house or `ownerWent` – whose owner died tonight; public anyway) |
| `locked` | **owner of the locked house** | "Kapın kilitli" | "Kapın dışarıdan kilitlendi. Bu gece evinden çıkamazsın." (at night start) | `targets: [{ id: ownId }]` |
| `bounced` | **the visitor** (14 s into show; one per house) | "Kapı kilitliydi" | "`<X>'in` kapısı dışarıdan kilitliydi; eve döndün." | `targets: [{ id: houseId }]` |
| `lockreport` | **Gardiyan only** (alive at dawn) | "Gardiyanın raporu" | "Kilitlediğin kapıyı (`<X>'in` evi) bu gece N kişi zorladı." / "… kimse zorlamadı." | `targets: [{ id: lockedId }]`, `count` |
| `rattled` | **The locked-in owner only** (alive at that point; only if >=1 distinct player tried the door; the Gardiyan's survival is irrelevant) | "Kapın zorlandı" | "Bu gece kilitli kapını N kişi zorladı." (never who) | `targets: [{ id: ownerId }]`, `count` |
| `stealfail` | **the Hırsız only** (alive at dawn) | "Soygun başarısız" | "`<X>'in` evi bu gece korunuyordu; çalamadın ama hakkın yanmadı." (the doktor protected the target; a locked door gives `bounced` instead) | `targets: [{ id: targetId }]` |
| `steal` | **the Hırsız only** | "Rolü çaldın!" | "`<X>'in` evinden rolünü çaldın. Artık rolün: `<Label>`." | `targets: [{ id: victimId }]`, `role` (new role id; for a stolen Deli the believed role) |
| `event` | all, narrated (events only) | event name / town crier title | event description | `event: { id, name, desc, phase }`, `story` |
| `trial` | all, narrated (events only) | "Mahkeme kuruldu" / "Savunma" / "Mahkeme oylaması" | … | `step: 'start' \| 'defense' \| 'vote'`, `targets` (the two accused; for `defense` the speaker), `story` |
| `promote` | **the promoted helper only** | "Vampire dönüştün!" | "Son vampir de düştü. Artık sen bir vampirsin: geceleri kurbanını sen seçeceksin!" | `targets: [{ id: ownId }]` |
| `hunter` | all, narrated | "Avcı düştü!" | "`<name>` bir avcıydı. Son nefesinde birini vurabilir…" | `targets: [{ id: hunterId }]`, `story` |
| `shot` | all, narrated | "Avcının son atışı" | "`<name>` vuruldu!`{role}`" | `targets: [{ id }]`, `actorId: hunterId`, `scene: 'arrow'`, `story` |
| `nohunt` | all, narrated | "Avcı ıskaladı" | "Avcı kimseyi vurmadan gözlerini kapadı." | `story` |
| `hanged` | all, narrated | "Köy kararını verdi" | by `scene`: "`<name>` `<n>` oyla asıldı!`{role}`" (`gallows`), "… oyla köyden sürüldü!`{role}`" (`exile`), "… oyla mahzene kapatıldı!`{role}`" (`cellar`); the jester's role is always shown | `targets: [{ id }]`, `scene: 'gallows'\|'exile'\|'cellar'`, `story`, `trial: bool` (verdict of a mahkeme re-vote) |
| `nohang` | all, narrated | "Kimse asılmadı" | "Kimse oy vermedi, köy bugün kimseyi asmadı." or "Oylar eşit çıktı, köy bugün kimseyi asmadı." (v1 spelled "bu gün") | `story`, `trial: bool` |
| `sleep` | all, narrated | "Hızlı Uyu" | "Köy oy birliğiyle uyumaya karar verdi. Kimse asılmadı." | `story` |
| `left` | all, narrated | "Bir oyuncu ayrıldı" | "`<name>` oyundan ayrıldı`{role}`." | `targets: [{ id }]`, `story` (only when an alive player leaves a running game) |
| `win` | all, narrated | "Köylüler kazandı!" / "Vampirler kazandı!" / "Soytarı kazandı!" | "Tüm vampirler yok edildi. Köy kurtuldu!" / "Köyde vampirlere karşı koyacak kimse kalmadı." / "Köy Soytarı'yı astı\|köyden sürdü\|mahzene kapattı… tam da onun istediği gibi!" (verb follows the jester's `hanged` scene) | `winner: 'koylu'\|'vampir'\|'soytari'`, `targets: [{ id }]` = winners, `story`, `epilogue: { title, text, story } \| null` (= `room.epilogue`) |

Private announces are also stored as a note in the recipient's `me.notes` ("🔮 `<round>`. gece: …" seer,
"👁️ …" watch, "🔒 …" locked/bounced, "🗝️ …" lockreport/steal/stealfail, "🛡️ …" saved/attacked, "💀 …" killed,
"🧛 `<round>`. tur: Vampire dönüştün.").

Typical night sequence: `night` (start) → [`locked`] → … pick … → show stage starts (`state`) → 14 s:
[`bounced`] → [`seer`] → [`watch`] → [`lockreport`] → [`steal` | `stealfail`] → [`saved`] → [`attacked`] → [`killed`] →
dawn (5 s later): `death` | `safe` → [`promote`] → [`hunter`] | [`win`], then the `day` (or `hunter`/`ended`) state. There is no `day` announce: the day start shows in
`state.room.phase` and in the log (a `day` line, then a `story` line and a `rumor` line).

**Scene ids** (the world plays the matching cinematic variant; same for every client; unknown → default):

| announce | field | values | default |
|---|---|---|---|
| `death` | `targets[i].scene` (top-level `scene` = first target's) | `bite`, `bats`, `vanish` (vampire kill), `poison` (cadı poison) | `bite` |
| `hanged` | `scene` | `gallows` (hanged), `exile` (driven out of the village gate, never seen again), `cellar` (locked away in the cellar) | `gallows` |
| `shot` | `scene` | `arrow` | `arrow` |

The `hanged` `text` and its `death` log line ("`<round>`. gün `<name>` `<n>` oyla <verb>.`{role}`") always
use the verb of the chosen `scene`; the jester's `win` log line is "Soytarı <verb> ve kahkahalarla kazandı!".

## 11. Chat

`chat` payload `{ channel, from /* name */, fromId /* player id */, text, ts }`.

| Phase / sender | channel | recipients |
|---|---|---|
| lobby, reveal, ended | `genel` | everyone in the room (not left) |
| day, trial, hunter – alive sender | `genel` | everyone (not left), dead players included |
| night – alive vampir, iftiraci or temizlikci | `vampir` | alive evil team |
| night – other alive roles | – | refused: "Gece köy uyur, konuşamazsın." |
| night/day/trial/hunter – dead sender | `olu` | dead players only (not left) |

The sender receives their own message through the `chat` event too.

## 12. Game flow and rules

Phases: `lobby` → `game:start` → `reveal` (8 s) → `night` (stages `walk` 4 s → `pick` ≤ `nightSec` → `show` 20 s,
§12.1a) → `day` (`daySec`, or 10 s after everyone voted, or immediately if every alive connected player voted `sleep`)
→ `night` … ; `hunter` (20 s) is inserted whenever a hunter dies and the village has not already won (after the
show stage for night deaths); `trial` (2 × 15 s defence + 20 s re-vote) replaces the end of a mahkeme day (events only);
`ended` when someone wins; host `game:lobby` → `lobby`.

### 12.1 Positions and movement

- `pos = { x, y }`, both in 0..1. `(0.5, 0.5)` is the campfire. Every position the server stores is on
  the ring `0.10 ≤ hypot(x−0.5, y−0.5) ≤ 0.48`: a requested point closer than 0.10 is pushed outward
  along the same direction to 0.10 (exactly the center goes to `(0.5, 0.6)`), farther than 0.48 is
  pulled in to 0.48. Coordinates are not rounded.
- Join spawn: random angle, radius 0.22–0.42.
- Living players: `player:move` is allowed only in `lobby` and `ended`; it is rejected in `reveal`,
  `night`, `day`, `trial` and `hunter`. By day everyone stands at a fixed spot by seat (the world
  places them; `pos` is not changed by the server). Positions persist across phases (the server does
  not move anyone at phase changes; the world decides where characters are shown outside lobby/ended).
- **Ghosts**: a dead (not left) player may move in every phase of a running game (all night stages,
  `day`, `trial`, `hunter`), same clamping. The ghost position is sent only to **dead** viewers (incl.
  the ghost); living viewers keep getting the position the player had at death. When the game ends
  the ghost position becomes the player's `pos` for everyone (and stays in the lobby).

### 12.1a Night stages: walk → pick → show

`phase` stays `'night'`; `room.night = { stage, pickUntil, showUntil }` (§9).
- **walk** (`NIGHT_WALK_MS` = 4000): everyone walks home. Picks (`night:select`, `night:pass`) and the
  vampire chat are already allowed. `room.timerFrom = nightStart + 4000` (unchanged for the whole night).
  A `state` is sent when the stage becomes `pick`.
- **pick** (`nightSec`, default 20 s, `kisa-gece`: half): every night role makes its final pick or
  passes. Nothing moves in the village. `room.deadline = room.night.pickUntil`. **Early end:** when no
  living player is still awaited – awaited = alive, connected (bots always count as connected),
  `night.canAct` true (i.e. not locked in, not stopped by tipi, has an unused choice, has not passed) –
  the stage ends `PICK_GRACE_MS` (1.5 s) later, but never before the walk is over; `pickUntil`,
  `showUntil` and `deadline` move earlier accordingly. If someone becomes awaited again before that
  (a human reconnects, an İftiracı is promoted because the last vampire left), the original `pickUntil`
  is restored. Vampires: once the team target is set no vampire is awaited; the Cadı is awaited while she
  still has a usable potion (she must pass to keep it).
- **show** (`NIGHT_SHOW_MS` = 20000): the server resolves the night at the start of this stage (§12.2),
  every alive viewer gets `state.night.show`, `room.deadline = room.night.showUntil`. No picks. 14 s in,
  the private results are sent (§10). At the end: dawn – public `death`/`safe`, promotion, hunter/win,
  then `day`. Client playback (world bundle, `SHOW_S` = 20 must match `NIGHT_SHOW_MS`): every walk is shown in
  full (door → real route → in / knock / back window → home); times are derived from the path length at a
  natural pace (a run for far houses, never a vanish on the way out), so the scenes the private results talk about
  end by ≈ 13 s; the walk home ends by ≈ 19.4 s, and if it does not fit it may end in a mist fade near the house.

Show the pick countdown from `timerFrom` to `room.night.pickUntil` (before `timerFrom`: full /
"eve dönülüyor"). `timerFrom` and `room.night` are `null` in every other phase; the day timer, the 10 s
"everyone voted" shortening and the hunter timer are unchanged.

### 12.2 Night resolution (at the start of the show stage)

Every accepted choice is a planned **trip** to the target's house (self-targets – doktor or cadı heal on
self, gözcü on own house – are no trip). The gözcü's trip only looks from outside: it is never blocked
and never counts as a visitor. A trip to a **locked** house is turned back (`show.trip.outcome:
'bounced'`, `bounced` announce at 14 s) and has no effect (a turned-back potion is not spent; a
turned-back Hırsız keeps their ability). A player who left the game before the show counts as dead and
does nothing. Order:
1. The Gardiyan's lock (chosen by day) holds all night: the locked-in owner does nothing; visitors bounce.
2. Kills, in this order:
   a. the vampires' team target, if at least one living vampire reached it (vampires never attack two houses);
   b. the Hırsız – **unless the vampires killed the Hırsız in (a)**: then no theft, no trip, the target lives;
      if the target already died in (a) the Hırsız still takes the role (cause stays `vampir`);
   c. the Cadı's poison – **unless the Cadı was killed in (a) or (b)**: then no poison, no trip, not spent;
      poison on someone already dead tonight changes nothing (but is spent).
3. The doktor's protection and the Cadı's heal count **unless their owner is killed by the vampires' attack**
   (a doktor or cadı killed later by the Hırsız still protected). Protection stops any kill (attack, theft,
   poison); the heal stops the vampire attack only. Self-protection / self-heal saves from the vampires.
4. **Anyone killed this night never left home**: their own non-kill action is cancelled – no trip, no
   result: inspect (kahin), watch (gözcü), frame (İftiracı: the kahin then sees the real roles, and no public `vampir` reveal), clean (Temizlikçi: the victim's role is revealed normally), the
   Gardiyan's lock report, every fake action of a Deli; protect/heal per rule 3. Kill actions stay: a
   vampire killed by the Hırsız after attacking still attacked; a Hırsız poisoned after stealing still
   killed the target (but gets no role, see §12.9).
5. Only actions that really happen create trips (what `show` and a gözcü can see).

Deaths are then known to the affected players at once (`show.dead`, `killed` at 14 s) and become public
at dawn exactly as before: `death` (targets in resolution order: `vampir`, `hirsiz`, `zehir`) or `safe`.
Private results at 14 s go only to players who survive the night: `seer` (§12.11), `watch`, `lockreport`
(and the Deli's fabricated versions, §12.8), the Hırsız's `steal`/`stealfail` (the takeover happens at
that moment), `saved`, `attacked`. At dawn: promotion check (§12.3), then hunter / win check, then `day`.

### 12.3 Helper promotion

Whenever no vampire is alive but a helper is, **one** helper immediately becomes a `vampir` (the İftiracı first, otherwise the Temizlikçi; the other helper stays a helper and may be promoted later)
(private `promote` announce + note). This is checked after night deaths (at dawn), after a hanging, after
the hunter's shot and when a player leaves (any phase of a running game, e.g. the last vampire leaving in
the pick stage: the new vampire can still pick a victim that same night; their frame for that night is
dropped). Vampires and İftiracı cannot target each other, so the İftiracı is the last evil player when
this happens.

### 12.4 Win conditions (checked after every death)

- Village (`koylu`) wins when no evil player (vampir, iftiraci, temizlikci) is alive.
- Vampire team (`vampir`) wins when alive evil ≥ alive others.
- Soytarı (`soytari`) wins alone when hanged (game ends immediately).
- If a hunter dies and the village has not already won, the hunter shoots first, then the win check runs.
- `room.winners` = player ids whose team is the winner **and who did not leave**.

### 12.5 Disconnects

- lobby/ended: a disconnected seat stays **120 s** (`connected:false`), then is removed. Reconnecting in
  time (`session:resume`/`room:join`) keeps it.
- running game: the seat stays (`connected:false`); the player keeps their role and can rejoin at
  any time with the same account. Timers keep running while they are away. A room in which nobody is
  connected is deleted after 10 minutes. During the day, disconnected players are not counted as
  voters; during the pick stage they are not awaited (§12.1a).
- Room closing: bots never keep a room alive. When no human seat is left (every human removed in
  the lobby/ended, or marked `left` in a running game) the room is closed immediately, in any phase.
  If humans still hold seats but none is connected, the 10-minute rule above applies.
- **Host**: the host role moves only when the host leaves explicitly (`room:leave`), is removed, or has
  been disconnected for `HOST_GRACE_MS` = 60 s without a break (lobby and in game). A host who reconnects
  within 60 s simply keeps it. Meanwhile the others just wait (only the host can start / change
  settings / add bots). After 60 s the first connected **human** seat becomes host (log entry
  "`<name>` artık oda sahibi."); if no other human is connected then, the host id stays on the absent
  human and moves as soon as another human connects (or stays if the host comes back first). A
  returning former host does not get the role back. A bot never becomes host.

### 12.6 Gözcü

No live panel. In the show stage the gözcü sees `show.watch` (who came to the watched house, sorted by
name, `blocked` if turned back by a lock; whether the owner went out and where; `died`), and 14 s into the
show gets the `watch` report stating the same in words plus `deathAt`. Only trips that really happen
count (§12.2 rule 5). It never shows roles or what anyone did.

### 12.7 Gardiyan

By day the Gardiyan picks a door with `day:lock` (changeable until the day ends, `null` clears;
not own door; not the door locked the previous night; never on night 1). At night start the lock
applies if the Gardiyan is alive: the owner gets `locked` and cannot act (`night.locked`, error on
`night:select`/`night:pass`), every trip to that house is turned back in the show (`bounced` to the
visitor at 14 s; a real gözcü sees it with `blocked: true`). The lock holds all night even if the
Gardiyan dies; the `lockreport` (number of distinct people who tried, not who) goes to the Gardiyan
only if they survive the night. Locks are secret: never in public texts, never given to the story engine.

### 12.8 Deli

Dealt as `deli` but told a believed role F, chosen at deal time at random among doktor, kahin,
gozcu, gardiyan **enabled in the room settings** (if none: kahin). Until their real role is public
(death with `revealRoles` – not when robbed, see §12.9 –, or game end) everything the Deli receives is
exactly what a real F gets: `me.role`/own `players[i].role` = F, the same `night`/`day` fields (incl.
`show` shapes and pass behaviour), acks, error texts, private announces and notes, at the same times. Their
choices have no real effect: a "doktor" protects nobody (never `saved`), a "kahin" gets two random roles
(same shape and mix as a real result, fixed per (Deli, target)), a "gözcü" gets an invented `show.watch`
and matching report (0–2 random living visitors, owner sometimes out), a "gardiyan" locks nothing and gets
a random small count. They still walk: their trip is real (seen by a real gözcü, bounced by a real lock),
unless they die that night (§12.2 rule 4). Publicly they are `deli` (team `koylu`); a real kahin sees them as
their believed role. Once the role `deli` is visible, that `players[i]` entry also carries `fakeRole` (the
believed role) for the end screen ("Deli (kendini Doktor sanıyordu)"). Otherwise **the UI needs nothing
special for the Deli.**

### 12.9 Hırsız

Neutral until the theft: counts as non-evil for parity, the kahin sees the role `hirsiz`, and loses if the
game ends before a successful theft (team `hirsiz`, never in `winners`). At night (any night,
`night:select`, final per night; `night:pass` = wait for another night) the thief goes to a living
player's house. If the thief reached it (not locked), was not killed by the vampires (§12.2 2b), survives
the night, and the target dies that night (by the thief – unless protected by the doktor – or killed by
the vampires first), the thief **takes over the victim's role as it is** (used potions stay used; a stolen
Deli stays Deli with the same believed role; a stolen vampir/İftiracı joins the evil team with mutual
visibility and the vampire chat) and gets the private `steal` announce (`role` = new role) 14 s into the
show; `me.role` changes at that moment. If the doktor's protection foiled it the thief gets the private
`stealfail` (ability kept). When the victim died *of the theft* (`cause: hirsiz`) their role stays **hidden
from everyone until the game ends** even with `revealRoles` on (death text "Rolü bilinmiyor; çalındı.",
`viewFor` role `null` apart from the victim's own view and normal evil-team visibility, no role in the
narration; a robbed Deli keeps seeing the believed role); a victim killed by another cause the same night
is revealed by the normal rule. A bounced or doktor-foiled attempt keeps the ability. A thief killed by the
vampires never left home (target lives); a thief poisoned after stealing: the target dies, no takeover.
A stolen Avcı does not trigger a last shot for the robbed victim (the role lives on in the thief, who gets
the hunter phase on their own death).

### 12.10 Village events and mahkeme (built, **off by default**, hidden in the UI)

Setting `events: 'some' | 'often'` enables them (default `'off'`). At most one event per round,
never in round 1, at least 3 (`some`) / 2 (`often`) rounds apart, never the same twice in a row;
`tipi` never when the village side is at most one more than the evil side; `mahkeme` only with ≥ 6
living players. While active `room.event = { id, name, desc, phase }` and a public `event` announce
starts it. Effects: `tipi` (night) non-evil roles cannot act (and are not awaited in the pick stage); `ruzgar` (night) the gözcü sees
anonymous visitors; `kisa-gece` pick stage halved (walk and show unchanged); `ayaz` day length halved; `sis` (day) secret votes
(`day.secret`); `mahkeme` (day): at day end, if at least two players got votes and the top count
beats "Hızlı Uyu", the two most-voted (ties for a place broken by lot) each get a 15 s defence turn
(phase `trial`, `room.trial`), then a 20 s re-vote between only those two (no Hızlı Uyu; 3 s after
everyone voted); a single top count hangs, a tie or no votes → nobody (`hanged`/`nohang` with
`trial: true`). Events work with the staged night as described (no other change).

### 12.11 Kahin (detective)

The kahin's result (`seer`, 14 s into the show, only if the kahin reached the house and survives the
night) is **two roles, one of them the target's real role** at resolution time, in random order:
`roles: [a, b]`, text "`<X>` şu ikisinden biri: `<A>` ya da `<B>`.". The real role is the role the
target holds (an un-stolen Hırsız shows as `hirsiz`, the İftiracı as `iftiraci`, a promoted İftiracı as
`vampir`); **a Deli shows as the role they believe they have**. The other role (decoy):
- is fixed per (kahin, target) for the whole game: inspecting the same person again gives the same pair
  (a new decoy is drawn only if the target's role has changed to the old decoy);
- is never the real role and never `kahin`, and never `deli`;
- comes from the roles that can be in this game (`vampir`, `koylu` and every enabled role that can be
  dealt with this player count): with probability **1/2 from the opposite alignment** (innocent target →
  `vampir`, or `iftiraci`/`temizlikci` if they can be in the game; evil target → an innocent role), otherwise from the
  same alignment (if one side has no candidate, the other is used). "Evil" = vampir, iftiraci, temizlikci; everything
  else is innocent;
- **an İftiracı's frame** (İftiracı alive through the night and reached the house, §12.2) replaces the decoy
  with `vampir` for that night only.
A Deli who believes they are kahin gets two random roles in the same shape and mix (a random role and its
decoy, fixed per (Deli, target)).

### 12.12 İftiracı: the slander sticks

Besides the Kahin effect, a frame that really happened on night N (İftiracı alive through the night,
reached the house) makes the framed player publicly **`vampir`** if they **die that same night** (any cause)
or are **voted out on day N** (incl. a mahkeme re-vote); it expires when night N+1 starts. "Publicly" =
wherever the room reveals roles (`revealRoles` on): `players[i].role` for every viewer (evil team and dead
viewers included; only the player's own seat shows the truth), the `death`/`hanged` text ("Rolü: Vampir."),
the log and the story engine's input. The lie holds until `ended`, where the real role is shown and that
entry carries `framed: true`. Exceptions (truth as today): an Avcı (the `hunter` announce reveals it), a
hanged Soytarı, and a victim whose role is hidden (robbed or cleaned stays hidden). With `revealRoles` off
nothing is revealed and `framed` stays false. All rules (win checks, stats, the Hırsız taking the real role,
the Deli, hunter, jester) use the real role. A framed Deli is shown as `vampir` to others; they themselves
see `deli`.

### 12.13 Temizlikçi (`temizlikci`, evil helper, 7+ players)

Night: picks a living non-evil player (not self; final; `night:pass` allowed) and goes there – a real trip,
`show.trip.kind: 'clean'` (walk in and out, `interior: false`; in `show.team` for the evil team), seen by a
gözcü, bounced by a lock, cancelled if the Temizlikçi dies that night. If that player dies this night (any
cause) their role is **not revealed** until the game ends: death text " Rolü bilinmiyor; izler silinmiş.",
`players[i].role` `null` for everyone but themselves (and the evil team if the victim were evil), story input
`hidden: 'temizlikci'`, no role in log or narration; at `ended` the real role and `cleaned: true`. A robbed
victim keeps the Hırsız wording. A cleaned Avcı still gets the last shot, and the `hunter` announce reveals
the Avcı (from then on `players[i].role` = `avci`). The Temizlikçi sees and is seen by the evil team (role,
team target, `framer`/`cleaner` targets, vampire chat), counts as evil for parity, cannot be chosen by the
vampires, and is shown to the Kahin as `temizlikci`. Bots: a Temizlikçi bot goes to the team's kill target
when there is one (otherwise a random non-evil player), 5–7.5 s into the pick stage.

## 13. Stats

When a game ends, every seat with a role gets `games + 1` and `teams[team].games + 1`;
`wins + 1` and `teams[team].wins + 1` if it is in `room.winners`. Team is `teamOf(final role)`
(İftiracı, Temizlikçi and promoted helpers → `vampir`, Soytarı → `soytari`, Deli → `koylu`, Hırsız → the team of the
stolen role; a Hırsız who never stole counts only in the totals, no team bucket; all others → `koylu`). Players who
left mid-game count as a loss. Recording happens in the background; a storage failure is logged and
never blocks the room. `/api/me` shows the new numbers a moment after the `win` announce.

**Games with bots are recorded too.** The human players of a game that had bots are written to
their accounts' stats and the leaderboard like any other game (bots have no account, so they are
never recorded). `hooks.finished` still reports `ranked: false` for such games, so a separate filter
can be added at that one place in `server.js` if bot games should ever be counted apart.

## 14. Static files, health, caching

- `GET /healthz` → `{ ok: true, rooms: <number>, store: 'json' | 'postgres', ai? }` (no-store). `ai` only when the
  server has an AI key: aggregate numbers only – `{ enabled, model, day, callsToday, dailyLimit, calls, ok, inputTokens,
  outputTokens, cacheWriteTokens, cacheReadTokens, costUsd, failures: { reason: n } }` (no content).
- `GET /lan.json` → `{ addresses: ["192.168.1.20", ...], port }` (LAN IPv4 addresses for invite links).
- Static files from `public/`, gzip-compressed when the client accepts it, with ETag/Last-Modified:
  - `/assets/**` → `Cache-Control: public, max-age=3600, must-revalidate`
  - `/build/**` → `Cache-Control: public, max-age=300, must-revalidate`
  - everything else (`/`, `index.html`, `app.js`, `ui/**`, css, …) → `Cache-Control: no-cache`
    (always revalidated, 304 when unchanged).
  - `.glb` is served as `model/gltf-binary`.
- Server environment: `PORT` (default 3000), `DATA_DIR` (JSON store folder, default `./data`),
  `DATABASE_URL` (use Postgres instead), `DATABASE_SSL` (`off`|`on`|`no-verify`, default automatic),
  `CLIENT_ORIGIN`, `TRUST_PROXY`; smart bots: `ANTHROPIC_API_KEY`, `AI_BOTS`, `AI_BOT_MODEL`, `AI_BOT_EFFORT`,
  `AI_MAX_TOKENS`, `AI_DAILY_CALL_LIMIT`, `AI_GAME_CALL_LIMIT`, `AI_BOT_CALL_LIMIT`, `AI_CONCURRENCY`, `AI_TIMEOUT_MS`;
  post-game review: `AI_REVIEW`, `AI_REVIEW_MODEL`, `AI_REVIEW_DAILY_LIMIT`, `AI_REVIEW_EFFORT`, `ADMIN_TOKEN` (enables `GET /api/admin/ai-reviews[/:id]` and `GET /api/admin/game-logs[/:id]`, Bearer; see `docs/GAME-LOGS.md`);
  `GAME_LOGS=off` stops saving game histories (defaults in `docs/AI-BOTS.md`);
  game-log analysis on the server: `AI_ANALYZE`, `AI_ANALYZE_MODEL`, `AI_ANALYZE_DAILY_LIMIT`, `AI_ANALYZE_EFFORT` (`POST /api/admin/game-logs/:id/analyze`, `GET .../:id/analysis`; see `docs/GAME-LOGS.md`).

## 15. Client recipes

- **Start-up**: token in `localStorage` → `GET /api/me`; 401 → login screen. Connect the socket only
  with a valid token; on `connect_error` `'auth'` drop the token and show login.
- **Reload / reconnect**: remember the last `roomId`; after `connect` call
  `session:resume { roomId }`; `{ok:false}` → show the menu. socket.io-client auto-reconnects after
  network drops – call `session:resume` again on every `connect` event.
- **Invite link**: `room:join { roomId, password }` handles both new players and returning ones
  (`resumed:true`).
- **Look editor**: outside a room `PATCH /api/me`; inside a room (lobby/ended) `player:look`
  (saves to the profile too). In-game the look is fixed.
- **Countdown**: `remaining = room.deadline - (Date.now() + (serverNow - receivedAt))`; at night in the
  `walk`/`pick` stages show `min(remaining, room.night.pickUntil - timerFrom)` so the count only starts after
  the walk home; in `show` there is no pick countdown (the show ends at `room.night.showUntil` = `deadline`) (§12.1a).
- **Night HUD**: `walk`/`pick` → prompt + countdown, offer "Bu gece bekle" (`night:pass`) while
  `night.canAct`; `show` → play back `night.show`, then the result cards (announces at 14 s); dawn = `death`/`safe`.

## 16. Story: scenario, jobs, scenes, chronicle

The server narrates every game with the story engine ("Köy Günlüğü", `lib/story`, see `docs/STORY.md`).
It is fed **public information only**: round numbers, names, jobs, public deaths and their cause,
the role of a dead player only when the room reveals roles (`revealRoles`, or a hanged Soytarı),
the hunter event, final day ballots, every public vote change (with time left), counts of public
day-chat messages of living players (never the `vampir` or `olu` channels), leaves and the winner.
It never receives night selections, seer/watch results or promotions. Narration can therefore never
reveal a hidden role or night action (covered by `test/narration.test.js`).

- **Scenario** – one per game, chosen from the story seed at `game:start`:
  `state.room.scenario = { id, name, intro }` (also in the `start` announce) until `game:lobby`.
  Ids: `sisli-vadi` (Sisli Vadi), `kanli-ay` (Kanlı Ay), `hasat-senligi` (Hasat Şenliği), `kara-kis`
  (Kara Kış), `veba-soylentisi` (Veba Söylentisi), `panayir` (Panayır Haftası). `intro` is the narrated
  opening (also the `start` `story`). Use the id for tint/icon; unknown ids must be tolerated.
- **Jobs** – at `game:start` every seat gets a public, purely cosmetic village job
  `players[i].job = { id, label }` (e.g. `{ id: 'terzi', label: 'Terzi' }`, `{ id: 'firinci', label: 'Fırıncı' }`;
  32 jobs, ASCII ids, Turkish labels, unique within a game). The same for every viewer, `null` in the
  lobby, cleared by `game:lobby`. Jobs depend only on the story seed and the join order – never on
  roles – and never use role words. Show as "Ali · Terzi" (story flavour, not a role hint).
- **Scenes** – see §10 (`death` per target, `hanged`, `shot`).
- **Chronicle** – `state.log` entries with `kind:'story'` in order are the tale of the game; one
  `kind:'rumor'` entry is added at each day start (town crier); at the end one `kind:'epilogue'` entry
  (= `room.epilogue.story`, a paragraph of typically 400–900 characters).
  `room.epilogue = { title: 'Köy Günlüğü', text: '<n> gece, <k> kayıp. Kazanan: <Köylüler|Vampirler|Soytarı>.', story }`.
- **Fallback** – if the engine fails, the game continues with the plain v1 texts: `story: ''`, default
  scenes, no rumour, `room.epilogue: null`, and `room.scenario` may be `null`. Clients must render
  without any of these fields.
- **Seed** – the room keeps the seed of the current game (server-side only, for reproducing a game).
- **Round 4/5 hooks** – the engine is also called for `event` ({ round, id }), `trial` ({ round, defendants }),
  `defense` ({ round, id }) and the re-vote verdict (`trial: true`); on sis days no voter data is passed.
  Closing lines of events (`eventEnd`) are logged as separate `kind:'story'` lines. Locks, night choices,
  the Deli's believed role and thefts are never passed; a theft is only a public death with cause `hirsiz`.

## 17. Bots

Bots let one person start and test a full game alone (`MIN_PLAYERS` counts bots).

- **Adding/removing:** `room:addBot` (host, lobby, room not full) and `room:kick { playerId }` (§7).
  Bots stay in the room across `game:lobby`.
- **Identity:** `players[i].bot === true` for every viewer. Name `"Bot <Turkish first name>"`
  (e.g. "Bot Ayşe"), unique in the room (a number is appended if all names are taken). Random look
  with a free colour, a seat (house) like anyone else, `connected: true` always, no account
  (`userId: null`, no stats), no socket. A bot's `job` and narration work like a human's.
  Bots are dealt roles exactly like humans; their roles are hidden by the same rules (§9).
- **Behaviour** (server-side, through the same game actions as human players, so every rule,
  validation and the story/rumour record apply unchanged):
  - night: every living bot that can act (a Deli bot: as its believed role) decides once in the pick
    stage, 2–8 s after the walk (`timerFrom`) like a human (vampires/İftiracı at 2–5 s, the cadı at
    5.5–8 s so she can see the victim; always before the pick time runs out), and **sends `night:pass`
    when it has nothing (more) to do** (Hırsız not stealing tonight, cadı keeping a potion), so a night
    decided only by bots ends early (§12.1a). A bot that becomes able to act during the pick stage (e.g.
    a promoted İftiracı) is scheduled then. Vampires pick a living non-evil
    player unless the team target is already set (then it simply goes there); Hırsız bots steal on a random night (35 %);
    Gardiyan bots pick a door by day; İftiracı frames a
    living non-evil player; doktor protects a random living player (self allowed); kahin inspects
    someone not inspected before; gözcü watches someone else; cadı heals the victim with 40 %
    chance and poisons a random player with 12 % chance per night while the potions last.
    Evil bots never target their own team.
  - day: each living bot votes for a random living player (10 % "Hızlı Uyu") at 15–60 % of the
    day length, sometimes (15 %) changes the vote late; may say one short canned line in the public
    channel. Bots do not move by day. The vote does **not** use what the bot learned at night.
  - hunter: a bot hunter shoots a random living player after a few seconds.
  - lobby / ended: now and then a bot strolls. Lobby and end-screen chat is templated, never model-driven (`lib/banter.js`): a newly added bot says "Selamün aleyküm"; humans' greetings get one or two "Aleyküm selam"; the owner account (`ahmetchain`) is welcomed once per room session; the end screen gets 1-3 "gg"/"ezz" lines. Nothing of this runs during night/day/trial/hunter.
  - pace: while a human is alive and connected, delays scale with the room's timers; once no
    living, connected human remains, day and hunter delays shrink to 35 % so a watching (dead)
    player sees the game finish quickly. Night pace is not scaled (bots decide in 2–8 s anyway).
- **Chat:** bots send ordinary `chat` events (channel `genel`, only in lobby and by day, only while
  alive). Lines come from a fixed list chosen independently of role and night results, contain no
  role words and never reveal anything. Bots never use the `vampir` or `olu` channels.
- **Smart bots** (`settings.smartBots`, only when `room.aiAvailable`; details `docs/AI-BOTS.md`): the decisions
  above come from Claude (Haiku) instead of chance, through the same game actions and within the same windows
  (night: answer applied 1.2–4.5 s after the walk, random choice at `min(walk end + 7 s (Cadı 9 s), pick end − 1.5 s)`;
  day: a vote turn at 30–55 % of the day, random vote at 88 % if no turn succeeded). Bots chat in `genel` by day
  (and evil bots whisper in `vampir` at night): a bot addressed by name (with or without "Bot ", any case) always
  answers; up to two bots react to an unaddressed human line; bot→bot chains are short and cooled down.
  `room.typing` lists bots writing a reply. A bot's prompt is built only from its own `viewFor`, the chat its seat
  received and its own memory note. Any API error, timeout, refusal, malformed answer or exhausted budget →
  the random behaviour above (or silence; a bot addressed by a human still sends a short neutral line).
  The canned-line rule above applies to random bots only.
- **Robustness:** all bot timers are dropped on every phase change, game end, `game:lobby`, kick and
  room close; a failing bot action is logged and the phase still ends by its timer.
- **Typical length** (round 6, default timers `nightSec` 20, `daySec` 120), 1 human + 6 bots, 40
  simulated games each: a night is 4 s walk + ≈ 5–8 s pick (bots' decisions + 1.5 s grace) + 20 s show
  ≈ **25 s on average (min 18 s, max 27.5 s)** when the human has no night role or picks within ~6 s
  (doktor + kahin, or all roles on); a human with a night role who neither picks nor passes keeps the
  pick stage at the full `nightSec`. Whole game ≈ 5 min (4.7 min with all roles on).

