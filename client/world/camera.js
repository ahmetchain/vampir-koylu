// Kamera düzeni: çekimler (meydan, genel bakış, menü turu, odak), noktaları ekrana sığdırma (kenar boşlukları
// dahil), kullanıcının sürükleyerek bakması / yakınlaştırması ve yönetmenin kamerayı devralması.
import * as THREE from 'three';
import { clamp, damp, wrapAngle } from './constants.js';

const tmpV = new THREE.Vector3();
const tmpV2 = new THREE.Vector3();

export class CameraRig {
  constructor(camera) {
    this.camera = camera;
    this.scratch = camera.clone();
    this.W = 1; this.H = 1;
    this.insets = { top: 0, bottom: 0, left: 0, right: 0 };
    // istenen çekim
    this.shot = { target: new THREE.Vector3(), az: 0, el: 0.8, dist: 30, fov: 40, points: null, minDist: 8, maxDist: 160, margin: 0.9 };
    // anlık değerler
    this.cur = { target: new THREE.Vector3(), az: 0, el: 0.8, dist: 30, fov: 40 };
    this.user = { az: 0, el: 0, zoom: 1, idle: 0, active: false };
    this.override = null; // yönetmen: { pos, look, fov, k }
    this.ovW = 0;
    this.ovPos = new THREE.Vector3();
    this.ovLook = new THREE.Vector3();
    this.snapNext = true;
    this.fitTimer = 0;
    this.limits = { az: 1.2, elMin: -0.45, elMax: 0.5, zMin: 0.45, zMax: 1.7 };
  }

  setSize(w, h) { this.W = Math.max(1, w); this.H = Math.max(1, h); this.applyView(); }
  setInsets(o) {
    this.insets = { top: o.top || 0, bottom: o.bottom || 0, left: o.left || 0, right: o.right || 0 };
    this.applyView();
  }
  get portrait() { return this.H > this.W * 1.1; }
  get rect() {
    const i = this.insets;
    const w = Math.max(50, this.W - i.left - i.right), h = Math.max(50, this.H - i.top - i.bottom);
    return { x: i.left, y: i.top, w, h, cx: i.left + w / 2, cy: i.top + h / 2 };
  }

  // Görünüm kaydırma: kenar boşluklu dikdörtgenin merkezi izdüşüm merkezi olur
  applyView(cam = this.camera) {
    const r = this.rect;
    cam.aspect = r.w / r.h;
    cam.setViewOffset(r.w, r.h, r.w / 2 - r.cx, r.h / 2 - r.cy, this.W, this.H);
    cam.updateProjectionMatrix();
  }

  // Yeni çekim. opts: { target, az, el, fov, points (fit), dist, margin, snap }
  setShot(opts) {
    const s = this.shot;
    if (opts.target) s.target.copy(opts.target);
    if (opts.az != null) s.az = opts.az;
    if (opts.el != null) s.el = opts.el;
    if (opts.fov != null) s.fov = opts.fov;
    s.points = opts.points || null;
    s.dist = opts.dist || s.dist;
    s.margin = opts.margin || 0.88;
    s.minDist = opts.minDist || 8;
    s.maxDist = opts.maxDist || 220;
    s.kind = opts.kind || s.kind;
    s.speed = opts.speed || 2.2;
    if (opts.points) s.dist = this.fit(s.target, s.az, s.el, s.fov, opts.points, s.margin, s.minDist, s.maxDist);
    if (opts.snap) this.snapNext = true;
  }

  // Noktaların tümü dikdörtgene sığacak en yakın uzaklık (ikili arama)
  fit(target, az, el, fov, points, margin, minD, maxD) {
    const cam = this.scratch;
    cam.fov = fov;
    this.applyView(cam);
    const dir = tmpV2.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    let lo = minD, hi = maxD;
    for (let it = 0; it < 22; it++) {
      const mid = (lo + hi) / 2;
      cam.position.copy(target).addScaledVector(dir, mid);
      cam.lookAt(target);
      cam.updateMatrixWorld();
      cam.matrixWorldInverse.copy(cam.matrixWorld).invert();
      let ok = true;
      for (let i = 0; i < points.length && ok; i++) {
        tmpV.copy(points[i]).applyMatrix4(cam.matrixWorldInverse);
        if (tmpV.z > -0.5) { ok = false; break; }
        tmpV.applyMatrix4(cam.projectionMatrix);
        if (Math.abs(tmpV.x) > margin || Math.abs(tmpV.y) > margin) ok = false;
      }
      if (ok) hi = mid; else lo = mid;
    }
    return hi;
  }

  // Kullanıcı girdisi
  drag(dx, dy) {
    const u = this.user;
    u.az = clamp(u.az - dx * 0.006, -this.limits.az, this.limits.az);
    u.el = clamp(u.el + dy * 0.004, this.limits.elMin, this.limits.elMax);
    u.idle = 0; u.active = true;
  }
  zoom(f) {
    const u = this.user;
    u.zoom = clamp(u.zoom * f, this.limits.zMin, this.limits.zMax);
    u.idle = 0; u.active = true;
  }
  recenter() { this.user.active = false; this.user.idle = 999; }
  get offset() { const u = this.user; return Math.abs(u.az) > 0.05 || Math.abs(u.el) > 0.04 || Math.abs(u.zoom - 1) > 0.06; }

  setOverride(o, hard) {
    if (!o) { this.override = null; if (hard) this.ovW = 0; return; }
    if (!this.override) { this.ovPos.copy(this.camera.position); this.ovLook.copy(this.lookPoint || this.cur.target); }
    this.override = o;
    if (hard) { this.ovPos.copy(o.pos); this.ovLook.copy(o.look); this.ovW = 1; this.ovFov = o.fov; }
  }

  update(dt, time) {
    const s = this.shot, c = this.cur, u = this.user;
    // kullanıcı ofseti bir süre dokunulmazsa kendiliğinden geri döner
    u.idle += dt;
    if (u.idle > 14 || !u.active) {
      const k = damp(u.active ? 1.2 : 3.0, dt);
      u.az += (0 - u.az) * k; u.el += (0 - u.el) * k; u.zoom += (1 - u.zoom) * k;
      if (u.idle > 14 && Math.abs(u.az) < 0.01 && Math.abs(u.zoom - 1) < 0.01) u.active = false;
    }
    // dinamik sığdırma (karakterler hareket ettikçe), kısıtlı sıklıkta
    this.fitTimer -= dt;
    if (s.points && s.dynamic && this.fitTimer <= 0) {
      this.fitTimer = 0.25;
      s.dist = this.fit(s.target, s.az, s.el, s.fov, s.points, s.margin, s.minDist, s.maxDist);
    }
    const k = this.snapNext ? 1 : damp(s.speed || 2.2, dt);
    this.snapNext = false;
    c.target.lerp(s.target, k);
    c.az += wrapAngle(s.az - c.az) * k;
    c.el += (s.el - c.el) * k;
    c.dist += (s.dist - c.dist) * k;
    c.fov += (s.fov - c.fov) * k;
    const az = c.az + u.az;
    const el = clamp(c.el + u.el, 0.12, 1.45);
    const dist = c.dist * u.zoom;
    const cam = this.camera;
    const px = c.target.x + Math.sin(az) * Math.cos(el) * dist;
    const py = c.target.y + Math.sin(el) * dist;
    const pz = c.target.z + Math.cos(az) * Math.cos(el) * dist;
    // yönetmen devraldıysa ona yumuşakça geç
    const ow = this.override ? 1 : 0;
    this.ovW += (ow - this.ovW) * damp(this.override ? (this.override.k || 2.5) : 2.0, dt);
    if (this.override) {
      const kk = damp(this.override.k || 2.5, dt);
      this.ovPos.lerp(this.override.pos, kk);
      this.ovLook.lerp(this.override.look, kk);
    }
    const w = this.ovW;
    cam.position.set(px + (this.ovPos.x - px) * w, py + (this.ovPos.y - py) * w, pz + (this.ovPos.z - pz) * w);
    // güvenlik: kullanıcı çekimlerinde kamera hiçbir zaman evlerin içine/çatısına girmez (yönetmen çekimlerine dokunulmaz)
    if (this.clampFn && w < 0.5) this.clampFn(cam.position);
    if (!this.lookPoint) this.lookPoint = new THREE.Vector3();
    this.lookPoint.copy(c.target).lerp(this.ovLook, w);
    cam.lookAt(this.lookPoint);
    const fov = c.fov + ((this.override && this.override.fov) || c.fov) * 0 + (((this.override && this.override.fov) || c.fov) - c.fov) * w;
    if (Math.abs(cam.fov - fov) > 0.01) { cam.fov = fov; cam.updateProjectionMatrix(); }
    cam.updateMatrixWorld();
    if (!this.override && this.ovW < 0.002) this.ovW = 0;
  }
}
