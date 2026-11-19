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

// ---------- ortaçağ savaşçı giysileri (prosedürel, oyunun kendi tasarımı; gerçek armalar/logolar yok) ----------
const STEEL = '#a9b2bb', STEEL2 = '#8b949e', STEEL3 = '#6f7883', BRASS = '#c49a3e';
// zincir örgü: hafif ton oynaması (halka deseni gölgelendiricide, metal kodu 0.5: bkz. outfitMaterial)
const mailC = (i, j) => { const h = hash(i * 3 + 1, j * 7 + 2); return h < 0.3 ? '#8a929b' : h < 0.65 ? '#949ca5' : '#a0a8b1'; };

// 7 Kapitone gambeson: dikişli (kapitone) kalın keten ceket, dik yaka, önde bağcıklar
function gambeson(F) {
  const base = '#d8c7a0', dark = '#b9a77f', list = [];
  const rows = [[1.2, -0.05, 1.15], [1.1, 0.0], [1.04, 0.05], [1.02, 0.1], [0.98, F.y1 - 0.01], [0.8, F.y1 + 0.014]];
  list.push(shell(F, rows, { seg: 16, arm: ARM(F), color: (i, j) => (j === 0 ? '#a8966f' : (i + (j % 2)) % 2 ? dark : base) }));
  list.push(shell(F, [[0.84, F.y1 + 0.008], [0.8, F.y1 + 0.04]], { seg: 12, m: 0.012, color: '#c9b78f' }));
  for (let n = 0; n < 4; n++) {
    const [x, y, z] = onShell(F, 0, 1.02, 0.03 + n * 0.03, 0.006);
    list.push(part(new THREE.BoxGeometry(0.036, 0.008, 0.008), '#5a3a22', { pos: [x, y, z] }));
  }
  return list;
}

// 8 Zincir zırh: uyluk ortasına inen zincir gömlek, etekte açılır; deri kemer ve pirinç toka
function zincirZirh(F) {
  const list = [];
  const rows = [[1.3, -0.085, 1.2], [1.16, -0.03, 1.1], [1.06, 0.03], [1.02, 0.09], [0.98, F.y1 - 0.01], [0.8, F.y1 + 0.014]];
  list.push(shell(F, rows, { seg: 18, arm: ARM(F), color: (i, j) => (j === 0 && i % 2 ? '#5f666f' : mailC(i, j)) }));
  list.push(shell(F, [[1.12, 0.012], [1.12, 0.036]], { seg: 14, m: 0.016, color: '#4a3020' }));
  const [x, y, z] = onShell(F, 0, 1.12, 0.024, 0.02);
  list.push(part(new THREE.BoxGeometry(0.036, 0.03, 0.01), BRASS, { pos: [x, y, z] }));
  return list;
}

// 9 Akıncı kürk yeleği: benekli post yelek (önden açık), açık renk kürk kenar; altında oyuncu renginde gömlek görünür
function akinciYelek(F) {
  const list = [];
  const rows = [[1.1, 0.0], [1.07, 0.05], [1.05, 0.1], [0.99, F.y1 - 0.005], [0.82, F.y1 + 0.018]];
  const gap = 0.2, seg = 14;
  list.push(shell(F, rows, {
    seg, from: gap, to: TAU - gap, arm: ARM(F), m: 0.02,
    wob: (i, j) => 1 + (hash(i * 2, j * 3) - 0.5) * 0.06,
    color: (i, j) => (i === 0 || i === seg - 1 ? '#efe2c6' : hash(i * 5 + 3, j * 11) < 0.3 ? '#2e2016' : shadeHex('#c48a3a', (hash(i, j) - 0.5) * 0.25)),
  }));
  list.push(shell(F, [[0.86, F.y1 + 0.03], [1.1, F.y1 + 0.004], [1.16, F.y1 - 0.03]], { seg: 12, m: 0.024, color: (i, j) => shadeHex('#e3d2b2', (hash(i, j) - 0.5) * 0.18), wob: (i, j) => (j ? 1 + (hash(i * 3, j) - 0.5) * 0.12 : 1) }));
  return list;
}

// 10 Arma cüppesi: önde ve arkada dize inen kolsuz cüppe (yanlar açık); lacivert zemin, sarı geometrik şerit (köşeli V)
function armaCuppesi(F) {
  const base = '#24418f', band = '#e8c547', list = [];
  const rows = [[1.2, -0.12, 1.12], [1.12, -0.05], [1.06, 0.02], [1.02, 0.08], [0.97, F.y1 - 0.005], [0.82, F.y1 + 0.016]];
  const seg = 8, half = 0.95;
  const chev = (i, j) => { const u = Math.abs(i + 0.5 - seg / 2) / (seg / 2); const c = j + u * 1.8; return j === 0 ? band : c > 1.6 && c < 2.6 ? band : base; };
  list.push(shell(F, rows, { seg, from: -half, to: half, m: 0.02, color: chev }));
  list.push(shell(F, rows, { seg, from: Math.PI - half, to: Math.PI + half, m: 0.02, color: chev }));
  list.push(shell(F, [[1.13, 0.012], [1.13, 0.034]], { seg: 14, m: 0.024, color: '#5a3a22' }));
  return list;
}

// 11 Mehter cübbesi: dize inen kırmızı cübbe, yeşil kenar ve etek şeridi, altın düğmeler, yeşil-altın kuşak (askerî bando giysisi)
function mehterCubbe(F) {
  const red = '#a3202a', green = '#1f6a3a', list = [];
  const rows = [[1.48, -0.115, 1.28], [1.3, -0.05, 1.16], [1.14, 0.01, 1.04], [1.04, 0.07], [1.0, 0.12], [0.96, F.y1 - 0.005], [0.8, F.y1 + 0.016]];
  const gap = 0.26, seg = 14;
  list.push(shell(F, rows, { seg, from: gap, to: TAU - gap, arm: ARM(F), m: 0.022, color: (i, j) => (i === 0 || i === seg - 1 || j === 0 ? green : j === 1 && i % 3 === 1 ? shadeHex(red, -0.1) : red) }));
  list.push(shell(F, [[1.16, -0.002], [1.17, 0.026], [1.12, 0.052]], { seg: 14, m: 0.026, color: (i, j) => (j === 1 && i % 2 ? GOLD : green) }));
  for (let n = 0; n < 3; n++) for (const s of [-1, 1]) {
    const [x, y, z] = onShell(F, s * (gap + 0.1), 1.0, 0.075 + n * 0.028, 0.03, 4, 0.022);
    list.push(part(new THREE.OctahedronGeometry(0.008, 0), GOLD2, { pos: [x, y, z] }));
  }
  return list;
}

// Omuzluk (kol kemiği yerel: kol +x boyunca 0.025..0.284, kesit y ±0.08, z -0.067..0.124; sağ kol için x aynalanır):
// kolun üst-dış yüzüne oturan kapalı, basık çelik kabuk + altında ikinci lama; pirinç kenarlı. Kapalı geometri: dış
// çizgide kanat gibi açılmaz, kolla birlikte sallanır.
function pauldron(sx, trim = BRASS, steel = STEEL) {
  return [
    part(new THREE.IcosahedronGeometry(0.1, 1), steel, { pos: [sx * 0.07, 0.052, 0.028], rot: [0, 0, -sx * 0.18], scale: [0.95, 0.5, 1.12] }),
    part(new THREE.CylinderGeometry(0.104, 0.108, 0.018, 10), trim, { pos: [sx * 0.07, 0.03, 0.028], rot: [0, 0, -sx * 0.18], scale: [0.95, 1, 1.12] }),
    part(new THREE.IcosahedronGeometry(0.085, 1), STEEL2, { pos: [sx * 0.135, 0.036, 0.028], rot: [0, 0, -sx * 0.3], scale: [0.6, 0.48, 1.1] }),
  ];
}

// 12 Plakalı göğüslük: göğüs ve sırt plakası (ortada sırt çizgisi), belden sarkan lamalı etek, iki yanda omuzluk
function plakali(F) {
  const torso = [];
  const rows = [[1.08, 0.0], [1.12, 0.05], [1.12, 0.1], [1.04, F.y1 - 0.01], [0.84, F.y1 + 0.016]];
  torso.push(shell(F, rows, { seg: 14, p: 3, arm: ARM(F), m: 0.02, color: (i, j) => (j === 0 ? BRASS : i === 0 || i === 13 ? '#c3cbd3' : shadeHex(STEEL, -0.05 * j + (i % 7 === 3 ? -0.08 : 0))) }));
  torso.push(shell(F, [[1.24, -0.06, 1.15], [1.16, -0.03, 1.1], [1.1, 0.002]], { seg: 14, m: 0.022, color: (i, j) => (j === 0 ? STEEL3 : STEEL2) }));
  return { torso, armL: pauldron(1), armR: pauldron(-1) };
}

// 13 Sipahi zırhı / 14 Mor kaftanlı sipahi zırhı (Osmanlı): zincir gömlek üstünde göğüste küçük plaka sıraları
// (zincir-plaka karışık), ortada yuvarlak göğüs aynası, omuzlarda omuzluk. royal: üstte altın kenarlı mor kısa kaftan.
function sipahi(F, royal) {
  const torso = [];
  const rows = [[1.24, -0.07, 1.15], [1.12, -0.02, 1.08], [1.04, 0.04], [1.0, 0.1], [0.97, F.y1 - 0.01], [0.8, F.y1 + 0.014]];
  torso.push(shell(F, rows, { seg: royal ? 12 : 14, arm: ARM(F), color: (i, j) => (j === 0 && i % 2 ? '#5f666f' : mailC(i, j)) }));
  const plates = royal ? [] : [[-0.3, 0.035], [0.3, 0.035], [-0.3, 0.075], [0.3, 0.075], [-0.3, 0.115], [0.3, 0.115]];
  for (const [t, y] of plates) {
    const [x, yy, z] = onShell(F, t, 1.0, y, 0.01);
    torso.push(part(new THREE.BoxGeometry(0.06, 0.034, 0.012), (f) => (f < 4 ? GOLD : STEEL), { pos: [x, yy, z], rot: [0, t, 0] }));
  }
  const [cx, cy, cz] = onShell(F, 0, 1.0, 0.085, 0.014);
  torso.push(part(new THREE.CylinderGeometry(0.046, 0.046, 0.014, 8), (f) => (f < 16 ? STEEL : GOLD), { pos: [cx, cy, cz], rot: [Math.PI / 2, 0, 0] }));
  if (royal) {
    const base = '#5b2a8a', seg = 12, gap = 0.5;
    const krows = [[1.36, -0.09, 1.22], [1.2, -0.03, 1.12], [1.08, 0.04], [1.02, 0.1], [0.97, F.y1 - 0.005], [0.8, F.y1 + 0.018]];
    torso.push(shell(F, krows, { seg, from: gap, to: TAU - gap, arm: ARM(F), m: 0.03, color: (i, j) => (i === 0 || i === seg - 1 || j === 0 ? GOLD2 : (j === 1 && i % 3 === 1 ? shadeHex(base, 0.12) : base)) }));
  }
  return { torso, armL: pauldron(1, royal ? GOLD2 : GOLD), armR: pauldron(-1, royal ? GOLD2 : GOLD) };
}

const LONG_TOPS = [2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14];
const TOP_BUILD = [null, cepken, entari, cintemaniYelek, (F) => kaftan(F, false), kapanice, (F) => kaftan(F, true),
  gambeson, zincirZirh, akinciYelek, armaCuppesi, mehterCubbe, plakali, (F) => sipahi(F, false), (F) => sipahi(F, true)];

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
  { a: [...rgb('#ece6da'), 3], b: [0, 0, 0, -0.13] },               // 8 Nalın: beyaz çorap (tahta taban geometride)
  { a: [...rgb('#6b4528'), 3], b: [0, 0, 0, -0.07] },               // 9 Deri çizme: baldır ortasına kadar
  { a: [...rgb('#3b3540'), 1], b: [0, 0, 0, -0.128] },              // 10 Zincir etek: koyu pantolon (zincir halka geometride)
  { a: [...rgb('#8d96a0'), 1], b: [0, 0, 0, -1] },                  // 11 Zırhlı bacaklık: tüm bacak ve ayak çelik
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
  nalin,
  (L) => [
    legRing(L, [[1.08, -0.086], [1.26, -0.072], [1.22, -0.056]], { color: (i, j) => (j === 1 ? '#7d5233' : '#5a3a22') }),
    part(new THREE.BoxGeometry(0.03, 0.022, 0.01), BRASS, { pos: [L.cx, -0.105, L.cz + L.hz + 0.012] }),
  ],
  (L, long) => [legRing(L, [[1.06, 0.03], [1.2, 0.0], [1.3, -0.045], [1.26, -0.06]], { long, seg: 10, color: (i, j) => (j === 2 && i % 2 ? '#5f666f' : mailC(i, j)) })],
  zirhliBacak,
];
// 8 Nalın: sedef işlemeli yüksek tahta taban (ayağın altını sarar) ve kırmızı deri üst kayış
function nalin(L) {
  const list = [], x = L.cx, fz = 0.014;
  list.push(part(new THREE.BoxGeometry(0.168, 0.044, 0.258), '#5a3a22', { pos: [x, -0.164, fz] }));
  list.push(part(new THREE.BoxGeometry(0.172, 0.022, 0.07), '#9c2f2f', { pos: [x, -0.132, fz + 0.045] }));
  for (const s of [-1, 1]) for (const dz of [-0.07, 0.0, 0.07]) list.push(part(new THREE.OctahedronGeometry(0.009, 0), '#f0ece4', { pos: [x + s * 0.085, -0.16, fz + dz], scale: [0.4, 1, 1] }));
  return list;
}
// 11 Zırhlı bacaklık: dizlik (kanatlı), baldırlık sırtı ve ayak üstünde lamalı demir ayakkabı (boyama çelik)
function zirhliBacak(L) {
  const list = [], x = L.cx, fz = L.cz + L.hz;
  list.push(part(new THREE.IcosahedronGeometry(0.046, 0), STEEL, { pos: [x, -0.055, fz + 0.012], scale: [1, 0.85, 0.6] }));
  list.push(part(new THREE.BoxGeometry(0.11, 0.05, 0.012), STEEL2, { pos: [x, -0.055, fz + 0.002], rot: [0, 0, 0] }));
  list.push(part(new THREE.BoxGeometry(0.014, 0.06, 0.014), '#c3cbd3', { pos: [x, -0.11, fz + 0.004] }));
  for (let k = 0; k < 3; k++) list.push(part(new THREE.BoxGeometry(0.15, 0.016, 0.034), k % 2 ? STEEL2 : STEEL, { pos: [x, -0.142 + k * 0.004, 0.04 + k * 0.032], rot: [0.25, 0, 0] }));
  return list;
}

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

// ---------- teçhizat (look.gear): sırtta ya da belde, gövde kemiği yerel ----------
// Gövde kemiği: kalça y=0, boyun y≈0.167, sırt z≈-0.125; baş (y 0.167..0.55) gövdeden geriye taşar (ense z≈-0.18), bu yüzden
// sırttaki nesneler sırttan ~6 cm geride ve ense hizasının dışında durur. Bacaklar kalçadan sallanır: sırttaki nesnelerin alt
// ucu y≥-0.03'te kalır (yürürken uyluğa girmez). Kollar yanlardan (|x|>0.14) sallanır: sırt nesneleri |x|<0.14 içinde kalır.
// Uzun nesnelerin (kargı, sancak, tuğ) tepesi başın üstünü fazla aşmaz; ad etiketi yüksekliği gearTop ile yükseltilir.
const LEATHER = '#4a2f1f', WOOD = '#7a5232';
function backZ(T) { return Math.min(T.cz - T.hz, -0.125) - 0.062; }
// Kılıç/pala SOL BACAK kemiğine bağlanır (bacak-yerel: kalça eklemi y=0, bacak dışı x≈+0.07): bacakla birlikte sallanır,
// yürürken uyluğa girmez; kabza kalçada kemer hizasında, kın baldır dışında geriye eğik.
function swordAt(list, L, { curved = false, scab = LEATHER, fit = BRASS, grip = '#3a2417' } = {}) {
  const xs = L.cx + L.hx + 0.024;
  const d = new THREE.Vector3(0, -0.86, -0.5).normalize(), e = new THREE.Vector3(0, 0.5, -0.86).normalize();
  const P0 = new THREE.Vector3(xs, 0.1, 0.06);
  const P1 = P0.clone().addScaledVector(d, 0.05);
  const A = (v) => [v.x, v.y, v.z];
  list.push(part(new THREE.OctahedronGeometry(0.016, 0), fit, { pos: A(P0) }));
  list.push(stick(A(P0), A(P1), 0.016, 0.016, grip));
  if (curved) list.push(stick(A(P0), A(P0.clone().add(new THREE.Vector3(0, 0.008, 0.022))), 0.016, 0.016, grip));   // tabanca kabzası ucu
  list.push(stick(A(P1.clone().addScaledVector(e, 0.04)), A(P1.clone().addScaledVector(e, -0.04)), 0.014, 0.012, fit));
  // kın: düz ya da (pala) uca doğru genişleyip kıvrılan
  const pts = [P1];
  const n = curved ? 4 : 1, len = 0.24;
  for (let k = 1; k <= n; k++) {
    const t = k / n;
    const bend = curved ? new THREE.Vector3(0, 0.05 * t * t, -0.04 * t * t) : new THREE.Vector3();
    pts.push(P1.clone().addScaledVector(d, len * t).add(bend));
  }
  for (let k = 0; k < pts.length - 1; k++) list.push(stick(A(pts[k]), A(pts[k + 1]), 0.014, curved ? 0.03 + k * 0.006 : 0.03, scab));
  list.push(stick(A(pts[0]), A(pts[0].clone().addScaledVector(d, 0.03)), 0.018, 0.036, fit));
  const end = pts[pts.length - 1];
  list.push(stick(A(end.clone().addScaledVector(d, -0.03)), A(end), 0.017, curved ? 0.05 : 0.034, fit));
}
// Kılıç ve kın: kemerde sol kalçada, kabza önde, kın geriye eğik
function gKilic(F) { const list = [], leg = []; belt(list, F.torso); swordAt(leg, F.leg); return { torso: merge(list), legL: merge(leg) }; }
// Pala: kemerde, siyah kın uca doğru genişler ve kıvrılır, gümüş kın ağızlığı ve tabanca kabza
function gPala(F) { const list = [], leg = []; belt(list, F.torso); swordAt(leg, F.leg, { curved: true, scab: '#26222a', fit: '#c9ced6', grip: '#efe6d0' }); return { torso: merge(list), legL: merge(leg) }; }
// Çini kuşak ve hançer: kobalt-turkuaz-beyaz çini desenli kuşak, yanda düğüm, önde kuşağa sokulmuş hançer
function gCiniKusak(F) {
  const T = F.torso, list = [];
  const cini = ['#2a5fa8', '#f4f1ea', '#1f8fa0', '#f4f1ea'];
  list.push(shell(T, [[1.13, 0.0], [1.15, 0.026], [1.12, 0.052]], { seg: 16, m: 0.02, color: (i, j) => cini[(i + j * 2) % 4] }));
  const [kx, ky, kz] = onShell(T, -0.75, 1.15, 0.026, 0.02);
  list.push(part(new THREE.IcosahedronGeometry(0.02, 0), '#2a5fa8', { pos: [kx, ky, kz], scale: [1, 0.8, 0.7] }));
  list.push(part(new THREE.BoxGeometry(0.024, 0.06, 0.008), '#1f8fa0', { pos: [kx - 0.006, ky - 0.04, kz + 0.004], rot: [0.12, -0.75, 0.12] }));
  const z = T.cz + T.hz + 0.036, x = T.cx + T.hx * 0.28;
  const P = (dx, dy) => [x + dx, 0.024 + dy, z];
  list.push(stick(P(0.03, 0.085), P(0.016, 0.05), 0.015, 0.017, '#efe6d0'));
  list.push(part(new THREE.IcosahedronGeometry(0.013, 0), GOLD, { pos: P(0.032, 0.09) }));
  list.push(stick(P(-0.004, 0.044), P(0.036, 0.054), 0.008, 0.011, GOLD));
  list.push(stick(P(0.016, 0.048), P(0.0, -0.002), 0.02, 0.015, '#1f3f7a'));
  list.push(stick(P(0.0, -0.002), P(-0.01, -0.03), 0.016, 0.013, GOLD));
  return merge(list);
}
// Sırt askısı (kalkan, sadak): göğüste çapraz deri kayış
function strap(list, T) {
  const f = T.cz + T.hz + 0.012, b = backZ(T) + 0.03;
  list.push(stick([T.cx - T.hx * 0.75, T.y1 - 0.01, f], [T.cx + T.hx * 0.8, 0.02, f], 0.026, 0.01, LEATHER));
  list.push(stick([T.cx - T.hx * 0.75, T.y1 - 0.01, b], [T.cx + T.hx * 0.8, 0.02, b], 0.026, 0.01, LEATHER));
}
// Kalkanı sırta yerleştir: disk/gövde -z'ye bakar, üstü hafif geriye yatık (başa değmez)
function onBack(g, T, y, tilt = -0.14, x = 0) {
  g.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(T.cx + x, y, backZ(T)), new THREE.Quaternion().setFromEuler(new THREE.Euler(tilt, 0, 0)), new THREE.Vector3(1, 1, 1)));
  return g;
}
// Yuvarlak kalkan: dilimli boyalı ahşap (krem-kırmızı), demir kenar ve göbek
function gYuvarlak(F) {
  const T = F.torso, list = [];
  strap(list, T);
  const sh = [
    part(new THREE.CylinderGeometry(0.135, 0.135, 0.016, 12), (f) => (f < 24 ? '#5a3a22' : Math.floor((f - 24) / 2) % 2 ? '#b8382e' : '#efe1c0'), { rot: [Math.PI / 2, 0, 0] }),
    part(new THREE.TorusGeometry(0.135, 0.01, 3, 12), STEEL3),
    part(new THREE.SphereGeometry(0.036, 6, 3, 0, TAU, 0, Math.PI / 2), STEEL, { rot: [-Math.PI / 2, 0, 0], pos: [0, 0, -0.008] }),
  ];
  for (const g of sh) list.push(onBack(g, T, 0.072));
  return merge(list);
}
// Damla kalkan: üstü yuvarlak, altı sivri uzun kalkan; mavi zemin, sarı köşeli V şerit, kenar bandı
function gDamla(F) {
  const T = F.torso, list = [];
  strap(list, T);
  const s = new THREE.Shape();
  const W = 0.1, top = 0.15, bot = -0.13;
  s.moveTo(0, bot);
  s.quadraticCurveTo(W * 0.95, bot + 0.12, W, top - 0.06);
  s.quadraticCurveTo(W * 0.92, top, 0, top + 0.012);
  s.quadraticCurveTo(-W * 0.92, top, -W, top - 0.06);
  s.quadraticCurveTo(-W * 0.95, bot + 0.12, 0, bot);
  const ex = new THREE.ExtrudeGeometry(s, { depth: 0.016, bevelEnabled: false, curveSegments: 4 });
  ex.translate(0, 0, -0.008);
  ex.rotateY(Math.PI);   // ön yüz -z (dışa)
  const body = part(ex, (f) => (f < 14 || f >= 28 ? '#2f5a8a' : '#1d3a5c'));
  const v = [part(new THREE.BoxGeometry(0.03, 0.12, 0.006), '#e8c547', { pos: [-0.038, 0.06, -0.012], rot: [0, 0, -0.62] }),
    part(new THREE.BoxGeometry(0.03, 0.12, 0.006), '#e8c547', { pos: [0.038, 0.06, -0.012], rot: [0, 0, 0.62] }),
    part(new THREE.SphereGeometry(0.026, 6, 2, 0, TAU, 0, Math.PI / 2), STEEL, { rot: [-Math.PI / 2, 0, 0], pos: [0, -0.01, -0.01] })];
  for (const g of [body, ...v]) list.push(onBack(g, T, 0.11, -0.16));
  return merge(list);
}
// Spiral kalkan (Osmanlı kalkanı): incir dalı sarmalını saran renkli iplik (kırmızı-sarı-krem sarmal), çelik göbek
function gSpiral(F) {
  const T = F.torso, list = [];
  strap(list, T);
  const cols = ['#b8382e', '#e8c547', '#efe1c0'];
  const disc = lathe([[0.001, 0.03], [0.04, 0.026], [0.075, 0.018], [0.108, 0.009], [0.138, 0.0], [0.142, -0.008]], {
    seg: 16, color: (i, j) => (j === 4 ? '#5a3a22' : cols[Math.floor(((i / 16) * 3 + j * 0.9)) % 3]),
  });
  disc.rotateX(-Math.PI / 2);   // kubbe -z'ye (dışa)
  const boss = part(new THREE.ConeGeometry(0.038, 0.05, 8), STEEL, { rot: [-Math.PI / 2, 0, 0], pos: [0, 0, -0.05] });
  for (const g of [disc, boss]) list.push(onBack(g, T, 0.075, -0.14));
  return merge(list);
}
// Sadak ve yay (Osmanlı): sırtta çapraz duran kırmızı deri sadak (altın bantlı) ve oklar; yanında çift kıvrımlı yay
function gSadak(F) {
  const T = F.torso, list = [], zb = backZ(T);
  strap(list, T);
  const a = [T.cx - 0.06, -0.01, zb], b = [T.cx + 0.07, 0.17, zb - 0.01];
  list.push(stick(a, b, 0.07, 0.05, '#9c2f2f'));
  const t = (k) => [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
  for (const k of [0.15, 0.8]) list.push(stick(t(k - 0.04), t(k + 0.04), 0.075, 0.056, GOLD));
  const dir = [b[0] - a[0], b[1] - a[1], b[2] - a[2]].map((v) => v / Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]));
  for (const [ox, oz] of [[-0.016, 0.0], [0.012, -0.012], [0.0, 0.014]]) {
    const s0 = [b[0] + ox, b[1], b[2] + oz], s1 = [s0[0] + dir[0] * 0.07, s0[1] + dir[1] * 0.07, s0[2] + dir[2] * 0.07];
    list.push(stick(s0, s1, 0.008, 0.008, '#d9c8a0'));
    list.push(part(new THREE.TetrahedronGeometry(0.018, 0), ox > 0 ? '#b8382e' : '#f4f1ea', { pos: s1, scale: [0.5, 1.2, 0.5] }));
  }
  // yay: çift kıvrımlı (uçlar dışa kıvrık), sırtın arkasında çapraz
  const bow = [[-0.13, 0.19], [-0.1, 0.15], [-0.03, 0.07], [0.04, -0.0], [0.09, -0.02], [0.12, -0.0]];
  const zb2 = zb - 0.035;
  for (let k = 0; k < bow.length - 1; k++) list.push(stick([bow[k][0], bow[k][1], zb2], [bow[k + 1][0], bow[k + 1][1], zb2], 0.016, 0.016, k === 0 || k === bow.length - 2 ? '#efe6d0' : '#5a1f1f'));
  list.push(stick([bow[0][0], bow[0][1], zb2], [bow[bow.length - 1][0], bow[bow.length - 1][1], zb2], 0.004, 0.004, '#efe6d0'));
  return merge(list);
}
// Kargı: sırtta çapraz kısa mızrak; çelik temren, altında kırmızı püskül, dipte demir çarık
function gKargi(F) {
  const T = F.torso, list = [], zb = backZ(T) - 0.012;
  strap(list, T);
  const a = new THREE.Vector3(T.cx - 0.13, -0.02, zb), b = new THREE.Vector3(T.cx + 0.15, 0.4, zb - 0.03);
  const d = b.clone().sub(a).normalize();
  const A = (v) => [v.x, v.y, v.z];
  list.push(stick(A(a), A(b), 0.018, 0.018, WOOD));
  list.push(stick(A(a.clone().addScaledVector(d, -0.02)), A(a.clone().addScaledVector(d, 0.02)), 0.024, 0.024, STEEL3));
  const tip = b.clone().addScaledVector(d, 0.07);
  list.push(part(new THREE.OctahedronGeometry(0.03, 0), STEEL, { pos: A(b.clone().addScaledVector(d, 0.035)), rot: [0, 0, -Math.atan2(d.x, d.y)], scale: [0.55, 1.6, 0.3] }));
  list.push(part(new THREE.ConeGeometry(0.022, 0.04, 5), '#b8222e', { pos: A(b.clone().addScaledVector(d, -0.012)), rot: [0, 0, -Math.atan2(d.x, d.y)] }));
  void tip;
  return merge(list);
}
// Sancak / Altın sancak: sırtta dik direk, tepede altın temren; çatal uçlu küçük bayrak (çintemani: üç benek — geometrik)
function gSancak(F, royal) {
  const T = F.torso, list = [], zb = backZ(T) - 0.01;
  strap(list, T);
  // direk başın üstüne çıkar: bayrak baş (gövde-yerel ~0.55) ve uzun başlıkların çoğunun üstünde görünür
  const x = T.cx + 0.1, top = 0.8;
  list.push(stick([x - 0.01, -0.03, zb], [x + 0.01, top, zb - 0.02], 0.018, 0.018, royal ? GOLD : WOOD));
  list.push(part(new THREE.OctahedronGeometry(0.026, 0), GOLD2, { pos: [x + 0.01, top + 0.034, zb - 0.02], scale: [0.7, 1.8, 0.7] }));
  if (royal) list.push(part(new THREE.IcosahedronGeometry(0.02, 0), GOLD2, { pos: [x + 0.01, top - 0.005, zb - 0.02] }));
  const field = royal ? '#5b2a8a' : '#b3222e', trim = royal ? GOLD2 : '#e8c547';
  const W = 0.2, Hh = 0.13, fy = top - 0.085, fx = x + 0.014 + W / 2;
  list.push(part(new THREE.BoxGeometry(W, Hh, 0.008), field, { pos: [fx, fy, zb - 0.02] }));
  // çatal uç (iki dil)
  for (const s of [-1, 1]) list.push(part(new THREE.BoxGeometry(0.075, 0.045, 0.008), field, { pos: [fx + W / 2 + 0.03, fy + s * 0.04, zb - 0.02], rot: [0, 0, s * -0.22] }));
  list.push(part(new THREE.BoxGeometry(W, 0.014, 0.01), trim, { pos: [fx, fy + Hh / 2, zb - 0.02] }));
  list.push(part(new THREE.BoxGeometry(W, 0.014, 0.01), trim, { pos: [fx, fy - Hh / 2, zb - 0.02] }));
  // çintemani (üç benek, geometrik) iki yüzde de
  for (const zf of [-0.027, -0.013]) for (const [dx, dy] of [[-0.022, -0.016], [0.022, -0.016], [0, 0.02]]) list.push(part(new THREE.OctahedronGeometry(0.016, 0), trim, { pos: [fx - 0.012 + dx, fy + dy, zb + zf], scale: [1, 1, 0.35] }));
  if (royal) for (let k = 0; k < 6; k++) list.push(part(new THREE.ConeGeometry(0.009, 0.026, 4), GOLD2, { pos: [fx - W / 2 + 0.02 + k * 0.032, fy - Hh / 2 - 0.016, zb - 0.02], rot: [Math.PI, 0, 0] }));
  return merge(list);
}
// Tuğ: sırtta kısa direk, tepede altın top ve temren, altından sarkan beyaz-siyah at kılı demeti, kırmızı bilezik
function gTug(F) {
  const T = F.torso, list = [], zb = backZ(T) - 0.01;
  strap(list, T);
  // tepe başın üstüne çıkar (gövde-yerel ~0.55 baş tepesi): at kılı demeti başın üstünde görünür
  const x = T.cx + 0.1, top = 0.76;
  list.push(stick([x - 0.008, -0.03, zb], [x, top, zb - 0.02], 0.018, 0.018, '#5a1f1f'));
  list.push(part(new THREE.IcosahedronGeometry(0.032, 0), GOLD2, { pos: [x, top + 0.024, zb - 0.02] }));
  list.push(part(new THREE.ConeGeometry(0.017, 0.07, 5), GOLD2, { pos: [x, top + 0.085, zb - 0.02] }));
  list.push(part(new THREE.CylinderGeometry(0.03, 0.03, 0.028, 6), '#b8222e', { pos: [x, top - 0.024, zb - 0.02] }));
  // at kılı: iki kat, dışta beyaz, arada siyah tutamlar; aşağı ve hafif dışa sarkar
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * TAU, L = k % 2 ? 0.17 : 0.21;
    list.push(part(new THREE.ConeGeometry(0.022, L, 4), k % 4 === 3 ? '#2a2a33' : '#f4f1ea', { pos: [x + Math.sin(a) * 0.026, top - 0.04 - L / 2, zb - 0.02 + Math.cos(a) * 0.026], rot: [Math.PI + Math.cos(a) * 0.22, 0, Math.sin(a) * 0.22] }));
  }
  return merge(list);
}
// look.gear indeksi -> geometri üreticisi (gövde kemiği, deriye göre); top: gövde-yerel en yüksek nokta (ad etiketi)
const GEAR_BUILD = [null, gKilic, gYuvarlak, gCiniKusak, gPala, gDamla, gSadak, gSpiral, gKargi, (F) => gSancak(F, false), gTug, (F) => gSancak(F, true)];
const gearGeos = new Map();
// Dönüş: { torso: geometri (gövde kemiği), legL?: geometri (sol bacak kemiği) } ya da null
export function gearGeometry(gear, skin) {
  const g = gear | 0;
  if (!GEAR_BUILD[g]) return null;
  const key = g + '|' + skin;
  if (gearGeos.has(key)) return gearGeos.get(key);
  let out = null;
  const F = bodyFit(skin);
  if (F) {
    try { const r = GEAR_BUILD[g](F); out = r && r.isBufferGeometry ? { torso: r } : r; } catch (e) { console.warn('[VKWorld] teçhizat üretilemedi', key, e); out = null; }
  }
  gearGeos.set(key, out);
  return out;
}
// Teçhizatın gövde-yerel tepe yüksekliği (yoksa -Infinity): karakterin ad etiketi bunun üstüne çıkar
export function gearTop(gear, skin) {
  const g = gearGeometry(gear, skin);
  return g && g.torso && g.torso.boundingBox ? g.torso.boundingBox.max.y : -Infinity;
}

// ---------- birleştirme: tek deri ağı ----------
const geos = new Map();
let mat = null;
// Metal yüzeyler (stilize): köşe renginin ALFA kanalı malzeme kodudur — 0 kumaş/deri, 0.25 cilalı çelik, 0.5 zincir örgü,
// 0.75 altın/pirinç. Kod, renk paletinden otomatik çıkarılır (metalCode): yapımcı işlevler yalnızca renk seçer.
// Gölgelendirici (tek malzeme, ek çizim çağrısı yok): çelikte gökyüzü yansıması bandı + ilk yönlü ışıktan (gündüz güneş,
// gece ay) bantlı parlama + ince kenar parlaması; zincirde bağlama (bind) uzayında halka örgüsü (uzakta ortalama tona
// yumuşar, kıpırdamaz); altında sıcak parlama. Kumaş (kod 0) eskisiyle birebir aynı çizilir.
const METAL_HEX = {
  0.25: ['#a9b2bb', '#8b949e', '#6f7883', '#c3cbd3', '#c9ced6', '#b7c0c9', '#9aa3ad', '#7d8691', '#5c6570', '#d5dbe1'],
  0.5: ['#a0a8b1', '#7e868f', '#5f666f', '#99a1aa', '#7b838c', '#949ca5', '#8a929b', '#868e97'],
  0.75: ['#c49a3e', '#d9a63a', '#f2c75a', '#e2b23c', '#f0c75a', '#b8862a', '#e8c547', '#caa04a', '#d4af37', '#f7c82a'],
};
const metalKeys = new Map();
const keyOf = (r, g, b) => `${Math.round(r * 2000)}|${Math.round(g * 2000)}|${Math.round(b * 2000)}`;
for (const [code, list] of Object.entries(METAL_HEX)) for (const h of list) { const c = new THREE.Color(h); metalKeys.set(keyOf(c.r, c.g, c.b), +code); }
function metalCode(r, g, b) { return metalKeys.get(keyOf(r, g, b)) || 0; }
const METAL_GLSL_V = `varying vec3 vMtP;\nvarying vec3 vMtN;\n`;
const METAL_GLSL_F = `varying vec3 vMtP;
varying vec3 vMtN;
// zincir halkaları: sıralı (yarım kaydırmalı) küçük halkalar; bağlama uzayı konumundan, baskın eksene göre izdüşüm
float vkwMail(vec3 p, vec3 n) {
  vec3 an = abs(n);
  vec2 q = an.x > an.z ? p.zy : p.xy;
  if (an.y > 0.8) q = p.xz;
  q *= vec2(62.0, 78.0);
  float row = floor(q.y);
  q.x += mod(row, 2.0) * 0.5;
  vec2 f = fract(q) - 0.5;
  float d = length(f * vec2(1.0, 1.25));
  float ring = smoothstep(0.17, 0.25, d) * (1.0 - smoothstep(0.38, 0.47, d));
  float hi = ring * smoothstep(0.0, -0.3, f.y);           // halkanın üst yayı parlak
  float v = 0.52 + 0.5 * ring + 0.22 * hi;
  float w = max(fwidth(q.x), fwidth(q.y));
  return mix(v, 0.8, smoothstep(0.35, 0.9, w));            // uzakta titreşmesin: ortalama ton
}`;
function outfitMaterial() {
  if (!mat) {
    mat = new THREE.MeshLambertMaterial({ name: 'vkw-outfit', vertexColors: true, side: THREE.DoubleSide });
    mat.onBeforeCompile = (sh) => {
      sh.vertexShader = METAL_GLSL_V + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  vMtP = position; vMtN = normal;');
      sh.fragmentShader = METAL_GLSL_F + '\n' + sh.fragmentShader
        // renk: rgb çarpılır, alfa malzeme kodu (opak kalır)
        .replace('#include <color_fragment>', `#if defined( USE_COLOR_ALPHA )
  diffuseColor.rgb *= vColor.rgb;
  float vkwM = vColor.a;
  if (vkwM > 0.37 && vkwM < 0.63) diffuseColor.rgb *= vkwMail(vMtP, normalize(vMtN));
#elif defined( USE_COLOR )
  diffuseColor.rgb *= vColor.rgb;
  float vkwM = 0.0;
#else
  float vkwM = 0.0;
#endif`)
        .replace('#include <opaque_fragment>', `if (vkwM > 0.12) {
    vec3 vkN = normalize(normal);
    vec3 vkV = normalize(vViewPosition);
    float vkSky = dot(vkN, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
    float vkGold = step(0.62, vkwM), vkMail = step(0.37, vkwM) * (1.0 - vkGold);
    vec3 vkTint = mix(vec3(1.0), clamp(diffuseColor.rgb * 1.7, 0.0, 1.0), vkGold);
    // stilize krom: aşağı bakan yüzler koyu, yukarı bakanlar gökyüzünü yansıtır
    outgoingLight *= mix(0.72, 1.06, smoothstep(-0.45, 0.35, vkSky));
    #if NUM_DIR_LIGHTS > 0
      vec3 vkL = directionalLights[0].direction;
      float vkS = pow(max(dot(vkN, normalize(vkL + vkV)), 0.0), mix(120.0, 30.0, vkMail));
      #ifdef VKW_TOON
        vkS = smoothstep(0.5, 0.6, vkS) * 0.6;
      #endif
      outgoingLight += vkTint * directionalLights[0].color * vkS * mix(0.42, 0.1, vkMail);
      float vkLum = dot(directionalLights[0].color, vec3(0.3, 0.5, 0.2));
      float vkRim = pow(1.0 - max(dot(vkN, vkV), 0.0), 3.0);
      outgoingLight += vkTint * diffuseColor.rgb * vkRim * 0.35 * min(vkLum, 1.5);
    #endif
  }
  #include <opaque_fragment>`);
    };
    mat.customProgramCacheKey = () => 'vkw-outfit-metal1';
  }
  return mat;
}

// Kemik-yerel parçaları ağ (bind) uzayına taşı, deri özniteliklerini ekle (kemik başına ağırlık 1).
// Köşe rengi 4 bileşene genişletilir: alfa = metal kodu (metalCode).
function toSkinned(parts, mesh, boneName) {
  const bi = mesh.skeleton.bones.findIndex((b) => b.name === boneName);
  if (bi < 0) return [];
  const M = mesh.skeleton.boneInverses[bi].clone().multiply(mesh.bindMatrix).invert();
  return parts.filter(Boolean).map((g) => {
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'color'].includes(k)) g.deleteAttribute(k);
    const C = g.attributes.color;
    if (C && C.itemSize === 3) {
      const c4 = new Float32Array(C.count * 4);
      for (let i = 0; i < C.count; i++) {
        const r = C.getX(i), gg = C.getY(i), b = C.getZ(i);
        c4[i * 4] = r; c4[i * 4 + 1] = gg; c4[i * 4 + 2] = b; c4[i * 4 + 3] = metalCode(r, gg, b);
      }
      g.setAttribute('color', new THREE.BufferAttribute(c4, 4));
    } else if (!C) {
      g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 4).fill(1).map((v, i) => (i % 4 === 3 ? 0 : v)), 4));
    }
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
// gear: sırt/bel teçhizatı (gövde kemiği). Zırhların omuzlukları kol kemiklerine bağlanır (kolla birlikte sallanır).
export function outfitGeometry(skin, top, bottom, acc = 0, hat = 0, gear = 0) {
  const key = `${skin}|${top}|${bottom}|${acc}|${hat}|${gear}`;
  if (geos.has(key)) return geos.get(key);
  let out = null;
  try {
    const mesh = bodyMesh(skin), F = bodyFit(skin);
    if (mesh && F) {
      const all = [];
      if (TOP_BUILD[top]) {
        const t = TOP_BUILD[top](F.torso);
        if (Array.isArray(t)) all.push(...toSkinned(t, mesh, 'torso'));
        else {
          all.push(...toSkinned(t.torso, mesh, 'torso'));
          if (t.armL) all.push(...toSkinned(t.armL, mesh, 'arm-left'));
          if (t.armR) all.push(...toSkinned(t.armR, mesh, 'arm-right'));
        }
      }
      if (gear) {
        const gg = gearGeometry(gear, skin);
        for (const [part0, bone] of gg ? [[gg.torso, 'torso'], [gg.legL, 'leg-left']] : []) {
          if (!part0) continue;
          const g = part0.clone();
          for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'color'].includes(k)) g.deleteAttribute(k);
          all.push(...toSkinned([g.index ? g.toNonIndexed() : g], mesh, bone));
        }
      }
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
export function attachOutfit(model, skin, top, bottom, acc = 0, hat = 0, gear = 0) {
  top |= 0; bottom |= 0; acc |= 0; hat |= 0; gear |= 0;
  if (!TOP_BUILD[top] && !BOTTOM_BUILD[bottom] && !acc && !hat && !GEAR_BUILD[gear]) return null;
  let body = null;
  model.traverse((o) => { if (!body && o.isSkinnedMesh && o.material && o.material.name === 'villager') body = o; });
  if (!body) return null;
  const g = outfitGeometry(Math.max(0, Math.min(11, skin | 0)), top, bottom, acc, hat, gear);
  if (!g) return null;
  const m = new THREE.SkinnedMesh(g, outfitMaterial());
  m.name = 'outfit';
  m.position.copy(body.position); m.quaternion.copy(body.quaternion); m.scale.copy(body.scale);
  body.parent.add(m);
  m.bind(body.skeleton, body.bindMatrix);
  m.bindMode = body.bindMode;
  m.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0.3, -0.15), 0.85);
  if ((hat || gear) && g.boundingSphere) m.boundingSphere.union(g.boundingSphere);   // uzun şapka/sancak da sınır küresinde kalsın
  m.castShadow = true; m.receiveShadow = false;
  return m;
}

// Üçgen sayısı (ölçüm/test için)
export function outfitTriangles(skin, top, bottom, acc = 0, hat = 0, gear = 0) {
  const g = outfitGeometry(skin, top, bottom, acc, hat, gear);
  return g ? g.attributes.position.count / 3 : 0;
}

export function releaseOutfitsGPU() {
  for (const g of geos.values()) if (g) g.dispose();
  for (const g of gearGeos.values()) if (g) for (const x of Object.values(g)) x.dispose();
  if (mat) mat.dispose();
}
