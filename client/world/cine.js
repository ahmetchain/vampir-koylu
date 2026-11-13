// Duyuru sinematikleri (Faz 2): her biri gerçek oyuncu karakterleriyle kısa, gerçek zamanlı bir sahne.
// Çizgi film tonunda, şiddetsiz: puf, yükselen hayaletler, düşen mezar taşları. Bilinmeyen sahne -> türün varsayılanı.
// Kamu sahneleri kimseyi ele vermez (ısıran vampir anonim bir siluettir); özel sahneler (seer, watch, promote)
// yalnızca alıcının zaten bildiğini gösterir.
import * as THREE from 'three';
import * as A from './assets.js';
import { easeInOut, easeOut } from './director.js';
import { makeFlame } from './fx.js';
import { COLOR_HEX, TAU, clamp } from './constants.js';
import { toWorld } from './layout.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const ids = (msg) => (msg.targets || []).map((t) => t.id).filter(Boolean);

export function registerCinematics(director, world) {
  const R = () => world.layoutR();
  const L = () => world.village.layout;

  // ---------- kamera yardımcıları ----------
  function houseView(id, o = {}) {
    const a = world.houseAnchors(id);
    if (!a) return null;
    const back = o.back;
    const base = back ? a.backWin : { x: (a.door.x + a.frontWin.x) / 2, z: (a.door.z + a.frontWin.z) / 2 };
    const out = back ? a.peek : a.approach;
    const from = back ? a.backWin : a.door;
    const dx = out.x - from.x, dz = out.z - from.z, dl = Math.hypot(dx, dz) || 1;
    const dist = (o.dist || 11) * (world.rig.portrait ? 1.3 : 1);
    const side = o.side ?? 0.18;
    const sx = (-dz / dl) * side, sz = (dx / dl) * side;
    // yüksekten: önündeki tezgâh/karakterler kadrajı kapatmasın
    return { pos: V(base.x + (dx / dl + sx) * dist, o.height || 7.2, base.z + (dz / dl + sz) * dist), look: V(base.x, o.lookY || 1.8, base.z), a };
  }
  function charView(p, o = {}) {
    const cam = world.camera.position;
    let dx = cam.x - p.x, dz = cam.z - p.z;
    // meydanın dışındaysa kamerayı meydan tarafına al (evlerin içine girmesin)
    const pr = Math.hypot(p.x, p.z);
    if (world.village.layout && pr > world.village.layout.Rp * 0.8) { dx = -p.x; dz = -p.z; }
    if (o.dir) { dx = o.dir.x; dz = o.dir.z; }
    const l = Math.hypot(dx, dz) || 1;
    const dist = (o.dist || 6.5) * (world.rig.portrait ? 1.3 : 1);
    return { pos: V(p.x + (dx / l) * dist, o.height || 3.0, p.z + (dz / l) * dist), look: V(p.x, o.lookY || 1.1, p.z) };
  }
  const fov = () => (world.rig.portrait ? 54 : 42);
  // geniş sahneler (kalabalık + yapı): dikey ekranda yatay açı çok dar kalmasın
  const wfov = () => (world.rig.portrait ? 66 : 42);
  const pf = () => (world.rig.portrait ? 1.6 : 1); // dikey ekranda kamera daha uzak
  // Gecikmeli iş: sinematik kesilirse çalışmaz; hata dünyanın döngüsünü bozmaz
  function later(ctx, s, fn) {
    let t = 0;
    world.ticker.push((dt) => { if (!ctx.alive()) return true; t += dt; if (t < s) return false; try { fn(); } catch (e) { console.warn('[VKWorld]', e); } return true; });
  }

  // Kameranın dibine giren seyirciler (dev ön plan başları) sahne boyunca gizlenir; temizlikte geri gelir
  function nearGuard(ctx, list, r = 4.2, keep = null) {
    world.ticker.push(() => {
      if (!ctx.alive()) return true;
      const c = world.camera.position;
      for (const ch of list) {
        if (ch === keep || !ch.visible) continue;
        const dx = ch.pos.x - c.x, dz = ch.pos.z - c.z, dy = ch.pos.y + 1.0 - c.y;
        if (dx * dx + dz * dz + dy * dy * 0.25 < r * r) ch.setVisible(false);
      }
      return false;
    });
  }

  // ---------- sahne parçaları ----------
  // Hayalet yükselir ve gökte puf diye kaybolur (await edilirse bitişi bekler)
  async function ghostRise(ctx, look, x, z, y0 = 0.3, dur = 2.2) {
    if (!A.has('characters/ghost.glb') || !look) return;
    const g = ctx.actor(look, '', x, z, 0, 'ghost');
    g.root.position.y = y0;
    ctx.sfx('poof', { volume: 0.5 });
    await ctx.tween(dur, (k) => { g.root.position.y = y0 + k * 2.3; g.yaw += 0.02; const s = 1.3 * (1 - Math.max(0, k - 0.75) * 3); g.root.scale.setScalar(Math.max(0.05, s)); }, easeOut);
    world.fx.emit('magic', x, y0 + 2.6, z, COLOR_HEX[look.color | 0], 12);
    g.setVisible(false);
  }
  // Mezar taşı düşer (kalıcı: durum da ölümü gösterecek)
  function tombDrop(ctx, id) {
    world.markDead(id, { drop: true });
    const a = world.houseAnchors(id);
    if (a) later(ctx, 0.38, () => world.fx.emit('poof', a.tomb.x, 0.2, a.tomb.z, '#b8a890', 10));
    ctx.sfx('poof', { volume: 0.6 });
  }
  // Yarasa sürüsü: merkez etrafında döner, sonra uzaklaşır
  function bats(ctx, cx, cy, cz, n = 10, dur = 2.4, radius = 3.5, flee = { x: 0, z: -1 }, size = 1) {
    if (!A.has('characters/bat.glb')) return Promise.resolve();
    const tpl = A.get('characters/bat.glb').scene.children[0];
    const list = [];
    for (let i = 0; i < n; i++) {
      const b = tpl.clone(true);
      b.scale.setScalar((1.0 + Math.random() * 0.5) * size);
      ctx.add(b);
      list.push({ b, a: (i / n) * TAU, r: radius * (0.6 + Math.random() * 0.6), h: cy + (Math.random() - 0.5) * 1.6, sp: 2.2 + Math.random() * 1.6, wl: b.getObjectByName('wing-left'), wr: b.getObjectByName('wing-right'), ph: Math.random() * 6 });
    }
    ctx.sfx('whoosh', { volume: 0.6 });
    let t = 0;
    return ctx.tween(dur, (k, dt) => {
      t += dt;
      const out = Math.max(0, k - 0.55) / 0.45;
      for (const o of list) {
        o.a += o.sp * dt;
        const r = o.r * (1 + out * 5);
        const x = cx + Math.sin(o.a) * r + flee.x * out * out * 25, z = cz + Math.cos(o.a) * r + flee.z * out * out * 25;
        const y = o.h + Math.sin(t * 3 + o.ph) * 0.4 + out * 8;
        o.b.position.set(x, y, z);
        o.b.rotation.y = o.a + Math.PI / 2;
        const f = Math.sin(t * 22 + o.ph) * 0.9;
        if (o.wl) o.wl.rotation.z = f;
        if (o.wr) o.wr.rotation.z = -f;
      }
    }, (x) => x);
  }
  // Anonim pelerinli siluet (vampir.glb, kendi klipleriyle)
  function figure(ctx, x, z, yaw) {
    if (!A.has('characters/vampire.glb')) return null;
    const g = A.get('characters/vampire.glb');
    const m = g.scene.clone(true);
    m.scale.multiplyScalar(1.05);
    m.position.set(x, 0, z);
    m.rotation.y = yaw;
    ctx.add(m);
    const mixer = new THREE.AnimationMixer(m);
    let cur = null;
    const play = (name) => {
      const clip = THREE.AnimationClip.findByName(g.animations, name);
      if (!clip) return;
      const a = mixer.clipAction(clip);
      if (cur && cur !== a) cur.fadeOut(0.15);
      a.reset().fadeIn(0.15).play();
      cur = a;
    };
    play('idle');
    world.ticker.push((dt) => { if (!m.parent) { mixer.stopAllAction(); return true; } mixer.update(dt); return false; });
    // kırmızı gözler
    const eye = makeGlow(0.5, '#ff2244');
    eye.position.set(0, 1.85, 0.25);
    m.add(eye);
    return { root: m, play };
  }
  function makeGlow(size, color) {
    const tex = glowTexture();
    const mat = new THREE.SpriteMaterial({ map: tex, color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
    const s = new THREE.Sprite(mat);
    s.scale.setScalar(size);
    s.userData.cleanup = () => mat.dispose();
    return s;
  }
  let glowTex = null;
  function glowTexture() {
    if (glowTex) return glowTex;
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,0.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    glowTex = new THREE.CanvasTexture(c);
    glowTex.colorSpace = THREE.SRGBColorSpace;
    return glowTex;
  }
  // Meşale: sap + alev (karakterin eline verilir)
  function torch(ctx) {
    const g = new THREE.Group();
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.9, 6), new THREE.MeshLambertMaterial({ color: '#6b4426' }));
    stick.position.y = 0.2;
    g.add(stick);
    const head = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.07, 0.16, 6), new THREE.MeshLambertMaterial({ color: '#3a2a20' }));
    head.position.y = 0.66;
    g.add(head);
    const f = makeFlame(0.38, 0.62, Math.random() * 9);
    f.position.y = 0.7;
    g.add(f);
    const gl = makeGlow(1.3, '#ffb347');
    gl.position.y = 0.95;
    g.add(gl);
    world.ticker.push(() => { if (!g.parent && g.userData.used) return true; f.userData.tick(world.time); return false; });
    g.userData.holdScale = 1 / 1.12 / 2.5 * 1.0;
    g.userData.used = true;
    g.userData.cleanup = () => { stick.geometry.dispose(); stick.material.dispose(); head.geometry.dispose(); head.material.dispose(); f.userData.cleanup(); gl.userData.cleanup(); };
    return g;
  }
  // El için bir prop klonu (yay, iksir, fener)
  function handProp(bundle, name, scaleM = 1) {
    const tpl = A.prop(bundle, name);
    if (!tpl) return null;
    const o = tpl.clone();
    o.userData.holdScale = (1 / (1.12 * 2.5)) * scaleM; // kol uzayı: 2.5 * 1.12 ölçekli
    return o;
  }
  // Kalabalık: görünen, yaşayan karakterler (en çok n), hedef hariç
  function crowd(except = [], n = 10) {
    const out = [];
    for (const [id, ch] of world.chars) {
      if (!ch.visible || except.includes(id) || ch.isGhost) continue;
      out.push(ch);
      if (out.length >= n) break;
    }
    return out;
  }
  function faceAll(list, p) { for (const ch of list) { ch.faceYaw = Math.atan2(p.x - ch.pos.x, p.z - ch.pos.z); ch.gaze(p, 6, world.time); } }
  function lookAll(list, p, s = 4) { for (const ch of list) ch.gaze(p, s, world.time); }

  // ================= kamu sahneleri =================
  director.register('start', async (ctx) => {
    const r = R();
    const cr = crowd([], 20);
    ctx.sfx('whoosh');
    world.fx.emit('magic', 0, 1.2, 0, '#ffd27a', 24);
    const p0 = V(0, r * 1.1, r * 1.3), l0 = V(0, 0.4, 0);
    const p1 = V(r * 0.3, 4.8, r * 0.8 + 2), l1 = V(0, 1.0, 0);
    later(ctx, 0.9, () => lookAll(cr, world.camera.position, 4));
    await ctx.move(p0, l0, p1, l1, 3.0, { fov: fov() + 4 });
    for (const ch of cr) if (Math.random() < 0.6) ch.playOnce('emote-yes', { timeScale: 1.2 });
    world.fx.emit('magic', 0, 1.6, 0, '#b197fc', 20);
    await ctx.wait(1.6);
  });

  director.register('night', async (ctx) => {
    const r = R();
    const cr = crowd([], 20);
    for (const ch of cr) if (Math.random() < 0.7) ch.playOnce(Math.random() < 0.5 ? 'interact-left' : 'interact-right', { timeScale: 0.6 });
    ctx.tod(21.0);
    ctx.sfx('whoosh', { volume: 0.5 });
    await ctx.move(V(0, 3.2, r * 0.75), V(0, 1.2, 0), V(0, r * 0.55, r * 1.15), V(0, r * 0.9, -r * 2.5), 3.6, { fov: fov() + 6 });
    await ctx.wait(0.6);
  });

  // ölüm: kurban başına bite | bats | vanish | poison
  director.register('death', async (ctx, msg) => {
    const ts = (msg.targets || []).slice(0, 2);
    ctx.tod(5.7);
    for (const t of ts) {
      const scene = t.cause === 'zehir' ? 'poison' : (['bite', 'bats', 'vanish'].includes(t.scene) ? t.scene : 'bite');
      await deathScene(ctx, t.id, scene, ts.length > 1 ? 0.8 : 1);
    }
  });
  async function deathScene(ctx, id, scene, speed) {
    const hv = houseView(id, { dist: 11, height: 7.4, side: 0.2, lookY: 2.2 });
    if (!hv) return;
    const a = hv.a;
    const p = world.playerById(id);
    const look = p ? p.look : null;
    const near = V(hv.pos.x * 0.88 + a.door.x * 0.12, hv.pos.y - 1.2, hv.pos.z * 0.88 + a.door.z * 0.12);
    ctx.cut(hv.pos, hv.look, { fov: fov() });
    ctx.move(hv.pos, hv.look, near, hv.look, 3.4 * speed, { fov: fov() });
    if (scene === 'bite') {
      await ctx.wait(0.4 * speed);
      world.village.openDoor(id, 1.2);
      ctx.sfx('door');
      const f = figure(ctx, a.inside.x, a.inside.z, Math.atan2(a.approach.x - a.inside.x, a.approach.z - a.inside.z));
      if (f) {
        f.play('sprint');
        await ctx.tween(0.9 * speed, (k) => { f.root.position.x = a.inside.x + (a.approach.x - a.inside.x) * 1.6 * k; f.root.position.z = a.inside.z + (a.approach.z - a.inside.z) * 1.6 * k; }, (x) => x);
        world.fx.emit('smoke', f.root.position.x, 0.8, f.root.position.z, '#2a2238', 16);
        f.root.visible = false;
        ctx.sfx('bite');
        bats(ctx, f.root.position.x, 1.6, f.root.position.z, 8, 1.6, 1.2, { x: a.approach.x - a.door.x, z: a.approach.z - a.door.z });
      }
      await ctx.wait(0.6 * speed);
    } else if (scene === 'bats') {
      ctx.sfx('bite');
      world.flash(0.35, '#d7263d');
      await bats(ctx, (a.door.x + a.backWin.x) / 2, 3.2, (a.door.z + a.backWin.z) / 2, 14, 2.2 * speed, 3.6, { x: a.approach.x - a.door.x, z: a.approach.z - a.door.z });
    } else if (scene === 'vanish') {
      await ctx.wait(0.3);
      world.village.openDoor(id, 1.6);
      for (let i = 0; i < 4; i++) { world.fx.emit('mist', a.door.x, 0.4 + i * 0.3, a.door.z, '#9b7bff', 10); await ctx.wait(0.25 * speed); }
      ctx.sfx('whoosh');
      world.flash(0.3, '#7048e8');
      await ctx.wait(0.4 * speed);
    } else if (scene === 'poison') {
      ctx.sfx('potion');
      for (let i = 0; i < 6; i++) {
        world.fx.emit('bubble', a.frontWin.x, 1.3, a.frontWin.z, '#94d82d', 6);
        world.fx.emit('smoke', a.door.x * 0.6 + a.backWin.x * 0.4, 4.6, a.door.z * 0.6 + a.backWin.z * 0.4, '#6f8a3a', 3);
        await ctx.wait(0.22 * speed);
      }
      world.flash(0.35, '#5fbf2a');
    }
    const gx = a.door.x * 0.4 + a.approach.x * 0.6, gz = a.door.z * 0.4 + a.approach.z * 0.6;
    const gr = ghostRise(ctx, look, gx, gz, 0.2, 2.2 * speed);
    await ctx.wait(0.7 * speed);
    tombDrop(ctx, id);
    await gr;
    await ctx.wait(0.2);
  }

  director.register('safe', async (ctx) => {
    const r = R();
    ctx.tod(5.4, true);
    later(ctx, 0.05, () => ctx.tod(7.6));
    const hs = [...world.village.houses.keys()].slice(0, 6);
    hs.forEach((id, i) => later(ctx, 0.7 + i * 0.26, () => world.village.openDoor(id, 1.4)));
    await ctx.move(V(-r * 0.9, r * 0.45, r * 0.95), V(0, 2, 0), V(r * 0.55, r * 0.55, r * 1.0), V(r * 1.6, 4, -r * 0.6), 4.6, { fov: fov() + 4 });
    await ctx.wait(0.3);
  });

  director.register('nohang', async (ctx) => {
    const r = R();
    const cr = crowd([], 20);
    lookAll(cr, V(0, 1, 0), 4);
    cr.forEach((ch, i) => later(ctx, i * 0.09, () => ch.playOnce('emote-no', { timeScale: 0.9 })));
    await ctx.move(V(0, 4, r * 0.55), V(0, 1, 0), V(0, r * 0.8, r * 1.15), V(0, 0.5, 0), 3.8, { fov: fov() + 2 });
  });

  director.register('sleep', async (ctx) => {
    const r = R();
    const cr = crowd([], 20).map((c) => ctx.claim(c.id)).filter(Boolean);
    for (const ch of cr) ch.setBase(Math.random() < 0.5 ? 'sit' : 'warm', 0.5);
    ctx.tod(19.6);
    await ctx.move(V(0, 3.4, r * 0.7), V(0, 1, 0), V(0, r * 0.45, r * 1.05), V(0, r * 0.8, -r * 2.5), 4.0, { fov: fov() + 6 });
  });

  director.register('left', async (ctx, msg) => {
    const [id] = ids(msg);
    const ch = id && world.chars.get(id);
    if (ch && ch.visible) {
      ctx.claim(id);
      const v = charView(ch.pos, { dist: 6 });
      ctx.shot(v.pos, v.look, { fov: fov() });
      ch.faceYaw = Math.atan2(world.camera.position.x - ch.pos.x, world.camera.position.z - ch.pos.z);
      await ctx.wait(0.6);
      ch.playOnce('emote-yes', { timeScale: 0.8 });
      await ctx.wait(1.4);
      world.fx.emit('mist', ch.pos.x, 0.4, ch.pos.z, '#c9c2d3', 22);
      ctx.sfx('whoosh');
      world.markDead(id, { quiet: true });
      ch.setVisible(false);
      await ctx.wait(1.4);
    } else if (id) {
      const hv = houseView(id, { dist: 10 });
      if (hv) { ctx.shot(hv.pos, hv.look, { fov: fov() }); await ctx.wait(1); world.fx.emit('mist', hv.a.door.x, 0.6, hv.a.door.z, '#c9c2d3', 20); tombDrop(ctx, id); await ctx.wait(1.6); }
    }
  });

  // ----- asma: darağacı | sürgün | mahzen -----
  director.register('hanged', async (ctx, msg) => {
    const [id] = ids(msg);
    const scene = ['gallows', 'exile', 'cellar'].includes(msg.scene) ? msg.scene : 'gallows';
    const ch = id && world.chars.get(id);
    if (!ch) { await ctx.wait(1.5); return; }
    ctx.claim(id);
    ch.setVisible(true);
    // sahnede en çok 9 seyirci; geri kalanlar (meydanda kalıp kameranın önüne girmesin) sahne boyunca gizli
    const all = crowd([id], 40).map((c) => ctx.claim(c.id)).filter(Boolean);
    const others = all.slice(0, 9);
    for (const c of all.slice(9)) c.setVisible(false);
    if (scene === 'gallows') await gallows(ctx, ch, others, id);
    else if (scene === 'exile') await exile(ctx, ch, others, id);
    else await cellar(ctx, ch, others, id);
  });

  function plazaSpot(angleOff, rf) {
    const l = L();
    const a = l.gateAngle + angleOff;
    const r = l.Rp * rf;
    return { x: Math.sin(a) * r, z: Math.cos(a) * r, a };
  }
  // o.front: kalabalık nesnenin önünde (kameraya sırtı dönük), aksi halde arkasında (yüzü kameraya); o.spread: yay açısı
  function arrangeCrowd(list, center, radius, facing, o = {}) {
    const n = list.length;
    const spread = o.spread || 2.2;
    list.forEach((c, i) => {
      const a = facing + (o.front ? 0 : Math.PI) + ((i - (n - 1) / 2) / Math.max(1, n)) * spread;
      c.pos.set(center.x + Math.sin(a) * radius + (Math.random() - 0.5) * 0.4, 0, center.z + Math.cos(a) * radius + (Math.random() - 0.5) * 0.4);
      c.yaw = Math.atan2(center.x - c.pos.x, center.z - c.pos.z); c.faceYaw = c.yaw;
      c.gaze(center, 8, world.time);
    });
  }

  async function gallows(ctx, ch, others, id) {
    const g = plazaSpot(0.25, 0.82);
    const rot = g.a + Math.PI; // ön yüz meydana
    // darağacı: platform + çerçeve + ip + merdiven
    ctx.prop('village', 'platform-wood', g.x, 0, g.z, rot, 1);
    ctx.prop('village', 'frame-wood', g.x, 1.18, g.z, rot, 1);
    const front = { x: Math.sin(rot), z: Math.cos(rot) };
    const side = { x: Math.cos(rot), z: -Math.sin(rot) };
    ctx.prop('village', 'ladder', g.x + front.x * 1.5 + side.x * 0.6, 0, g.z + front.z * 1.5 + side.z * 0.6, rot, 0.8);
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.0, 6), new THREE.MeshLambertMaterial({ color: '#c8a46a' }));
    rope.position.set(g.x, 1.18 + 2.35 - 0.5, g.z);
    const noose = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.035, 6, 12), rope.material);
    noose.position.set(g.x, 1.18 + 1.75, g.z);
    noose.userData.cleanup = () => { rope.geometry.dispose(); noose.geometry.dispose(); rope.material.dispose(); };
    ctx.add(rope); ctx.add(noose);
    // kalabalık önde yay şeklinde, darağacına bakar (kameraya sırtı dönük; hedefi kapatmaz)
    const portrait = world.rig.portrait;
    // kalabalık önde ama kameranın karşı tarafına kaymış yay (ikincil; darağacını ve hedefi kapatmaz)
    arrangeCrowd(others, { x: g.x, z: g.z }, portrait ? 3.6 : 4.4, rot - 0.6, { front: true, spread: portrait ? 1.5 : 1.9 });
    // hedef yandan gelir, platformun önünden yukarı çıkar
    const stand = { x: g.x + front.x * 1.9 + side.x * 2.6, z: g.z + front.z * 1.9 + side.z * 2.6 };
    ch.pos.set(stand.x, 0, stand.z);
    ch.yaw = Math.atan2(-side.x, -side.z); ch.faceYaw = ch.yaw;
    // önden, hafif yandan ve yukarıdan: kalabalığın başları altta, darağacı ve hedef ortada
    // yüksekten: seyirciler yukarıdan küçük görünür (başlar kadrajı kapatmaz), ateş kameranın altında kalır
    // kamera önden ~45° yandan: ateş (önde, meydan ortasında) kadrajın dışında kalır
    const fd = portrait ? 8.0 : 6.4, sd = portrait ? 8.0 : 8.0;
    const cam0 = V(g.x + front.x * fd + side.x * sd, portrait ? 6.2 : 5.0, g.z + front.z * fd + side.z * sd);
    const cam1 = V(g.x + front.x * fd * 0.8 + side.x * sd * 0.8, portrait ? 5.2 : 4.2, g.z + front.z * fd * 0.8 + side.z * sd * 0.8);
    const lk = (y) => V(g.x + front.x * 0.3 - side.x * 0.5, y, g.z + front.z * 0.3 - side.z * 0.5);
    ctx.move(cam0, lk(portrait ? 1.6 : 1.7), cam1, lk(portrait ? 1.9 : 2.0), 4.2, { fov: wfov() });
    nearGuard(ctx, others, portrait ? 5.0 : 4.2);
    ch.run([{ walk: [{ x: g.x + front.x * 1.6, z: g.z + front.z * 1.6 }], mode: 'walk' }]);
    await ctx.wait(1.4);
    await ctx.tween(0.5, (k) => { ch.pos.y = k * 1.2; ch.pos.x = g.x + front.x * 1.6 * (1 - k); ch.pos.z = g.z + front.z * 1.6 * (1 - k); });
    ch.run([]); ch.faceYaw = rot; ch.yaw = rot;
    ch.setBase('idle', 0.2);
    await ctx.wait(0.5);
    ch.playOnce('emote-no', { timeScale: 0.9 });
    ctx.sfx('hang', { volume: 0.7 });
    await ctx.wait(1.2);
    world.flash(0.45, '#f4e4c1');
    world.fx.emit('poof', ch.pos.x, 1.4, ch.pos.z, null, 26);
    ctx.sfx('poof');
    ch.setVisible(false);
    for (const c of others) if (Math.random() < 0.6) c.playOnce(Math.random() < 0.5 ? 'emote-no' : 'interact-right');
    const p = world.playerById(id);
    const gr = ghostRise(ctx, p && p.look, g.x, g.z, 1.4, 1.8);
    world.markDead(id, { quiet: true, drop: true });
    await gr;
  }

  async function exile(ctx, ch, others, id) {
    const l = L();
    const ga = l.gateAngle;
    const at = (r, off = 0) => ({ x: Math.sin(ga + off / r) * r, z: Math.cos(ga + off / r) * r });
    const gate = at(l.R + 2);
    const start = at(l.R - 0.6);
    const fogBoost = world.fogBoost(0.6);
    // kapı (açık başlar, sonra kapanır)
    const gateRot = ga + Math.PI / 2;
    const gp = ctx.prop('graveyard', 'iron-fence-gate', gate.x, 0, gate.z, gateRot, 1);
    ch.pos.set(start.x, 0, start.z);
    ch.yaw = ga; ch.faceYaw = ga;
    // meşaleli kalabalık arkada
    const torchers = others.slice(0, 6);
    torchers.forEach((c, i) => {
      const off = (i - (torchers.length - 1) / 2) * 1.1;
      const p = at(l.R - 3.3 - (i % 2) * 1.0, off * (world.rig.portrait ? 0.75 : 1));
      c.pos.set(p.x, 0, p.z); c.yaw = ga; c.faceYaw = ga;
      if (i % 2 === 0) { c.hold(torch(ctx), 'right', [0, -0.12, 0.02]); c.setBase('hold', 0.2); }
      else c.hold(handProp('village', 'pitchfork-hoe', 0.9), 'right', [0, -0.12, 0.02]);
    });
    for (const c of others.slice(6)) c.setVisible(false);
    // kamera kapıya göre konumlanır (köyün büyüklüğünden bağımsız), ateşe ve evlere girmez
    const portrait = world.rig.portrait;
    // kamera kapının dışında, ağaçsız yolun kenarında: kapı, mahkûm ve arkasındaki meşaleli kalabalık tek karede
    const camP = at(l.R + 7.0, 3.3);
    const camY = portrait ? 3.6 : 3.0;
    const look0 = at(l.R - 1.0, -0.4);
    ctx.cut(V(camP.x, camY, camP.z), V(look0.x, 1.3, look0.z), { fov: wfov() });
    const out = at(l.R + 15, -3.4);
    nearGuard(ctx, torchers, 4.0, ch);
    ch.run([{ walk: [gate, out], mode: 'walk' }]);
    torchers.forEach((c, i) => { const p = at(l.R - 1.2 - (i % 2) * 0.9, (i - 2.5) * 1.1); c.run([{ wait: 0.4 }, { walk: [p], mode: 'walk' }, { pose: i % 2 === 0 ? 'hold' : 'idle' }]); });
    ctx.sfx('whoosh', { volume: 0.4 });
    // sonra kamera dönüp sise yürüyen mahkûmu izler
    const end = at(l.R + 6.0, 3.0);
    await ctx.move(V(camP.x, camY, camP.z), V(look0.x, 1.3, look0.z), V(end.x, camY + 0.9, end.z), V(out.x, 0.9, out.z), 4.8, { fov: wfov() });
    // sise karışıp kaybolur, kapı kapanır
    world.fx.emit('mist', ch.pos.x, 0.6, ch.pos.z, '#d8dde4', 16);
    ch.setVisible(false);
    if (gp) {
      const r0 = gp.rotation.y;
      gp.rotation.y = r0 + 1.3;
      ctx.sfx('door');
      await ctx.tween(0.6, (k) => { gp.rotation.y = r0 + 1.3 * (1 - k); }, easeOut);
    }
    world.markDead(id, { quiet: true, drop: true });
    await ctx.wait(0.8);
    fogBoost();
  }

  async function cellar(ctx, ch, others, id) {
    const c = plazaSpot(1.1, 0.9);
    const rot = c.a + Math.PI;
    // mahzen ağzı: taş çerçeve + açılan kapak
    ctx.prop('village', 'trapdoor', c.x, 0.01, c.z, rot, 0.75);
    const hatch = new THREE.Group();
    hatch.position.set(c.x - Math.cos(rot) * 0.85, 0.12, c.z + Math.sin(rot) * 0.85);
    hatch.rotation.y = rot;
    const plank = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.1, 1.7), new THREE.MeshLambertMaterial({ color: '#7a5232' }));
    plank.position.x = 0.85;
    const band = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.12, 0.18), new THREE.MeshLambertMaterial({ color: '#3a3a44' }));
    band.position.set(0.85, 0.01, 0.45);
    hatch.add(plank, band);
    hatch.userData.cleanup = () => { plank.geometry.dispose(); plank.material.dispose(); band.geometry.dispose(); band.material.dispose(); };
    ctx.add(hatch);
    const hole = new THREE.Mesh(new THREE.CircleGeometry(0.8, 16), new THREE.MeshBasicMaterial({ color: '#0b0910' }));
    hole.rotation.x = -Math.PI / 2;
    hole.position.set(c.x, 0.03, c.z);
    hole.userData.cleanup = () => { hole.geometry.dispose(); hole.material.dispose(); };
    ctx.add(hole);
    // kalabalık kapağın arkasında, yüzleri kameraya dönük; kamera meydan tarafından hafif yandan
    const portrait = world.rig.portrait;
    arrangeCrowd(others, c, portrait ? 3.4 : 4.0, rot, { spread: portrait ? 1.7 : 2.3 });
    const front = { x: Math.sin(rot), z: Math.cos(rot) };
    const side = { x: Math.cos(rot), z: -Math.sin(rot) };
    ch.pos.set(c.x + front.x * 0.5 + side.x * 2.6, 0, c.z + front.z * 0.5 + side.z * 2.6);
    const fd = portrait ? 8.6 : 7.2, sd = portrait ? 2.2 : 3.8;
    ctx.cut(V(c.x + front.x * fd + side.x * sd, portrait ? 5.4 : 4.4, c.z + front.z * fd + side.z * sd), V(c.x + front.x * 0.5, portrait ? 0.9 : 0.7, c.z + front.z * 0.5), { fov: wfov() });
    nearGuard(ctx, others, portrait ? 4.6 : 4.0);
    ctx.sfx('door');
    await ctx.tween(0.8, (k) => { hatch.rotation.z = k * 1.9; }, easeOut);
    ch.run([{ walk: [{ x: c.x, z: c.z }], mode: 'walk' }]);
    await ctx.wait(1.8);
    ch.run([]);
    ch.playOnce('fall', { timeScale: 0.6 });
    await ctx.tween(1.0, (k) => { ch.pos.y = -2.2 * k; }, (x) => x * x);
    ch.setVisible(false);
    ctx.sfx('door');
    await ctx.tween(0.5, (k) => { hatch.rotation.z = 1.9 * (1 - k); }, (x) => x * x);
    world.fx.emit('poof', c.x, 0.3, c.z, '#b8a890', 14);
    const key = ctx.prop('clues', 'key', c.x + side.x * 0.6, 0.35, c.z + side.z * 0.6, rot, 1.4);
    if (key) world.fx.emit('magic', key.position.x, 0.6, key.position.z, '#ffd27a', 10);
    world.markDead(id, { quiet: true, drop: true });
    for (const o of others) if (Math.random() < 0.5) o.playOnce('emote-yes', { timeScale: 0.8 });
    await ctx.wait(1.3);
  }

  // ----- avcı -----
  function bowUp(ctx, ch, targetPos) {
    const bow = handProp('clues', 'bow', 1.1);
    if (bow) { bow.rotation.set(0, 0, 0); ch.hold(bow, 'left', [0, -0.13, 0.05]); }
    ch.setBase('holdboth', 0.25);
    if (targetPos) { ch.faceYaw = Math.atan2(targetPos.x - ch.pos.x, targetPos.z - ch.pos.z); ch.yaw = ch.faceYaw; }
  }
  async function arrowFly(ctx, from, to, dur = 0.7) {
    const tpl = A.prop('clues', 'arrow');
    if (!tpl) return;
    const ar = tpl.clone();
    ar.scale.setScalar(0.9);
    ctx.add(ar);
    const d = V(to.x - from.x, to.y - from.y, to.z - from.z);
    ctx.sfx('shot');
    await ctx.tween(dur, (k) => {
      ar.position.set(from.x + d.x * k, from.y + d.y * k + Math.sin(k * Math.PI) * 1.2, from.z + d.z * k);
      ar.rotation.y = Math.atan2(d.x, d.z);
      ar.rotation.x = -Math.cos(k * Math.PI) * 0.5;
    }, (x) => x);
  }

  director.register('hunter', async (ctx, msg) => {
    const [id] = ids(msg);
    const ch = id && world.chars.get(id);
    if (ch) {
      ctx.claim(id);
      ch.setVisible(true);
      bowUp(ctx, ch, V(0, 0, 0));
      const v = charView(ch.pos, { dist: 4.8, height: 1.4, lookY: 1.4 });
      ctx.move(V(v.pos.x, 0.9, v.pos.z), v.look, V(v.pos.x * 1.05, 2.0, v.pos.z * 1.05), v.look, 3.4, { fov: fov() });
      world.flash(0.3, '#ff8364');
      ctx.sfx('hunter', { volume: 0.6 });
      await ctx.wait(3.4);
    } else await ctx.wait(1.5);
  });

  director.register('shot', async (ctx, msg) => {
    const [id] = ids(msg);
    const hunter = msg.actorId && world.chars.get(msg.actorId);
    const tgt = id && world.chars.get(id);
    if (!tgt) { await ctx.wait(1.5); return; }
    ctx.claim(id);
    tgt.setVisible(true);
    if (hunter) { ctx.claim(msg.actorId); hunter.setVisible(true); bowUp(ctx, hunter, tgt.pos); }
    tgt.faceYaw = hunter ? Math.atan2(hunter.pos.x - tgt.pos.x, hunter.pos.z - tgt.pos.z) : tgt.yaw;
    const hp = hunter ? hunter.pos : V(0, 0, 0);
    const dir = V(hp.x - tgt.pos.x, 0, hp.z - tgt.pos.z).normalize();
    const side = V(dir.z, 0, -dir.x);
    // yandan, ikisini birlikte gören yüksek çekim
    const mid = V((hp.x + tgt.pos.x) / 2, 1.0, (hp.z + tgt.pos.z) / 2);
    const span = Math.max(4, Math.hypot(hp.x - tgt.pos.x, hp.z - tgt.pos.z));
    const toC = V(-mid.x, 0, -mid.z).normalize();
    const sd = side.dot(toC) >= 0 ? side : side.clone().multiplyScalar(-1);
    ctx.cut(V(mid.x + sd.x * (span * 0.9 + 4), 4.6 + span * 0.2, mid.z + sd.z * (span * 0.9 + 4)), mid, { fov: fov() });
    await ctx.wait(1.0);
    if (hunter) hunter.playOnce('attack-melee-right', { timeScale: 1.4 });
    const fly = arrowFly(ctx, V(hp.x, 1.5, hp.z), V(tgt.pos.x, 1.1, tgt.pos.z), 0.75);
    const tv = charView(tgt.pos, { dir: sd, dist: 6, height: 3.6 });
    ctx.shot(tv.pos, tv.look, { fov: fov(), k: 2.5 });
    await fly;
    world.flash(0.4, '#ff8364');
    world.fx.emit('poof', tgt.pos.x, 0.9, tgt.pos.z, null, 22);
    ctx.sfx('poof');
    tgt.setVisible(false);
    const p = world.playerById(id);
    const gr = ghostRise(ctx, p && p.look, tgt.pos.x, tgt.pos.z, 0.3, 1.8);
    world.markDead(id, { quiet: true, drop: true });
    await gr;
    await ctx.wait(0.4);
  });

  director.register('nohunt', async (ctx) => {
    const st = world.getState();
    const hid = st && st.room.hunterId;
    const hunter = hid && world.chars.get(hid);
    if (hunter) {
      ctx.claim(hid);
      hunter.setVisible(true);
      const out = V(hunter.pos.x * 3 + 8, 0, hunter.pos.z * 3 - 30);
      bowUp(ctx, hunter, out);
      const v = charView(hunter.pos, { dist: 5.5 });
      ctx.shot(v.pos, v.look, { fov: fov() });
      await ctx.wait(0.9);
      await arrowFly(ctx, V(hunter.pos.x, 1.5, hunter.pos.z), V(out.x, 6, out.z), 1.1);
      hunter.dropProps();
      hunter.setBase('idle', 0.2);
      hunter.playOnce('emote-no');
      await ctx.wait(1.6);
    } else await ctx.wait(1.5);
  });

  // ----- kazanan -----
  director.register('win', async (ctx, msg) => {
    const winners = ids(msg);
    const r = R();
    const w = msg.winner;
    if (w === 'vampir') { ctx.tod(23.2, true); world.moonOverride('#ff4a4a'); }
    else if (w === 'soytari') ctx.tod(18.4);
    else ctx.tod(10.2);
    const list = winners.map((id) => world.chars.get(id)).filter((c) => c && c.visible).slice(0, 10);
    for (const c of list) ctx.claim(c.id);
    const losers = crowd(winners, 12).map((c) => ctx.claim(c.id)).filter(Boolean);
    if (w === 'soytari' && list[0]) {
      const j = list[0];
      j.pos.set(0, 0, 3.0); j.yaw = 0; j.faceYaw = 0;
      j.setBase('cheer', 0.2);
      arrangeCrowd(losers, { x: 0, z: 3.0 }, 4.5, 0);
      for (const o of losers) o.setBase('sad', 0.3);
      const spot = makeGlow(4, '#f2c12e');
      spot.position.set(0, 1.2, 3.0);
      ctx.add(spot);
    } else {
      for (const c of list) c.setBase(w === 'vampir' ? 'loom' : 'cheer', 0.3);
      for (const o of losers) o.setBase('sad', 0.3);
    }
    if (w === 'vampir') bats(ctx, 0, 5, 0, 16, 5.5, r * 0.5, { x: 0, z: -1 });
    let t0 = 0;
    const conf = w !== 'vampir';
    await ctx.tween(5.6, (k, dt) => {
      const a = -0.9 + k * 1.6;
      const rr = r * 0.85 * pf();
      world.rig.setOverride({ pos: V(Math.sin(a) * rr, r * 0.5 * pf(), Math.cos(a) * rr), look: V(0, 1, 0), fov: fov() + 2, k: 60 }, true);
      t0 += dt;
      if (conf && t0 > 0.55) {
        t0 = 0;
        const c = list[Math.floor(Math.random() * Math.max(1, list.length))];
        if (c) { world.fx.emit('confetti', c.pos.x, 2.2, c.pos.z, null, 14); if (Math.random() < 0.5) c.playOnce('jump'); }
      }
    }, (x) => x);
  });

  // ================= özel sahneler =================
  director.register('promote', async (ctx) => {
    const me = world.meId();
    const ch = me && world.chars.get(me);
    if (ch && ch.visible) {
      ctx.claim(me);
      const v = charView(ch.pos, { dist: 6, height: 4.2 });
      ctx.shot(v.pos, v.look, { fov: fov() });
      ch.setBase('loom', 0.3);
      const eye = makeGlow(0.6, '#ff2244');
      eye.position.set(0, 0.36, 0.12);
      if (ch.headBone) { ch.headBone.add(eye); ctx.add(eye, ch.headBone); }
      world.flash(0.5, '#d7263d');
      await bats(ctx, ch.pos.x, 1.8, ch.pos.z, 12, 3.4, 1.8);
    } else if (me) {
      const hv = houseView(me, { dist: 10 });
      if (hv) {
        ctx.shot(hv.pos, hv.look, { fov: fov() });
        world.flash(0.5, '#d7263d');
        await bats(ctx, hv.a.door.x, 3, hv.a.door.z, 12, 3.4, 3);
      }
    }
    await ctx.wait(0.4);
  });

  // Kahin araması: hedefin evinde, sahibi uyurken; ipucuyla biter
  director.register('seer', async (ctx, msg) => {
    const t = (msg.targets || [])[0];
    if (!t) return;
    const room = world.openRoom(t.id);
    if (!room) { await ctx.wait(1.5); return; }
    const me = world.playerById(world.meId());
    const S = room.shot('search', world.rig.portrait);
    ctx.cut(S.pos, S.look, { fov: S.fov });
    const kahin = me ? room.addActor('kahin', me.look, me.name, room.L.doorOut, -Math.PI / 2) : null;
    const pW = (p) => room.W(p);
    if (kahin) {
      kahin.run([{ walk: [pW(room.L.doorIn), pW({ x: -1.9, z: 1.25 })], mode: 'sneak' }, { faceTo: pW(room.L.bookcase) }, { once: 'pick-up', opts: { timeScale: 0.8 } },
        { walk: [pW({ x: -0.3, z: -1.7 })], mode: 'sneak' }, { faceTo: pW({ x: -0.3, z: -2.8 }) }, { once: 'interact-right', opts: { timeScale: 0.8 } },
        { walk: [pW({ x: 0.9, z: 0.2 })], mode: 'sneak' }, { faceTo: pW(room.L.rug) }, { pose: 'peek' }]);
    }
    ctx.sfx('door', { volume: 0.5 });
    await ctx.wait(4.6);
    const bad = t.cause === 'vampir';
    const rug = room.rug;
    if (bad) {
      // halının altından: tabut, kırmızı şişeler, uçan yarasa
      const rx = rug.position.x;
      ctx.tween(0.7, (k) => { rug.position.x = rx + 1.6 * k; rug.rotation.z = -0.25 * Math.sin(k * Math.PI); }, easeOut);
      await ctx.wait(0.3);
      const cof = room.addTemp(A.prop('clues', 'coffin').clone());
      cof.position.set(room.L.rug.x, -0.4, room.L.rug.z); cof.scale.setScalar(0.62); cof.rotation.y = 0.4;
      ctx.tween(0.6, (k) => { cof.position.y = -0.4 + 0.42 * k; }, easeOut);
      for (let i = 0; i < 3; i++) {
        const pot = room.addTemp(A.prop('clues', 'potion').clone());
        pot.position.set(room.L.rug.x + 0.9 + i * 0.32, 0, room.L.rug.z - 0.6 + i * 0.2);
        const gl = makeGlow(0.9, '#ff2244'); gl.position.y = 0.4; pot.add(gl);
      }
      const c = room.W({ x: room.L.rug.x, z: room.L.rug.z });
      world.fx.emit('magic', c.x, 0.8, c.z, '#ff2244', 30);
      world.flash(0.55, '#d7263d');
      ctx.sfx('seer');
      bats(ctx, c.x, 1.2, c.z, 3, 2.0, 0.8, { x: 0, z: 1 }, 0.45);
      if (kahin) { kahin.setBase('idle', 0.2); kahin.playOnce('emote-no'); }
    } else {
      const items = ['bread', 'cheese', 'apple', 'mug'];
      const c = room.W({ x: room.L.rug.x, z: room.L.rug.z });
      items.forEach((n, i) => {
        const tpl = A.prop('clues', n); if (!tpl) return;
        const o = room.addTemp(tpl.clone());
        o.position.set(room.L.rug.x - 0.5 + i * 0.35, 0.02, room.L.rug.z + 0.2 - (i % 2) * 0.3);
        o.scale.setScalar(1.3);
      });
      world.fx.emit('magic', c.x, 0.6, c.z, '#ffe08a', 24);
      ctx.sfx('seer');
      if (kahin) { kahin.setBase('idle', 0.2); kahin.playOnce('emote-yes'); }
    }
    const S2 = room.shot('inside', world.rig.portrait);
    const near = V(S2.look.x + (S2.pos.x - S2.look.x) * 0.78, S2.look.y + (S2.pos.y - S2.look.y) * 0.8, S2.look.z + (S2.pos.z - S2.look.z) * 0.78);
    ctx.shot(near, room.W({ x: room.L.rug.x, y: 0.4, z: room.L.rug.z }), { fov: S2.fov, k: 2.5 });
    await ctx.wait(2.2);
  });

  // Gözcü raporu: pencereden, ziyaretçiler sırayla içeri girer ve yatağın yanında durur. Başka hiçbir şey.
  director.register('watch', async (ctx, msg) => {
    const t = (msg.targets || [])[0];
    if (!t) return;
    const room = world.openRoom(t.id);
    if (!room) { await ctx.wait(1.5); return; }
    const S = room.shot('window', world.rig.portrait);
    ctx.cut(S.pos, S.look, { fov: S.fov });
    const me = world.playerById(world.meId());
    if (me) { const g = room.addActor('gozcu', me.look, '', room.L.winOut, Math.PI / 2); g.setBase('peek', 0); }
    const vis = (msg.visitors || []).map((id) => world.playerById(id)).filter(Boolean);
    const spots = [{ x: -1.0, z: -1.25 }, { x: -1.05, z: -0.2 }, { x: -2.2, z: 0.85 }, { x: -1.4, z: 0.75 }, { x: -0.5, z: -0.7 }, { x: -2.9, z: 0.6 }];
    if (!vis.length) { await ctx.wait(3.6); return; }
    const gap = clamp(4.0 / vis.length, 0.8, 1.4);
    for (let i = 0; i < vis.length; i++) {
      const v = vis[i];
      const a = room.addActor('v' + i, v.look, v.name, room.L.doorStep, -Math.PI / 2);
      const sp = spots[i % spots.length];
      a.run([{ walk: [room.W(room.L.doorIn), room.W(sp)], mode: 'walk' }, { faceTo: room.W({ x: room.L.sleeper.x, z: -1.3 }) }, { pose: 'idle' }]);
      ctx.sfx('door', { volume: 0.35 });
      await ctx.wait(gap);
    }
    await ctx.wait(2.8);
  });
}
