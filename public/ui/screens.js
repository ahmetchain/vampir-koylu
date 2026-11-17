// Menü tarafı ekranlar: giriş/kayıt, ana menü (profil, odalar, liderlik, nasıl oynanır, ayarlar),
// sunucuya ulaşılamıyor ekranı ve odaya katılma akışı.
import { ctx, send, on, emitLocal } from './ctx.js';
import { Api, auth } from './api.js';
import { openSheet, promptBox, toast, confirmBox } from './kit.js';
import { $, $$, esc, sfx, store, session } from './util.js';
import { icon, emblem, logoMark, roleIcon } from './icons.js';
import { ROLES, ROLE_LIST, COLORS, inkOn, levelOf, checkUsername, checkPassword, TEAM_NAME, EVENTS, EVENTS_UI, ROLE_GROUPS, ROLE_GUIDE } from './data.js';
import { preview, W, prefers2D, setPrefers2D, isFallback } from './world-host.js';
import { openLookEditor } from './look.js';
import { openCreateRoom } from './roomform.js';
import { soundControlsHTML, bindSoundControls } from './sound.js';
import { fpsEnabled, setFpsEnabled } from './fps.js';

export function fillLogos(root = document) {
  $$('[data-logo]', root).forEach((el) => { if (!el.firstChild) el.innerHTML = logoMark(); });
}

// ======================= GİRİŞ / KAYIT =======================
// Alanlar yazarken değil, bir kez dokunulup bırakıldıktan (ya da gönderildikten) sonra uyarır;
// sunucu hataları formun altında okunur bir kutuda, ilgili alan da kırmızı işaretlenir.
const LAST_USER_KEY = 'vk.lastUser';
const USER_IC = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c.8-3.9 3.8-6 7.5-6s6.7 2.1 7.5 6"/></svg>';
const AUTH_TEXT = {
  login: { h: 'Tekrar hoş geldin', sub: 'Köy seni bekliyor. Kaldığın yerden devam et.', submit: 'Giriş Yap', busy: 'Giriş yapılıyor…',
    sw: 'Hesabın yok mu? <button type="button" class="link" data-mode="register">Hemen kayıt ol</button>' },
  register: { h: 'Köye katıl', sub: 'Bir ad seç, şifreni belirle. Hepsi bu kadar.', submit: 'Hesap Oluştur', busy: 'Hesap oluşturuluyor…',
    sw: 'Zaten hesabın var mı? <button type="button" class="link" data-mode="login">Giriş yap</button>' },
};
const finePointer = () => !!(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches);

let authMode = 'login';
let authBusy = false;
const touched = new Set();

function fieldEl(f) { return $(`#auth-form .af-field[data-f="${f}"]`); }
function setFieldMsg(f, state, text) {
  const wrap = fieldEl(f);
  const input = wrap.querySelector('.af-input');
  const msg = wrap.querySelector('.af-msg');
  if (state) wrap.dataset.state = state; else delete wrap.dataset.state;
  if (state === 'error') input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
  const ic = state === 'error' ? icon('info') : state === 'ok' ? icon('check') : '';
  msg.innerHTML = text ? `${ic}<span>${esc(text)}</span>` : '';
}

// Tek bir alanı doğrular; hata metnini (ya da null) döner. show=false ise sadece sonucu verir.
function validateField(f, show = true) {
  const reg = authMode === 'register';
  let err = null; let ok = null; let hint = null;
  if (f === 'user') {
    const raw = $('#auth-user').value;
    const u = checkUsername(raw);
    if (!u.v) err = reg ? 'Bir kullanıcı adı seç.' : 'Kullanıcı adını yaz.';
    else if (u.error) err = u.error;
    if (reg) {
      const c = $('#auth-user-count');
      c.textContent = `${u.v.length}/16`;
      hint = '3–16 karakter: harf, rakam, boşluk ve _ - . olabilir.';
    }
  } else if (f === 'pass') {
    const v = $('#auth-pass').value;
    if (!v) err = reg ? 'Bir şifre belirle.' : 'Şifreni yaz.';
    else if (reg) err = checkPassword(v);
    if (reg) hint = 'En az 6 karakter.';
    if (reg && !err) ok = 'Şifre uygun.';
  } else if (f === 'pass2') {
    if (!reg) return null;
    const a = $('#auth-pass').value; const b = $('#auth-pass2').value;
    if (!b) err = 'Şifreni bir kez daha yaz.';
    else if (a !== b) err = 'Şifreler aynı değil.';
    else ok = 'Şifreler eşleşiyor.';
  }
  if (show) {
    if (err && touched.has(f)) setFieldMsg(f, 'error', err);
    else if (!err && ok && touched.has(f)) setFieldMsg(f, 'ok', ok);
    else setFieldMsg(f, null, hint);
  }
  return err;
}
function visibleFields() { return authMode === 'register' ? ['user', 'pass', 'pass2'] : ['user', 'pass']; }
function setAuthAlert(html) { $('#auth-error').innerHTML = html ? `${icon('info')}<span>${html}</span>` : ''; }

function setAuthMode(m, { focus = false } = {}) {
  authMode = m;
  const reg = m === 'register';
  const t = AUTH_TEXT[m];
  $('.auth-seg').dataset.mode = m;
  $$('#screen-auth .auth-tab').forEach((b) => {
    const on = b.dataset.mode === m;
    b.classList.toggle('on', on);
    b.setAttribute('aria-selected', String(on));
    b.tabIndex = on ? 0 : -1;
  });
  $('#auth-form').setAttribute('aria-labelledby', `auth-tab-${m}`);
  $('#auth-pass2-wrap').hidden = !reg;
  $('#auth-pass2').disabled = !reg;
  $('#auth-user-count').hidden = !reg;
  $('#auth-pass').autocomplete = reg ? 'new-password' : 'current-password';
  $('#auth-pass').placeholder = reg ? 'En az 6 karakter' : 'Şifren';
  $('#auth-pass').enterKeyHint = reg ? 'next' : 'go';
  $('#auth-h').textContent = t.h;
  $('#auth-sub').textContent = t.sub;
  $('#auth-submit .as-label').textContent = t.submit;
  $('#auth-switch').innerHTML = t.sw;
  // Kayda geçerken hatırlanan (kendi) adını öneride bırakma: yeni hesap için yeni ad gerekir.
  const last = store.get(LAST_USER_KEY);
  if (reg && last && $('#auth-user').value === last) $('#auth-user').value = '';
  if (!reg && !$('#auth-user').value && last) $('#auth-user').value = last;
  $('#auth-pass2').value = '';
  touched.clear();
  setAuthAlert('');
  ['user', 'pass', 'pass2'].forEach((f) => validateField(f));
  if (focus) focusFirstAuthField();
}

function focusFirstAuthField() {
  const u = $('#auth-user');
  const target = u.value && authMode === 'login' ? $('#auth-pass') : u;
  try { target.focus({ preventScroll: true }); } catch { target.focus(); }
}

// Telefonda klavye açılınca: odaktaki alanla birlikte "gönder" düğmesi de görünsün.
function keepSubmitVisible() {
  const scr = $('#screen-auth');
  if (scr.hidden) return;
  const a = document.activeElement;
  if (!a || !a.closest || !a.closest('#auth-form')) return;
  const box = scr.getBoundingClientRect();
  const field = (a.closest('.af-field') || a).getBoundingClientRect();
  const btn = $('#auth-submit').getBoundingClientRect();
  const pad = 12;
  if (btn.bottom + pad > box.bottom && btn.bottom - field.top + pad * 2 <= box.height) {
    scr.scrollBy({ top: btn.bottom + pad - box.bottom, behavior: 'auto' });
  } else if (field.top < box.top + pad) {
    scr.scrollBy({ top: field.top - box.top - pad, behavior: 'auto' });
  }
}

export function initAuth(onLoggedIn) {
  $$('#screen-auth [data-ic]').forEach((el) => {
    const n = el.dataset.ic;
    el.innerHTML = n === 'user' ? USER_IC : n === 'vampir' ? roleIcon('vampir') : icon(n);
  });
  $('#auth-eye').innerHTML = icon('eye');
  const scr = $('#screen-auth');

  scr.addEventListener('click', (e) => {
    const b = e.target.closest('[data-mode]');
    if (b && !authBusy) {
      sfx('click');
      if (b.dataset.mode !== authMode) setAuthMode(b.dataset.mode, { focus: finePointer() || !b.classList.contains('auth-tab') });
      return;
    }
    if (e.target.closest('[data-howto]')) { sfx('click'); openHowto(); }
  });
  // Sekmeler arasında ok tuşlarıyla geçiş (WAI-ARIA sekme kalıbı).
  $('.auth-seg').addEventListener('keydown', (e) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key) || authBusy) return;
    e.preventDefault();
    const next = authMode === 'login' ? 'register' : 'login';
    const m = e.key === 'Home' ? 'login' : e.key === 'End' ? 'register' : next;
    if (m !== authMode) setAuthMode(m);
    $(`#auth-tab-${m}`).focus();
  });

  $('#auth-eye').addEventListener('click', () => {
    const p = $('#auth-pass');
    const show = p.type === 'password';
    p.type = show ? 'text' : 'password';
    $('#auth-pass2').type = p.type;
    $('#auth-eye').innerHTML = icon(show ? 'eyeOff' : 'eye');
    $('#auth-eye').setAttribute('aria-label', show ? 'Şifreyi gizle' : 'Şifreyi göster');
    $('#auth-eye').setAttribute('aria-pressed', String(show));
  });

  const map = { 'auth-user': 'user', 'auth-pass': 'pass', 'auth-pass2': 'pass2' };
  Object.entries(map).forEach(([id, f]) => {
    const el = $(`#${id}`);
    el.addEventListener('input', () => {
      if ($('#auth-error').innerHTML) setAuthAlert('');
      validateField(f);
      if (f === 'pass' && touched.has('pass2')) validateField('pass2');
      // "Şifreler eşleşiyor" onayı, ikinci şifre ilkinin uzunluğuna ulaşınca hemen görünsün.
      if (f === 'pass2' && el.value.length >= $('#auth-pass').value.length) { touched.add('pass2'); validateField('pass2'); }
    });
    el.addEventListener('blur', () => {
      if (authBusy) return;
      if (el.value) touched.add(f);
      validateField(f);
    });
  });
  // Caps Lock uyarısı (şifre alanlarında).
  const caps = (e) => { if (e.getModifierState) $('#auth-caps').hidden = !e.getModifierState('CapsLock'); };
  ['#auth-pass', '#auth-pass2'].forEach((s) => { $(s).addEventListener('keyup', caps); $(s).addEventListener('keydown', caps); });
  $('#auth-pass').addEventListener('blur', () => { $('#auth-caps').hidden = true; });

  // Enter: sonraki alan boşsa ona geç, değilse gönder.
  $('#auth-form').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || e.isComposing || !e.target.classList.contains('af-input')) return;
    const fields = visibleFields().map((f) => fieldEl(f).querySelector('.af-input'));
    const i = fields.indexOf(e.target);
    const next = fields[i + 1];
    if (next && !next.value) { e.preventDefault(); next.focus(); }
  });

  scr.addEventListener('focusin', () => setTimeout(keepSubmitVisible, 320));
  if (window.visualViewport) window.visualViewport.addEventListener('resize', () => setTimeout(keepSubmitVisible, 60));

  $('#auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (authBusy) return;
    setAuthAlert('');
    const fields = visibleFields();
    fields.forEach((f) => touched.add(f));
    const bad = fields.filter((f) => validateField(f));
    if (bad.length) {
      fieldEl(bad[0]).querySelector('.af-input').focus();
      sfx('error');
      return;
    }
    const mode = authMode;
    const userEl = $('#auth-user'); const passEl = $('#auth-pass');
    const name = checkUsername(userEl.value).v;
    const btn = $('#auth-submit');
    authBusy = true;
    btn.classList.add('is-busy');
    btn.setAttribute('aria-disabled', 'true');
    $('#auth-form').setAttribute('aria-busy', 'true');
    $('#auth-submit .as-label').textContent = AUTH_TEXT[mode].busy;
    $$('#auth-form .af-input').forEach((i) => { i.readOnly = true; });
    try {
      const res = mode === 'register' ? await Api.register(name, passEl.value) : await Api.login(name, passEl.value);
      auth.token = res.token;
      ctx.user = res.user;
      store.set(LAST_USER_KEY, res.user.username);
      passEl.value = ''; $('#auth-pass2').value = '';
      touched.clear();
      ['user', 'pass', 'pass2'].forEach((f) => setFieldMsg(f, null, ''));
      sfx('join');
      if (mode === 'register') toast(`Hoş geldin ${res.user.username}! Köye yeni bir yüz katıldı.`, 'ok');
      onLoggedIn();
    } catch (ex) {
      showAuthError(ex);
    } finally {
      authBusy = false;
      btn.classList.remove('is-busy');
      btn.removeAttribute('aria-disabled');
      $('#auth-form').removeAttribute('aria-busy');
      $('#auth-submit .as-label').textContent = AUTH_TEXT[authMode].submit;
      $$('#auth-form .af-input').forEach((i) => { i.readOnly = false; });
    }
  });

  setAuthMode('login');
}

function showAuthError(ex) {
  const code = ex && ex.code;
  const msg = esc((ex && ex.message) || 'Bir şeyler ters gitti, tekrar dene.');
  sfx('error');
  if (code === 'username_taken') {
    setFieldMsg('user', 'error', 'Bu ad alınmış.');
    setAuthAlert(`${msg} Bu ad senin mi? <button type="button" class="link" data-mode="login">Giriş yap</button>`);
    $('#auth-user').focus();
    $('#auth-user').select();
  } else if (code === 'invalid_username') {
    setFieldMsg('user', 'error', ex.message);
    $('#auth-user').focus();
  } else if (code === 'invalid_password') {
    setFieldMsg('pass', 'error', ex.message);
    $('#auth-pass').focus();
  } else if (code === 'wrong_credentials') {
    setFieldMsg('pass', 'error', 'Şifreyi kontrol et.');
    setAuthAlert(`${msg} Hesabın yoksa <button type="button" class="link" data-mode="register">kayıt ol</button>.`);
    $('#auth-pass').focus();
    $('#auth-pass').select();
  } else {
    setAuthAlert(msg);
  }
}

// Giriş ekranı her açıldığında: davet bandı, son kullanıcı adı ve (fareli cihazlarda) ilk alana odak.
export function renderAuthInvite() {
  const inv = session.get('vk.invite');
  const el = $('#auth-invite');
  el.hidden = !inv;
  if (inv) {
    el.innerHTML = `<span class="ai-ic">${icon('link')}</span><span><b><code>${esc(inv)}</code> odasına davet edildin</b>`
      + '<small>Giriş yap ya da kayıt ol, seni doğrudan odaya götürelim.</small></span>';
  }
  // Bu cihazda daha önce giriş yapılmışsa giriş sekmesi (ad hazır), davetle gelen yeni biri için kayıt sekmesi.
  const last = store.get(LAST_USER_KEY);
  if (last) $('#auth-user').value = last;
  $('#auth-pass').value = '';
  setAuthMode(last ? 'login' : inv ? 'register' : authMode);
  $('#screen-auth').scrollTop = 0;
  if (finePointer()) requestAnimationFrame(focusFirstAuthField);
}

// ======================= ANA MENÜ =======================
let profilePreview = null;
let watching = false;
let roomsCache = [];

export function initMenu() {
  const labels = {
    create: `${icon('house')}Oda Kur`,
    leaderboard: `${icon('trophy')}Liderlik`,
    howto: `${icon('book')}Nasıl Oynanır`,
    settings: `${icon('gear')}Ayarlar`,
  };
  $$('#screen-menu [data-act]').forEach((b) => {
    if (b.classList.contains('iconbtn')) b.innerHTML = icon('gear');
    else b.innerHTML = labels[b.dataset.act];
  });
  $('#screen-menu').addEventListener('click', (e) => {
    const a = e.target.closest('[data-act]');
    if (a) {
      sfx('click');
      ({ create: openCreateRoom, leaderboard: openLeaderboard, howto: openHowto, settings: openSettings, look: openLookEditor })[a.dataset.act]();
      return;
    }
    const j = e.target.closest('[data-join]');
    if (j) { sfx('click'); joinByCode(j.dataset.join); }
  });
  $('#code-input').addEventListener('input', (e) => {
    e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 5);
  });
  $('#code-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const v = $('#code-input').value;
    if (v.length !== 5) { toast('Oda kodu 5 karakterdir (ör. K7QPA).', 'error'); $('#code-input').focus(); return; }
    joinByCode(v);
  });
  on('user', renderProfile);
  on('open-settings', openSettings);
}

export function enterMenu() {
  renderProfile();
  watchRooms(true);
}
export function leaveMenu() {
  watchRooms(false);
}

export function renderProfile() {
  const u = ctx.user;
  if (!u) return;
  const lv = levelOf(u.stats);
  const st = u.stats || { games: 0, wins: 0 };
  const rate = st.games ? Math.round((st.wins / st.games) * 100) : 0;
  const el = $('#profile');
  if (!el.dataset.built) {
    el.dataset.built = '1';
    el.innerHTML = `
      <button type="button" class="profile-fig" data-act="look" aria-label="Görünümünü değiştir"><span class="pf-canvas" style="position:absolute;inset:0"></span><span class="edit">${icon('palette')}</span></button>
      <div class="profile-main">
        <div class="profile-name"></div>
        <div class="level-row"><span class="level-badge"></span><span class="lv-title"></span></div>
        <div class="xp"><i></i></div>
        <div class="xp-label"></div>
        <div class="stats">
          <div class="stat"><b data-s="games"></b><small>Oyun</small></div>
          <div class="stat"><b data-s="wins"></b><small>Galibiyet</small></div>
          <div class="stat"><b data-s="rate"></b><small>Oran</small></div>
        </div>
      </div>`;
  }
  el.querySelector('.profile-name').textContent = u.username;
  el.querySelector('.level-badge').textContent = lv.level;
  el.querySelector('.lv-title').textContent = lv.title;
  el.querySelector('.xp i').style.width = `${Math.round(lv.progress * 100)}%`;
  el.querySelector('.xp-label').textContent = `${lv.xp} / ${lv.to} puan · sonraki seviyeye ${lv.to - lv.xp}`;
  el.querySelector('[data-s=games]').textContent = st.games;
  el.querySelector('[data-s=wins]').textContent = st.wins;
  el.querySelector('[data-s=rate]').textContent = `%${rate}`;
  if (ctx.view === 'menu') {
    if (!profilePreview) profilePreview = preview(el.querySelector('.pf-canvas'), u.look, { turntable: true });
    else profilePreview.setLook(u.look);
  }
}
export function disposeProfilePreview() {
  if (profilePreview) { profilePreview.dispose(); profilePreview = null; }
}

function watchRooms(onOff) {
  if (!ctx.socket) return;
  if (onOff) {
    watching = true;
    send('rooms:watch', undefined, { quiet: true }).then((res) => { if (res.ok) renderRooms(res.rooms); });
  } else if (watching) {
    watching = false;
    send('rooms:unwatch', undefined, { quiet: true });
  }
}
export function onRoomsUpdate(rooms) {
  if (ctx.view === 'menu') renderRooms(rooms);
}
export function rewatchRooms() { if (ctx.view === 'menu') watchRooms(true); }

function renderRooms(rooms) {
  roomsCache = rooms || [];
  const list = $('#room-list');
  if (!roomsCache.length) {
    list.innerHTML = `<div class="empty">${icon('moon')}<p>Şu an açık oda yok. İlk odayı sen kur, arkadaşlarını davet et!</p>
      <button type="button" class="btn btn-secondary" data-act="create">${icon('house')}Oda Kur</button></div>`;
    return;
  }
  const phaseName = { lobby: 'Bekliyor', ended: 'Oyun bitti', reveal: 'Oyunda', night: 'Oyunda', day: 'Oyunda', hunter: 'Oyunda' };
  list.innerHTML = roomsCache.map((r) => {
    const open = r.phase === 'lobby' && r.players < r.maxPlayers;
    const status = r.phase === 'lobby' && !open ? 'Dolu' : phaseName[r.phase] || 'Oyunda';
    return `<article class="room-item">
      <div class="room-item-name">${r.hasPassword ? icon('lock') : ''}<span>${esc(r.name)}</span></div>
      <div class="room-item-meta">
        <span class="chip ${open ? 'chip-ok' : 'chip-moon'}">${status}</span>
        <span>${icon('users', '', '')} ${r.players}/${r.maxPlayers}</span>
        <span>Kod ${esc(r.id)}</span><span>· ${esc(r.hostName)}</span>${r.bots ? `<span>· ${r.bots} bot</span>` : ''}
      </div>
      <button type="button" class="btn btn-s ${open ? 'btn-primary' : 'btn-ghost'}" data-join="${esc(r.id)}">${open ? 'Katıl' : 'Bak'}</button>
    </article>`;
  }).join('');
  list.querySelectorAll('.room-item-meta .ic').forEach((i) => { i.style.width = '14px'; i.style.height = '14px'; i.style.display = 'inline'; i.style.verticalAlign = '-2px'; });
}

// ======================= ODAYA KATILMA =======================
export async function joinByCode(code) {
  const roomId = String(code || '').trim().toUpperCase();
  const info = await send('room:info', { roomId }, { quiet: true });
  if (!info.ok) { toast(info.error || 'Oda bulunamadı.', 'error'); return false; }
  // Hesabın odada zaten yeri varsa şifresiz bağlanır (yeniden bağlanma).
  const first = await send('room:join', { roomId }, { quiet: true });
  if (first.ok) { joined(first); return true; }
  if (info.room.hasPassword && /şifre/i.test(first.error || '')) {
    promptBox({
      title: 'Şifreli oda',
      intro: `<b>${esc(info.room.name)}</b> odası şifreli. Oda sahibinden şifreyi iste.`,
      label: 'Oda şifresi',
      type: 'password',
      maxlength: 20,
      okLabel: 'Katıl',
      submit: async (pw) => {
        const res = await send('room:join', { roomId, password: pw }, { quiet: true });
        if (!res.ok) return res.error || 'Katılamadın.';
        joined(res);
        return null;
      },
    });
    return false;
  }
  toast(first.error || 'Odaya katılamadın.', 'error');
  return false;
}
function joined(res) {
  ctx.roomId = res.roomId;
  store.set('vk.room', res.roomId);
  sfx('join');
}

// ======================= LİDERLİK =======================
async function openLeaderboard() {
  const sheet = openSheet({ title: 'Liderlik Tablosu', body: '<p class="muted">Yükleniyor…</p>' });
  try {
    const res = await Api.leaderboard(20);
    if (!res.players.length) {
      sheet.body.innerHTML = `<div class="empty">${icon('trophy')}<p>Henüz kimse oyun bitirmedi. İlk adı sen yazdır!</p></div>`;
      return;
    }
    sheet.body.innerHTML = `<div class="lb">${res.players.map((p, i) => {
      const c = COLORS[p.look.color] || COLORS[0];
      const mine = ctx.user && p.username === ctx.user.username;
      const rate = p.stats.games ? Math.round(p.stats.wins / p.stats.games * 100) : 0;
      return `<div class="lb-row${mine ? ' me' : ''}"><span class="lb-rank">${i + 1}</span>
        <span class="lb-name"><span class="swatch-dot" style="background:${c}"></span><span>${esc(p.username)}</span><small class="chip">Sv ${levelOf(p.stats).level}</small></span>
        <span class="lb-num"><b>${p.stats.wins} galibiyet</b>${p.stats.games} oyun · %${rate}</span></div>`;
    }).join('')}</div>`;
  } catch (e) {
    sheet.body.innerHTML = `<p class="form-error">${esc(e.message)}</p>`;
  }
}

// ======================= NASIL OYNANIR =======================
export function openHowto() {
  const roleAcc = (r) => {
    const g = ROLE_GUIDE[r] || {};
    const row = (k, label) => (g[k] ? `<div><dt>${label}</dt><dd>${g[k]}</dd></div>` : '');
    return `<details class="role-acc" style="--rc:${ROLES[r].color}">
      <summary>${emblem(r, 'm')}<span><b>${ROLES[r].name}</b><small>${ROLES[r].short}</small></span>${icon('chevDown')}</summary>
      <dl>${row('what', 'Ne yapar')}${row('when', 'Ne zaman')}${row('limits', 'Sınırlar')}${row('with', 'Diğer rollerle')}${row('tip', 'İpucu')}</dl></details>`;
  };
  const roles = ROLE_GROUPS.map(([team, title, list]) => `<div class="role-group"><h4 class="role-group-h"><span class="team-tag team-${team}">${title}</span></h4>${list.filter((r) => ROLES[r]).map(roleAcc).join('')}</div>`).join('');
  void ROLE_LIST;
  openSheet({
    title: 'Nasıl Oynanır?',
    wide: true,
    body: `<div class="stack">
      <div><div class="section-title">Amaç</div>
        <p class="muted">Köyün içine vampirler sızmış. <b>Köylüler</b> gündüz tartışıp oy vererek vampirleri asmaya çalışır. <b>Vampirler</b> ve gizli yardımcıları <b>İftiracı</b> ve <b>Temizlikçi</b> ise her gece birini ortadan kaldırarak köyü ele geçirmeye çalışır.</p></div>
      <div><div class="section-title">Oyun akışı</div>
      <ol class="steps">
        <li><strong>Roller dağıtılır.</strong> Herkes sadece kendi kartını görür. Rolünü kimseye söyleme! Vampirler ve yardımcıları (İftiracı, Temizlikçi) birbirini tanır.</li>
        <li><strong>Gece: seçim.</strong> Herkes evine çekilir, köylüler konuşamaz. Sayaç işlerken gece görevi olanlar birini seçer ve onaylar; <b>onaylanan seçim kesindir</b>. İstemeyen "Bu gece bekle" der. Bu sırada köyde kimse kıpırdamaz. Vampirlerin tek ortak hedefi vardır: ilk onaylayan vampir belirler.</li>
        <li><strong>Gece: yaşanış.</strong> Seçimler bitince gece oynanır: herkes kendi yolunu yürür, kapıya varır, döner. Sıra şöyledir: önce Gardiyanın kilidi (kilitli eve kimse giremez, sahibi de çıkamaz), sonra vampirlerin saldırısı, sonra Hırsız, sonra Cadının zehri. Bu gece ölen kişi evinden hiç çıkmamış sayılır: onun bakışı, koruması ya da iftirası olmaz. Kahin, Gözcü ve diğerlerinin özel sonuçları bu sırada sadece kendilerine gelir.</li>
        <li><strong>Sabah.</strong> Gece kimin öldüğü herkese duyurulur. Ölen kişi Avcıysa son atışını yapar.</li>
        <li><strong>Gündüz.</strong> Herkes tartışır ve şüphelendiği kişiye oy verir: karaktere ya da alttaki oyuncu şeridine dokun. Oylar herkese açıktır. Süre bitince en çok oy alan kişi asılır; eşitlikte kimse asılmaz. Herkes oy verdiyse süre 10 saniyeye iner.</li>
        <li><strong>Hızlı Uyu.</strong> Kimseyi asmak istemiyorsanız <em>Hızlı Uyu</em>'ya basın. Yaşayan herkes basarsa hemen geceye geçilir. Hızlı Uyu "kimseyi asmayalım" oyu da sayılır.</li>
        <li>Gece ve gündüz, bir taraf kazanana kadar sırayla devam eder.</li>
      </ol></div>
      <div><div class="section-title">Roller</div><div class="role-grid">${roles}</div>
        <p class="muted small">Vampir sayısı oyuncu sayısına göre belirlenir: 5–9 kişide 1, 10–14 kişide 2, 15 ve üstünde 3. Oda sahibi özel rolleri açıp kapatır; roller sırayla eklenir ve her oyunda en az bir sade köylü kalır.</p></div>
      ${EVENTS_UI ? `<div><div class="section-title">Köy olayları</div>
        <p class="muted small">Oda ayarına göre (Kapalı / Ara sıra / Sık) bazı gece ya da gündüzler bir olay olur; tellal duyurur ve olay sürerken üst çubukta görünür.</p>
        <ul class="bullets">${Object.values(EVENTS).map((e) => `<li><b>${e.name}</b> (${e.phase === 'night' ? 'gece' : 'gündüz'}): ${e.desc}</li>`).join('')}</ul></div>` : ''}
      <div><div class="section-title">Kim kazanır?</div>
        <ul class="bullets">
          <li><b>Köylüler</b>, son vampir ve yardımcıları da öldüğünde kazanır.</li>
          <li><b>Vampirler</b> (yardımcıları dahil), sayıları yaşayan diğer oyunculara eşit olduğunda kazanır.</li>
          <li><b>Soytarı</b>, köy onu gündüz asarsa tek başına kazanır ve oyun biter.</li>
          <li>Son vampir ölür ama bir yardımcı yaşıyorsa, o hemen vampire dönüşür ve oyun sürer.</li>
        </ul></div>
      <div><div class="section-title">Ölüler ve kurallar</div>
        <ul class="bullets">
          <li>Ölen oyuncular hayalet olarak izlemeye devam eder ama sadece diğer ölülerle yazışabilir. Sesli konuşuyorsanız ölüler ipucu vermesin!</li>
          <li>Oda sahibi açtıysa ölen kişinin rolü herkese açıklanır.</li>
          <li>Bağlantın koparsa ya da sayfayı yenilersen hesabınla aynı yerine geri dönersin. Oyundan "Ayrıl" ile çıkan ölmüş sayılır.</li>
          <li>Oyun bitince herkesin rolü açılır, istatistiklerin profiline işlenir ve oda sahibi yeni oyun başlatabilir.</li>
        </ul></div>
    </div>`,
  });
}

// ======================= AYARLAR =======================
export function openSettings() {
  const q = store.get('vk.quality', null) || W.getQuality() || 'auto';
  const p2 = prefers2D();
  const tiers = W.qualities();
  const sheet = openSheet({
    title: 'Ayarlar',
    body: `
      <div class="section-title">Ses</div>
      ${soundControlsHTML('s')}
      <div class="section-title">Görüntü</div>
      <div class="qlist" role="radiogroup" aria-label="Grafik kalitesi" id="s-q">
        ${tiers.map((t) => `<button type="button" role="radio" class="qopt${q === t.id ? ' on' : ''}" data-q="${esc(t.id)}" aria-checked="${q === t.id}">
          <span class="qdot"></span><span><b>${esc(t.label)}</b>${t.desc ? `<small>${esc(t.desc)}</small>` : ''}</span></button>`).join('')}
      </div>
      <p class="muted small" style="margin:6px 0 0">Telefon ısınıyor ya da takılıyorsa bir alt kademeyi seç.</p>
      <div class="set-row"><label for="s-fps">FPS göster</label><span class="switch"><input type="checkbox" id="s-fps" ${fpsEnabled() ? 'checked' : ''}><i></i></span>
        <small>Oyunda köşede küçük bir ölçüm etiketi çıkar (kare hızı, kare süresi, kalite). Takılma bildirirken bu sayıları paylaş.</small></div>
      <div class="set-row"><label for="s-2d">Basit 2B köy</label><span class="switch"><input type="checkbox" id="s-2d" ${p2 ? 'checked' : ''}><i></i></span>
        <small>${isFallback() && !p2 ? 'Bu cihazda 3B köy açılamadığı için zaten 2B köy kullanılıyor.' : 'Çok eski telefonlar için hafif kuşbakışı köy. Değişiklik sayfa yenilenince uygulanır.'}</small></div>
      ${ctx.user ? `<div class="section-title">Hesap</div>
      <div class="set-row"><span><b>${esc(ctx.user.username)}</b><br><small class="muted">Üyelik: ${new Date(ctx.user.createdAt).toLocaleDateString('tr-TR')}</small></span>
        <button type="button" class="btn btn-ghost btn-s" id="s-logout">${icon('logout')}Çıkış yap</button></div>` : ''}`,
    footer: '<button type="button" class="btn btn-primary" data-close>Tamam</button>',
  });
  const b = sheet.body;
  bindSoundControls(b);
  b.querySelector('#s-q').addEventListener('click', (e) => {
    const x = e.target.closest('[data-q]');
    if (!x) return;
    sfx('click');
    W.setQuality(x.dataset.q);
    b.querySelectorAll('[data-q]').forEach((y) => { y.classList.toggle('on', y === x); y.setAttribute('aria-checked', String(y === x)); });
  });
  b.querySelector('#s-fps').addEventListener('change', (e) => setFpsEnabled(e.target.checked));
  b.querySelector('#s-2d').addEventListener('change', async (e) => {
    setPrefers2D(e.target.checked);
    if (await confirmBox('Köy değişiyor', 'Yeni görünüm için sayfa yenilensin mi? Odadaysan yerine geri dönersin.', 'Yenile', false)) location.reload();
  });
  const lo = b.querySelector('#s-logout');
  if (lo) lo.addEventListener('click', async () => { sheet.close(); emitLocal('logout'); });
}

export function teamLabel(t) { return TEAM_NAME[t] || t; }
export { inkOn };
