// Köy düzeni: evler koltuk (seat) sırasına göre halkaya dizilir, izleyicinin evi kameraya en yakın (güney) noktadadır.
// Kuzeyde bir boşluk köy kapısına ve mezarlığa ayrılır. Meydan koordinatları (pos 0..1) mutlaktır.
import { TAU, clamp, wrapAngle } from './constants.js';

// Ev türleri: manifest.houses verileri (yerel koordinat, ön yüz +Z)
export const HOUSE_INFO = [
  { size: 5.4, hx: 2.67, hz: 2.56, height: 5.0, front: 2.5, door: [1.25, 2.5], approach: [1.25, 3.5], peek: [1.25, -3.3], backWin: [1.25, 1.35, -2.5], frontWin: [-1.25, 1.35, 2.5], openSign: 1, alt: true },
  { size: 5.4, hx: 2.7, hz: 2.6, height: 5.4, front: 2.5, door: [1.25, 2.5], approach: [1.25, 3.5], peek: [1.25, -3.3], backWin: [1.25, 1.35, -2.5], frontWin: [-1.25, 1.35, 2.5], openSign: 1, alt: true },
  { size: 6.7, hx: 3.36, hz: 3.36, height: 5.7, front: 2.875, door: [1.25, 2.875], approach: [1.25, 3.875], peek: [-1.25, -3.675], backWin: [-1.25, 1.35, -2.875], frontWin: [-1.25, 1.35, 2.875], openSign: -1, alt: false },
  { size: 5.4, hx: 2.7, hz: 2.55, height: 5.6, front: 2.5, door: [1.25, 2.5], approach: [1.25, 3.5], peek: [1.25, -3.3], backWin: [1.25, 1.35, -2.5], frontWin: [-1.25, 1.35, 2.5], openSign: 1, alt: true },
];
const TYPE_CYCLE = [0, 1, 3, 2, 1, 0, 2, 3];

export function houseStyle(seat) {
  const type = TYPE_CYCLE[seat % TYPE_CYCLE.length];
  const variant = HOUSE_INFO[type].alt ? (Math.floor(seat / 2) + seat) % 2 : 0;
  return { type, variant };
}

// Yerel (ev) noktasını dünyaya çevir
export function toWorld(h, lx, lz) {
  const c = Math.cos(h.rotY), s = Math.sin(h.rotY);
  return { x: h.x + lx * c + lz * s, z: h.z - lx * s + lz * c };
}

// entries: [{ id, seat }] ; viewerId: izleyicinin oyuncu kimliği (yoksa kapı kuzeyde)
export function computeLayout(entries, viewerId) {
  let list = entries.slice().sort((a, b) => a.seat - b.seat);
  const n = list.length;
  // izleyici halkanın ortasına (kapının tam karşısına) gelsin: koltuk sırası döngüsel kalır
  const v0 = list.findIndex((e) => e.id === viewerId);
  if (v0 >= 0) { const m = Math.floor(n / 2); list = list.map((_, i) => list[(v0 - m + i + n * 2) % n]); }
  const gap = 0.78;
  const R = Math.max(14.5, (Math.max(n, 1) * 7.4) / (TAU - gap));
  const Rp = clamp(R * 0.5, 7.2, 13.5);
  const Rr = R - 5.4;
  const step = (TAU - gap) / Math.max(n, 1);
  const vi = list.findIndex((e) => e.id === viewerId);
  const alpha = (i) => gap / 2 + step * (i + 0.5); // kapı yönünden ölçülen açı
  // izleyicinin evi açı 0'a (güney, +z) gelsin; izleyici yoksa kapı tam kuzeyde (PI)
  const shift = vi >= 0 ? -alpha(vi) : Math.PI;
  const gateAngle = wrapAngle(shift);
  const houses = list.map((e, i) => {
    const ang = wrapAngle(alpha(i) + shift + Math.PI * 0); // dünya açısı: konum = (sin a, cos a) * R
    const st = houseStyle(e.seat);
    const info = HOUSE_INFO[st.type];
    const h = { id: e.id, seat: e.seat, angle: ang, x: Math.sin(ang) * R, z: Math.cos(ang) * R, rotY: ang + Math.PI, type: st.type, variant: st.variant, size: info.size };
    const d = toWorld(h, info.door[0], info.door[1]);
    const a = toWorld(h, info.approach[0], info.approach[1]);
    h.door = { dx: d.x, dz: d.z, ax: a.x, az: a.z };
    return h;
  });
  // ateşin etrafında oyuncular arasında açı farkını gidermek için boşluk ortası
  const gr = R + 6.5;
  const ga = gateAngle + 7 / gr;
  return { n, R, Rp, Rr, step, gap, gateAngle, houses, grave: { x: Math.sin(ga) * gr, z: Math.cos(ga) * gr, angle: ga, r: gr } };
}

// Meydan koordinatı (0..1) <-> dünya (metre)
export function plazaToWorld(L, x, y) {
  let dx = (x - 0.5) / 0.5, dz = (y - 0.5) / 0.5;
  let r = Math.hypot(dx, dz) * L.Rp;
  const a = Math.atan2(dx, dz);
  r = Math.max(r, 2.3); // ateşin içine basma
  return { x: Math.sin(a) * r, z: Math.cos(a) * r };
}
export function worldToPlaza(L, wx, wz) {
  return { x: 0.5 + (wx / L.Rp) * 0.5, y: 0.5 + (wz / L.Rp) * 0.5 };
}
