// Karakter: 12 köylü modelinden biri, oyuncu renginde kıyafet, şapka, animasyon durum makinesi
// (yumuşak geçişler), yol izleme ve adım dizisi (sahne yönetmeni de aynı dizileri kullanır).
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import * as A from './assets.js';
import { COLOR_HEX, HAT_NODES, HAT_Y_OFFSET, clamp, damp, wrapAngle } from './constants.js';

export const SCALE = 1.12;
const WALK_SPEED = 1.75;
const SPEEDS = { walk: WALK_SPEED, brisk: 2.35, sneak: 1.5, sprint: 3.4, stroll: 1.3 };
const BASE_CLIPS = ['idle', 'walk', 'sprint', 'crouch', 'sit', 'die', 'emote-yes', 'emote-no'];
const tmpV = new THREE.Vector3();

let ghostClipCache = null;

export class Character {
  constructor(world, id, look, opts = {}) {
    this.world = world;
    this.id = id;
    this.root = new THREE.Group();
    this.root.name = 'chr-' + id;
    this.pos = this.root.position;
    this.yaw = 0;
    this.speed = 0;
    this.visible = true;
    this.fade = 1;
    this.isGhost = !!opts.ghost;
    this.look = null;
    this.model = null;
    this.mixer = null;
    this.actions = {};
    this.weights = {};
    this.targets = {};
    this.base = 'idle';
    this.once = null;
    this.path = null;
    this.mode = 'walk';
    this.steps = [];
    this.stepT = 0;
    this.inside = null;       // içinde bulunduğu evin kimliği
    this.claimed = false;     // yönetmen kontrolünde mi
    this.idleTimer = 4 + Math.random() * 8;
    this.faceYaw = null;
    this.stepPhase = Math.random();
    this.headY = 1.75 * SCALE;
    this.seed = Math.random();
    this.props = [];
    this.setLook(look);
  }

  setLook(look) {
    const key = this.isGhost ? 'ghost|' + look.color : `${look.skin}|${look.color}|${look.hat}`;
    if (this.lookKey === key) return;
    this.lookKey = key;
    this.look = { ...look };
    if (this.model) { this.root.remove(this.model); this.mixer.stopAllAction(); this.mixer.uncacheRoot(this.model); }
    // bekleyen geçişler eski eylemlere bağlı: hepsini sıfırla (aksi halde her karede hata)
    this.actions = {}; this.weights = {}; this.targets = {}; this.once = null;
    this.headBone = null; this.props = [];
    if (this.isGhost) this.buildGhost(look); else this.buildVillager(look);
    // mevcut durumu yeniden uygula
    const b = this.base; this.base = null; this.setBase(b || 'idle', 0);
  }

  buildVillager(look) {
    const skin = clamp(look.skin | 0, 0, 11);
    const g = A.get(`characters/villager-${String(skin).padStart(2, '0')}.glb`);
    const model = SkeletonUtils.clone(g.scene);
    const cloth = A.tinted('cloth', COLOR_HEX[clamp(look.color | 0, 0, 19)]);
    model.traverse((o) => {
      if (!o.isMesh) return;
      if (o.material.name === 'cloth' && cloth) o.material = cloth;
      o.castShadow = true;
      o.receiveShadow = false;
      o.frustumCulled = false;
    });
    const head = model.getObjectByName('head');
    const hatNode = HAT_NODES[look.hat | 0];
    if (head && hatNode && A.has('hats/hats.glb')) {
      const tpl = A.get('hats/hats.glb').scene.getObjectByName(hatNode);
      if (tpl) {
        const hat = tpl.clone();
        hat.position.set(0, HAT_Y_OFFSET[skin] || 0, 0);
        hat.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.frustumCulled = false; } });
        head.add(hat);
      }
    }
    model.scale.multiplyScalar(SCALE);
    this.model = model;
    this.root.add(model);
    this.mixer = new THREE.AnimationMixer(model);
    this.clips = A.clips();
    this.headBone = head || null;
    this.headBaseQ = head ? head.quaternion.clone() : null;
    this.armR = model.getObjectByName('arm-right');
    this.armL = model.getObjectByName('arm-left');
    this.headY = (1.72 + (look.hat ? 0.18 : 0)) * SCALE;
  }

  buildGhost(look) {
    const g = A.get('characters/ghost.glb');
    const model = g.scene.clone(true);
    const mat = A.tinted('tint-ghost', COLOR_HEX[clamp(look.color | 0, 0, 19)], '|ghost');
    if (mat) { mat.transparent = true; mat.opacity = 0.62; mat.depthWrite = false; mat.emissive.set(COLOR_HEX[look.color | 0]).multiplyScalar(0.25); }
    const gm = A.material('graveyard');
    if (!this.ghostBodyMat && gm) {
      this.ghostBodyMat = gm.clone();
      this.ghostBodyMat.transparent = true; this.ghostBodyMat.opacity = 0.62; this.ghostBodyMat.depthWrite = false;
    }
    model.traverse((o) => {
      if (!o.isMesh) return;
      o.material = o.material.name.startsWith('tint') ? mat : this.ghostBodyMat;
      o.castShadow = false;
      o.renderOrder = 3;
    });
    model.scale.multiplyScalar(SCALE * 0.95);
    this.model = model;
    this.root.add(model);
    this.mixer = new THREE.AnimationMixer(model);
    if (!ghostClipCache) ghostClipCache = g.animations;
    this.clips = ghostClipCache;
    this.headY = 1.95 * SCALE;
  }

  action(name) {
    if (this.actions[name]) return this.actions[name];
    const clip = THREE.AnimationClip.findByName(this.clips, name);
    if (!clip) return null;
    const a = this.mixer.clipAction(clip);
    if (name === 'die') { a.setLoop(THREE.LoopOnce, 1); a.clampWhenFinished = true; }
    a.enabled = true;
    a.setEffectiveWeight(0);
    a.play();
    a.time = Math.random() * clip.duration * (name === 'die' ? 0 : 1);
    this.actions[name] = a;
    this.weights[name] = 0;
    return a;
  }

  // Temel durum: idle | walk | sprint | sneak | sit | lie | peek | cheer | sad | float
  setBase(name, fade = 0.3) {
    if (this.base === name) return;
    this.base = name;
    this.fadeRate = fade > 0 ? 1 / fade : 1000;
    for (const k in this.targets) this.targets[k] = 0;
    const set = (clip, w) => { if (this.action(clip)) this.targets[clip] = w; };
    switch (name) {
      case 'walk': set('walk', 1); break;
      case 'sprint': set('sprint', 1); break;
      case 'sneak': set('walk', 0.6); set('crouch', 0.4); break;
      case 'sit': set('sit', 1); break;
      case 'peek': set('crouch', 1); break;
      case 'cheer': set('emote-yes', 1); break;
      case 'sad': set('emote-no', 1); break;
      case 'hold': set('idle', 0.45); set('holding-right', 0.55); break;
      case 'holdboth': set('idle', 0.4); set('holding-both', 0.6); break;
      case 'warm': set('sit', 0.55); set('holding-both', 0.45); break;
      case 'loom': set('crouch', 0.45); set('holding-both', 0.55); break;
      case 'lie': {
        const a = this.action('die');
        if (a) { a.reset(); a.play(); a.time = 0; this.targets.die = 1; }
        break;
      }
      default:
        // doğrudan klip adı (ör. 'interact-right', 'attack-melee-right') de kabul edilir
        if (name !== 'idle' && this.action(name)) set(name, 1); else set('idle', 1);
    }
    if (name === 'lie' && fade <= 0 && this.actions.die) this.actions.die.time = this.actions.die.getClip().duration;
    if (fade <= 0) for (const k in this.targets) this.weights[k] = this.targets[k];
  }

  // Tek seferlik hareket (el sallama, eğilip alma, zıplama) ve sonra temel duruma dönüş
  playOnce(name, { fade = 0.2, timeScale = 1 } = {}) {
    const a = this.action(name);
    if (!a) return 0;
    a.reset(); a.timeScale = timeScale; a.setLoop(THREE.LoopOnce, 1); a.clampWhenFinished = true; a.play();
    const dur = a.getClip().duration / timeScale;
    this.once = { name, t: 0, dur, fade };
    return dur;
  }

  // ---- adım dizisi ----
  run(steps) { this.steps = steps.slice(); this.stepT = 0; this.path = null; this.stepStarted = false; }
  get busy() { return this.steps.length > 0; }

  walkTo(points, mode = 'walk') { this.path = points.slice(); this.mode = mode; }

  setVisible(v) {
    this.visible = v;
    this.root.visible = v;
  }

  update(dt, time) {
    // adım dizisi yürüt
    this.runSteps(dt);
    // yol izleme
    let targetSpeed = 0;
    if (this.path && this.path.length) {
      const p = this.path[0];
      const dx = p.x - this.pos.x, dz = p.z - this.pos.z;
      const d = Math.hypot(dx, dz);
      const last = this.path.length === 1;
      // takılma denetimi: ara nokta bir engelin içindeyse ilerleme durur -> atla
      if (this.bestD == null || d < this.bestD - 0.05) { this.bestD = d; this.stuckT = 0; } else this.stuckT = (this.stuckT || 0) + dt;
      if (d < (last ? 0.06 : 0.45) || (this.stuckT > 0.7 && (!last || d < 1.2)) || this.stuckT > 2.5) {
        this.path.shift();
        this.bestD = null; this.stuckT = 0;
        if (!this.path.length) this.path = null;
      } else {
        targetSpeed = SPEEDS[this.mode] || WALK_SPEED;
        if (last) targetSpeed = Math.min(targetSpeed, 0.6 + d * 2.2);
        // köşelerde sonraki noktaya doğru yumuşak dönüş
        let tx = dx, tz = dz;
        if (!last && d < 1.2) {
          const n = this.path[1];
          const k = 1 - d / 1.2;
          tx = dx * (1 - k) + (n.x - this.pos.x) * k; tz = dz * (1 - k) + (n.z - this.pos.z) * k;
        }
        const want = Math.atan2(tx, tz);
        this.yaw += wrapAngle(want - this.yaw) * damp(9, dt);
        const step = Math.min(d, this.speed * dt);
        // hareket yönü: bakılan yöne yakın (kayma olmasın), hedefe doğru
        const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
        const ux = dx / d, uz = dz / d;
        const mx = fx * 0.55 + ux * 0.45, mz = fz * 0.55 + uz * 0.45;
        const ml = Math.hypot(mx, mz) || 1;
        this.pos.x += (mx / ml) * step; this.pos.z += (mz / ml) * step;
      }
    } else if (this.faceYaw != null) {
      this.yaw += wrapAngle(this.faceYaw - this.yaw) * damp(4, dt);
    }
    this.speed += (targetSpeed - this.speed) * damp(targetSpeed > this.speed ? 6 : 10, dt);
    if (this.speed < 0.02) this.speed = 0;
    this.root.rotation.y = this.yaw;

    // animasyon temeli: hızdan
    const moving = this.speed > 0.15;
    if (this.base !== 'lie' && this.base !== 'float') {
      if (moving) {
        const want = this.mode === 'sprint' ? 'sprint' : this.mode === 'sneak' ? 'sneak' : 'walk';
        if (this.base !== want) this.setBase(want, 0.18);
      } else if (this.base === 'walk' || this.base === 'sprint' || this.base === 'sneak') {
        this.setBase(this.restPose || 'idle', 0.25);
      }
    }
    // yürüme hızına göre adım temposu (ayak kayması olmasın)
    if (this.actions.walk) this.actions.walk.timeScale = moving ? clamp(this.speed / WALK_SPEED, 0.5, 1.6) * (this.base === 'sneak' ? 1.25 : 1) : 1;
    if (this.actions.sprint) this.actions.sprint.timeScale = moving ? clamp(this.speed / 3.2, 0.6, 1.4) : 1;
    if (moving && this.isMe && this.visible && this.world.sfxStep) {
      this.stepPhase += dt * this.speed / 1.4;
      if (this.stepPhase > 1) { this.stepPhase -= 1; this.world.sfxStep(); }
    }

    // boşta küçük hareketler
    if (!moving && this.base === 'idle' && !this.once && !this.claimed) {
      this.idleTimer -= dt;
      if (this.idleTimer < 0) {
        this.idleTimer = 6 + Math.random() * 10;
        const r = Math.random();
        this.playOnce(r < 0.4 ? 'interact-left' : r < 0.75 ? 'interact-right' : 'pick-up', { timeScale: 0.7 });
      }
    }

    // ağırlıkları güncelle (tek seferlik varsa temeli bastır)
    let onceW = 0;
    if (this.once && !this.actions[this.once.name]) this.once = null;
    if (this.once) {
      const o = this.once;
      o.t += dt;
      const fin = o.t >= o.dur;
      onceW = Math.min(1, o.t / o.fade) * (fin ? 0 : Math.min(1, (o.dur - o.t) / o.fade + 0.0001));
      if (fin) { this.once = null; this.actions[o.name].setEffectiveWeight(0); onceW = 0; }
    }
    let sum = 0;
    for (const k in this.weights) {
      const t = this.targets[k] || 0;
      let w = this.weights[k];
      const r = this.fadeRate * dt;
      w = w < t ? Math.min(t, w + r) : Math.max(t, w - r);
      this.weights[k] = w;
      sum += w;
    }
    const norm = sum > 0.0001 ? (1 - onceW) / sum : 0;
    for (const k in this.weights) {
      if (this.once && k === this.once.name) continue;
      const a = this.actions[k];
      if (a) a.setEffectiveWeight(this.weights[k] * norm); else delete this.weights[k];
    }
    if (this.once) this.actions[this.once.name].setEffectiveWeight(onceW);
    if (this.headBone) this.headBone.quaternion.copy(this.headBaseQ); // klipte baş izi yoksa birikmesin
    this.mixer.update(dt);
    // baş çevirme: konuşana / ateşe / kameraya (animasyonun üstüne, sınırlı)
    if (this.headBone) {
      let want = 0;
      if (this.lookAt && this.base !== 'lie' && this.speed < 0.3) {
        const a = Math.atan2(this.lookAt.x - this.pos.x, this.lookAt.z - this.pos.z);
        want = clamp(wrapAngle(a - this.yaw), -0.85, 0.85);
        if (this.lookUntil && time > this.lookUntil) { this.lookAt = null; }
      }
      this.headYaw = (this.headYaw || 0) + (want - (this.headYaw || 0)) * damp(5, dt);
      if (Math.abs(this.headYaw) > 0.002) this.headBone.rotateY(this.headYaw);
    }
    // ayak tozu (yürürken hafif)
    if (moving && this.visible && this.world.footDust && !this.isGhost) {
      this.dustT = (this.dustT || 0) + dt * this.speed;
      if (this.dustT > 1.15) { this.dustT = 0; this.world.footDust(this.pos.x, this.pos.z, this.speed); }
    }

    // hayaletler süzülür
    if (this.isGhost && this.model) this.model.position.y = 0.35 + Math.sin(time * 1.6 + this.seed * 9) * 0.12;
  }

  // ---- adımlar ----
  // Adım biçimleri:
  //  { walk: [pts], mode } | { wait: s } | { face: yaw } | { faceTo: {x,z} } | { pose: 'sit' }
  //  { once: 'pick-up' } | { hide: true } | { show: true } | { at: {x,z} } | { call: fn } | { until: fn }
  runSteps(dt) {
    while (this.steps.length) {
      const s = this.steps[0];
      if (!this.stepStarted) {
        this.stepStarted = true;
        this.stepT = 0;
        if (s.walk) { this.walkTo(s.walk, s.mode || 'walk'); this.faceYaw = null; this.restPose = null; if (this.base === 'sit' || this.base === 'peek' || this.base === 'cheer' || this.base === 'sad') this.setBase('idle', 0.2); }
        if (s.at) { this.pos.x = s.at.x; this.pos.z = s.at.z; this.path = null; this.speed = 0; }
        if (s.face != null) this.faceYaw = s.face;
        if (s.faceTo) this.faceYaw = Math.atan2(s.faceTo.x - this.pos.x, s.faceTo.z - this.pos.z);
        if (s.snapFace) this.yaw = this.faceYaw;
        if (s.pose) { this.restPose = s.pose === 'idle' ? null : s.pose; this.setBase(s.pose, s.fade ?? 0.35); }
        if (s.once) this.stepDur = this.playOnce(s.once, s.opts || {});
        if (s.hide) this.setVisible(false);
        if (s.show) this.setVisible(true);
        if (s.call) s.call(this);
      }
      this.stepT += dt;
      let done = true;
      if (s.walk) done = !this.path;
      else if (s.wait) done = this.stepT >= s.wait;
      else if (s.once) done = this.stepT >= (this.stepDur || 0) * (s.part || 1);
      else if (s.until) done = s.until(this);
      if (!done) return;
      this.steps.shift();
      this.stepStarted = false;
    }
  }

  // Ele bir nesne tut (fener, iksir, meşale, yay). side: 'right' | 'left'
  hold(obj, side = 'right', off = [0, -0.14, 0.04]) {
    const arm = side === 'left' ? this.armL : this.armR;
    if (!arm || !obj) return;
    obj.position.set(off[0], off[1], off[2]);
    obj.scale.setScalar(obj.userData.holdScale || 0.4);
    arm.add(obj);
    this.props.push(obj);
  }
  dropProps() {
    for (const o of this.props) o.parent && o.parent.remove(o);
    this.props = [];
  }
  gaze(target, seconds, time) { this.lookAt = target ? { x: target.x, z: target.z } : null; this.lookUntil = seconds ? time + seconds : 0; }

  dispose() {
    this.dropProps();
    if (this.model) this.model.traverse((o) => { if (o.isSkinnedMesh && o.skeleton) o.skeleton.dispose(); });
    if (this.mixer) { this.mixer.stopAllAction(); if (this.model) this.mixer.uncacheRoot(this.model); }
    if (this.ghostBodyMat) this.ghostBodyMat.dispose();
    this.root.parent && this.root.parent.remove(this.root);
  }
}

export function headWorld(ch, out) {
  return out.set(ch.pos.x, ch.pos.y + ch.headY, ch.pos.z);
}
export { tmpV };
