// Saray evi (look.house = 5, yalnızca sahip hesaba özel): normal evin üstüne PROSEDÜREL eklemeler.
// 4 köşe kulesi (koni çatılı, altın halkalı, flamalı), çatıda yüksek kule + altın soğan kubbe, kemerli altın giriş,
// kırmızı hali. Ev ankrajları (kapı/pencere/ayak izi) değişmez: kuleler ev ayak izinin içinde kalır.
// İki geometri üretilir: altın parçalar ('palace-gold', geceleri emissive) ve köşe rengi taşıyan gövde parçaları ('palace-body').
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const GOLD = '#f7c82a';
// Altın malzeme: tek paylaşılan Lambert; gece emissive artar (village.update kare başı bir kez günceller)
export function goldMaterial() {
  const m = new THREE.MeshLambertMaterial({ color: GOLD, emissive: GOLD, emissiveIntensity: 0.15 });
  m.name = 'palace-gold';
  return m;
}
export function bodyMaterial() {
  const m = new THREE.MeshLambertMaterial({ color: '#ffffff', vertexColors: true, emissive: '#6a58a0', emissiveIntensity: 0.12 });
  m.name = 'palace-body';
  return m;
}
export const goldNightIntensity = (night) => 0.15 + 0.55 * night;
export const bodyNightIntensity = (night) => 0.12 + 0.5 * night;   // gövde (taş/çatı) geceleri de seçilsin

const tmp = new THREE.Matrix4();
const col = new THREE.Color();
function part(list, geo, x, y, z, hex, opt = {}) {
  const g = geo;
  tmp.compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(opt.rx || 0, opt.ry || 0, opt.rz || 0)), new THREE.Vector3(opt.sx || 1, opt.sy || 1, opt.sz || 1));
  g.applyMatrix4(tmp);
  if (hex) {
    col.set(hex);
    const n = g.attributes.position.count, c = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b; }
    g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  }
  list.push(g);
}
// açık uçlu silindir (kapaklar görünmez: üçgen tasarrufu)
const cyl = (rt, rb, h, s = 8) => new THREE.CylinderGeometry(rt, rb, h, s, 1, true);
const ball = (r) => mergeVertices(new THREE.IcosahedronGeometry(r, 0));   // 20 üçgen, indeksli
const merge = (list) => { const g = mergeGeometries(list, false); list.forEach((x) => x.dispose()); return g; };

// Soğan kubbe profili (r, y)
function onion(base, h, r) {
  const pts = [[0.001, 0], [0.86, 0.04], [1.0, 0.2], [1.02, 0.42], [0.86, 0.7], [0.5, 0.92], [0.2, 0.99], [0.001, 1.0]]
    .map(([a, b]) => new THREE.Vector2(a * r, b * h));
  const g = new THREE.LatheGeometry(pts, 12);
  g.translate(0, base, 0);
  return g;
}

// Pennant (flama): ince, yatık koni; ucu +x'e bakar
function pennant(len, wid) {
  const g = new THREE.ConeGeometry(wid, len, 3);
  g.rotateZ(-Math.PI / 2); g.translate(len / 2, 0, 0); g.scale(1, 1, 0.18);
  return g;
}

export function buildPalace(info) {
  const hx = info.hx, hz = info.hz, H = info.height, fz = info.front, dx = info.door[0];
  const gold = [], body = [];
  const STONE = '#efe3cf', ROOF = '#7b3fc4', ROOF2 = '#5e2ea0', RED = '#d4213d';
  const tr = 0.56;
  // 4 köşe kulesi
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const x = sx * (hx - tr), z = sz * (hz - tr);
    part(body, cyl(tr, tr * 1.08, 4.5, 8), x, 2.25, z, STONE);
      part(gold, cyl(tr * 1.12, tr * 1.12, 0.2, 8), x, 4.05, z);                         // altın halka
    part(gold, cyl(tr * 1.18, tr * 1.18, 0.14, 8), x, 4.56, z);                        // saçak halkası
    part(body, new THREE.ConeGeometry(tr * 1.42, 2.1, 8, 1, true), x, 4.63 + 1.05, z, sx * sz > 0 ? ROOF : ROOF2);
    part(gold, ball(0.16), x, 6.82, z);
    part(gold, cyl(0.025, 0.025, 0.9, 5), x, 7.25, z);
    part(body, pennant(0.62, 0.17), x, 7.5, z, RED, { ry: sx > 0 ? 0 : Math.PI });
    // dışa bakan iki ok yuvası (altın pencere): ön/arka yüze ve yan yüze
    part(gold, new THREE.BoxGeometry(0.16, 0.62, 0.12), x, 3.0, z + sz * (tr - 0.02));
  }
  // çatıda yüksek kule
  const dBase = H - 1.3, dTop = H + 1.0;
  part(body, cyl(0.88, 1.0, dTop - dBase, 10), 0, (dTop + dBase) / 2, 0, STONE);
  part(gold, cyl(1.0, 1.0, 0.2, 10), 0, dBase + 0.3, 0);
  part(gold, cyl(1.04, 1.04, 0.2, 10), 0, dTop - 0.05, 0);
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2 + Math.PI / 4;
    const g = new THREE.BoxGeometry(0.3, 0.72, 0.12);
    part(gold, g, Math.sin(a) * 0.88, H + 0.2, Math.cos(a) * 0.88, null, { ry: a });
  }
  part(gold, onion(dTop, 2.1, 1.0), 0, 0, 0);
  part(gold, cyl(0.04, 0.09, 1.0, 5), 0, dTop + 2.1 + 0.4, 0);
  part(gold, ball(0.18), 0, dTop + 2.1 + 0.95, 0);
  part(gold, cyl(0.025, 0.025, 1.2, 5), 0, dTop + 2.1 + 1.5, 0);
  part(body, pennant(0.95, 0.24), 0, dTop + 2.1 + 1.85, 0, RED);
  // kemerli altın giriş: iki sütun + yarım halka kemer + kilit taşı
  const dw = 0.78;
  for (const s of [-1, 1]) part(gold, new THREE.BoxGeometry(0.17, 2.3, 0.2), dx + s * dw, 1.15, fz + 0.1);
  part(gold, new THREE.TorusGeometry(dw, 0.085, 4, 10, Math.PI), dx, 2.3, fz + 0.1);
  part(gold, ball(0.16), dx, 3.14, fz + 0.12);
  // kırmızı hali
  part(body, new THREE.BoxGeometry(1.15, 0.05, 1.5), dx, 0.03, fz + 0.75, RED);
  return { gold: merge(gold), body: merge(body) };
}
