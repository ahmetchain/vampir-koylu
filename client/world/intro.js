// Açılış hikâyesi ('intro' sinematiği): oyunu ilk kez açana menüdeki süs köyüyle oynatılan ~30 sn'lik masal.
// Beş sahne + başlık: gündüz köy · akşam mezarlık · şafakta bir kapı önü · gece ateş başı · ışıkların sönüşü.
// Metinler ve süreler arayüzde (public/ui/intro-story.js); sahne başlarında hooks.beat(i), kesmeden hemen önce
// hooks.dip() çağrılır (arayüz perdesi kararır). Tüm aktörler/ışıklar/ev durumları temizlikte geri alınır.
// Korkutucu değil, masalsı: kurban yalnız yerde yatan koyu bir siluet; boynunda iki küçük kırmızı parıltı.
import * as THREE from 'three';
import * as A from './assets.js';
import { TAU, clamp } from './constants.js';
import { HATS } from './constants.js';
import { toWorld } from './layout.js';

export const INTRO_MAX_S = 60;
const DEFAULT_DURS = [5.0, 5.6, 5.6, 4.4, 7.4, 2.8];
const V = (x, y, z) => new THREE.Vector3(x, y, z);
// yavaş çekimler için yumuşak (sinüs) geçiş: başta ve sonda ani ivme yok
const sine = (t) => 0.5 - 0.5 * Math.cos(Math.PI * clamp(t, 0, 1));
const lerp = (a, b, t) => a + (b - a) * t;

// Köylü görünümleri (renk 0..19, ten 0..11); şapka dizini mevcut şapka sayısına göre kırpılır
const LOOKS = [
  { color: 4, skin: 1, hat: 3 }, { color: 1, skin: 6, hat: 0 }, { color: 2, skin: 3, hat: 5 },
  { color: 5, skin: 8, hat: 1 }, { color: 8, skin: 2, hat: 7 }, { color: 9, skin: 10, hat: 2 },
  { color: 10, skin: 4, hat: 6 }, { color: 3, skin: 0, hat: 4 }, { color: 16, skin: 7, hat: 9 },
].map((l) => ({ ...l, hat: l.hat % Math.max(1, HATS.length), top: 0, bottom: 0, acc: 0 }));

let glowTex = null;
function glowTexture() {
  if (glowTex) return glowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.3, 'rgba(255,255,255,0.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  glowTex = new THREE.CanvasTexture(c);
  glowTex.colorSpace = THREE.SRGBColorSpace;
  return glowTex;
}
function makeGlow(size, color) {
  const mat = new THREE.SpriteMaterial({ map: glowTexture(), color, transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false, opacity: 0 });
  const s = new THREE.Sprite(mat);
  s.scale.setScalar(size);
  s.renderOrder = 5;
  s.userData.cleanup = () => mat.dispose();
  return s;
}

export function registerIntro(director, world) {
  director.register('intro', async (ctx, msg) => {
    const vill = world.village;
    const L = vill && vill.layout;
    if (!L) return;
    const hooks = msg.hooks || {};
    const D = DEFAULT_DURS.map((d, i) => (msg.durs && msg.durs[i] > 0 ? msg.durs[i] : d));
    const reduced = world.reducedMotion();
    const portrait = world.rig.portrait;
    const R = L.R, Rp = L.Rp;
    const pf = portrait ? 1.45 : 1;
    const call = (n, a) => { try { if (typeof hooks[n] === 'function') hooks[n](a); } catch (e) { /* arayüz hatası sahneyi bozmasın */ } };

    // ---- temizlik: evler, kapılar, saat ve kamera menü durumuna ----
    const houseList = [...vill.houses.values()];
    ctx.onCleanup(() => {
      for (const h of houseList) { h.flickT = 0; h.flickOut = false; h.doorTarget = 0; h.doorHold = 0; }
      world.setTodOverride(18.35, true);   // menünün saati; geriye "hızlı sarma" görünmesin
      world.rig.setOverride(null, true);
      world.rig.snapNext = true;
    });

    // ---- yardımcılar ----
    function later(s, fn) {
      let t = 0;
      world.ticker.push((dt) => { if (!ctx.alive()) return true; t += dt; if (t < s) return false; try { fn(); } catch (e) { console.warn('[VKWorld] intro', e); } return true; });
    }
    // Saat: sahne boyunca h0 -> h1 (her kare anında; menü saat yürütücüsü karışmaz)
    let hourTok = 0;
    function hours(h0, h1, dur) {
      const my = ++hourTok;   // yeni sahnenin saati eskisini devralır (iki ara değer çekişmesin)
      ctx.tod(h0, true);
      return ctx.tween(dur, (k) => { if (my === hourTok) ctx.tod(lerp(h0, h1, k), true); }, (x) => x);
    }
    // Kamera yolu; hareketi azalt açıkken sabit plan (yolun sonuna yakın) + süre kadar bekleme
    function path(p0, l0, p1, l1, dur, fov) {
      if (reduced) { ctx.cut(p0.clone().lerp(p1, 0.7), l0.clone().lerp(l1, 0.7), { fov }); return ctx.wait(dur); }
      return ctx.move(p0, l0, p1, l1, dur, { fov, ease: sine });
    }
    async function dip() { call('dip'); await ctx.wait(reduced ? 0.5 : 0.42); }
    const actors = [];
    function actor(i, x, z, yaw) {
      const ch = ctx.actor(LOOKS[i % LOOKS.length], '', x, z, yaw);
      actors.push(ch);
      return ch;
    }
    function clearActors() { for (const a of actors.splice(0)) a.setVisible(false); }
    const faceFire = (x, z) => Math.atan2(-x, -z);
    const polar = (a, r) => ({ x: Math.sin(a) * r, z: Math.cos(a) * r });

    // ================= 1) Gündüz: köy =================
    call('beat', 0);
    const day = hours(10.0, 10.8, D[0] + 0.4);
    void day;
    {
      const slots = (vill.benchSlots || []).filter((s) => !s.small);
      const sit = slots.slice(0, 3);
      sit.forEach((s, i) => {
        const c = actor(i, s.x, s.z, faceFire(s.x, s.z));
        c.setBase(i === 1 ? 'warm' : 'sit', 0);
        later(1.2 + i * 0.9, () => c.playOnce(i % 2 ? 'interact-left' : 'interact-right', { timeScale: 0.7 }));
      });
      // meydanda dolaşanlar: ateşin çevresinde yay boyunca
      for (let i = 0; i < 4; i++) {
        const a0 = 0.3 + i * (TAU / 4) + 0.4, r = Rp * (0.72 + (i % 2) * 0.12), dir = i % 2 ? -1 : 1;
        const p0 = polar(a0, r);
        const c = actor(3 + i, p0.x, p0.z, a0 + (dir * Math.PI) / 2);
        const pts = [];
        for (let k = 1; k <= 6; k++) pts.push(polar(a0 + dir * k * 0.22, r));
        c.run([{ walk: pts, mode: 'stroll' }, { faceTo: { x: 0, z: 0 } }, { once: 'emote-yes', opts: { timeScale: 0.8 } }]);
      }
      // kapısından çıkıp meydana yürüyen biri
      const h0 = L.houses[Math.min(L.houses.length - 1, 2)];
      const a = h0 && world.houseAnchors(h0.id);
      if (a) {
        later(0.5, () => {
          vill.openDoor(h0.id, 1.6);
          const c = actor(7, a.inside.x, a.inside.z, a.rotY);
          c.run([{ walk: [a.approach, { x: a.approach.x * 0.6, z: a.approach.z * 0.6 }], mode: 'walk' }]);
        });
      }
      // vinç çekimi: yüksekten meydana süzülür (arkada kapı boşluğu, orman ve dağlar)
      const p0 = V(R * 0.22, R * 1.45 * (portrait ? 1.15 : 1), R * 1.55 * pf), l0 = V(0, 0, -R * 0.35);
      const p1 = V(R * 0.12, 4.6 + (portrait ? 1.4 : 0), (Rp + 6.5) * (portrait ? 1.15 : 1)), l1 = V(0, 2.2, -R * 0.4);
      await path(p0, l0, p1, l1, D[0], portrait ? 62 : 46);
    }

    // ================= 2) Akşam: mezarlık =================
    await dip();
    clearActors();
    call('beat', 1);
    hours(18.3, 19.4, D[1] + 0.3);
    {
      const G = L.grave;
      const gl = Math.hypot(G.x, G.z) || 1;
      const tv = { x: -G.x / gl, z: -G.z / gl };            // mezarlıktan köye
      const sd = { x: -tv.z, z: tv.x };                      // yan
      // yan yönü kapı boşluğuna doğru seç (evlerin arasından değil, açıklıktan bakılsın)
      const ga = L.gateAngle;
      const gx = Math.sin(ga), gz = Math.cos(ga);
      const s = (sd.x * (gx * R - G.x) + sd.z * (gz * R - G.z)) >= 0 ? 1 : -1;
      const at = (f, side, y) => V(G.x + tv.x * f + sd.x * side * s, y, G.z + tv.z * f + sd.z * side * s);
      const hasGrave = A.has('props/graveyard.glb');
      // köy tarafından, yüksekten mezar taşlarına doğru kayar (ön planda tabela/direk kalmasın)
      const p0 = at(12.5 * pf, -2.5, 8.6), p1 = at(9.0 * pf, 0.8, 5.6);
      const l0 = at(1.2, -0.6, 1.6), l1 = at(-0.8, 0.2, hasGrave ? 2.4 : 3.0);
      // mezarlık kapısının direklerinde iki fener ve mumlar alacakaranlıkta yanar
      if (hasGrave) {
        const rot = G.angle + Math.PI;
        const lamps = [[-1.15, 3.2, 1.95, 0.9], [1.15, 3.2, 1.95, 0.9], [1.8, -2.4, 0.55, 0.55]].map(([lx, lz, y, s]) => {
          const p = toWorld({ x: G.x, z: G.z, rotY: rot }, lx, lz);
          const gw = ctx.add(makeGlow(s, '#ffb347'));
          gw.material.depthTest = true;
          gw.position.set(p.x, y, p.z);
          return gw;
        });
        let lt = 0;
        world.ticker.push((dt) => {
          if (!ctx.alive() || !lamps[0].parent) return true;
          lt += dt;
          const on = clamp((lt - D[1] * 0.25) / 1.2, 0, 1);
          lamps.forEach((g, i) => { g.material.opacity = on * (0.85 + 0.15 * Math.sin(lt * 9 + i * 2)); });
          return false;
        });
        later(D[1] + 0.2, () => lamps.forEach((g) => { g.visible = false; }));
      }
      if (hasGrave) later(D[1] * 0.45, () => ctx.sfx('bell', { volume: 0.45 }));
      await path(p0, l0, p1, l1, D[1], portrait ? 60 : 44);
    }

    // ================= 3) Şafak: kapı önü =================
    let hide3 = null;
    await dip();
    call('beat', 2);
    hours(5.45, 6.25, D[2] + 0.3);
    {
      const n = L.houses.length;
      const hi = Math.floor(n / 2);
      const hv = L.houses[hi];
      const a = world.houseAnchors(hv.id);
      const out = { x: a.approach.x - a.door.x, z: a.approach.z - a.door.z };
      const ol = Math.hypot(out.x, out.z) || 1;
      out.x /= ol; out.z /= ol;
      const sd = { x: -out.z, z: out.x };
      const fall = { x: a.door.x + out.x * 2.1, z: a.door.z + out.z * 2.1 };
      // yerde yatan koyu siluet (kimliği belirsiz; kan yok)
      const body = ctx.actor(LOOKS[8], '', fall.x, fall.z, Math.atan2(out.x, out.z) + 0.4);
      const dark = new THREE.MeshLambertMaterial({ color: '#3b2f4d', emissive: '#120d1c' });
      ctx.onCleanup(() => dark.dispose());
      body.model.traverse((o) => { if (o.isMesh && !o.userData.outline && o.material) o.material = dark; });
      body.setBase('lie', 0);
      // boyunda iki küçük kırmızı parıltı
      const head = body.model.getObjectByName('head');
      const g1 = ctx.add(makeGlow(0.24, '#ff2b3c')), g2 = ctx.add(makeGlow(0.24, '#ff2b3c'));
      const hp = new THREE.Vector3();
      let glintK = 0, glintT = 0;
      world.ticker.push((dt) => {
        if (!ctx.alive() || !g1.parent) return true;
        glintT += dt;
        if (head) head.getWorldPosition(hp); else hp.set(fall.x, 0.3, fall.z);
        // baştan gövdeye doğru biraz: boyun
        const bx = body.pos.x, bz = body.pos.z;
        const nx = lerp(hp.x, bx, 0.2), nz = lerp(hp.z, bz, 0.2), ny = Math.max(0.12, hp.y * 0.75);
        const dx = hp.x - bx, dz = hp.z - bz, dl = Math.hypot(dx, dz) || 1;
        const px = -dz / dl * 0.1, pz = dx / dl * 0.1;
        g1.position.set(nx + px, ny + 0.06, nz + pz);
        g2.position.set(nx - px, ny + 0.06, nz - pz);
        const pulse = 0.75 + 0.25 * Math.sin(glintT * 5);
        g1.material.opacity = g2.material.opacity = glintK * pulse;
        return false;
      });
      later(0.25, () => { vill.openDoor(hv.id, D[2] + 1); ctx.sfx('door', { volume: 0.8 }); });
      later(0.7, () => ctx.sfx('dawn', { volume: 0.5 }));
      // komşular kapılarından çıkıp toplanır (kurbanın iki yanında; kameranın önüne geçmeden)
      // toplananlar kurbanın arkasında ve yanlarında (kamera önden bakar; kimse kurbanı örtmez)
      const spots = [
        { x: fall.x - out.x * 1.1 + sd.x * 1.25, z: fall.z - out.z * 1.1 + sd.z * 1.25 },
        { x: fall.x - out.x * 1.0 - sd.x * 1.35, z: fall.z - out.z * 1.0 - sd.z * 1.35 },
        { x: fall.x + out.x * 0.2 - sd.x * 2.2, z: fall.z + out.z * 0.2 - sd.z * 2.2 },
      ];
      // komşu kapıları açılır; köylüler ev önleri boyunca (kurbanın arkasından, kameranın önünden geçmeden) gelir
      const nbs = [hi + 1, hi - 1].map((j) => L.houses[(j + n) % n]).filter((h) => h && h.id !== hv.id);
      nbs.forEach((h, k) => later(0.45 + k * 0.4, () => { vill.openDoor(h.id, 2.4); ctx.sfx('door', { volume: 0.45 }); }));
      spots.forEach((to, k) => later(0.3 + k * 0.5, () => {
        const sgn = k === 0 ? 1 : -1;
        const from = { x: fall.x - out.x * 1.3 + sd.x * sgn * 5.2, z: fall.z - out.z * 1.3 + sd.z * sgn * 5.2 };
        const c = actor(k + 1, from.x, from.z, Math.atan2(to.x - from.x, to.z - from.z));
        c.run([{ walk: [to], mode: 'brisk' }, { faceTo: fall }, { wait: 0.4 + k * 0.3 }, { once: k === 1 ? 'emote-no' : 'interact-right', opts: { timeScale: 0.75 } }]);
      }));
      later(D[2] * 0.4, () => {
        ctx.sfx('zzHeart', { volume: 0.8 });
        ctx.tween(0.9, (k) => { glintK = k; }).catch(() => {});
      });
      later(D[2] * 0.4 + 1.1, () => ctx.sfx('zzHeart', { volume: 0.55 }));
      const base = { x: (a.door.x + a.frontWin.x) / 2, z: (a.door.z + a.frontWin.z) / 2 };
      const p0 = V(base.x + (out.x * 12 + sd.x * 3.0) * pf, 6.0, base.z + (out.z * 12 + sd.z * 3.0) * pf);
      const p1 = V(fall.x + (out.x * 7.2 + sd.x * 1.0) * pf, 4.3, fall.z + (out.z * 7.2 + sd.z * 1.0) * pf);
      await path(p0, V(base.x, 2.0, base.z), p1, V(fall.x - out.x * 0.6, 0.6, fall.z - out.z * 0.6), D[2], portrait ? 54 : 42);
      hide3 = () => { body.setVisible(false); g1.visible = g2.visible = false; };
    }

    // ================= 4) Gece: ateş başı =================
    await dip();
    clearActors();
    if (hide3) hide3();
    call('beat', 3);
    hours(20.9, 22.0, D[3] + 0.2);
    let camEnd = null, lookEnd = null;
    {
      const ring = [];
      const N = 6;
      for (let i = 0; i < N; i++) {
        const ang = Math.PI * 0.5 + (i - (N - 1) / 2) * 0.46;   // ateşin doğu tarafında, kameraya dönük yay
        const r = 3.3 + (i % 2) * 0.35;
        const p = polar(ang, r);
        const c = actor(i + 2, p.x, p.z, faceFire(p.x, p.z));
        if (i % 3 === 1) c.setBase('warm', 0);
        ring.push(c);
      }
      // birbirlerine şüpheyle dönerler (başlar ve gövdeler sırayla)
      ring.forEach((c, i) => later(0.9 + i * 0.32, () => {
        const o = ring[(i + (i % 2 ? 1 : ring.length - 1)) % ring.length];
        c.faceYaw = Math.atan2(o.pos.x - c.pos.x, o.pos.z - c.pos.z);
        c.gaze(o.pos, 4, world.time);
        if (i === 2) c.playOnce('emote-no', { timeScale: 0.7 });
      }));
      later(0.35, () => { try { if (window.VKAudio && window.VKAudio.owl) window.VKAudio.owl(0.75); } catch (e) { /* ses yok */ } });
      // uzaktan bir yarasa sürüsü geçer (ayın önünden)
      if (A.has('characters/bat.glb')) later(1.6, () => bats(ctx, 11, 2.9));
      // batıdan doğuya, ateşin ve köylülerin üstünden aya doğru alçak çekim
      // kamera meydanın içinde (tezgâh/tente bandının önünde), alçaktan; ay doğuda kadrajın üstünde
      // alçaktan yukarı bakış: köylüler altyazının üstünde, ay ve geçen yarasalar kadrajın üst yarısında
      // ateşin üstünden: alevler yüzleri örtmesin (alevler altta, yüzler ortada, gök üstte)
      const p0 = portrait ? V(-7.3, 4.1, 1.6) : V(-7.0, 3.0, 1.6), p1 = portrait ? V(-6.6, 4.5, 1.2) : V(-6.2, 3.3, 1.2);
      const l0 = V(3, portrait ? 2.7 : 1.6, -0.4), l1 = V(3, portrait ? 3.0 : 1.9, -0.3);
      camEnd = p1; lookEnd = l1;
      await path(p0, l0, p1, l1, D[3], portrait ? 62 : 46);
    }

    // ================= 5) Işıklar söner, ay bulutun ardına girer =================
    call('beat', 4);
    hours(22.0, 23.0, D[4] + D[5] + 0.4);
    {
      // yaşayan evlerin pencereleri teker teker söner (biri titreyerek yanık kalır)
      const ordered = houseList.slice().sort((a, b) => wrapA(a.angle) - wrapA(b.angle));
      const keep = ordered[Math.floor(ordered.length / 2)];
      let k = 0;
      for (const h of ordered) {
        if (h === keep) continue;
        const t = 1.2 + (k++) * ((D[4] - 2.2) / Math.max(1, ordered.length - 1));
        later(t, () => vill.flicker(h.id, 0.7 + Math.random() * 0.4));
      }
      later(D[4] - 0.6, () => { if (keep) { keep.flickT = 1.6; keep.flickDur = 1.6; } });
      // ay bulutun ardına: ay rengi ve gece ışığı kararır
      const m0 = new THREE.Color('#eef2ff'), m1 = new THREE.Color('#343a52'), mc = new THREE.Color();
      later(D[4] * 0.45, () => ctx.tween(2.4, (q) => { mc.copy(m0).lerp(m1, q); world.moonOverride(mc); }).catch(() => {}));
      later(D[4] * 0.6, () => ctx.sfx('whoosh', { volume: 0.35 }));
      // geri çekilip köyün geneline yükselir
      // köyün geneli: ev halkası (sönen pencereler), ateş ve üstte gece göğü
      // kapı boşluğunun (kuzey) üstünden: önde mezarlık, ortada ateş, karşıda ev halkası
      const p1 = V(R * 0.22, R * (portrait ? 1.0 : 0.78), -R * 1.5), l1 = V(0, portrait ? 1.5 : 2.5, R * 0.12);
      const pStart = camEnd || V(-R * 0.45, 1.9, 0.9), lStart = lookEnd || V(5, 4, 0);
      await path(pStart, lStart, p1, l1, D[4], portrait ? 58 : 44);
      // ================= başlık =================
      call('beat', 5);
      ctx.sfx('zzGong', { volume: 0.7 });
      const p2 = V(R * 0.24, R * (portrait ? 1.06 : 0.83), -R * 1.58);
      if (reduced) await ctx.wait(D[5]);
      else await ctx.move(p1, l1, p2, l1, D[5], { fov: portrait ? 58 : 44, ease: (x) => x });
    }
  });

  function wrapA(a) { return ((a % TAU) + TAU) % TAU; }

  // Yarasa sürüsü: kameranın uzağında, sağdan sola gökyüzünü geçer
  function bats(ctx, n, dur) {
    const tpl = A.get('characters/bat.glb').scene.children[0];
    const list = [];
    for (let i = 0; i < n; i++) {
      const b = tpl.clone(true);
      b.scale.setScalar(1.6 + Math.random() * 0.9);
      ctx.add(b);
      list.push({ b, dz: (Math.random() - 0.5) * 8, dy: (Math.random() - 0.5) * 3, dx: Math.random() * 6, ph: Math.random() * 6, sp: 0.85 + Math.random() * 0.3, wl: b.getObjectByName('wing-left'), wr: b.getObjectByName('wing-right') });
    }
    ctx.sfx('whoosh', { volume: 0.55 });
    let t = 0;
    return ctx.tween(dur, (k, dt) => {
      t += dt;
      for (const o of list) {
        const u = clamp(k * o.sp, 0, 1);
        const x = 22 + o.dx, z = 26 - u * 56 + o.dz, y = 9.5 + o.dy + Math.sin(t * 3 + o.ph) * 0.5 + u * 3;
        o.b.position.set(x, y, z);
        o.b.rotation.y = Math.PI;
        const f = Math.sin(t * 20 + o.ph) * 0.9;
        if (o.wl) o.wl.rotation.z = f;
        if (o.wr) o.wr.rotation.z = -f;
        o.b.visible = u < 1;
      }
    }, (x) => x).catch(() => {});
  }
}
