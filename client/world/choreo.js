// Aşama koreografisi: yalnızca izleyicinin `state`'inden karakterlerin hedeflerini çıkarır ve adım dizilerine çevirir.
// Gece: herkes evine; izleyicinin (ve görebildiği kötü takım arkadaşlarının) seçimi -> hedef eve gizlice gidiş.
import { planPath, clearPoint } from './nav.js';
import { plazaToWorld } from './layout.js';
import { visits } from './rules.js';
import { TAU } from './constants.js';

export function createChoreo(world) {
  const goals = new Map(); // id -> key
  let lastPhase = null;
  let litUntil = new Map();

  function sitSlotNear(p) {
    for (const s of world.village.benchSlots) {
      if (Math.hypot(p.x - s.x, p.z - s.z) < 1.25) return s;
    }
    return null;
  }

  function restFacing(x, z) {
    // ateşe bak, biraz da kameraya dön (yüzler görünsün)
    const d1x = -x, d1z = -z;
    const l1 = Math.hypot(d1x, d1z) || 1;
    const cx = world.camera.position.x - x, cz = world.camera.position.z - z;
    const l2 = Math.hypot(cx, cz) || 1;
    return Math.atan2(d1x / l1 * 0.45 + cx / l2 * 0.55, d1z / l1 * 0.45 + cz / l2 * 0.55);
  }

  function door(hid) {
    world.village.openDoor(hid, 1.3);
    world.sfxThrottled('door', 0.35);
  }

  // Bir karakter için adım dizisi kur
  function plan(ch, goal, delay, snap) {
    const V = world.village;
    const L = V.layout;
    if (!L) return;
    const steps = [];
    // --- ani yerleşim ---
    if (snap) {
      ch.peeking = null;
      if (goal.kind === 'plaza' || goal.kind === 'gather') {
        ch.inside = null;
        ch.pos.set(goal.x, 0, goal.z);
        ch.yaw = goal.face != null ? goal.face : restFacing(goal.x, goal.z);
        ch.faceYaw = ch.yaw;
        ch.setVisible(true);
        ch.run([{ pose: goal.pose || 'idle', fade: 0 }]);
      } else if (goal.kind === 'house') {
        const a = world.houseAnchors(goal.house);
        if (!a) return;
        if (goal.peek) {
          ch.inside = null;
          const pts = planPath(L, a.approach, { house: a, angle: V.house(goal.house).angle, peek: true, halfWidth: V.house(goal.house).info.hx });
          ch.pos.set(a.peek.x, 0, a.peek.z);
          ch.yaw = Math.atan2(a.backWin.x - a.peek.x, a.backWin.z - a.peek.z);
          ch.faceYaw = ch.yaw;
          ch.peeking = goal.house; ch.peekPath = pts.slice(-5);
          ch.setVisible(true);
          ch.run([{ pose: 'peek', fade: 0 }]);
        } else {
          ch.inside = goal.house;
          ch.pos.set(a.inside.x, 0, a.inside.z);
          ch.setVisible(false);
          ch.run([{ pose: 'idle', fade: 0 }]);
        }
      } else if (goal.kind === 'gone') {
        ch.setVisible(false);
        ch.run([]);
      }
      return;
    }
    if (goal.kind === 'gone') {
      if (ch.visible) { world.poofAt(ch.pos.x, ch.pos.z); ch.setVisible(false); }
      ch.run([]);
      return;
    }
    // gizli ama hiçbir evde değil (ör. ölüp lobide geri dönen): meydanda belir ya da kendi evinden çık
    if (!ch.visible && !ch.inside && !ch.peeking) {
      if (goal.kind === 'plaza' || goal.kind === 'gather') {
        plan(ch, goal, 0, true);
        world.fx.emit('magic', goal.x, 0.8, goal.z, '#f4e4c1', 10);
        return;
      }
      if (V.house(ch.id)) ch.inside = ch.id;
    }
    if (delay) steps.push({ wait: delay });
    let start = { x: ch.pos.x, z: ch.pos.z };
    let fromAngle = null;
    // önce bulunduğu yerden çık
    if (ch.inside) {
      const hid = ch.inside;
      const a = world.houseAnchors(hid);
      const h = V.house(hid);
      if (a && h) {
        // aynı eve girmek isteniyorsa hiçbir şey yapma
        if (goal.kind === 'house' && goal.house === hid && !goal.peek) return;
        steps.push({ at: a.inside, face: a.rotY, snapFace: true },
          { call: () => door(hid) }, { wait: 0.3 },
          { show: true, call: (c) => { c.inside = null; } },
          { walk: [a.approach], mode: 'walk' });
        start = a.approach; fromAngle = h.angle;
      } else ch.inside = null;
    } else if (ch.peeking) {
      if (goal.kind === 'house' && goal.peek && goal.house === ch.peeking) return;
      const back = (ch.peekPath || []).slice().reverse();
      if (back.length > 1) {
        steps.push({ pose: 'idle', fade: 0.2 }, { walk: back.slice(1), mode: 'sneak', call: (c) => { c.peeking = null; } });
        start = back[back.length - 1];
      }
      ch.peeking = null;
    }
    if (goal.kind === 'plaza' || goal.kind === 'gather') {
      const target = clearPoint({ x: goal.x, z: goal.z }, world.obstacles);
      const pts = planPath(L, start, target, fromAngle).map((q, i, arr) => (i > 0 && i < arr.length - 1 ? clearPoint(q, world.obstacles) : q));
      pts.shift();
      if (pts.length) steps.push({ walk: pts, mode: goal.mode || 'walk' });
      const face = goal.face != null ? goal.face : restFacing(target.x, target.z);
      steps.push({ face });
      if (goal.pose) steps.push({ pose: goal.pose });
      else steps.push({ pose: 'idle' });
    } else if (goal.kind === 'house') {
      const hid = goal.house;
      const a = world.houseAnchors(hid);
      const h = V.house(hid);
      if (!a || !h) return;
      const pts = planPath(L, start, { house: a, angle: h.angle, peek: !!goal.peek, halfWidth: h.info.hx }, fromAngle);
      pts.shift();
      const far = pathLen(start, pts) > 12;
      const mode = goal.mode || (far ? (goal.house === ch.id ? 'brisk' : 'sprint') : 'walk');
      if (goal.peek) {
        // yanından hızlı dolaş, son iki adım (arka köşe -> pencere) sinsice
        const tail = pts.slice(-2);
        const head = pts.slice(0, pts.length - 2);
        if (head.length) steps.push({ walk: head, mode });
        steps.push({ walk: tail, mode: 'sneak' });
        steps.push({ faceTo: a.backWin }, { pose: 'peek', call: (c) => { c.peeking = hid; c.peekPath = pts.slice(-5); } });
      } else {
        if (pts.length) steps.push({ walk: pts, mode });
        steps.push({ faceTo: a.door }, { wait: 0.15 }, { call: () => door(hid) }, { wait: 0.35 },
          { walk: [a.inside], mode: 'walk' },
          { hide: true, call: (c) => { c.inside = hid; litUntil.set(hid, world.time + 9 + Math.random() * 4); } });
      }
    }
    ch.run(steps);
  }

  function pathLen(a, pts) {
    let l = 0, p = a;
    for (const q of pts) { l += Math.hypot(q.x - p.x, q.z - p.z); p = q; }
    return l;
  }

  // state'ten hedefleri hesapla
  function apply(state, snapAll) {
    const V = world.village;
    const L = V.layout;
    if (!L || !state || !state.me) return;
    const { room, me, players } = state;
    const phase = room.phase;
    const inGame = phase === 'reveal' || phase === 'night' || phase === 'day' || phase === 'hunter';
    const viewerDead = !me.alive;
    const phaseChanged = phase !== lastPhase;
    lastPhase = phase;
    const vis = visits(state);
    const winners = new Set(room.winners || []);
    // toplanma halkası (reveal)
    const gatherIds = players.filter((p) => p.alive && !p.left).sort((a, b) => a.seat - b.seat).map((p) => p.id);

    for (const p of players) {
      const ch = world.ensureChar(p);
      if (!ch) continue;
      ch.isMe = p.id === me.id;
      const showVillager = !p.left && (p.alive || (phase === 'hunter' && p.id === room.hunterId));
      let goal;
      if (!showVillager) goal = { kind: 'gone' };
      else if (phase === 'reveal') {
        const i = gatherIds.indexOf(p.id);
        const n = Math.max(gatherIds.length, 1);
        const a = (i / n) * TAU + 0.3;
        const r = 4.3 + (n > 12 ? (i % 2) * 1.3 : 0);
        goal = { kind: 'gather', x: Math.sin(a) * r, z: Math.cos(a) * r, face: a + Math.PI, pose: 'warm' };
      } else if (phase === 'night') {
        const t = vis.get(p.id);
        if (t && t !== p.id && V.house(t)) goal = { kind: 'house', house: t, peek: ch.isMe && me.role === 'gozcu' };
        else goal = { kind: 'house', house: p.id };
      } else {
        const lp = ch.isMe && world.localMove && performance.now() < world.localMove.until ? world.localMove : null;
        const w = lp ? { x: lp.x, z: lp.z } : plazaToWorld(L, p.pos ? p.pos.x : 0.5, p.pos ? p.pos.y : 0.8);
        let pose = null;
        let face = null;
        const seat = sitSlotNear(w);
        if (!p.connected) pose = 'sit';
        else if (phase === 'ended') pose = winners.has(p.id) ? 'cheer' : null;
        else if (seat && phase !== 'hunter') { pose = 'sit'; face = seat.a + Math.PI; }
        goal = { kind: 'plaza', x: w.x, z: w.z, pose, face };
      }
      const key = goal.kind + ':' + (goal.house || '') + ':' + (goal.peek ? 'p' : '') + ':' + (goal.x != null ? goal.x.toFixed(2) + ',' + goal.z.toFixed(2) : '') + ':' + (goal.pose || '');
      const prev = goals.get(p.id);
      const snap = snapAll || ch.fresh;
      // yönetmenin devraldığı karakterlere dokunma; bırakıldığında yeniden planlanır
      if (ch.claimed && !snap) { goals.delete(p.id); continue; }
      ch.fresh = false;
      if (prev !== key || snap) {
        goals.set(p.id, key);
        // aşama değişiminde doğal dağınıklık
        let delay = 0;
        if (phaseChanged && !snap) {
          if (phase === 'night') delay = ch.isMe ? 0.2 : Math.random() * 1.6;
          else if (phase === 'day' || phase === 'hunter') delay = 0.3 + Math.random() * 2.2;
          else if (phase === 'reveal') delay = Math.random() * 0.8;
        } else if (prev && prev.startsWith('house') && goal.kind === 'house' && phase === 'night' && !snap) delay = 0.1;
        plan(ch, goal, delay, snap);
      }

      // hayalet (yalnızca ölü izleyiciler ve oyun sonunda herkes görür)
      const showGhost = p.left ? false : (!p.alive && ((inGame && viewerDead) || phase === 'ended'));
      if (showGhost) {
        const g = world.ensureGhost(p);
        if (g) {
          const w = plazaToWorld(L, p.pos ? p.pos.x : 0.5, p.pos ? p.pos.y : 0.8);
          const gk = 'g:' + w.x.toFixed(2) + ',' + w.z.toFixed(2);
          if (goals.get('g' + p.id) !== gk || g.fresh) {
            goals.set('g' + p.id, gk);
            if (g.fresh) { g.pos.set(w.x, 0, w.z); g.fresh = false; g.yaw = restFacing(w.x, w.z); world.fx.emit('magic', w.x, 1, w.z, '#d8d0ff', 12); }
            g.isMe = p.id === me.id;
            g.run([{ walk: [{ x: w.x, z: w.z }], mode: 'stroll' }, { face: restFacing(w.x, w.z) }]);
          }
        }
      } else world.removeGhost(p.id);
    }

    // ev ışıkları
    for (const p of players) {
      const h = V.house(p.id);
      if (!h) continue;
      h.dead = inGame || phase === 'ended' ? (!p.alive || p.left) : false;
      if (phase === 'night') {
        // kapıdan girince yanar, birkaç saniye sonra söner (uyku); ziyaret edilen ev yanık kalır
        let lit = (litUntil.get(p.id) || 0) > world.time ? 1 : 0;
        for (const [, t] of vis) if (t === p.id) lit = Math.max(lit, 0.8);
        V.setLit(p.id, lit);
      } else {
        V.setLit(p.id, 1);
      }
    }
    if (phase !== 'night') litUntil.clear();
  }

  // gece ışıklarının zamanlayıcıları için kare başı kontrol
  function tick(state) {
    if (!state || state.room.phase !== 'night') return;
    const V = world.village;
    const vis = visits(state);
    for (const p of state.players) {
      if (!V.house(p.id)) continue;
      let lit = (litUntil.get(p.id) || 0) > world.time ? 1 : 0;
      for (const [, t] of vis) if (t === p.id) lit = Math.max(lit, 0.8);
      V.setLit(p.id, lit);
    }
  }

  return {
    apply, tick,
    reset() { goals.clear(); lastPhase = null; litUntil = new Map(); },
    forget(id) { goals.delete(id); goals.delete('g' + id); },
  };
}
