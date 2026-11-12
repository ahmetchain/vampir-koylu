// Köy meydanı sahnesi: karakterleri yerleştirir, yürütür, uyutur ve seçilebilir yapar.
// DOM elemanları oyuncu başına bir kez oluşturulur, sonra sadece güncellenir; böylece CSS geçişleri akıcı kalır.
(() => {
  'use strict';

  const { avatar, tombstone, ghost } = window.VKAvatar;

  const CX = 0.5;
  const CY = 0.62;
  const RX = 0.37;
  const RY = 0.25;
  const WALK_SPEED = 230; // px/sn

  const NIGHT_ROLES = ['vampir', 'doktor', 'kahin', 'cadi'];

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  // Kendi karakterin her zaman en altta (izleyicinin önünde) durur.
  function ringPositions(ids, meId) {
    const n = ids.length;
    const offset = Math.max(0, ids.indexOf(meId));
    const map = new Map();
    ids.forEach((id, i) => {
      const k = (i - offset + n) % n;
      const ang = Math.PI / 2 + (2 * Math.PI * k) / n;
      const stagger = n > 10 && k % 2 ? 0.78 : 1;
      map.set(id, { x: CX + RX * stagger * Math.cos(ang), y: CY + RY * stagger * Math.sin(ang) });
    });
    return map;
  }

  function create(stage, handlers) {
    const layer = stage.querySelector('.stage-chars');
    const records = new Map();
    let last = null;
    let size = { w: stage.clientWidth || 600, h: stage.clientHeight || 400 };
    let lastMoveAt = 0;

    if (window.ResizeObserver) {
      new ResizeObserver(() => {
        size = { w: stage.clientWidth || size.w, h: stage.clientHeight || size.h };
        if (last) update(last.state, last.ui);
      }).observe(stage);
    }

    stage.addEventListener('click', (e) => {
      if (!last) return;
      const kick = e.target.closest('.chr-kick');
      if (kick) { handlers.onKick(kick.closest('.chr').dataset.id); return; }
      const pick = e.target.closest('.chr.selectable');
      if (pick) { handlers.onPick(pick.dataset.id); return; }
      const chr = e.target.closest('.chr');
      const { room, me } = last.state;
      if (chr && chr.dataset.id === me.id && room.phase === 'lobby') { handlers.onSelf(); return; }
      if (!chr && room.phase === 'lobby') {
        const now = Date.now();
        if (now - lastMoveAt < 150) return;
        lastMoveAt = now;
        const r = stage.getBoundingClientRect();
        const x = clamp((e.clientX - r.left) / r.width, 0.05, 0.95);
        const y = clamp((e.clientY - r.top) / r.height, 0.22, 0.95);
        const rec = records.get(me.id);
        if (rec) place(rec, x, y);
        handlers.onMove(x, y);
        spawnRipple(x, y);
      }
    });

    stage.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.chr.selectable')) {
        e.preventDefault();
        handlers.onPick(e.target.dataset.id);
      }
    });

    function spawnRipple(x, y) {
      const el = document.createElement('span');
      el.className = 'tap-ripple';
      el.style.left = `${x * 100}%`;
      el.style.top = `${y * 100}%`;
      layer.appendChild(el);
      setTimeout(() => el.remove(), 600);
    }

    function makeRecord(id) {
      const el = document.createElement('div');
      el.className = 'chr';
      el.dataset.id = id;
      el.innerHTML = `
        <div class="chr-top"></div>
        <div class="chr-bubble"></div>
        <div class="chr-ring"></div>
        <div class="chr-fig"></div>
        <span class="chr-zzz" aria-hidden="true"><i>z</i><i>z</i><i>z</i></span>
        <div class="chr-name"></div>`;
      layer.appendChild(el);
      const rec = {
        el, id, x: null, y: null, sig: '', top: '', name: '', cls: '', walkTimer: null, bubbleTimer: null,
        fig: el.querySelector('.chr-fig'),
        topEl: el.querySelector('.chr-top'),
        nameEl: el.querySelector('.chr-name'),
        bubble: el.querySelector('.chr-bubble'),
      };
      records.set(id, rec);
      return rec;
    }

    function place(rec, x, y) {
      if (rec.x === null) {
        rec.el.style.transitionDuration = '0s';
      } else {
        const dx = (x - rec.x) * size.w;
        const dy = (y - rec.y) * size.h;
        const dist = Math.hypot(dx, dy);
        if (dist < 2) return;
        const dur = clamp(dist / WALK_SPEED, 0.25, 2.4);
        rec.el.style.transitionDuration = `${dur}s`;
        if (Math.abs(dx) > 3) rec.el.dataset.face = dx < 0 ? 'left' : 'right';
        rec.el.classList.add('walking');
        clearTimeout(rec.walkTimer);
        rec.walkTimer = setTimeout(() => rec.el.classList.remove('walking'), dur * 1000);
      }
      rec.x = x;
      rec.y = y;
      rec.el.style.left = `${x * 100}%`;
      rec.el.style.top = `${y * 100}%`;
      rec.el.style.zIndex = String(Math.round(y * 1000));
    }

    function update(state, ui = {}) {
      last = { state, ui };
      const { room, me, players, night, day } = state;
      const phase = room.phase;
      const inGame = ['reveal', 'night', 'day', 'hunter'].includes(phase);
      stage.dataset.phase = phase;

      const ring = ringPositions(players.map((p) => p.id), me.id);
      const n = players.length || 1;
      const perim = Math.PI * (RX * size.w + RY * size.h);
      let spacing = perim / n;
      if (n > 10) spacing *= 1.45;
      const cs = clamp(Math.min(spacing * 0.78, size.w * 0.15), 30, 86);
      stage.style.setProperty('--cs', `${cs}px`);

      const canNight = phase === 'night' && me.alive && NIGHT_ROLES.includes(me.role);
      const canVote = phase === 'day' && me.alive;
      const canShoot = phase === 'hunter' && room.hunterId === me.id;
      const witch = night && night.witch;
      const witchMode = ui.witchMode === 'poison' ? 'poison' : 'heal';
      const witchBlocked = witch && (witchMode === 'heal' ? witch.healUsed : witch.poisonUsed);
      const viewerGhost = inGame && !me.alive;

      // Gece kim kimin yanına gidiyor (sadece izleyicinin görmeye hakkı olanlar).
      const actorTargets = new Map();
      if (phase === 'night' && night) {
        if (me.role === 'vampir') {
          for (const t of night.team) actorTargets.set(t.vampId, t.targetId);
        } else if (witch) {
          const t = witch.poison || witch.heal;
          if (t) actorTargets.set(me.id, t);
        } else if (night.mySelection) {
          actorTargets.set(me.id, night.mySelection);
        }
      }
      const visitors = new Map();
      for (const [actor, target] of actorTargets) {
        if (!visitors.has(target)) visitors.set(target, []);
        visitors.get(target).push(actor);
      }

      const teamPicks = {};
      if (night && night.team) {
        for (const t of night.team) {
          if (t.vampId !== me.id) (teamPicks[t.targetId] = teamPicks[t.targetId] || []).push(t.name);
        }
      }
      const witchVictims = new Set(witch ? witch.victims : []);
      const winners = new Set(room.winners || []);
      const byId = new Map(players.map((p) => [p.id, p]));

      const seen = new Set();
      for (const p of players) {
        seen.add(p.id);
        const rec = records.get(p.id) || makeRecord(p.id);
        const isMe = p.id === me.id;

        // ----- konum -----
        let pos = phase === 'lobby' && p.pos ? p.pos : ring.get(p.id);
        if (actorTargets.has(p.id) && ring.get(actorTargets.get(p.id))) {
          const target = actorTargets.get(p.id);
          const tp = ring.get(target);
          const group = visitors.get(target);
          const idx = group.indexOf(p.id);
          const dx = tp.x - CX;
          const dy = tp.y - CY;
          const lateral = (idx - (group.length - 1) / 2) * 0.08;
          pos = { x: tp.x - dx * 0.42 + lateral, y: tp.y - dy * 0.42 + 0.03 };
        }
        place(rec, pos.x, pos.y);

        // ----- görünüm -----
        const awake = !inGame || phase !== 'night' || actorTargets.has(p.id)
          || (isMe && canNight) || (me.role === 'vampir' && p.role === 'vampir');
        let costume = null;
        if (phase === 'ended') costume = p.role;
        else if (phase === 'night' && p.role === 'vampir' && me.role === 'vampir') costume = 'vampir';
        else if (phase === 'night' && isMe && canNight) costume = me.role;
        else if (phase === 'hunter' && p.id === room.hunterId) costume = 'avci';

        let kind = 'char';
        if (!p.alive) kind = viewerGhost || phase === 'hunter' && p.id === room.hunterId ? 'ghost' : 'tomb';
        let mood = 'normal';
        if (phase === 'night' && !awake) mood = 'closed';
        else if (phase === 'ended') mood = winners.has(p.id) ? 'happy' : 'scared';
        else if (witchVictims.has(p.id)) mood = 'scared';

        const tombRole = !p.alive && p.role && (room.settings.revealRoles || phase === 'ended') ? p.role : '';
        const sig = `${kind}|${p.look.color}|${p.look.hat}|${costume}|${mood}|${tombRole}`;
        if (sig !== rec.sig) {
          rec.sig = sig;
          if (kind === 'tomb') rec.fig.innerHTML = tombstone(p.name, tombRole);
          else if (kind === 'ghost') rec.fig.innerHTML = ghost(p.look);
          else rec.fig.innerHTML = avatar(p.look, { role: costume, mood });
        }

        // ----- seçilebilirlik ve işaretler -----
        let selectable = false;
        if (canNight && p.alive) {
          if (me.role === 'vampir') selectable = !isMe && p.role !== 'vampir';
          else if (me.role === 'doktor') selectable = true;
          else if (me.role === 'kahin') selectable = !isMe;
          else if (witch) selectable = !witchBlocked && !(witchMode === 'poison' && isMe);
        } else if (canVote && p.alive) {
          selectable = !isMe;
        } else if (canShoot && p.alive) {
          selectable = !isMe;
        }

        const cls = ['chr', `k-${kind}`];
        if (isMe) cls.push('is-me');
        if (!p.alive) cls.push('is-dead');
        if (p.left) cls.push('is-left');
        if (!p.connected && !p.left) cls.push('is-off');
        if (phase === 'night' && p.alive && !awake) cls.push('asleep');
        if (selectable) cls.push('selectable');
        else if ((canNight || canVote || canShoot) && p.alive) cls.push('locked');
        if (phase === 'ended' && winners.has(p.id)) cls.push('winner');
        if (actorTargets.has(p.id)) cls.push('visiting');

        let mark = '';
        if (night && night.mySelection === p.id) {
          const m = {
            vampir: ['sel-vampire', '🩸 Hedefin'],
            doktor: ['sel-doctor', '🛡️ Koruman'],
            kahin: ['sel-seer', '🔮 Bakılacak'],
          }[me.role];
          if (m) { cls.push(m[0]); mark = m[1]; }
        } else if (teamPicks[p.id]) {
          cls.push('team-pick');
          mark = `🧛 ${teamPicks[p.id].map(esc).join(', ')}`;
        }
        if (witch) {
          if (witch.heal === p.id) { cls.push('sel-heal'); mark = '🧪 İksir'; }
          if (witch.poison === p.id) { cls.push('sel-poison'); mark = '☠️ Zehir'; }
          if (witchVictims.has(p.id) && !mark) mark = '🩸 Saldırı altında';
          if (witchVictims.has(p.id)) cls.push('under-attack');
        }
        if (day && day.myVote === p.id) { cls.push('sel-vote'); mark = '⚖️ Oyun'; }
        if (day && day.voted.includes(p.id)) cls.push(day.sleeping.includes(p.id) ? 'voted-sleep' : 'voted');
        if (phase === 'hunter' && p.id === room.hunterId) mark = '🏹 Nişan alıyor';

        let votes = '';
        const vlist = day && day.votes[p.id];
        if (vlist && vlist.length) {
          const total = vlist.reduce((s, v) => s + v.w, 0);
          const dots = vlist.map((v) => {
            const voter = byId.get(v.id);
            const color = voter ? window.VKAvatar.COLORS[voter.look.color].body : '#999';
            return `<i style="--c:${color}" title="${esc(voter ? voter.name : '')}">${v.w > 1 ? '2' : ''}</i>`;
          }).join('');
          votes = `<span class="chr-votes"><b>${total}</b>${dots}</span>`;
        }
        const topHTML = `${mark ? `<span class="chr-mark">${mark}</span>` : ''}${votes}`;
        if (topHTML !== rec.top) { rec.top = topHTML; rec.topEl.innerHTML = topHTML; }

        const kickBtn = phase === 'lobby' && room.hostId === me.id && !isMe
          ? `<button class="chr-kick" title="Odadan çıkar" aria-label="${esc(p.name)} adlı oyuncuyu çıkar">✕</button>` : '';
        const tags = [p.isHost ? '👑' : '', !p.connected && !p.left ? '📴' : ''].join('');
        const nameHTML = `${tags ? `<small>${tags}</small>` : ''}<span>${esc(p.name)}</span>${kickBtn}`;
        if (nameHTML !== rec.name) { rec.name = nameHTML; rec.nameEl.innerHTML = nameHTML; }

        const clsStr = cls.join(' ');
        const keep = ['walking'].filter((c) => rec.el.classList.contains(c));
        if (clsStr !== rec.cls) {
          rec.cls = clsStr;
          rec.el.className = [clsStr, ...keep].join(' ');
        }
        if (selectable) {
          rec.el.setAttribute('role', 'button');
          rec.el.tabIndex = 0;
          rec.el.setAttribute('aria-label', p.name);
        } else {
          rec.el.removeAttribute('role');
          rec.el.removeAttribute('tabindex');
        }
      }

      for (const [id, rec] of records) {
        if (!seen.has(id)) {
          rec.el.classList.add('leaving');
          setTimeout(() => rec.el.remove(), 400);
          records.delete(id);
        }
      }
    }

    function bubble(id, text, channel) {
      const rec = records.get(id);
      if (!rec) return;
      rec.bubble.textContent = text.length > 80 ? `${text.slice(0, 78)}…` : text;
      rec.bubble.dataset.channel = channel;
      rec.bubble.classList.remove('show');
      void rec.bubble.offsetWidth;
      rec.bubble.classList.add('show');
      clearTimeout(rec.bubbleTimer);
      rec.bubbleTimer = setTimeout(() => rec.bubble.classList.remove('show'), 4200);
    }

    function reset() {
      for (const rec of records.values()) rec.el.remove();
      records.clear();
      last = null;
    }

    return { update, bubble, reset };
  }

  window.VKScene = { create };
})();
