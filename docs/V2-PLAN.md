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
- Look = `{ color: 0..19, hat: 0..18, skin: 0..11, acc?: 0..6 }`.
  `skin` picks one of 12 character models/variants. `hat` 0 = none; 1..8 are 3D hats from `hats.glb`
  (Hasır şapka, Bere, Çiçek, Silindir, Bandana, Filiz, Kasket, Kulaklık); 9..18 are built in code
  (`client/world/hats.js`: Takke, Örgü takke, Fes, Yemeni, Keçe külah, Kalpak, Ponponlu bere,
  Çiçek tacı, Aşçı başlığı, Taç). `acc` (optional, missing = 0 = none): Bıyık, Gözlük, Sakal, Atkı,
  Papyon. Hats and accessories are plain cosmetics; never use one as a role marker. The player color must be obvious on the character from the game camera (tinted clothes
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

## 11. Round 2 (2026-11-13, after the first live release)

Feedback from the project owner after trying the live game. Same working rules (§2), same
ownership (§9), same dev ports (§10). Work in this worktree; the live game runs from the main
folder and must not be touched.

### 11.1 Bots (server + ui) — so one person can start and test a full game alone
- `room:addBot {}` (host only, lobby only, room not full) adds a bot player; `room:kick` removes
  it. `players[i].bot === true` in `state`. Bots have a Turkish name marked as a bot, a random look,
  a seat and a house like anyone else, and are always "connected".
- Bots act on their own, with human-like random delays: night role actions on a random valid
  target, a day vote for a random living player (sometimes "Hızlı Uyu"), the hunter's shot. They do
  not need to move or chat (a little is welcome if cheap). They never crash or stall a game.
- A room with no human left is closed. Games that include a bot are **not** written to account
  stats or the leaderboard.
- UI: host sees "Bot ekle" in the lobby, bots carry a small badge, a note says botlu oyunlar
  istatistiğe sayılmaz.

### 11.2 Camera and movement (world)
- By day / in the lobby the default view is a **third-person follow camera**: a little above and
  diagonally behind the player's own character (think of a classic third-person action game), which
  follows smoothly while walking. Drag orbits around the character, pinch/wheel zooms from close
  follow out to the village overview; a button toggles follow/overview.
- Direct movement: an on-screen joystick on touch devices and WASD/arrow keys on desktop, relative
  to the camera, in addition to tap-to-move. Uses the existing `onMove` (normalized plaza coords),
  rate-limited, with local prediction for the own character.
- At night, when the village sleeps or the player picks a house, keep the current overview — the
  owner likes it as it is.

### 11.3 Mobile performance (world) — the top priority of this round
The game must stay smooth on an ordinary phone with ~10 players (and remain playable with 20).
Dynamic resolution, cheaper tiers, less per-frame CPU, faster automatic downgrade, remembered per
device. Measured under CPU throttling with phone-size viewports, since no real phone is available.
An optional on-screen FPS read-out (toggle in settings) lets the owner report real numbers.

### 11.4 Sound (audio + ui)
- The owner finds the menu music very bad: replace it with something calmer and simpler; music
  should sit quietly in the background by default.
- Sound controls must be reachable from the menu and in game: mute, and separate sliders for
  music, effects and ambience (campfire, night).

## 12. Round 3 (owner feedback after playing round 2)

1. **Performance with many players, even on PC**: frame drops as the player count grows; some
   characters' hats/bodies jitter or twitch constantly. Find and fix the root causes (animation
   blending/LOD skipping, position corrections fighting between server state and local movement,
   per-player prop spawning). Fewer props: the village must not add more and more decoration per
   player — a fixed, curated set, instanced/merged.
2. **Movement only in the lobby (and ended).** By day every living player stands at a fixed spot
   on the ring around the campfire (by seat, facing the fire); no free walking, no joystick, no
   auto-wandering, bots don't stroll. `player:move` is rejected outside lobby/ended. The follow
   camera still exists in lobby/ended; by day the camera frames the ring.
3. **Faster walking** everywhere (~1.6× current), house entry quick.
4. **Night timer starts after everyone is home.** The night phase gets a fixed walk-home lead-in
   `NIGHT_WALK_MS` (4000 ms): selections are already allowed, but the night countdown the player
   sees (`room.deadline` stays the real end; new `room.timerFrom` = when the countdown starts)
   only starts when the lead-in is over, so the full `nightSec` is available after arriving home.

## 13. Round 4 (approved by the owner on 2026-11-14)

### 13.1 Night choices are final
- A night choice is made with a confirmation step in the UI and is then **final**: no change, no
  clearing. The character sets off immediately.
- Vampires have **one shared target**: the first vampire to confirm sets the team's target; the
  other vampires see it and go there too (their own pick is not possible any more). Vampires never
  attack two houses.
- Witch: heal and poison are each final once chosen. Same for doktor, kahin, gözcü, iftiracı.

### 13.2 Gözcü (revised)
The gözcü watches a house and sees **live**, during the night (private to the gözcü):
- everyone who comes to that house (recognisable; also those turned back by a locked door), and
- whether the **owner leaves**, and to **which house** they go.
Never roles, never what anyone did. If someone died that night in a house the gözcü saw (the
watched house, or the house the owner went to), that house's lights flicker in the dawn replay.
The dawn report states the same in words.

### 13.3 Gardiyan (new village role, `gardiyan`)
- Chooses **during the day** which house to lock **the coming night** (secret; may change their
  mind until the day ends; not their own house; not the same house two nights in a row). No lock
  on night 1.
- Locked house: the owner cannot go out (their night action is cancelled; they are told at night
  start "Kapın dışarıdan kilitlendi"), and nobody can get in: anyone who comes (vampire, doktor,
  kahin, cadı, iftiracı) finds the door locked, is told so at once ("Kapı kilitliydi") and goes
  home; their action has no effect. The gözcü still sees them come to the door.
- At dawn the gardiyan learns only how many tried the door ("Kilitlediğin kapıyı bu gece N kişi
  zorladı"), not who. The lock holds for the night even if the gardiyan dies that night.
- Dealing order of specials: doktor, kahin, gozcu, gardiyan, cadi, avci, muhtar, soytari.

### 13.4 Village events (köy olayları)
Room setting `events: 'off' | 'some' | 'often'`, default `'some'`. Announced by the town crier at
the start of the phase they affect; shown in the HUD while active; the world changes the weather.
| id | phase | effect |
|---|---|---|
| `tipi` (snowstorm) | night | villagers cannot leave their houses (doktor, kahin, gözcü, cadı, gardiyan's lock still holds); only the vampire team moves |
| `ruzgar` (gale) | night | the campfire goes out, the village is pitch dark; the gözcü sees visitors only as silhouettes (count, no names) |
| `kisa-gece` (short night) | night | night length halved |
| `ayaz` (bitter cold) | day | day length halved |
| `sis` (fog) | day | votes are secret: everyone sees only vote counts per player, not who voted for whom |
| `mahkeme` (trial) | day | at the end of the day the two players with the most votes get a short defence, then the village re-votes between only those two |
No `dolunay`, no `bereket` (rejected by the owner). Rules: at most one event per 3 rounds (`some`)
or per 2 rounds (`often`); never the same event twice in a row; `tipi` never when the village side
is at most one more than the evil side; `mahkeme` only with 6+ living players. Bots handle all of it.

Deferred to round 5: Bombacı, vasiyet (last will), Âşıklar, Hızlı Köy mode, preset room settings.

## 14. Round 5a: Deli and Hırsız (requested by the owner on 2026-11-16)

### 14.1 Deli (`deli`, village team, optional special role)
- Dealt as Deli, but the player is **told and shown a fake role** F, drawn at random from the
  village night roles enabled in the room among doktor, kahin, gozcu, gardiyan (if none of those is
  enabled: kahin). The player must not be able to tell: everything they receive — `me.role`, their
  own entry in `players`, role card data, `night`/`day` views, acks, errors, private announces and
  notes — is exactly what a real F would get.
- Their actions have no real effect and their information is fabricated:
  fake doktor protects nobody; fake kahin gets a random verdict (independent of the truth); fake
  gözcü gets an invented live panel and dawn report (0–2 random living players as visitors, owner
  "went out" at random; live panel and report consistent with each other); fake gardiyan locks
  nothing (nobody is locked in or bounced) and gets a random small count at dawn.
- Physically they still walk: their visit is a real trip (a real gözcü sees them arrive; a real
  lock bounces them with the usual notice).
- Publicly they are Deli wherever a role becomes public (death with roles revealed, end of game);
  the kahin sees "vampir değil". They learn the truth only then. Wins with the village.

### 14.2 Hırsız (`hirsiz`, neutral until the theft, optional, only dealt with 7+ players)
- Once per game, at night, may pick a living player (final choice like every night pick; not
  picking = waiting for another night). If the thief reaches the house and the target dies that
  night (the thief's own attack kills unless the doktor protects the target; a locked door bounces
  the thief), the thief **takes over the victim's role** as it is (including used potions; a stolen
  Deli stays a Deli who is told the same fake role; a stolen vampire/iftiracı joins the evil team
  with the usual mutual visibility) and from then on belongs to that role's team. Private announce
  `steal` + note. A bounced or doctor-foiled attempt does not use up the ability.
- The death is public like any night death, with cause `hirsiz` ("soyuldu"), cinematic scene
  `vanish`. The victim's role reveal follows the room's normal rule.
- Until the theft the thief counts as a non-evil player for parity, the kahin sees "vampir
  değil", and if the game ends before a successful theft the thief loses.
- Dealing order of specials: doktor, kahin, gozcu, gardiyan, cadi, avci, muhtar, soytari, deli,
  hirsiz. Both default off.

## 15. Round 6 (owner feedback of 2026-11-17): night in two stages, Kahin as detective, random dealing, simpler mobile UI

### 15.1 Night = pick stage + show stage  (server is the source of truth; world and UI follow)
`phase` stays `'night'`. `room.night = { stage: 'walk'|'pick'|'show', pickUntil, showUntil }`
(ms timestamps; `room.deadline` = `pickUntil` during walk/pick and `showUntil` during show;
`room.timerFrom` as today).
- **walk** (4 s, as today): everyone goes home. Picks already allowed.
- **pick** (`settings.nightSec`, default **20**, range 10–60): every night role makes its final
  pick. New `night:pass {}` for a player who may act but chooses not to tonight (Hırsız, Cadı, or
  anyone). When every living, unlocked player who can act has picked or passed, the pick stage ends
  early (after a 1.5 s grace). Nothing moves in the village during this stage.
- **show** (`NIGHT_SHOW_MS` = 20000; was 14000 until 2026-11-17): the server resolves the night at the start of this stage and
  everything that happened is played back. Every walk is shown end to end (out of the door → the real route →
  in / knock at a locked door / peek at the back window → back home and in); times come from the path length at a
  natural pace (walk / brisk, a run for far houses; the way out never vanishes — `window.__vkwTeleports` stays 0).
  The outbound walk and the moment at the target get the time first; if the walk home does not fit, the character
  may fade into mist near the end of the return leg (`window.__vkwReturnVanish`) instead of a very fast run. No picks. Then dawn (public announce), as today.

**Resolution order** (replaces "everything at once"):
1. Gardiyan's lock (chosen by day) holds all night: the locked-in owner does nothing; visitors bounce.
2. Kills in order: vampires' team target, then the Hırsız (unless the Hırsız was killed by the
   vampires), then the Cadı's poison (unless the Cadı was killed in step 2 before her turn).
3. A doktor's protection / Cadı's heal counts unless its owner is killed by the vampires' attack.
   Protection stops any kill (as today); heal stops the vampire attack only.
4. **Anyone killed this night never left home**: their own non-kill action (inspect, watch,
   protect — subject to 3 —, frame, lock report, fake actions of a Deli) is cancelled, no trip, no result.
5. Only actions that really happen create trips (what a Gözcü can see).

**Per-viewer playback data** in `state.night.show` during the show stage (private; every field
optional; never contains anything the viewer may not know):
```
show: {
  trip:  { to, kind: 'kill'|'steal'|'protect'|'heal'|'poison'|'inspect'|'frame'|'watch',
           outcome: 'done'|'bounced'|'saved'|'foiled', interior: bool },   // my own walk; interior only for kill/steal/poison
  team:  [{ id, to, outcome }],            // evil team-mates walking with me (evil team only)
  home:  [{ kind: 'attack'|'steal'|'poison'|'protect', result: 'died'|'saved' }],  // what happens in MY house, in order; visitors are anonymous
  dead:  true,                              // I die tonight (I see it now; public at dawn)
  watch: { houseId, arrivals: [{ id, blocked }], ownerWent: id|null, died: bool },  // gözcü; ids null in darkness events
  saved: true                               // doktor/cadı: my protection actually stopped an attack → green plus signs
}
```
Private result announces (kahin, gözcü report, steal, stealfail, bounced, lockreport, plus new
`saved` for the protector, `attacked` for a saved victim, `killed` for a dying victim) are emitted
by the server 14 s into the show stage (`NIGHT_RESULT_MS`), so they appear after the relevant scenes. The Gözcü no longer has a
live panel during pick; arrivals are shown during show. Deli fakes follow the same shapes.

**What each player sees in the show stage (world):** always the village from outside. Their own
character (and evil team-mates) leaves home, walks to the target house, goes in, comes out and
**walks back home** (no staying inside for the rest of the night). Interior view only for killers
(vampire team, Hırsız, Cadı poisoning) while they are inside, and for the owner of a house where a
kill is attempted: the owner sees anonymous black silhouettes (attacker; and the protector if
saved, with green plus signs) and, if they die, their death scene right then. A doktor sees green
plus signs rise from the house only when the protection actually stopped an attack. Players with
nothing to see watch the quiet village. Tapping a house (body or name plaque) selects it on
phones as well as the name strip.

### 15.2 Kahin becomes a detective
The Kahin's result is **two roles, one of which is the target's real role** (order shuffled):
`seer` announce `{ targets:[{id}], roles:[a,b] }`, text "X şu ikisinden biri: A ya da B."
The decoy is drawn from the roles that can be in this game (incl. köylü, vampir), is fixed per
(kahin, target) for the whole game (re-inspecting gives the same pair), and is never the real role.
A Deli shows as the role they believe; an İftiracı's frame makes `vampir` one of the two; a Deli
who thinks they are Kahin gets two random roles.

### 15.3 Random dealing
`settings.roleMode: 'random' | 'all'`, default `'random'`. In `'random'`: vampires by player count
as today; İftiracı (if enabled, 7+ players) is dealt with 60 % chance; plain köylü slots =
max(1, round(players × 0.2)); the remaining slots are filled by a random draw from the enabled
village specials (at least one of kahin/gözcü if enabled). Lobby shows what is certain and the
candidate pool (`distribution` + `rolePool`, plus `rolePool.maybe` for İftiracı). `'all'` = today's rule.

### 15.4 Mobile UI (phones first)
- Lobby: no tall card. One compact bar (start button, a few icon buttons); room code in the top
  bar; roles/settings/invite in sheets. The collapse ("−") bug that shifts the screen goes away
  with the card.
- Town crier: no banner on phones; the rumour is a single quiet line in the chat feed/chronicle.
- Chat must be genuinely comfortable to use on a phone (opening, reading, typing with the
  keyboard up, closing); speech bubbles are short and never pile up.
- Night HUD: pick stage = prompt + countdown (+ "Bu gece bekle" where passing makes sense);
  show stage = HUD steps back so the animation is visible; result cards after.
- "Nasıl oynanır": each role explained properly (what, when, limits, interactions, a tip).

## 16. Round 7: stronger evil team (approved by the owner on 2026-11-17) — superseded by §22 where it conflicts (İftiracı / Temizlikçi are no longer roles)

### 16.1 İftiracı upgrade (slander sticks)
Besides the Kahin effect (unchanged), a framed player who **dies that same night** (any cause) or
is **eliminated by the vote on the following day** is publicly revealed as **`vampir`** instead of
their real role (where the room reveals roles); the lie holds until the game ends. Exceptions: an
Avcı's last shot and a hanged Soytarı reveal the truth as today (their announces would contradict
the lie); a victim whose role is hidden (Hırsız, Temizlikçi) stays hidden. The frame of night N
lasts until the end of day N. Narration receives the fake role as the public role.

### 16.2 Temizlikçi (`temizlikci`, evil team, optional, 7+ players)
Night: picks a living non-evil player and goes there (a real trip: seen by a Gözcü, bounced by a
lock; cancelled if the Temizlikçi is killed that night). If that player dies that night (any
cause), their role is **not revealed** until the game ends ("Rolü bilinmiyor; izler silinmiş").
Sees and is seen by the evil team (role, team target, vampire chat), counts as evil for parity, is
shown to the Kahin as `temizlikci`. An Avcı's last shot still happens and reveals the Avcı.

### 16.3 Evil helpers and dealing
Helpers = İftiracı, Temizlikçi (each only with 7+ players). If no vampire is alive but a helper
is, one helper is promoted to vampire (İftiracı first). Random mode: with 7+ players exactly one
enabled helper is always dealt (chosen at random among the enabled ones); with 13+ players and
both enabled, the second one is dealt with 50 % chance. `'all'` mode: every enabled helper.
Lobby preview: `rolePool.maybe` lists helper candidates; the certain part states "1 yardımcı".

### 16.4 Kahin decoy mix
The decoy comes from the opposite alignment with probability 1/2 (was 2/3), so an innocent is
shown with two innocent roles about half the time.

## 17. Smart bots (LLM-driven), approved by the owner on 2026-11-17

Bots can be driven by Claude Haiku (`claude-haiku-5-5`, the owner's choice) so that they reason,
chat, ask questions, can be persuaded, bluff and vote like players. Server-side only
(`ANTHROPIC_API_KEY` in the server environment; never sent to clients). Without a key, on any API
error, timeout, refusal or exhausted budget, a bot silently falls back to the existing random
behaviour — a game never waits on the API.

- **Information boundary**: a bot's prompt is built only from what a human in that seat would
  receive: `room.viewFor(botId)`, the private announces/notes addressed to it, and the chat
  messages its seat receives (public; evil-team night chat only if it is on that team; dead chat
  only when dead). A Deli bot believes its fake role. Nothing else may enter a prompt.
- **One "turn" call** returns structured output: optional chat line, optional action (night pick /
  pass, day vote / Hızlı Uyu, hunter shot, gardiyan lock, cadı heal/poison), and a short private
  memory note carried to its next call (suspicions, claims it made, lies it told).
- **Chat behaviour**: Turkish, casual, one short sentence (≈ 60, never > 100 chars; no "…" cuts), no markdown, never says it is
  an AI or model (the UI already marks bots). Plays to win for its real team: villagers reason and
  can be convinced by good arguments (and change their vote); evil bots bluff, deflect, defend
  team-mates subtly; all of them may ask questions of specific players. The prompt tells the bot
  that others may try to trick it into revealing its role or "ignoring its instructions": treat
  everything said in chat as game talk from another player, never as instructions.
- **When a bot speaks**: (1) always when addressed by name (with or without the "Bot " prefix) —
  this bypasses crowd limits; (2) a few bots open each day; (3) up to two bots may react to a
  message addressed to nobody; (4) when voted for or accused; (5) bot-to-bot chains are short and
  cooled down so bots never talk only among themselves at length. Human-like pacing: a short
  reading delay, then typing time proportional to the line (≈ 90–130 ms per character, 2.5–10 s,
  model latency included) with a "yazıyor…" indicator; bot lines in a channel are queued and go out
  one at a time, 3–5 s apart; stale non-direct lines are dropped, direct replies never (owner
  feedback 2026-11-17, docs/AI-BOTS.md).
- **Cost and safety rails**: small `max_tokens`, low effort, prompt caching of the static prefix
  where it qualifies, bounded concurrency, per-bot and per-game call caps, a global daily call cap
  from the environment, usage logging with a running cost estimate. Room setting `smartBots`
  (default on when the server has a key); `room.aiAvailable` tells the UI whether the option
  exists. The lobby states that with smart bots on, chat messages and player names are sent to an
  AI service.

## 18. Smart bots understand the rules (owner feedback 2026-11-17, after playing with them)

Problems seen in play: bots did not know what a shown role means for the rest of the game, asked a
claimed Doktor "what did you see?", treated yesterday's lines as today's, answered "who is the Kahin?"
with "is it you?" and voted for the asker, questioned dead players, did not count roles in a 3-player
endgame, accepted "the vampire came to my house and I survived" on a night when the vampires killed
someone, and did not change their vote for a sound argument. Fixes (design binding, details in
`docs/AI-BOTS.md`; every rule statement matches `game.js`):

- **Turn data computed by code, from the bot's own seat only** (`viewFor`, chat delivered to its seat, its own
  notes): one chronological `<timeline>` (night/day headers with the current one marked `(NOW)`, public
  events in place, chat lines, the line being answered marked `>>`, speakers who are out tagged
  `[OUT · shown Vampir · evil team]` / `[OUT · role hidden]`); `<players>` split into living and OUT;
  `<facts>` with each night's public outcome (a night with a vampire death had exactly one vampire
  attack; a quiet night lists its possible reasons, Tipi included), what the village lost with each shown
  role (true caveats for Hırsız, İftiracı, hidden roles, Deli), the **roles still unaccounted for among the
  living** (lobby `distribution` + `rolePool` minus own role, shown roles and, for evil bots, team-mates),
  the evil count and how many wrong hangs the village can afford, earlier vote history, and the bot's own
  nights. A new record is built for every game; lobby and end-screen chat never enter a game turn.
- **Rules knowledge in the (cached, identical) system prompt** (≈ 7 K tokens): per role what it does, learns
  and can never know; the private announce kinds; what each public outcome can and cannot mean; counting
  roles by elimination; what to ask a claimed role and how to check a claim; an evidence scale (asking
  questions, asking who the Kahin is, jokes, jobs are not evidence); voting rules; re-reading a player's
  lines after his role is shown (including a broken claim: A claimed Gözcü, B is later shown as Gözcü →
  A lied, or is evil, or is the Deli if Deli is possible); answering an accusation on the substance; no
  pile-on votes; varied human-like talk; short Turkish bad → good examples.
- **Decisions**: `think` (private scratchpad, written first) and a 700-character `memory` in the shape
  `claims | results | suspects | trusted | my story`. Day votes: an optional early turn (about half the bots,
  30–55 % of the day; an empty vote is normal), a binding turn for every bot at 78–86 % (best-supported
  suspect or "uyu"), random fallback no earlier than 92 %.
- **Dev harness** `scripts/ai-eval.js` (not used by the server): 20 scenarios on real `Room` objects with
  automatic checks, `--selfplay`; see `docs/AI-BOTS.md`.

## 19. Automatic post-game review of the smart bots (owner request 2026-11-17)

Goal: find the bots' mistakes without reading every game, and turn them into rules (`lib/ai/rules.js`) and scenarios (`scripts/ai-scenarios.js`).

- When a game that had smart bots (at least one successful model call) ends, the server builds a **game record** (public timeline, votes with voters,
  public chat in order, every bot's night picks/outcomes, private results, last turns with `think`/`memory`; no human private info; ≈ 60 K characters max, oldest
  chat dropped first) and, asynchronously and never blocking the game, sends it to a stronger model (`AI_REVIEW_MODEL`, default `claude-sonnet-5-5`) together with the
  bots' rule book. The model returns structured JSON: `summary`, `mistakes[]` (bot, when, quote, what was wrong, rule violated or missing, severity, suggested rule change,
  suggested scenario) and `good_moves[]`.
- Own budget: `AI_REVIEW_DAILY_LIMIT` (default 30 / day); off with `AI_REVIEW=off`, without a key, or with `AI_BOTS=off`. Any failure logs one line; the game never notices.
- Stored in the existing store (table `vk_ai_reviews` / file `ai-reviews.json`), latest 200 kept. Read through `GET /api/admin/ai-reviews` and `/:id`, protected by
  `ADMIN_TOKEN` (Bearer, constant-time compare, rate-limited, 404 when unset). Developer script `scripts/ai-reviews.js` writes markdown plus `scenario-drafts.md`
  (similar mistakes grouped, most frequent first) into the git-ignored `ai-eval-out/reviews/`; `scripts/ai-eval.js --selfplay --review` does the same locally.
- One log line per review (`[ai-review] oda=… model=… hata=N (yüksek=…) maliyet≈$…`), no chat text, no names.
- The lobby note now also says that finished games may be reviewed by the AI service to improve the bots.
- Measured: ≈ $0.13 per review of a 9-bot game (details and a first real review in `docs/AI-BOTS.md`).

## 20. Game history for every game (owner request 2026-11-17)

Goal: keep every finished game's full history as text for later analysis (what happened, how the bots talked, what the humans said to the bots, what problems came up). Details: `docs/GAME-LOGS.md`.

- Every `Room` has a `GameRecorder` (`lib/ai/gamerec.js`, hooks in `game.js` through `room.rec(...)`); with or without bots. A record (`v:2`) is built when the game ends, or when the room closes mid-game after at least one night
  (`end: "abandoned"`). It holds game id, room code, start/end, settings, players (human / bot / smart bot, final role & team, alive, how and when they died), winner and the full ordered event list: phases, public log,
  ALL chat with channel (genel / vampir / olu) and time, night picks per player, the resolved night, private results marked per recipient, day votes with every change and the tally, Avcı shots and events (through the log),
  smart bots' per-turn `think`/`memory` and fallbacks. ≈ 200 K characters max (oldest bot notes go first, then chat), stored gzip + base64 (a small game ≈ 4 K).
- Storage in both stores, written asynchronously after the game (`hooks.gameLog`; failure = one log line): table `vk_game_logs` (created at start-up) / file `game-logs.json`; the newest 500 games or ≈ 200 MB.
  `vk_ai_reviews.game_log_id` is added to the live table at start-up.
- The Sonnet review of smart-bot games is unchanged (same limits); its input is now `reviewView(log)` (v:1 shape, no human private info) and the review and the log are linked both ways.
- `GET /api/admin/game-logs` (list) and `/:id` (decompressed record): same `ADMIN_TOKEN` auth and rate limit as the review endpoints. `GAME_LOGS=off` disables saving.
- `scripts/game-logs.js`: downloads new logs into the git-ignored `ai-eval-out/game-logs/` as raw JSON and a readable Turkish markdown transcript; `--analyze [ids]` has the server analyse them with `claude-sonnet-5-5`
  (see below) and writes the Turkish analysis (`analysis-<id>.md`, cost printed). `scripts/ai-eval.js --selfplay` also writes `selfplay-gamelog.json` (`--local`).
- **Analysis on the server** (owner request 2026-11-17; the developer PC has no valid API key): `lib/ai/analyze.js` holds the analysis prompt (moved out of `scripts/game-logs.js`) and an `Analyzer` that reuses the reviewer's transport
  (`sdkTransport`, `classify`), model `AI_ANALYZE_MODEL` (default `claude-sonnet-5-5`), its own daily limit `AI_ANALYZE_DAILY_LIMIT` (default 20, counted in memory), `AI_ANALYZE_EFFORT`, `AI_ANALYZE=off`. `POST /api/admin/game-logs/:id/analyze[?force=1]`
  (same `ADMIN_TOKEN` auth and rate limit) starts an **async job** and answers `202` (a 1-4 min request would hit Render's free-tier response timeout); `GET /api/admin/game-logs/:id/analysis` is the cheap poll; the result is stored with the log
  (`vk_game_logs.analysis / analysis_cost / analysis_model / analyzed_at`, added to the live table with the `information_schema` + `ALTER TABLE` pattern; JSON store: same fields), `GET /api/admin/game-logs/:id` returns it and the list shows `analyzed`.
  `scripts/game-logs.js --analyze [ids | --latest N] [--force]` now calls that endpoint (`ADMIN_TOKEN` + `REVIEW_URL`), polls, writes `analysis-<id>.md` and prints the cost; `--local-model` keeps the old local call.
  One numbers-only log line per analysis (`[ai-analyze] ...`), `/healthz` -> `aiAnalyze`. Failures never touch the game or crash the server. Details: `docs/GAME-LOGS.md` "Analysis runs on the server".
- Privacy: humans' chat is stored; the lobby sheet now says "Oyun içi sohbet mesajları ve oyun geçmişi, oyunu geliştirmek için saklanır (IP adresi, oturum anahtarı ya da parola saklanmaz)". No IPs, tokens, passwords or user ids are in a record.

## 21. Vampire count setting, hybrid tier, lock secrecy (owner requests 2026-11-18)

### 21.1 `settings.vampires`

- `'auto'` (default, the old numbers: 1 below 10 players, 2 at 10+, 3 at 15+) or an integer 1–4 (`"1"`–`"4"` strings are accepted; everything else becomes `'auto'`). Validated in `normalizeSettings`.
- At game start (and in the lobby preview) the effective count is `vampireCount(players, setting)`: an integer is clamped to `[1, floor((players−1)/2)]` so the village keeps a majority (5 players → at most 2, 7 → 3, 8 → 3, 9 → 4). If the host asked for more than allowed, the log line says so (`Vampir sayısı: 2 (istenen 4; köy çoğunlukta kalsın diye en fazla 2 olabildi).`) and the lobby sheet note shows the real number.
- It feeds both dealing modes (`rolePlan`, `randomPlan`, `rolesFor`, `distributionFor`, `assignRoles` take it as the last argument), so `room.vampireCount`, `room.distribution` / `rolePool` (the bots' public facts) and the real deal agree. Client mirror: `vampireCount` / `distributionPlan(n, roles, mode, vampires)` in `public/ui/data.js`.
- UI: "Vampir sayısı" segmented control (Otomatik, 1–4) in the create form and the lobby settings sheet, with a live hint (the clamp is explained instead of disabling values; with the redesign of §22 the hint says N vampires = up to N kills a night); stored in the last-used settings.
- Balance note (§22): since every vampire now kills each night, N vampires means up to N kills per night; the clamp only keeps the village numerically ahead at the start. The owner will tune the numbers after playing.

### 21.2 Karma (hybrid) bot tier

Sonnet only for bots whose real role is `vampir`, `gozcu` or `doktor` (every vampire, since vampires are the only evil role); everybody else is Haiku (kahin, hirsiz, koylu, cadi, avci, muhtar, gardiyan, soytari, deli). Roughly a third of the bots on a table are Sonnet.

### 21.3 Gardiyan lock secrecy

The owner of a locked door is **not told in advance** (no announce at night start, no `night.locked`; the new `night.lockFound` is false until he learns it; his `canAct` is unchanged). He learns it only (i) when he tries to go out: a selection of ANOTHER house is rejected with "Kapın dışarıdan kilitlendi, bu gece evinden çıkamazsın.", recorded as `triedToLeave` (`room.lockTried`), he gets the private `locked` announce + note and cannot act any more that night (a pass or a selection of his own house – Doktor self-protect, Gözcü own house – is accepted and reveals nothing), or (ii) when a visitor knocks (`rattled`, unchanged). Players without a night action never find out. The Gardiyan's `lockreport` now also says whether the owner tried to go out ("…; ev sahibi de dışarı çıkmak istedi" / "…; ev sahibi evden çıkmak istemedi"), so he can infer that the owner has a night action. Rule bots rejected by the lock simply stay home (no retry loop); smart bots count the rejection as a normal outcome (no fallback) and see "You tried to go out and found your door locked" on their next turn only after trying. Nothing about the lock reaches other seats; the 3D show needs no change (a locked player who tried to leave just stays home; visitors bounce as before).

## 22. Vampire redesign: every vampire kills, abilities instead of helper roles (owner request 2026-11-18)

Owner: "2 vampires should mean 2 kills… İftiracı and Temizlikçi stop being roles; they become abilities of vampires… if the Gözcü catches two vampires at the same house, both are caught." This **supersedes §16** (İftiracı / Temizlikçi roles, helper promotion, "the first vampire pick sets the team's one victim").

### 22.1 What was removed

- Roles `iftiraci` and `temizlikci`, `HELPER_ROLES`, helper dealing (`enabledHelpers`, "one guaranteed helper at 7+", the 13+ second-helper chance), `rolePool.maybe / helpers / helpersMax`, helper promotion (`promoteFramer`, the `promote` announce), the role cards / role-list entries / story texts that named them as roles, `teamTarget` / `framer` / `cleaner` in the night view. Evil team = living `vampir`s; village wins when no vampire is alive; evil wins when living vampires ≥ everyone else. A Hırsız who steals a Vampir becomes a `vampir` with no ability.

### 22.2 Abilities

- `player.ability: 'iftira' | 'temizlik' | null`. The two room switches keep their keys `settings.roles.iftiraci` / `temizlikci` (stored settings keep working); UI names "İftira yeteneği" / "Temizlik yeteneği" in their own "Vampir yetenekleri" section.
- Dealing (`dealAbilities`, after the roles): only with ≥ 7 players; each enabled ability goes to a distinct random vampire; one vampire and both abilities enabled → one random ability; abilities beyond the vampire count are dropped. They never use a role slot.
- Visibility: the owner (`me.ability`, role card), his evil team-mates (`players[i].ability`, "Vampir · iftira yeteneği") and everybody at `ended`; public reveals, the Kahin and everybody else only see "Vampir".

### 22.3 Night

- **Every living vampire acts independently**, one action per night, final: `kill` (default; goes to the victim's house and kills), or with the matching ability `frame` / `clean` on a non-evil player (not self). `night:select` `{ targetId, action }`: `action` `'frame'` / `'clean'` (needs the ability, else "İftira/Temizlik yeteneğin yok."), anything else = kill.
- What a click means: a vampire without ability → kill that house. A vampire with ability → the mode toggle in the night UI ("Öldür" / "İftira at" or "İzleri sil", like the Cadı's heal/poison toggle) decides between kill and the ability.
- Two vampires may pick the same victim (one death, both walk there, a Gözcü there sees both – the risk) or different victims (several deaths, each walks to his own victim's house). Resolution per victim as before: Doktor protects one player; Cadı heals one (she sees the **list** of current victims); a locked killer stays home (locked players are rejected, see §21.3); a locked victim door bounces every visitor; if the Doktor / Cadı is among the victims they are resolved first (their protection / heal no longer counts for others if they die). The rest of the order (Hırsız, poison, dying players never left home, announces) is unchanged; every walking vampire is a visitor for the Gözcü and counts for the Gardiyan.
- `frame`: a Kahin inspecting the framed player that night sees "Vampir" as one of the two roles; if he dies that night or is hanged the next day he is shown as Vampir (not Avcı / Soytarı). `clean`: if the cleaned player dies that night **or is hanged the next day** (new), his role stays hidden ("izler silinmiş"); marks `room.frameMark` / `room.cleanMark` live for night N and day N.
- Night view for vampires: `mySelection`, `myKind`, `ability`, `team: [{ vampId, name, targetId, kind, ability }]` – the team sees each other's picks as before. `show.team` generalises to several killers / victims (every other evil trip: `kill` / `frame` / `clean`). The 3D show needs no change: each killer walks to his own victim's house (killers on the same victim enter together), the `kill` interior scene belongs to the viewer's own trip.
- Pacing: every vampire is awaited until he picks or passes; the night ends early when all awaited players decided.

### 22.4 Bots

- Rule bots: each vampire bot picks its own victim (prefers victims not already picked by team-mates, 25 % the same); with an ability it uses it ~40 % of the time (frame: a random villager; clean: a current victim if any, else a villager); the temizlik vampire acts later (5–7.5 s) to see the picks.
- Smart bots: the night task (`lib/ai/prompt.js`) explains the per-vampire choice, the abilities and shows `Team picks tonight: …`; the answer's `target` is a name or `"iftira: Name"` / `"temizlik: Name"`; 2nd+ vampires and the temizlik vampire are asked ~3.5 s late. `lib/ai/rules.js` / `roles.js` / `facts.js` were rewritten for k vampires (up to k kills a night, abilities, no helpers in the role counts, "framed by a vampire's İftira ability", cleaned hanged players are not evil). Hybrid tier: §21.2.

### 22.5 Tests

`test/round7.test.js` (abilities, dealing, 2 victims / same victim seen by the Gözcü, frame / clean incl. clean + hanged, no promotion, bot games), `test/locksecret.test.js` (§21.3), `test/vampires.test.js` (setting), the seeded leak audit in `test/narration.test.js` (abilities and `myKind` never reach non-evil seats).
