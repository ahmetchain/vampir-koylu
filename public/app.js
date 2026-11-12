(() => {
  'use strict';

  const SERVER = String((window.VK_CONFIG && window.VK_CONFIG.serverUrl) || '').replace(/\/$/, '');
  const socket = SERVER ? io(SERVER) : io();
  const $ = (sel, el = document) => el.querySelector(sel);
  const { avatar, COLORS, HATS } = window.VKAvatar;

  const ROLES = {
    vampir: {
      icon: '🧛', name: 'Vampir', team: 'Vampirler',
      desc: 'Her gece bir kurban seç. Gündüz köylü gibi davran, yakalanma. Sayınız diğerlerine eşitlenince kazanırsınız.',
    },
    doktor: {
      icon: '🩺', name: 'Doktor', team: 'Köylüler',
      desc: 'Her gece birini koru, kendini de seçebilirsin. Koruduğun kişi o gece hiçbir şekilde ölmez.',
    },
    kahin: {
      icon: '🔮', name: 'Kahin', team: 'Köylüler',
      desc: 'Her gece birinin kristal küreye bak. Sabah o kişinin vampir olup olmadığını sadece sen öğrenirsin.',
    },
    cadi: {
      icon: '🧪', name: 'Cadı', team: 'Köylüler',
      desc: 'Vampirlerin kimi hedeflediğini görürsün. Oyun boyunca bir kez hayat iksiriyle kurbanı kurtarabilir, bir kez zehirle birini öldürebilirsin.',
    },
    avci: {
      icon: '🏹', name: 'Avcı', team: 'Köylüler',
      desc: 'Gece ya da gündüz ölürsen son nefesinde 20 saniye içinde istediğin birini vurup yanında götürürsün.',
    },
    muhtar: {
      icon: '🎖️', name: 'Muhtar', team: 'Köylüler',
      desc: 'Gündüz oylamasında oyun iki sayılır. Ama dikkat: oy verdiğinde bu herkese görünür!',
    },
    soytari: {
      icon: '🃏', name: 'Soytarı', team: 'Tek başına',
      desc: 'Amacın köyü seni asmaya ikna etmek. Gündüz asılırsan tek başına kazanırsın. Gece ölürsen kaybedersin.',
    },
    koylu: {
      icon: '🧑‍🌾', name: 'Köylü', team: 'Köylüler',
      desc: 'Gece uyursun. Gündüz tartış, şüphelendiğin kişiye oy ver ve vampirleri bul.',
    },
  };
  const SPECIALS = ['doktor', 'kahin', 'cadi', 'avci', 'muhtar', 'soytari'];
  const DEFAULT_ROLES = { doktor: true, kahin: true, cadi: false, avci: false, muhtar: false, soytari: false };

  const ANNOUNCE_ICONS = {
    start: '🃏', night: '🌙', death: '🩸', safe: '🌅', hanged: '⚖️', nohang: '🕊️', sleep: '😴',
    win: '🏆', left: '🚪', hunter: '🏹', shot: '🎯', nohunt: '🍃', seer: '🔮',
  };

  const SESSION_KEY = 'vk-session';
  const NAME_KEY = 'vk-name';

  // Gizli sekme ya da engellenmiş depolama durumunda da oyun çalışsın.
  function readStore(store, key) {
    try { return store.getItem(key); } catch { return null; }
  }
  function writeStore(store, key, value) {
    try {
      if (value == null) store.removeItem(key);
      else store.setItem(key, value);
    } catch { /* depolama yoksa yoksay */ }
  }
  const session = {
    get() {
      try { return JSON.parse(readStore(sessionStorage, SESSION_KEY)); } catch { return null; }
    },
    set(value) {
      writeStore(sessionStorage, SESSION_KEY, value ? JSON.stringify(value) : null);
    },
  };

  let state = null;
  let clockOffset = 0;
  let screen = 'menu';
  let leaving = false;
  let phaseKey = '';
  let flipped = false;
  let activeTab = 'chat';
  let unread = 0;
  let renderedLogKey = null;
  let roomsCache = [];
  let joinTarget = null;
  let witchMode = 'heal';

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  function colorOf(playerId) {
    const p = state && state.players.find((x) => x.id === playerId);
    return p ? COLORS[p.look.color].body : '#c9c2d3';
  }

  // ---------- ekranlar ----------

  function show(name) {
    screen = name;
    document.querySelectorAll('.screen').forEach((s) => { s.hidden = s.id !== `screen-${name}`; });
    if (name !== 'room') {
      document.body.dataset.phase = 'menu';
      document.title = 'Vampir Köylü';
    }
    if (name === 'rooms') {
      socket.emit('rooms:watch', (res) => res && res.ok && renderRooms(res.rooms));
    } else {
      socket.emit('rooms:unwatch');
    }
    if (name === 'create' && !$('#create-name').value) {
      $('#create-name').value = readStore(localStorage, NAME_KEY) || '';
    }
    window.scrollTo(0, 0);
  }

  document.addEventListener('click', (e) => {
    const go = e.target.closest('[data-go]');
    if (go) show(go.dataset.go);
  });

  // ---------- pencereler ----------

  const modalCloseHandlers = {};

  function openModal(id, onClose) {
    $(`#${id}`).hidden = false;
    modalCloseHandlers[id] = onClose;
  }

  function closeModal(id) {
    const modal = $(`#${id}`);
    if (modal.hidden) return;
    modal.hidden = true;
    const handler = modalCloseHandlers[id];
    delete modalCloseHandlers[id];
    if (handler) handler();
  }

  document.addEventListener('click', (e) => {
    const modal = e.target.closest('.modal');
    if (modal && (e.target === modal || e.target.closest('[data-close]'))) closeModal(modal.id);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.modal:not([hidden])').forEach((m) => closeModal(m.id));
  });

  function confirmBox(title, text, okLabel) {
    return new Promise((resolve) => {
      let answer = false;
      $('#confirm-title').textContent = title;
      $('#confirm-text').textContent = text;
      $('#confirm-ok').textContent = okLabel;
      $('#confirm-ok').onclick = () => { answer = true; closeModal('confirm-modal'); };
      openModal('confirm-modal', () => resolve(answer));
    });
  }

  function toast(message, kind = 'info') {
    const el = document.createElement('div');
    el.className = `toast toast-${kind}`;
    el.textContent = message;
    $('#toasts').appendChild(el);
    setTimeout(() => el.classList.add('out'), 3200);
    setTimeout(() => el.remove(), 3600);
  }

  function emitAction(event, data) {
    socket.emit(event, data, (res) => {
      if (res && !res.ok) toast(res.error, 'error');
    });
  }

  // ---------- roller ----------

  function renderHowtoRoles() {
    $('#howto-roles').innerHTML = ['vampir', ...SPECIALS, 'koylu'].map((r) => `
      <article class="role-card role-${r}">
        <span class="role-fig">${avatar({ color: (SPECIALS.indexOf(r) + 3) % COLORS.length, hat: 0 }, { role: r === 'koylu' ? null : r, mood: 'happy' })}</span>
        <div>
          <h4>${ROLES[r].icon} ${ROLES[r].name}</h4>
          <small class="role-team">${ROLES[r].team}</small>
          <p>${ROLES[r].desc}</p>
        </div>
      </article>`).join('');
  }

  function roleTogglesHTML(roles, editable) {
    return SPECIALS.map((r) => `
      <button type="button" class="role-toggle${roles[r] ? ' on' : ''}" data-role="${r}"
        aria-pressed="${roles[r] ? 'true' : 'false'}" ${editable ? '' : 'disabled'} title="${esc(ROLES[r].desc)}">
        ${ROLES[r].icon} ${ROLES[r].name}
      </button>`).join('');
  }

  const createRoles = { ...DEFAULT_ROLES };
  function renderCreateRoles() {
    $('#create-roles').innerHTML = roleTogglesHTML(createRoles, true);
  }
  $('#create-roles').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-role]');
    if (!btn) return;
    createRoles[btn.dataset.role] = !createRoles[btn.dataset.role];
    renderCreateRoles();
  });

  $('#lobby-roles').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-role]:not(:disabled)');
    if (!btn || !state) return;
    const r = btn.dataset.role;
    emitAction('room:settings', { settings: { roles: { [r]: !state.room.settings.roles[r] } } });
  });

  // ---------- duyurular ----------

  const announceQueue = [];
  let announceTimer = null;

  function pushAnnounce(a) {
    announceQueue.push(a);
    if ($('#announce').hidden) nextAnnounce();
  }

  function nextAnnounce() {
    clearTimeout(announceTimer);
    const a = announceQueue.shift();
    const el = $('#announce');
    if (!a) { el.hidden = true; $('#announce-cine').innerHTML = ''; return; }
    window.VKCine.render($('#announce-cine'), a, state);
    const hasCine = !$('#announce-cine').hidden;
    $('#announce-icon').textContent = ANNOUNCE_ICONS[a.kind] || '📜';
    $('#announce-icon').hidden = hasCine;
    $('#announce-title').textContent = a.title;
    $('#announce-text').textContent = a.text;
    el.dataset.kind = a.kind;
    el.hidden = false;
    const card = $('#announce-card');
    card.classList.remove('pop');
    void card.offsetWidth;
    card.classList.add('pop');
    if (navigator.vibrate && ['death', 'hanged', 'shot'].includes(a.kind)) navigator.vibrate([80, 60, 120]);
    const ms = a.kind === 'win' ? 6500 : hasCine ? 4300 : 3200;
    announceTimer = setTimeout(nextAnnounce, ms);
  }

  $('#announce').addEventListener('click', nextAnnounce);

  // ---------- oda listesi ve katılma ----------

  function renderRooms(rooms) {
    roomsCache = rooms;
    const list = $('#room-list');
    if (!rooms.length) {
      list.innerHTML = `
        <div class="empty">
          <span>🕯️</span>
          <p>Şu an açık oda yok. İlk odayı sen kur!</p>
          <button class="btn btn-primary" data-go="create">Oda Oluştur</button>
        </div>`;
      return;
    }
    list.innerHTML = rooms.map((r) => {
      const open = r.phase === 'lobby' && r.players < r.maxPlayers;
      const status = r.phase === 'lobby' ? (open ? 'Bekliyor' : 'Dolu')
        : r.phase === 'ended' ? 'Oyun bitti' : 'Oyunda';
      return `
        <article class="room-item">
          <div class="room-item-main">
            <strong>${esc(r.name)}${r.hasPassword ? ' <span title="Şifreli oda">🔒</span>' : ''}</strong>
            <small>Kod: ${esc(r.id)} · Kurucu: ${esc(r.hostName)}</small>
          </div>
          <div class="room-item-meta">
            <span class="pill">👥 ${r.players}/${r.maxPlayers}</span>
            <span class="pill ${open ? 'pill-open' : 'pill-busy'}">${status}</span>
          </div>
          <button class="btn btn-small ${open ? 'btn-primary' : 'btn-ghost'}" data-join="${esc(r.id)}" ${open ? '' : 'disabled'}>Katıl</button>
        </article>`;
    }).join('');
  }

  socket.on('rooms:update', (rooms) => {
    if (screen === 'rooms') renderRooms(rooms);
  });

  $('#room-list').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-join]');
    if (!btn) return;
    const room = roomsCache.find((r) => r.id === btn.dataset.join);
    if (room) openJoin(room);
  });

  $('#code-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const code = $('#code-input').value.trim();
    if (!code) return;
    socket.emit('room:info', { roomId: code }, (res) => {
      if (!res.ok) return toast(res.error, 'error');
      openJoin(res.room);
    });
  });

  function openJoin(room) {
    if (room.phase !== 'lobby') {
      toast('Bu odada oyun sürüyor. Oyun bitip lobiye dönülünce katılabilirsin.', 'error');
      return;
    }
    joinTarget = room;
    $('#join-room-label').textContent = `${room.name} · ${room.players}/${room.maxPlayers} oyuncu`;
    $('#join-pass-wrap').hidden = !room.hasPassword;
    $('#join-pass').value = '';
    $('#join-error').textContent = '';
    $('#join-name').value = readStore(localStorage, NAME_KEY) || '';
    openModal('join-modal');
    $('#join-name').focus();
  }

  function enterRoom(res, name) {
    writeStore(localStorage, NAME_KEY, name);
    session.set({ roomId: res.roomId, token: res.token });
  }

  $('#join-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!joinTarget) return;
    const name = $('#join-name').value.trim();
    const submit = e.submitter || $('#join-form [type=submit]');
    submit.disabled = true;
    leaving = false;
    socket.emit('room:join', { roomId: joinTarget.id, name, password: $('#join-pass').value }, (res) => {
      submit.disabled = false;
      if (!res.ok) { $('#join-error').textContent = res.error; return; }
      enterRoom(res, name);
      closeModal('join-modal');
    });
  });

  $('#create-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#create-name').value.trim();
    const submit = e.submitter || $('#create-form [type=submit]');
    submit.disabled = true;
    leaving = false;
    $('#create-error').textContent = '';
    socket.emit('room:create', {
      roomName: $('#create-room').value,
      name,
      password: $('#create-pass').value,
      settings: {
        nightSec: $('#create-night').value,
        daySec: $('#create-day').value,
        revealRoles: $('#create-reveal').checked,
        roles: createRoles,
      },
    }, (res) => {
      submit.disabled = false;
      if (!res.ok) { $('#create-error').textContent = res.error; return; }
      enterRoom(res, name);
    });
  });

  // ---------- sunucu olayları ----------

  socket.on('connect', () => {
    $('#conn-banner').hidden = true;
    const saved = session.get();
    if (saved) {
      socket.emit('session:resume', saved, (res) => {
        if (res && res.ok) return;
        session.set(null);
        if (screen === 'room') {
          leaveRoomUI();
          toast('Oda artık mevcut değil.', 'error');
        }
      });
    } else if (screen === 'rooms') {
      socket.emit('rooms:watch', (res) => res && res.ok && renderRooms(res.rooms));
    }
  });

  socket.on('disconnect', () => {
    $('#conn-banner').textContent = 'Bağlantı koptu, yeniden bağlanılıyor…';
    $('#conn-banner').hidden = false;
  });

  socket.on('state', (s) => {
    if (leaving) return;
    state = s;
    clockOffset = s.serverNow - Date.now();
    if (screen !== 'room') {
      $('#chat-list').innerHTML = '';
      renderedLogKey = null;
      scene.reset();
      show('room');
    }
    render();
  });

  socket.on('announce', (a) => {
    if (!leaving) pushAnnounce(a);
  });

  socket.on('chat', (m) => {
    if (!leaving) appendChat(m);
  });

  socket.on('kicked', (message) => {
    leaveRoomUI();
    toast(message, 'error');
  });

  function leaveRoomUI() {
    leaving = true;
    state = null;
    phaseKey = '';
    session.set(null);
    announceQueue.length = 0;
    nextAnnounce();
    scene.reset();
    document.querySelectorAll('.modal:not([hidden])').forEach((m) => closeModal(m.id));
    show('play');
  }

  // ---------- köy meydanı ----------

  const scene = window.VKScene.create($('#stage'), {
    onPick(id) {
      if (!state) return;
      const phase = state.room.phase;
      if (phase === 'night') emitAction('night:select', { targetId: id, action: witchMode });
      else if (phase === 'day') emitAction('day:vote', { targetId: id });
      else if (phase === 'hunter') emitAction('hunter:shoot', { targetId: id });
    },
    onMove(x, y) {
      socket.emit('player:move', { x, y }, () => {});
    },
    async onKick(id) {
      const target = state && state.players.find((p) => p.id === id);
      if (target && await confirmBox('Oyuncuyu çıkar', `${target.name} odadan çıkarılsın mı?`, 'Çıkar')) {
        emitAction('room:kick', { playerId: target.id });
      }
    },
    onSelf() {
      openLook();
    },
  });

  // ---------- oda ekranı ----------

  function render() {
    const { room, me } = state;
    if (!me) return;

    const key = `${room.phase}-${room.round}`;
    if (key !== phaseKey) {
      if (room.phase === 'reveal') flipped = false;
      if (room.phase === 'night') {
        const w = state.night && state.night.witch;
        witchMode = w && w.healUsed && !w.poisonUsed ? 'poison' : 'heal';
      }
      if (['night', 'day', 'hunter'].includes(room.phase) && navigator.vibrate) navigator.vibrate(60);
      phaseKey = key;
    }

    document.body.dataset.phase = room.phase;
    $('#room-name').textContent = room.name;
    $('#room-code').textContent = room.id;
    $('#role-chip').hidden = !me.role;
    if (me.role) $('#role-chip').textContent = `${ROLES[me.role].icon} Rolüm`;

    const phaseText = {
      lobby: '⏳ Lobi',
      reveal: '🃏 Roller dağıtılıyor',
      night: `🌙 ${room.round}. Gece`,
      day: `☀️ ${room.round}. Gün`,
      hunter: '🏹 Avcının atışı',
      ended: '🏁 Oyun bitti',
    }[room.phase];
    $('#phase-chip').textContent = phaseText;
    document.title = `${phaseText} · Vampir Köylü`;

    renderBanner();
    renderLobby();
    renderReveal();
    renderEnd();
    renderWitchBar();
    scene.update(state, { witchMode });
    renderStageHint();
    renderDayActions();
    renderChatState();
    renderLog();
    updateTimer();
    if (!$('#look-modal').hidden) renderLook();
  }

  function renderBanner() {
    const { room, me, night } = state;
    const iAmHost = room.hostId === me.id;
    let text = '';
    let kind = '';

    if (room.phase === 'lobby') {
      text = iAmHost
        ? `Oyuncular toplanıyor. En az ${room.minPlayers} kişi olunca oyunu başlatabilirsin.`
        : 'Oda sahibinin oyunu başlatması bekleniyor…';
    } else if (room.phase === 'reveal') {
      text = 'Kartına dokun ve rolünü öğren. Gece birazdan çöküyor…';
    } else if (room.phase === 'ended') {
      text = 'Oyun bitti. Artık herkesin rolü açık.';
    } else if (room.phase === 'hunter') {
      if (room.hunterId === me.id) {
        text = '🏹 Öldün ama son atışını yapabilirsin! Vurmak istediğin kişiye dokun.';
        kind = 'vampire';
      } else {
        const h = state.players.find((p) => p.id === room.hunterId);
        text = `🏹 ${h ? h.name : 'Avcı'} son nefesinde nişan alıyor… Kimi vuracak?`;
      }
    } else if (!me.alive) {
      text = '💀 Öldün. Oyunu hayalet olarak izleyebilir, sadece diğer ölülerle yazışabilirsin.';
      kind = 'dead';
    } else if (room.phase === 'night') {
      const sel = night && night.mySelection;
      switch (me.role) {
        case 'vampir': {
          text = sel
            ? '🩸 Hedefinin yanına süzüldün. Süre bitene kadar değiştirebilirsin.'
            : '🧛 Avlanma vakti. Öldürmek istediğin kişiye dokun.';
          if (state.players.filter((p) => p.role === 'vampir' && p.alive).length > 1) {
            text += ' Diğer vampirler de gördüğün yerde; en çok seçilen kişi saldırıya uğrar.';
          }
          kind = 'vampire';
          break;
        }
        case 'doktor':
          text = sel
            ? '🛡️ Korumanın yanında bekliyorsun. Süre bitene kadar değiştirebilirsin.'
            : '🩺 Bu gece kimi koruyacaksın? Birine dokun, kendini de seçebilirsin.';
          kind = 'doctor';
          break;
        case 'kahin':
          text = sel
            ? '🔮 Kristal küren hazır. Sonucu sabah öğreneceksin.'
            : '🔮 Kimin geleceğine bakmak istersin? Birine dokun.';
          kind = 'seer';
          break;
        case 'cadi': {
          const w = night && night.witch;
          const victims = w ? w.victims.map((id) => state.players.find((p) => p.id === id)).filter(Boolean) : [];
          text = victims.length
            ? `🧪 Vampirler şu an ${victims.map((p) => p.name).join(' / ')} kişisini hedefliyor.`
            : '🧪 Vampirler henüz bir hedef seçmedi.';
          text += ' İksir seç, sonra bir kişiye dokun.';
          kind = 'witch';
          break;
        }
        default:
          text = '🌙 Köy uyuyor… Sabahı bekle.';
      }
    } else if (room.phase === 'day') {
      text = '☀️ Tartışın ve şüphelendiğiniz kişiye dokunarak oy verin. Oyunu geri almak için aynı kişiye tekrar dokun.';
      if (me.role === 'muhtar') text += ' 🎖️ Muhtar olarak oyun iki sayılır.';
    }
    const banner = $('#banner');
    banner.textContent = text;
    banner.dataset.kind = kind;
  }

  function renderLobby() {
    const { room, me, players } = state;
    const panel = $('#lobby-panel');
    panel.hidden = room.phase !== 'lobby';
    if (panel.hidden) return;

    $('#invite-link').value = `${inviteOrigin}/?oda=${room.id}`;
    const count = players.filter((p) => p.connected).length;
    const info = $('#lobby-info');
    if (count < room.minPlayers) {
      info.textContent = `👥 ${count} oyuncu. Başlamak için ${room.minPlayers - count} kişi daha gerekli.`;
    } else {
      const counts = {};
      for (const r of room.distribution) counts[r] = (counts[r] || 0) + 1;
      const parts = ['vampir', ...SPECIALS, 'koylu'].filter((r) => counts[r])
        .map((r) => `${counts[r] > 1 || r === 'vampir' || r === 'koylu' ? `${counts[r]} ` : ''}${ROLES[r].icon} ${ROLES[r].name}`);
      info.textContent = `👥 ${count} oyuncu: ${parts.join(', ')}`;
    }
    const iAmHost = room.hostId === me.id;
    $('#lobby-roles').innerHTML = roleTogglesHTML(room.settings.roles, iAmHost);
    const s = room.settings;
    $('#lobby-settings').textContent = `🌙 Gece ${s.nightSec} sn · ☀️ Gündüz ${s.daySec} sn · `
      + `Ölenlerin rolü ${s.revealRoles ? 'açıklanır' : 'gizli kalır'}${room.hasPassword ? ' · 🔒 Şifreli' : ''}`
      + (iAmHost ? ' · Rollere dokunarak açıp kapatabilirsin.' : '');

    const startBtn = $('#start-btn');
    startBtn.hidden = !iAmHost;
    startBtn.disabled = count < room.minPlayers;
  }

  function renderStageHint() {
    const { room, me } = state;
    let text = '';
    if (room.phase === 'lobby') text = 'Yürümek için meydana, kostüm için kendine dokun';
    else if (room.phase === 'night' && me.alive && !['vampir', 'doktor', 'kahin', 'cadi'].includes(me.role)) text = 'Zzz…';
    $('#stage-hint').textContent = text;
    $('#stage-hint').hidden = !text;
  }

  function renderWitchBar() {
    const { room, me, night } = state;
    const w = night && night.witch;
    const bar = $('#witch-bar');
    bar.hidden = !(room.phase === 'night' && me.alive && w);
    if (bar.hidden) return;
    const heal = $('#witch-heal');
    const poison = $('#witch-poison');
    heal.disabled = w.healUsed;
    poison.disabled = w.poisonUsed;
    heal.textContent = w.healUsed ? '🧪 Hayat iksiri (kullanıldı)' : '🧪 Hayat iksiri';
    poison.textContent = w.poisonUsed ? '☠️ Zehir (kullanıldı)' : '☠️ Zehir';
    heal.classList.toggle('active', witchMode === 'heal' && !w.healUsed);
    poison.classList.toggle('active', witchMode === 'poison' && !w.poisonUsed);
  }

  $('#witch-bar').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-witch]:not(:disabled)');
    if (!btn || !state) return;
    witchMode = btn.dataset.witch;
    render();
  });

  // ---------- karakter özelleştirme ----------

  function openLook() {
    if (!state || state.room.phase !== 'lobby') return;
    renderLook();
    openModal('look-modal');
  }

  function renderLook() {
    const { me, players } = state;
    const takenBy = new Map(players.filter((p) => p.id !== me.id && !p.left).map((p) => [p.look.color, p.name]));
    $('#look-preview').innerHTML = avatar(me.look, { mood: 'happy' });
    $('#color-swatches').innerHTML = COLORS.map((c, i) => {
      const taken = takenBy.get(i);
      return `<button type="button" class="swatch${me.look.color === i ? ' on' : ''}" data-color="${i}"
        style="--c:${c.body}" ${taken ? 'disabled' : ''} title="${esc(taken ? `${c.name} (${taken})` : c.name)}"
        aria-label="${esc(c.name)}"></button>`;
    }).join('');
    $('#hat-options').innerHTML = HATS.map((h, i) => `
      <button type="button" class="hat-opt${me.look.hat === i ? ' on' : ''}" data-hat="${i}" title="${esc(h)}" aria-label="${esc(h)}">
        ${avatar({ color: me.look.color, hat: i })}
      </button>`).join('');
  }

  $('#look-btn').addEventListener('click', openLook);
  $('#color-swatches').addEventListener('click', (e) => {
    const b = e.target.closest('[data-color]:not(:disabled)');
    if (b) emitAction('player:look', { color: Number(b.dataset.color) });
  });
  $('#hat-options').addEventListener('click', (e) => {
    const b = e.target.closest('[data-hat]');
    if (b) emitAction('player:look', { hat: Number(b.dataset.hat) });
  });

  // ---------- rol kartı ----------

  function roleCardHTML(role) {
    const r = ROLES[role];
    const mates = role === 'vampir'
      ? state.players.filter((p) => p.role === 'vampir' && p.id !== state.me.id).map((p) => esc(p.name))
      : [];
    const notes = state.me.notes || [];
    return `
      <span class="rc rc-${role}">
        <span class="rc-fig">${avatar(state.me.look, { role: role === 'koylu' ? null : role, mood: 'happy' })}</span>
        <span class="rc-name">${r.icon} ${r.name}</span>
        <span class="rc-team">Takım: ${r.team}</span>
        <span class="rc-desc">${r.desc}</span>
        ${mates.length ? `<span class="rc-mates">Diğer vampirler: ${mates.join(', ')}</span>` : ''}
        ${notes.length ? `<span class="rc-mates">${notes.map((n) => esc(n.text)).join('<br>')}</span>` : ''}
      </span>`;
  }

  function renderReveal() {
    const { room, me } = state;
    const panel = $('#reveal-panel');
    panel.hidden = room.phase !== 'reveal';
    if (panel.hidden) return;
    $('#flip-front').innerHTML = roleCardHTML(me.role);
    $('#flip-card').classList.toggle('flipped', flipped);
  }

  $('#flip-card').addEventListener('click', () => {
    flipped = !flipped;
    $('#flip-card').classList.toggle('flipped', flipped);
  });

  $('#role-chip').addEventListener('click', () => {
    if (!state || !state.me.role) return;
    $('#role-modal-card').innerHTML = `${roleCardHTML(state.me.role)}
      <div class="modal-actions"><button type="button" class="btn btn-ghost" data-close>Kapat</button></div>`;
    openModal('role-modal');
  });

  function renderEnd() {
    const { room, me, players } = state;
    const panel = $('#end-panel');
    panel.hidden = room.phase !== 'ended';
    if (panel.hidden) return;
    const won = (room.winners || []).includes(me.id);
    const title = { vampir: 'Vampirler kazandı!', koylu: 'Köylüler kazandı!', soytari: 'Soytarı kazandı!' }[room.winner];
    const winners = players.filter((p) => (room.winners || []).includes(p.id));
    panel.dataset.winner = room.winner;
    panel.innerHTML = `
      <h3>${title}</h3>
      <div class="end-winners">${winners.map((p) => `
        <span class="end-fig"><span class="jump">${avatar(p.look, { role: p.role === 'koylu' ? null : p.role, mood: 'happy' })}</span>
        <small>${esc(p.name)}</small></span>`).join('')}</div>
      <p class="end-me">${won ? '🎉 Tebrikler, kazandın!' : '😞 Bu sefer kaybettin.'}</p>
      ${room.hostId === me.id
    ? '<button class="btn btn-primary btn-lg" id="lobby-btn">Yeni Oyun İçin Lobiye Dön</button>'
    : '<p class="muted">Oda sahibi yeni oyunu başlatabilir.</p>'}`;
  }

  $('#end-panel').addEventListener('click', (e) => {
    if (e.target.closest('#lobby-btn')) emitAction('game:lobby', {});
  });

  function renderDayActions() {
    const { room, me, day } = state;
    const box = $('#day-actions');
    box.hidden = !(room.phase === 'day' && me.alive && day);
    if (box.hidden) return;
    const btn = $('#sleep-btn');
    btn.textContent = `😴 Hızlı Uyu (${day.sleepers}/${day.voters})`;
    btn.classList.toggle('active', day.myVote === 'sleep');
    $('#day-hint').textContent = day.shortened
      ? '⏱️ Herkes oy verdi! Oylama birkaç saniye içinde sonuçlanıyor.'
      : 'Yaşayan herkes Hızlı Uyu\'ya basarsa kimse asılmadan geceye geçilir.';
  }

  $('#sleep-btn').addEventListener('click', () => emitAction('day:vote', { targetId: 'sleep' }));

  $('#start-btn').addEventListener('click', () => emitAction('game:start', {}));

  $('#copy-btn').addEventListener('click', async () => {
    const input = $('#invite-link');
    try {
      await navigator.clipboard.writeText(input.value);
    } catch {
      input.select();
      document.execCommand('copy');
    }
    toast('Davet linki kopyalandı!');
  });

  $('#leave-btn').addEventListener('click', async () => {
    if (!state) return;
    const inGame = ['reveal', 'night', 'day', 'hunter'].includes(state.room.phase) && state.me.alive;
    const ok = await confirmBox(
      'Odadan ayrıl',
      inGame ? 'Oyun sürüyor. Ayrılırsan ölmüş sayılırsın ve bu oyuna geri dönemezsin.' : 'Odadan ayrılmak istediğine emin misin?',
      'Ayrıl',
    );
    if (!ok) return;
    socket.emit('room:leave', () => {});
    leaveRoomUI();
  });

  // ---------- sohbet ve olaylar ----------

  function appendChat(m) {
    const list = $('#chat-list');
    const atBottom = list.scrollHeight - list.scrollTop - list.clientHeight < 40;
    const el = document.createElement('div');
    const mine = state && m.fromId === state.me.id;
    el.className = `msg msg-${m.channel}${mine ? ' msg-me' : ''}`;
    const tag = m.channel === 'vampir' ? '<span class="msg-tag">🧛 Vampirler</span>'
      : m.channel === 'olu' ? '<span class="msg-tag">👻 Ölüler</span>' : '';
    el.innerHTML = `${tag}<b style="color:${colorOf(m.fromId)}">${esc(m.from)}</b> <span>${esc(m.text)}</span>`;
    list.appendChild(el);
    while (list.children.length > 200) list.firstElementChild.remove();
    if (atBottom || mine) list.scrollTop = list.scrollHeight;
    scene.bubble(m.fromId, m.text, m.channel);
    if (activeTab !== 'chat') {
      unread += 1;
      $('#chat-badge').textContent = unread;
      $('#chat-badge').hidden = false;
    }
  }

  function renderChatState() {
    const { room, me } = state;
    const inGame = ['night', 'day', 'hunter'].includes(room.phase);
    let hint = '';
    let disabled = false;
    if (inGame && !me.alive) hint = '👻 Mesajların sadece ölülere gider.';
    else if (room.phase === 'night' && me.role === 'vampir') hint = '🧛 Gece mesajların sadece vampirlere gider.';
    else if (room.phase === 'night') { hint = '🌙 Gece köy uyur, konuşamazsın.'; disabled = true; }
    $('#chat-hint').textContent = hint;
    $('#chat-input').disabled = disabled;
    $('#chat-form [type=submit]').disabled = disabled;
    $('#chat-input').placeholder = disabled ? 'Gece sessizliği…' : 'Mesaj yaz…';
  }

  $('#chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('#chat-input');
    const text = input.value.trim();
    if (!text) return;
    socket.emit('chat:send', { text }, (res) => {
      if (res && !res.ok) toast(res.error, 'error');
      else input.value = '';
    });
  });

  // Genel olaylar ve sadece bu oyuncuya ait notlar (kahinin sonuçları) tek listede.
  function renderLog() {
    const notes = (state.me.notes || []).map((n) => ({ ...n, kind: 'note' }));
    const log = state.log;
    const key = `${log.length ? log[log.length - 1].ts : 0}-${log.length}-${notes.length}`;
    if (key === renderedLogKey) return;
    renderedLogKey = key;
    const items = [...log, ...notes].sort((a, b) => a.ts - b.ts);
    const list = $('#log-list');
    list.innerHTML = items.map((l) => `<li class="log-${l.kind}">${esc(l.text)}</li>`).join('');
    list.scrollTop = list.scrollHeight;
  }

  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      activeTab = tab.dataset.tab;
      document.querySelectorAll('.tab').forEach((t) => t.classList.toggle('active', t === tab));
      $('#pane-chat').hidden = activeTab !== 'chat';
      $('#pane-log').hidden = activeTab !== 'log';
      if (activeTab === 'chat') {
        unread = 0;
        $('#chat-badge').hidden = true;
        $('#chat-list').scrollTop = $('#chat-list').scrollHeight;
      } else {
        $('#log-list').scrollTop = $('#log-list').scrollHeight;
      }
    });
  });

  // ---------- sayaç ----------

  function updateTimer() {
    const el = $('#timer');
    if (!state || !state.room.deadline) { el.hidden = true; return; }
    const sec = Math.max(0, Math.ceil((state.room.deadline - (Date.now() + clockOffset)) / 1000));
    el.hidden = false;
    el.textContent = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
    el.classList.toggle('urgent', sec <= 10);
  }
  setInterval(updateTimer, 250);

  // ---------- davet linki ----------

  // localhost başkasının cihazında çalışmaz; o durumda bilgisayarın ağ adresi kullanılır.
  let inviteOrigin = location.origin;
  if (!SERVER && ['localhost', '127.0.0.1', '::1', '[::1]'].includes(location.hostname)) {
    fetch('/lan.json')
      .then((r) => r.json())
      .then(({ addresses, port }) => {
        if (!addresses.length) return;
        inviteOrigin = `http://${addresses[0]}:${port}`;
        if (state) renderLobby();
      })
      .catch(() => {});
  }

  renderHowtoRoles();
  renderCreateRoles();

  const inviteCode = new URLSearchParams(location.search).get('oda');
  if (inviteCode) {
    history.replaceState(null, '', location.pathname);
    if (!session.get()) {
      socket.emit('room:info', { roomId: inviteCode }, (res) => {
        if (!res.ok) return toast(res.error, 'error');
        show('rooms');
        openJoin(res.room);
      });
    }
  }
})();
