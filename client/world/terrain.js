// Zemin: köyün içi düz, dışı tepelere yükselen kutupsal ızgara. Meydan, patikalar, ev izleri ve çimen
// lekeleri bir tuval dokusuna çizilir (düzen değişince yeniden çizilir).
import * as THREE from 'three';
import { rng, TAU, clamp, smooth } from './constants.js';

function hash2(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
function vnoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y); let fx = x - ix, fy = y - iy;
  fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
  const a = hash2(ix, iy), b = hash2(ix + 1, iy), c = hash2(ix, iy + 1), d = hash2(ix + 1, iy + 1);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
}
export function fbm(x, y) { return vnoise(x, y) * 0.55 + vnoise(x * 2.1, y * 2.1) * 0.3 + vnoise(x * 4.3, y * 4.3) * 0.15; }

export function createTerrain(scene, q) {
  const RINGS = 56, SEG = 120, RMAX = 320;
  const radii = [];
  for (let i = 0; i <= RINGS; i++) {
    const t = i / RINGS;
    radii.push(t < 0.5 ? t * 2 * 48 : 48 + Math.pow((t - 0.5) * 2, 1.6) * (RMAX - 48));
  }
  const nV = 1 + RINGS * SEG;
  const pos = new Float32Array(nV * 3), uv = new Float32Array(nV * 2), col = new Float32Array(nV * 3);
  const idx = [];
  for (let r = 1; r <= RINGS; r++) {
    for (let s = 0; s < SEG; s++) {
      const v = 1 + (r - 1) * SEG + s, vn = 1 + (r - 1) * SEG + ((s + 1) % SEG);
      if (r === 1) idx.push(0, vn, v);
      else {
        const p = 1 + (r - 2) * SEG + s, pn = 1 + (r - 2) * SEG + ((s + 1) % SEG);
        idx.push(p, pn, v, pn, vn, v);
      }
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setIndex(idx);

  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = q.groundTex;
  const ctx = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.anisotropy = 4;
  const mat = new THREE.MeshLambertMaterial({ map: tex, vertexColors: true });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.name = 'ground';
  mesh.renderOrder = -1;
  scene.add(mesh);

  let flatR = 30, half = 45;

  function heightAt(x, z) {
    const r = Math.hypot(x, z);
    if (r <= flatR) return 0;
    const k = smooth(clamp((r - flatR) / 26, 0, 1));
    const n = fbm(x * 0.018 + 3, z * 0.018 - 7);
    const big = clamp((r - flatR) / 140, 0, 1);
    return k * (0.6 + n * 3.5) + big * big * big * (8 + n * 14);
  }

  function rebuild() {
    let v = 0;
    const setV = (x, z) => {
      const h = heightAt(x, z);
      pos[v * 3] = x; pos[v * 3 + 1] = h; pos[v * 3 + 2] = z;
      uv[v * 2] = x / (2 * half) + 0.5; uv[v * 2 + 1] = 1 - (z / (2 * half) + 0.5);
      // geniş ölçekli renk oynaması: çayır tonları, uzakta koyulaşan orman zemini
      const r = Math.hypot(x, z);
      const n = fbm(x * 0.05, z * 0.05);
      const far = clamp((r - flatR) / 60, 0, 1);
      const hk = clamp(h / 30, 0, 1);
      const g = 0.92 + (n - 0.5) * 0.22;
      col[v * 3] = g * (1 - far * 0.32) + hk * 0.08;
      col[v * 3 + 1] = g * (1 - far * 0.22);
      col[v * 3 + 2] = g * (1 - far * 0.18) + hk * 0.06;
      v++;
    };
    setV(0, 0);
    for (let r = 1; r <= RINGS; r++) {
      for (let s = 0; s < SEG; s++) {
        const a = (s / SEG) * TAU + (r % 2) * (Math.PI / SEG);
        setV(Math.cos(a) * radii[r], Math.sin(a) * radii[r]);
      }
    }
    geo.getAttribute('position').needsUpdate = true;
    geo.getAttribute('uv').needsUpdate = true;
    geo.getAttribute('color').needsUpdate = true;
    geo.computeVertexNormals();
    geo.computeBoundingSphere();
  }

  // Tuval çizimi: L = düzen (houses, Rp, R, gate)
  // opts.snow: kar örtüsü paleti (Kara Kış)
  function paint(L, opts) {
    const snow = !!(opts && opts.snow);
    flatR = L.R + 10;
    half = L.R + 17;
    rebuild();
    const W = canvas.width;
    const S = W / (2 * half); // metre -> piksel
    const X = (x) => (x + half) * S, Z = (z) => (z + half) * S;
    const R = rng(31337);
    // çimen tabanı
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = snow ? '#e4ebf2' : '#7db457';
    ctx.fillRect(0, 0, W, W);
    // büyük yumuşak lekeler
    for (let i = 0; i < 260; i++) {
      const x = R() * W, y = R() * W, rr = (2 + R() * 7) * S;
      const g = ctx.createRadialGradient(x, y, 0, x, y, rr);
      const c = snow ? (R() < 0.5 ? '255,255,255' : (R() < 0.5 ? '200,212,228' : '176,196,170')) : (R() < 0.5 ? '120,170,82' : (R() < 0.5 ? '92,136,66' : '138,160,78'));
      g.addColorStop(0, `rgba(${c},0.45)`); g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2);
    }
    // ince ot dokusu
    for (let i = 0; i < W * 6; i++) {
      const x = R() * W, y = R() * W;
      ctx.fillStyle = snow ? (R() < 0.5 ? 'rgba(255,255,255,0.4)' : 'rgba(170,186,206,0.25)') : (R() < 0.5 ? 'rgba(150,196,100,0.35)' : 'rgba(70,112,52,0.3)');
      ctx.fillRect(x, y, 1 + R() * 1.5, 1 + R() * 2.5);
    }
    // kır çiçekleri
    for (let i = 0; i < 380; i++) {
      const a = R() * TAU, rr = L.Rp + 2 + R() * (half - L.Rp - 2);
      const x = X(Math.cos(a) * rr), y = Z(Math.sin(a) * rr);
      ctx.fillStyle = ['#f4e4c1', '#ffd34d', '#c9a0ff', '#ff9fb8'][Math.floor(R() * 4)];
      ctx.globalAlpha = snow ? 0 : 0.8;
      ctx.beginPath(); ctx.arc(x, y, Math.max(1, S * 0.06), 0, TAU); ctx.fill();
    }
    ctx.globalAlpha = 1;
    // ev altları ve arka bahçe: aşınmış, koyu toprak + yumuşak ortam gölgesi
    for (const h of L.houses) {
      const cx = X(h.x), cy = Z(h.z), rr = (h.size * 0.62 + 1.4) * S;
      const g = ctx.createRadialGradient(cx, cy, rr * 0.3, cx, cy, rr);
      g.addColorStop(0, snow ? 'rgba(150,160,176,0.6)' : 'rgba(58,70,40,0.75)'); g.addColorStop(1, snow ? 'rgba(150,160,176,0)' : 'rgba(58,70,40,0)');
      ctx.fillStyle = g; ctx.fillRect(cx - rr, cy - rr, rr * 2, rr * 2);
    }
    // patikalar: kapıdan meydana, kapıdan halka yoluna
    const path = (pts, w, color, alpha) => {
      ctx.globalAlpha = alpha; ctx.strokeStyle = color; ctx.lineWidth = w * S; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.moveTo(X(pts[0][0]), Z(pts[0][1]));
      for (let i = 1; i < pts.length; i++) ctx.lineTo(X(pts[i][0]), Z(pts[i][1]));
      ctx.stroke(); ctx.globalAlpha = 1;
    };
    const paths = [];
    for (const h of L.houses) {
      const d = h.door;
      const ang = Math.atan2(d.ax, d.az);
      const inner = L.Rp - 0.5;
      const pts = [[d.dx, d.dz], [d.ax, d.az], [Math.sin(ang) * (L.Rr), Math.cos(ang) * (L.Rr)], [Math.sin(ang) * inner, Math.cos(ang) * inner]];
      paths.push(pts);
    }
    // köy kapısına giden yol
    const ga = L.gateAngle;
    const gate = [[Math.sin(ga) * (L.Rp - 0.5), Math.cos(ga) * (L.Rp - 0.5)], [Math.sin(ga) * (L.R + 2), Math.cos(ga) * (L.R + 2)],
      [Math.sin(ga + 0.05) * (L.R + 12), Math.cos(ga + 0.05) * (L.R + 12)], [Math.sin(ga - 0.02) * (half + 4), Math.cos(ga - 0.02) * (half + 4)]];
    paths.push(gate);
    for (const p of paths) path(p, 2.6, snow ? '#b4b8bf' : '#8f7a52', 0.35);
    for (const p of paths) path(p, 1.7, snow ? '#8f8476' : '#a88d5e', 0.85);
    for (const p of paths) path(p, 0.7, snow ? '#a59a8c' : '#b89c6a', 0.5);
    // halka yolu (evlerin önünden geçen)
    ctx.globalAlpha = 0.28; ctx.strokeStyle = '#a88d5e'; ctx.lineWidth = 1.6 * S;
    ctx.beginPath(); ctx.arc(X(0), Z(0), L.Rr * S, 0, TAU); ctx.stroke();
    ctx.globalAlpha = 1;
    // meydan: toprak + arnavut kaldırımı halkaları
    const pr = (L.Rp + 0.8) * S;
    let g = ctx.createRadialGradient(X(0), Z(0), pr * 0.6, X(0), Z(0), pr * 1.08);
    if (snow) { g.addColorStop(0, 'rgba(170,166,160,1)'); g.addColorStop(0.85, 'rgba(184,186,190,0.95)'); g.addColorStop(1, 'rgba(184,186,190,0)'); }
    else { g.addColorStop(0, 'rgba(176,150,108,1)'); g.addColorStop(0.85, 'rgba(160,136,96,0.95)'); g.addColorStop(1, 'rgba(160,136,96,0)'); }
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(X(0), Z(0), pr * 1.08, 0, TAU); ctx.fill();
    const stone = Math.max(2, 0.55 * S);
    for (let rr = 3.2; rr < L.Rp + 0.3; rr += 0.62) {
      const n = Math.floor((TAU * rr) / 0.66);
      const off = R() * TAU;
      for (let i = 0; i < n; i++) {
        if (R() < 0.12) continue;
        const a = off + (i / n) * TAU;
        const x = X(Math.cos(a) * rr), y = Z(Math.sin(a) * rr);
        const l = 150 + Math.floor(R() * 40);
        ctx.fillStyle = snow ? `rgba(${l + 40},${l + 44},${l + 52},${0.5 + R() * 0.3})` : `rgba(${l + 12},${l},${l - 22},${0.55 + R() * 0.3})`;
        ctx.save(); ctx.translate(x, y); ctx.rotate(a + Math.PI / 2);
        ctx.beginPath();
        const w = stone * (0.85 + R() * 0.3), hh = stone * (0.7 + R() * 0.25);
        if (ctx.roundRect) ctx.roundRect(-w / 2, -hh / 2, w, hh, hh * 0.3); else ctx.rect(-w / 2, -hh / 2, w, hh);
        ctx.fill(); ctx.restore();
      }
    }
    // ateşin çevresi: kül ve isli taş
    g = ctx.createRadialGradient(X(0), Z(0), 0, X(0), Z(0), 3.0 * S);
    g.addColorStop(0, 'rgba(60,46,40,0.95)'); g.addColorStop(0.5, 'rgba(96,78,62,0.7)'); g.addColorStop(1, 'rgba(120,100,76,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(X(0), Z(0), 3.0 * S, 0, TAU); ctx.fill();
    // mezarlık zemini
    if (L.grave) {
      const gx = X(L.grave.x), gy = Z(L.grave.z), gr = 6 * S;
      g = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
      g.addColorStop(0, 'rgba(70,84,58,0.85)'); g.addColorStop(1, 'rgba(70,84,58,0)');
      ctx.fillStyle = g; ctx.fillRect(gx - gr, gy - gr, gr * 2, gr * 2);
    }
    tex.needsUpdate = true;
  }

  return {
    mesh, heightAt, paint,
    dispose() { geo.dispose(); mat.dispose(); tex.dispose(); scene.remove(mesh); },
  };
}
