# Vampir Köylü v2 – Story engine ("Köy Günlüğü")

`lib/story/` turns public game events into Turkish narration, a daily rumour (dedikodu), a
cinematic scene id and an end-of-game recap. It is pure, synchronous, dependency-free and seeded:
the same seed and the same sequence of calls always produce the same text.

This file is everything the server owner needs to wire it into `game.js`. Owner of `lib/story/**`,
`test/story*.test.js` and this file: story. Tests: `node --test "test/story*.test.js"`.

Contents: 1 Rules · 2 API · 3 Input/output types · 4 Wiring into game.js (every call site) ·
5 State/announce/log additions for the UI · 6 Text changes vs v1 · 7 Content overview · 8 Files

---

## 1. Rules (why the API looks like this)

- **Public information only.** The engine receives only what every living player already knows:
  round numbers, the roster (ids, names, jobs), public deaths and their cause (`vampir`/`zehir`),
  final day ballots and the vote-change trail (both visible to everyone in `state.day`), counts of
  public day-chat messages, hunter events, leaves, and the winner.
  It **never** receives night selections, who protected/healed/inspected/framed/watched whom,
  vampire picks, seer/watch results, promotions, or the vampire/dead chat.
- **Roles.** Pass a dead player's `role` only where the room makes it public (same rule as the
  `{role}` suffix today: `settings.revealRoles`, or a hanged Soytarı). The engine re-checks: it was
  created with `revealRoles` and silently discards any role that is not public. With roles hidden,
  every narration is byte-for-byte identical whatever role you pass (tested).
  `win()` may receive all roles: at `ended` everything is public.
- **Never crashes the server.** Every method of the object returned by `createChronicle` is wrapped
  in try/catch. On any internal error it returns the plain factual line (same title/text as v1,
  `story: ''`, default scene). `chat()` and `vote()` never throw and return nothing.
- **No repetition** inside one game (each template is used at most once while unused ones remain),
  `story` ≤ 220 characters, rumours ≤ 220, epilogue a paragraph (typically 400–900 characters).

## 2. API

```js
const { createChronicle } = require('./lib/story');

const story = createChronicle({ seed, revealRoles, players, scenario });
story.seed            // string – store it if you want to reproduce a game
story.scenario        // { id, name, mood }
story.jobs()          // [{ id: playerId, job: { id, label } }]   – unique per game, from the seed
story.jobOf(playerId) // { id, label } | null

story.start()                                   // -> Narration & { scenario }
story.night({ round })                          // -> Narration
story.dawn({ round, deaths })                   // -> Narration (death or safe)
story.day({ round })                            // -> Narration & { rumor: { text } }
story.vote({ voter, to, msLeft })               // record one public vote change (no return)
story.chat(playerId)                            // count one public day-chat message (no return)
story.hanged({ round, id, votes, role, ballots })   // -> Narration & { scene, log }
story.noHang({ round, reason, ballots })        // -> Narration
story.sleep({ round, ballots })                 // -> Narration
story.hunter({ id })                            // -> Narration
story.shot({ hunterId, id, role })              // -> Narration & { scene: 'arrow' }
story.noHunt({ hunterId })                      // -> Narration
story.left({ id, role })                        // -> Narration
story.win({ winner, winners, roles })           // -> Narration
story.epilogue()                                // -> { title: 'Köy Günlüğü', text, story, scenario }
```

Also exported: `assignJobs(playerIds, seed)` (the same assignment the chronicle uses), `ROLE_LABEL`,
`HANG_SCENES`, `BITE_SCENES`, `SCENE_DEFAULT`.

## 3. Input / output types

```ts
type Id = string;                  // player id (players[i].id)
type Role = 'vampir'|'iftiraci'|'doktor'|'kahin'|'gozcu'|'cadi'|'avci'|'muhtar'|'soytari'|'koylu';

createChronicle(opts: {
  seed?: string|number;            // default: random. One new seed per game.
  revealRoles: boolean;            // room.settings.revealRoles at game start
  players: { id: Id, name: string }[];  // everyone dealt into the game, join order
  scenario?: string;               // force a scenario id (tests/demo); omit in production
})

Narration = {
  title: string;                   // as v1 announce title
  text: string;                    // short factual line (v1 content; see §6 for the few changes)
  story: string;                   // 1–2 narrated sentences, <= 220 chars ('' only on internal error)
  scene?: string;                  // cinematic variant, see below
}

dawn input:   { round: number, deaths: { id: Id, cause: 'vampir'|'zehir', role?: Role|null }[] }
dawn output:  deaths empty -> safe:  { title:'Sabah oldu', text:'Bu gece kimse ölmedi.', story }
              otherwise:            { title:'Sabah oldu', text, story, scene, targets: { id, cause, scene }[] }
              scene per target: vampir -> 'bite'|'bats'|'vanish', zehir -> 'poison'; top-level scene = targets[0].scene

Ballot = { voter: Id, target: Id|'sleep', w?: 1|2 }   // final ballots of ALIVE voters at day end, w = vote weight
                                                     // (also accepted: an object { [voter]: target })
vote input:   { voter: Id, to: Id|'sleep'|null, msLeft: number }  // value AFTER the change (null = withdrawn),
                                                     // msLeft = deadline - now at that moment
hanged input: { round, id: Id, votes: number /* the n shown in the text */, role?: Role|null, ballots: Ballot[] }
hanged out:   { title:'Köy kararını verdi', text, story, scene: 'gallows'|'exile'|'cellar', log }
noHang input: { round, reason: 'novote'|'tie', ballots: Ballot[] }
sleep input:  { round, ballots: Ballot[] }
hunter input: { id: Id }                              // the dying hunter (role becomes public by this event)
shot input:   { hunterId: Id, id: Id, role?: Role|null }
noHunt input: { hunterId: Id }
left input:   { id: Id, role?: Role|null }            // only for an ALIVE player leaving a running game
win input:    { winner: 'koylu'|'vampir'|'soytari', winners: Id[], roles: { [id: Id]: Role } }
day output:   { title: '<n>. Gün', text: '<n>. gün başladı.', story, rumor: { text } }
start output: { title, text, story /* = scenario intro */, scenario: { id, name, mood, intro } }
```

Unknown ids, missing fields, wrong types, empty rosters etc. are tolerated (unknown names fall
back to the `name` you pass, else "Biri"/"bir komşu"). Unknown scene ids on the client fall back
to the default of the announce kind (`hanged` → `gallows`, `death` → `bite`, `shot` → `arrow`).

## 4. Wiring into `game.js`

Everything below is a suggestion for the server owner; names like `narrate`/`storyLine` are free.

```js
const crypto = require('crypto');
const { createChronicle } = require('./lib/story');

// in Room:
// Anlatı satırını günlüğe ekler (boşsa eklemez).
storyLine(text, kind = 'story') { if (text) this.addLog(text, kind); }
roleIfPublic(p) { return this.settings.revealRoles ? p.role : null; }
```

### 4.1 `resetGame()`
```js
this.story = null;          // new chronicle per game
this.scenario = null;       // { id, name, intro } for the state view
this.epilogue = null;
for (const p of this.players.values()) p.job = null;
```

### 4.2 `start(byId)` – after roles are assigned, before `announce('start')`
```js
this.story = createChronicle({
  seed: crypto.randomBytes(8).toString('hex'),
  revealRoles: this.settings.revealRoles,
  players: [...this.players.values()].map((p) => ({ id: p.id, name: p.name })),
});
for (const { id, job } of this.story.jobs()) this.players.get(id).job = job;   // public, cosmetic
const n = this.story.start();
this.scenario = { id: n.scenario.id, name: n.scenario.name, intro: n.scenario.intro };
this.addLog(`Oyun başladı: …`, 'info');                       // unchanged
this.storyLine(n.story);
this.announce('start', n.title, n.text, { story: n.story, scenario: this.scenario });
```

### 4.3 `startNight()`
```js
const n = this.story.night({ round: this.round });
this.addLog(`${this.round}. gece başladı.`, 'night');         // unchanged
this.storyLine(n.story);
this.announce('night', n.title, n.text, { story: n.story });
```

### 4.4 `endNight()` – replaces the death/safe announce block
```js
const n = this.story.dawn({
  round: this.round,
  deaths: deaths.map(({ id, cause }) => ({ id, cause, role: this.roleIfPublic(this.players.get(id)) })),
});
if (deaths.length) {
  // keep the per-death addLog(... 'death') lines as they are
  this.announce('death', n.title, n.text, { targets: n.targets, scene: n.scene, story: n.story });
} else {
  this.addLog(`${this.round}. gece kimse ölmedi.`, 'safe');
  this.announce('safe', n.title, n.text, { story: n.story });
}
this.storyLine(n.story);
// seer / watch / promote announces: unchanged, NOT given to the story engine
```
`targets` keeps v1's `{ id, cause }` and adds `scene`. Call `dawn()` after `deaths` is final and
before `afterDeaths()`.

### 4.5 `startDay()`
```js
const n = this.story.day({ round: this.round });
this.addLog(`${this.round}. gün başladı.`, 'day');            // unchanged
this.storyLine(n.story);
this.storyLine(n.rumor.text, 'rumor');
```
No new announce kind is needed (the UI reads `kind:'story'`/`'rumor'` from `state.log`). If the UI
wants a day caption, an optional `announce('day', n.title, n.text, { story: n.story, rumor: n.rumor.text })`
is fine too.

### 4.6 `vote(byId, targetId)` – after a successful change, before `checkDayProgress()`
```js
this.story.vote({ voter: byId, to: this.dayVotes.get(byId) ?? null, msLeft: this.deadline - Date.now() });
```

### 4.7 `chat(fromId, rawText)` – only public day messages of living players
```js
if (channel === 'genel' && (this.phase === 'day' || this.phase === 'hunter') && p.alive && this.story) {
  this.story.chat(p.id);
}
```
Do **not** count `vampir` or `olu` channel messages (not public). The engine ignores calls outside
an open day and for dead/unknown ids, and only makes chat rumours when it saw ≥ 5 messages from
≥ 3 speakers that day (so a missing hook can never produce a false "X never spoke" rumour).

### 4.8 `endDay(unanimousSleep)`
```js
// final ballots of alive voters (sleep included), same data the clients see in state.day
const ballots = [...this.dayVotes]
  .filter(([v]) => { const p = this.players.get(v); return p && p.alive; })
  .map(([voter, target]) => ({ voter, target, w: this.voteWeight(voter) }));

// unanimous sleep:
const n = this.story.sleep({ round: this.round, ballots });
this.storyLine(n.story);
this.announce('sleep', n.title, n.text, { story: n.story });

// hanged:
const role = this.settings.revealRoles || hanged.role === ROLE.JESTER ? hanged.role : null;
const n = this.story.hanged({ round: this.round, id: hanged.id, votes: max, role, ballots });
this.addLog(n.log, 'death');                                   // replaces the old "... asıldı." line
this.storyLine(n.story);
this.announce('hanged', n.title, n.text, { targets: [{ id: hanged.id }], scene: n.scene, story: n.story });

// nobody eliminated:
const n = this.story.noHang({ round: this.round, reason: max === 0 ? 'novote' : 'tie', ballots });
this.storyLine(n.story);
this.announce('nohang', n.title, n.text, { story: n.story });
```
Call the story method in the same place the announce is made today (before `finish`/`afterDeaths`).

### 4.9 Hunter – `startHunter()` and `resolveHunter()`
```js
// startHunter
const n = this.story.hunter({ id: hunter.id });
this.storyLine(n.story);
this.announce('hunter', n.title, n.text, { targets: [{ id: hunter.id }], story: n.story });

// resolveHunter, shot
const n = this.story.shot({ hunterId: hunter ? hunter.id : null, id: target.id, role: this.roleIfPublic(target) });
this.storyLine(n.story);
this.announce('shot', n.title, n.text, { targets: [{ id: target.id }], actorId: hunter ? hunter.id : null, scene: n.scene, story: n.story });

// resolveHunter, no shot
const n = this.story.noHunt({ hunterId: hunter ? hunter.id : null });
this.storyLine(n.story);
this.announce('nohunt', n.title, n.text, { story: n.story });
```

### 4.10 `removePlayer()` – alive player leaves a running game
```js
const n = this.story.left({ id, role: this.roleIfPublic(p) });
this.storyLine(n.story);
this.announce('left', n.title, n.text, { targets: [{ id }], story: n.story });
```
(Only in the `p.alive` branch. A player who leaves during `reveal` before night 1 is fine too.)

### 4.11 `finish(winner)`
```js
const n = this.story.win({
  winner,
  winners: this.winners,
  roles: Object.fromEntries([...this.players.values()].map((p) => [p.id, p.role])),  // all public now
});
this.epilogue = this.story.epilogue();                      // { title, text, story, scenario }
this.storyLine(n.story);
this.storyLine(this.epilogue.story, 'epilogue');
this.announce('win', n.title, n.text, { ...extra, story: n.story, epilogue: this.epilogue });
```
Call `win()` exactly once per game, **before** `epilogue()`.

### 4.12 Guard and log size
- All calls above assume `this.story` exists (it does from `start()` until the next `start()`);
  guard with `if (this.story)` where a path can run outside a game.
- Narration roughly doubles the number of log entries. Raise the room log cap from 100 to ~250, or
  the end-screen chronicle of a long game will lose its beginning.

## 5. What the UI gets

| Where | New field | Meaning |
|---|---|---|
| every narrated announce (`start night death safe hanged nohang sleep hunter shot nohunt left win`) | `story: string` | caption under the cinematic, also in the chronicle |
| `death` | `scene`, `targets[i].scene` | `bite`/`bats`/`vanish` (vampire) or `poison` per victim |
| `hanged` | `scene` | `gallows`/`exile`/`cellar`; the factual `text` already uses the matching verb |
| `shot` | `scene` | `arrow` |
| `start` | `scenario: { id, name, intro }` | theme of this game; show name + intro on the role-reveal screen |
| `win` | `epilogue: { title, text, story }` | "Köy Günlüğü" recap for the end screen |
| `state.log` | `kind: 'story'` | one per narrated event, in order = the chronicle |
| `state.log` | `kind: 'rumor'` | one per day start, for the town-crier ticker |
| `state.log` | `kind: 'epilogue'` | the recap, last entry of a finished game |
| `state.players[i].job` | `{ id, label } \| null` | public cosmetic job ("Ali · Terzi"); null in lobby |
| `state.room.scenario` | `{ id, name, intro } \| null` | from game start until back to lobby |
| `state.room.epilogue` | `{ title, text, story } \| null` | when `ended` |

Scenario ids: `sisli-vadi` (Sisli Vadi), `kanli-ay` (Kanlı Ay), `hasat-senligi` (Hasat Şenliği),
`kara-kis` (Kara Kış), `veba-soylentisi` (Veba Söylentisi), `panayir` (Panayır Haftası) – the UI may
use them for a tint or an icon. Job ids are ASCII (`terzi`, `firinci`, `nalbant`, …), labels are
display Turkish (`Terzi`, `Fırıncı`, `Nalbant`, …); 32 jobs, unique within a game.

## 6. Text changes vs v1 (announce `text` and log lines)

- `hanged` text and its log line follow the scene: `"<ad> <n> oyla asıldı!"` (gallows),
  `"<ad> <n> oyla köyden sürüldü!"` (exile), `"<ad> <n> oyla mahzene kapatıldı!"` (cellar), plus the
  usual ` Rolü: X.`. `n.log` is the matching log line (`"<round>. gün <ad> <n> oyla <fiil>.<rol>"`).
  Title stays "Köy kararını verdi".
- Soytarı win text follows the last scene: `"Köy Soytarı'yı astı|köyden sürdü|mahzene kapattı… tam
  da onun istediği gibi!"`.
- `nohang` text spells "bugün" (v1 had "bu gün").
- New for the day start: title `"<n>. Gün"`, text `"<n>. gün başladı."` (only if you announce it).
- Everything else is identical to v1. PROTOCOL.md needs updating for these and for §5.

## 7. Content overview (for reviewers)

- **Scenarios** (one per game, random from the seed): each has 3 intros and its own lines for night,
  quiet dawn, death codas, day start, hanging codas, sleep/no-decision, each win, rumours and the
  recap opening. Scenario lines are mixed into the generic pools with double weight.
- **Tone tier**: `early` / `mid` / `late` from deaths so far and survivors
  (late: ≤ 3 alive or ≥ half dead; mid: ≥ 20 % dead or round ≥ 3). Late lines are darker and count
  the survivors; scene weights shift (early: cellar/vanish more likely, late: gallows/bite).
- **Conditioning**: first night, first death, quiet-night streaks, consecutive no-elimination days,
  the previous day's outcome (caught an evil player / hanged an innocent / no decision — only when
  roles are public), close vote (margin ≤ 1), unanimous vote, revealed role of the dead
  (per-role reactions), innocent-hanging streaks, double deaths (vampire + poison in one night),
  exiled/locked-up hunters.
- **Jobs**: 32 village jobs with tool/workplace words; narration says "terzi Ali", "Xyz adlı
  marangozun evine"… When a dead player's role is public, the second sentence is often a job twist:
  for a vampire ("Meğer köyün terzisi bir gece yaratığıymış: … boyunların ölçüsünü en iyi o
  biliyormuş"), for a village-team player ("Yarın köyde ekmek yok."). The recap names every evil
  player with their job. Jobs are assigned from the seed only, never from roles.
- **Rumours**: 21 named families derived from the public record (vote switches and late switches,
  fickle voters, Hızlı Uyu voters, abstainers, silent/talkative players, close calls, ties, lone
  voters, voted-then-victim, most/least voted, voting pairs, bandwagon on yesterday's eliminated
  with the revealed result, same target two days running, first voter) + 36 nameless atmosphere
  lines. A named rumour is always literally true and always about a living player (tested).
- **Names**: `lib/story/turkish.js` adds case endings after an apostrophe with vowel harmony,
  buffer letters and voiceless assimilation (Ahmet'te, Ali'yle, Burak'tı), reads digits aloud
  (Ali99'u, Can40'ı), reads all-consonant capitals as letters (MRK'yi), knows palatal-l names
  (Kemal'i), and falls back to "Xyz adlı komşunun" for anything uncertain (no vowel, q/w/x,
  non-Turkish script, final capital dotless I). No line assumes a player's gender.

## 8. Files

```
lib/story/index.js      createChronicle (stateful per game), safe facade, factual lines, epilogue
lib/story/engine.js     seeded RNG, template renderer, no-repeat picker, composer (220-char limit)
lib/story/turkish.js    suffixes, numbers, ordinals, lists
lib/story/texts.js      generic templates (night, dawn, day, verdicts, hunter, leave, win, recap)
lib/story/scenarios.js  6 scenarios
lib/story/jobs.js       32 jobs + twist lines
lib/story/rumors.js     rumour templates + fact extraction from the public record
lib/story/sim.js        random game simulator (tests and samples only; the server does not use it)
test/story-turkish.test.js, test/story-templates.test.js, test/story-game.test.js
```

---

## 9. Round 4 additions (plan §13: final choices, Gözcü, Gardiyan, village events)

Nothing changes for final night choices or the revised Gözcü: both are private night mechanics
and the engine never sees night actions. Everything below is additive: v1–3 calls keep working.

### 9.1 New public-only calls

```js
story.event({ round, id })            // id: 'tipi'|'ruzgar'|'kisa-gece'|'ayaz'|'sis'|'mahkeme'
  // -> { title, text, story, event: id }   town-crier announcement at the START of the affected phase
story.trial({ round, defendants: [idA, idB] })   // mahkeme: the two players with the most votes
  // -> { title: 'Mahkeme kuruldu', text: '<A> ile <B> savunma yapacak; ardından köy yalnızca bu ikisi arasında oy verecek.', story }
story.defense({ round, id })          // call once per defendant, in speaking order (1st, then 2nd)
  // -> { title: 'Savunma', text: "Söz <ad>'de.", story }   neutral: only the order and the name
story.hanged({ ...as before, trial: true })   // verdict of the re-vote, ballots = RE-VOTE ballots
story.noHang({ ...as before, trial: true })   // re-vote without a decision
```
`title`/`text` of `event()` are defaults (`EVENT_FACT` in `lib/story/events.js`); the server may use
its own factual text. `story` is independent of it.

New output field on two existing calls: `eventEnd: string` (`''` when nothing to close).
- `dawn()` returns the closing line of a **night** event (tipi/rüzgâr/kısa gece): "Kar durdu, rüzgâr
  çekildi. Kapıların önünde diz boyu kar var."
- `night()` returns the closing line of a **day** event (ayaz/sis; mahkeme has none, its verdict
  closes it): "Sis kalktı ama kimin kime oy verdiği sisle birlikte gitti."

Log it as a separate `kind:'story'` line right after the dawn/night line (the UI may show it as a
small second caption). It is kept separate on purpose: the dawn `story` itself is unchanged.

### 9.2 Wiring (call sites in `game.js`)

```js
// when a night event starts (after startNight's narration):
const ev = this.narrate('event', { round: this.round, id }, { title: …, text: … });
this.storyLine(ev.story);
this.announce('event', ev.title, ev.text, { event: id, story: ev.story });   // kind name is the server's choice

// when a day event starts (after startDay's narration and rumour): same call with the day event id.
// sis: call event() BEFORE any vote of that day (the engine then stops recording that day's votes).

// dawn / night: log the closing line
this.storyLine(dawn.eventEnd);      // after the death/safe story line
this.storyLine(n.eventEnd);         // in startNight, after the night story line

// mahkeme, at the end of the first vote:
const t = this.narrate('trial', { round: this.round, defendants: [a.id, b.id] }, …);
// each defence turn starts:
const d = this.narrate('defense', { round: this.round, id: defendant.id }, …);
// re-vote result: hanged/noHang exactly as today, with trial: true and the re-vote ballots.
// Keep calling story.vote(...) for re-vote changes as usual.
```

### 9.3 Secrecy rules (enforced by the engine, tested)

- **Gardiyan / locks are secret.** Never pass who locked which door, who was locked in, or how many
  tried the door. The engine has no input for any of it and ignores unknown fields, so a quiet
  night caused by a lock is narrated exactly like any other quiet night (tested by adding lock
  fields to every input: outputs stay byte-identical). Private announces ("Kapın dışarıdan
  kilitlendi", "Kapı kilitliydi", "Kilitlediğin kapıyı bu gece N kişi zorladı") are never narrated.
- **Sis (secret votes).** After `event({ id: 'sis' })` for round r, that day's `vote()` calls are
  ignored and the ballots passed to `hanged/noHang/sleep` are discarded: the
  engine stores no voter→target link for that day. You may still pass the ballots (or omit them);
  `votes` (the n in the text) must be passed explicitly for `hanged`. Rumours never use a sis day's
  votes; only chat rumours (public) can refer to that day. Tested by shuffling the voters of sis-day
  ballots and vote trails: outputs stay identical.
- **Mahkeme.** Only the re-vote ballots are recorded, so from a trial day the engine only tells
  rumours that are true about the decisive vote (close call, tie, voted-for-then-victim, voted for
  the eliminated player), plus chat rumours.
- Once a sis or trial day has happened, "whole-game" vote rumours (never voted, most/least voted,
  always-together pairs) are switched off for the rest of the game, because the engine no longer
  has the complete public record.
- `trial()`/`defense()` take only ids: defence lines cannot depend on the defendant's role, and
  their wording is neutral (no "terledi", "ikna etti", "masum", … – tested).

### 9.4 Gardiyan in the role vocabulary

`gardiyan` is a village-team role for public reveals (`Rolü: Gardiyan.`), with its own reactions for
a night death / hunter shot and for an elimination, and job twists work as for any village role
(an innocent-loss job line). Never mentioned while roles are hidden (tested). In the epilogue the
recap counts it as village side.

### 9.5 Content

- Event announcements: 5 generic lines per event, plus scenario lines where they fit (Kara Kış:
  tipi, ayaz; Sisli Vadi: sis, rüzgâr; Kanlı Ay: kısa gece, rüzgâr; Hasat Şenliği, Veba Söylentisi,
  Panayır: mahkeme and rüzgâr/sis). Closing lines: 3 per event (+ scenario).
- Mahkeme: 6 openings, 6 + 6 defence turns, 4 verdict codas, 5 no-decision lines.
- Epilogue may add "Köy bu hikâye boyunca bir tipi ile bir mahkeme gördü."
- New file: `lib/story/events.js`. New tests: `test/story-round4.test.js`.
