# Vampir Köylü v2: 3D assets

Notes for the world developer. Everything lives in `public/assets/models/`. The machine-readable
companion is `public/assets/models/manifest.json` (sizes, triangles, bounding boxes, materials,
textures, clips, door/window points, hat list). Licences: `public/assets/CREDITS.md` (Models section)
and one licence file per pack in `public/assets/models/licenses/`.

## 1. Look and conventions

- **One visual family:** everything is Kenney (CC0). That covers Mini Characters 2.0 plus the Graveyard,
  Fantasy Town, Holiday, Survival, Mini Dungeon, Mini Forest, Food, Castle, Pirate, Furniture and Nature
  kits. They share the same chunky shapes and the same "colormap" palette-texture technique (a 512x512
  atlas of flat colour and gradient strips). There are no textures with detail and no normal maps.
- **Units are metres, +Y up, front = +Z.** Every Kenney model was scaled by 2.5 (Kenney unit → metre),
  so `suggestedScale` is always 1. Villagers are about 1.7 m tall (1.65–1.94 m including hair), doors
  about 2 m, walls 2.5 m and trees 4–7 m. Characters and houses face +Z. To turn an object toward a
  target, use `obj.rotation.y = Math.atan2(dx, dz)`.
- **Origins:**
  - Characters: between the feet.
  - Houses: centre of the base. The front wall is at z = +2.5 (log cabin: z = +2.875).
  - Bundle props: bottom centre (bbox centre in x/z, y = 0). Exception: items listed as
    `origin: "kaynak orijini"` in the manifest (modular fences, walls, wall banner, hanging lantern)
    keep Kenney's tile origin. Their geometry sits on the +X edge of a 2.5 m tile centred at the origin.
- **Textures are external PNGs** in `models/textures/` and are referenced as `../textures/<pack>.png`.
  GLTFLoader resolves these relative to the GLB, so keep the folder layout.

## 2. Files (bytes on disk / gzip -9)

| Group | Files | Raw | gzip |
|-------|-------|-----|------|
| characters | `villager-00..11.glb` (≈48–61 KB each), `villager-anims.glb` (39 KB), `vampire/ghost/skeleton/zombie/keeper.glb` (43–91 KB), `bat.glb` (7 KB) | 1.09 MB | ≈0.27 MB |
| houses | `house-0..3.glb` | 0.42 MB | ≈0.09 MB |
| props | `village.glb` (857 KB, 83 props), `graveyard.glb` (347 KB, 29 props) | 1.20 MB | ≈0.28 MB |
| interior | `furniture.glb` (279 KB, 33 items), `clues.glb` (190 KB, 27 items) | 0.47 MB | ≈0.10 MB |
| hats | `hats.glb` (9 hats) | 0.16 MB | ≈0.03 MB |
| textures | 11 palettes ≈10 KB each + `tint.png` | 0.11 MB | ≈0.10 MB |
| **total** | 28 GLB + 12 PNG + manifest + 12 licence files | **3.47 MB** (+0.14 MB manifest.json) | **≈0.88 MB** |

**First playable**, assuming all 12 skins are loaded: about 2.25 MB raw (≈0.55 MB gzipped). That means
12 villagers, the animation file, 4 houses, `village.glb`, `hats.glb` and the textures.
`graveyard.glb`, `interior/*` and the extra characters can be lazy-loaded at the first night or death.
No Draco and no meshopt: plain GLB that gzips/brotlis well (the server already uses `compression`).
Quantization was not used, because it would put dequantization transforms on the nodes, including the
door pivots.

## 3. Characters

### 3.1 Villagers (`look.skin` 0..11)
`characters/villager-NN.glb`, NN = skin index, 690–880 triangles each. All 12 share one 7-bone skeleton
(`kenney-mini-7bone`):

```
villager (scale 2.5) > root > leg-left, leg-right, torso > arm-left, arm-right, head
meshes: body (materials: villager + cloth), head (material: villager)
```

The skin files contain **no animations**. Every clip is in `characters/villager-anims.glb`, which holds
the skeleton only. Tracks bind by bone name, so one clip set drives all 12 skins (and nothing else).

| clip | s | use |
|------|---|-----|
| idle | 1.33 | loop |
| walk | 0.67 | loop. Root bob only, no root motion. Move the object at about 1.6 m/s |
| sprint | 0.50 | loop. Running / fast sneaking (≈3 m/s) |
| crouch | pose | Crouch. Mix with walk for sneaking, or hold while peeking through a window |
| sit | pose | Sit on a log or chair |
| die | 0.33 | play once and clamp. Falls on its back. The last frame is the **sleep pose** (below) |
| fall, jump | once | |
| pick-up | once | Search, pick up a clue |
| interact-right / -left | 0.67 once | Knock, search, pour a potion |
| emote-yes / emote-no | 0.67 loop | Agree/cheer, refuse |
| holding-right / -left / -both | pose | Hold a lantern or torch. Use as an upper-body layer |
| attack-melee-right / -left, attack-kick-right | once | Bite/attack, hunter |

The bind pose is a T-pose, so always play at least `idle`.

```js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
const base = 'assets/models/characters/';
const [anims, skin] = await Promise.all([load(base + 'villager-anims.glb'), load(base + 'villager-03.glb')]);
const ch = SkeletonUtils.clone(skin.scene);          // required for skinned meshes (never .clone())
const mixer = new THREE.AnimationMixer(ch);
const clip = name => THREE.AnimationClip.findByName(anims.animations, name);
mixer.clipAction(clip('idle')).play();
// sleep / death pose:
const a = mixer.clipAction(clip('die')); a.setLoop(THREE.LoopOnce); a.clampWhenFinished = true; a.play();
```

**Sleeping in bed:** at the end of `die` the character lies on its back. The feet are at its origin, the
head points toward local −Z and reaches 1.68 m, and the lowest point is y = −0.18. For the `bed` item
in `interior/furniture.glb` (bed origin at its bottom centre, headboard at −Z), put the character at
`bed.position + (0, 0.66, +0.85)` with the same rotation as the bed. This is verified in `r1-room*.png`.

**Skin meshes are skinned**, so turn off frustum culling for them
(`o.frustumCulled = false`) or enlarge their bounding spheres. The bind-pose bounds are fine for most
clips, but `die` moves the body outside them.

### 3.2 Player colour (20 colours), the recommended technique

During the build, the shirt/jacket faces of each skin (torso and sleeves; the per-skin swatch is
listed in the build) were split into their own primitive with material **`cloth`**. Its UVs were
remapped onto `textures/tint.png`, a neutral white-to-light-grey gradient that keeps Kenney's soft
shading. The colour comes from multiplying by `material.color`:

```js
const clothCache = new Map();                    // one material per colour, shared by all skins
function clothFor(hex, src) {
  if (!clothCache.has(hex)) { const m = src.clone(); m.color.set(hex); clothCache.set(hex, m); }
  return clothCache.get(hex);
}
ch.traverse(o => {
  if (!o.isMesh) return;
  if (o.material.name === 'cloth') o.material = clothFor(COLORS[look.color], o.material);
  else o.material = sharedVillagerMat;           // all 12 skins use the same mini-characters.png
});
```

This works well for all 20 colours on all 12 skins (`c2-colors.png`, `c4-skins-close.png`). Even
black (#3b3b46) and white (#e9ecef) read clearly, and at night the hue survives under the fire light.
Each character costs 3 draw calls (body, cloth, head) plus 1 for a hat. Notes per skin:
- Skins 3 and 10 keep a non-tinted part (red skirt, yellow vest). The coloured area is still the
  largest part of the torso.
- Skins 4, 6 and 11 keep their (orange/leather) suspenders on top of the tinted shirt.

The same trick is used elsewhere: `tint-owner` (house door leaf and wall banner), `tint` (banner-pole,
flag-castle), `tint-ghost` (ghost body) and `tint-hat-*` (hats). Any material whose name starts with
`cloth` or `tint` expects `.color` to be set. Its default colour is white, or a sensible default for
hats.

### 3.3 Hats (`look.hat` 1..8): `hats/hats.glb`
Nodes `hat-1-hasir`, `hat-2-bere`, `hat-3-cicek`, `hat-4-silindir`, `hat-5-bandana`, `hat-6-filiz`,
`hat-7-kasket`, `hat-8-kulaklik` (+ a spare `hat-extra-baret`). Coordinates are **head-bone local**
in mini-character units, so attach the hat with an identity transform and the parent's 2.5 scale is
applied automatically:

```js
const hat = hatsGltf.scene.getObjectByName(HAT_NODES[look.hat]).clone();
hat.position.set(0, skinInfo.hatYOffset, 0);     // manifest.characters.skins[i].hatYOffset (0..0.105) for tall hair
ch.getObjectByName('head').add(hat);
```

| hat | source |
|-----|--------|
| bere | Mini Characters soldier helmet. Tint, default green |
| silindir | Holiday snowman's top hat |
| kasket | Police cap from Mini Characters. Tint, default brown |
| çiçek | Nature Kit flower, worn on the side |
| filiz | Mini Forest sprout |
| baret | Hard hat (spare) |
| hasır, bandana, kulaklık | Built procedurally, in the same blocky style. Tintable |

The hats are verified on 3 skins (`k1-hats*.png`). On skins with a high bun (1, 3, 5) a hat can
intersect the hair a little. Use `hatYOffset`.

### 3.4 Extras
- `vampire.glb`, `ghost.glb`, `skeleton.glb`, `zombie.glb`, `keeper.glb` come from the Graveyard Kit.
  They use a **rigid part hierarchy**: each bone node carries its own mesh, with no skin. They have the
  same clip names but must use **their own** clips (these are inside each file, because the leg height
  differs). They are 1.8–2.2 m tall.
- `ghost` has a `tint-ghost` material on its sheet, so a dead player's ghost can wear their colour. Set
  `transparent: true, opacity: 0.6`.
- `bat.glb` is **procedural**, because no CC0 bat exists in this style. It has a body plus `wing-left`
  and `wing-right` pivots. Flap with `wing-left.rotation.z = sin(t*20)*0.8` and the right wing negated.
  It is about 0.9 m wide, with emissive red eyes. Use it many times, or as an InstancedMesh.

## 4. Houses (`houses/house-0..3.glb`)

| id | look | footprint (m) | tris |
|----|------|---------------|------|
| house-0 | plaster + timber, green roof, chimney | 5.3 × 5.1 × 5.0 | 1924 |
| house-1 | wood, red steep roof | 5.4 × 5.2 × 5.4 | 1544 |
| house-2 | log cabin, green roof, chimney | 6.7 × 6.7 × 5.7 | 2936 |
| house-3 | plaster, red steep roof, chimney | 5.4 × 5.1 × 5.6 | 1816 |

All four were assembled from Kenney modules. Structure:
`house-N > body (one mesh: kit material + window), door (pivot = hinge), banner`.
- **Door:** this is the front-right of every house. Exact numbers are in `manifest.houses[i].door`:
  - `center`, `approachPoint` (1 m in front of the door, the point to walk to) and `facing`.
  - `hingeAt`, `openOutward` / `openInward`. For the town houses `+rotation.y` opens outward; for the
    cabin it is `−rotation.y`. Verified in `h3-doors-open.png`.
  - The door leaf uses `tint-owner`, the owner's colour. The banner shares the same material.
- **Windows:** every house has 4, one per side, including a **back window for the Gözcü**. They are listed in
  `manifest.houses[i].windows` with `center` (y ≈ 1.35 m), `facing` (outward normal) and `peekPoint`.
  `peekPoint` is a spot 0.8 m outside where a character can stand, face `-facing` and look in.
  Verified with characters placed from the manifest numbers (`h4-windows-doors.png`).
- **Window light:** inside each house is a box with material **`window`** (dark warm brown). Through
  every window opening you see that box. At night, set
  `mat.emissive.set('#ffc46b'); mat.emissiveIntensity = 1.2` (`h1-houses-night.png`). Fade it in at
  dusk. For the "dark" step of the night choreography, set emissive back to 0. Clone the material if
  houses need to be lit independently.
- **The houses are hollow** apart from that box. The box ends 0.95 m behind the front wall, so an open
  door shows a short dark (or glowing) vestibule. Interiors are separate scenes (§6).
- **Banner:** a wall banner beside the door, with material `tint-owner`.
- **Extra variety:** swap the fantasy-town texture for `textures/fantasy-town-b.png` on houses 0, 1
  and 3. That turns red roofs blue and green roofs purple, giving 7 looks for 20 houses. House 2 (the
  cabin) has no alternative texture.
- Ring layout used in the test scene: radius 15 m for 8 houses (`s1-village-*.png`). For 20 houses,
  about 7 m centre-to-centre needs a radius of about 22 m.

## 5. Props (`props/village.glb`, `props/graveyard.glb`)

Each prop is a root node of the scene: `gltf.scene.getObjectByName('tree-round')`. Clone it, or better,
make an `InstancedMesh` per prop for trees, rocks and fences. Most props are one mesh with one material
(1 draw call). The full list with sizes is in `manifest.bundles`. Highlights:

- **Campfire:** `campfire-pit` (2.1 m, logs + stones), `campfire-stand` (spit), `log`, `log-small`
  (benches), `stump`. Add procedural flames and a point light.
- **Trees:** `tree-round`, `tree-pine`, `tree-pine-tall`, `tree-crooked`, `tree-autumn(-tall)`,
  `tree-forest(-tall)`, plus graveyard `pine`, `pine-crooked`, `pine-autumn`.
- **Bushes and rocks:** `bush`, `grass`, `grass-large`, `hedge(-large)`, `rock-large/-small/-wide`,
  `rocks-low`, `stones`, `rock-flat`, `patch-grass`, `patch-dirt`.
- **Fences:** `fence`, `fence-gate`, `fence-curved`, `fence-broken` (2.5 m tile pieces, kit origin),
  `fence-rope`. Graveyard: `iron-fence`, `iron-fence-gate`, `iron-fence-curve`, `picket-fence`.
- **Light:** `lamp-post` (3.9 m), `lamp-post-iron`, `lamp-post-double`, `lantern-post-cabin`,
  `lantern-hanging`, `lantern` (table/ground), `fire-basket` (brazier/torch replacement).
- **Plaza:** `well-basin` + `pillar-wood` (see "missing" below), `fountain`, `barrel`, `crate`,
  `crate-bottles`, `cart`, `cart-hay`, `stall`, `stall-green`, `stall-table`, `bench`, `bench-stone`,
  `stool`, `hay-bale`, `pumpkin`, `bucket`, `wheel`, `signpost`, `signpost-single`, `tent`, `target`,
  `ladder`, `platform-wood`.
- **Owner colour away from the house:** `banner-pole` (flag pole, cloth is `tint`), `flag-castle`
  (`tint`), `banner-wall`.
- **Vote cinematics:**
  - gallows: `frame-wood` (2.7 m square wooden frame with a top beam) or `frame-wood-support`, plus
    `platform-wood`, `ladder`, and a procedural rope.
  - exile: `fence-gate`, `iron-fence-gate`, `hedge-gate`, `arch-stone`, `gate-castle`; with
    `pitchfork-hoe`, `pickaxe`, `tool-shovel`, `axe` as "torches and pitchforks", and `fire-basket` or
    `lantern` for flame.
  - cellar / locked away: `trapdoor` (wooden floor hatch), `cellar-stairs`, `gate-barred`
    (barred dungeon door), `gate-metal`, `spike-trap`.
  - also: `cart`.
- **Graveyard:**
  - gravestones: `gravestone-round`, `-cross`, `-wide`, `-roof`, `-bevel`, `-broken`, `-decorative`,
    `cross`, `cross-wood`.
  - graves: `grave-dirt` (fresh mound), `grave-border`.
  - other: `coffin`, `coffin-old`, `crypt`, `urn`, `candles`, `shovel`, `pumpkin-carved`, `debris`,
    `rocks-grave`, `trunk-dead`, `pillar-obelisk`.

## 6. Interior set (`interior/furniture.glb`, `interior/clues.glb`)

- **Room shell:** `floor-planks` (2.5 m tile). Wall pieces `wall-wood`, `wall-wood-window` (wall with
  a window opening, for the Gözcü window view), `wall-wood-door` and `wall-plaster` are kit tiles:
  their geometry sits at local x = 1.0..1.25. Use `rotY 90` for a back wall at −Z and `180` for a left
  wall. A 3×3 room is shown in `r1-room.png` and `r1-room-night.png`.
- **Furniture:**
  - sleeping: `bed`, `bed-double`, `bedroll`, `pillow`.
  - tables and seats: `table`, `table-cloth`, `table-round`, `chair`, `chair-wood`, `stool`.
  - storage: `chest`, `chest-small`, `bookcase`, `bookcase-low`, `cabinet`, `side-table`, `barrel`, `pot`.
  - floor: `rug-round`, `rug`, `doormat`.
  - other: `coat-rack`, `plant-pot`, `books`, `candle`, `candles`, `lantern`, `lantern-hanging`.
- **Clues:**
  - containers: `coffin`, `potion`, `bottle`, `bottle-large`, `cauldron` (witch), `mortar` (herbalist).
  - food and table things: `garlic` (an onion stands in), `mushroom`, `bread`, `cheese`, `apple`, `mug`,
    `wine`, `plate`, `chalice`, `bowl`, `urn`.
  - tools and weapons: `doctor-bag` (luggage), `bow`, `arrow` (hunter), `sword`, `spear`, `shield`,
    `key`, `coin`, `shovel`, `axe`.
- The Furniture Kit uses flat material colours (`wood`, `carpet`, …) instead of a palette texture.
  Under the same lights it matches well enough.

## 7. Missing or weak (build procedurally)

| need | status |
|------|--------|
| **Gallows** | No CC0 model in this family. Build it from `frame-wood` / `pillar-wood` + `platform-wood` + `ladder` + a rope (thin cylinder + torus noose) |
| **Cage** | Missing. Use `gate-barred` / `iron-fence` pieces as 4 walls, or primitive bars |
| **Curtain** (Gözcü shadow play) | Missing. Use a plane with a `tint`-like material plus a back light for silhouettes |
| **Well** | No well. `well-basin` (stone ring) + 2 × `pillar-wood` + a small roof (`stall` canopy or a primitive) |
| **Torch** | No hand torch. Use `fire-basket` or `lantern`, or a stick primitive with a flame particle; hold it with `holding-right` |
| **Pitchfork** | No pitchfork. `pitchfork-hoe` / `pickaxe` / `tool-shovel` stand in |
| **Crystal ball** (seer) | Missing. Emissive sphere on a `bowl` or `urn` |
| **Garlic** | `garlic` is a Food Kit onion, close enough |
| **Bat** | Procedural (`characters/bat.glb`, see §3.4) |
| **Window glass, smoke, fire, poof, ghost glow** | Effects, not models |
| **Hats** | Straw hat, bandana and earmuffs are procedural (already in `hats.glb`) |
| **Vampire top hat / cape** | None separate. `vampire.glb` already wears a cape (rigid character) |

## 8. Gotchas

- **Clone skinned characters with `SkeletonUtils.clone`.** `.clone()` breaks skinning. Hats and props
  can use a normal `.clone()`.
- **Materials are MeshStandardMaterial** (roughness 1, metalness 0). For phones, converting to
  `MeshLambertMaterial` or `MeshToonMaterial` while keeping `map` and `color` is cheap and looks the
  same. Keep the material **names**: the colour logic depends on `cloth`, `tint*` and `window`.
- **Share materials.** Many GLBs reference the same `../textures/<pack>.png`, but GLTFLoader creates one
  `Texture` and material per file. Replace them on load with one shared material per texture (key by
  `material.map.source.data.src`, or by material name, which is the pack name, e.g. `fantasy-town`).
  Also set `THREE.Cache.enabled = true`.
- **Texture filtering:** palette textures are fine with default linear and mipmaps. The colours are wide
  flat strips, and nearest filtering looked identical (tested). Set `colorSpace = SRGBColorSpace`
  (GLTFLoader already does).
- **doubleSided:**
  - Villagers are single-sided.
  - Kenney kits are exported `doubleSided: true`, kept for props and houses because some pieces are
    single planes (banners, leaves, grass, gable insides). For performance you can set `FrontSide` on
    trees, rocks and gravestones.
  - Shadow acne on double-sided meshes: use `shadow.bias ≈ -0.0005` and/or `normalBias 0.02`.
- **No alpha anywhere** (Kenney's glass windows were not used), so there are no sorting issues.
- **No vertex colours.** Colour comes from texture + material color.
- `gltf-validator` reports 0 errors. Villagers give a warning, `NODE_SKINNED_MESH_NON_ROOT`, because the
  skinned meshes sit under the scaled `villager` node exactly as in Kenney's original. three.js handles
  this correctly (all screenshots).
- Fence, wall, `banner-wall` and `lantern-hanging` pieces keep their kit origin. All other props are
  bottom-centred.
- Some source packs used different scales. They were normalised with per-item factors; see the
  `scaleNote` fields in the manifest. A few props are deliberately chunky: clue items are oversized so
  they read from a phone camera.
- The houses are closed boxes only from outside. The inner window box blocks the view, and there is no
  floor or ceiling.

## 9. How it was made (re-build)

Throw-away Node scripts used `@gltf-transform` and sharp from the scratchpad tools folder. They are not
in the repo, because the outputs are committed. The steps:
1. Download the Kenney zips.
2. Import the GLBs, drop `KHR_texture_transform` (identity only), TANGENT attributes and unused clips.
3. Split cloth/tint/window faces by palette swatch and bone.
4. Bake the ×2.5 scale.
5. Merge modules per house and props per bundle (join by material, re-centre).
6. Dedup, prune, weld, and write GLBs with external textures.

Contact sheets were rendered with three r187 in headless Edge.
