# Credits

Each asset owner keeps their own section below (see `docs/V2-PLAN.md` §9).

## Models (`public/assets/models/`)

All 3D models are **CC0 1.0 (public domain)** by **Kenney** (Kenney Vleugels, https://kenney.nl),
except a few small pieces built procedurally for this project (also CC0). Licence was checked in each
pack's own `License.txt` ("License: (Creative Commons Zero, CC0)") and on its kenney.nl page
("CC0 licensed"). A copy of every pack's licence file is kept in `models/licenses/`. Credit is not
required; we give it anyway. Models were converted to metres (x2.5), merged, re-centred, and
some faces were split into recolourable materials (`cloth`, `tint-*`); the shapes are Kenney's.

| Pack (version) | Author | Licence | Source | Used for |
|----------------|--------|---------|--------|----------|
| Mini Characters (2.0) | Kenney | CC0 1.0 | https://kenney.nl/assets/mini-characters | 12 villager skins, shared animations, cap/beanie/hard-hat hats, bow, sword, bag |
| Graveyard Kit (5.0) | Kenney | CC0 1.0 | https://kenney.nl/assets/graveyard-kit | vampire, ghost, skeleton, zombie, keeper; gravestones, coffins, iron fence, candles, lamp posts |
| Fantasy Town Kit (2.0) | Kenney | CC0 1.0 | https://kenney.nl/assets/fantasy-town-kit | house modules (houses 0, 1, 3), banners, trees, rocks, fences, cart, stalls, fountain |
| Holiday Kit (2.0) | Kenney | CC0 1.0 | https://kenney.nl/assets/holiday-kit | log-cabin modules (house 2), bench, lanterns, top hat |
| Survival Kit (2.0) | Kenney | CC0 1.0 | https://kenney.nl/assets/survival-kit | campfire, logs, signposts, tools, trapdoor, bucket, bottles |
| Mini Dungeon (2.0) | Kenney | CC0 1.0 | https://kenney.nl/assets/mini-dungeon | table, chair, chest, barrel, potion, barred gate, stairs, wood frames |
| Mini Forest (1.0) | Kenney | CC0 1.0 | https://kenney.nl/assets/mini-forest | trees, bush, rocks, flag pole, sprout hat, tent |
| Food Kit (2.0) | Kenney | CC0 1.0 | https://kenney.nl/assets/food-kit | cauldron, mortar, garlic (onion), bread, cheese, wine |
| Castle Kit (2.0) | Kenney | CC0 1.0 | https://kenney.nl/assets/castle-kit | metal gate, castle gate, flag |
| Pirate Kit (2.1) | Kenney | CC0 1.0 | https://kenney.nl/assets/pirate-kit | crates |
| Furniture Kit (2.0) | Kenney | CC0 1.0 | https://kenney.nl/assets/furniture-kit | beds, bookcases, rugs, small tables |
| Nature Kit (2.1) | Kenney | CC0 1.0 | https://kenney.nl/assets/nature-kit | flower hat |
| Procedural (this project) | Vampir Köylü | CC0 1.0 | built by the asset scripts | bat, straw hat, bandana, earmuffs, house interior "window glow" box, `tint.png` |

## Audio (`public/assets/audio/`)

All audio is either generated for this project, synthesized by us, or CC0. No third-party music,
no copyrighted samples. Processing for every file: decode, trim, crossfaded seamless loop (music and
ambience), loudness normalisation, mono/stereo MP3 encode with ffmpeg (LAME).

Sources:

- **Generated (ElevenLabs Music v2 via Higgsfield, project owner's account, 2026-11-12).** Original
  instrumental music from text prompts describing the style only (no artists, songs or games named).
  Used under the Higgsfield/ElevenLabs terms for generated output.
- **Generated (Mirelo text-to-audio via Higgsfield, same account and date).** Sound effects and
  ambience from text prompts.
- **Synthesized by us.** Offline synthesis (Karplus-Strong plucks, additive bells/chimes, filtered
  noise, sine sweeps, a small Schroeder reverb). Our own work, released with the project.
- **Kenney (kenney.nl), CC0 1.0.** Packs "Impact Sounds", "RPG Audio" by Kenney Vleugels.
  License: Creative Commons Zero, http://creativecommons.org/publicdomain/zero/1.0/. Credit is not
  required. We credit him anyway.

| File | Source | Details |
|------|--------|---------|
| `music/menu.mp3` | Generated (ElevenLabs Music v2) | Warm medieval-folk menu/lobby theme, lute, flute, frame drum. Loop 73.0 s |
| `music/day.mp3` | Generated (ElevenLabs Music v2) | Lively, slightly suspicious daytime "village debate" theme. Loop 62.2 s |
| `music/night.mp3` | Generated (ElevenLabs Music v2) | Sparse, tense, eerie night theme. Loop 56.7 s |
| `sfx/win.mp3` | Generated (ElevenLabs Music v2) | Victory stinger |
| `sfx/lose.mp3` | Generated (ElevenLabs Music v2) | Defeat stinger |
| `amb/fire.mp3` | Generated (Mirelo) | Campfire crackle loop |
| `amb/night.mp3` | Generated (Mirelo) | Night bed, crickets and light wind |
| `amb/day.mp3` | Generated (Mirelo) | Day bed, distant birds and breeze |
| `sfx/hunter.mp3` | Generated (Mirelo) | Short hunting-horn call, trimmed |
| `sfx/shot.mp3` | Generated (Mirelo) | Soft musket pop, trimmed and low-passed |
| `sfx/step.mp3`, `step-2..5.mp3` | Kenney Impact Sounds (CC0) | `footstep_grass_000..004` |
| `sfx/vote.mp3`, `vote-2.mp3` | Kenney Impact Sounds (CC0) | `impactWood_light_000/001` |
| `sfx/door.mp3` | Kenney RPG Audio (CC0) | `doorOpen_1` + `doorClose_2` |
| `sfx/door-2.mp3` | Kenney RPG Audio (CC0) | `doorOpen_2` + `doorClose_1` |
| `sfx/hang.mp3` | Kenney RPG Audio + Impact Sounds (CC0) | `creak1` + `impactWood_heavy_000` + `impactPlank_medium_000` |
| `sfx/click.mp3` | Synthesized | Soft wooden click |
| `sfx/tick.mp3`, `tick-2.mp3` | Synthesized | Wooden clock tick/tock |
| `sfx/join.mp3`, `leave.mp3`, `message.mp3` | Synthesized | Plucked/chime UI blips |
| `sfx/start.mp3` | Synthesized | Rising plucks, strummed chord, frame drum |
| `sfx/night.mp3` | Synthesized | Soft gong swell, descending celesta |
| `sfx/dawn.mp3` | Synthesized | Rising harp arpeggio, bird chirps |
| `sfx/death.mp3` | Synthesized | Cartoon ghost "woo" over a soft chime |
| `sfx/safe.mp3` | Synthesized | Warm harp glissando, sparkle |
| `sfx/seer.mp3` | Synthesized | Crystal-ball shimmer |
| `sfx/watch.mp3` | Synthesized | Spyglass clicks, low harp dyad |
| `sfx/bell.mp3` | Synthesized | Single chapel-bell toll (inharmonic partials) |
| `sfx/bite.mp3`, `potion.mp3`, `poof.mp3` | Synthesized | Cartoon chomp, cork pop and bubbles, smoke puff |
| `sfx/whoosh.mp3`, `whoosh-2.mp3` | Synthesized | Filtered-noise swooshes |
| `sfx/owl.mp3` | Synthesized | Distant owl hoots (random night ambience, played by the engine) |

## UI (`public/assets/ui/`, `public/ui/`)

- **Fraunces** (display font, variable, "soft" axis subset) by The Fraunces Project Authors
  (Undercase Type), SIL Open Font License 1.1. Files: `ui/fonts/fraunces-*.woff2`, licence
  `ui/fonts/OFL-Fraunces.txt`. Taken from the Fontsource packaging of Google Fonts (`@fontsource-variable/fraunces` 5.3.0).
- **Nunito** (text font, variable weight) by The Nunito Project Authors, SIL Open Font License 1.1.
  Files: `ui/fonts/nunito-*.woff2`, licence `ui/fonts/OFL-Nunito.txt` (`@fontsource-variable/nunito` 5.3.0).
  Both fonts are split into `latin` and `latin-ext` subsets; together they cover all Turkish letters
  (ç ğ ı İ ö ş ü).
- **Icons, role emblems, logo, favicon (`ui/icon.svg`) and the 2D fallback village/characters**
  (`public/ui/icons.js`, `public/ui/world-fallback.js`): drawn for this project as inline SVG / canvas
  code. Our own work, released with the project. No third-party icon set, no platform emoji.
