// Şapkalar ve aksesuarlar: ilk 8 şapka hats.glb'den, yenileri burada kodla üretilir (düşük poligon,
// köşe renkli tek geometri + tek paylaşılan Lambert malzeme => şapka başına tek çizim çağrısı).
// Koordinatlar kafa kemiğine göre yereldir (mini-character birimi; ebeveyndeki 2.5 ölçeği otomatik).
// Kafa ölçüleri (skin 0): üst y≈0.33, yarı genişlik ≈0.17 (köşeleri yuvarlak küp), kulaklar x≈±0.227 (y 0.04–0.18).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as A from './assets.js';
import { HAT_NODES, HAT_NAMES, ACC_NAMES, HAT_Y_OFFSET, clamp } from './constants.js';

const TAU = Math.PI * 2;
const tmpC = new THREE.Color();

// ---------- geometri yardımcıları ----------

// Süper elips kesitli torna: profil [[yarıçap, y], ...] alttan üste. p=2 daire, p büyüdükçe yuvarlak kare.
// color(i, j) -> hex: i kesit dilimi, j profil aralığı (dörtgen başına renk). Normaller yumuşak.
// opts.from/opts.to: açık yay (radyan, 0 = +z yönü/ön); opts.wob(i, j) -> yarıçap çarpanı.
function lathe(profile, { seg = 20, p = 2, sx = 1, sz = 1, color = '#ffffff', from = 0, to = TAU, wob = null } = {}) {
  const closed = to - from >= TAU - 1e-6;
  const cols = closed ? seg : seg + 1;
  const pos = [];
  const e = 2 / p;
  for (let j = 0; j < profile.length; j++) {
    const [r, y] = profile[j];
    for (let i = 0; i < cols; i++) {
      const t = from + (to - from) * (i / seg);
      const s = Math.sin(t), c = Math.cos(t);
      const k = wob ? wob(i, j) : 1;
      const dx = Math.sign(s) * Math.pow(Math.abs(s), e), dz = Math.sign(c) * Math.pow(Math.abs(c), e);
      pos.push(dx * r * sx * k, y, dz * r * sz * k);
    }
  }
  const idx = [];
  const quads = [];
  for (let j = 0; j < profile.length - 1; j++) {
    for (let i = 0; i < seg; i++) {
      const a = j * cols + i, b = j * cols + ((i + 1) % cols), c2 = (j + 1) * cols + ((i + 1) % cols), d = (j + 1) * cols + i;
      // dışa bakan yüzler (normal dışa: dış çizgi kabuğu doğru yöne şişer)
      idx.push(a, b, c2, a, c2, d);
      quads.push(i, j, i, j);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const ng = g.toNonIndexed();
  g.dispose();
  paint(ng, (f) => (typeof color === 'function' ? color(quads[f * 2], quads[f * 2 + 1]) : color));
  return ng;
}

// Yüz başına renk (renk, yüz indeksi işlevi ya da sabit)
function paint(g, color) {
  const n = g.attributes.position.count;
  const col = new Float32Array(n * 3);
  for (let f = 0; f < n / 3; f++) {
    tmpC.set(typeof color === 'function' ? color(f) : color);
    for (let k = 0; k < 3; k++) { col[(f * 3 + k) * 3] = tmpC.r; col[(f * 3 + k) * 3 + 1] = tmpC.g; col[(f * 3 + k) * 3 + 2] = tmpC.b; }
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

// Hazır bir geometriyi (kutu, küre…) ortak biçime getir: indekssiz, uv yok, renkli, dönüştürülmüş
function part(geo, color, { pos = [0, 0, 0], rot = [0, 0, 0], scale = [1, 1, 1], flat = false } = {}) {
  let g = geo.index ? geo.toNonIndexed() : geo;
  if (g !== geo) geo.dispose();
  for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
  if (flat || !g.attributes.normal) g.computeVertexNormals();
  const m = new THREE.Matrix4().compose(new THREE.Vector3(...pos), new THREE.Quaternion().setFromEuler(new THREE.Euler(...rot)), new THREE.Vector3(...scale));
  g.applyMatrix4(m);
  return paint(g, color);
}

// İki nokta arasında dikdörtgen kesitli çubuk (bıyık, sap, kordon)
function stick(a, b, w, h, color) {
  const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
  const len = va.distanceTo(vb);
  const g = new THREE.BoxGeometry(w, h, len);
  const mid = va.clone().add(vb).multiplyScalar(0.5);
  const m = new THREE.Matrix4().lookAt(va, vb, new THREE.Vector3(0, 1, 0));
  const q = new THREE.Quaternion().setFromRotationMatrix(m);
  const out = part(g, color);
  out.applyMatrix4(new THREE.Matrix4().compose(mid, q, new THREE.Vector3(1, 1, 1)));
  return out;
}

function merge(parts) {
  const g = mergeGeometries(parts, false);
  for (const p of parts) p.dispose();
  g.computeBoundingBox();
  g.computeBoundingSphere();
  return g;
}

// Belirlenimci küçük gürültü (yün dokusu, örgü)
const hash = (i, j) => { const x = Math.sin(i * 127.1 + j * 311.7) * 43758.5453; return x - Math.floor(x); };
const shadeHex = (hex, f) => { tmpC.set(hex); if (f < 0) tmpC.lerp(new THREE.Color(0, 0, 0), -f); else tmpC.lerp(new THREE.Color(1, 1, 1), f); return '#' + tmpC.getHexString(); };

// ---------- şapkalar ----------
// Başa oturan şapkalar (kind 'cap') aynı taban ölçüsünü paylaşır: alt kenar y≈0.2, yuvarlak kare kesit
// (p=4, yarı genişlik ≥0.198). Bu şapkalarda kafa geometrisinin saçı şapkanın içine bastırılır (fitHair).

// Takke: başa oturan, siperliksiz yuvarlak namaz takkesi; alt kenarda ince örgü bandı
function takke(base, band1, band2, rib) {
  const prof = [[0.19, 0.196], [0.199, 0.205], [0.201, 0.222], [0.201, 0.24], [0.2, 0.256], [0.197, 0.288], [0.19, 0.316], [0.172, 0.344], [0.138, 0.368], [0.086, 0.383], [0, 0.389]];
  return lathe(prof, {
    seg: 20, p: 4,
    color: (i, j) => {
      if (j >= 1 && j <= 3) return (j === 2 ? (i % 2 ? band1 : band2) : (i % 2 ? band2 : band1)); // örgü bandı
      if (j === 0) return band2;
      if (rib && j >= 5 && j <= 8) return (i + j) % 2 ? base : rib; // gövdede ince örgü
      return base;
    },
  });
}

function fes() {
  const red = '#b3222e';
  const prof = [[0.2, 0.196], [0.21, 0.208], [0.21, 0.226], [0.206, 0.3], [0.192, 0.39], [0.176, 0.466], [0.176, 0.466], [0.13, 0.473], [0, 0.475]];
  const body = lathe(prof, { seg: 20, p: 3.4, color: (i, j) => (j <= 1 ? '#8f1a24' : j >= 6 ? '#a61f2a' : red) });
  const dark = '#1f1a26';
  return merge([body,
    part(new THREE.CylinderGeometry(0.022, 0.022, 0.016, 8), dark, { pos: [0, 0.48, 0] }),
    stick([0, 0.482, 0], [0.09, 0.48, -0.09], 0.012, 0.012, dark),
    stick([0.09, 0.48, -0.09], [0.135, 0.455, -0.135], 0.012, 0.012, dark),
    stick([0.135, 0.455, -0.135], [0.15, 0.39, -0.15], 0.012, 0.012, dark),
    part(new THREE.CylinderGeometry(0.016, 0.034, 0.075, 8), dark, { pos: [0.153, 0.35, -0.153], rot: [0.08, 0, -0.08] }),
  ]);
}

// Yemeni: başı, kulakları ve enseyi örten tülbent; üstte küçük çiçek baskısı, ön kenarda renkli oya, ensede düğüm
function yemeni() {
  const base = '#f6efe2', edge = '#e7d9bf';
  const P = 4, SZ = 0.9, a0 = 0.86;
  const top = lathe([[0.25, 0.24], [0.247, 0.29], [0.232, 0.33], [0.196, 0.364], [0.13, 0.388], [0.06, 0.397], [0, 0.399]], { seg: 16, p: P, sz: SZ, color: (i, j) => (j === 0 ? edge : base) });
  const skirt = lathe([[0.268, -0.06], [0.258, 0.03], [0.252, 0.15], [0.25, 0.24]], { seg: 14, p: P, sz: SZ, from: a0, to: TAU - a0, color: (i, j) => (j === 0 ? edge : base) });
  const parts = [top, skirt];
  const e = 2 / P;
  const at = (t, r, y, out = 0) => { const s = Math.sin(t), c = Math.cos(t); return [Math.sign(s) * Math.pow(Math.abs(s), e) * (r + out), y, Math.sign(c) * Math.pow(Math.abs(c), e) * (r + out) * SZ]; };
  // baskı: tepede küçük çiçekler (yassı sekizyüzlü)
  const dots = ['#d9577a', '#5f9e5a', '#d9577a', '#7a6bd0'];
  let n = 0;
  // [y, yarıçap, adet, başlangıç açısı, yay]: tepede iki sıra, arkada (etek) iki sıra
  for (const [y, r, cnt, off, arc] of [[0.3, 0.247, 9, 0.3, TAU], [0.355, 0.21, 5, 0.0, TAU], [0.14, 0.25, 6, 1.56, 3.8]]) {
    for (let k = 0; k < cnt; k++) {
      const t = off + (k / cnt) * arc;
      parts.push(part(new THREE.TetrahedronGeometry(0.024, 0), dots[n++ % dots.length], { pos: at(t, r, y, 0.002), rot: [0, t, 0], scale: [1, 1, 0.35] }));
    }
  }
  // oya: alın kenarı + yan açıklık boyunca renkli boncuklar
  const oya = ['#e63946', '#f2c12e', '#2f9e44', '#f06595', '#2b59c3'];
  for (let k = 0; k <= 8; k++) {
    const t = -a0 + (2 * a0) * (k / 8);
    parts.push(part(new THREE.OctahedronGeometry(0.02, 0), oya[n++ % oya.length], { pos: at(t, 0.252, 0.243), scale: [1, 0.8, 1] }));
  }
  for (const sgn of [-1, 1]) {
    for (let k = 1; k <= 4; k++) {
      parts.push(part(new THREE.OctahedronGeometry(0.018, 0), oya[n++ % oya.length], { pos: at(sgn * a0, 0.262, 0.243 - k * 0.07), scale: [1, 0.8, 1] }));
    }
  }
  // ensede düğüm ve iki uç
  parts.push(part(new THREE.IcosahedronGeometry(0.048, 0), base, { pos: [0, -0.03, -0.235], scale: [1.2, 0.9, 0.8] }));
  parts.push(part(new THREE.ConeGeometry(0.05, 0.13, 4), edge, { pos: [-0.04, -0.1, -0.24], rot: [0.25, 0, 0.2], scale: [1, 1, 0.35] }));
  parts.push(part(new THREE.ConeGeometry(0.05, 0.13, 4), base, { pos: [0.04, -0.105, -0.24], rot: [0.25, 0, -0.25], scale: [1, 1, 0.35] }));
  return merge(parts);
}

// Keçe külah (çoban külahı): uzun, yuvarlak uçlu keçe; kıvrık kenar
function kulah() {
  const felt = '#b08a5f', brim = '#8a6744';
  const prof = [[0.2, 0.194], [0.222, 0.206], [0.224, 0.25], [0.206, 0.262], [0.204, 0.29], [0.18, 0.37], [0.14, 0.46], [0.096, 0.545], [0.054, 0.607], [0.022, 0.64], [0, 0.646]];
  return lathe(prof, { seg: 16, p: 3.4, color: (i, j) => (j <= 2 ? brim : shadeHex(felt, (hash(i, j) - 0.5) * 0.08)) });
}

// Kalpak: kuzu postu, düz tepe; tüy dokusu için hafif tümsekler ve ton farkı
function kalpak() {
  const wool = '#55494a', top = '#3b3036';
  const prof = [[0.205, 0.196], [0.216, 0.226], [0.219, 0.29], [0.222, 0.35], [0.224, 0.41], [0.217, 0.452], [0.198, 0.468], [0.12, 0.474], [0, 0.476]];
  return lathe(prof, {
    seg: 18, p: 3.4,
    wob: (i, j) => (j >= 1 && j <= 5 ? 1 + (hash(i, j) - 0.5) * 0.08 : 1),
    color: (i, j) => (j >= 6 ? top : j === 0 ? shadeHex(wool, -0.12) : wool),
  });
}

// Ponponlu örgü bere: kıvrık manşet (dikey örgü), gövde ve ponpon
function ponponBere() {
  const c1 = '#c94343', c2 = '#a83535', pom = '#f3e9d2';
  const prof = [[0.196, 0.19], [0.208, 0.2], [0.21, 0.262], [0.2, 0.274], [0.197, 0.276], [0.195, 0.31], [0.178, 0.35], [0.142, 0.385], [0.09, 0.41], [0, 0.42]];
  const body = lathe(prof, { seg: 20, p: 4, color: (i, j) => (j <= 2 ? (i % 2 ? c1 : c2) : j === 3 ? c2 : (i % 2 ? c1 : shadeHex(c1, -0.06))) });
  const pp = part(new THREE.IcosahedronGeometry(0.07, 1), (f) => shadeHex(pom, (hash(f, 7) - 0.5) * 0.12), { pos: [0, 0.458, 0] });
  return merge([body, pp]);
}

// Çiçek tacı: başı saran yeşil sarmaşık halka + renkli çiçekler + yapraklar
function cicekTaci() {
  const P = 4, R = 0.2, Y = 0.285;
  const e = 2 / P;
  const at = (t, r) => { const s = Math.sin(t), c = Math.cos(t); return [Math.sign(s) * Math.pow(Math.abs(s), e) * r, Math.sign(c) * Math.pow(Math.abs(c), e) * r]; };
  const parts = [lathe([[R - 0.008, Y - 0.014], [R + 0.012, Y - 0.012], [R + 0.014, Y + 0.012], [R - 0.006, Y + 0.016], [R - 0.008, Y - 0.014]], { seg: 20, p: P, color: '#4f8f3a' })];
  const cols = ['#ff6f91', '#ffffff', '#ffd23f', '#9b7bff', '#ff8c42', '#ffffff', '#ff6f91', '#9b7bff'];
  const N = 8;
  for (let k = 0; k < N; k++) {
    const t = (k / N) * TAU;
    const [x, z] = at(t, R + 0.012);
    parts.push(part(new THREE.IcosahedronGeometry(0.052, 0), cols[k], { pos: [x, Y + 0.012, z], rot: [Math.cos(t) * 0.45, t, -Math.sin(t) * 0.45], scale: [1, 0.4, 1] }));
    parts.push(part(new THREE.OctahedronGeometry(0.022, 0), cols[k] === '#ffd23f' ? '#e2622b' : '#f2b52e', { pos: [x * 1.04, Y + 0.03, z * 1.04] }));
    const t2 = t + Math.PI / N;
    const [x2, z2] = at(t2, R + 0.014);
    parts.push(part(new THREE.OctahedronGeometry(0.03, 0), '#6cb04a', { pos: [x2, Y + 0.004, z2], rot: [0, t2, 0.6], scale: [0.6, 0.35, 1.3] }));
  }
  return merge(parts);
}

// Aşçı başlığı: bant + kabarık, pilili tepe
function asci() {
  const white = '#fbfaf5', band = '#e9e6dc';
  const prof = [[0.198, 0.194], [0.205, 0.206], [0.206, 0.3], [0.206, 0.3], [0.22, 0.31], [0.248, 0.35], [0.262, 0.43], [0.254, 0.5], [0.22, 0.55], [0.155, 0.582], [0.078, 0.596], [0, 0.598]];
  return lathe(prof, {
    seg: 20, p: 3.4,
    wob: (i, j) => (j >= 5 && j <= 8 ? 1 + 0.05 * Math.cos((i / 20) * TAU * 5) : 1),
    color: (i, j) => (j <= 2 ? band : white),
  });
}

// Küçük taç: altın bant, beş sivri uç, uçlarda boncuk, önde taşlar
function tac() {
  const gold = '#f2c12e', dark = '#d39a12';
  const parts = [lathe([[0.15, 0.3], [0.16, 0.296], [0.163, 0.36], [0.154, 0.364], [0.15, 0.3]], { seg: 20, p: 2.2, color: (i, j) => (j === 1 ? dark : gold) })];
  for (let k = 0; k < 5; k++) {
    const t = (k / 5) * TAU;
    const x = Math.sin(t) * 0.155, z = Math.cos(t) * 0.155;
    parts.push(part(new THREE.ConeGeometry(0.045, 0.1, 4), gold, { pos: [x, 0.41, z], rot: [0, t + Math.PI / 4, 0], scale: [1, 1, 0.45] }));
    parts.push(part(new THREE.OctahedronGeometry(0.018, 0), '#fff4c2', { pos: [x * 1.02, 0.468, z * 1.02] }));
  }
  const gems = [['#d7263d', 0], ['#2b59c3', 0.62], ['#2f9e44', -0.62]];
  for (const [c, t] of gems) parts.push(part(new THREE.OctahedronGeometry(0.022, 0), c, { pos: [Math.sin(t) * 0.168, 0.33, Math.cos(t) * 0.168], rot: [0, t, 0], scale: [1, 1, 0.5] }));
  return merge(parts);
}

// ---------- aksesuarlar ----------
// bone: hangi kemiğe takılır ('head' kafa-yerel, 'torso' gövde-yerel: gövde üstü y≈0.167, ön z≈0.134)

// Pala bıyık: ağzın üstünde, uçları hafif kıvrık
function mustache(c, y = 0.084) {
  const parts = [part(new THREE.BoxGeometry(0.06, 0.036, 0.032), c, { pos: [0, y + 0.002, 0.184] })];
  for (const s of [-1, 1]) {
    parts.push(stick([s * 0.024, y + 0.002, 0.184], [s * 0.068, y - 0.006, 0.181], 0.036, 0.034, c));
    parts.push(stick([s * 0.066, y - 0.006, 0.181], [s * 0.098, y + 0.002, 0.177], 0.028, 0.026, c));
    parts.push(stick([s * 0.096, y + 0.001, 0.177], [s * 0.112, y + 0.02, 0.174], 0.02, 0.02, c));
  }
  return parts;
}
// Kral tacı (look.acc 6, yalnızca sahip hesap): geniş altın bant, mor kadife kubbe, 6 uzun uç ve inci/yakut süsleri.
function kralTaci() {
  const gold = '#f7c82a', dark = '#c98d0e', velvet = '#6a2fb5';
  const parts = [
    lathe([[0.165, 0.292], [0.176, 0.288], [0.18, 0.37], [0.168, 0.378], [0.165, 0.292]], { seg: 22, p: 2.2, color: (i, j) => (j === 1 ? dark : gold) }),
    lathe([[0.15, 0.37], [0.148, 0.42], [0.118, 0.47], [0.06, 0.495], [0, 0.5]], { seg: 16, p: 2, color: velvet }),
  ];
  for (let k = 0; k < 6; k++) {
    const t = (k / 6) * TAU;
    const x = Math.sin(t) * 0.17, z = Math.cos(t) * 0.17;
    parts.push(part(new THREE.ConeGeometry(0.052, 0.17, 4), gold, { pos: [x, 0.44, z], rot: [0, t + Math.PI / 4, 0], scale: [1, 1, 0.45] }));
    parts.push(part(new THREE.SphereGeometry(0.02, 6, 5), '#fff8e6', { pos: [x * 1.02, 0.54, z * 1.02] }));
  }
  parts.push(part(new THREE.OctahedronGeometry(0.03, 0), '#d7263d', { pos: [0, 0.335, 0.186], scale: [1, 1.2, 0.55] }));
  parts.push(part(new THREE.OctahedronGeometry(0.024, 0), '#2b59c3', { pos: [-0.12, 0.335, 0.135], rot: [0, -0.8, 0], scale: [1, 1.2, 0.55] }));
  parts.push(part(new THREE.OctahedronGeometry(0.024, 0), '#2b59c3', { pos: [0.12, 0.335, 0.135], rot: [0, 0.8, 0], scale: [1, 1.2, 0.55] }));
  parts.push(part(new THREE.SphereGeometry(0.03, 8, 6), gold, { pos: [0, 0.515, 0] }));
  return merge(parts);
}
function biyik() { return merge(mustache('#3a2417')); }

function gozluk() {
  const c = '#2a2333';
  const parts = [];
  for (const s of [-1, 1]) {
    parts.push(part(new THREE.TorusGeometry(0.046, 0.009, 4, 14), c, { pos: [s * 0.075, 0.15, 0.184] }));
    parts.push(stick([s * 0.121, 0.155, 0.182], [s * 0.178, 0.155, 0.16], 0.012, 0.012, c));
    parts.push(stick([s * 0.178, 0.155, 0.16], [s * 0.18, 0.15, 0.02], 0.01, 0.012, c));
  }
  parts.push(stick([-0.03, 0.158, 0.186], [0.03, 0.158, 0.186], 0.01, 0.012, c));
  // camlar: hafif açık mavi, çok ince
  for (const s of [-1, 1]) parts.push(part(new THREE.CylinderGeometry(0.04, 0.04, 0.004, 12), '#cfe6ff', { pos: [s * 0.075, 0.15, 0.181], rot: [Math.PI / 2, 0, 0] }));
  return merge(parts);
}

// Sakal: alt yüzü örten kısa, köşeli sakal + bıyık (Kenney sakallı derilerle aynı biçim dili)
function sakal() {
  const c = '#4a2f1f';
  return merge([
    part(new THREE.BoxGeometry(0.3, 0.13, 0.056), c, { pos: [0, -0.012, 0.176] }),
    part(new THREE.BoxGeometry(0.2, 0.04, 0.05), c, { pos: [0, -0.094, 0.168] }),
    part(new THREE.BoxGeometry(0.03, 0.16, 0.12), c, { pos: [-0.158, 0.036, 0.126] }),
    part(new THREE.BoxGeometry(0.03, 0.16, 0.12), c, { pos: [0.158, 0.036, 0.126] }),
    ...mustache('#3a2417', 0.09),
  ]);
}

function atki() {
  const a = '#e0a526', b = '#9c2f2f';
  const ring = part(new THREE.TorusGeometry(0.158, 0.042, 5, 16), (f) => (Math.floor(f / 10) % 3 === 0 ? b : a), { pos: [0, 0.178, 0.006], rot: [Math.PI / 2, 0, 0], scale: [1.02, 0.9, 1] });
  const end = part(new THREE.BoxGeometry(0.075, 0.17, 0.028), (f) => (f < 4 || (f >= 8 && f < 12) ? a : a), { pos: [0.075, 0.075, 0.155], rot: [0.12, 0, 0.1] });
  const stripe1 = part(new THREE.BoxGeometry(0.078, 0.022, 0.031), b, { pos: [0.069, 0.11, 0.159], rot: [0.12, 0, 0.1] });
  const stripe2 = part(new THREE.BoxGeometry(0.078, 0.022, 0.031), b, { pos: [0.08, 0.035, 0.15], rot: [0.12, 0, 0.1] });
  const fringe = part(new THREE.BoxGeometry(0.072, 0.02, 0.022), a, { pos: [0.084, -0.016, 0.148], rot: [0.12, 0, 0.1] });
  return merge([ring, end, stripe1, stripe2, fringe]);
}

function papyon() {
  const c = '#b3222e', k = '#8f1a24';
  return merge([
    part(new THREE.BoxGeometry(0.035, 0.035, 0.03), k, { pos: [0, 0.148, 0.142] }),
    part(new THREE.ConeGeometry(0.04, 0.07, 4), c, { pos: [-0.048, 0.148, 0.14], rot: [0, 0, -Math.PI / 2], scale: [1, 1, 0.45] }),
    part(new THREE.ConeGeometry(0.04, 0.07, 4), c, { pos: [0.048, 0.148, 0.14], rot: [0, 0, Math.PI / 2], scale: [1, 1, 0.45] }),
  ]);
}

// ---------- katalog ----------
// Sıra look.hat / look.acc indeksidir (adlar constants.js'te). node: hats.glb düğümü;
// kind 'cap': başa oturan (saç bastırılır), 'top': tepede duran (deri başına TOP_FIT).
const HAT_BUILD = [
  null, null, null, null, null, null, null, null, null,
  { kind: 'cap', build: () => takke('#f7f5ef', '#e3ddcf', '#fbf9f4') },          // Takke (beyaz)
  { kind: 'cap', build: () => takke('#ece0c2', '#d2bd8f', '#f4ebd3', '#e2d3ae') }, // Örgü takke (krem)
  { kind: 'cap', build: fes },
  { kind: 'cap', hair: 'scarf', build: yemeni },
  { kind: 'cap', build: kulah },
  { kind: 'cap', build: kalpak },
  { kind: 'cap', build: ponponBere },
  { kind: 'top', fit: 'wreath', build: cicekTaci },
  { kind: 'cap', build: asci },
  { kind: 'top', fit: 'crown', build: tac },
];
export const HAT_DEFS = HAT_NAMES.map((name, i) => ({ name, node: HAT_NODES[i] || null, ...(HAT_BUILD[i] || {}) }));
export const HAT_COUNT = HAT_DEFS.length;

const ACC_BUILD = [null,
  { bone: 'head', build: biyik },
  { bone: 'head', build: gozluk },
  { bone: 'head', build: sakal },
  { bone: 'torso', build: atki },
  { bone: 'torso', build: papyon },
  { bone: 'head', build: kralTaci },   // 6: yalnızca sahip hesap (sunucu doğrular)
];
export const ACC_DEFS = ACC_NAMES.map((name, i) => ({ name, ...(ACC_BUILD[i] || {}) }));
export const ACC_COUNT = ACC_DEFS.length;

// Tepede duran şapkalar (taç, çiçek tacı) için deri başına [y kayması, yatay ölçek]: gür saçlı
// derilerde halka saçın dışına oturur.
const TOP_FIT = {
  wreath: [[0, 1], [0, 1.1], [-0.005, 1], [0.01, 1.06], [0, 1], [0.01, 1.06], [0, 1.02], [0, 1.06], [0.02, 1], [0, 1.1], [0, 1], [0, 1.06]],
  crown: [[0, 1], [0, 1], [-0.01, 1], [0.02, 1], [0, 1], [0.02, 1], [0, 1], [0.012, 1], [0.03, 1], [0, 1.04], [0.004, 1], [0.012, 1]],
};

// Başa oturan şapkalarda saç (topuz, kabarık saç, diken saç) şapkanın içinden taşmasın: kafa
// kemiğine bağlı köşeler bu profilin (y -> en büyük yuvarlak-kare yarıçapı, p=4) içine bastırılır.
// 'cap': en dar başa oturan şapkanın (takke) iç yüzeyi, y≥0.205 (altındaki saç olduğu gibi kalır).
// 'scarf': yemeni; ense ve yanlar da örtülü olduğundan çene hizasına kadar (at kuyruğu, yan saç içeri),
// yüz açıklığı hariç.
const HAIR = {
  cap: { y0: 0.205, sz: 1, prof: [[0.188, 0.205], [0.19, 0.288], [0.18, 0.31], [0.156, 0.336], [0.114, 0.355], [0.056, 0.364], [0.0, 0.366]] },
  scarf: { y0: -0.05, sz: 0.88, open: 0.95, openY: 0.235, prof: [[0.236, -0.05], [0.236, 0.24], [0.232, 0.288], [0.215, 0.33], [0.18, 0.362], [0.11, 0.384], [0.0, 0.392]] },
};
function hairMaxR(prof, y) {
  for (let k = 1; k < prof.length; k++) {
    const [r1, y1] = prof[k];
    if (y <= y1) { const [r0, y0] = prof[k - 1]; return r0 + (r1 - r0) * ((y - y0) / (y1 - y0)); }
  }
  return 0;
}
const capped = new Map(); // 'deri|biçim' -> bastırılmış saçlı geometri (bir kez üretilir, paylaşılır)
function cappedGeometry(skin, mode, src) {
  const key = skin + '|' + mode;
  if (capped.has(key)) return capped.get(key);
  const H = HAIR[mode];
  let out = null;
  try {
    const g = A.get(`characters/villager-${String(skin).padStart(2, '0')}.glb`);
    let tm = null;
    g.scene.traverse((o) => { if (o.isSkinnedMesh && o.geometry === src) tm = o; });
    const hi = tm ? tm.skeleton.bones.findIndex((b) => b.name === 'head') : -1;
    if (hi >= 0) {
      // örgü uzayı -> kafa kemiği yerel uzayı (bind pozu) ve geri
      const toHead = tm.skeleton.boneInverses[hi].clone().multiply(tm.bindMatrix);
      const fromHead = toHead.clone().invert();
      out = src.clone();
      const pos = out.attributes.position, si = out.attributes.skinIndex, sw = out.attributes.skinWeight;
      const v = new THREE.Vector3();
      const top = H.prof[H.prof.length - 1][1];
      for (let i = 0; i < pos.count; i++) {
        let w = 0;
        for (let k = 0; k < 4; k++) if (si.getComponent(i, k) === hi) w += sw.getComponent(i, k);
        if (w < 0.5) continue;
        v.fromBufferAttribute(pos, i).applyMatrix4(toHead);
        if (v.y <= H.y0) continue;
        if (H.open && v.y < H.openY && Math.abs(Math.atan2(v.x, v.z)) < H.open) continue; // yüz açıklığı (sakal, yanak)
        if (v.y > top - 0.004) v.y = top - 0.004;
        const n = Math.pow(Math.pow(Math.abs(v.x), 4) + Math.pow(Math.abs(v.z) / H.sz, 4), 0.25);
        const rm = hairMaxR(H.prof, v.y);
        if (n <= rm || n < 1e-6) continue;
        v.x *= rm / n; v.z *= rm / n;
        v.applyMatrix4(fromHead);
        pos.setXYZ(i, v.x, v.y, v.z); // normaller kalır: bu köşeler şapkanın altında
      }
    }
  } catch (e) { console.warn('[VKWorld] saç bastırılamadı', skin, e); out = null; }
  capped.set(key, out);
  return out;
}

// Başa oturan bir şapka seçildiyse karakter klonundaki birleşik gövde/kafa ağına bastırılmış saçlı
// geometriyi tak (paylaşılan önbellekten; klonun kendi kopyası yok).
export function fitHair(model, hatIndex, skin) {
  const def = HAT_DEFS[hatIndex | 0];
  if (!def || def.kind !== 'cap') return;
  model.traverse((o) => {
    if (!o.isSkinnedMesh || o.material.name !== 'villager') return;
    const g = cappedGeometry(clamp(skin | 0, 0, 11), def.hair || 'cap', o.geometry);
    if (g) o.geometry = g;
  });
}

// ---------- önbellek ----------
let mat = null;
const geos = new Map(); // anahtar -> geometri (bir kez üretilir, tüm karakterler paylaşır)

function hatMaterial() {
  if (!mat) {
    mat = new THREE.MeshLambertMaterial({ name: 'vkw-hat', vertexColors: true, side: THREE.DoubleSide });
  }
  return mat;
}

function geoFor(key, build) {
  let g = geos.get(key);
  if (!g) {
    try { g = build(); g.computeBoundingBox(); g.computeBoundingSphere(); } catch (e) { console.warn('[VKWorld] şapka üretilemedi', key, e); g = null; }
    geos.set(key, g);
  }
  return g;
}

// Şapka nesnesi (kafa kemiğine eklenecek) ve kafa-yerel tepe yüksekliği. Yoksa null.
export function makeHat(index, skin = 0) {
  const i = index | 0;
  const def = HAT_DEFS[i];
  if (!def || i === 0) return null;
  const s = clamp(skin | 0, 0, 11);
  if (def.node) {
    if (!A.has('hats/hats.glb')) return null;
    const tpl = A.get('hats/hats.glb').scene.getObjectByName(def.node);
    if (!tpl) return null;
    const hat = tpl.clone();
    const y = HAT_Y_OFFSET[s] || 0;
    hat.position.set(0, y, 0);
    if (tpl.userData.vkwTop == null) tpl.userData.vkwTop = new THREE.Box3().setFromObject(tpl).max.y;
    hat.userData.top = tpl.userData.vkwTop + y;
    return hat;
  }
  const g = geoFor('h' + i, def.build);
  if (!g) return null;
  const hat = new THREE.Mesh(g, hatMaterial());
  hat.name = 'hat-' + i;
  const [dy, k] = def.kind === 'top' ? TOP_FIT[def.fit][s] : [0, 1];
  hat.position.set(0, dy, 0);
  hat.scale.set(k, 1, k);
  hat.userData.top = g.boundingBox.max.y + dy;
  hat.userData.cap = def.kind === 'cap';
  return hat;
}

// Aksesuar nesnesi ve takılacağı kemik adı. Yoksa null.
export function makeAcc(index) {
  const i = index | 0;
  const def = ACC_DEFS[i];
  if (!def || i === 0) return null;
  const g = geoFor('a' + i, def.build);
  if (!g) return null;
  const m = new THREE.Mesh(g, hatMaterial());
  m.name = 'acc-' + i;
  return { obj: m, bone: def.bone };
}

// Paylaşılan GPU kaynaklarını bırak (nesneler bozulmaz; sonraki çizimde yeniden yüklenir)
export function releaseHatsGPU() {
  for (const g of geos.values()) if (g) g.dispose();
  for (const g of capped.values()) if (g) g.dispose();
  if (mat) mat.dispose();
}
