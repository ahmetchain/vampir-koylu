// Üst ve alt giysiler (look.top / look.bottom): Osmanlı/Selçuklu kıyafetleri, PROSEDÜREL ve karakter geometrisini bozmadan.
//  - Geometri: gövde ve bacak kemiklerine bağlı hafif parçalar (cepken, entari, kaftan, kapaniçe, şalvar kabarığı, çizme
//    kafı...). Hepsi TEK bir SkinnedMesh'te birleşir ve karakterin iskeletine bağlanır (kemik başına ağırlık 1): animasyonla
//    birlikte hareket eder, karakter başına +1 çizim çağrısı. Geometri (deri, üst, alt) başına bir kez üretilir, paylaşılır.
//  - Boyama: bacaklar (pantolon/ayakkabı bölgesi) gövde malzemesinde yeniden boyanır (assets.villagerTinted, aBone).
// Ölçüler her deri için bind pozundan çıkarılır (bodyFit): giysi o karakterin gövdesine oturur.
// Desenler yalnızca geometrik/bitkisel motiflerdir (lale, çintemani, rumi kıvrımı); yazı ya da dini simge yok.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as A from './assets.js';
import { lathe, part, stick, hash, shadeHex, accGeometry, hatGeometry } from './hats.js';

const TAU = Math.PI * 2;
const GOLD = '#d9a63a', GOLD2 = '#f2c75a';

// ---------- vücut ölçüleri ----------
const fits = new Map();
function bodyMesh(skin) {
  const g = A.get(`characters/villager-${String(skin).padStart(2, '0')}.glb`);
  let m = null;
  if (g) g.scene.traverse((o) => { if (!m && o.isSkinnedMesh && o.material.name === 'villager' && o.geometry.attributes.aBone) m = o; });
  return m;
}
// Gövde (kumaş köşeleri) ve bacak (baldır) sınır kutuları, kemik-yerel bind uzayında.
export function bodyFit(skin) {
  skin = Math.max(0, Math.min(11, skin | 0));
  if (fits.has(skin)) return fits.get(skin);
  const m = bodyMesh(skin);
  let out = null;
  if (m) {
    const B = m.geometry.attributes.aBone, C = m.geometry.attributes.aCloth;
    const box = () => ({ x0: 9, x1: -9, y0: 9, y1: -9, z0: 9, z1: -9, n: 0 });
    const torso = box(), torsoAll = box(), leg = box();
    const add = (b, x, y, z) => { b.n++; b.x0 = Math.min(b.x0, x); b.x1 = Math.max(b.x1, x); b.y0 = Math.min(b.y0, y); b.y1 = Math.max(b.y1, y); b.z0 = Math.min(b.z0, z); b.z1 = Math.max(b.z1, z); };
    for (let i = 0; i < B.count; i++) {
      const t = B.getX(i), x = B.getY(i), y = B.getZ(i), z = B.getW(i);
      if (t === 1) { add(torsoAll, x, y, z); if (C && C.getX(i) > 0.01) add(torso, x, y, z); }
      else if (t === 2 && y > -0.12) add(leg, x, y, z);
    }
    const T = torso.n > 8 ? torso : torsoAll;
    const f = (b) => ({ hx: (b.x1 - b.x0) / 2, cx: (b.x0 + b.x1) / 2, hz: (b.z1 - b.z0) / 2, cz: (b.z0 + b.z1) / 2, y0: b.y0, y1: b.y1 });
    out = { torso: f(T), leg: leg.n ? f(leg) : { hx: 0.07, cx: 0, hz: 0.08, cz: 0.01, y0: -0.12, y1: 0.025 } };
    // gövde üstü (boyun) en az 0.16: başın altına kadar
    out.torso.y1 = Math.max(out.torso.y1, 0.16);
  }
  if (out) fits.set(skin, out);
  return out;
}

// ---------- geometri yardımcıları ----------
// Gövdeyi saran kabuk: rows [[k, y]] (k: yarı genişlik çarpanı, alttan üste); açı t: 0 = ön (+z), from..to aralığı.
// arm: kol delikleri (yanlarda, y > arm.y ve |t ∓ π/2| < arm.w olan yüzler atlanır). color(i, j, t) -> hex.
function shell(F, rows, { seg = 16, from = 0, to = TAU, p = 4, m = 0.014, arm = null, color = '#ffffff', wob = null } = {}) {
  const closed = to - from >= TAU - 1e-6;
  const cols = closed ? seg : seg + 1;
  const e = 2 / p;
  const pos = [];
  for (let j = 0; j < rows.length; j++) {
    const [k, y, kz = 1] = rows[j];
    for (let i = 0; i < cols; i++) {
      const t = from + (to - from) * (i / seg);
      const s = Math.sin(t), c = Math.cos(t);
      const w = wob ? wob(i, j) : 1;
      const dx = Math.sign(s) * Math.pow(Math.abs(s), e), dz = Math.sign(c) * Math.pow(Math.abs(c), e);
      pos.push(F.cx + dx * (F.hx + m) * k * w, y, F.cz + dz * (F.hz + m) * k * w * (dz < 0 ? kz : 1));
    }
  }
  const idx = [], faces = [];
  for (let j = 0; j < rows.length - 1; j++) {
    for (let i = 0; i < seg; i++) {
      const tm = from + (to - from) * ((i + 0.5) / seg);
      const ym = (rows[j][1] + rows[j + 1][1]) / 2;
      if (arm && ym > arm.y) {
        const a = Math.atan2(Math.sin(tm), Math.cos(tm));
        if (Math.abs(Math.abs(a) - Math.PI / 2) < arm.w) continue;
      }
      const a = j * cols + i, b = j * cols + ((i + 1) % cols), c2 = (j + 1) * cols + ((i + 1) % cols), d = (j + 1) * cols + i;
      idx.push(a, b, c2, a, c2, d);
      faces.push([i, j, tm], [i, j, tm]);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const ng = g.toNonIndexed();
  g.dispose();
  const n = ng.attributes.position.count, col = new Float32Array(n * 3), tc = new THREE.Color();
  for (let f = 0; f < n / 3; f++) {
    const [i, j, t] = faces[f];
    tc.set(typeof color === 'function' ? color(i, j, t) : color);
    for (let k = 0; k < 3; k++) col.set([tc.r, tc.g, tc.b], (f * 3 + k) * 3);
  }
  ng.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return ng;
}
// Kabuk yüzeyinde bir nokta (t açısı, k çarpanı, y) ve dışa doğru küçük pay
function onShell(F, t, k, y, out = 0.006, p = 4, m = 0.014) {
  const e = 2 / p, s = Math.sin(t), c = Math.cos(t);
  const dx = Math.sign(s) * Math.pow(Math.abs(s), e), dz = Math.sign(c) * Math.pow(Math.abs(c), e);
  return [F.cx + dx * ((F.hx + m) * k + out), y, F.cz + dz * ((F.hz + m) * k + out)];
}
// Lale motifi (ön yüze dönük, t açısında): kadeh + iki yan yaprak + sap. ~20 üçgen.
function lale(list, F, t, k, y, petal, leaf = '#2f7a4a', s = 1) {
  const [x, yy, z] = onShell(F, t, k, y, 0.008);
  const ry = t;
  list.push(part(new THREE.OctahedronGeometry(0.017 * s, 0), petal, { pos: [x, yy + 0.012 * s, z], rot: [0, ry, 0], scale: [0.9, 1.35, 0.35] }));
  for (const sg of [-1, 1]) {
    const ox = Math.cos(ry) * 0.012 * s * sg, oz = -Math.sin(ry) * 0.012 * s * sg;
    list.push(part(new THREE.TetrahedronGeometry(0.012 * s, 0), petal, { pos: [x + ox, yy + 0.018 * s, z + oz], rot: [0, ry, sg * 0.5], scale: [0.7, 1.4, 0.35] }));
  }
  list.push(part(new THREE.BoxGeometry(0.006 * s, 0.03 * s, 0.006), leaf, { pos: [x, yy - 0.012 * s, z], rot: [0, ry, 0] }));
}
// Çintemani: üçgen dizili üç benek + altında iki dalga çizgisi
function cintemani(list, F, t, k, y, dot = '#2b4f9e', wave = '#b52a2a') {
  for (const [dx, dy] of [[-0.016, 0], [0.016, 0], [0, 0.026]]) {
    const ry = t;
    const [x, yy, z] = onShell(F, t, k, y + dy, 0.007);
    list.push(part(new THREE.OctahedronGeometry(0.012, 0), dot, { pos: [x + Math.cos(ry) * dx, yy, z - Math.sin(ry) * dx], rot: [0, ry, 0], scale: [1, 1, 0.4] }));
  }
  for (const wy of [-0.026, -0.04]) {
    const pts = [-0.028, 0.028].map((dx, n) => {
      const [x, yy, z] = onShell(F, t, k, y + wy + (n % 2 ? 0.006 : -0.004), 0.007);
      return [x + Math.cos(t) * dx, yy, z - Math.sin(t) * dx];
    });
    list.push(stick(pts[0], pts[1], 0.007, 0.006, wave));
  }
}

// ---------- üst giysiler (gövde kemiği) ----------
const ARM = (F) => ({ y: F.y1 - 0.075, w: 0.42 });

// 1 Cepken: kısa, önden açık, kenarları altın işlemeli lacivert ceket-yelek; göğüste sim kordon düğmeleri
function cepken(F) {
  const base = '#22305e', list = [];
  const rows = [[1.0, 0.045], [1.0, 0.085], [1.0, 0.125], [0.95, F.y1 - 0.01], [0.78, F.y1 + 0.012]];
  const gap = 0.32;
  list.push(shell(F, rows, {
    seg: 16, from: gap, to: TAU - gap, arm: ARM(F),
    color: (i, j) => (i === 0 || i === 15 || j === 0 ? GOLD : j === 3 ? shadeHex(base, -0.12) : (j === 1 && i % 2 ? shadeHex(base, 0.06) : base)),
  }));
  // önde iki yanda sim kordon (üçer küçük düğüm)
  for (const sg of [-1, 1]) for (let n = 0; n < 3; n++) {
    const [x, y, z] = onShell(F, sg * (gap + 0.12), 1, 0.07 + n * 0.028, 0.006);
    list.push(part(new THREE.OctahedronGeometry(0.009, 0), GOLD2, { pos: [x, y, z] }));
  }
  // sırtta rumi kıvrımı (altın, basit S kıvrım)
  const back = [-0.05, -0.025, 0, 0.025, 0.05].map((dx, n) => { const [x, y, z] = onShell(F, Math.PI, 1, 0.095 + (n % 2 ? 0.014 : 0), 0.006); return [x + dx, y, z]; });
  for (let n = 0; n < 4; n++) list.push(stick(back[n], back[n + 1], 0.008, 0.006, GOLD));
  return list;
}

// 2 Kuşaklı entari: çizgili (kutnu) uzun gömlek-entari, belde kırmızı-altın kuşak ve önde sarkan kuşak uçları
function entari(F) {
  const c1 = '#efe3c8', c2 = '#b8433a', list = [];
  const rows = [[1.26, -0.07, 1.22], [1.14, -0.02, 1.1], [1.04, 0.03], [1.0, 0.09], [0.98, F.y1 - 0.02], [0.8, F.y1 + 0.012]];
  list.push(shell(F, rows, { seg: 14, arm: ARM(F), m: 0.012, color: (i, j) => (j === 0 ? shadeHex(c1, -0.1) : i % 2 === 0 ? c2 : c1) }));
  // kuşak
  const sash = [[1.12, -0.006], [1.13, 0.022], [1.1, 0.05]];
  list.push(shell(F, sash, { seg: 14, m: 0.02, color: (i, j) => (j === 1 ? '#c22f36' : (i % 2 ? GOLD : '#9c1f28')) }));
  const [kx, ky, kz] = onShell(F, 0.55, 1.13, 0.022, 0.02);
  list.push(part(new THREE.IcosahedronGeometry(0.02, 0), '#c22f36', { pos: [kx, ky, kz], scale: [1, 0.8, 0.7] }));
  for (const [dx, rz, c] of [[-0.008, 0.12, '#c22f36'], [0.012, -0.1, '#9c1f28']]) {
    list.push(part(new THREE.BoxGeometry(0.024, 0.07, 0.008), c, { pos: [kx + dx, ky - 0.042, kz + 0.004], rot: [0.12, 0.55, rz] }));
    list.push(part(new THREE.BoxGeometry(0.025, 0.008, 0.009), GOLD, { pos: [kx + dx * 1.6, ky - 0.075, kz + 0.008], rot: [0.12, 0.55, rz] }));
  }
  return list;
}

// 3 Çintemani yelek: krem zemin, mavi üç benek + kırmızı dalga motifi, önde altın düğme dizisi (önü kapalı)
function cintemaniYelek(F) {
  const base = '#f3ead2', list = [];
  const rows = [[1.0, 0.04], [1.0, 0.09], [0.99, 0.13], [0.94, F.y1 - 0.01], [0.78, F.y1 + 0.012]];
  list.push(shell(F, rows, { seg: 16, arm: ARM(F), color: (i, j) => (j === 0 || j === 3 ? '#b52a2a' : base) }));
  for (const t of [-0.5, 0.5, Math.PI]) cintemani(list, F, t, 1, 0.1);
  for (let n = 0; n < 4; n++) {
    const [x, y, z] = onShell(F, 0, 1, 0.055 + n * 0.026, 0.007);
    list.push(part(new THREE.OctahedronGeometry(0.008, 0), GOLD2, { pos: [x, y, z] }));
  }
  return list;
}

// 4 Kaftan / 6 Kraliyet kaftanı: dize kadar uzun, önden açık, altın kenarlı; lale motifleri
function kaftan(F, royal) {
  const base = royal ? '#5b2a8a' : '#1f5a4a', list = [];
  const rows = [[1.5, -0.115, 1.3], [1.32, -0.05, 1.18], [1.14, 0.01, 1.04], [1.04, 0.07], [1.0, 0.12], [0.96, F.y1 - 0.005], [0.8, F.y1 + 0.016]];
  const gap = 0.36, seg = 14;
  list.push(shell(F, rows, {
    seg, from: gap, to: TAU - gap, arm: ARM(F), m: 0.022,
    color: (i, j) => (i === 0 || i === seg - 1 || j === 0 ? (royal ? GOLD2 : GOLD) : (j === 1 && (i + 1) % 3 === 0 ? shadeHex(base, 0.1) : base)),
  }));
  const tul = royal ? [[0.75, -0.06], [-0.75, -0.06], [Math.PI - 0.5, -0.05], [Math.PI + 0.5, -0.05]] : [[0.75, -0.06], [-0.75, -0.06], [Math.PI - 0.45, -0.05], [Math.PI + 0.45, -0.05]];
  for (const [t, y] of tul) {
    const k = y < -0.02 ? 1.32 + (-0.05 - y) * 2.5 : 1.04;
    lale(list, F, t, k, y, royal ? GOLD2 : '#e9c46a', royal ? '#e9c46a' : '#2f7a4a', royal ? 1.1 : 1);
  }
  if (royal) {
    // kakum (beyaz kürk, siyah benekli) şal yaka ve altın kopça
    const col = [[0.8, F.y1 + 0.03], [1.12, F.y1 + 0.004], [1.2, F.y1 - 0.035]];
    list.push(shell(F, col, { seg: 12, m: 0.026, color: (i, j) => ((i * 5 + j * 3) % 7 === 0 ? '#1d1a22' : '#f6f3ec'), wob: (i, j) => (j ? 1 + (hash(i, j) - 0.5) * 0.06 : 1) }));
    const [x, y, z] = onShell(F, 0, 1.0, 0.1, 0.03, 4, 0.022);
    list.push(part(new THREE.OctahedronGeometry(0.018, 0), GOLD2, { pos: [x, y, z], scale: [1, 1, 0.5] }));
    list.push(part(new THREE.OctahedronGeometry(0.009, 0), '#c0283a', { pos: [x, y, z + 0.008] }));
  }
  return list;
}

// 5 Kürklü kapaniçe: sırttan dizlere kırmızı kaba kumaş pelerin, omuzlarda kalın kürk yaka, önde altın kopça
function kapanice(F) {
  const red = '#8e1b23', fur = '#7a5a3c', list = [];
  const rows = [[1.6, -0.14, 1.3], [1.38, -0.06, 1.18], [1.2, 0.02], [1.1, 0.09], [1.06, F.y1 - 0.03]];
  const half = 1.3;
  list.push(shell(F, rows, { seg: 12, from: Math.PI - half, to: Math.PI + half, m: 0.03, color: (i, j) => (j === 0 || i === 0 || i === 12 ? GOLD : (i + j) % 4 === 0 ? shadeHex(red, -0.08) : red) }));
  const mant = [[0.86, F.y1 + 0.018], [1.14, F.y1 - 0.004], [1.22, F.y1 - 0.034]];
  list.push(shell(F, mant, { seg: 12, m: 0.03, color: (i, j) => shadeHex(fur, (hash(i, j) - 0.5) * 0.3), wob: (i, j) => (j ? 1 + (hash(i * 3, j) - 0.5) * 0.12 : 1) }));
  const [x, y, z] = onShell(F, 0, 1.2, F.y1 - 0.03, 0.04, 4, 0.03);
  list.push(part(new THREE.CylinderGeometry(0.018, 0.018, 0.008, 8), GOLD2, { pos: [x, y, z], rot: [Math.PI / 2, 0, 0] }));
  return list;
}

const LONG_TOPS = [2, 4, 5, 6];
const TOP_BUILD = [null, cepken, entari, cintemaniYelek, (F) => kaftan(F, false), kapanice, (F) => kaftan(F, true)];

// ---------- alt giysiler (bacak kemikleri) ----------
// Bacak boyaması (villagerTinted leg): a = [r, g, b, kip], b = [r, g, b, çizgi]. Renkler sRGB hex'ten doğrusal.
function rgb(hex) { const c = new THREE.Color(hex); return [+c.r.toFixed(4), +c.g.toFixed(4), +c.b.toFixed(4)]; }
const LEG_PAINT = [
  null,
  { a: [...rgb('#2e3159'), 1], b: [0, 0, 0, -0.128] },              // 1 Şalvar: çivit
  { a: [...rgb('#262224'), 1], b: [0, 0, 0, -0.128] },              // 2 Potur: siyah
  { a: [...rgb('#2d3f73'), 2], b: [...rgb('#d9a63a'), -0.128] },    // 3 Çakşır: lacivert, altın yan şerit
  { a: [...rgb('#7d1e2c'), 1], b: [0, 0, 0, -0.128] },              // 4 Lale desenli şalvar: lal kırmızısı
  { a: [...rgb('#a0703f'), 4], b: [...rgb('#5a3a22'), -0.07] },     // 5 Çarık: ham deri + bağcık
  { a: [...rgb('#a8322b'), 3], b: [0, 0, 0, -0.105] },              // 6 Mest: kırmızı sahtiyan
  { a: [...rgb('#e0b02a'), 3], b: [0, 0, 0, -0.058] },              // 7 Sarı çizme: dize kadar
];
export function legPaint(bottom) { return LEG_PAINT[bottom | 0] || null; }

// long: uzun üst giysi (entari, kaftan, kapaniçe) varsa kabarık şalvar eteğin altında kalsın diye daraltılır
function legRing(L, rows, opts = {}) {
  if (opts.long) rows = rows.map(([k, y]) => [Math.min(k, 1.16), y]);
  return shell(L, rows, { seg: 6, p: 2.6, m: 0, ...opts });
}
const BOTTOM_BUILD = [
  null,
  (L, long) => [legRing(L, [[1.04, 0.03], [1.3, -0.01], [1.42, -0.06], [1.3, -0.1], [1.04, -0.126]], { long, color: (i, j) => shadeHex('#2e3159', (hash(i, j) - 0.5) * 0.12 + (j === 3 ? -0.06 : 0)) })],
  (L, long) => [legRing(L, [[1.06, 0.03], [1.5, -0.005], [1.48, -0.04], [1.1, -0.075]], { long, color: (i, j) => shadeHex('#262224', (hash(i, j) - 0.5) * 0.15) })],
  null,
  (L, long) => {
    const list = [legRing(L, [[1.04, 0.03], [1.3, -0.01], [1.42, -0.06], [1.3, -0.1], [1.04, -0.126]], { long, color: (i, j) => shadeHex('#7d1e2c', (hash(i, j) - 0.5) * 0.1) })];
    for (const [t, y] of [[0.2, -0.05]]) lale(list, L, t, long ? 1.16 : 1.42, y, '#f2c75a', '#3f8a55', 0.9);
    return list;
  },
  null,
  null,
  (L) => [legRing(L, [[1.08, -0.074], [1.24, -0.06], [1.2, -0.044]], { color: (i, j) => (j === 1 ? '#c9961c' : '#e0b02a') })],
];

// ---------- deriye göre ölçülen aksesuarlar (hats.js makeAcc kullanır; gövde/kol kemiği yerel) ----------
function belt(list, F) {
  list.push(shell(F, [[1.1, 0.02], [1.1, 0.046]], { seg: 14, m: 0.016, color: (i) => (i === 0 ? '#c9961c' : '#5a3a22') }));
}
// Hançer: kemerde, önde sol yanda çapraz duran kınlı hançer (kırmızı deri kın, altın uç ve ağızlık, fildişi kabza)
function hancer(F) {
  const list = [];
  belt(list, F.torso);
  const z = F.torso.cz + F.torso.hz + 0.03, x = F.torso.cx + F.torso.hx * 0.32;
  const P = (dx, dy) => [x + dx, 0.024 + dy, z];
  list.push(stick(P(0.035, 0.09), P(0.02, 0.05), 0.016, 0.018, '#efe6d0'));                  // kabza
  list.push(part(new THREE.IcosahedronGeometry(0.014, 0), '#e2b23c', { pos: P(0.037, 0.096) })); // topuz
  list.push(stick(P(0.0, 0.045), P(0.04, 0.055), 0.008, 0.012, '#e2b23c'));                  // balçak
  list.push(stick(P(0.02, 0.05), P(0.0, 0.0), 0.022, 0.016, '#6e1f1f'));                     // kın
  list.push(stick(P(0.0, 0.0), P(-0.012, -0.028), 0.018, 0.014, '#6e1f1f'));
  list.push(stick(P(-0.012, -0.028), P(-0.004, -0.044), 0.012, 0.012, '#e2b23c'));          // kıvrık altın uç
  list.push(stick(P(0.016, 0.042), P(0.006, 0.02), 0.025, 0.018, '#e2b23c'));                // ağızlık
  return merge(list);
}
// Kese: sağ kalçada kemerden sarkan büzgülü deri kese, altın püskül
function kese(F) {
  const list = [];
  belt(list, F.torso);
  const T = F.torso, t = -0.95;
  const [x, , z] = onShell(T, t, 1.05, 0, 0.028);
  list.push(part(new THREE.IcosahedronGeometry(0.034, 1), (f) => shadeHex('#8a5a2e', (hash(f, 3) - 0.5) * 0.15), { pos: [x, -0.008, z], scale: [1, 1.15, 0.75] }));
  list.push(part(new THREE.CylinderGeometry(0.016, 0.026, 0.02, 7), '#5a3a22', { pos: [x, 0.03, z] }));
  list.push(part(new THREE.ConeGeometry(0.01, 0.03, 4), '#e2b23c', { pos: [x, -0.055, z], rot: [Math.PI, 0, 0] }));
  return merge(list);
}
// Tesbih: sol bilekte küçük, saygılı bir boncuk dizisi (kehribar) ve bir uzun imame boncuğu
function tesbih() {
  const list = [];
  const n = 12, r = 0.094, x = 0.175;
  for (let k = 0; k < n; k++) {
    const a = (k / n) * TAU;
    list.push(part(new THREE.OctahedronGeometry(0.019, 0), k % 2 ? '#b5651d' : '#d98a3a', { pos: [x, Math.cos(a) * r, 0.03 + Math.sin(a) * r * 1.12] }));
  }
  list.push(part(new THREE.CylinderGeometry(0.013, 0.013, 0.04, 6), '#8a4a16', { pos: [x, -r - 0.026, 0.03] }));
  return merge(list);
}
// Madalyon: zincirle göğüste altın madalyon; yüzünde çini mavisi sekiz köşeli yıldız (iki çakışık kare) ve yakut
function madalyon(F) {
  const T = F.torso, list = [];
  const z = T.cz + T.hz + 0.02;
  const c = [T.cx, 0.098, z];
  for (const s of [-1, 1]) {
    list.push(stick([T.cx + s * 0.075, T.y1 - 0.004, z - 0.03], [T.cx + s * 0.035, 0.13, z - 0.004], 0.007, 0.007, '#e2b23c'));
    list.push(stick([T.cx + s * 0.035, 0.13, z - 0.004], [T.cx + s * 0.008, 0.124, z], 0.007, 0.007, '#e2b23c'));
  }
  list.push(part(new THREE.CylinderGeometry(0.036, 0.036, 0.012, 12), '#e2b23c', { pos: c, rot: [Math.PI / 2, 0, 0] }));
  for (const r of [0, Math.PI / 4]) list.push(part(new THREE.BoxGeometry(0.036, 0.036, 0.006), '#1f8fa0', { pos: [c[0], c[1], z + 0.007], rot: [0, 0, r] }));
  list.push(part(new THREE.OctahedronGeometry(0.009, 0), '#c0283a', { pos: [c[0], c[1], z + 0.012] }));
  return merge(list);
}
// Doğan: sol omzun dışında, deri omuzluk üstünde tünemiş doğan (Selçuklu simgesi); kahverengi sırt, benekli göğüs
function dogan(F) {
  const T = F.torso, list = [];
  const x = T.cx + 0.29, y = T.y1 + 0.01, z = T.cz - 0.01;
  list.push(part(new THREE.BoxGeometry(0.1, 0.018, 0.12), '#5a3a22', { pos: [x - 0.01, y - 0.012, z], rot: [0, 0, -0.25] }));   // omuzluk
  list.push(part(new THREE.IcosahedronGeometry(0.05, 0), (f) => (f % 4 === 0 ? '#e8dcc0' : '#7a5232'), { pos: [x, y + 0.05, z], scale: [0.8, 1.15, 1] }));   // gövde
  list.push(part(new THREE.IcosahedronGeometry(0.03, 0), '#6a4628', { pos: [x, y + 0.11, z + 0.012] }));                // baş
  list.push(part(new THREE.ConeGeometry(0.01, 0.026, 4), '#e2b23c', { pos: [x, y + 0.104, z + 0.045], rot: [Math.PI / 2 + 0.4, 0, 0] }));   // gaga
  for (const s of [-1, 1]) list.push(part(new THREE.OctahedronGeometry(0.006, 0), '#1a1410', { pos: [x + s * 0.02, y + 0.118, z + 0.03] }));
  for (const s of [-1, 1]) list.push(part(new THREE.BoxGeometry(0.014, 0.07, 0.07), '#5d3c22', { pos: [x + s * 0.038, y + 0.045, z - 0.012], rot: [0.25, 0, s * 0.12] }));   // kanatlar
  list.push(part(new THREE.BoxGeometry(0.04, 0.012, 0.07), '#4a301b', { pos: [x, y + 0.012, z - 0.06], rot: [-0.4, 0, 0] }));   // kuyruk
  const g = merge(list);
  g.translate(-x, -y, -z); g.scale(1.45, 1.45, 1.45); g.translate(x, y, z);
  return g;
}
function merge(list) { const g = mergeGeometries(list, false); for (const p of list) p.dispose(); g.computeBoundingBox(); g.computeBoundingSphere(); return g; }
// look.acc indeksi -> { bone, fit: deriye göre mi, build }
export const ACC_FIT_BUILD = {
  7: { bone: 'torso', fit: true, build: hancer },
  8: { bone: 'torso', fit: true, build: kese },
  9: { bone: 'arm-left', fit: false, build: tesbih },
  10: { bone: 'torso', fit: true, build: madalyon },
  11: { bone: 'torso', fit: true, build: dogan },
};

// ---------- birleştirme: tek deri ağı ----------
const geos = new Map();
let mat = null;
function outfitMaterial() {
  if (!mat) mat = new THREE.MeshLambertMaterial({ name: 'vkw-outfit', vertexColors: true, side: THREE.DoubleSide });
  return mat;
}

// Kemik-yerel parçaları ağ (bind) uzayına taşı, deri özniteliklerini ekle (kemik başına ağırlık 1)
function toSkinned(parts, mesh, boneName) {
  const bi = mesh.skeleton.bones.findIndex((b) => b.name === boneName);
  if (bi < 0) return [];
  const M = mesh.skeleton.boneInverses[bi].clone().multiply(mesh.bindMatrix).invert();
  return parts.filter(Boolean).map((g) => {
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'color'].includes(k)) g.deleteAttribute(k);
    g.applyMatrix4(M);
    const n = g.attributes.position.count;
    const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
    for (let i = 0; i < n; i++) { si[i * 4] = bi; sw[i * 4] = 1; }
    g.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
    g.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
    return g;
  });
}

// acc: kıyafet ağına katılan aksesuar (elde tutulan hariç; 0 = yok). Karakter başına tek ek çizim çağrısı.
// hat: prosedürel şapka (9+; aynı malzeme türü: köşe renkli Lambert, çift yüz) da kafa kemiğine bağlı parça olarak
// buraya katılır (0 = yok / glb şapka): şapka ayrı çizim çağrısı ve ayrı dış çizgi kabuğu istemez.
export function outfitGeometry(skin, top, bottom, acc = 0, hat = 0) {
  const key = `${skin}|${top}|${bottom}|${acc}|${hat}`;
  if (geos.has(key)) return geos.get(key);
  let out = null;
  try {
    const mesh = bodyMesh(skin), F = bodyFit(skin);
    if (mesh && F) {
      const all = [];
      if (TOP_BUILD[top]) all.push(...toSkinned(TOP_BUILD[top](F.torso), mesh, 'torso'));
      if (BOTTOM_BUILD[bottom]) {
        const long = LONG_TOPS.includes(top);
        all.push(...toSkinned(BOTTOM_BUILD[bottom](F.leg, long), mesh, 'leg-left'));
        all.push(...toSkinned(BOTTOM_BUILD[bottom](F.leg, long), mesh, 'leg-right'));
      }
      if (acc) {
        const a = accGeometry(acc, skin);
        if (a) { const g = a.geo.clone(); for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'color'].includes(k)) g.deleteAttribute(k); all.push(...toSkinned([g.index ? g.toNonIndexed() : g], mesh, a.bone)); }
      }
      if (hat) {
        const h = hatGeometry(hat, skin);
        if (!h) throw new Error('şapka geometrisi yok');
        let g = h.geo.clone();
        for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'color'].includes(k)) g.deleteAttribute(k);
        if (g.index) { const n = g.toNonIndexed(); g.dispose(); g = n; }
        g.applyMatrix4(h.matrix);   // kafa-yerel şapka yerleşimi (makeHat ile aynı)
        const parts = toSkinned([g], mesh, 'head');
        if (!parts.length) throw new Error('kafa kemiği yok');
        all.push(...parts);
      }
      if (all.length) {
        out = mergeGeometries(all, false);
        for (const g of all) g.dispose();
        if (out) { out.computeBoundingBox(); out.computeBoundingSphere(); }
      }
    }
  } catch (e) { console.warn('[VKWorld] kıyafet üretilemedi', key, e); out = null; }
  geos.set(key, out);
  return out;
}

// Karakter klonuna kıyafet ağını tak (gövde ağıyla aynı iskelet). Dönüş: ağ ya da null.
export function attachOutfit(model, skin, top, bottom, acc = 0, hat = 0) {
  top |= 0; bottom |= 0; acc |= 0; hat |= 0;
  if (!TOP_BUILD[top] && !BOTTOM_BUILD[bottom] && !acc && !hat) return null;
  let body = null;
  model.traverse((o) => { if (!body && o.isSkinnedMesh && o.material && o.material.name === 'villager') body = o; });
  if (!body) return null;
  const g = outfitGeometry(Math.max(0, Math.min(11, skin | 0)), top, bottom, acc, hat);
  if (!g) return null;
  const m = new THREE.SkinnedMesh(g, outfitMaterial());
  m.name = 'outfit';
  m.position.copy(body.position); m.quaternion.copy(body.quaternion); m.scale.copy(body.scale);
  body.parent.add(m);
  m.bind(body.skeleton, body.bindMatrix);
  m.bindMode = body.bindMode;
  m.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0.3, -0.15), 0.85);
  if (hat && g.boundingSphere) m.boundingSphere.union(g.boundingSphere);   // uzun şapka da sınır küresinde kalsın
  m.castShadow = true; m.receiveShadow = false;
  return m;
}

// Üçgen sayısı (ölçüm/test için)
export function outfitTriangles(skin, top, bottom) {
  const g = outfitGeometry(skin, top, bottom);
  return g ? g.attributes.position.count / 3 : 0;
}

export function releaseOutfitsGPU() {
  for (const g of geos.values()) if (g) g.dispose();
  if (mat) mat.dispose();
}
