// Karakter önizlemesi (profil, görünüm düzenleyici): tek paylaşılan küçük WebGL bağlamı, her önizleme kendi
// 2B tuvaline kopyalanır. Varlıklar ana dünyayla ortaktır; düşük kare hızıyla ve yalnızca görünürken çizilir.
import * as THREE from 'three';
import * as A from './assets.js';
import { buildManor, hasManor, manorMaterials, setManorNight } from './manors.js';
import { HOUSE_INFO } from './layout.js';
import { Character } from './character.js';
import { applyHouseMat, isHouseWallMat } from './village.js';

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
  let zoom = opts.focus === 'head' ? 1 : 0, zoomTo = zoom; // 0 tüm boy, 1 baş yakın plan
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
      // dar kutularda karakter sığsın; şapka/aksesuar seçerken baş ve şapka kadraja yumuşakça yaklaşır
      zoom += (zoomTo - zoom) * Math.min(1, dt * 6);
      // yakın plan: omuzlardan (atkı, papyon görünsün) şapkanın tepesine kadar, kadrajın ~%80'i
      const top = (ch.headY || 1.93) + 0.06, bottom = 0.72;
      const fitZ = cam.aspect < 0.8 ? 1 / Math.max(0.55, cam.aspect / 0.8) : 1;
      const lookY = 1.22 + ((bottom + top) / 2 - 1.22) * zoom;
      const dist = 7.8 + ((top - bottom) * 0.5 / Math.tan(THREE.MathUtils.degToRad(15)) / 0.8 - 7.8) * zoom;
      cam.position.set(0, lookY + 0.5 - 0.15 * zoom, dist * fitZ);
      cam.lookAt(0, lookY, 0);
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
    // Yeni görünümde olmayan isteğe bağlı alanlar (çakışmada çıkarılan üst/alt/teçhizat/aksesuar) 0 sayılır: eski seçim önizlemede kalmasın
    setLook(l) { cur = { ...cur, acc: 0, top: 0, bottom: 0, gear: 0, ...l }; build(); },
    // 'head': baş ve şapka yakın plan (şapka/aksesuar seçimi), 'wear': kıyafet (yarı yakın), 'body': tüm boy
    setFocus(f) { zoomTo = f === 'head' ? 1 : f === 'wear' ? 0.45 : 0; },
    // sırt teçhizatı seçilince: karakter hızla arkasını döner, sonra yavaşça yüzü kameraya geri gelir
    peekBack() { if (!dragging) spinV = 9.6; },
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

// ---------- Ev görünümü küçük resimleri ("Evim" seçici) ----------
// Gerçek 3B ev modeli (house-0.glb) her ev görünümüyle (ve seçili duvar malzemesiyle, look.houseMat) tek paylaşılan WebGL
// bağlamında bir kez çizilir ve dataURL olarak önbelleğe alınır: kartlar düz <img>'dir, sayfada ek WebGL bağlamı ya da sürekli
// çizim yoktur. Malzeme, köydeki toplu ağ gölgelendiricisinin aynısıyla (village.js applyHouseMat, tek tip değerli kipte) çizilir.
const snapCache = new Map();   // 'görünüm|malzeme|boy' -> dataURL
let snapMats = null;
let snapChain = Promise.resolve();
const hmMats = new Map();      // kaynak malzeme -> { m: malzeme kopyası, u: { value } }
function wallMat(src, hm) {
  let e = hmMats.get(src);
  if (!e) {
    const m = src.clone();
    m.name = src.name;
    const u = { value: 0 };
    applyHouseMat(m, src.name.startsWith('holiday') ? 'holiday' : 'ft', u);
    e = { m, u };
    hmMats.set(src, e);
  }
  e.u.value = hm;
  return e.m;
}
function underBody(o) { for (let n = o; n; n = n.parent) if (n.name === 'body') return true; return false; }
function snapOne(skin, hm, W, H) {
  const key = skin + '|' + hm + '|' + W;
  if (snapCache.has(key)) return snapCache.get(key);
  const S = getRenderer();
  const r = S.renderer;
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight('#dfe8ff', '#5a4a40', 1.5));
  const key2 = new THREE.DirectionalLight('#fff2dc', 2.8); key2.position.set(4, 7, 6); scene.add(key2);
  const fill = new THREE.DirectionalLight('#ffd7a8', 0.8); fill.position.set(-5, 3, 4); scene.add(fill);
  const cam = new THREE.PerspectiveCamera(28, W / H, 0.5, 80);
  const src = A.get('houses/house-0.glb').scene.children[0];
  const house = src.clone(true);
  house.updateWorldMatrix(true, true);
  const own = [];
  house.traverse((o) => {
    if (!o.isMesh) return;
    const n = o.material.name;
    if (skin && (n === 'fantasy-town' || n === 'holiday')) o.material = A.houseSkinMaterial(skin, n) || o.material;
    else if (n.startsWith('tint')) o.material = A.tinted(n, '#c9b48a') || o.material;
    else if (n === 'window') { o.material = o.material.clone(); o.material.color.set('#ffcf7a'); own.push(o.material); }
    // ev malzemesi yalnızca gövdenin duvarlarına (kapı ve flama kendi dokusunda)
    if (hm && underBody(o) && isHouseWallMat(o.material.name)) o.material = wallMat(o.material, hm);
  });
  const grp = new THREE.Group();
  grp.add(house);
  // Saray ve 6..11: oyundaki ile aynı prosedürel eklentiler (manors.js); değirmen kanadı hafif dönük durur
  const ex = hasManor(skin) ? buildManor(skin, HOUSE_INFO[0]) : null;
  if (ex) {
    if (!snapMats) { snapMats = manorMaterials(); setManorNight(snapMats, 0.25); }
    for (const p of ex.parts) {
      const m = new THREE.Mesh(p.geo, snapMats[p.mat]);
      if (p.spin) { m.position.set(...p.spin.pivot); m.rotation.z = 0.35; }
      grp.add(m);
    }
  }
  // Saray kulelerle daha uzun: kamera biraz geride ve yukarıda
  if (skin === 5) { cam.position.set(-12.6, 10.6, 18.0); cam.lookAt(0, 3.5, 0); } else if (skin === 6 || skin === 9) { cam.position.set(-10.8, 9.4, 15.4); cam.lookAt(0, 2.9, 0); } else { cam.position.set(-9.5, 8.5, 13.5); cam.lookAt(0, 2.3, 0); }
  const ground = new THREE.Mesh(new THREE.CircleGeometry(4.6, 32), new THREE.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.28, depthWrite: false }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -0.02;
  scene.add(grp, ground);
  const prevSize = r.getSize(new THREE.Vector2());
  r.setSize(W, H, false);
  r.setScissorTest(false);
  r.setViewport(0, 0, W, H);
  r.setClearColor(0x000000, 0);
  r.render(scene, cam);
  const url = r.domElement.toDataURL('image/png');
  r.setSize(prevSize.x, prevSize.y, false);
  snapCache.set(key, url);
  if (ex) for (const p of ex.parts) p.geo.dispose();
  ground.geometry.dispose(); ground.material.dispose();
  for (const m of own) m.dispose();
  return url;
}
// Sıralı çalıştır (paylaşılan oluşturucu): önceki iş bitmeden yenisi başlamaz
function queued(job) {
  const p = snapChain.then(async () => { await A.loadGroups(['village']); return job(); });
  snapChain = p.catch(() => {});
  return p;
}
// Tüm ev görünümleri, verilen duvar malzemesiyle (küçük kartlar)
export function houseSnapshots(count, hm = 0) {
  hm |= 0;
  return queued(() => { const out = []; for (let skin = 0; skin < count; skin++) out.push(snapOne(skin, hm, 176, 144)); return out; });
}
// Tek ev, büyük (Evim sekmesinde sahnede gösterilir)
export function houseSnapshot(skin, hm = 0) {
  return queued(() => snapOne(skin | 0, hm | 0, 440, 300));
}
