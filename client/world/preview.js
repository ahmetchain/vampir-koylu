// Karakter önizlemesi (profil, görünüm düzenleyici): tek paylaşılan küçük WebGL bağlamı, her önizleme kendi
// 2B tuvaline kopyalanır. Varlıklar ana dünyayla ortaktır; düşük kare hızıyla ve yalnızca görünürken çizilir.
import * as THREE from 'three';
import * as A from './assets.js';
import { Character } from './character.js';

let shared = null; // { renderer, canvas, users }
const previews = new Set();
let raf = 0;
let lastT = 0;

function getRenderer() {
  if (shared) return shared;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.setClearColor(0x000000, 0);
  shared = { renderer, users: 0 };
  return shared;
}

function loop(now) {
  raf = 0;
  if (!previews.size) return;
  raf = requestAnimationFrame(loop);
  if (document.hidden) return;
  if (now - lastT < 1000 / 24) return; // ~24 fps yeterli
  const dt = Math.min(0.1, (now - lastT) / 1000 || 0.04);
  lastT = now;
  for (const p of previews) p.draw(dt);
}

export function preview(el, look, opts = {}) {
  if (!el) throw new Error('VKWorld.preview: öğe yok');
  const out = document.createElement('canvas');
  out.className = 'vkw-preview';
  out.style.cssText = 'display:block;width:100%;height:100%;touch-action:pan-y';
  el.appendChild(out);
  const ctx2d = out.getContext('2d');
  const S = getRenderer();
  S.users++;
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
  cam.position.set(0, 1.75, 7.8);
  cam.lookAt(0, 1.22, 0);
  const hemi = new THREE.HemisphereLight('#dfe8ff', '#5a4a40', 1.3);
  scene.add(hemi);
  const key = new THREE.DirectionalLight('#fff2dc', 2.6);
  key.position.set(1.8, 3.5, 5.0);
  const fill = new THREE.DirectionalLight('#ffd7a8', 0.8);
  fill.position.set(-3, 1.5, 3.5);
  scene.add(fill);
  scene.add(key);
  const rim = new THREE.DirectionalLight('#8fb4ff', 1.6);
  rim.position.set(-3, 2.5, -3);
  scene.add(rim);
  // ayak altı halka ve gölge
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.85, 40), new THREE.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.22, depthWrite: false }));
  disc.rotation.x = -Math.PI / 2;
  disc.position.y = 0.005;
  scene.add(disc);
  let ch = null;
  let cur = { ...look };
  let disposed = false;
  let yaw = opts.yaw != null ? opts.yaw : 0.18;
  let swayT = 0;
  const baseYaw = opts.yaw != null ? opts.yaw : 0;
  let dragging = false, lastX = 0, spinV = 0;
  const turn = opts.turntable !== false;
  const fakeWorld = { sfxStep: null, sfx() {} };

  function build() {
    if (disposed || !A.groupLoaded('chars')) return;
    if (!ch) {
      ch = new Character(fakeWorld, 'preview', cur);
      scene.add(ch.root);
      ch.idleTimer = 2;
    } else ch.setLook(cur);
  }
  if (A.groupLoaded('chars')) build();
  else A.loadGroups(['chars']).then(build).catch(() => {});

  const onDown = (e) => { dragging = true; lastX = e.clientX; spinV = 0; out.setPointerCapture && out.setPointerCapture(e.pointerId); };
  const onMove = (e) => { if (!dragging) return; const dx = e.clientX - lastX; lastX = e.clientX; yaw += dx * 0.012; spinV = dx * 0.012 * 24; };
  const onUp = () => { dragging = false; };
  out.addEventListener('pointerdown', onDown);
  out.addEventListener('pointermove', onMove);
  out.addEventListener('pointerup', onUp);
  out.addEventListener('pointercancel', onUp);

  const p = {
    draw(dt) {
      if (disposed || !ch) return;
      const w = el.clientWidth, h = el.clientHeight;
      if (w < 4 || h < 4 || !out.isConnected) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = Math.round(w * dpr), chh = Math.round(h * dpr);
      if (out.width !== cw || out.height !== chh) { out.width = cw; out.height = chh; }
      const r = S.renderer;
      const sz = r.getSize(new THREE.Vector2());
      if (sz.x < cw || sz.y < chh) r.setSize(Math.max(sz.x, cw), Math.max(sz.y, chh), false);
      const rs = r.getSize(new THREE.Vector2());
      r.setViewport(0, rs.y - chh, cw, chh);
      r.setScissor(0, rs.y - chh, cw, chh);
      r.setScissorTest(true);
      cam.aspect = w / h;
      // dar kutularda karakter sığsın
      cam.position.z = cam.aspect < 0.8 ? 7.8 / Math.max(0.55, cam.aspect / 0.8) : 7.8;
      cam.updateProjectionMatrix();
      // yüzü hep kameraya dönük: hafif salınım; sürükleyince döner, bırakınca yavaşça geri gelir
      if (!dragging) {
        swayT += dt;
        yaw += spinV * dt; spinV *= Math.exp(-3 * dt);
        let d = yaw - baseYaw; d = Math.atan2(Math.sin(d), Math.cos(d));
        const want = turn ? Math.sin(swayT * 0.7) * 0.42 : 0;
        if (Math.abs(spinV) < 0.4) yaw = baseYaw + d + (want - d) * Math.min(1, dt * 1.6);
      }
      ch.yaw = yaw;
      ch.update(dt, performance.now() / 1000);
      r.clear();
      r.render(scene, cam);
      ctx2d.clearRect(0, 0, cw, chh);
      ctx2d.drawImage(r.domElement, 0, rs.y - chh, cw, chh, 0, 0, cw, chh);
    },
  };
  previews.add(p);
  if (!raf) raf = requestAnimationFrame(loop);

  return {
    setLook(l) { cur = { ...cur, ...l }; build(); },
    dispose() {
      if (disposed) return;
      disposed = true;
      previews.delete(p);
      if (ch) ch.dispose();
      disc.geometry.dispose(); disc.material.dispose();
      out.remove();
      S.users--;
      if (S.users <= 0 && shared) { shared.renderer.dispose(); shared.renderer.forceContextLoss(); shared = null; }
    },
  };
}
