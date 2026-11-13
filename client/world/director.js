// Sahne yönetmeni: duyuru sinematiklerini oynatır. Yeni bir duyuru (ya da skip()) çalışan sinematiği temiz
// biçimde keser: kamera, ışık, devralınan karakterler, geçici nesneler ve iç mekân eski haline döner, eski
// Promise çözülür, yenisi başlar. Sinematikler cine.js'te kaydedilir: register(kind, scene?, async (ctx, msg) => …)
import * as THREE from 'three';

const CANCEL = { cancelled: true };
export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const easeOut = (t) => 1 - Math.pow(1 - t, 3);
// Beklemeden başlatılan (await edilmeyen) ara değerler kesilince "yakalanmamış" hata vermesin
function quiet(p) { p.catch(() => {}); return p; }
// Emniyet ağı: beklenmeden başlatılan bir sahne parçası kesilince tarayıcıya "yakalanmamış hata" olarak düşmesin.
if (typeof window !== 'undefined' && !window.__vkwCancelGuard) {
  window.__vkwCancelGuard = true;
  window.addEventListener('unhandledrejection', (e) => { if (e && e.reason === CANCEL) e.preventDefault(); });
}

export function createDirector(world) {
  const registry = new Map(); // 'kind' veya 'kind:scene' -> fn
  let running = null;         // { msg, resolve, ctx }
  let disposed = false;
  let token = 0;

  function register(kind, scene, fn) {
    if (typeof scene === 'function') { fn = scene; scene = null; }
    registry.set(scene ? kind + ':' + scene : kind, fn);
  }
  function find(msg) {
    return registry.get(msg.kind + ':' + (msg.scene || '')) || registry.get(msg.kind);
  }

  // Yeni duyuru gelince çalışan kesilir (arayüz "geç" dediğinde sıradakini hemen ister)
  function announce(msg) {
    return new Promise((resolve) => {
      if (disposed || !msg || !msg.kind) { resolve(); return; }
      stop();
      const fn = find(msg);
      if (!fn) { resolve(); return; }
      const my = ++token;
      // ölüm getiren sahnelerde mezar taşını sahne düşürür
      if (['death', 'hanged', 'shot', 'left'].includes(msg.kind)) world.holdDeaths((msg.targets || []).map((t) => t.id).filter(Boolean));
      const ctx = makeCtx(my, msg);
      const item = { msg, resolve, ctx };
      running = item;
      (async () => {
        try { await Promise.race([fn(ctx, msg), ctx.timeout(13)]); } catch (e) {
          if (e !== CANCEL) console.warn('[VKWorld] sinematik hatası', e);
        }
        finish(item);
      })();
    });
  }

  function finish(item) {
    if (item.done) return;
    item.done = true;
    try { item.ctx.cleanup(); } catch (e) { console.warn('[VKWorld] sinematik temizliği', e); }
    if (running === item) running = null;
    item.resolve();
  }

  // Çalışan sinematiği hemen bitir
  function stop() {
    if (running) {
      const it = running;
      it.ctx.cancel();
      finish(it);
    }
  }

  function makeCtx(my, msg) {
    const claims = new Map();   // ch -> anlık görüntü
    const timers = new Set();
    const waits = new Set();
    const temps = [];
    const hidden = [];
    let cancelled = false;
    let usedRoom = false;
    let todSet = false;
    const alive = () => !disposed && !cancelled && my === token;
    const ctx = {
      world, msg, alive,
      cancel() {
        cancelled = true;
        for (const w of waits) w.reject(CANCEL);
        waits.clear();
      },
      // dünya zamanıyla bekle; kesilirse fırlatır (fonksiyon kendiliğinden çözülür)
      wait(s) {
        if (!alive()) return quiet(Promise.reject(CANCEL));
        return quiet(new Promise((resolve, reject) => {
          const w = { resolve, reject, left: s };
          waits.add(w);
          world.ticker.push((dt) => {
            if (!waits.has(w)) return true;
            w.left -= dt;
            if (w.left <= 0) { waits.delete(w); resolve(); return true; }
            return false;
          });
        }));
      },
      // gerçek zaman tavanı (sekme gizliyken de dolsun)
      timeout(s) { return new Promise((r) => { const t = setTimeout(r, s * 1000); timers.add(t); }); },
      // kare başı ara değer (0..1), bitince çözülür
      tween(dur, fn, ease = easeInOut) {
        if (!alive()) return quiet(Promise.reject(CANCEL));
        return quiet(new Promise((resolve, reject) => {
          let t = 0;
          const w = { resolve, reject };
          waits.add(w);
          world.ticker.push((dt) => {
            if (!waits.has(w)) return true;
            t = Math.min(dur, t + dt);
            try { fn(ease(dur > 0 ? t / dur : 1), dt); } catch (e) { console.warn(e); }
            if (t >= dur) { waits.delete(w); resolve(); return true; }
            return false;
          });
        }));
      },
      // Kamera: anlık hedef (yumuşak geçiş) ya da hareketli yol
      shot(pos, look, opts = {}) {
        if (!alive()) return;
        world.rig.setOverride({ pos: pos.clone(), look: look.clone(), fov: opts.fov || 40, k: opts.k || 2.4 });
      },
      cut(pos, look, opts = {}) {
        if (!alive()) return;
        world.rig.setOverride({ pos: pos.clone(), look: look.clone(), fov: opts.fov || 40, k: 60 }, true);
      },
      // async sarmalayıcı yok: beklenmeden çağrıldığında kesilme "yakalanmamış söz" hatasına dönüşmesin
      move(p0, l0, p1, l1, dur, opts = {}) {
        const p = new THREE.Vector3(), l = new THREE.Vector3();
        ctx.cut(p0, l0, opts);
        return ctx.tween(dur, (k) => {
          p.lerpVectors(p0, p1, k); l.lerpVectors(l0, l1, k);
          world.rig.setOverride({ pos: p, look: l, fov: opts.fov || 40, k: 60 }, true);
        }, opts.ease || easeInOut);
      },
      // Gerçek karakteri devral (konum, görünürlük, ev durumu sonra geri yüklenir)
      claim(id) {
        const ch = world.chars.get(id);
        if (!ch) return null;
        if (!claims.has(ch)) {
          claims.set(ch, { x: ch.pos.x, y: ch.pos.y, z: ch.pos.z, yaw: ch.yaw, visible: ch.visible, inside: ch.inside, peeking: ch.peeking, base: ch.base });
          ch.claimed = true;
          ch.run([]);
        }
        return ch;
      },
      // Geçici sahne nesnesi (temizlikte kaldırılır)
      add(obj, parent) { (parent || world.scene).add(obj); temps.push(obj); return obj; },
      prop(bundle, name, x, y, z, rotY = 0, s = 1) {
        const tpl = world.assets.prop(bundle, name);
        if (!tpl) return null;
        const o = tpl.clone();
        o.position.set(x, y, z); o.rotation.y = rotY; o.scale.setScalar(s);
        o.traverse((m) => { if (m.isMesh) m.castShadow = true; });
        return ctx.add(o);
      },
      // Karakter kopyası (etiketli); temizlikte silinir
      actor(look, name, x, z, yaw = 0, kind) {
        const ch = world.makeActor(look, name, kind);
        ch.pos.set(x, 0, z); ch.yaw = yaw; ch.root.rotation.y = yaw;
        temps.push({ dispose: () => world.dropActor(ch) });
        return ch;
      },
      hideObj(o) { if (o && o.visible) { o.visible = false; hidden.push(o); } },
      // Günün saati (sinematik süresince)
      tod(hour, snap) { todSet = true; world.setTodOverride(hour, snap); },
      room() { usedRoom = true; return world.room; },
      fx: world.fx,
      sfx: (n, o) => world.sfx(n, o),
      flash: (a, c) => world.flash(a, c),
      cleanup() {
        cancelled = true;
        for (const t of timers) clearTimeout(t);
        for (const w of waits) w.reject(CANCEL);
        waits.clear();
        for (const o of temps.splice(0)) {
          if (o.dispose && !o.isObject3D) o.dispose();
          else if (o.parent) o.parent.remove(o);
          if (o.userData && o.userData.cleanup) o.userData.cleanup();
        }
        for (const o of hidden.splice(0)) o.visible = true;
        for (const [ch, s] of claims) {
          ch.claimed = false;
          ch.dropProps();
          ch.pos.set(s.x, s.y, s.z); ch.yaw = s.yaw;
          ch.inside = s.inside; ch.peeking = s.peeking;
          if (ch.alive !== false) ch.setVisible(s.visible && !world.isDeadShown(ch.id));
          ch.setBase(s.base === 'walk' || s.base === 'sprint' || s.base === 'sneak' ? 'idle' : (s.base || 'idle'), 0.2);
          ch.run([]);
        }
        world.endCineRoom(); world.moonOverride(null); world.fogBoost(1); world.releaseDeaths();
        if (todSet) world.setTodOverride(null);
        world.rig.setOverride(null);
        world.flash(0);
        world.cineTint(null);
        if (claims.size) { claims.clear(); world.reapply(true); }
      },
    };
    return ctx;
  }

  return {
    register, announce, CANCEL,
    get running() { return !!running; },
    get current() { return running ? running.msg : null; },
    skip() { stop(); },
    reset() { token++; stop(); world.rig.setOverride(null); },
    dispose() { disposed = true; token++; stop(); },
  };
}
