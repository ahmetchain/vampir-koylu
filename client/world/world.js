// VKWorld.create(): oluşturucu, döngü, ışık ve günün saati, giriş, seçim, katmanlar, aşama koreografisi.
import * as THREE from 'three';
import * as A from './assets.js';
import { createSky } from './sky.js';
import { createTerrain } from './terrain.js';
import { createVillage } from './village.js';
import { QuadBatch, createFire, createFireflies, Bursts, createWeather } from './fx.js';
import { createInterior } from './interior.js';
import { registerCinematics } from './cine.js';
import { moodFor } from './moods.js';
import { Character } from './character.js';
import { CameraRig } from './camera.js';
import { createOverlay } from './overlay.js';
import { createControls } from './control.js';
import { createDirector } from './director.js';
import { createChoreo } from './choreo.js';
import { computeLayout, plazaToWorld, worldToPlaza } from './layout.js';
import { resolveStatic } from './nav.js';
import { makeTod, evalTod, stepHour } from './tod.js';
import { TIERS, ORDER, AutoQuality, DynamicRes, detailFor, isMobile, guessTier } from './quality.js';
import * as Rules from './rules.js';
import { clamp, damp, smooth, wrapAngle, COLOR_HEX, TAU } from './constants.js';

export function supported() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2');
    const ok = !!gl;
    if (gl) { const ext = gl.getExtension('WEBGL_lose_context'); if (ext) ext.loseContext(); }
    return ok;
  } catch (e) { return false; }
}

const MENU_ENTRIES = Array.from({ length: 9 }, (_, i) => ({ id: 'menu-' + i, seat: i }));

export function create(container, handlers = {}) {
  if (!container) throw new Error('VKWorld: kapsayıcı yok');
  if (!supported()) throw new Error('VKWorld: WebGL2 desteklenmiyor');
  const H = handlers;
  const world0 = { renderScale: 1 };
  let tickT = 0, labelT = 0;
  const mobile = isMobile();
  const detail = detailFor(mobile);

  // ---------- DOM ve oluşturucu ----------
  const root = document.createElement('div');
  root.className = 'vkw-root';
  container.appendChild(root);
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: !mobile, alpha: false, powerPreference: 'high-performance', stencil: false });
  } catch (e) {
    root.remove();
    throw new Error('VKWorld: WebGL bağlamı açılamadı');
  }
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-label', 'Köy');
  root.appendChild(canvas);
  const vignette = document.createElement('div');
  vignette.className = 'vkw-vignette';
  root.appendChild(vignette);
  const flashEl = document.createElement('div');
  flashEl.style.cssText = 'position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .6s;mix-blend-mode:screen';
  root.appendChild(flashEl);
  // sahne geçişlerinde kısa siyah perde (iç mekâna geçiş, sinematik bitişi)
  const cutEl = document.createElement('div');
  cutEl.style.cssText = 'position:absolute;inset:0;pointer-events:none;opacity:0;background:#07050f';
  root.appendChild(cutEl);
  function flashCut() {
    cutEl.style.transition = 'none';
    cutEl.style.opacity = '1';
    void cutEl.offsetWidth;
    cutEl.style.transition = 'opacity .38s ease-out';
    cutEl.style.opacity = '0';
  }

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x9ab, 50, 250);
  const camera = new THREE.PerspectiveCamera(40, 1, 0.3, 900);
  const rig = new CameraRig(camera);

  // ---------- kalite ----------
  let qualityMode = 'auto';
  const auto = new AutoQuality(guessTier(mobile));
  const drs = new DynamicRes();
  world0.renderScale = 1;
  let tier = TIERS[auto.level];
  const q = { ...detail, sparks: 70, fireflies: 56, clouds: tier.clouds, trees: detail.trees, scatter: detail.scatter };

  // ---------- ışıklar ----------
  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 2);
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.03;
  scene.add(sun);
  scene.add(sun.target);
  const fireLight = new THREE.PointLight(0xff8a2a, 20, 17, 1.5);
  fireLight.position.set(0, 1.4, 0);
  scene.add(fireLight);

  // ---------- modüller ----------
  const sky = createSky(scene, q);
  const terrain = createTerrain(scene, q);
  const glow = new QuadBatch('glow', 128);
  const pool = new QuadBatch('pool', 128);
  const blobs = new QuadBatch('blob', 64, THREE.NormalBlending);
  const rings = new QuadBatch('ring', 48);
  for (const b of [pool, blobs, rings, glow]) scene.add(b.mesh);
  const bursts = new Bursts(160);
  scene.add(bursts.normal.mesh); scene.add(bursts.add.mesh);
  const fire = createFire(q);
  scene.add(fire.group);
  const fireflies = createFireflies(56);
  scene.add(fireflies.points);
  let village = null;
  const chars = new Map();
  const ghosts = new Map();
  const heldDeaths = new Set();   // sinematik mezar taşını kendisi düşürecek (durum önce gelse de)
  const cineActors = new Map();   // sinematik kopyaları: anahtar -> { ch, name, color }
  let cineSeq = 0;
  const ticker = [];              // kare başı geri çağrılar (true dönerse çıkarılır)
  let todOverride = null;
  let room = null;                // iç mekân (tembel kurulur)
  let roomMode = null;            // 'visit' | 'window' | 'cine'
  let roomKey = '';
  let moonOverrideCol = null;
  let fogBoostK = 1;
  let labelsDirty = false;
  let scenarioId = null;
  let moodDef = null;
  const weather = createWeather(scene);
  // gece ay ışığı kenar parlaması (arkadan, gölgesiz)
  const rimLight = new THREE.DirectionalLight(0x8fb4ff, 0);
  scene.add(rimLight);
  scene.add(rimLight.target);
  const errCount = new Map();
  function report(name, e) {
    const n = (errCount.get(name) || 0) + 1;
    errCount.set(name, n);
    if (n === 1 || n === 50) console.warn('[VKWorld] ' + name + ' hatası (yakalandı, devam ediliyor):', e);
  }

  const world = {
    rig, camera, chars, scene,
    time: 0,
    get village() { return village; },
    fx: bursts,
    obstacles: [],
    localMove: null,
    sfx(name, opts) { try { if (window.VKAudio && window.VKAudio.sfx) window.VKAudio.sfx(name, opts); } catch (e) { /* sessiz */ } },
    sfxThrottled(name, gap) {
      const now = performance.now();
      if ((lastSfx[name] || 0) + gap * 1000 > now) return;
      lastSfx[name] = now;
      world.sfx(name);
    },
    sfxStep() { world.sfxThrottled('step', 0.32); },
    reapply() { if (ready && state && view === 'game') applyState(false); },
    ticker,
    assets: A,
    get room() { return room; },
    getState() { return state; },
    playerById(id) {
      const p = state && state.players.find((x) => x.id === id);
      return p ? { id: p.id, look: p.look, name: p.name, role: p.role } : null;
    },
    makeActor(look, name, kind) {
      const key = 'cine:' + (++cineSeq);
      const ch = new Character(world, key, look, { ghost: kind === 'ghost' });
      ch.cineKey = key;
      scene.add(ch.root);
      cineActors.set(key, { ch, name: name || '', color: look.color | 0 });
      if (name) labelsDirty = true;
      return ch;
    },
    dropActor(ch) { cineActors.delete(ch.cineKey); ch.dispose(); labelsDirty = true; },
    isDeadShown(id) {
      const p = state && state.players.find((x) => x.id === id);
      return !!(p && state.room.phase !== 'lobby' && (!p.alive || p.left) && !(state.room.phase === 'hunter' && state.room.hunterId === id));
    },
    openRoom(id) { return openRoomFor(id, 'cine'); },
    endCineRoom() { if (roomMode === 'cine') closeRoom(); },
    setTodOverride(h, snap) { todOverride = h; if (snap && h != null) hour = h; },
    cineTint() {},
    moonOverride(c) { moonOverrideCol = c ? new THREE.Color(c) : null; },
    fogBoost(k) { fogBoostK = k; return () => { fogBoostK = 1; }; },
    footDust(x, z) { if (tier.name !== 'low' && view === 'game') bursts.emit('dust', x, 0.05, z, moodDef && moodDef.snow ? '#e8eef5' : null, 2); },
    houseAnchors(id) { const h = village && village.house(id); return h ? village.anchors(h) : null; },
    layoutR() { return village && village.layout ? village.layout.R : 15; },
    meId() { return state && state.me ? state.me.id : null; },
    flash(a, color) {
      if (!a) { flashEl.style.opacity = '0'; return; }
      flashEl.style.background = `radial-gradient(ellipse at 50% 50%, ${color || '#d7263d'}55, ${color || '#d7263d'}cc)`;
      flashEl.style.opacity = String(a);
      clearTimeout(flashT);
      flashT = setTimeout(() => { flashEl.style.opacity = '0'; }, 380);
    },
    poofAt(x, z) { bursts.emit('poof', x, 0.4, z, null, 16); world.sfxThrottled('poof', 0.2); },
    holdDeaths(ids) { heldDeaths.clear(); for (const id of ids) heldDeaths.add(id); },
    releaseDeaths() { if (heldDeaths.size) { heldDeaths.clear(); world.reapply(); } },
    markDead(id, o = {}) {
      heldDeaths.delete(id);
      const ch = chars.get(id);
      if (ch && ch.visible && !ch.claimed) { if (!o.quiet) world.poofAt(ch.pos.x, ch.pos.z); ch.setVisible(false); }
      if (village) village.setDead(id, true, ch ? ch.look.color : 0, o.drop);
    },
    ensureChar(p) {
      if (!ready) return null;
      let ch = chars.get(p.id);
      if (!ch) {
        ch = new Character(world, p.id, p.look);
        ch.fresh = true;
        chars.set(p.id, ch);
        scene.add(ch.root);
        applyCharShadow(ch);
      } else ch.setLook(p.look);
      return ch;
    },
    ensureGhost(p) {
      if (!A.has('characters/ghost.glb')) return null;
      let g = ghosts.get(p.id);
      if (!g) {
        g = new Character(world, p.id, p.look, { ghost: true });
        g.fresh = true;
        ghosts.set(p.id, g);
        scene.add(g.root);
      }
      return g;
    },
    removeGhost(id) {
      const g = ghosts.get(id);
      if (g) { g.dispose(); ghosts.delete(id); }
    },
  };
  const lastSfx = {};
  let flashT = 0;

  const overlay = createOverlay(root, {
    onTagTap(id) { tapCharacter(id, true); },
    onPlaqueTap(id) { if (selectableIds.has(id)) pick(id); },
    onRecenter() { recenterCam(); },
    onCamToggle() { toggleCam(); },
  });
  // doğrudan hareket: sanal kol (dokunmatik) + WASD / ok tuşları
  const controls = createControls(root, {});
  const director = createDirector(world);
  registerCinematics(director, world);
  const choreo = createChoreo(world);

  // ---------- durum ----------
  let state = null;
  let ui = {};
  let view = 'menu';
  let ready = false;
  let disposed = false;
  let layoutSig = '';
  let selectableIds = new Set();
  let nightActors = new Set();
  let hoverId = null;
  let hour = 18.3, hourTarget = 18.3;
  const tod = makeTod();
  // Senaryo/ruh hali: sis çarpanı, gök tonu, ay rengi, yıldızlar, hava (Faz 2: room.scenario ile sürülecek)
  const mood = { fog: 1, tint: new THREE.Color('#ffffff'), tintAmt: 0, moon: new THREE.Color('#eef2ff'), stars: 1, weather: 'none' };
  const moonCol = new THREE.Color();
  let shadowDirty = true;
  let shadowCool = 0;
  const lastLightDir = new THREE.Vector3();
  let W = 1, Hh = 1, px = 1;
  let insets = { top: 0, bottom: 0, left: 0, right: 0 };

  function applyCharShadow(ch) {
    ch.model.traverse((o) => { if (o.isMesh) o.castShadow = tier.charShadow; });
  }

  // ---------- kalite uygula ----------
  function applyTier(name, announce = true) {
    tier = TIERS[name];
    const dpr = window.devicePixelRatio || 1;
    px = Math.min(dpr, mobile ? tier.pxMobile : tier.px);
    renderer.setPixelRatio(px * (world0.renderScale || 1));
    renderer.setSize(W, Hh, false);
    const want = tier.shadows > 0;
    if (renderer.shadowMap.enabled !== want) {
      renderer.shadowMap.enabled = want;
      scene.traverse((o) => { if (o.material) { (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { m.needsUpdate = true; }); } });
    }
    sun.castShadow = want;
    if (want) {
      if (sun.shadow.mapSize.x !== tier.shadowSize) {
        sun.shadow.mapSize.set(tier.shadowSize, tier.shadowSize);
        if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
      }
      renderer.shadowMap.autoUpdate = tier.shadows === 2;
    }
    for (const ch of chars.values()) applyCharShadow(ch);
    q.clouds = tier.clouds;
    shadowDirty = true;
    if (announce && H.onQuality) try { H.onQuality(name); } catch (e) { /* yok say */ }
  }

  // ---------- boyut ----------
  function resize() {
    const r = root.getBoundingClientRect();
    W = Math.max(1, Math.round(r.width)); Hh = Math.max(1, Math.round(r.height));
    renderer.setSize(W, Hh, false);
    rig.setSize(W, Hh);
    overlay.setSize(W, Hh);
    controls.place(insets, W, Hh);
    updateShot(true);
  }
  let ro = null;
  if (window.ResizeObserver) { ro = new ResizeObserver(() => resize()); ro.observe(root); }
  const onWinResize = () => resize();
  window.addEventListener('resize', onWinResize);
  window.addEventListener('orientationchange', onWinResize);

  // ---------- yükleme ----------
  applyTier(auto.level, false);
  resize();
  const total = A.GROUPS.chars.length + A.GROUPS.village.length;
  A.loadGroups(['village', 'chars'], (d, t) => { if (!disposed && H.onProgress) try { H.onProgress(d, t); } catch (e) { /* yok say */ } })
    .then(() => {
      if (disposed) return;
      build();
      ready = true;
      if (state && view === 'game') applyState(true);
      if (H.onReady) try { H.onReady(); } catch (e) { /* yok say */ }
      // arka planda: mezarlık ve hayalet
      return A.loadGroups(['extra']).then(() => {
        if (disposed) return;
        village.onExtraLoaded();
        if (state) applyState(false);
        return A.loadGroups(['cine']);
      });
    })
    .catch((e) => {
      console.error('[VKWorld] varlıklar yüklenemedi', e);
      if (H.onError) try { H.onError(e); } catch (er) { /* yok say */ }
    });
  void total;

  function build() {
    village = createVillage(scene, q, null, terrain);
    // menüde süs evleri
    setLayoutFrom(view === 'menu' || !state ? null : state);
    fireflies.place(8, 40);
    updateShot(true);
  }

  function setLayoutFrom(st) {
    let entries, viewer = null;
    if (!st || view === 'menu') entries = MENU_ENTRIES;
    else {
      const inLobby = st.room.phase === 'lobby';
      entries = st.players.filter((p) => !(inLobby && p.left)).map((p) => ({ id: p.id, seat: p.seat ?? 0 }));
      viewer = st.me ? st.me.id : null;
      if (!entries.length) entries = MENU_ENTRIES;
    }
    const sig = entries.map((e) => e.id + '@' + e.seat).join(',') + '|' + viewer;
    if (sig === layoutSig) return false;
    const animate = !!layoutSig && st && st.room.phase === 'lobby' && view === 'game' && !layoutSig.startsWith('menu-');
    layoutSig = sig;
    const L = computeLayout(entries, viewer);
    village.setLayout(L, animate);
    buildObstacles(L);
    fireflies.place(L.Rp + 1, L.R + 14);
    shadowDirty = true;
    if (!animate) choreo.reset();
    for (const ch of chars.values()) if (!animate) ch.fresh = true;
    return true;
  }

  function buildObstacles(L) {
    const obs = [{ x: 0, z: 0, r: 1.6, tag: 'fire' }];
    // kütük banklar: uzunlamasına üç küçük daire
    for (const s of village.benchSlots) {
      const tx = Math.cos(s.a), tz = -Math.sin(s.a);
      for (const o of s.small ? [-0.45, 0.45] : [-0.85, 0, 0.85]) obs.push({ x: s.x + tx * o, z: s.z + tz * o, r: 0.3, tag: 'bench' });
    }
    // fenerler (ev kutularına yollar zaten çarpmaz: patikalar evlerin etrafından dolaşır)
    for (const l of village.lampList()) if (!l.small) obs.push({ x: l.x, z: l.z, r: 0.35, tag: 'lamp' });
    world.obstacles = obs;
  }

  // ---------- iç mekân ----------
  function openRoomFor(id, mode) {
    if (!room) room = createInterior(world);
    if (!room.ready) return null;
    const p = world.playerById(id) || { id, look: { color: 0, hat: 0, skin: 0 }, name: '' };
    room.hide();
    room.show(p);
    roomMode = mode;
    labelsDirty = true;
    flashCut();
    return room;
  }
  function closeRoom() {
    if (room) room.hide();
    const was = roomMode;
    roomMode = null;
    roomKey = '';
    if (was) { if (was === 'cine' || !director.running) rig.setOverride(null, true); flashCut(); }
    labelsDirty = true;
  }
  // Gece: izleyicinin karakteri bir eve girdiyse iç mekân, gözcü pencere arkasındaysa pencere görünümü
  function nightView() {
    if (!state || view !== 'game' || !ready || director.running) return null;
    const { room: rm, me } = state;
    if (rm.phase !== 'night' || !me.alive) return null;
    const ch = chars.get(me.id);
    if (!ch) return null;
    if (ch.inside && ch.inside !== me.id && village.house(ch.inside)) return { mode: 'visit', house: ch.inside };
    if (ch.peeking && village.house(ch.peeking)) return { mode: 'window', house: ch.peeking };
    return null;
  }
  function roleSteps(role, i) {
    const L = room.L, Wp = (p) => room.W(p);
    const by = [L.bedside, L.bedside2, { x: -1.6, z: 0.9 }][i % 3];
    switch (role) {
      case 'vampir':
        return [{ walk: [Wp(by)], mode: 'sneak' }, { faceTo: Wp({ x: L.sleeper.x, z: -1.4 }) }, { pose: 'loom' }, { wait: 2.2 + Math.random() }, { once: 'attack-melee-right', opts: { timeScale: 0.45 } }, { wait: 1.5 }];
      case 'doktor':
        return [{ walk: [Wp(L.bedfoot)], mode: 'walk' }, { faceTo: Wp({ x: L.sleeper.x, z: -1.6 }) }, { pose: 'hold' }, { wait: 3.5 }, { once: 'interact-left', opts: { timeScale: 0.6 } }, { wait: 2 }];
      case 'kahin':
        return [{ walk: [Wp({ x: -1.9, z: 1.25 })], mode: 'sneak' }, { faceTo: Wp(L.bookcase) }, { once: 'pick-up', opts: { timeScale: 0.7 } }, { walk: [Wp({ x: -0.3, z: -1.7 })], mode: 'sneak' }, { faceTo: Wp({ x: -0.3, z: -2.8 }) }, { once: 'interact-right', opts: { timeScale: 0.7 } }, { walk: [Wp({ x: 1.5, z: -0.6 })], mode: 'sneak' }, { faceTo: Wp({ x: 1.6, z: -1.5 }) }, { once: 'interact-left', opts: { timeScale: 0.7 } }];
      case 'cadi':
        return [{ walk: [Wp(by)], mode: 'sneak' }, { faceTo: Wp({ x: L.sleeper.x, z: -1.3 }) }, { pose: 'hold' }, { wait: 1.8 }, { once: 'interact-right', opts: { timeScale: 0.5 } }, { wait: 1.8 }];
      case 'iftiraci':
        return [{ walk: [Wp({ x: -0.3, z: -1.75 })], mode: 'sneak' }, { faceTo: Wp({ x: -0.3, z: -2.8 }) }, { pose: 'peek' }, { wait: 1.2 }, { once: 'pick-up', opts: { timeScale: 0.6 } }, { wait: 1.6 }];
      default:
        return [{ walk: [Wp(L.bedfoot)], mode: 'walk' }, { faceTo: Wp(L.bed) }, { wait: 3 }];
    }
  }
  const roleProp = { doktor: ['furniture', 'lantern', 0.55], cadi: ['clues', 'potion', 0.75], iftiraci: ['clues', 'key', 0.9] };
  function setupNightRoom(nv, team) {
    const r = openRoomFor(nv.house, nv.mode);
    if (!r) return false;
    const me = state.me;
    const mp = world.playerById(me.id);
    const portrait = rig.portrait;
    if (nv.mode === 'visit') {
      const all = [{ id: me.id, look: mp.look, name: mp.name, role: me.role }, ...team.map((id) => { const p = world.playerById(id); return p ? { id, look: p.look, name: p.name, role: p.role || 'vampir' } : null; }).filter(Boolean)];
      all.forEach((a, i) => {
        const ch = r.addActor('a' + i, a.look, a.name, r.L.doorIn, -Math.PI / 2);
        ch.roomRole = a.role; ch.roomIndex = i;
        const rp = roleProp[a.role];
        if (rp) { const tpl = A.prop(rp[0], rp[1]); if (tpl) { const o = tpl.clone(); o.userData.holdScale = rp[2] / 2.8; ch.hold(o, 'right', [0, -0.15, 0.06]); } }
      });
      const S = r.shot('inside', portrait);
      rig.setOverride({ pos: S.pos, look: S.look, fov: S.fov, k: 60 }, true);
    } else {
      const g = r.addActor('gozcu', mp.look, '', r.L.winOut, Math.PI / 2);
      g.setBase('peek', 0);
      const S = r.shot('window', portrait);
      rig.setOverride({ pos: S.pos, look: S.look, fov: S.fov, k: 60 }, true);
    }
    return true;
  }
  function updateRoom() {
    if (!ready) return;
    if (roomMode === 'cine') return;
    const nv = nightView();
    if (nv) {
      const vis = Rules.visits(state);
      const team = [];
      for (const [a, t] of vis) if (t === nv.house && a !== state.me.id) team.push(a);
      const key = nv.mode + ':' + nv.house + ':' + team.join(',') + ':' + (rig.portrait ? 'p' : 'l');
      if (key !== roomKey) { if (setupNightRoom(nv, team)) roomKey = key; }
      // rol döngüleri
      if (room && nv.mode === 'visit') for (const a of room.actors.values()) if (!a.ch.busy) a.ch.run(roleSteps(a.ch.roomRole, a.ch.roomIndex));
    } else if (roomMode === 'visit' || roomMode === 'window') closeRoom();
  }

  // ---------- senaryo (ruh hali) ----------
  function applyScenario(id) {
    if (id === scenarioId) return;
    scenarioId = id;
    moodDef = moodFor(id);
    mood.fog = moodDef.fog; mood.tint.set(moodDef.tint); mood.tintAmt = moodDef.tintAmt; mood.moon.set(moodDef.moon); mood.stars = moodDef.stars;
    mood.weather = moodDef.weather; mood.nightTint = !!moodDef.nightTint;
    weather.set(moodDef.weather);
    if (village) village.setTheme(moodDef);
  }

  // ---------- durum uygulama ----------
  function update(st, uiOpts) {
    if (disposed) return;
    state = st;
    ui = uiOpts || {};
    if (!ready) return;
    try { applyState(false); } catch (e) { report('durum', e); }
  }

  function applyState(snapAll) {
    if (!state || view !== 'game') return;
    const changed = setLayoutFrom(state);
    const { room, players } = state;
    applyScenario(room.scenario && room.phase !== 'lobby' ? room.scenario.id : null);
    const inGame = room.phase !== 'lobby';
    const seen = new Set();
    for (const p of players) {
      seen.add(p.id);
      village.setOwner(p.id, p.look ? p.look.color : -1, p.name);
      village.setDead(p.id, inGame && (!p.alive || p.left) && !heldDeaths.has(p.id), p.look ? p.look.color : 0);
    }
    // ayrılan oyuncular
    for (const [id, ch] of chars) if (!seen.has(id)) { ch.dispose(); chars.delete(id); choreo.forget(id); }
    for (const id of [...ghosts.keys()]) if (!seen.has(id)) world.removeGhost(id);
    if (room.phase === 'lobby') for (const p of players) if (village.tombOf(p.id)) village.setDead(p.id, false);
    choreo.apply(state, snapAll || changed && room.phase !== 'lobby');
    // seçilebilirler
    selectableIds = new Set(players.filter((p) => Rules.selectable(state, p, ui.witchMode)).map((p) => p.id));
    nightActors = new Set(Rules.visits(state).keys());
    refreshLabels();
    updateShot(false);
  }

  // ---------- etiketler ----------
  function refreshLabels() {
    if (!state) return;
    const { room, me, players, day } = state;
    const phase = room.phase;
    const act = Rules.action(state);
    const selC = Rules.selColor(state, ui.witchMode);
    const byId = new Map(players.map((p) => [p.id, p]));
    const tagIds = new Set(), plaqueIds = new Set();
    const nVis = players.filter((p) => !p.left).length;
    overlay.setCompact((nVis > 7 && W < 700) || nVis > 12);
    for (const p of players) {
      const ch = chars.get(p.id);
      const g = ghosts.get(p.id);
      if (ch || g) {
        tagIds.add(p.id);
        let votes = null;
        const vl = day && day.votes && day.votes[p.id];
        if (vl && vl.length) {
          votes = { total: vl.reduce((s, v) => s + (v.w || 1), 0), dots: vl.map((v) => ({ color: byId.get(v.id) ? COLOR_HEX[byId.get(v.id).look.color] : '#999', w: v.w || 1 })) };
        }
        const badges = (p.isHost && phase === 'lobby' ? '👑' : '') + (!p.connected && !p.left ? '📴' : '') + (day && day.sleeping && day.sleeping.includes(p.id) ? '💤' : '') + (day && day.voted && day.voted.includes(p.id) && !(day.sleeping || []).includes(p.id) ? '✔' : '');
        const sel = act !== 'night' && selectableIds.has(p.id);
        overlay.setTag(p.id, {
          name: p.name, job: p.job && p.job.label ? p.job.label : '', color: p.look.color, badges,
          me: p.id === me.id, off: !p.connected, dead: !p.alive,
          sel, picked: Rules.isPicked(state, p) && act !== 'night', hover: hoverId === p.id && sel, selColor: selC,
          mark: act !== 'night' ? Rules.markFor(state, p, ui.witchMode) : (phase === 'night' ? null : Rules.markFor(state, p, ui.witchMode)),
          votes,
        });
      }
      if (village.house(p.id)) {
        plaqueIds.add(p.id);
        const nightSel = act === 'night' && selectableIds.has(p.id);
        const showPlaque = phase === 'lobby' || (phase === 'night' && act === 'night') || phase === 'reveal';
        overlay.setPlaque(p.id, {
          name: p.name, color: p.look.color,
          sel: nightSel, picked: phase === 'night' && Rules.isPicked(state, p),
          dim: !showPlaque, hidden: !showPlaque, dead: (phase !== 'lobby') && (!p.alive || p.left), selColor: selC,
          mark: phase === 'night' ? Rules.markFor(state, p, ui.witchMode) : null,
        });
      }
    }
    // sinematik ve iç mekân kopyaları
    for (const [key, a] of cineActors) if (a.name) { tagIds.add(key); overlay.setTag(key, { name: a.name, job: '', color: a.color, badges: '', me: false }); }
    if (world.room && roomMode) for (const [k, a] of world.room.actors) if (a.name) { const key = 'room:' + k; tagIds.add(key); overlay.setTag(key, { name: a.name, job: '', color: a.color, badges: '', me: false }); }
    overlay.sync(tagIds, plaqueIds);
    labelsDirty = false;
  }

  // ---------- kamera çekimleri ----------
  const fitPts = [];
  for (let i = 0; i < 64; i++) fitPts.push(new THREE.Vector3());
  let shotKind = '';
  function updateShot(force) {
    if (!village || !village.layout) {
      rig.setShot({ target: new THREE.Vector3(0, 1, 0), az: 0.4, el: 0.35, dist: 45, fov: 42, snap: force });
      return;
    }
    const L = village.layout;
    const portrait = rig.portrait;
    const phase = state && view === 'game' ? state.room.phase : 'menu';
    const act = state && view === 'game' ? Rules.action(state) : null;
    let kind;
    if (phase === 'menu') kind = 'menu';
    else if (phase === 'night') kind = act === 'night' ? 'overview' : 'sleep';
    else if (phase === 'reveal') kind = 'gather';
    else if (wantFollow()) kind = 'follow';
    else kind = 'plaza';
    const changed = kind !== shotKind;
    shotKind = kind;
    if (changed) { rig.recenter(); if (kind === 'follow') fol.init = false; }
    const s = rig.shot;
    if (kind === 'follow') {
      // genel bakışa uzaklaşma mesafesi (köy halkası sığsın)
      let n = 0;
      const rr = L.R + 3.6;
      for (let i = 0; i < 24; i++) { const a = (i / 24) * TAU; fitPts[n++].set(Math.sin(a) * rr, 0, Math.cos(a) * rr); }
      fol.ovDist = rig.fit(tmpZero, fol.az, portrait ? 1.15 : 0.98, 40, fitPts.slice(0, n), 0.94, 8, 220);
      s.dynamic = false; s.points = null;
      if (changed || force) updateFollow(0, true);
      return;
    }
    if (kind === 'menu') {
      // tepeden değil, köyün kenarından: karşıdaki evler, orman, dağlar ve gök birlikte görünsün
      // kamera meydanın kenarında: ateş önde, karşı evler, orman, dağlar ve gök arkada
      const d = L.Rp + (portrait ? 3.5 : 2.5);
      rig.setShot({ kind, target: new THREE.Vector3(0, portrait ? 3.4 : 3.0, 0), az: s.az, el: portrait ? 0.2 : 0.16, dist: d, fov: portrait ? 64 : 50, speed: 1.2 });
      s.dynamic = false;
    } else if (kind === 'overview' || kind === 'sleep') {
      let n = 0;
      const rr = L.R + 3.6;
      for (let i = 0; i < 24; i++) {
        const a = (i / 24) * TAU;
        fitPts[n++].set(Math.sin(a) * rr, 0, Math.cos(a) * rr);
        fitPts[n++].set(Math.sin(a) * (L.R), 4.5, Math.cos(a) * (L.R));
      }
      const el = kind === 'overview' ? (portrait ? 1.2 : 0.98) : (portrait ? 0.95 : 0.62);
      rig.setShot({ kind, target: new THREE.Vector3(0, 0, kind === 'overview' ? 0 : -L.R * 0.08), az: kind === 'sleep' ? 0.25 : 0, el, fov: 40, points: fitPts.slice(0, n), margin: kind === 'overview' ? 0.94 : 1.04, snap: force, speed: 1.6 });
      s.dynamic = false;
    } else {
      // meydan: görünen karakterler + ateş çevresi
      const pts = fitPts;
      let n = 0;
      const rFire = kind === 'gather' ? 5.6 : 3.2;
      for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU; pts[n++].set(Math.sin(a) * rFire, 0, Math.cos(a) * rFire); }
      for (const ch of chars.values()) {
        if (!ch.visible || n > 60) continue;
        const goal = ch.path && ch.path.length ? ch.path[ch.path.length - 1] : ch.pos;
        const r = Math.hypot(goal.x, goal.z);
        if (r > L.Rp + 1.5) continue;
        pts[n++].set(goal.x, 0, goal.z);
        pts[n++].set(goal.x, 2.4, goal.z);
      }
      for (const g of ghosts.values()) { if (n < 62) { pts[n++].set(g.pos.x, 2.6, g.pos.z); pts[n++].set(g.pos.x, 0, g.pos.z); } }
      const el = kind === 'gather' ? (portrait ? 0.6 : 0.5) : (portrait ? 0.58 : 0.54);
      rig.setShot({ kind, target: plazaCentroid(pts, n), az: 0, el, fov: portrait ? 44 : 38, points: pts.slice(0, n), margin: portrait ? 0.92 : 0.8, minDist: 8, snap: force, speed: 1.8 });
      s.dynamic = true;
      s.points = pts.slice(0, n);
    }
  }

  // ---------- giriş ----------
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const tmpV = new THREE.Vector3();
  const tmpV2 = new THREE.Vector3();
  const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  function rayAt(x, y) {
    ndc.set((x / W) * 2 - 1, -(y / Hh) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    return raycaster.ray;
  }

  // Ekran-uzayında en yakın karakter (ayak-baş doğru parçasına uzaklık)
  function nearestChar(x, y, filter, maxPx = 34) {
    let best = null, bestD = Infinity;
    for (const [id, ch] of chars) {
      if (!ch.visible || !filter(id)) continue;
      tmpV.set(ch.pos.x, 0.1, ch.pos.z).project(camera);
      tmpV2.set(ch.pos.x, ch.headY, ch.pos.z).project(camera);
      if (tmpV.z > 1) continue;
      const ax = (tmpV.x * 0.5 + 0.5) * W, ay = (-tmpV.y * 0.5 + 0.5) * Hh;
      const bx = (tmpV2.x * 0.5 + 0.5) * W, by = (-tmpV2.y * 0.5 + 0.5) * Hh;
      const dx = bx - ax, dy = by - ay;
      const l2 = dx * dx + dy * dy || 1;
      const t = clamp(((x - ax) * dx + (y - ay) * dy) / l2, 0, 1);
      const d = Math.hypot(x - (ax + dx * t), y - (ay + dy * t));
      const lim = Math.max(maxPx, Math.sqrt(l2) * 0.55);
      if (d < lim && d < bestD) { bestD = d; best = id; }
    }
    return best;
  }

  function houseAt(x, y, onlySel) {
    const L = village.layout;
    // 1) ekran uzayında en yakın ev (kapı-pencere hizasındaki merkez); evler halkada dağınık olduğundan en güvenilir yol
    let best = null, bd = Infinity;
    for (const h of village.houses.values()) {
      if (h.removing || (onlySel && !selectableIds.has(h.id))) continue;
      tmpV.set(h.cx, 1.6, h.cz).project(camera);
      if (tmpV.z > 1) continue;
      const sx = (tmpV.x * 0.5 + 0.5) * W, sy = (-tmpV.y * 0.5 + 0.5) * Hh;
      // evin ekrandaki yarıçapı
      tmpV2.set(h.cx + Math.cos(h.crot) * h.info.hx, 1.6, h.cz - Math.sin(h.crot) * h.info.hx).project(camera);
      const rad = Math.max(26, Math.hypot((tmpV2.x * 0.5 + 0.5) * W - sx, (-tmpV2.y * 0.5 + 0.5) * Hh - sy) * 1.25);
      const d = Math.hypot(x - sx, y - sy);
      if (d < rad && d < bd) { bd = d; best = h; }
    }
    if (best) return best.id;
    // 2) ışın-kutu kesişimi
    const ray = rayAt(x, y);
    const h = village.pickHouse(ray);
    if (h && (!onlySel || selectableIds.has(h.id))) return h.id;
    // 3) zemindeki açısal dilim (evin önü/arkası)
    const p = ray.intersectPlane(groundPlane, tmpV);
    if (!p) return null;
    const r = Math.hypot(p.x, p.z);
    if (r < L.Rp * 0.75 || r > L.R + 8) return null;
    const a = Math.atan2(p.x, p.z);
    let b2 = null, bd2 = Infinity;
    for (const hh of village.houses.values()) {
      if (onlySel && !selectableIds.has(hh.id)) continue;
      const d = Math.abs(((a - hh.angle + Math.PI) % TAU + TAU) % TAU - Math.PI);
      if (d < bd2) { bd2 = d; b2 = hh; }
    }
    return b2 && bd2 < L.step * 0.5 ? b2.id : null;
  }

  function candidateAt(x, y) {
    if (!state || view !== 'game') return null;
    const act = Rules.action(state);
    if (act === 'night') {
      const id = houseAt(x, y, true);
      return id && selectableIds.has(id) ? id : null;
    }
    if (act === 'vote' || act === 'shoot') return nearestChar(x, y, (id) => selectableIds.has(id));
    return null;
  }

  function pick(id) {
    if (H.onPick) try { H.onPick(id); } catch (e) { /* yok say */ }
  }

  function tapCharacter(id, fromTag) {
    if (!state) return;
    if (selectableIds.has(id)) { pick(id); return; }
    const ph = state.room.phase;
    if (id === state.me.id && (ph === 'lobby' || ph === 'ended') && H.onSelf) H.onSelf();
    void fromTag;
  }

  function tap(x, y) {
    if (!state || view !== 'game' || !ready) return;
    const c = candidateAt(x, y);
    if (c) { pick(c); overlay.ripple(x, y); return; }
    const ph = state.room.phase;
    const me = state.me;
    if ((ph === 'lobby' || ph === 'ended') && nearestChar(x, y, (id) => id === me.id, 26)) { if (H.onSelf) H.onSelf(); return; }
    if (ph === 'lobby' || ph === 'day' || ph === 'ended') {
      const p = rayAt(x, y).intersectPlane(groundPlane, tmpV);
      if (!p) return;
      const L = village.layout;
      let r = Math.hypot(p.x, p.z);
      if (r > L.R + 4) return;
      // meydan halkasına kırp (sunucu da kırpar)
      const a = Math.atan2(p.x, p.z);
      r = clamp(r, L.Rp * 0.2, L.Rp * 0.96);
      const wx = Math.sin(a) * r, wz = Math.cos(a) * r;
      const n = worldToPlaza(L, wx, wz);
      world.localMove = { x: wx, z: wz, until: performance.now() + 1500 };
      overlay.ripple(x, y);
      if (H.onMove) try { H.onMove(n.x, n.y); } catch (e) { /* yok say */ }
      applyState(false);
    }
  }

  // işaretçi olayları: dokunma / sürükleme / iki parmak yakınlaştırma / tekerlek
  const ptrs = new Map();
  let dragMoved = false, downT = 0, downX = 0, downY = 0, pinchD = 0;
  function local(e) { const r = root.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
  function onDown(e) {
    if (e.target !== canvas) return;
    canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId);
    const p = local(e);
    ptrs.set(e.pointerId, p);
    if (ptrs.size === 1) { dragMoved = false; downT = performance.now(); downX = p.x; downY = p.y; }
    if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinchD = Math.hypot(a.x - b.x, a.y - b.y); dragMoved = true; }
  }
  function onMovePtr(e) {
    const p = local(e);
    if (!ptrs.has(e.pointerId)) {
      if (e.pointerType === 'mouse') hoverAt(p.x, p.y);
      return;
    }
    const prev = ptrs.get(e.pointerId);
    ptrs.set(e.pointerId, p);
    if (ptrs.size === 1) {
      if (!dragMoved && Math.hypot(p.x - downX, p.y - downY) > 9) dragMoved = true;
      if (dragMoved && view === 'game') { if (shotKind === 'follow') followDrag(p.x - prev.x, p.y - prev.y); else rig.drag(p.x - prev.x, p.y - prev.y); }
    } else if (ptrs.size === 2) {
      const [a, b] = [...ptrs.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchD > 0 && d > 0 && view === 'game') { if (shotKind === 'follow') followZoom(pinchD / d); else rig.zoom(pinchD / d); }
      pinchD = d;
    }
  }
  function onUp(e) {
    if (!ptrs.has(e.pointerId)) return;
    const p = local(e);
    ptrs.delete(e.pointerId);
    if (ptrs.size === 0 && !dragMoved && performance.now() - downT < 650) tap(p.x, p.y);
    if (ptrs.size < 2) pinchD = 0;
  }
  function onCancel(e) { ptrs.delete(e.pointerId); }
  function onWheel(e) {
    if (view !== 'game') return;
    e.preventDefault();
    const f = Math.exp(clamp(e.deltaY, -120, 120) * 0.0015);
    if (shotKind === 'follow') followZoom(f); else rig.zoom(f);
  }
  function hoverAt(x, y) {
    const id = candidateAt(x, y);
    if (id !== hoverId) { hoverId = id; canvas.style.cursor = id ? 'pointer' : ''; refreshLabels(); }
  }
  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointermove', onMovePtr);
  canvas.addEventListener('pointerup', onUp);
  canvas.addEventListener('pointercancel', onCancel);
  canvas.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse' && hoverId) { hoverId = null; refreshLabels(); } });
  canvas.addEventListener('wheel', onWheel, { passive: false });
  const onCtx = (e) => e.preventDefault();
  canvas.addEventListener('contextmenu', onCtx);

  // ---------- görünürlük ve bağlam kaybı ----------
  let paused = document.hidden;
  let contextLost = false;
  const onVis = () => {
    paused = document.hidden;
    if (!paused) { last = performance.now(); auto.reset(); schedule(); }
  };
  document.addEventListener('visibilitychange', onVis);
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); contextLost = true; });
  canvas.addEventListener('webglcontextrestored', () => { contextLost = false; shadowDirty = true; last = performance.now(); schedule(); });

  // ---------- günün saati hedefi ----------
  function hourTargetNow() {
    if (todOverride != null) return todOverride;
    if (view !== 'game' || !state) return 18.35;
    const { room, day } = state;
    const now = Date.now() + (state.serverNow ? 0 : 0);
    const rem = room.deadline ? Math.max(0, room.deadline - (now + skew)) / 1000 : null;
    switch (room.phase) {
      case 'lobby': return 15.2;
      case 'reveal': return 20.2;
      case 'night': {
        const total = (room.settings && room.settings.nightSec) || 30;
        const p = rem == null ? 0.3 : clamp(1 - rem / total, 0, 1);
        return (21.2 + p * 7.6) % 24;
      }
      case 'day': {
        const total = (room.settings && room.settings.daySec) || 120;
        let p;
        if (day && day.shortened) {
          // gün kısaldı: kalan sürede o anki ilerlemeden gün batımına yumuşakça
          if (shortFrom == null) { shortFrom = dayProgress; shortTotal = Math.max(1, rem || 10); }
          p = shortFrom + (1 - shortFrom) * clamp(1 - (rem || 0) / shortTotal, 0, 1);
        } else {
          shortFrom = null;
          p = rem == null ? 0.2 : clamp(1 - rem / total, 0, 1);
        }
        dayProgress = p;
        return 7.4 + p * 11.6;
      }
      case 'hunter': return hour > 19.5 || hour < 6 ? 7.6 : hour;
      case 'ended': return room.winner === 'vampir' ? 23.0 : room.winner === 'soytari' ? 18.5 : 9.5;
      default: return 17;
    }
  }
  let dayProgress = 0;
  let obsVersion = -1;
  let shortFrom = null, shortTotal = 10;
  let skew = 0;

  // ---------- kare döngüsü ----------
  let raf = 0;
  let last = performance.now();
  let lastRender = 0;
  let statTime = 0;
  const stats = { fps: 0, ms: 0, calls: 0, tris: 0, frames: 0 };
  function schedule() { if (!raf && !disposed) raf = requestAnimationFrame(frame); }
  const FT_N = 240;
  const ftBuf = new Float32Array(FT_N), cpuBuf = new Float32Array(FT_N);
  let ftIdx = 0, ftCount = 0;
  const pctTmp = new Float32Array(FT_N);
  function pct(buf, p) {
    if (!ftCount) return 0;
    pctTmp.set(buf);
    const a = pctTmp.subarray(0, ftCount).sort();
    return +a[Math.min(ftCount - 1, Math.floor(p * (ftCount - 1)))].toFixed(1);
  }
  function frame(now) {
    raf = 0;
    if (disposed) return;
    if (paused || contextLost) return;
    schedule();
    if (W < 2 || Hh < 2) return;
    // 30 fps sınırı (düşük kalite)
    if (tier.fps <= 30 && now - lastRender < 1000 / 30 - 4) return;
    const dt = clamp((now - last) / 1000, 0, 0.1);
    const frameMs = now - last;
    last = now;
    lastRender = now;
    const t0 = performance.now();
    try { step(dt); } catch (e) { report('kare', e); }
    const tm = performance.now();
    try { renderer.render(scene, camera); } catch (e) { report('çizim', e); }
    const t1 = performance.now();
    stats.stepMs = (stats.stepMs || 0) * 0.9 + (tm - t0) * 0.1;
    stats.renderMs = (stats.renderMs || 0) * 0.9 + (t1 - tm) * 0.1;
    stats.frames++;
    statTime += frameMs;
    stats.cpu = t1 - t0;
    // yüzdelikler için halka tampon (kare aralığı ve JS süresi)
    ftBuf[ftIdx] = frameMs; cpuBuf[ftIdx] = t1 - t0; ftIdx = (ftIdx + 1) % FT_N; if (ftCount < FT_N) ftCount++;
    if (statTime > 500) {
      stats.fps = Math.round((stats.frames * 1000) / statTime);
      stats.ms = +(statTime / stats.frames).toFixed(1);
      stats.frames = 0; statTime = 0;
    }
    stats.calls = renderer.info.render.calls;
    stats.tris = renderer.info.render.triangles;
    if (qualityMode === 'auto' && ready) {
      const nl = auto.sample(frameMs, t1 - t0, now);
      if (nl && nl !== tier.name) { applyTier(nl); drs.reset(); }
    }
    // dinamik çözünürlük (GPU/dolgu sınırlıysa); elle seçilen kademede de çalışır
    if (ready && !contextLost) {
      const sc = drs.sample(frameMs, t1 - t0, now, tier.fps === 30 ? 36 : 24);
      if (sc != null) { world0.renderScale = sc; renderer.setPixelRatio(px * sc); renderer.setSize(W, Hh, false); }
    }
  }

  const tmpCol = new THREE.Color();
  const blobCol = new THREE.Color(0, 0, 0);
  const ringCols = new Map();
  function colorOf(hex) { if (!ringCols.has(hex)) ringCols.set(hex, new THREE.Color(hex)); return ringCols.get(hex); }

  function step(dt) {
    world.time += dt;
    const time = world.time;
    // günün saati
    hourTarget = hourTargetNow();
    hour = stepHour(hour, hourTarget, dt, view === 'menu' ? 0.6 : 1.3);
    evalTod(hour, tod);
    // ruh hali (senaryo) parametreleri: Faz 2'de senaryo kimliğine göre ayarlanır
    const bloodMoon = state && view === 'game' && state.room.phase === 'ended' && state.room.winner === 'vampir';
    moonCol.copy(moonOverrideCol || mood.moon);
    if (bloodMoon) { moonCol.set('#ff6a6a'); tod.sun.lerp(colorOf('#ff5a6a'), 0.35); }
    const tAmt = mood.tintAmt * (mood.nightTint ? tod.night : 1);
    if (tAmt > 0) {
      tod.top.lerp(mood.tint, tAmt); tod.hor.lerp(mood.tint, tAmt * 0.8);
      tod.sky.lerp(mood.tint, tAmt * 0.5); tod.gnd.lerp(mood.tint, tAmt * 0.3);
    }
    if (tod.night > 0.3) tod.sun.lerp(moonCol, (moonOverrideCol || mood.nightTint ? 0.55 : 0.3) * tod.night);
    tod.fogNear *= mood.fog * fogBoostK; tod.fogFar *= mood.fog * fogBoostK;
    tod.stars *= mood.stars;
    scene.fog.color.copy(tod.hor);
    // sis kameranın uzaklığına göre ölçeklenir: tepeden genel bakışta köy sise gömülmesin
    // gece genel bakışında biraz sis derinliği kalsın (köyün kenarları puslu)
    const fogOff = Math.max(0, rig.cur.dist * rig.user.zoom - 28) * (1 - 0.35 * tod.night);
    scene.fog.near = tod.fogNear + fogOff * 0.9; scene.fog.far = tod.fogFar + fogOff * 1.1;
    // ay ışığı kenar parlaması: kameranın karşısından
    rimLight.intensity = 0.9 * tod.night * (roomMode ? 0.4 : 1);
    rimLight.color.copy(moonCol);
    rimLight.position.set(-camera.position.x * 0.6, 60, -camera.position.z * 0.6 - 40);
    hemi.color.copy(tod.sky); hemi.groundColor.copy(tod.gnd); hemi.intensity = tod.hi;
    sun.color.copy(tod.sun); sun.intensity = tod.si;
    const L = village && village.layout;
    const span = L ? L.R + 14 : 40;
    sun.position.copy(tod.lightDir).multiplyScalar(120);
    sun.target.position.set(0, 0, 0);
    if (sun.castShadow) {
      const sc = sun.shadow.camera;
      if (sc.right !== span) { sc.left = -span; sc.right = span; sc.top = span; sc.bottom = -span; sc.near = 20; sc.far = 260; sc.updateProjectionMatrix(); shadowDirty = true; }
      if (lastLightDir.angleTo(tod.lightDir) > 0.026) { lastLightDir.copy(tod.lightDir); shadowDirty = true; }
    }
    // ateş
    const flick = 0.82 + 0.1 * Math.sin(time * 13.1) + 0.06 * Math.sin(time * 23.7 + 1) + 0.05 * Math.sin(time * 5.3);
    if (roomMode && room) {
      // iç mekânda ateş ışığı fenerin/mumun yerine geçer
      const winView = roomMode === 'window' || (director.current && director.current.kind === 'watch');
      // pencere görünümü: dış duvar ve gözcü ay ışığında seçilebilsin (kare kenarları kapkara kalmasın)
      if (winView) { const lp = room.W({ x: -2.4, y: 2.3, z: -1.2 }); fireLight.position.copy(lp); hemi.color.lerp(moonCol, 0.6); hemi.groundColor.lerp(moonCol, 0.35); hemi.intensity = tod.hi + 1.1; }
      else { const lp = room.lanternWorld(); fireLight.position.set(lp.x, lp.y + 0.9, lp.z + 0.8); }
      fireLight.intensity = (winView ? 13 : 9 + 5 * tod.night) * flick;
      fireLight.distance = 12;
    } else {
      fireLight.intensity = (2 + 17 * tod.night * tod.night) * tod.fire * flick;
      fireLight.position.set(Math.sin(time * 7) * 0.08, 1.4, 0);
      fireLight.distance = 17;
    }
    fire.update(time, px, 0.75 + 0.25 * tod.fire);
    sky.update(tod, time, camera, px, moonCol);
    fireflies.update(time, px, tier.fireflies ? clamp(tod.night * 1.2 - 0.2, 0, 1) : 0);
    vignette.style.opacity = String(0.55 + tod.night * 0.45 + (roomMode === 'window' ? 0.12 : 0));
    // kare başı geri çağrılar (sinematik ara değerleri, yarasalar, meşaleler)
    for (let i = ticker.length - 1; i >= 0; i--) {
      let done = true;
      try { done = ticker[i](dt, time); } catch (e) { report('ticker', e); }
      if (done) ticker.splice(i, 1);
    }
    try { updateRoom(); } catch (e) { report('iç mekân', e); }
    if (room && room.visible) { try { room.update(dt, time); } catch (e) { report('oda', e); } }
    for (const a of cineActors.values()) { try { a.ch.update(dt, time); } catch (e) { report('kopya', e); } }
    if (labelsDirty && state && view === 'game') refreshLabels();
    weather.update(dt, time, px, rig.cur.target, (view === 'game' || view === 'menu') ? tier.weather : 0, moodDef && moodDef.fogTint ? colorOf(moodDef.fogTint) : null, tod.night);

    if (village) {
      if (village.update(dt, time, tod)) shadowDirty = true;
      if (village.version !== obsVersion && village.layout) { obsVersion = village.version; buildObstacles(village.layout); }
      // gece ışıkları zamanlayıcısı: saniyede 4 kez yeterli
      tickT -= dt;
      if (state && view === 'game' && tickT <= 0) { tickT = 0.25; choreo.tick(state); }
    }

    // doğrudan hareket (sanal kol / tuşlar): yerel tahmin
    try { updateDrive(dt); } catch (e) { report('sürüş', e); }
    // karakterler
    const obs = world.obstacles;
    const list = charList;
    list.length = 0;
    camFrustum.setFromProjectionMatrix(projView.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
    for (const ch of chars.values()) {
      // görüş dışı: 4 karede bir, uzak: 2 karede bir; tasarruf kademesinde en az 2
      lodSphere.center.set(ch.pos.x, ch.pos.y + 0.9, ch.pos.z);
      const inView = ch.visible && camFrustum.intersectsSphere(lodSphere);
      const far = camera.position.distanceToSquared(lodSphere.center) > 26 * 26;
      ch.animEvery = !inView ? 4 : Math.max(far ? 2 : 1, tier.animLod || 1);
      try { ch.update(dt, time); } catch (e) { report('karakter', e); recoverChar(ch); }
      if (ch.visible && !ch.claimed) list.push(ch);
    }
    for (const g of ghosts.values()) { try { g.update(dt, time); } catch (e) { report('hayalet', e); recoverChar(g); } }
    if (driving) clampDriven();
    // karakterler arası itme ve statik engeller
    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      for (let j = i + 1; j < list.length; j++) {
        const b = list[j];
        const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z;
        const d2 = dx * dx + dz * dz;
        if (d2 < 0.72 * 0.72 && d2 > 1e-6) {
          const d = Math.sqrt(d2), push = (0.72 - d) * 0.5;
          const ux = dx / d, uz = dz / d;
          const wa = a.speed > b.speed ? 0.75 : 0.25;
          a.pos.x -= ux * push * wa; a.pos.z -= uz * push * wa;
          b.pos.x += ux * push * (1 - wa); b.pos.z += uz * push * (1 - wa);
        }
      }
      if (!a.peeking) resolveStatic(a.pos, obs, null);
    }

    // efekt grupları
    glow.begin(); pool.begin(); blobs.begin(); rings.begin();
    // ateşin halesi ve zemin ışığı
    glow.add(0, 1.0, 0, 3.4, colorOf('#ff8a2a'), 0.55 * tod.fire * flick);
    pool.add(0, 0.04, 0, 13 + 3 * tod.night, colorOf('#ff7a1a'), (0.18 + 0.3 * tod.night) * tod.fire * flick);
    if (village) village.emitGlows(tod, time, glow, pool);
    const blobA = tier.blob ? 0.55 : 0.32;
    const selC = state ? colorOf(Rules.selColor(state, ui.witchMode)) : null;
    const act = state && view === 'game' ? Rules.action(state) : null;
    for (const ch of list) {
      blobs.add(ch.pos.x, 0.025, ch.pos.z, 1.05, blobCol, blobA);
      if (act && act !== 'night' && selectableIds.has(ch.id)) {
        const picked = state && Rules.isPicked(state, { id: ch.id });
        rings.add(ch.pos.x, 0.05, ch.pos.z, picked ? 1.9 : 1.5, selC, picked ? 1 : hoverId === ch.id ? 0.95 : 0.45, ch.seed * 6);
      }
    }
    for (const g of ghosts.values()) glow.add(g.pos.x, 1.2, g.pos.z, 2.2, colorOf(COLOR_HEX[g.look.color]), 0.22);
    if (act === 'night' && village) {
      for (const id of selectableIds) {
        const h = village.house(id);
        if (!h) continue;
        const a = village.anchors(h);
        const picked = Rules.isPicked(state, { id });
        rings.add(a.approach.x, 0.05, a.approach.z, picked ? 3.4 : 2.6, selC, picked ? 1 : hoverId === id ? 0.95 : 0.5, h.seat);
      }
    }
    bursts.update(dt, time);
    glow.end(time); pool.end(time); blobs.end(time); rings.end(time);

    // kamera
    if (view === 'menu') rig.shot.az += dt * 0.045;
    if (shotKind === 'plaza' || shotKind === 'gather') {
      // dinamik sığdırma noktalarını tazele (karakterler yürüyor)
      updateShotPointsOnly();
    }
    // takip kamerası: kip uygunluğu değiştiyse (karakter göründü, öldü, kip değişti) çekimi yenile
    followCheckT -= dt;
    if (view === 'game' && state && followCheckT <= 0) { followCheckT = 0.4; if ((shotKind === 'follow') !== wantFollow() && (shotKind === 'follow' || shotKind === 'plaza')) updateShot(false); }
    if (shotKind === 'follow') { try { updateFollow(dt); } catch (e) { report('takip', e); } }
    rig.update(dt, time);
    try { camOccluders(); } catch (e) { report('örtme', e); }
    const togg = view === 'game' && state && !director.current && !roomMode && followable();
    overlay.setCamToggle(!!togg, shotKind === 'follow' ? 'follow' : 'overview', insets);
    overlay.setRecenter(view === 'game' && (shotKind === 'follow' ? followOffset() : rig.offset), insets);

    // gölge haritası (orta kalite: sadece gerektiğinde)
    shadowCool -= dt;
    // gece gölgeleri neredeyse görünmez: ay dönerken her 2 sn'de bir yenile
    if (tod.night > 0.7 && shadowDirty && shadowCool <= 0 && !layoutMoving()) shadowCool = 2;
    if (sun.castShadow && tier.shadows === 1 && shadowDirty && shadowCool <= 0) { renderer.shadowMap.needsUpdate = true; shadowDirty = false; shadowCool = layoutMoving() ? 0.25 : 1.5; }

    // HTML katmanı
    labelT -= dt;
    if (view === 'game' && state && labelT <= 0) {
      labelT = tier.labelHz >= 60 ? 0 : 1 / tier.labelHz - 0.004;
      overlay.project(camera, anchorTag, anchorPlaque, tagVisible);
    }
  }

  // Bir karakterin animasyonu bozulursa modeli baştan kur (hatayı her karede tekrarlamasın)
  function recoverChar(ch) {
    try { ch.once = null; const l = ch.look; ch.lookKey = null; ch.setLook(l); applyCharShadow(ch); } catch (e) { ch.setVisible(false); }
  }

  // ---------- takip kamerası ----------
  // Gündüz / lobi / oyun sonu: kendi karakterinin (ölüyse hayaletinin) biraz üstünden ve çapraz arkasından izler.
  // Sürükleme karakter çevresinde döndürür, kıstırma/tekerlek yakından köy genel bakışına kadar uzaklaştırır.
  const CAM_KEY = 'vkw.cam';
  let camMode = 'follow';
  try { const v = localStorage.getItem(CAM_KEY); if (v === 'follow' || v === 'overview') camMode = v; } catch (e) { /* özel sekme */ }
  const fol = { az: 0, el: 0.42, zoom: 1, dragT: 99, init: false, wide: false, side: 1, ovDist: 50, zoomGoal: 0, kd: 1, ke: 0 };
  const tmpZero = new THREE.Vector3(0, 0, 0);
  const folTgt = new THREE.Vector3();
  let followCheckT = 0;
  function followTarget() {
    if (!state || !state.me) return null;
    const me = state.me;
    if (!me.alive) { const g = ghosts.get(me.id); if (g) return g; }
    const ch = chars.get(me.id);
    return ch && ch.visible ? ch : null;
  }
  function movePhase() { const ph = state && view === 'game' ? state.room.phase : null; return ph === 'lobby' || ph === 'day' || ph === 'ended'; }
  function followable() { return movePhase() && !!followTarget(); }
  function wantFollow() { return camMode === 'follow' && followable(); }
  function behindAz(ch) { return ch.yaw + Math.PI + 0.38 * fol.side; }
  function followDrag(dx, dy) {
    fol.az -= dx * 0.0075;
    fol.el = clamp(fol.el + dy * 0.004, 0.12, 1.15);
    fol.dragT = 0;
  }
  function followZoom(f) { fol.zoom = clamp(fol.zoom * f, 0.55, 4.2); fol.zoomGoal = 0; fol.dragT = Math.min(fol.dragT, 0.5); }
  function followOffset() {
    const ch = followTarget();
    if (!ch) return false;
    return Math.abs(fol.zoom - (fol.wide ? 1.6 : 1)) > 0.15 || Math.abs(fol.el - 0.42) > 0.12 || (ch.speed < 0.3 && Math.abs(wrapAngle(behindAz(ch) - fol.az)) > 0.9);
  }
  function recenterCam() {
    if (shotKind === 'follow') { const ch = followTarget(); if (ch) fol.az = behindAz(ch); fol.el = 0.42; fol.zoom = fol.wide ? 1.6 : 1; fol.zoomGoal = 0; fol.dragT = 99; return; }
    rig.recenter();
  }
  function toggleCam() {
    camMode = camMode === 'follow' ? 'overview' : 'follow';
    try { localStorage.setItem(CAM_KEY, camMode); } catch (e) { /* özel sekme */ }
    updateShot(false);
  }
  function updateFollow(dt, snap) {
    const ch = followTarget();
    const L = village && village.layout;
    if (!ch || !L) return;
    const portrait = rig.portrait;
    if (!fol.init) {
      fol.init = true;
      // çapraz taraf: ateşe bakan karakterde kamera hafif dış yanda (ateş ve diğerleri karede)
      fol.side = 1; fol.az = behindAz(ch); fol.el = 0.42; fol.zoom = 1; fol.dragT = 99; fol.zoomGoal = 0; fol.wide = false;
    }
    fol.dragT += dt;
    // oylama / avcı adayları: biraz geri çekil (adaylar kolayca kareye girsin)
    const act = Rules.action(state);
    const wide = act === 'vote' || act === 'shoot';
    if (wide !== fol.wide) { fol.wide = wide; if (wide && fol.zoom < 1.6) fol.zoomGoal = 1.6; }
    if (fol.zoomGoal) { fol.zoom += (fol.zoomGoal - fol.zoom) * damp(2.5, dt); if (Math.abs(fol.zoom - fol.zoomGoal) < 0.02) fol.zoomGoal = 0; }
    // yürürken (sürükleme bittikten kısa süre sonra) kamera yeniden karakterin arkasına döner
    if (ch.speed > 0.4 && fol.dragT > 1.1) fol.az += wrapAngle(behindAz(ch) - fol.az) * damp(ch.drive ? 1.5 : 0.9, dt);
    fol.az = wrapAngle(fol.az);
    const z = fol.zoom;
    const b = smooth(clamp((z - 1.7) / 2.5, 0, 1));          // 0: takip, 1: köy genel bakışı
    const base = portrait ? 8.8 : 7.2;
    folTgt.set(ch.pos.x, (ch.isGhost ? 1.5 : 1.25) + (ch.isGhost && ch.model ? ch.model.position.y : 0), ch.pos.z).lerp(tmpZero, b);
    let el = fol.el + ((portrait ? 1.15 : 0.98) - fol.el) * b;
    let dist = base * z + (fol.ovDist - base * z) * b;
    const fov = (portrait ? 54 : 46) + (40 - (portrait ? 54 : 46)) * b;
    // evlerin içine girme: kamera yatay olarak ev halkasının önünde kalsın (önce yüksel, sonra yaklaş)
    const lim = L.R - 4.6;
    if (b < 0.6) {
      for (let it = 0; it < 14; it++) {
        const h = Math.cos(el) * dist;
        const cx = folTgt.x + Math.sin(fol.az) * h, cz = folTgt.z + Math.cos(fol.az) * h;
        if (Math.hypot(cx, cz) <= lim) break;
        // önce yaklaş (üçüncü şahıs hissi kalsın), yetmezse yüksel
        // kullanıcı uzaklaştırdıysa yükselmek öncelikli (uzaklaştırma geri alınmasın)
        if (z > 1.25 && el < 1.05) el += 0.08; else if (dist > 4.4) dist *= 0.9; else if (el < 1.05) el += 0.08; else break;
      }
    }
    // dekor engelleri (ağaç, fener direği, tezgâh, araba, çit...): önceden ölçülmüş silindirlerle ucuz test.
    // Sonuç oran olarak yumuşatılır: engele girerken hızlı, çıkarken yavaş (kayarken titreme olmaz).
    if (b < 0.85) {
      const sv = solveProps(folTgt, fol.az, el, dist);
      const wantK = sv.dist / dist, wantE = sv.el - el;
      if (snap) { fol.kd = wantK; fol.ke = wantE; }
      fol.kd += (wantK - fol.kd) * damp(wantK < fol.kd ? 9 : 1.8, dt);
      fol.ke += (wantE - fol.ke) * damp(wantE > fol.ke ? 7 : 1.5, dt);
      dist *= fol.kd; el += fol.ke;
    } else { fol.kd = 1; fol.ke = 0; }
    rig.setShot({ kind: 'follow', target: folTgt, az: fol.az, el, dist, fov, speed: 5.5, snap: !!snap });
    rig.shot.dynamic = false;
  }
  // Takip kamerasının dibindeki ya da kamerayla karakter arasındaki diğer köylüler gizlenir (dev ön plan başları olmasın)
  function camOccluders() {
    const follow = shotKind === 'follow' && !rig.override && rig.ovW < 0.05;
    const me = follow ? followTarget() : null;
    const c = camera.position;
    for (const ch of chars.values()) {
      let hide = false;
      if (me && ch !== me && ch.visible && !ch.claimed) {
        const dx = ch.pos.x - c.x, dz = ch.pos.z - c.z;
        const d2 = dx * dx + dz * dz;
        if (d2 < 2.4 * 2.4) hide = true;
        else {
          // kamera -> hedef doğrusu üzerinde, hedeften önce ve çizgiye yakın
          const tx = me.pos.x - c.x, tz = me.pos.z - c.z;
          const tl2 = tx * tx + tz * tz || 1;
          const t = (dx * tx + dz * tz) / tl2;
          if (t > 0 && t < 0.82) { const px = dx - tx * t, pz = dz - tz * t; if (px * px + pz * pz < 0.75 * 0.75) hide = true; }
        }
      }
      if (hide !== !!ch.camHidden) {
        ch.camHidden = hide;
        ch.root.visible = ch.visible && !hide;
        labelsDirty = true;
      }
    }
  }
  const solveOut = { el: 0, dist: 0 };
  function solveProps(T, az, el, dist) {
    const list = village && village.blockers;
    let e = el, d = dist;
    if (!list || !list.length) { solveOut.el = e; solveOut.dist = d; return solveOut; }
    const sa = Math.sin(az), ca = Math.cos(az);
    for (let it = 0; it < 6; it++) {
      const hl = Math.cos(e) * d;
      const cx = T.x + sa * hl, cz = T.z + ca * hl, cy = T.y + Math.sin(e) * d;
      let needUp = 0, cut = Infinity;
      for (let i = 0; i < list.length; i++) {
        const o = list[i];
        // kaba eleme: hedef-kamera parçasının kutusu
        if (o.x + o.r + 0.6 < Math.min(T.x, cx) || o.x - o.r - 0.6 > Math.max(T.x, cx) || o.z + o.r + 0.6 < Math.min(T.z, cz) || o.z - o.r - 0.6 > Math.max(T.z, cz)) continue;
        // parçaya en yakın nokta (yatay)
        const px = o.x - T.x, pz = o.z - T.z;
        let t = (px * sa + pz * ca) / (hl || 1e-3);
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        const qx = T.x + sa * hl * t - o.x, qz = T.z + ca * hl * t - o.z;
        const dd = Math.sqrt(qx * qx + qz * qz);
        const y = T.y + (cy - T.y) * t;
        // kamera nesnenin içinde
        const icx = cx - o.x, icz = cz - o.z;
        if (icx * icx + icz * icz < (o.r + 0.45) * (o.r + 0.45) && cy < o.h + 0.35) {
          if (o.h < 2.4) needUp = Math.max(needUp, o.h + 0.45 - cy);
          else cut = Math.min(cut, Math.max(0, t * hl - o.r - 0.5));
          continue;
        }
        // görüşü kapatan büyük nesne (ince direkler ve alçak dekor görüşü kapatmaz)
        if (o.h >= 1.9 && o.r >= 0.35 && t > 0.12 && t < 1 && dd < o.r + 0.12 && y < o.h) cut = Math.min(cut, Math.max(0, t * hl - o.r - 0.45));
      }
      if (!needUp && cut === Infinity) break;
      if (cut !== Infinity) {
        const nd = cut / Math.max(0.2, Math.cos(e));
        if (nd >= 3.6) d = Math.min(d, nd); else e = Math.min(1.2, e + 0.12);
      }
      if (needUp) e = Math.min(1.2, e + Math.max(0.06, needUp / Math.max(2, d)));
    }
    solveOut.el = e; solveOut.dist = d;
    return solveOut;
  }

  // ---------- doğrudan hareket ----------
  const joyV = { x: 0, y: 0 };
  const camDir = new THREE.Vector3();
  let driving = false, sendT = 0, lastSentX = -1, lastSentY = -1;
  Object.defineProperty(world, 'driving', { get: () => driving });
  function sendPos(ch, force) {
    const L = village && village.layout;
    if (!L || !H.onMove) return;
    const n = worldToPlaza(L, ch.pos.x, ch.pos.z);
    if (!force && Math.abs(n.x - lastSentX) < 0.003 && Math.abs(n.y - lastSentY) < 0.003) return;
    lastSentX = n.x; lastSentY = n.y;
    try { H.onMove(n.x, n.y); } catch (e) { /* yok say */ }
  }
  function updateDrive(dt) {
    const ch = followTarget();
    const can = !!(ready && ch && movePhase() && !roomMode && !director.current && !ch.claimed);
    controls.setEnabled(can);
    controls.vector(joyV);
    const m = can ? Math.hypot(joyV.x, joyV.y) : 0;
    const now = performance.now();
    if (m > 0.08) {
      // kameraya göre: ileri = kameranın baktığı yön (yere izdüşüm)
      camera.getWorldDirection(camDir);
      camDir.y = 0;
      if (camDir.lengthSq() < 1e-4) camDir.set(-Math.sin(rig.cur.az), 0, -Math.cos(rig.cur.az));
      camDir.normalize();
      const fx = camDir.x, fz = camDir.z, rx = -fz, rz = fx;
      let dx = rx * joyV.x + fx * joyV.y, dz = rz * joyV.x + fz * joyV.y;
      const l = Math.hypot(dx, dz) || 1;
      dx /= l; dz /= l;
      const speed = m > 0.92 ? 3.0 : 0.5 + m * 1.9;
      if (!ch.drive) ch.drive = { x: 0, z: 0, speed: 0 };
      ch.drive.x = dx; ch.drive.z = dz; ch.drive.speed = speed;
      if (!driving) { driving = true; sendT = 0; }
      const lm = world.localMove || (world.localMove = { x: 0, z: 0, until: 0 });
      lm.x = ch.pos.x; lm.z = ch.pos.z; lm.until = now + 2500;
      sendT -= dt;
      if (sendT <= 0) { sendT = 0.15; sendPos(ch, false); }
    } else if (driving) {
      driving = false;
      for (const c of [chars.get(state && state.me ? state.me.id : ''), ghosts.get(state && state.me ? state.me.id : '')]) if (c) c.drive = null;
      // aşama değiştiyse (gece) son konum gönderilmez: sunucu reddeder
      if (ch && movePhase()) {
        world.localMove = { x: ch.pos.x, z: ch.pos.z, until: now + 2500 };
        sendPos(ch, true);
        applyState(false);
      }
    }
  }
  function clampDriven() {
    const ch = followTarget();
    const L = village && village.layout;
    if (!ch || !L) return;
    const r = Math.hypot(ch.pos.x, ch.pos.z) || 1e-3;
    const r0 = Math.max(L.Rp * 0.2, 2.3), r1 = L.Rp * 0.96;
    if (r < r0 || r > r1) { const k = clamp(r, r0, r1) / r; ch.pos.x *= k; ch.pos.z *= k; }
  }

  // Kadraj merkezi: karakter kümesinin ortası (ateşe doğru çekilmiş) - boş meydan yarısı ekranı kaplamasın
  const centroidV = new THREE.Vector3();
  function plazaCentroid(pts, n) {
    let sx = 0, sz = 0, k = 0;
    for (let i = 8; i < n; i++) { sx += pts[i].x; sz += pts[i].z; k++; }
    if (!k) return centroidV.set(0, 0.9, 0.2);
    return centroidV.set((sx / k) * 0.6, 0.9, (sz / k) * 0.6 + 0.2);
  }

  const charList = [];   // kare başı yeniden kullanılır (çöp üretmesin)
  const camFrustum = new THREE.Frustum();
  const projView = new THREE.Matrix4();
  const lodSphere = new THREE.Sphere(new THREE.Vector3(), 1.3);
  function layoutMoving() { return !!(village && village.busy); }

  let refitT = 0;
  function updateShotPointsOnly() {
    refitT -= 1 / 60;
    if (refitT > 0) return;
    refitT = 0.3;
    const L = village && village.layout;
    if (!L) return;
    const pts = rig.shot.points;
    if (!pts) return;
    let n = 0;
    const rFire = shotKind === 'gather' ? 5.6 : 3.2;
    const out = [];
    for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU; out.push(fitPts[n++].set(Math.sin(a) * rFire, 0, Math.cos(a) * rFire)); }
    for (const ch of chars.values()) {
      if (!ch.visible || n > 60) continue;
      const goal = ch.path && ch.path.length ? ch.path[ch.path.length - 1] : ch.pos;
      if (Math.hypot(goal.x, goal.z) > L.Rp + 1.5) continue;
      out.push(fitPts[n++].set(goal.x, 0, goal.z));
      out.push(fitPts[n++].set(goal.x, 2.4, goal.z));
    }
    for (const g of ghosts.values()) if (n < 62) { out.push(fitPts[n++].set(g.pos.x, 2.6, g.pos.z)); out.push(fitPts[n++].set(g.pos.x, 0, g.pos.z)); }
    rig.shot.points = out;
    rig.shot.target.copy(plazaCentroid(out, out.length));
  }

  function anchorTag(id, out) {
    if (id.startsWith('room:')) {
      const a = room && room.actors.get(id.slice(5));
      if (!a || !a.ch.visible) return false;
      out.set(a.ch.pos.x, a.ch.pos.y + a.ch.headY + 0.15, a.ch.pos.z); return true;
    }
    if (id.startsWith('cine:')) {
      const a = cineActors.get(id);
      if (!a || !a.ch.visible) return false;
      out.set(a.ch.pos.x, a.ch.root.position.y + a.ch.headY + 0.15, a.ch.pos.z); return true;
    }
    const ch = chars.get(id);
    if (ch && ch.visible) { out.set(ch.pos.x, ch.pos.y + ch.headY + 0.15, ch.pos.z); return true; }
    const g = ghosts.get(id);
    if (g) { out.set(g.pos.x, g.headY + 0.5 + g.model.position.y, g.pos.z); return true; }
    return false;
  }
  function tagVisible(id) {
    const extra = id.startsWith('room:') || id.startsWith('cine:');
    if (roomMode) return extra;
    if (extra) return true;
    const ch = chars.get(id);
    if (ghosts.has(id)) return true;
    if (!ch || !ch.visible || ch.camHidden) return false;
    // gece genel bakışında yalnızca kendi karakterin ve görebildiğin ziyaretçiler etiketli (eve yürüyenler değil)
    if (state && state.room.phase === 'night' && id !== state.me.id && !nightActors.has(id)) return false;
    return true;
  }
  function anchorPlaque(id, out) {
    if (roomMode) return false;
    const h = village && village.house(id);
    if (!h || h.scale < 0.6) return false;
    const L = village.layout;
    // çatı ortası; kalabalık köyde tabelalar sırayla içe/dışa kaydırılır (dar ekranda üst üste binmesin)
    let off = 0;
    if (L && L.n > 9 && W < 700) off = (h.seat % 2 ? 1 : -1) * 2.2;
    const r = Math.hypot(h.cx, h.cz) || 1;
    out.set(h.cx + (h.cx / r) * off, h.info.height * 0.9, h.cz + (h.cz / r) * off);
    return true;
  }

  // ---------- genel API ----------
  function setView(v) {
    if (v !== 'menu' && v !== 'game') return;
    if (v === view) return;
    view = v;
    layoutSig = '';
    root.dataset.view = v;
    if (!ready) return;
    if (v === 'menu') {
      closeRoom();
      applyScenario(null);
      overlay.clear();
      for (const ch of chars.values()) ch.dispose();
      chars.clear();
      for (const g of ghosts.values()) g.dispose();
      ghosts.clear();
      choreo.reset();
      director.reset();
      setLayoutFrom(null);
      for (const id of [...village.houses.keys()]) village.setDead(id, false);
      for (const h of village.houses.values()) { h.litTarget = 1; h.dead = false; }
    } else {
      setLayoutFrom(state);
      if (state) applyState(true);
    }
    updateShot(true);
    rig.snapNext = false;
  }

  function reset() {
    director.reset();
    closeRoom();
    applyScenario(null);
    overlay.clear();
    for (const ch of chars.values()) ch.dispose();
    chars.clear();
    for (const g of ghosts.values()) g.dispose();
    ghosts.clear();
    choreo.reset();
    state = null;
    layoutSig = '';
    dayProgress = 0;
    if (ready) { if (village) for (const id of [...village.houses.keys()]) village.setDead(id, false); setLayoutFrom(null); }
    rig.recenter();
    updateShot(true);
  }

  function setQuality(level) {
    if (level === 'auto') { qualityMode = 'auto'; auto.failed.clear(); auto.reset(); return; }
    if (!TIERS[level]) return;
    qualityMode = level;
    auto.level = level;
    applyTier(level);
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    director.dispose();
    cancelAnimationFrame(raf);
    document.removeEventListener('visibilitychange', onVis);
    window.removeEventListener('resize', onWinResize);
    window.removeEventListener('orientationchange', onWinResize);
    if (ro) ro.disconnect();
    for (const ch of chars.values()) ch.dispose();
    for (const g of ghosts.values()) g.dispose();
    chars.clear(); ghosts.clear();
    if (village) village.dispose();
    sky.dispose(); terrain.dispose(); fire.dispose(); fireflies.dispose(); bursts.dispose(); weather.dispose();
    if (room) room.dispose();
    for (const a of cineActors.values()) a.ch.dispose();
    cineActors.clear();
    ticker.length = 0;
    for (const b of [glow, pool, blobs, rings]) b.dispose();
    overlay.dispose();
    controls.dispose();
    if (sun.shadow.map) sun.shadow.map.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    A.releaseGPU();
    root.remove();
    clearTimeout(flashT);
  }

  schedule();

  const api = {
    update,
    // Yeni duyuru çalışanı keser (arayüzün "geç" düğmesi sıradakini hemen ister)
    announce(msg) {
      if (disposed) return Promise.resolve();
      if (!ready || view !== 'game') { director.skip(); return Promise.resolve(); }
      if (msg && msg.kind === 'start' && msg.scenario) applyScenario(msg.scenario.id);
      return director.announce(msg);
    },
    skip() { director.skip(); },
    bubble(id, text, channel) {
      if (!text) return;
      overlay.bubble(id, String(text), channel);
      const ch = chars.get(id);
      if (ch && ch.visible && !ch.busy && !ch.once && ch.base === 'idle') ch.playOnce(Math.random() < 0.5 ? 'interact-right' : 'interact-left', { timeScale: 0.8 });
      // yakındakiler konuşana döner
      if (ch && ch.visible) for (const o of chars.values()) if (o !== ch && o.visible && Math.hypot(o.pos.x - ch.pos.x, o.pos.z - ch.pos.z) < 10) o.gaze(ch.pos, 3.5, world.time);
    },
    setView,
    setQuality,
    getQuality() { return qualityMode === 'auto' ? 'auto' : tier.name; },
    getTier() { return tier.name; },
    resize,
    reset,
    dispose,
    setInsets(o) { o = o || {}; insets = { top: o.top || 0, bottom: o.bottom || 0, left: o.left || 0, right: o.right || 0, joystick: o.joystick === null ? null : (o.joystick && typeof o.joystick === 'object' ? { left: +o.joystick.left || 0, bottom: +o.joystick.bottom || 0, size: +o.joystick.size || 0 } : undefined) }; rig.setInsets(insets); overlay.setInsets(insets); controls.place(insets, W, Hh); updateShot(false); },
    recenter() { recenterCam(); },
    // gündüz kamera kipi: 'follow' (karakterini takip) | 'overview' (meydana genel bakış)
    setCameraMode(m) { if (m === 'follow' || m === 'overview') { if (m !== camMode) toggleCam(); } },
    getCameraMode() { return camMode; },
    // Ruh hali parametreleri (Faz 2 senaryoları): { fog, tint, tintAmt, moon, stars, weather }
    setMood(m = {}) {
      if (m.fog != null) mood.fog = clamp(+m.fog, 0.3, 2);
      if (m.tint != null) mood.tint.set(m.tint);
      if (m.tintAmt != null) mood.tintAmt = clamp(+m.tintAmt, 0, 1);
      if (m.moon != null) mood.moon.set(m.moon);
      if (m.stars != null) mood.stars = clamp(+m.stars, 0, 1);
      if (m.weather != null) mood.weather = m.weather;
    },
    // Faz 2 / hata ayıklama
    director,
    stats() {
      return {
        ...stats, tier: tier.name, mode: qualityMode, px, scale: +(world0.renderScale || 1).toFixed(2), hour: +hour.toFixed(2), ready,
        p50: pct(ftBuf, 0.5), p95: pct(ftBuf, 0.95), p99: pct(ftBuf, 0.99), cpu50: pct(cpuBuf, 0.5), cpu95: pct(cpuBuf, 0.95),
      };
    },
    resetStats() { ftCount = 0; ftIdx = 0; },
    setScenario(id) { applyScenario(id); },
    _debug: { world, scene, renderer, camera, rig, fol, get village() { return village; }, get room() { return room; }, get roomMode() { return roomMode; }, setHour(h) { hour = h; } },
  };
  // saat farkı (serverNow) her state'te güncellenir
  const origUpdate = api.update;
  api.update = (st, o) => { if (st && st.serverNow) skew = st.serverNow - Date.now(); origUpdate(st, o); };
  // Dışarıdan çağrılan her yöntem hatayı içeride tutar (arayüzü asla bozmasın)
  for (const k of ['announce', 'bubble', 'setView', 'setQuality', 'resize', 'reset', 'setInsets', 'recenter', 'setMood', 'skip', 'setScenario', 'setCameraMode']) {
    const f = api[k];
    api[k] = function (...args) { try { return f.apply(api, args); } catch (e) { report('api.' + k, e); return k === 'announce' ? Promise.resolve() : undefined; } };
  }
  return api;
}
