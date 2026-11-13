// Günün saati (0..24) -> ışık, gök, sis ve lamba parametreleri. Anahtar karelerin arasında yumuşak geçiş.
import * as THREE from 'three';
import { clamp, smooth } from './constants.js';

// h: saat. top/hor: gök (hor = sis rengi, ufukta kesintisiz birleşir), sun: ana ışık rengi/şiddeti,
// sky/gnd: yarıküre ışığı, stars: yıldız görünürlüğü, lamps: fener ve pencere ışığı, fog: [yakın, uzak]
const KEYS = [
  { h: 0.0, top: '#0d0b20', hor: '#2a2357', sun: '#7f9fff', si: 0.78, sky: '#5258a8', gnd: '#1e1838', hi: 0.7, stars: 1, lamps: 1, fog: [30, 175], fire: 1 },
  { h: 3.6, top: '#121434', hor: '#2c2a60', sun: '#86a4ff', si: 0.72, sky: '#545ca4', gnd: '#1e1a38', hi: 0.68, stars: 0.95, lamps: 1, fog: [30, 175], fire: 1 },
  { h: 5.0, top: '#28356e', hor: '#7a6a9a', sun: '#a0a8e8', si: 0.45, sky: '#6a74b0', gnd: '#2a2238', hi: 0.6, stars: 0.4, lamps: 0.8, fog: [35, 190], fire: 0.9 },
  { h: 6.1, top: '#4a6fb0', hor: '#f2b08e', sun: '#ffb284', si: 1.1, sky: '#a8b6e0', gnd: '#5c4a44', hi: 0.75, stars: 0, lamps: 0.25, fog: [40, 220], fire: 0.6 },
  { h: 8.0, top: '#4f95dc', hor: '#cfe4f2', sun: '#fff0d4', si: 2.5, sky: '#c3dcff', gnd: '#6f6a3e', hi: 1.0, stars: 0, lamps: 0, fog: [55, 260], fire: 0.35 },
  { h: 12.0, top: '#3f8ae0', hor: '#d3eaff', sun: '#fffaf0', si: 2.8, sky: '#cfe4ff', gnd: '#727040', hi: 1.05, stars: 0, lamps: 0, fog: [60, 280], fire: 0.3 },
  { h: 15.8, top: '#4b8ad6', hor: '#ebdcc4', sun: '#ffe6b8', si: 2.6, sky: '#cad8f2', gnd: '#75683c', hi: 1.0, stars: 0, lamps: 0, fog: [55, 260], fire: 0.35 },
  { h: 17.6, top: '#4a62ae', hor: '#ffbf80', sun: '#ffb066', si: 2.1, sky: '#c0b0d8', gnd: '#6a4a36', hi: 0.85, stars: 0, lamps: 0.15, fog: [48, 240], fire: 0.5 },
  { h: 18.6, top: '#3a3f8a', hor: '#ff9468', sun: '#ff8a4c', si: 1.35, sky: '#9a86c8', gnd: '#4a3038', hi: 0.7, stars: 0.05, lamps: 0.7, fog: [42, 215], fire: 0.75 },
  { h: 19.5, top: '#252660', hor: '#b85f74', sun: '#e07a6a', si: 0.6, sky: '#6a5fa8', gnd: '#2a1c34', hi: 0.6, stars: 0.35, lamps: 1, fog: [36, 195], fire: 0.95 },
  { h: 20.6, top: '#15122b', hor: '#3a2a6b', sun: '#8fb4ff', si: 0.72, sky: '#5454a6', gnd: '#201a3a', hi: 0.68, stars: 0.9, lamps: 1, fog: [30, 180], fire: 1 },
  { h: 24.0, top: '#0d0b20', hor: '#2a2357', sun: '#7f9fff', si: 0.78, sky: '#5258a8', gnd: '#1e1838', hi: 0.7, stars: 1, lamps: 1, fog: [30, 175], fire: 1 },
];
const COLS = ['top', 'hor', 'sun', 'sky', 'gnd'];
for (const k of KEYS) for (const c of COLS) k[c] = new THREE.Color(k[c]);

export function makeTod() {
  return {
    h: 12, top: new THREE.Color(), hor: new THREE.Color(), sun: new THREE.Color(), sky: new THREE.Color(), gnd: new THREE.Color(),
    si: 1, hi: 1, stars: 0, lamps: 0, fogNear: 50, fogFar: 250, fire: 0.5,
    sunDir: new THREE.Vector3(), moonDir: new THREE.Vector3(), lightDir: new THREE.Vector3(),
    sunVis: 0, moonVis: 0, night: 0, dusk: 0,
  };
}

// Güneş: 6.0'da doğar, 18.9'da batar; doğudan (+x) güneyin (+z, kameranın tarafı) üzerinden batıya
function sunVector(h, out) {
  const t = (h - 6.0) / 12.9;               // 0 doğuş .. 1 batış
  const az = (0.5 - t) * Math.PI * 0.95;     // +: doğu
  const el = Math.sin(clamp(t, -0.2, 1.2) * Math.PI) * 1.0; // radyan (~57°)
  out.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el) * 0.9 + 0.25).normalize();
  return out;
}
// Ay: 19.4'te doğar, 5.6'da batar; hafif kuzeyden
function moonVector(h, out) {
  let m = h - 19.4; if (m < 0) m += 24;
  const t = m / 10.2;
  const az = (0.5 - t) * Math.PI * 0.9;
  const el = Math.sin(clamp(t, -0.2, 1.2) * Math.PI) * 0.95;
  out.set(Math.sin(az) * Math.cos(el) * 0.9, Math.sin(el), Math.cos(az) * Math.cos(el) * 0.6 - 0.3).normalize();
  return out;
}

const tmpA = new THREE.Vector3();
const tmpB = new THREE.Vector3();

export function evalTod(h, out) {
  h = ((h % 24) + 24) % 24;
  out.h = h;
  let i = 0;
  while (i < KEYS.length - 2 && KEYS[i + 1].h <= h) i++;
  const a = KEYS[i], b = KEYS[i + 1];
  const t = smooth(clamp((h - a.h) / (b.h - a.h), 0, 1));
  for (const c of COLS) out[c].copy(a[c]).lerp(b[c], t);
  out.si = a.si + (b.si - a.si) * t;
  out.hi = a.hi + (b.hi - a.hi) * t;
  out.stars = a.stars + (b.stars - a.stars) * t;
  out.lamps = a.lamps + (b.lamps - a.lamps) * t;
  out.fire = a.fire + (b.fire - a.fire) * t;
  out.fogNear = a.fog[0] + (b.fog[0] - a.fog[0]) * t;
  out.fogFar = a.fog[1] + (b.fog[1] - a.fog[1]) * t;

  sunVector(h, out.sunDir);
  moonVector(h, out.moonDir);
  out.sunVis = clamp((out.sunDir.y + 0.06) / 0.12, 0, 1);
  out.moonVis = clamp((out.moonDir.y + 0.04) / 0.12, 0, 1) * clamp(1 - out.sunVis * 1.2, 0, 1);
  // Gece/gündüz ağırlığı
  const dayW = clamp((out.sunDir.y + 0.05) / 0.25, 0, 1);
  out.night = 1 - dayW;
  out.dusk = clamp(1 - Math.abs(out.sunDir.y - 0.05) / 0.22, 0, 1);
  // Işık yönü: güneş ve ay arasında ağırlıklı ve en az ~14° yükseklikte (gölgeler sonsuz uzamasın)
  tmpA.copy(out.sunDir); tmpA.y = Math.max(tmpA.y, 0.24);
  tmpB.copy(out.moonDir); tmpB.y = Math.max(tmpB.y, 0.45);
  out.lightDir.copy(tmpA.normalize()).multiplyScalar(dayW).addScaledVector(tmpB.normalize(), 1 - dayW).normalize();
  return out;
}

// Saati hedefe doğru ileri (gerekirse geri) yürüt: büyük sıçramalarda zaman hızla akar, asla anında atlamaz
export function stepHour(cur, target, dt, speed) {
  let d = target - cur;
  while (d > 12) d -= 24;
  while (d < -12) d += 24;
  // geriye kısa sarma yerine ileri akmayı tercih et (gece->sabah gibi)
  if (d < -3) d += 24;
  const step = Math.sign(d) * Math.min(Math.abs(d), Math.max(speed * dt, Math.abs(d) * (1 - Math.exp(-1.2 * dt))));
  return ((cur + step) % 24 + 24) % 24;
}
