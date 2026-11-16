// Gece gösterisi (§15.1): gecenin "gösteri" aşamasında sunucunun izleyiciye özel state.night.show verisi oynatılır.
// Kendi karakterin (ve kötü takım arkadaşların) evden çıkar, hedef eve yürür, girer, çıkar ve evine döner; gözcü
// arka pencereden gelenleri izler; saldırıya uğrayan ev sahibi kendi odasında kimliksiz siyah siluetleri görür.
// Her şey 14 sn'lik pencereye sığar; aşama erken biterse ya da herkese açık bir duyuru gelirse gösteri kesilir ve
// devralınan karakterler evlerine (gizli) geri konur. Ayrı (kapsamlı) bir yönetmenle çalışır: ana yönetmenin
// sinematikleri (ör. 9. sn'deki kahin sonucu) kamerayı ve odayı alır, gösteri arkada yürümeye devam eder.
import * as THREE from 'three';

export const SHOW_S = 14;
const KILL_TRIP = { kill: 1, steal: 1, poison: 1 };
const HOME_KILL = { attack: 1, steal: 1, poison: 1 };
const GREEN = '#5fe08a';
// gösteriyi kesmeyen (izleyiciye özel) duyurular
export const PRIVATE_KINDS = { seer: 1, watch: 1, promote: 1, locked: 1, bounced: 1, lockreport: 1, steal: 1, stealfail: 1, saved: 1, attacked: 1, killed: 1 };

export function createNightShow(world, dir, choreo, H) {
  let startedSig = '';
  let startedRound = -1;
  let nightRound = -1;
  let deadSeen = false;        // izleyici bu gece kendi ölümünü gösteride gördü
  let watched = null;          // gözcünün bu gece canlı izlediği ev
  let focus = null;            // kamera odağı (dünya noktaları) ya da null
  let running = false;
  const actors = new Set();    // gösteride yürüyen gerçek karakterler (gece etiketleri görünsün)

  // ---------- yeşil artı işaretleri (koruma) — tek seferlik havuz, kare başı ayırma yok ----------
  let plus = null;
  function plusTex() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    g.shadowColor = 'rgba(95,224,138,0.9)'; g.shadowBlur = 10;
    g.fillStyle = '#ffffff';
    const r = 5;
    const rr = (x, y, w, h) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.fill(); };
    rr(25, 10, 14, 44); rr(10, 25, 44, 14);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }
  function ensurePlus() {
    if (plus) return plus;
    const tex = plusTex();
    const list = [];
    for (let i = 0; i < 20; i++) {
      const m = new THREE.SpriteMaterial({ map: tex, color: GREEN, transparent: true, depthWrite: false, fog: false });
      const s = new THREE.Sprite(m);
      s.visible = false;
      s.renderOrder = 7;
      s.userData = { t: 1, life: 1, vy: 0, vx: 0, vz: 0, sz: 0.4 };
      world.scene.add(s);
      list.push(s);
    }
    plus = { tex, list, ticking: false };
    return plus;
  }
  function plusTick(dt) {
    let live = 0;
    for (const s of plus.list) {
      const u = s.userData;
      if (u.t >= u.life) continue;
      u.t += dt;
      if (u.t >= u.life) { s.visible = false; continue; }
      live++;
      const k = u.t / u.life;
      s.position.x += u.vx * dt; s.position.y += u.vy * dt; s.position.z += u.vz * dt;
      const sc = u.sz * (0.6 + Math.min(1, k * 4) * 0.4);
      s.scale.set(sc, sc, 1);
      s.material.opacity = 1 - k * k;
    }
    if (!live) plus.ticking = false;
    return !live;
  }
  function plusBurst(x, y, z, n = 8, spread = 0.9, size = 1) {
    const P = ensurePlus();
    let used = 0;
    for (const s of P.list) {
      if (used >= n) break;
      const u = s.userData;
      if (u.t < u.life) continue;
      used++;
      const a = Math.random() * Math.PI * 2, r = Math.random() * spread;
      s.position.set(x + Math.cos(a) * r, y + Math.random() * 0.4, z + Math.sin(a) * r);
      u.t = 0; u.life = 1.2 + Math.random() * 0.6; u.vy = 0.9 + Math.random() * 0.7; u.vx = Math.cos(a) * 0.15; u.vz = Math.sin(a) * 0.15;
      u.sz = (0.32 + Math.random() * 0.22) * size;
      s.scale.set(0.01, 0.01, 1);
      s.visible = true;
    }
    if (!P.ticking) { P.ticking = true; world.ticker.push(plusTick); }
  }

  // ---------- yardımcılar ----------
  // Siluet: pelerinli figür, kapkara; kimliği belli olmaz (saldırı türünde kırmızı gözler kalır)
  function shadow(ctx, x, z, yaw, o = {}) {
    const f = H.figure(ctx, x, z, yaw);
    if (!f) return null;
    f.root.traverse((m) => {
      if (m.isSprite && !o.eyes) m.visible = false;
      if (m.isMesh) {
        const mat = new THREE.MeshBasicMaterial({ color: o.color || '#0b0a12', transparent: true, opacity: o.opacity || 0.86 });
        m.material = mat;
        m.userData.cleanup = () => mat.dispose();
      }
    });
    if (o.glow) { const gl = H.makeGlow(1.6, o.glow); gl.position.set(0, 1.2, 0); f.root.add(gl); }
    return f;
  }
  // figürü noktalar boyunca sabit hızla yürüt
  async function figWalk(ctx, f, pts, speed = 1.8, anim = 'walk') {
    if (!f || pts.length < 2) return;
    const segs = [];
    let tot = 0;
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z); segs.push(l); tot += l; }
    if (tot < 0.01) return;
    f.play(anim);
    await ctx.tween(tot / speed, (k) => {
      let d = k * tot, i = 0;
      while (i < segs.length - 1 && d > segs[i]) { d -= segs[i]; i++; }
      const a = pts[i], b = pts[i + 1], t = segs[i] > 0 ? Math.min(1, d / segs[i]) : 1;
      f.root.position.x = a.x + (b.x - a.x) * t; f.root.position.z = a.z + (b.z - a.z) * t;
      f.root.rotation.y = Math.atan2(b.x - a.x, b.z - a.z);
    }, (x) => x);
    f.play('idle');
  }
  function faceFig(f, p) { if (f) f.root.rotation.y = Math.atan2(p.x - f.root.position.x, p.z - f.root.position.z); }

  function alivePlayer(st, id) { const p = st.players.find((x) => x.id === id); return p && p.alive && !p.left ? p : null; }

  // ---------- gösteri sahnesi ----------
  dir.register('show', async (ctx, msg) => {
    const { show, state: st } = msg;
    const V = world.village;
    const me = st.me.id;
    const t0 = world.time, base = msg.el || 0;
    const clock = () => base + (world.time - t0);
    const until = (t) => ctx.wait(Math.max(0, t - clock()));
    const taken = new Set();
    const jobs = [];
    const fpts = [];
    const portrait = () => world.rig.portrait;
    const addFocus = (id) => {
      const h = V.house(id);
      if (!h) return;
      fpts.push(new THREE.Vector3(h.cx, 0, h.cz), new THREE.Vector3(h.cx, h.info.height, h.cz));
      const a = V.anchors(h);
      fpts.push(new THREE.Vector3(a.approach.x, 0, a.approach.z));
    };
    const job = (p) => { const q = Promise.resolve(p).catch(() => {}); jobs.push(q); return q; };

    // gerçek karakteri evine (gizli) koy ve devral: kesilince de oraya döner
    function takeHome(id) {
      if (taken.has(id) || !alivePlayer(st, id)) return null;
      const ch = world.chars.get(id);
      const a = world.houseAnchors(id);
      if (!ch || !a || ch.claimed) return null;
      ch.run([]); ch.path = null; ch.peeking = null; ch.inside = id; ch.drive = null;
      ch.pos.set(a.inside.x, 0, a.inside.z); ch.speed = 0;
      ch.setVisible(false);
      ctx.claim(id);
      taken.add(id); actors.add(id);
      return ch;
    }
    async function walkTrip(id, to, o) {
      const ch = o.again ? world.chars.get(id) : takeHome(id);
      if (!ch || (o.again && !taken.has(id))) return;
      const steps = choreo.tripSteps({ home: id, to, clock, ...o });
      if (!steps.length) return;
      ch.run(steps);
      while (ch.busy && clock() < SHOW_S - 1) await ctx.wait(0.2);
    }

    const trip = show.trip && show.trip.to !== me && V.house(show.trip.to) ? show.trip : null;
    const homeKills = (show.home || []).filter((e) => HOME_KILL[e.kind]);
    if (show.dead && !homeKills.some((e) => e.result === 'died')) homeKills.push({ kind: 'attack', result: 'died' });

    // 1) kendi yolculuğum (+ takım). Cadı aynı gece iki kez yürüyebilir (trips): önce erken, sonra geç dilim.
    const myTrips = (Array.isArray(show.trips) && show.trips.length > 1 ? show.trips : [trip]).filter((t) => t && t.to !== me && V.house(t.to)).slice(0, 2);
    if (trip && myTrips.length) {
      addFocus(me);
      const two = myTrips.length > 1;
      const legs = myTrips.map((tr, k) => {
        const kill = KILL_TRIP[tr.kind] && tr.outcome !== 'bounced';
        const peek = tr.kind === 'watch';
        addFocus(tr.to);
        if (!two) return { tr, kill, peek, tArr: peek ? 3.2 : 3.6, tLeave: peek ? 8.8 : kill ? 7.0 : 5.4, tHome: peek ? 11.2 : 10.2 };
        return k === 0 ? { tr, kill, peek, tArr: 2.6, tLeave: kill ? 4.6 : 3.6, tHome: kill ? 6.4 : 5.4 } : { tr, kill, peek, tArr: kill ? 8.0 : 7.4, tLeave: kill ? 10.0 : 8.6, tHome: 12.2 };
      });
      const mates = (show.team || []).filter((t) => t.id !== me && t.to === trip.to && t.outcome !== 'bounced' && (t.kind || 'kill') === 'kill').map((t) => t.id);
      job((async () => {
        for (let k = 0; k < legs.length; k++) {
          const L0 = legs[k];
          await walkTrip(me, L0.tr.to, {
            again: k > 0, peek: L0.peek, bounced: L0.tr.outcome === 'bounced', tArrive: L0.tArr, tLeave: L0.tLeave, tHome: L0.tHome, delay: k ? 0.05 : 0.15,
            onInside: L0.kill && L0.tr.interior !== false ? () => job(killerRoom(L0.tr, k === 0 ? mates : [], L0.tLeave)) : null,
          });
        }
      })());
      if (show.saved) { const pr = myTrips.find((t) => t.kind === 'protect' || t.kind === 'heal'); job(savedPlus(pr ? pr.to : trip.to)); }
    } else if (show.saved) {
      // kendini koruyan (evinden çıkmayan) doktor / cadı: artılar kendi evinden yükselir
      job(savedPlus(show.trip && V.house(show.trip.to) ? show.trip.to : me));
    }
    (show.team || []).forEach((t, i) => {
      if (t.id === me || !V.house(t.to)) return;
      addFocus(t.to);
      const bounced = t.outcome === 'bounced';
      const kill = (t.kind || 'kill') === 'kill' && !bounced;
      job(walkTrip(t.id, t.to, { bounced, tArrive: 3.8 + i * 0.25, tLeave: (kill ? 7.0 : 5.6) + i * 0.15, tHome: 10.4, delay: 0.3 + i * 0.2 }));
    });

    // 2) gözcü
    if (show.watch && V.house(show.watch.houseId)) job(watchScene(show.watch, trip));

    // 3) evime gelenler (saldırı) — oda görünümü
    if (homeKills.length) { addFocus(me); job(homeScene(homeKills, show)); }
    // koruyan biri geldiyse (kendini korumadıysan) 'protect' kaydı durdurduğu girişimin hemen ardındadır
    const homeAll = show.home || [];
    for (const e of homeKills) { const i = homeAll.indexOf(e); e.byProtector = i >= 0 && homeAll[i + 1] && homeAll[i + 1].kind === 'protect'; }

    // kamera odağı: ilgili evler (yoksa sessiz köyün genel görünümü)
    focus = fpts.length ? fpts : null;
    world.showFocusChanged();

    await Promise.all(jobs.slice());
    // sonradan eklenen işler (iç mekân, artılar)
    for (let i = 0; i < 3 && jobs.length; i++) await Promise.all(jobs.splice(0));
    if (deadSeen) await followGhost();

    // ----- sahne parçaları -----
    // Öldüren (vampir takımı / hırsız / zehirleyen cadı) içerideyken kısa oda görünümü
    async function killerRoom(tr, mates, tLeave) {
      if (world.mainBusy()) return;
      const room = ctx.openRoom(tr.to);
      if (!room) return;
      const S = room.shot('inside', portrait());
      ctx.cut(S.pos, S.look, { fov: S.fov });
      const L = room.L, W = (p) => room.W(p);
      const ids = [me, ...mates].slice(0, 3);
      const spots = [L.bedside, L.bedside2, { x: -1.6, z: 0.9 }];
      const list = [];
      ids.forEach((id, i) => {
        const p = world.playerById(id);
        if (!p) return;
        const a = room.addActor('k' + i, p.look, p.name, L.doorIn, -Math.PI / 2);
        list.push(a);
        const pre = tr.kind === 'steal' && i === 0 ? [{ walk: [W({ x: -0.3, z: -1.9 })], mode: 'sneak' }, { faceTo: W(L.chest) }, { once: 'pick-up', opts: { timeScale: 1.1 } }] : [];
        a.run([...pre, { walk: [W(spots[i % 3])], mode: 'sneak' }, { faceTo: W({ x: L.sleeper.x, z: -1.4 }) }, { pose: tr.kind === 'poison' ? 'hold' : 'loom' }]);
      });
      const sleeperW = W({ x: L.sleeper.x, y: 0.9, z: L.sleeper.z });
      await until(Math.max(clock() + 1.3, tLeave - 1.6));
      if (!ownRoom(room)) return;
      for (const a of list) a.playOnce(tr.kind === 'poison' ? 'interact-right' : 'attack-melee-right', { timeScale: 0.7 });
      world.sfx(tr.kind === 'poison' ? 'potion' : 'bite', { volume: 0.6 });
      if (tr.kind === 'poison') world.fx.emit('bubble', sleeperW.x, sleeperW.y, sleeperW.z, '#94d82d', 10);
      await ctx.wait(0.45);
      if (!ownRoom(room)) return;
      if (tr.outcome === 'done') {
        world.flickerRoom(1.1);
        const victim = world.playerById(tr.to);
        H.ghostRise(ctx, victim && victim.look, sleeperW.x, sleeperW.z, 0.9, 1.3);
      } else {
        // koruma tuttu: yataktan yeşil artılar, saldıran geri çekilir
        plusBurst(sleeperW.x, sleeperW.y, sleeperW.z, 10, 0.6);
        world.sfx('safe', { volume: 0.5 });
        for (const a of list) { a.setBase('idle', 0.2); a.playOnce('emote-no', { timeScale: 1.1 }); }
      }
      await until(tLeave - 0.1);
      if (ownRoom(room)) world.endShowRoom();
    }

    // Koruma gerçekten bir saldırıyı durdurdu: hedef evden yeşil artılar yükselir (dışarıdan)
    async function savedPlus(id, at = 5.7) {
      await until(at);
      const a = world.houseAnchors(id);
      if (!a) return;
      for (let i = 0; i < 3; i++) {
        // çatının ön yarısından, uzaktan da seçilecek kadar iri
        plusBurst(a.door.x * 0.7 + a.backWin.x * 0.3, a.height * 0.85, a.door.z * 0.7 + a.backWin.z * 0.3, 6, 1.6, 2.6);
        world.fx.emit('magic', a.door.x, 1.4, a.door.z, GREEN, 8);
        if (i === 0) world.sfx('safe', { volume: 0.5 });
        await ctx.wait(0.4);
      }
    }

    // Gözcü: izlenen evin arkasında durur; gelenler kapıdan girer (tanınır ya da karanlıkta siluet),
    // kilitli kapıdan dönenler geri döner, ev sahibi çıkıp gittiği eve yürür; ev sahibi öldüyse ışıklar titrer.
    async function watchScene(w, tr) {
      const hid = w.houseId;
      watched = hid;
      addFocus(hid); addFocus(me);
      const sub = [];
      if (!tr || tr.kind !== 'watch' || tr.to !== hid) sub.push(walkTrip(me, hid, { peek: true, tArrive: 3.2, tLeave: 8.8, tHome: 11.2, delay: 0.15 }));
      if (w.ownerWent && w.ownerWent !== hid && V.house(w.ownerWent)) {
        addFocus(w.ownerWent);
        sub.push(walkTrip(hid, w.ownerWent, { tArrive: 3.0, tLeave: 6.6, tHome: 10.6, delay: 0.4 }));
      }
      const arr = (w.arrivals || []).slice(0, 8);
      const gap = arr.length > 1 ? Math.min(0.8, 3.2 / (arr.length - 1)) : 0;
      arr.forEach((v, i) => {
        const tA = 3.6 + i * gap;
        const real = v.id && v.id !== me && v.id !== hid && world.chars.get(v.id) && !taken.has(v.id);
        if (real) sub.push(walkTrip(v.id, hid, { bounced: !!v.blocked, tArrive: tA, tLeave: tA + 1.6, tHome: 10.8, delay: 0.2 + i * 0.15 }));
        else sub.push(shadowVisit(hid, !!v.blocked, tA, tA + 1.6, i));
      });
      // gecenin sonucu (dışarıdan): ölüm -> ışıklar titreyip söner; koruma tuttu -> yeşil artılar (gelenler girdikten sonra)
      const tEnd = Math.min(8.2, 4.8 + arr.length * gap + 1.0);
      if (w.died) sub.push((async () => { await until(tEnd); world.flickerHouse(hid, 1.5); world.sfx('door', { volume: 0.3 }); })());
      else if (w.saved) sub.push(savedPlus(hid, tEnd));
      await Promise.all(sub.map((p) => p.catch(() => {})));
    }

    // karanlıkta gelen kimliksiz gölge (meydan tarafından gelir, girer ya da kapıdan döner, sonra uzaklaşır)
    async function shadowVisit(hid, blocked, tA, tL, i) {
      const a = world.houseAnchors(hid);
      if (!a) return;
      const r = Math.hypot(a.approach.x, a.approach.z) || 1;
      const side = (i % 2 ? 1 : -1) * 1.2;
      const s = { x: a.approach.x - (a.approach.x / r) * 7 + (-a.approach.z / r) * side, z: a.approach.z - (a.approach.z / r) * 7 + (a.approach.x / r) * side };
      await until(tA - 3.0);
      world.fx.emit('mist', s.x, 0.6, s.z, '#7d7690', 8);
      const f = shadow(ctx, s.x, s.z, 0);
      if (!f) return;
      await figWalk(ctx, f, [s, a.approach], 2.3);
      faceFig(f, a.door);
      if (blocked) {
        f.play('interact-right');
        await ctx.wait(0.8);
        await figWalk(ctx, f, [a.approach, s], 2.6);
      } else {
        world.village.openDoor(hid, 1.0);
        world.sfxThrottled('door', 0.35);
        await figWalk(ctx, f, [a.approach, a.inside], 1.8);
        f.root.visible = false;
        await until(tL);
        f.root.visible = true;
        world.village.openDoor(hid, 1.0);
        await figWalk(ctx, f, [a.inside, a.approach, s], 2.6);
      }
      world.fx.emit('mist', f.root.position.x, 0.6, f.root.position.z, '#7d7690', 10);
      f.root.visible = false;
    }

    // Saldırıya uğrayan ev sahibi: kendi odasında uyurken kimliksiz siyah siluetler; koruma tutarsa yeşil artılar,
    // tutmazsa ölüm sahnesi (ışıklar titrer, hayalet yükselir) ve izleyici kendi hayaletini izler.
    async function homeScene(kills, sh) {
      await until(2.7);
      const room = !world.mainBusy() && ctx.openRoom(me);
      const died = kills.some((e) => e.result === 'died') || !!sh.dead;
      if (!room) {
        // oda açılamadı (ana sinematik sahnede): dışarıdan yalnız ışıklar
        if (died) { await until(6.0); world.flickerHouse(me, 1.4); await until(7.4); ownDeath(); }
        return;
      }
      const S = room.shot('inside', portrait());
      ctx.cut(S.pos, S.look, { fov: S.fov });
      const L = room.L, W = (p) => room.W(p);
      const bedW = W(L.bedside), bed2W = W(L.bedside2), footW = W(L.bedfoot);
      const sleeperW = W({ x: L.sleeper.x, y: 0.9, z: L.sleeper.z });
      const from = W(L.doorStep), mid = W(L.doorIn);
      let protector = null;
      const list = kills.slice(0, 2);
      for (let i = 0; i < list.length; i++) {
        const e = list[i];
        if (!ownRoom(room)) return;
        await until(i === 0 ? 3.5 : clock() + 0.2);
        world.sfx('door', { volume: 0.5 });
        const f = shadow(ctx, from.x, from.z, -Math.PI / 2, { eyes: e.kind === 'attack', opacity: 0.9 });
        if (!f) break;
        const spot = i === 0 ? bedW : bed2W;
        await figWalk(ctx, f, [from, mid, spot], i === 0 ? 2.0 : 2.6);
        faceFig(f, sleeperW);
        f.root.rotation.x = 0.3;
        f.play('interact-right');
        if (e.kind === 'poison') world.fx.emit('bubble', sleeperW.x, sleeperW.y, sleeperW.z, '#94d82d', 10);
        if (e.result === 'saved') {
          // koruyucu: arkasından hızla gelir, yeşil ışık ve artılar; saldıran sise karışıp kaçar
          if (!protector && e.byProtector) {
            protector = shadow(ctx, from.x, from.z, -Math.PI / 2, { color: '#0d1a12', glow: GREEN, opacity: 0.85 });
            if (protector) await figWalk(ctx, protector, [from, mid, footW], 3.4, 'sprint');
          }
          if (protector) { faceFig(protector, sleeperW); protector.play('interact-left'); }
          plusBurst(sleeperW.x, sleeperW.y + 0.2, sleeperW.z, 12, 0.7);
          world.fx.emit('magic', sleeperW.x, sleeperW.y, sleeperW.z, GREEN, 14);
          world.sfx('safe', { volume: 0.6 });
          await ctx.wait(0.9);
          plusBurst(sleeperW.x, sleeperW.y + 0.3, sleeperW.z, 8, 0.9);
          world.fx.emit('smoke', f.root.position.x, 1.0, f.root.position.z, '#2a2238', 14);
          f.root.visible = false;
          await ctx.wait(0.6);
        } else if (e.result === 'died') {
          world.flickerRoom(1.4);
          world.sfx(e.kind === 'poison' ? 'potion' : 'bite', { volume: 0.7 });
          if (e.kind !== 'poison') world.flash(0.25, '#d7263d');
          await ctx.wait(1.4);
          world.fx.emit('smoke', f.root.position.x, 1.0, f.root.position.z, '#2a2238', 16);
          f.root.visible = false;
          await ctx.wait(0.2);
          const p = world.playerById(me);
          await H.ghostRise(ctx, p && p.look, sleeperW.x, sleeperW.z, 0.9, 1.8);
          ownDeath();
          if (ownRoom(room)) world.endShowRoom();
          return;
        } else {
          // sonuç yok (ör. soygun): sessizce çıkar
          await ctx.wait(1.0);
          await figWalk(ctx, f, [spot, mid, from], 2.4);
          f.root.visible = false;
        }
      }
      await ctx.wait(0.5);
      if (ownRoom(room)) world.endShowRoom();
    }

    // izleyicinin ölümü (herkese şafakta açıklanır): mezar taşı, hayalet kapının önünde belirir
    function ownDeath() {
      if (deadSeen) return;
      deadSeen = true;
      world.showDead.add(me);
      world.markDead(me, { quiet: true, drop: true });
      const p = st.players.find((x) => x.id === me);
      const a = world.houseAnchors(me);
      const g = p && world.ensureGhost(p);
      if (g && a) {
        g.fresh = false; g.isMe = true;
        g.pos.set(a.approach.x, 0, a.approach.z);
        g.yaw = Math.atan2(-a.approach.x, -a.approach.z);
        world.fx.emit('magic', a.approach.x, 1, a.approach.z, '#d8d0ff', 12);
      }
      world.reapply();
    }

    // ölen izleyici kendi hayaletini izler (gösteri bitene kadar)
    async function followGhost() {
      const look = new THREE.Vector3(), pos = new THREE.Vector3();
      let first = true;
      while (clock() < SHOW_S + 1.5) {
        const g = world.ghostOf(me);
        if (g && !world.mainBusy()) {
          // kamera meydan tarafında (evlerin içine/çatısına girmesin), hayalete ve arkasındaki eve bakar
          const r = Math.hypot(g.pos.x, g.pos.z);
          const ux = r > 3 ? g.pos.x / r : 0, uz = r > 3 ? g.pos.z / r : 1;
          const d = portrait() ? 9 : 7.5;
          look.set(g.pos.x, 1.3, g.pos.z);
          pos.set(g.pos.x - ux * d, portrait() ? 6.4 : 5.2, g.pos.z - uz * d);
          // ilk kare sert kesme: oda kamerasından (köyden çok uzakta) yumuşak geçiş boşluğu gösteriyordu
          if (first) { ctx.cut(pos, look, { fov: portrait() ? 56 : 46 }); first = false; } else ctx.shot(pos, look, { fov: portrait() ? 56 : 46, k: 1.6 });
        }
        await ctx.wait(0.25);
      }
    }
  });

  // gösteri odası hâlâ bizim mi (ana sinematik almadıysa)
  function ownRoom(room) { return world.roomModeIs('show') && world.room === room; }

  function elapsedOf(st) {
    const n = st.room.night;
    if (!n || !n.showUntil) return 0;
    return Math.max(0, SHOW_S - (n.showUntil - world.serverNow()) / 1000);
  }

  function stop() {
    if (running) dir.skip();
    running = false;
    if (focus) { focus = null; world.showFocusChanged(); }
    actors.clear();
  }

  function newNight(round) {
    nightRound = round;
    deadSeen = false; watched = null;
    world.showDead.clear();
  }

  // Her state'te: aşamaya göre gösteriyi başlat / kes
  function sync(st) {
    const rm = st.room;
    if (rm.phase === 'lobby') { stop(); if (nightRound !== -1) newNight(-1); startedSig = ''; startedRound = -1; return; }
    if (rm.phase !== 'night') { if (running) stop(); return; }
    if (rm.round !== nightRound) newNight(rm.round);
    const stage = rm.night && rm.night.stage;
    if (stage !== 'show') { if (running) stop(); return; }
    const show = (st.night && st.night.show) || null;
    const sig = rm.round + '|' + (show ? JSON.stringify(show) : '');
    if (sig === startedSig) return;
    const el = elapsedOf(st);
    // aynı gecenin gösterisi zaten başladıysa geç gelen veri ancak ilk saniyelerde yeniden başlatır
    if (startedRound === rm.round && (el > 2.5 || !show)) { startedSig = sig; return; }
    startedSig = sig; startedRound = rm.round;
    if (running) dir.skip();
    if (!show) return;
    if (el > 9.5) {
      // çok geç bağlandı: oynatılacak bir şey kalmadı; ölüm bilgisi yine de hayaleti getirir
      if (show.dead && !deadSeen) { deadSeen = true; world.showDead.add(st.me.id); world.reapply(); }
      return;
    }
    running = true;
    const msg = { kind: 'show', show, state: st, el };
    dir.announce(msg).then(() => {
      if (startedSig !== sig) return;
      running = false;
      if (focus) { focus = null; world.showFocusChanged(); }
      actors.clear();
    });
  }

  return {
    sync, stop,
    get running() { return running; },
    get focus() { return focus; },
    actors,
    sawDeath: () => deadSeen,
    watched: (id) => watched === id,
    dispose() {
      stop();
      if (plus) { for (const s of plus.list) { s.parent && s.parent.remove(s); s.material.dispose(); } plus.tex.dispose(); plus = null; }
    },
  };
}

