// Prosedürel ev görünümleri (look.house 5..11): normal evin ÜSTÜNE eklenen düşük poligonlu parçalar.
// Saray (5) palace.js'ten gelir; 6..11 burada: Değirmen, Cumbalı ev, Osmanlı konağı, Demirci, Çeşmeli taş ev,
// Taç kapılı taş ev (Selçuklu taç kapısı). Ev ankrajları (kapı, pencere, ayak izi, yol) DEĞİŞMEZ: eklentiler kapıyı ve
// pencereyi kapatmaz, ön cepheden en fazla ~0.7 m taşar.
// Malzemeler paylaşılır (village.js her biri için TEK toplu ağ kurar): 'deco' köşe renkli Lambert, 'glow' geceleri
// parlayan köşe renkli Basic (pencere kafesi, ocak ateşi, çini yıldız), palace'ın 'gold'/'pbody'si. PointLight/bloom yok.
// Dönen parça (değirmen kanatları) 'spin' ile işaretlenir: village her karede yalnızca o örneklerin matrisini yazar.
// Süsler yalnızca geometrik/bitkisel (sekiz köşeli yıldız, lale, geçme bordür); dini yapı/simge yok.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { buildPalace, goldMaterial, bodyMaterial, goldNightIntensity, bodyNightIntensity } from './palace.js';

export const MANOR_FIRST = 6;
const tmpM = new THREE.Matrix4();
const col = new THREE.Color();

function add(list, geo, x, y, z, hex, o = {}) {
  let g = geo.index ? geo : geo;
  for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
  if (!g.index) { const idx = []; for (let i = 0; i < g.attributes.position.count; i++) idx.push(i); g.setIndex(idx); }
  tmpM.compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(o.rx || 0, o.ry || 0, o.rz || 0, o.order || 'XYZ')), new THREE.Vector3(o.sx || 1, o.sy || 1, o.sz || 1));
  g.applyMatrix4(tmpM);
  col.set(hex);
  const n = g.attributes.position.count, c = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b; }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  list.push(g);
  return g;
}
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cyl = (rt, rb, h, s = 8, open = false) => new THREE.CylinderGeometry(rt, rb, h, s, 1, open);
const cone = (r, h, s = 8) => new THREE.ConeGeometry(r, h, s);
function merge(list) {
  if (!list.length) return null;
  const g = mergeGeometries(list, false);
  list.forEach((x) => x.dispose());
  g.computeBoundingSphere();
  return g;
}
// İki nokta arası kare kesitli çubuk (kafes, kiriş)
function beam(list, a, b, w, hex) {
  const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
  const g = box(w, w, va.distanceTo(vb));
  const q = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(va, vb, new THREE.Vector3(0, 1, 0)));
  const mid = va.clone().add(vb).multiplyScalar(0.5);
  for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
  g.applyMatrix4(new THREE.Matrix4().compose(mid, q, new THREE.Vector3(1, 1, 1)));
  return add(list, g, 0, 0, 0, hex);
}
// Sekiz köşeli yıldız (iki çakışık kare) — z'ye bakan, d kalınlıkta
function star8(list, x, y, z, r, d, hex, inner) {
  for (const a of [0, Math.PI / 4]) add(list, box(r * 1.414, r * 1.414, d), x, y, z, hex, { rz: a });
  if (inner) add(list, cyl(r * 0.45, r * 0.45, d * 1.4, 8), x, y, z + d * 0.2, inner, { rx: Math.PI / 2 });
}

// ---------- 6 Değirmen: ön alınlıkta dönen dört kanat, göbek, ambar kapağı, un çuvalları ----------
function degirmen(I) {
  const deco = [], spin = [], glow = [];
  const fz = I.front, H = I.height;
  const hubY = H - 1.0, hubZ = fz + 0.42;
  // göbek mili (duvardan çıkan kiriş) ve göbek
  add(deco, cyl(0.1, 0.12, 0.55, 6), 0, hubY, fz + 0.18, '#5a3a22', { rx: Math.PI / 2 });
  add(spin, cyl(0.2, 0.2, 0.16, 8), 0, 0, 0, '#6b4528', { rx: Math.PI / 2 });
  // kanatlar: kiriş + çıtalı yelken bezi
  for (let k = 0; k < 4; k++) {
    const a = k * Math.PI / 2 + Math.PI / 4;
    const L = 1.75;
    const dir = [Math.cos(a), Math.sin(a)];
    const g = box(0.08, L, 0.06); g.translate(0, L / 2 + 0.12, 0);
    add(spin, g, 0, 0, 0.02, '#5a3a22', { rz: a - Math.PI / 2 });
    const sail = box(0.44, L - 0.4, 0.025); sail.translate(0.26, (L - 0.4) / 2 + 0.38, 0);
    add(spin, sail, 0, 0, 0.0, k % 2 ? '#fbf3e0' : '#f1e4c6', { rz: a - Math.PI / 2 });
    for (const t of [0.6, 1.05, 1.5]) { const s = box(0.5, 0.03, 0.05); s.translate(0.24, t, 0.02); add(spin, s, 0, 0, 0, '#5a3a22', { rz: a - Math.PI / 2 }); }
    void dir;
  }
  // ambar kapağı (üst katta, kanatların altında kalmayan yan) ve vinç kirişi
  add(deco, box(0.62, 0.7, 0.08), -1.25, H - 2.55, fz + 0.03, '#7a4e2c');
  // un çuvalları (kapının solunda, pencerenin altında değil)
  for (const [x, z, s] of [[-0.1, fz + 0.35, 1], [0.32, fz + 0.32, 0.85], [0.1, fz + 0.3, 0.8]]) {
    add(deco, new THREE.IcosahedronGeometry(0.26 * s, 0), x, 0.24 * s + (x === 0.1 ? 0.36 : 0), z, '#e9dcc0', { sy: 1.2 });
  }
  // değirmen taşı (kapı yanında duvara dayalı)
  add(deco, cyl(0.42, 0.42, 0.16, 10), I.hx - 0.55, 0.42, fz + 0.12, '#9c958a', { rx: Math.PI / 2 });
  add(deco, cyl(0.08, 0.08, 0.18, 6), I.hx - 0.55, 0.42, fz + 0.12, '#4a4440', { rx: Math.PI / 2 });
  void glow;
  return [{ geo: merge(deco), mat: 'deco' }, { geo: merge(spin), mat: 'deco', spin: { pivot: [0, hubY, hubZ], speed: 0.7 } }];
}

// Cumba: üst katta çıkma; kafesli pencereler (gece içi yanar), payandalar, kiremit örtü
function cumba(deco, glow, cx, y0, fz, w, h, d) {
  const wood = '#6b4528', plaster = '#f7f1e3', roof = '#a8432f';
  add(deco, box(w, 0.14, d + 0.05), cx, y0, fz + d / 2, wood);                         // döşeme
  add(deco, box(w, 0.12, d + 0.1), cx, y0 + h, fz + d / 2, wood);                       // tavan kirişi
  for (const s of [-1, 1]) add(deco, box(0.1, h, 0.1), cx + s * (w / 2 - 0.05), y0 + h / 2, fz + d - 0.05, wood);   // köşe dikmeleri
  for (const s of [-1, 1]) add(deco, box(0.06, h * 0.32, d), cx + s * (w / 2 - 0.04), y0 + 0.12 + h * 0.16, fz + d / 2, plaster);   // yan alt dolgu
  add(deco, box(w - 0.12, h * 0.3, 0.06), cx, y0 + 0.08 + h * 0.15, fz + d - 0.02, plaster);   // ön alt dolgu (kafes altı)
  // camlı iç (gece yanar) ve kafes ızgara
  const gy0 = y0 + 0.14 + h * 0.3, gh = h - 0.26 - h * 0.3;
  add(glow, box(w - 0.18, gh, 0.03), cx, gy0 + gh / 2, fz + d - 0.06, '#ffd27a');
  for (const s of [-1, 1]) add(glow, box(0.03, gh, d - 0.2), cx + s * (w / 2 - 0.07), gy0 + gh / 2, fz + d / 2, '#ffd27a');
  const n = 4;
  for (let k = 1; k < n; k++) beam(deco, [cx - w / 2 + (w * k) / n, gy0, fz + d - 0.03], [cx - w / 2 + (w * k) / n, gy0 + gh, fz + d - 0.03], 0.045, '#4a2f1f');
  for (let k = 1; k < 3; k++) beam(deco, [cx - w / 2 + 0.06, gy0 + (gh * k) / 3, fz + d - 0.03], [cx + w / 2 - 0.06, gy0 + (gh * k) / 3, fz + d - 0.03], 0.045, '#4a2f1f');
  // payandalar (eğri destekler)
  for (const s of [-1, 1]) beam(deco, [cx + s * (w / 2 - 0.15), y0 - 0.65, fz + 0.02], [cx + s * (w / 2 - 0.15), y0 - 0.05, fz + d - 0.08], 0.09, wood);
  // dört yana eğimli kiremit örtü
  add(deco, cone((w * 0.78), 0.42, 4), cx, y0 + h + 0.27, fz + d / 2, roof, { ry: Math.PI / 4, sz: (d + 0.3) / (w * 1.1), sx: 1 });
}

// ---------- 7 Cumbalı ev: beyaz sıvalı, ahşap çatkılı; üst katta kafesli cumba ----------
function cumbali(I) {
  const deco = [], glow = [];
  const fz = I.front, H = I.height;
  const wallTop = H * 0.5;
  cumba(deco, glow, -1.15, 2.35, fz, 1.9, 1.15, 0.62);
  // bağdadi ahşap çatkı: cephede yatay hatıl ve çaprazlar (pencere/kapı dışında)
  const wood = '#5d3b22';
  add(deco, box(I.hx * 2 - 0.1, 0.1, 0.06), 0, 2.28, fz + 0.03, wood);
  beam(deco, [0.25, 0.25, fz + 0.03], [0.55, 2.2, fz + 0.03], 0.07, wood);
  beam(deco, [2.05, 0.25, fz + 0.03], [I.hx - 0.15, 2.2, fz + 0.03], 0.07, wood);
  for (const s of [-1, 1]) add(deco, box(0.1, wallTop + 0.6, 0.1), s * (I.hx - 0.06), (wallTop + 0.6) / 2, fz + 0.03, wood);
  // saçak altı kirişleri (kısa dişler)
  for (let k = 0; k < 7; k++) add(deco, box(0.07, 0.07, 0.36), -I.hx + 0.35 + k * ((I.hx * 2 - 0.7) / 6), wallTop + 0.62, fz + 0.12, wood);
  // kapı üstü sundurma (küçük saçak)
  add(deco, box(1.3, 0.07, 0.6), I.door[0], 2.45, fz + 0.3, '#a8432f', { rx: 0.25 });
  for (const s of [-1, 1]) beam(deco, [I.door[0] + s * 0.55, 1.95, fz + 0.02], [I.door[0] + s * 0.55, 2.35, fz + 0.5], 0.06, wood);
  return [{ geo: merge(deco), mat: 'deco' }, { geo: merge(glow), mat: 'glow' }];
}

// ---------- 8 Osmanlı konağı: aşı boyalı; iki cumba, geniş saçak, kapı önünde sütunlu sundurma, servi ----------
function konak(I) {
  const deco = [], glow = [];
  const fz = I.front, hx = I.hx, hz = I.hz;
  cumba(deco, glow, -1.2, 2.3, fz, 1.5, 1.1, 0.55);
  cumba(deco, glow, 1.25, 2.55, fz, 1.2, 0.9, 0.45);
  // kat silmesi (iki katı ayıran ahşap kuşak) ve köşe dikmeleri
  add(deco, box(hx * 2 + 0.04, 0.12, 0.08), 0, 2.2, fz + 0.04, '#7a5232');
  for (const s of [-1, 1]) add(deco, box(0.12, 2.2, 0.12), s * (hx - 0.02), 1.1, fz + 0.02, '#7a5232');
  // kapı önü: iki ince sütun + küçük üçgen alınlık
  for (const s of [-1, 1]) add(deco, cyl(0.07, 0.08, 2.1, 6), I.door[0] + s * 0.62, 1.05, fz + 0.55, '#efe6d0');
  add(deco, box(1.5, 0.12, 0.7), I.door[0], 2.14, fz + 0.32, '#efe6d0');
  add(deco, cone(0.9, 0.38, 3), I.door[0], 2.38, fz + 0.62, '#9a3a2c', { rx: Math.PI / 2, rz: 0, sz: 0.25 });
  // köşede servi (ayak izinin içinde, arka köşe)
  add(deco, cone(0.42, 3.4, 6), -hx + 0.45, 2.1, -hz + 0.45, '#2f5a3a');
  add(deco, cyl(0.08, 0.1, 0.5, 5), -hx + 0.45, 0.25, -hz + 0.45, '#4a3020');
  return [{ geo: merge(deco), mat: 'deco' }, { geo: merge(glow), mat: 'glow' }];
}

// ---------- 9 Demirci: çatıda taş ocak bacası, önde sundurma altında ocak (gece kor ışıltısı), örs, nal ----------
function demirci(I) {
  const deco = [], glow = [];
  const fz = I.front, H = I.height, hx = I.hx;
  // taş baca (arka sağ köşe, çatıdan yükselir) ve ağzında kor
  const bx = hx - 0.7, bz = -I.hz + 0.7;
  add(deco, box(0.75, H + 0.9, 0.75), bx, (H + 0.9) / 2, bz, '#6e6862');
  add(deco, box(0.9, 0.16, 0.9), bx, H + 0.95, bz, '#57524d');
  add(glow, box(0.5, 0.05, 0.5), bx, H + 1.04, bz, '#ff7a1a');
  // sundurma: iki direk + eğimli tahta örtü (sol önde, pencerenin solunda; kapı yolunu kapatmaz)
  const sx = -hx + 0.75, sz = fz + 0.35, wood = '#5a3a22';
  for (const s of [-1, 1]) add(deco, box(0.1, 2.1, 0.1), sx + s * 0.6, 1.05, sz + 0.3, wood);
  add(deco, box(1.5, 0.08, 1.0), sx, 2.2, sz, '#4b4440', { rx: -0.22 });
  // ocak: taş gövde + kor (gece parlar) + körük
  add(deco, box(0.95, 0.75, 0.6), sx, 0.38, sz, '#7d7670');
  add(glow, box(0.7, 0.06, 0.4), sx, 0.78, sz, '#ff6a1a');
  add(glow, new THREE.IcosahedronGeometry(0.12, 0), sx + 0.15, 0.84, sz, '#ffb347');
  add(deco, box(0.38, 0.22, 0.3), sx - 0.62, 0.55, sz, '#6b4528', { rz: 0.3 });
  // örs: kütük + örs gövdesi + boynuz
  const ax = -0.15, az = fz + 0.55;
  add(deco, cyl(0.22, 0.25, 0.5, 7), ax, 0.25, az, '#6b4528');
  add(deco, box(0.42, 0.14, 0.2), ax, 0.57, az, '#3b3b46');
  add(deco, box(0.22, 0.12, 0.14), ax, 0.48, az, '#33333c');
  add(deco, cone(0.08, 0.24, 5), ax + 0.3, 0.6, az, '#3b3b46', { rz: -Math.PI / 2 });
  // kapı üstünde nal (U biçimli üç çubuk)
  const nx = I.door[0], ny = 2.5, nz = fz + 0.05;
  beam(deco, [nx - 0.13, ny - 0.12, nz], [nx - 0.13, ny + 0.1, nz], 0.05, '#4a4a52');
  beam(deco, [nx + 0.13, ny - 0.12, nz], [nx + 0.13, ny + 0.1, nz], 0.05, '#4a4a52');
  beam(deco, [nx - 0.13, ny - 0.12, nz], [nx + 0.13, ny - 0.12, nz], 0.05, '#4a4a52');
  // duvara dayalı çekiç ve maşa
  beam(deco, [0.42, 0.05, fz + 0.12], [0.5, 0.95, fz + 0.06], 0.05, '#6b4528');
  add(deco, box(0.2, 0.1, 0.1), 0.5, 0.98, fz + 0.06, '#3b3b46');
  return [{ geo: merge(deco), mat: 'deco' }, { geo: merge(glow), mat: 'glow' }];
}

// ---------- 10 Çeşmeli taş ev: sol yan duvarda mermer çeşme (sivri kemerli niş, çini bordür, yalak), saksılar ----------
function cesmeli(I) {
  const deco = [], glow = [];
  const hx = I.hx, wx = -hx - 0.06, cz = 0.35;
  const marble = '#ece7dc', marble2 = '#d8d1c3', cini = '#1f8fa0', cini2 = '#2a5fa8';
  // ayna taşı (duvardan hafif taşan pano)
  add(deco, box(0.22, 2.0, 1.5), wx - 0.05, 1.0, cz, marble);
  // sivri kemerli niş (iki eğik kiriş + koyu iç)
  add(deco, box(0.06, 1.05, 0.8), wx - 0.17, 0.95, cz, '#b9b2a4');
  beam(deco, [wx - 0.18, 1.45, cz - 0.42], [wx - 0.18, 1.78, cz + 0.02], 0.09, marble2);
  beam(deco, [wx - 0.18, 1.45, cz + 0.42], [wx - 0.18, 1.78, cz - 0.02], 0.09, marble2);
  // çini bordür (ayna taşının çevresinde dama dama mavi-turkuaz)
  for (let k = 0; k < 7; k++) add(deco, box(0.04, 0.16, 0.2), wx - 0.17, 1.92, cz - 0.6 + k * 0.2, k % 2 ? cini : cini2);
  // ortada sekiz köşeli yıldız (çini) — geceleri hafif ışır
  const sg = [];
  star8(sg, 0, 0, 0, 0.13, 0.03, cini, '#f2c75a');
  for (const g of sg) { g.rotateY(-Math.PI / 2); g.translate(wx - 0.19, 1.6, cz); glow.push(g); }
  // lüle (musluk) ve yalak (taş tekne) + su
  add(deco, cyl(0.03, 0.03, 0.22, 6), wx - 0.25, 0.85, cz, '#c9a24a', { rz: Math.PI / 2 });
  add(deco, box(0.5, 0.36, 1.2), wx - 0.35, 0.18, cz, marble2);
  add(deco, box(0.38, 0.04, 1.06), wx - 0.35, 0.34, cz, '#4fb3c9');
  // saçak (üstte küçük taş örtü)
  add(deco, box(0.42, 0.1, 1.7), wx - 0.12, 2.04, cz, marble2);
  // kapı yanında iki fesleğen saksısı
  for (const s of [-1, 1]) {
    add(deco, cyl(0.16, 0.12, 0.28, 7), I.door[0] + s * 0.78, 0.14, I.front + 0.28, '#b5562f');
    add(deco, new THREE.IcosahedronGeometry(0.2, 0), I.door[0] + s * 0.78, 0.42, I.front + 0.28, '#3f8a45');
  }
  return [{ geo: merge(deco), mat: 'deco' }, { geo: merge(glow), mat: 'glow' }];
}

// ---------- 11 Taç kapılı taş ev: kapının çevresinde yüksek taş taç kapı (Selçuklu), sivri kemer, mukarnas basamakları,
// geçme bordür ve sekiz köşeli yıldız madalyonlar ----------
function tacKapi(I) {
  const deco = [], glow = [];
  const fz = I.front, dx = I.door[0];
  const stone = '#d9b98c', stone2 = '#c4a273', dark = '#8a6a48', tq = '#1f8fa0';
  const W = 2.2, Hh = 3.7, D = 0.32;
  // iki yan pilon ve üst kuşak (kapı açıklığı serbest: iç genişlik ~1.3 m)
  for (const s of [-1, 1]) add(deco, box(0.42, Hh, D), dx + s * (W / 2 - 0.21), Hh / 2, fz + D / 2, stone);
  add(deco, box(W, 0.5, D), dx, Hh - 0.25, fz + D / 2, stone);
  // geçme bordür: pilonların önünde dama dizisi
  for (const s of [-1, 1]) for (let k = 0; k < 8; k++) add(deco, box(0.12, 0.3, 0.05), dx + s * (W / 2 - 0.08), 0.35 + k * 0.42, fz + D + 0.02, k % 2 ? stone2 : dark);
  for (let k = 0; k < 7; k++) add(deco, box(0.3, 0.12, 0.05), dx - 0.9 + k * 0.3, Hh - 0.08, fz + D + 0.02, k % 2 ? stone2 : dark);
  // sivri kemer: iki eğik taş + mukarnas (kademeli küçük bloklar) kemer içinde
  beam(deco, [dx - 0.66, 2.35, fz + D - 0.05], [dx + 0.02, 3.2, fz + D - 0.05], 0.18, stone2);
  beam(deco, [dx + 0.66, 2.35, fz + D - 0.05], [dx - 0.02, 3.2, fz + D - 0.05], 0.18, stone2);
  for (let r = 0; r < 3; r++) for (let k = 0; k <= r; k++) {
    add(deco, box(0.2, 0.14, 0.16 + r * 0.04), dx - r * 0.12 + k * 0.24, 3.0 - r * 0.16, fz + 0.12, r % 2 ? stone : stone2);
  }
  // kemer üstünde yıldız madalyonlar (çini turkuaz + altın göbek) — geceleri hafif ışır
  for (const [x, y, r] of [[dx, Hh - 0.25, 0.2], [dx - 0.78, 2.9, 0.13], [dx + 0.78, 2.9, 0.13]]) star8(glow, x, y, fz + D + 0.03, r, 0.04, tq, '#f2c75a');
  // basamak
  add(deco, box(W - 0.2, 0.12, 0.5), dx, 0.06, fz + 0.35, stone2);
  return [{ geo: merge(deco), mat: 'deco' }, { geo: merge(glow), mat: 'glow' }];
}

const BUILD = { 6: degirmen, 7: cumbali, 8: konak, 9: demirci, 10: cesmeli, 11: tacKapi };

// skin: look.house; info: HOUSE_INFO[type]. Dönüş: { parts: [{ geo, mat, spin? }] } ya da null.
export function buildManor(skin, info) {
  skin |= 0;
  if (skin === 5) {
    const pal = buildPalace(info);
    return { parts: [{ geo: pal.gold, mat: 'gold' }, { geo: pal.body, mat: 'pbody' }] };
  }
  const f = BUILD[skin];
  if (!f) return null;
  return { parts: f(info).filter((p) => p.geo) };
}
export const hasManor = (skin) => (skin | 0) === 5 || !!BUILD[skin | 0];

export function manorMaterials() {
  const deco = new THREE.MeshLambertMaterial({ name: 'manor-deco', vertexColors: true, emissive: '#2a2440', emissiveIntensity: 0.1 });
  const glow = new THREE.MeshBasicMaterial({ name: 'manor-glow', vertexColors: true, fog: true });
  return { deco, glow, gold: goldMaterial(), pbody: bodyMaterial() };
}
// Gece/gündüz: 0 gündüz .. 1 gece. Malzeme listeleri (toplu ağ kopyaları) için de çağrılabilir.
export function setManorNight(mats, night) {
  if (mats.gold) mats.gold.emissiveIntensity = goldNightIntensity(night);
  if (mats.pbody) mats.pbody.emissiveIntensity = bodyNightIntensity(night);
  if (mats.deco) mats.deco.emissiveIntensity = 0.1 + 0.35 * night;
  if (mats.glow) mats.glow.color.setScalar(0.62 + 0.9 * night);
}
