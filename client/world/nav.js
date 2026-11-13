// Basit gezinme: meydan içinde düz çizgi (ateşin etrafından dolanarak), evlere halka yolu üzerinden,
// gözcü için evin yanından arka pencereye. Yerel kaçınma: statik daireler ve karakterler arası itme.
import { TAU, wrapAngle } from './constants.js';

const FIRE_R = 2.3;

function polar(p) { return { r: Math.hypot(p.x, p.z), a: Math.atan2(p.x, p.z) }; }
function at(a, r) { return { x: Math.sin(a) * r, z: Math.cos(a) * r }; }

// Bir doğru parçası ateşe çok yaklaşıyorsa yanından geçen bir ara nokta ekle
function fireDetour(a, b, out) {
  const dx = b.x - a.x, dz = b.z - a.z;
  const len2 = dx * dx + dz * dz;
  if (len2 < 0.01) return;
  let t = -(a.x * dx + a.z * dz) / len2;
  if (t <= 0 || t >= 1) return;
  const cx = a.x + dx * t, cz = a.z + dz * t;
  const d = Math.hypot(cx, cz);
  if (d >= FIRE_R) return;
  // dik yön (en yakın noktanın tarafı)
  let nx = cx, nz = cz;
  if (d < 0.01) { nx = -dz; nz = dx; }
  const nl = Math.hypot(nx, nz) || 1;
  const r = FIRE_R + 0.25;
  // iki ara nokta: daha yumuşak dönüş
  const ux = dx / Math.sqrt(len2), uz = dz / Math.sqrt(len2);
  out.push({ x: (nx / nl) * r - ux * 1.2, z: (nz / nl) * r - uz * 1.2 });
  out.push({ x: (nx / nl) * r + ux * 1.2, z: (nz / nl) * r + uz * 1.2 });
}

function pushSeg(out, p) {
  const last = out[out.length - 1];
  if (last) fireDetour(last, p, out);
  out.push({ x: p.x, z: p.z });
}

// Halka yolu boyunca açı a0'dan a1'e
function arc(out, a0, a1, r) {
  const d = wrapAngle(a1 - a0);
  const steps = Math.max(1, Math.ceil(Math.abs(d) / 0.22));
  for (let i = 1; i <= steps; i++) out.push(at(a0 + (d * i) / steps, r));
}

// from: {x,z} (dünya), to: hedef tanımı
//   { x, z }                         -> açık alanda bir nokta
//   { house: anchors, angle }        -> evin kapı yaklaşma noktası
//   { house: anchors, angle, peek }  -> evin arka penceresi (yan taraftan dolanarak)
// fromHouse: başlangıç bir evin kapısıysa o evin açısı
export function planPath(L, from, to, fromHouseAngle) {
  const out = [{ x: from.x, z: from.z }];
  const Rr = L.Rr;
  const inner = Rr + 0.4;
  let cur = from;
  let curA = polar(from).a;
  // Başlangıç ev bölgesindeyse önce halka yoluna çık
  if (fromHouseAngle != null) {
    const q = at(fromHouseAngle, Rr);
    out.push(q);
    cur = q; curA = fromHouseAngle;
  } else if (polar(from).r > inner) {
    const pr = polar(from);
    const q = at(pr.a, Rr);
    out.push(q);
    cur = q; curA = pr.a;
  }
  if (to.house) {
    const ta = to.angle;
    const dA = Math.abs(wrapAngle(ta - curA));
    const q = at(ta, Rr);
    const curR = polar(cur).r;
    // yakın evler: halka yolunu izle; uzak evler: meydanı çaprazla
    if (curR > Rr - 0.8 && dA < 1.4) arc(out, curA, ta, Rr);
    else pushSeg(out, q);
    if (to.peek) {
      // evin hangi yanından dolaşılacak: arka pencere tarafı
      const pk = to.house.peek;
      const side = wrapAngle(polar(pk).a - ta) >= 0 ? 1 : -1;
      const half = (to.halfWidth || 3) + 1.4;
      const R = L.R;
      const s1 = at(ta + side * (half / (R - 2)), R - 2.2);
      const s2 = at(ta + side * (half / (R + 1)), R + 1.2);
      const s3 = at(ta + side * ((half - 0.6) / (R + 3.4)), R + 3.6);
      out.push(s1, s2, s3, { x: pk.x, z: pk.z });
    } else {
      out.push({ x: to.house.approach.x, z: to.house.approach.z });
    }
  } else {
    // açık alandaki hedef halka yolunun dışındaysa önce ona dön
    pushSeg(out, to);
  }
  return out;
}

// Statik engeller: { x, z, r }
export function resolveStatic(p, obstacles, ignore) {
  for (let i = 0; i < obstacles.length; i++) {
    const o = obstacles[i];
    if (o === ignore || o.tag === ignore) continue;
    const dx = p.x - o.x, dz = p.z - o.z;
    const d2 = dx * dx + dz * dz;
    const rr = o.r + 0.32;
    if (d2 < rr * rr) {
      const d = Math.sqrt(d2) || 0.001;
      p.x = o.x + (dx / d) * rr;
      p.z = o.z + (dz / d) * rr;
    }
  }
}

// Yol parçaları statik engellerin (bank kütükleri, fenerler) içinden geçiyorsa yanından dolaşan ara nokta ekle.
// (Önceden itme yalnız geri itiyordu: karakter kütüğe dayanıp yerinde yürüyordu.)
export function detourObstacles(pts, obstacles, margin = 0.42) {
  if (!obstacles || !obstacles.length || pts.length < 2) return pts;
  let cur = pts;
  for (let pass = 0; pass < 3; pass++) {
    const out = [cur[0]];
    let changed = false;
    for (let i = 1; i < cur.length; i++) {
      const a = out[out.length - 1], b = cur[i];
      const dx = b.x - a.x, dz = b.z - a.z, l2 = dx * dx + dz * dz;
      let hit = null, ht = 1, hd = 0;
      if (l2 > 1e-4) {
        for (const o of obstacles) {
          if (o.tag === 'fire') continue;      // ateş: planPath kendi dolanır
          let t = ((o.x - a.x) * dx + (o.z - a.z) * dz) / l2;
          if (t <= 0.02 || t >= 0.98) continue;
          const cx = a.x + dx * t - o.x, cz = a.z + dz * t - o.z;
          const d = Math.hypot(cx, cz);
          if (d < o.r + margin && t < ht) { hit = o; ht = t; hd = d; }
        }
      }
      if (hit) {
        // engelin, parçanın geçtiği tarafına (yoksa sola) dik kaçış
        let nx = a.x + dx * ht - hit.x, nz = a.z + dz * ht - hit.z;
        if (hd < 1e-3) { nx = -dz; nz = dx; }
        const nl = Math.hypot(nx, nz) || 1;
        const r = hit.r + margin + 0.25;
        out.push({ x: hit.x + (nx / nl) * r, z: hit.z + (nz / nl) * r });
        changed = true;
      }
      out.push(b);
    }
    cur = out;
    if (!changed) break;
  }
  return cur;
}

// Hedef nokta bir engelin içindeyse dışarı çıkar
export function clearPoint(p, obstacles) {
  const q = { x: p.x, z: p.z };
  for (let k = 0; k < 3; k++) resolveStatic(q, obstacles, null);
  return q;
}

export { TAU };
