# Vampir Köylü v2 – Architecture plan and contracts

This file is the single source of truth for everyone working on v2. Read all of it before you start.
If a contract here turns out to be wrong or impossible, do not silently diverge: implement the
closest thing and say exactly what you changed in your final report.

## 1. What we are building

Vampir Köylü is a browser social-deduction game (Mafia/Werewolf family), Turkish UI, played by
5–20 friends, mostly on phones. v1 (the code in this repo right now) is a DOM/SVG game with an
authoritative Node + Socket.IO server. v2 changes:

1. **Accounts.** Register / log in with username + password, a profile with look and stats.
   Rooms can only be created or joined when logged in.
2. **3D village.** Real low-poly 3D (three.js) with rigged, animated CC0 characters. Every player
   owns a house on a ring around the plaza with the campfire. Characters walk, enter houses,
   sleep, sneak to other houses at night; day/night lighting, shadows, fire light, fog.
   Must run smoothly on mid-range phones.
3. **Deeper gameplay.** Night roles physically visit houses; house inspection cinematics;
   two new roles built on visits and deception (Gözcü, İftiracı).
4. **Sound.** Music per phase, ambience (fire, night), sound effects.
5. **New UI.** Full-screen game canvas that never page-scrolls. Chat is an overlay
   (collapsed ticker + expandable sheet on phones, side panel on desktop).

Originality rule: the game must have its own look. Do **not** copy characters, art, music, UI
or names from Feign, Among Us or any other existing game. Shared genre mechanics are fine.

All user-facing text is Turkish. Code comments in this repo are Turkish; keep that convention.

## 2. Working rules for every agent

- Work only inside this directory: `c:\Project\vampir-koylu\.claude\worktrees\v2` (git branch `v2`).
  Never touch `c:\Project\vampir-koylu\` outside this worktree: the live game is served from there.
- Never use port 3000 (live game). Use only the port range given in your brief, and stop every
  server/browser you started before you finish.
- Do not run `git commit`, `git push`, `git checkout`, `git stash` or anything that changes git state.
- Do not run `npm install <pkg>` in the repo. Installed already: express, socket.io, compression, pg
  (deps); three 0.187, esbuild, pg-mem, socket.io-client (devDeps). If you truly need another
  package, say so in your report instead.
- Only edit files you own (section 9). If you need a change in someone else's file, describe it in
  your report.
- Shared tools live in the scratchpad (not in the repo):
  `C:\Users\AHMETZ~1\AppData\Local\Temp\claude\9612d68acdfc03c3\eb9b3fcc-66f5-42b5-9d60-03a158c53206\scratchpad\tools`
  - `node_modules/playwright-core` – use with `chromium.launch({ channel: 'msedge', headless: true })`.
    For WebGL in headless Edge add args `['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']`
    (try without first; hardware GL may work). Take screenshots and look at them with the Read tool.
  - `node_modules/ffmpeg-static/ffmpeg.exe` – audio conversion.
  - `node_modules/.bin/gltf-transform` – inspect/optimize GLB files.
  Put your own temp scripts and screenshots in a sub-folder of the scratchpad named after your role,
  never in the repo.
- Shell: Git Bash on Windows. Heredocs are unreliable here; write script files with the Write tool
  and run them. The user's home path contains a space and a non-ASCII letter – always quote paths.
- Verify your work for real (tests, screenshots you actually looked at). Report honestly: what
  works, what you verified and how, what is unfinished or shaky.

## 3. Runtime layout

```
server.js            Express + Socket.IO, REST auth API, static files   (owner: server)
game.js              Room class – all game rules                        (owner: server)
lib/                 auth.js, store-*.js                                (owner: server)
test/                node --test                                        (owner: server)
client/world/        three.js world source (ES modules)                 (owner: world)
public/build/world.js   esbuild bundle of client/world (committed)      (owner: world)
public/assets/models/   GLB files + manifest.json                       (owner: assets, then world)
public/assets/audio/    mp3 files                                       (owner: audio)
public/audio.js      window.VKAudio                                     (owner: audio)
public/index.html, public/app.js, public/ui/*, public/*.css             (owner: ui)
public/assets/ui/    fonts, images                                      (owner: ui)
public/assets/CREDITS.md  one section per asset owner
docs/PROTOCOL.md     exact server protocol as implemented               (owner: server)
```

`npm run build` = `esbuild client/world/index.js --bundle --format=iife --global-name=VKWorld --minify --target=es2019 --outfile=public/build/world.js`.
The bundle is committed so hosting needs no build step. No other part of the client needs a build.

Old v1 client files (`public/scene.js`, `avatar.js`, `cine.js`, `scene.css`) are replaced by v2 and
will be deleted by the ui owner once nothing references them.

## 4. Art direction

- Mood: a cosy fairy-tale village that turns eerie at night. Chunky low-poly, flat/toon shading,
  readable silhouettes, exaggerated cute proportions. No gore: deaths are cartoonish (poof, ghost).
- Palette (CSS tokens the UI defines, world uses matching colors):
  night `#15122b` `#221c44` `#3a2a6b`, moonlight `#8fb4ff`, fire `#ffb347` `#ff7a1a`,
  blood accent `#d7263d`, parchment `#f4e4c1`, forest `#2f6b4f`, text `#f6f1ff`.
- 20 player colors, index = `look.color` (keep this order):
  `#d7263d #2b59c3 #2f9e44 #f06595 #f76707 #f2c12e #3b3b46 #e9ecef #7048e8 #8d5a3b #15aabf #94d82d #862e3c #ffa8c5 #1c2e6e #868e96 #d9b99b #ff8364 #6b7a2a #b197fc`
  Names: Kırmızı, Mavi, Yeşil, Pembe, Turuncu, Sarı, Siyah, Beyaz, Mor, Kahverengi, Camgöbeği,
  Fıstık, Bordo, Gül, Lacivert, Gri, Bej, Mercan, Zeytin, Lavanta.
- Look = `{ color: 0..19, hat: 0..8, skin: 0..11 }`.
  `skin` picks one of 12 character models/variants. `hat` 0 = none; 1..8 are 3D hats attached to the
  head (Hasır şapka, Bere, Çiçek, Silindir, Bandana, Filiz, Kasket, Kulaklık – may be re-themed but
  keep 8). The player color must be obvious on the character from the game camera (tinted clothes
  if feasible, otherwise scarf/cape + ground ring) and on the name tag and the house (banner/door).

## 5. Game rules (server)

Existing rules stay (read `game.js`). Changes:

### 5.1 Seats, houses, movement
- Every player gets `seat` (smallest free non-negative integer at join; fixed for the game).
  The house of a player is defined by `seat` order; the world lays houses out on a ring.
- `pos` is normalized plaza coordinates: `{x,y}` in 0..1, **center (0.5,0.5) is the campfire**.
  Server clamps to the ring `0.10 <= dist(center) <= 0.48`. Spawn: random point with dist 0.22..0.42.
- `player:move` is allowed in `lobby`, `day` and `ended` (v1: lobby only). Dead players may move too.

### 5.2 New roles
- **Gözcü** (`gozcu`, village, optional special role). Night: pick any living player (self allowed)
  and watch their house. At dawn (if still alive) gets a private announce `watch` plus a note:
  the names (alphabetical) of everyone who entered that house that night, or "kimse girmedi".
  Visitors of player T = living vampires whose pick was the final victim T; doctor if protecting T;
  kahin if inspecting T; cadı if heal or poison targets T; iftiracı if framing T. Never the house
  owner, never the gözcü.
- **İftiracı** (`iftiraci`, vampire team, optional). Extra evil player, only dealt when the room has
  >= 7 players. Knows the vampires and they know them (role visible both ways, shares the vampire
  night chat). Does not take part in the kill pick. Night: pick a living non-evil player to frame;
  if the kahin inspects that player this night the result is "VAMPİR". The kahin sees the iftiracı
  as vampire. Counts as vampire team for winning (`teamOf` = vampir, parity counts all living evil).
  If no vampire is alive but the iftiracı is, the iftiracı is promoted to vampire immediately
  (private announce `promote` + note), so the game can still end either way.
- Role order for dealing specials: doktor, kahin, gozcu, cadi, avci, muhtar, soytari.
  Defaults: doktor, kahin on; everything else off. At least one plain köylü always remains.

  **Window view (added):** during the night the gözcü's character sneaks *behind* the watched house
  and peeks through its window. The `watch` announce carries `{targets:[{id}], visitors:[ids]}`
  and nothing else: the gözcü learns **only who entered** (classic lookout). There is no `outcome`
  field and no hint of what any visitor did or whether an attack happened (decided by the project
  owner on 2026-11-13; an earlier draft of this plan had an `outcome` shadow play — it is removed).
  The world replays it at dawn as seen through the window: the visitors walk in one by one,
  recognisable, in alphabetical order, and stand by the sleeping owner; nothing else is shown.

### 5.3 Stats
When a game finishes the server records for every participant with an account: games +1, wins +1 if
in `winners`, per-team counters. Players who left mid-game count as a loss.

### 5.4 Story engine (narration, rumours, scene variants) — `lib/story/`
A server-side, pure, seedable module that turns game events into colourful Turkish narration, so
every game reads like a small village tale ("Köy Günlüğü").
- A game gets one random **scenario** (theme) at start, e.g. sisli vadi, kanlı ay, hasat şenliği,
  kara kış… Each has its own intro, vocabulary and mood. Beats are modular pick-and-mix templates
  conditioned on the situation (round, how many are left, how many died, who was eliminated, revealed
  roles, tone tier early/mid/late), not a fixed linear plot. No line repeats within a game.
- **Absolute rule: public information only.** The engine is given only what every living player can
  already know (round, names, who is alive, public deaths and — only when the room reveals roles —
  the dead player's role, public votes, chat activity counts). It must be impossible for narration
  to leak a hidden role or a night action. Rumours that mention a player are always derived from real
  public behaviour (who voted for whom, who never votes, who stayed silent, who survived a close
  vote); other rumours are nameless atmosphere.
- Output per event: `{ title, text, story, scene }`. `text` = the short factual line (as today),
  `story` = 1–2 narrated sentences (<= ~220 chars) shown as a caption during the cinematic and kept
  in the chronicle, `scene` = which cinematic variant to play (same for all clients):
  - vote elimination (`hanged`): `gallows` | `exile` (driven out of the gate, never seen again) | `cellar` (locked away)
  - vampire kill (`death`, per target): `bite` | `bats` | `vanish`; poison: `poison`; hunter: `arrow`
  Unknown scene ids fall back to the default of that announce kind.
- **Village jobs (meslek).** At game start every player gets a random, public, purely cosmetic
  village job (terzi, nalbant, fırıncı, değirmenci, çoban, hancı, balıkçı, oduncu, arıcı, berber…).
  Jobs never collide with role names (no doktor, kahin, cadı, avcı, muhtar, soytarı, gözcü) and are
  independent of roles, so they leak nothing. The server exposes `players[i].job` (`{id,label}`);
  UI shows it next to the name ("Ali · Terzi", marked as story-only). Narration uses jobs
  everywhere, and reveals get job-specific twists: when a dead/eliminated player's role is public
  ("Köyün terzisi meğer vampirmiş: yıllardır herkesin yakasını o dikiyordu, boyunları en iyi o
  biliyordu" / an innocent baker: "yarın köyde ekmek yok"), and in the epilogue for every evil
  player. The narrator may call vampires "katil", "seri katil", "gece yaratığı" etc. as prose
  synonyms — the game role stays "Vampir".
- At each day start one **rumour** is published (log entry `kind:'rumor'`, shown by the UI as a
  town-crier ticker). Narration lines are also stored as log entries `kind:'story'` so the UI can
  show the chronicle during the game and the whole tale on the end screen.

## 6. Accounts and protocol (server implements exactly this; details go to docs/PROTOCOL.md)

### 6.1 REST (JSON). Base path is the game server origin (client prefixes `VK_CONFIG.serverUrl`).
```
POST  /api/auth/register  {username, password}        -> {ok:true, token, user}
POST  /api/auth/login     {username, password}        -> {ok:true, token, user}
POST  /api/auth/logout    (Bearer)                    -> {ok:true}
GET   /api/me             (Bearer)                    -> {ok:true, user}
PATCH /api/me             (Bearer) {look:{color,hat,skin}} -> {ok:true, user}
GET   /api/leaderboard?limit=20                       -> {ok:true, players:[{username, look, stats}]}
errors: HTTP 4xx with {ok:false, error:"Türkçe mesaj", code:"..."}
user = { id, username, createdAt, look:{color,hat,skin},
         stats:{ games, wins, teams:{ koylu:{games,wins}, vampir:{games,wins}, soytari:{games,wins} } } }
```
- username: 3–16 chars, letters (Turkish included), digits, `_ - .` and single inner spaces; unique
  case-insensitively (Turkish-aware lower-casing). password: 6–72 chars.
- Passwords hashed with scrypt + per-user salt. Session tokens are random, stored hashed, 30-day
  sliding expiry. Simple per-IP rate limit on register/login.
- Storage: pluggable. Default is a JSON file under `DATA_DIR` (default `./data`, git-ignored),
  written atomically. If `DATABASE_URL` is set, use Postgres (`pg`), creating tables on start.
  Both backends pass the same test suite (Postgres via `pg-mem`).
- CORS: when `CLIENT_ORIGIN` is set, the API allows those origins (Authorization header, JSON).

### 6.2 Socket.IO
- Client connects with `io(SERVER, { auth: { token } })`. Invalid/missing token -> connection is
  refused with `connect_error` whose `message` is `'auth'`.
- `room:create {roomName, password?, settings?}`, `room:join {roomId, password?}`: the player name is
  the account username; initial look is the profile look (color falls back to a free one if taken).
- One seat per account per room. Joining a room where the account already has a seat re-binds to
  that seat (this also works mid-game = reconnect). `session:resume {roomId}` does the same without
  a password and fails with `{ok:false}` if the account has no seat there.
- Everything else keeps its v1 name and shape: `rooms:watch/unwatch`, `room:info`, `room:leave`,
  `room:kick {playerId}`, `room:settings {settings}`, `game:start`, `game:lobby`,
  `night:select {targetId, action?}`, `hunter:shoot {targetId}`, `day:vote {targetId|null|'sleep'}`,
  `player:look {color?,hat?,skin?}`, `player:move {x,y}`, `chat:send {text}`;
  server -> client: `state`, `announce`, `chat`, `kicked`, `rooms:update`.
- `player:look` in a room also saves the look to the account profile.

### 6.3 `state` additions (on top of v1 `viewFor`)
- `players[i].seat`, `players[i].look.skin`.
- `me.userId`.
- Roles `gozcu`, `iftiraci` in `ROLE`, `settings.roles`, `distribution`.
- Evil team visibility: vampires and iftiracı see each other's roles.
- `night` for the viewer (null when the viewer has nothing to do or is dead):
  `{ mySelection, team:[{vampId,name,targetId}], framer: targetId|null (evil team only), witch?: {...v1} }`
  For iftiracı `mySelection` is the framed player and `team` is the vampires' picks (read-only).
  For gözcü `mySelection` is the watched player.
- Announce kinds: v1 (`start night death safe hanged nohang sleep hunter shot nohunt seer win left`)
  plus private `watch` `{targets:[{id}], visitors:[ids]}` and private `promote`.

## 7. World API (`window.VKWorld`, from `public/build/world.js`)

```js
const world = VKWorld.create(containerEl, {
  onPick(playerId),      // tapped a selectable character or that player's house
  onMove(x, y),          // tapped walkable ground (normalized plaza coords, see 5.1)
  onSelf(),              // tapped own character in lobby/ended (ui opens the look editor)
  onProgress(done, total), onReady(), onQuality(level),
});
world.update(state, { witchMode: 'heal'|'poison' })  // every server `state`; world decides what is selectable (port the v1 rules from public/scene.js)
world.announce(msg)        // returns a Promise that resolves when the 3D cinematic for this announce is over. The UI draws title/text itself.
world.bubble(playerId, text, channel)   // speech bubble over a character
world.setView('menu' | 'game')          // 'menu' = slow beauty orbit of the empty village (background of login/menu)
world.setQuality('auto'|'low'|'medium'|'high'); world.getQuality()
world.resize(); world.reset(); world.dispose()
VKWorld.preview(el, look, opts)  // small turntable of one character (profile, look editor); returns {setLook(look), dispose()}
VKWorld.COLORS, VKWorld.HATS, VKWorld.SKINS    // names + data for the look editor
```
- The container is position:relative and can be any size (phone portrait 360x640 up to desktop);
  the world fills it and re-frames the camera for portrait vs landscape.
- Name tags, vote pips and speech bubbles are HTML elements in an overlay the world owns
  (class names prefixed `vkw-`, styles injected by the bundle).
- The world calls `window.VKAudio && VKAudio.sfx(name)` for sounds tied to animation
  (`step`, `door`, `bite`, `potion`, `poof`, `shot`, `whoosh`).

Choreography the world must show (per viewer, only from that viewer's `state` — never invent
information the viewer was not sent):
- lobby / day / ended: characters stand or walk on the plaza at `pos`; tap ground to walk.
- reveal: everyone gathers; night falls.
- night: everyone walks into their own house (door, window light, then dark). If the viewer (or a
  visible evil team-mate) has a selection, that character sneaks to the target's house and goes in;
  the camera then shows the house interior (target asleep in bed, the visitor doing their thing).
  Changing/clearing the selection walks them back. Sleeping viewers get a calm eerie night view.
- dawn announces: `death` (found at the house, tombstone, ghost), `safe`, `seer` (private: interior
  search that reveals the clue), `watch` (private: silhouettes entering the house), etc.
- day: everyone comes out to the plaza; vote pips over heads; `hanged`, `nohang`, `sleep`.
- hunter / shot / win / left cinematics.
- Dead players are ghosts, visible only to dead viewers (v1 rule); tombstones mark the dead.
- **Gözcü window:** houses have windows. At night the gözcü's character goes behind the watched
  house and peeks in; the viewer sees the interior through the window frame. The `watch` announce is
  replayed through that window: the visitors enter one by one (or the house stays empty). No
  outcome, no action is shown — only who came.
- **Scene variants:** announces may carry `scene` (see 5.4). Implement each as a short real-time
  cinematic with the actual player characters: `gallows`, `exile`, `cellar`, `bite`, `bats`,
  `vanish`, `poison`, `arrow`. The UI overlays `title`, `text` and the narrated `story` caption.
- **Time of day is continuous.** During `day` the sun travels from morning to sunset as the timer
  runs (`1 - remaining/daySec`, smoothed when the day is shortened): light direction, shadow length,
  sky and fog colours shift toward dusk, lanterns and windows light up near the end. During `night`
  the moon travels and the sky pales slightly before dawn. Phase changes blend, never pop.

Performance budget: 20 characters + 20 houses at >= 30 fps on a mid-range phone at quality `auto`.
Use quality tiers (pixel-ratio cap, shadow map on/off + blob shadows, light count, particles),
automatic downgrade when frame time is bad, pause rendering when the tab is hidden.
Download budget: first playable <= ~3 MB of models/textures, everything gzip/brotli friendly.

## 8. Audio API (`window.VKAudio`, `public/audio.js`, plain script, no build)

```js
VKAudio.init()                      // idempotent; resumes the AudioContext on the first user gesture
VKAudio.setScene('menu'|'lobby'|'night'|'day'|'ended'|'none')   // cross-fades music + ambience
VKAudio.sfx(name, { volume })       // one-shot, unknown names are ignored silently
VKAudio.setVolume({ master, music, sfx }); VKAudio.getVolume()
VKAudio.mute(bool); VKAudio.isMuted()
```
SFX names: `click join leave start night dawn death safe vote hang hunter shot seer watch win lose
step door bite potion poof whoosh message tick bell`.
Settings persist in `localStorage['vk.audio']`. Files are lazy-loaded; nothing blocks first paint.
Must work on iOS Safari (mp3/m4a, unlock on gesture) and survive missing files.

## 9. Ownership

| Role    | Owns |
|---------|------|
| server  | `server.js`, `game.js`, `lib/**` (except `lib/story/**`), `test/**` (except `test/story*.test.js`), `docs/PROTOCOL.md`, `render.yaml`, `.gitignore` |
| story   | `lib/story/**`, `test/story*.test.js`, `docs/STORY.md` (the server owner wires it into `game.js` afterwards) |
| assets  | `public/assets/models/**`, models section of `public/assets/CREDITS.md`, `docs/ASSETS.md` |
| audio   | `public/audio.js`, `public/assets/audio/**`, `public/audio-demo.html`, audio section of CREDITS |
| world   | `client/world/**`, `public/build/**`, `public/world-demo.html`, `package.json` scripts; may adjust `public/assets/models/**` |
| ui      | `public/index.html`, `public/app.js`, `public/ui/**`, `public/*.css`, `public/assets/ui/**`, `public/config.js`, `README.md` |

## 10. Dev ports
server agent 3101–3109, assets 3111–3119, audio 3121–3129, world 3131–3139, ui 3141–3149, QA 3151–3159.
