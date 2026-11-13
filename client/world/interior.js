// Ev içi: tek bir paylaşılan oda (döşeme, duvarlar, pencere, kapı, yatak, masa, sandık, kitaplık, halı,
// fener). Köyden uzakta kurulur; her ev için sahibin rengiyle yeniden giydirilir. Gece ziyareti, gözcünün
// pencere görünümü, kahin araması ve gözcü raporu bu odada oynar.
import * as THREE from 'three';
import * as A from './assets.js';
import { Character } from './character.js';
import { COLOR_HEX, clamp } from './constants.js';

export const ROOM_ORIGIN = new THREE.Vector3(0, 0, -620);

function place(group, bundle, name, x, y, z, rotYdeg = 0, s = 1) {
  const tpl = A.prop(bundle, name);
  if (!tpl) return null;
  const o = tpl.clone();
  o.position.set(x, y, z);
  o.rotation.set(0, (rotYdeg * Math.PI) / 180, 0);
  o.scale.setScalar(s);
  o.traverse((m) => { if (m.isMesh) { m.castShadow = false; m.receiveShadow = false; } });
  group.add(o);
  return o;
}

export function createInterior(world) {
  let group = null;
  let built = false;
  let owner = null;           // { id, look, name }
  let sleeper = null;
  const actors = new Map();   // kimlik -> { ch, name, color, label }
  let bannerMat = null, blanketMat = null;
  let rug = null, chestLid = null;
  const temp = [];            // sinematik için eklenen nesneler

  // Yerel noktalar (oda merkezi orijin, ön taraf +Z açık)
  const L = {
    bed: { x: -2.2, z: -1.9 },
    sleeper: { x: -2.2, y: 0.66, z: -0.75 },
    bedside: { x: -1.05, z: -1.15 },
    bedside2: { x: -1.0, z: -0.15 },
    bedfoot: { x: -2.2, z: 0.75 },
    doorOut: { x: 5.2, z: 0 },
    doorIn: { x: 2.0, z: 0.1 },
    doorStep: { x: 3.1, z: 0.05 },
    chest: { x: -0.3, z: -2.0 },
    bookcase: { x: -2.55, z: 1.25 },
    table: { x: 1.55, z: -0.75 },
    rug: { x: 0.4, z: 0.6 },
    lantern: { x: -0.85, y: 0.75, z: -3.0 },
    // gözcü: sol duvardaki pencere (x≈-3.6, z=0)
    winOut: { x: -4.0, z: -0.45 },
    window: { x: -3.62, y: 1.35, z: -2.5 },
  };

  function build() {
    if (built || !A.has('interior/furniture.glb') || !A.has('interior/clues.glb')) return built;
    group = new THREE.Group();
    group.name = 'interior';
    group.position.copy(ROOM_ORIGIN);
    group.visible = false;
    world.scene.add(group);
    for (const x of [-2.5, 0, 2.5]) for (const z of [-2.5, 0, 2.5]) place(group, 'furniture', 'floor-planks', x, 0, z);
    for (const x of [-2.5, 0, 2.5]) place(group, 'furniture', x === 0 ? 'wall-wood-window' : 'wall-wood', x, 0, -2.5, 90);
    // sol duvarın penceresi yatağın hizasında (gözcü dışarıdan yatağı görebilsin)
    for (const z of [-2.5, 0, 2.5]) place(group, 'furniture', z === -2.5 ? 'wall-wood-window' : 'wall-wood', -2.5, 0, z, 180);
    for (const z of [-2.5, 0, 2.5]) place(group, 'furniture', z === 0 ? 'wall-wood-door' : 'wall-wood', 2.5, 0, z, 0);
    // dış zemin (pencereden bakınca boşluk görünmesin)
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshLambertMaterial({ color: '#3f5a34' }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.02;
    group.add(ground);
    const bed = place(group, 'furniture', 'bed', L.bed.x, 0, L.bed.z);
    // yatak örtüsü sahibin rengiyle
    if (bed) bed.traverse((m) => {
      if (m.isMesh && m.material && m.material.name === 'carpet') {
        if (!blanketMat) blanketMat = m.material.clone();
        m.material = blanketMat;
      }
    });
    rug = place(group, 'furniture', 'rug-round', L.rug.x, 0.01, L.rug.z);
    place(group, 'furniture', 'table', 1.6, 0, -1.5);
    place(group, 'furniture', 'chair', 1.6, 0, -0.3, 180);
    place(group, 'furniture', 'candle', 1.2, 0.79, -1.6);
    place(group, 'clues', 'mug', 1.85, 0.79, -1.35);
    place(group, 'clues', 'bread', 2.1, 0.79, -1.75);
    const chest = place(group, 'furniture', 'chest', -0.3, 0, -2.8);
    chestLid = chest;
    place(group, 'furniture', 'bookcase', -3.4, 0, 1.2, 90);
    place(group, 'furniture', 'lantern', L.lantern.x, 0, L.lantern.z);
    place(group, 'furniture', 'coat-rack', 3.05, 0, -2.0);
    place(group, 'furniture', 'plant-pot', 2.9, 0, -3.05);
    place(group, 'furniture', 'barrel', -3.0, 0, 3.0, 0, 0.8);
    // sahibin renginde duvar örtüsü
    bannerMat = new THREE.MeshLambertMaterial({ color: '#c9b48a', side: THREE.DoubleSide });
    const banner = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.25, 0.04), bannerMat);
    banner.position.set(1.55, 1.75, -3.42);
    group.add(banner);
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.1, 6), new THREE.MeshLambertMaterial({ color: '#5a3a22' }));
    rod.rotation.z = Math.PI / 2;
    rod.position.set(1.55, 2.4, -3.4);
    group.add(rod);
    built = true;
    return true;
  }

  const tmp = new THREE.Vector3();
  // yerel -> dünya
  function W(p, y = 0) { return tmp.set(ROOM_ORIGIN.x + p.x, ROOM_ORIGIN.y + (p.y ?? y), ROOM_ORIGIN.z + p.z).clone(); }

  function dress(o) {
    if (!build()) return false;
    owner = o;
    const hex = COLOR_HEX[clamp((o.look && o.look.color) | 0, 0, 19)];
    bannerMat.color.set(hex);
    if (blanketMat) blanketMat.color.set(hex).lerp(new THREE.Color('#ffffff'), 0.25);
    // uyuyan sahip
    if (sleeper) { sleeper.dispose(); sleeper = null; }
    if (o.look) {
      sleeper = new Character(world, 'room-sleeper', o.look);
      sleeper.setBase('lie', 0);
      sleeper.pos.copy(W(L.sleeper));
      sleeper.yaw = 0; sleeper.root.rotation.y = 0;
      world.scene.add(sleeper.root);
    }
    resetProps();
    return true;
  }

  function resetProps() {
    if (rug) { rug.position.set(L.rug.x, 0.01, L.rug.z); rug.rotation.set(0, 0, 0); }
    for (const o of temp.splice(0)) o.parent && o.parent.remove(o);
  }

  function show(o) {
    if (!dress(o)) return false;
    group.visible = true;
    if (sleeper) sleeper.setVisible(true);
    return true;
  }
  function hide() {
    if (group) group.visible = false;
    if (sleeper) { sleeper.dispose(); sleeper = null; }
    clearActors();
    resetProps();
    owner = null;
  }

  // Odaya bir oyuncunun kopyasını koy (etiketiyle)
  function addActor(key, look, name, at, yaw = 0) {
    removeActor(key);
    const ch = new Character(world, 'room-' + key, look);
    ch.pos.copy(W(at));
    ch.yaw = yaw; ch.root.rotation.y = yaw;
    world.scene.add(ch.root);
    actors.set(key, { ch, name, color: look.color | 0, label: name ? true : false });
    return ch;
  }
  function removeActor(key) {
    const a = actors.get(key);
    if (a) { a.ch.dispose(); actors.delete(key); }
  }
  function clearActors() { for (const k of [...actors.keys()]) removeActor(k); }

  function addTemp(obj) { group.add(obj); temp.push(obj); return obj; }

  function update(dt, time) {
    if (!group || !group.visible) return;
    if (sleeper) {
      sleeper.update(dt, time);
      // nefes alma: hafif yükselip alçalma
      sleeper.root.position.y = ROOM_ORIGIN.y + L.sleeper.y + Math.sin(time * 1.7) * 0.015;
    }
    for (const a of actors.values()) a.ch.update(dt, time);
  }

  // Kamera çekimleri (dünya uzayında)
  function shot(mode, portrait) {
    if (mode === 'window') {
      // pencerenin tam karşısından: duvar çerçeve olur, gözcü sağda siluet
      return { pos: W({ x: portrait ? -6.2 : -5.6, y: 1.6, z: -2.8 }), look: W({ x: -1.6, y: 0.85, z: -1.4 }), fov: portrait ? 52 : 42 };
    }
    if (mode === 'search') {
      return { pos: W({ x: portrait ? 0.8 : 3.4, y: portrait ? 10.2 : 4.6, z: portrait ? 5.2 : 5.6 }), look: W({ x: -0.5, y: 0.3, z: -0.6 }), fov: portrait ? 62 : 48 };
    }
    return { pos: W({ x: portrait ? 0.6 : 3.6, y: portrait ? 10.8 : 4.9, z: portrait ? 5.0 : 5.9 }), look: W({ x: portrait ? -0.5 : -0.9, y: 0.3, z: portrait ? -0.6 : -1.1 }), fov: portrait ? 62 : 48 };
  }

  return {
    L, W, show, hide, dress, update, shot, addActor, removeActor, clearActors, addTemp, resetProps,
    get visible() { return !!(group && group.visible); },
    get ready() { return build(); },
    get owner() { return owner; },
    get actors() { return actors; },
    get rug() { return rug; },
    get chest() { return chestLid; },
    lanternWorld() { return W(L.lantern); },
    dispose() {
      hide();
      if (group) {
        world.scene.remove(group);
        group.traverse((o) => { if (o.geometry && !o.geometry.userData.shared && (o.geometry.type === 'PlaneGeometry' || o.geometry.type === 'BoxGeometry' || o.geometry.type === 'CylinderGeometry')) o.geometry.dispose(); });
      }
      if (bannerMat) bannerMat.dispose();
      if (blanketMat) blanketMat.dispose();
    },
  };
}
