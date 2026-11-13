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
| `FRAMER_MIN_PLAYERS` | 7 | İftiracı is only dealt with at least this many players |
| vampire count | 1 for 5–9 players, 2 for 10–14, 3 for 15–20 | (`room.vampireCount`) |
| `REVEAL_MS` | 8000 | role-card phase before night 1 |
| `ALL_VOTED_MS` | 10000 | day timer drops to this when every alive connected player has voted |
| `HUNTER_MS` | 20000 | hunter's last-shot time |
| `NIGHT_WALK_MS` | 4000 | walk-home lead-in at the start of every night, before the visible night countdown (`room.timerFrom`) |
| `LOBBY_GRACE_MS` | 30000 | a player disconnected in `lobby`/`ended` is removed after this |
| `EMPTY_ROOM_MS` | 600000 | room is deleted after 10 min with nobody connected (immediately when it has no players) |
| `nightSec` | 15–120, default 30 | room setting |
| `daySec` | 30–300, default 120 | room setting |
| `COLOR_COUNT` | 20 | `look.color` ∈ 0..19 (unique per room) |
| `HAT_COUNT` | 9 | `look.hat` ∈ 0..8 (0 = no hat) |
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
| `vampir` | Vampir | `vampir` | pick a kill target (not self, not another vampire, not İftiracı) | always (1–3, see §2) |
| `iftiraci` | İftiracı | `vampir` | frame a living non-evil player (not self) | setting on **and** ≥ 7 players; exactly 1, in addition to the vampires |
| `doktor` | Doktor | `koylu` | protect any living player (self allowed) | setting (default on) |
| `kahin` | Kahin | `koylu` | inspect a living player (not self) | setting (default on) |
| `gozcu` | Gözcü | `koylu` | watch any living player's house (self allowed) | setting (default off) |
| `cadi` | Cadı | `koylu` | `heal` (once per game) / `poison` (once per game, not self) | setting (default off) |
| `avci` | Avcı | `koylu` | none; last shot when killed | setting (default off) |
| `muhtar` | Muhtar | `koylu` | none; day vote counts 2 | setting (default off) |
| `soytari` | Soytarı | `soytari` | none; wins alone if hanged | setting (default off) |
| `koylu` | Köylü | `koylu` | none | fills the rest |

"Evil" / vampire team = `vampir` + `iftiraci`.

Dealing (`room.distribution` shows the result for the current player count):
`[vampires..., iftiraci?, specials..., koylu...]`. Enabled specials are added in the order
**doktor, kahin, gozcu, cadi, avci, muhtar, soytari** while there is room; at least one plain
`koylu` always remains (room for specials = players − vampires − iftiracı − 1).
Examples: 7 players with doktor, kahin, gözcü, iftiracı on → `vampir, iftiraci, doktor, kahin, gozcu, koylu, koylu`;
6 players with iftiracı on → no İftiracı.

## 4. Room settings

```js
settings = {
  nightSec: 30,          // 15..120 (integers, clamped)
  daySec: 120,           // 30..300
  revealRoles: true,     // reveal the role of players who die / leave
  roles: {               // all 8 keys always present, booleans
    doktor: true, kahin: true, gozcu: false, cadi: false,
    avci: false, muhtar: false, soytari: false, iftiraci: false,
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
| `night:select` | `{ targetId, action? }` | alive night roles, night | see below |
| `hunter:shoot` | `{ targetId }` | the dying hunter, phase `hunter` | "Şu an atış zamanı değil.", "Sadece avcı ateş edebilir.", "Kendini vuramazsın.", "Bu oyuncu vurulamaz." |
| `day:vote` | `{ targetId }` = player id, `null` (withdraw) or `'sleep'` | alive, day | "Oylama sadece gündüz yapılır.", "Ölüler oy veremez.", "Bu oyuncuya oy verilemez.", "Kendine oy veremezsin." Voting the same value again withdraws it. |
| `player:look` | `{ color?, hat?, skin? }` | lobby or ended | "Görünüm sadece lobide değiştirilebilir.", "Bu renk başka bir oyuncuda." Values are parsed as integers and clamped to range (unparsable → unchanged). On success the full look is also saved to the account profile (background, failures only logged). |
| `player:move` | `{ x, y }` | `lobby` and `ended` only (dead players too) | "Şu an meydanda dolaşamazsın." in every other phase (`reveal`, `night`, `day`, `hunter`; the UI need not show it), "Geçersiz konum." Every move is applied (clamped to the ring, §12.1); the resulting `state` broadcast is coalesced (≤ 1 per 100 ms per room). |
| `chat:send` | `{ text }` | see §11 | "Biraz yavaş yaz :)", "Boş mesaj gönderilemez.", "Gece köy uyur, konuşamazsın." |

**`night:select`** `{ targetId, action?: 'heal' | 'poison' }` (action only for Cadı; anything other
than `'poison'` means `'heal'`). Selecting the same target again clears the selection. Selections can
be changed until the night ends. Errors:
- any role: "Şu an gece değil.", "Ölüler seçim yapamaz.", "Bu oyuncu seçilemez." (target missing or dead)
- vampir: "Vampir kendini seçemez.", "Diğer vampirleri seçemezsin.", "İftiracı sizin takımınızda, onu seçemezsin."
- iftiraci: "Kendine iftira atamazsın.", "Takım arkadaşına iftira atamazsın."
- kahin: "Kendi geleceğine bakamazsın."
- cadi: "Hayat iksirini zaten kullandın.", "Zehri zaten kullandın.", "Kendini zehirleyemezsin."
  (heal and poison cannot point at the same player; setting one on a player clears the other)
- koylu: "Köylüler gece seçim yapamaz."
- avci, muhtar, soytari: "Bu rolün gece görevi yok, sabahı bekle."
- doktor and gözcü may select themselves.

## 8. Server → client events

| Event | Payload | When |
|---|---|---|
| `state` | the viewer's view (§9) | after every change in the room, to every seated socket (each gets its own view) |
| `announce` | `{ kind, title, text, ...extra }` (§10) | game events; some kinds only to one player |
| `chat` | `{ channel, from, fromId, text, ts }` (§11) | chat message for this viewer |
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
    phase: "lobby" | "reveal" | "night" | "day" | "hunter" | "ended",
    round: 0,                          // night/day number, 0 in lobby, increments at each night start
    deadline: 1763030030000 | null,    // when the current timed phase really ends (null in lobby/ended)
    timerFrom: 1763030004000 | null,   // night only: when the visible countdown starts (= night start + 4000 ms
                                       // walk-home lead-in); null in every other phase (count down from phase start)
    hostId: "player-uuid" | null,
    settings: { nightSec, daySec, revealRoles, roles: {8 keys} },   // §4
    hasPassword: false,
    winner: null | "koylu" | "vampir" | "soytari",                  // set in 'ended'
    winners: ["player-uuid", ...],      // player ids of the winning side still in the game (not left); [] until ended
    minPlayers: 5, maxPlayers: 20,
    vampireCount: 1,                   // computed from the current number of non-left seats
    distribution: ["vampir", "doktor", "kahin", "koylu", "koylu"],  // roles that would be dealt for the current
                                       // number of non-left seats (lobby preview; recomputed, so it shrinks when players leave mid-game)
    hunterId: "player-uuid" | null,    // the hunter who is shooting (phase 'hunter')
    scenario: null | { id, name, intro },    // theme of this game (§16); set at game:start, null again after game:lobby
    epilogue: null | { title, text, story }, // "Köy Günlüğü" recap (§16); only in phase 'ended' (null on fallback)
  },
  me: {                                // null only if the viewer has no seat (should not happen)
    id: "player-uuid",
    userId: "account-uuid",
    name: "İrem",
    seat: 0,
    job: null | { id, label },         // same as players[i].job for this seat
    role: null | "<role id>",          // null in lobby
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
      look: { color: 0..19, hat: 0..8, skin: 0..11 },
      pos: { x: 0..1, y: 0..1 },       // normalized plaza coordinates, see §12.1
    },
  ],
  log: [{ text, kind, ts }],           // public room log, last 250 (oldest dropped first), identical for every viewer.
                                       // kind: info | night | day | death | safe | win  – factual lines (as v1)
                                       //       story    – one narrated line per narrated announce, in order (= the chronicle)
                                       //       rumor    – one town-crier rumour at each day start (missing on fallback)
                                       //       epilogue – the end-of-game recap (same text as room.epilogue.story)
  night: null | { ... },               // see below
  day: null | { ... },                 // see below
}
```

**Role visibility** (`players[i].role`), first matching rule wins:
1. own seat → own role;
2. phase `ended` → everyone's role;
3. viewer is evil (vampir/iftiraci) and the player is evil → their role (vampires and İftiracı see
   each other, both ways);
4. player is dead (or left) and `settings.revealRoles` → their role;
5. otherwise `null`.

Note: when İftiracı is promoted, their role becomes `vampir` everywhere (also in the end-of-game reveal).

**`seat`**: the smallest non-negative integer not used by another seat in the room at join time.
Seats freed in the lobby are reused; seats never change during a game; `game:lobby` keeps seats
(gaps are possible).

**`night`** – only in phase `night`, only for an **alive** viewer whose role has a night action;
otherwise `null`:

| viewer role | `night` |
|---|---|
| vampir | `{ mySelection: id\|null, team: [{ vampId, name, targetId }], framer: id\|null }` – `team` = all current vampire picks (including own), `framer` = İftiracı's current frame target |
| iftiraci | `{ mySelection: frameTargetId\|null, team: [...vampire picks, read-only], framer: frameTargetId\|null }` |
| doktor | `{ mySelection: protectedId\|null, team: [], framer: null }` |
| kahin | `{ mySelection: inspectedId\|null, team: [], framer: null }` |
| gozcu | `{ mySelection: watchedId\|null, team: [], framer: null }` |
| cadi | `{ mySelection: null, team: [], framer: null, witch: { heal: id\|null, poison: id\|null, healUsed: bool, poisonUsed: bool, victims: [id] } }` – `victims` = current top vampire target(s) (more than one when tied) |
| others / dead | `null` |

**`day`** – only in phase `day` (else `null`), the same for every viewer except `myVote`:
```js
{
  votes: { [targetId]: [{ id: voterId, w: 1|2 }] },  // w = 2 for muhtar (visible to all)
  voted: [voterId],          // alive voters who voted (target or sleep)
  sleeping: [voterId],       // voted 'sleep'
  sleepers: 2,               // = sleeping.length
  voters: 6,                 // alive and connected players
  myVote: id | "sleep" | null,
  shortened: false,          // true once the timer dropped to 10 s because everyone voted
}
```

## 10. Announces

`announce` payload: `{ kind, title, text, ...extra }`. "All" = every seat that has a connected socket
(alive, dead and spectating-dead players; seats that left the game have no socket).
`{role}` below is ` Rolü: <Label>.` (or ` (<Label>)` for `left`) when `revealRoles` is on, else empty.

**Narration.** Every announce marked *narrated* below also carries `story: string` – 1–2 narrated
sentences (≤ 220 chars) to show as a caption under the cinematic. The same text is appended to
`state.log` as `kind:'story'`. `story` and `scene` come from the story engine (§16).
**`story` may be an empty string** (engine failure / fallback): then `title`/`text` are the plain v1
lines and `scene` is its default – always be able to show just `text`. Private announces (`seer`,
`watch`, `promote`) are never narrated: they have no `story` and no `scene` field.

| kind | to | title | text | extra |
|---|---|---|---|---|
| `start` | all, narrated | "Roller dağıtıldı" | "Kartına bak ve rolünü kimseye gösterme!" | `story` (= scenario intro), `scenario: { id, name, intro } \| null` |
| `night` | all, narrated | "`<round>`. Gece" | "Köy uyuyor... Gece rolleri seçimini yapsın." | `story` |
| `death` | all, narrated | "Sabah oldu" | per death "`<name>` bu gece vampir tarafından öldürüldü!`{role}`" or "… zehirlenerek öldü!`{role}`", joined with a space | `targets: [{ id, cause: 'vampir' \| 'zehir', scene }]` (1–2 entries; per victim `bite`\|`bats`\|`vanish` for `vampir`, always `poison` for `zehir`), `scene` = `targets[0].scene`, `story` |
| `safe` | all, narrated | "Sabah oldu" | "Bu gece kimse ölmedi." | `story` (also when someone was saved; who was saved is never revealed) |
| `seer` | **kahin only** | "Kristal küre konuştu" | "`<name>` bir VAMPİR!" or "`<name>` vampir değil." | `targets: [{ id, cause: 'vampir' \| 'temiz' }]` |
| `watch` | **gözcü only** | "Gözcünün raporu" | "Bu gece `<name>'in` evine girenler: `<A>`, `<B>`." or "Bu gece `<name>'in` evine kimse girmedi." (genitive suffix follows vowel harmony) | `targets: [{ id: watchedId }]`, `visitors: [playerId]` (sorted by name, may be empty) |
| `promote` | **the promoted İftiracı only** | "Vampire dönüştün!" | "Son vampir de düştü. Artık sen bir vampirsin: geceleri kurbanını sen seçeceksin!" | `targets: [{ id: ownId }]` |
| `hunter` | all, narrated | "Avcı düştü!" | "`<name>` bir avcıydı. Son nefesinde birini vurabilir…" | `targets: [{ id: hunterId }]`, `story` |
| `shot` | all, narrated | "Avcının son atışı" | "`<name>` vuruldu!`{role}`" | `targets: [{ id }]`, `actorId: hunterId`, `scene: 'arrow'`, `story` |
| `nohunt` | all, narrated | "Avcı ıskaladı" | "Avcı kimseyi vurmadan gözlerini kapadı." | `story` |
| `hanged` | all, narrated | "Köy kararını verdi" | by `scene`: "`<name>` `<n>` oyla asıldı!`{role}`" (`gallows`), "… oyla köyden sürüldü!`{role}`" (`exile`), "… oyla mahzene kapatıldı!`{role}`" (`cellar`); the jester's role is always shown | `targets: [{ id }]`, `scene: 'gallows'\|'exile'\|'cellar'`, `story` |
| `nohang` | all, narrated | "Kimse asılmadı" | "Kimse oy vermedi, köy bugün kimseyi asmadı." or "Oylar eşit çıktı, köy bugün kimseyi asmadı." (v1 spelled "bu gün") | `story` |
| `sleep` | all, narrated | "Hızlı Uyu" | "Köy oy birliğiyle uyumaya karar verdi. Kimse asılmadı." | `story` |
| `left` | all, narrated | "Bir oyuncu ayrıldı" | "`<name>` oyundan ayrıldı`{role}`." | `targets: [{ id }]`, `story` (only when an alive player leaves a running game) |
| `win` | all, narrated | "Köylüler kazandı!" / "Vampirler kazandı!" / "Soytarı kazandı!" | "Tüm vampirler yok edildi. Köy kurtuldu!" / "Köyde vampirlere karşı koyacak kimse kalmadı." / "Köy Soytarı'yı astı\|köyden sürdü\|mahzene kapattı… tam da onun istediği gibi!" (verb follows the jester's `hanged` scene) | `winner: 'koylu'\|'vampir'\|'soytari'`, `targets: [{ id }]` = winners, `story`, `epilogue: { title, text, story } \| null` (= `room.epilogue`) |

Private announces (`seer`, `watch`, `promote`) are also stored as a note in the recipient's
`me.notes` (texts "🔮 `<round>`. gece: `<seer text>`", "👁️ `<round>`. gece: `<watch text>`",
"🧛 `<round>`. tur: Vampire dönüştün.").

Typical dawn sequence: `death` | `safe` → [`seer`] → [`watch`] → [`promote`] → [`hunter`] | [`win`],
then the `day` (or `hunter`/`ended`) state. There is no `day` announce: the day start shows in
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
| day, hunter – alive sender | `genel` | everyone (not left), dead players included |
| night – alive vampir or iftiraci | `vampir` | alive vampires and İftiracı |
| night – other alive roles | – | refused: "Gece köy uyur, konuşamazsın." |
| night/day/hunter – dead sender | `olu` | dead players only (not left) |

The sender receives their own message through the `chat` event too.

## 12. Game flow and rules

Phases: `lobby` → `game:start` → `reveal` (8 s) → `night` (4 s walk home + `nightSec`) → `day` (`daySec`, or 10 s
after everyone voted, or immediately if every alive connected player voted `sleep`) → `night` … ;
`hunter` (20 s) is inserted whenever a hunter dies and the village has not already won;
`ended` when someone wins; host `game:lobby` → `lobby`.

### 12.1 Positions and movement

- `pos = { x, y }`, both in 0..1. `(0.5, 0.5)` is the campfire. Every position the server stores is on
  the ring `0.10 ≤ hypot(x−0.5, y−0.5) ≤ 0.48`: a requested point closer than 0.10 is pushed outward
  along the same direction to 0.10 (exactly the center goes to `(0.5, 0.6)`), farther than 0.48 is
  pulled in to 0.48. Coordinates are not rounded.
- Join spawn: random angle, radius 0.22–0.42.
- `player:move` is allowed only in `lobby` and `ended` (dead players too); it is rejected in
  `reveal`, `night`, `day` and `hunter`. By day everyone stands at a fixed spot by seat (the world
  places them; `pos` is not changed by the server). Positions persist across phases (the server does
  not move anyone at phase changes; the world decides where characters are shown outside lobby/ended).

### 12.1a Night walk-home lead-in

Every night starts with `NIGHT_WALK_MS` = 4000 ms for everyone to walk home. The server sets
`room.deadline = nightStart + 4000 + nightSec·1000` (the real end) and
`room.timerFrom = nightStart + 4000`. Selections (`night:select`) and the vampire chat are allowed
from the very start of the night, including the lead-in. Show the countdown from `timerFrom` to
`deadline` (full `nightSec`); before `timerFrom` show it as full / "eve dönülüyor". Bots start acting
only after `timerFrom`. `timerFrom` is `null` in every other phase; the day timer, the 10 s
"everyone voted" shortening and the hunter timer are unchanged.

### 12.2 Night resolution (at the end of the night, all at once)

All selections count if their owner is **alive when the night ends** (even if they die this same
night). A player who left is dead and their selections do not count.
1. Vampire victim: the most-picked target among alive vampires' picks; ties are broken randomly. No
   pick → no attack.
2. Doctor's protected player cannot die this night (neither attack nor poison).
3. Cadı heal saves the vampire victim (only the attack); poison kills its target (unless protected).
   A used potion is spent even if it changed nothing.
4. Deaths are applied → `death` or `safe`.
5. Kahin (if alive after the deaths) gets `seer`: result "VAMPİR" if the target is a vampire, is the
   İftiracı, **or was framed by the İftiracı this night** (frame counts if the İftiracı was alive at
   night end, even if poisoned this night). A frame lasts one night.
6. Gözcü (if alive after the deaths) gets `watch` about the watched house T. Visitors of T:
   - alive vampires whose pick was the **final victim** and T is that victim (vampires who picked a
     different target, e.g. the loser of a tie, did not go anywhere);
   - the doctor if protecting T; the kahin if inspecting T; the cadı if heal **or** poison targets T
     (the cadı visits both houses when she uses both); the İftiracı if framing T;
   - never T itself (owner) and never the gözcü. Sorted by name (Turkish collation).
     Visiting happens even if the attack was blocked.
7. Promotion check (§12.3), then hunter / win check, then `day`.

### 12.3 İftiracı promotion

Whenever no vampire is alive but the İftiracı is, the İftiracı immediately becomes a `vampir`
(private `promote` announce + note). This is checked after night deaths, after a hanging, after the
hunter's shot and when a player leaves (any phase of a running game, e.g. the last vampire leaving in
the middle of the night: the new vampire can still pick a victim that same night; their frame for
that night is dropped). Vampires and İftiracı cannot target each other, so the İftiracı is the last
evil player when this happens.

### 12.4 Win conditions (checked after every death)

- Village (`koylu`) wins when no evil player (vampir or iftiraci) is alive.
- Vampire team (`vampir`) wins when alive evil ≥ alive others.
- Soytarı (`soytari`) wins alone when hanged (game ends immediately).
- If a hunter dies and the village has not already won, the hunter shoots first, then the win check runs.
- `room.winners` = player ids whose team is the winner **and who did not leave**.

### 12.5 Disconnects

- lobby/ended: a disconnected seat stays 30 s (`connected:false`), then is removed. Reconnecting in
  time (`session:resume`/`room:join`) keeps it.
- running game: the seat stays (`connected:false`); the player keeps their role and can rejoin at
  any time with the same account. Timers keep running while they are away. A room in which nobody is
  connected is deleted after 10 minutes. During the day, disconnected players are not counted as
  voters.
- Room closing: bots never keep a room alive. When no human seat is left (every human removed in
  the lobby/ended, or marked `left` in a running game) the room is closed immediately, in any phase.
  If humans still hold seats but none is connected, the 10-minute rule above applies.
- Host: if the host disconnects or leaves, the first connected **human** seat becomes host (log entry).
  A bot never becomes host; if no other human is connected the host id stays on the absent human.

## 13. Stats

When a game ends, every seat with a role gets `games + 1` and `teams[team].games + 1`;
`wins + 1` and `teams[team].wins + 1` if it is in `room.winners`. Team is `teamOf(final role)`
(İftiracı and promoted İftiracı → `vampir`, Soytarı → `soytari`, all others → `koylu`). Players who
left mid-game count as a loss. Recording happens in the background; a storage failure is logged and
never blocks the room. `/api/me` shows the new numbers a moment after the `win` announce.

**Games with bots are not recorded.** If at least one bot held a seat when `game:start` was
accepted, the finished game is written to no account's stats and does not affect the leaderboard
(UI note: "Botlu oyunlar istatistiğe sayılmaz").

## 14. Static files, health, caching

- `GET /healthz` → `{ ok: true, rooms: <number>, store: 'json' | 'postgres' }` (no-store).
- `GET /lan.json` → `{ addresses: ["192.168.1.20", ...], port }` (LAN IPv4 addresses for invite links).
- Static files from `public/`, gzip-compressed when the client accepts it, with ETag/Last-Modified:
  - `/assets/**` → `Cache-Control: public, max-age=3600, must-revalidate`
  - `/build/**` → `Cache-Control: public, max-age=300, must-revalidate`
  - everything else (`/`, `index.html`, `app.js`, `ui/**`, css, …) → `Cache-Control: no-cache`
    (always revalidated, 304 when unchanged).
  - `.glb` is served as `model/gltf-binary`.
- Server environment: `PORT` (default 3000), `DATA_DIR` (JSON store folder, default `./data`),
  `DATABASE_URL` (use Postgres instead), `DATABASE_SSL` (`off`|`on`|`no-verify`, default automatic),
  `CLIENT_ORIGIN`, `TRUST_PROXY`.

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
- **Countdown**: `remaining = room.deadline - (Date.now() + (serverNow - receivedAt))`; at night show
  `min(remaining, deadline - timerFrom)` so the count only starts after the walk home (§12.1a).

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
  - night: every living bot with a night role acts once, after the walk-home lead-in (`timerFrom`), at a random moment in the first half of the
    night (the cadı later, at 55–85 %, so she can see the victim): vampires pick a living non-evil
    player (usually joining a team-mate's pick, which a vampire can see anyway); İftiracı frames a
    living non-evil player; doktor protects a random living player (self allowed); kahin inspects
    someone not inspected before; gözcü watches someone else; cadı heals the victim with 40 %
    chance and poisons a random player with 12 % chance per night while the potions last.
    Evil bots never target their own team.
  - day: each living bot votes for a random living player (10 % "Hızlı Uyu") at 15–60 % of the
    day length, sometimes (15 %) changes the vote late; may say one short canned line in the public
    channel. Bots do not move by day. The vote does **not** use what the bot learned at night.
  - hunter: a bot hunter shoots a random living player after a few seconds.
  - lobby / ended: now and then a bot strolls; a newly added bot may greet once.
  - pace: while a human is alive and connected, delays scale with the room's timers; once no
    living, connected human remains, day and hunter delays shrink to 35 % so a watching (dead)
    player sees the game finish quickly. Night length is unchanged (always `nightSec`).
- **Chat:** bots send ordinary `chat` events (channel `genel`, only in lobby and by day, only while
  alive). Lines come from a fixed list chosen independently of role and night results, contain no
  role words and never reveal anything. Bots never use the `vampir` or `olu` channels.
- **Robustness:** all bot timers are dropped on every phase change, game end, `game:lobby`, kick and
  room close; a failing bot action is logged and the phase still ends by its timer.
- **Typical length** with default timers (`nightSec` 30, `daySec` 120, doktor + kahin), 1 human +
  6 bots, measured over 60 simulated games each: human votes early each day ≈ 5.4 min (3.6 rounds);
  human never votes ≈ 7 min (days run the full 120 s because the day only shortens when every
  living connected player has voted); human dead on night 1 ≈ 2.5 min. (Measured before the 4 s
  night lead-in was added; add ~4 s per night, i.e. ~15 s per game.)

