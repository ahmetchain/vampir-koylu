// Duyurularda oynayan kısa animasyonlu sahneler (ölüm, asılma, avcı atışı, kahin, zafer...).
(() => {
  'use strict';

  const { avatar, tombstone, COLORS } = window.VKAvatar;

  const fig = (look, opts, cls = '', style = '') => (
    `<div class="cf ${cls}" style="${style}">${avatar(look, opts)}</div>`
  );

  const BAT = `<svg viewBox="0 0 120 60" class="bat-svg"><path d="M60 22 Q56 10 50 16 Q40 4 22 8 Q30 14 28 22 Q16 18 4 26 Q22 30 26 42 Q34 32 46 36 Q52 44 60 50 Q68 44 74 36 Q86 32 94 42 Q98 30 116 26 Q104 18 92 22 Q90 14 98 8 Q80 4 70 16 Q64 10 60 22 Z" fill="#14070b"/><circle cx="56" cy="24" r="2" fill="#ff4b5f"/><circle cx="64" cy="24" r="2" fill="#ff4b5f"/></svg>`;

  function confetti(count = 26) {
    const colors = ['#ff4b5f', '#e6b85c', '#5ef0a0', '#7b83ff', '#ff8364', '#f06595'];
    return Array.from({ length: count }, (_, i) => {
      const left = Math.round(Math.random() * 100);
      const delay = (Math.random() * 1.2).toFixed(2);
      const dur = (1.6 + Math.random() * 1.4).toFixed(2);
      const rot = Math.round(Math.random() * 360);
      return `<i class="confetti" style="left:${left}%;background:${colors[i % colors.length]};animation-delay:${delay}s;animation-duration:${dur}s;transform:rotate(${rot}deg)"></i>`;
    }).join('');
  }

  function stars(count = 14) {
    return Array.from({ length: count }, () => {
      const l = Math.round(Math.random() * 100);
      const t = Math.round(Math.random() * 55);
      const d = (Math.random() * 2).toFixed(2);
      return `<i class="star" style="left:${l}%;top:${t}%;animation-delay:${d}s"></i>`;
    }).join('');
  }

  // Sahnede kullanılacak oyuncular: duyurudaki hedefler, yoksa rastgele birkaç yaşayan oyuncu.
  function pick(state, ids, fallback = 3) {
    const byId = new Map((state ? state.players : []).map((p) => [p.id, p]));
    const chosen = (ids || []).map((id) => byId.get(id)).filter(Boolean);
    if (chosen.length || !state) return chosen;
    return state.players.filter((p) => p.alive && !p.left).slice(0, fallback);
  }

  const lookOf = (p, i = 0) => (p ? p.look : { color: i % COLORS.length, hat: i % 4 });

  const scenes = {
    start(a, state) {
      const me = state && state.me;
      return `<div class="cine-start">
        <div class="cards"><span></span><span></span><span></span></div>
        ${me ? fig(me.look, {}, 'cf-center pop-in') : ''}
      </div>`;
    },

    night(a, state) {
      const ps = pick(state, null, 5);
      return `<div class="cine-night">${stars()}<div class="cine-moon rise"></div>
        <div class="row">${ps.map((p, i) => fig(lookOf(p, i), { mood: 'closed' }, 'lie-down', `animation-delay:${0.5 + i * 0.15}s`)).join('')}</div>
        <span class="zzz-float">z Z z</span></div>`;
    },

    death(a, state) {
      const ps = pick(state, (a.targets || []).map((t) => t.id));
      const causes = new Map((a.targets || []).map((t) => [t.id, t.cause]));
      const poison = ps.some((p) => causes.get(p.id) === 'zehir');
      const bat = ps.some((p) => causes.get(p.id) !== 'zehir');
      return `<div class="cine-death">${stars(8)}<div class="cine-moon blood"></div>
        ${bat ? `<div class="bat-swoop">${BAT}</div>` : ''}
        <div class="row">${ps.map((p, i) => {
          const cls = causes.get(p.id) === 'zehir' ? 'die poisoned' : 'die bitten';
          return `<div class="death-slot">${fig(lookOf(p, i), { mood: 'scared' }, cls)}
            <div class="tomb-drop">${tombstone(p.name, '')}</div></div>`;
        }).join('')}</div>
        ${poison ? '<div class="bubbles"><i></i><i></i><i></i><i></i><i></i></div>' : ''}
        <div class="flash-red"></div></div>`;
    },

    safe(a, state) {
      const ps = pick(state, null, 4);
      return `<div class="cine-safe"><div class="cine-sun rise"></div>
        <div class="birds"><span>🕊️</span><span>🕊️</span></div>
        <div class="row">${ps.map((p, i) => fig(lookOf(p, i), { mood: 'happy' }, 'stretch', `animation-delay:${i * 0.12}s`)).join('')}</div></div>`;
    },

    hanged(a, state) {
      const [p] = pick(state, (a.targets || []).map((t) => t.id));
      const crowd = state ? state.players.filter((x) => x.alive && (!p || x.id !== p.id)).slice(0, 4) : [];
      return `<div class="cine-hang">
        <div class="gallows"><div class="beam"></div><div class="post"></div><div class="trapdoor"></div></div>
        ${p ? fig(p.look, { mood: 'scared' }, 'hang-victim') : ''}
        <div class="crowd">${crowd.map((c, i) => fig(c.look, {}, 'crowd-bob', `animation-delay:${i * 0.1}s`)).join('')}</div></div>`;
    },

    nohang(a, state) {
      const ps = pick(state, null, 4);
      return `<div class="cine-safe"><div class="row">${ps.map((p, i) => fig(lookOf(p, i), {}, 'shrug', `animation-delay:${i * 0.1}s`)).join('')}</div>
        <span class="qmark">?</span></div>`;
    },

    sleep(a, state) {
      return scenes.night(a, state);
    },

    hunter(a, state) {
      const [p] = pick(state, (a.targets || []).map((t) => t.id));
      return `<div class="cine-hunter">${p ? fig(p.look, { role: 'avci' }, 'aim') : ''}
        <div class="crosshair"></div></div>`;
    },

    shot(a, state) {
      const [target] = pick(state, (a.targets || []).map((t) => t.id));
      const [hunter] = pick(state, a.actorId ? [a.actorId] : []);
      return `<div class="cine-shot">
        ${hunter ? fig(hunter.look, { role: 'avci' }, 'shooter') : ''}
        <div class="arrow"></div>
        ${target ? `<div class="death-slot right">${fig(target.look, { mood: 'scared' }, 'die hit')}<div class="tomb-drop">${tombstone(target.name, '')}</div></div>` : ''}
      </div>`;
    },

    nohunt() {
      return '<div class="cine-shot"><div class="arrow miss"></div><div class="crosshair fade"></div></div>';
    },

    seer(a, state) {
      const [p] = pick(state, (a.targets || []).map((t) => t.id));
      const bad = a.targets && a.targets[0] && a.targets[0].cause === 'vampir';
      return `<div class="cine-seer ${bad ? 'bad' : 'good'}">
        <div class="orb">${p ? fig(p.look, { role: bad ? 'vampir' : null, mood: bad ? 'normal' : 'happy' }, 'in-orb') : ''}</div>
        <div class="orb-base"></div></div>`;
    },

    win(a, state) {
      const ps = pick(state, (a.targets || []).map((t) => t.id)).slice(0, 6);
      const byId = new Map((state ? state.players : []).map((p) => [p.id, p]));
      return `<div class="cine-win win-${a.winner}">
        ${a.winner === 'vampir' ? '<div class="cine-moon blood"></div>' : '<div class="cine-sun"></div>'}
        <div class="row">${ps.map((p, i) => {
          const role = (byId.get(p.id) || {}).role || (a.winner === 'vampir' ? 'vampir' : a.winner === 'soytari' ? 'soytari' : null);
          return fig(p.look, { role, mood: 'happy' }, 'jump', `animation-delay:${i * 0.12}s`);
        }).join('')}</div>${confetti()}</div>`;
    },

    left(a, state) {
      const [p] = pick(state, (a.targets || []).map((t) => t.id));
      return `<div class="cine-left"><div class="door"></div>${p ? fig(p.look, {}, 'walk-out') : ''}</div>`;
    },
  };

  // Duyuru kartının içine sahneyi çizer. Bilinmeyen türlerde boş bırakır.
  function render(el, announce, state) {
    const scene = scenes[announce.kind];
    el.innerHTML = scene ? scene(announce, state) : '';
    el.hidden = !scene;
  }

  window.VKCine = { render };
})();
