// Menü tarafı ekranlar: giriş/kayıt, ana menü (profil, odalar, liderlik, nasıl oynanır, ayarlar),
// sunucuya ulaşılamıyor ekranı ve odaya katılma akışı.
import { ctx, send, on, emitLocal } from './ctx.js';
import { Api, auth } from './api.js';
import { openSheet, promptBox, toast, confirmBox } from './kit.js';
import { $, $$, esc, sfx, store, session } from './util.js';
import { icon, emblem, logoMark } from './icons.js';
import { ROLES, ROLE_LIST, COLORS, inkOn, levelOf, checkUsername, checkPassword, TEAM_NAME } from './data.js';
import { preview, W, prefers2D, setPrefers2D, isFallback } from './world-host.js';
import { openLookEditor } from './look.js';
import { openCreateRoom } from './roomform.js';

export function fillLogos(root = document) {
  $$('[data-logo]', root).forEach((el) => { if (!el.firstChild) el.innerHTML = logoMark(); });
}

// ======================= GİRİŞ / KAYIT =======================
let authMode = 'login';
export function initAuth(onLoggedIn) {
  $('#auth-eye').innerHTML = icon('eye');
  const setMode = (m) => {
    authMode = m;
    $$('#screen-auth .seg-btn').forEach((b) => { b.classList.toggle('on', b.dataset.mode === m); b.setAttribute('aria-selected', String(b.dataset.mode === m)); });
    const reg = m === 'register';
    $('#auth-pass2-wrap').hidden = !reg;
    $('#auth-user-hint').hidden = !reg;
    $('#auth-pass').autocomplete = reg ? 'new-password' : 'current-password';
    $('#auth-submit').textContent = reg ? 'Hesap Oluştur' : 'Giriş Yap';
    $('#auth-switch').innerHTML = reg
      ? 'Zaten hesabın var mı? <button type="button" class="link" data-mode="login">Giriş yap</button>'
      : 'Hesabın yok mu? <button type="button" class="link" data-mode="register">Hemen kayıt ol</button>';
    $('#auth-error').textContent = '';
    $$('#auth-form .input').forEach((i) => i.removeAttribute('aria-invalid'));
  };
  $('#screen-auth').addEventListener('click', (e) => {
    const b = e.target.closest('[data-mode]');
    if (b) { sfx('click'); setMode(b.dataset.mode); }
  });
  $('#auth-eye').addEventListener('click', () => {
    const p = $('#auth-pass');
    const show = p.type === 'password';
    p.type = show ? 'text' : 'password';
    $('#auth-pass2').type = p.type;
    $('#auth-eye').innerHTML = icon(show ? 'eyeOff' : 'eye');
    $('#auth-eye').setAttribute('aria-label', show ? 'Şifreyi gizle' : 'Şifreyi göster');
  });
  $('#auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const err = $('#auth-error');
    const userEl = $('#auth-user'); const passEl = $('#auth-pass');
    $$('#auth-form .input').forEach((i) => i.removeAttribute('aria-invalid'));
    err.textContent = '';
    const u = checkUsername(userEl.value);
    if (authMode === 'register' && u.error) { err.textContent = u.error; userEl.setAttribute('aria-invalid', 'true'); userEl.focus(); return; }
    if (authMode === 'login' && !u.v) { err.textContent = 'Kullanıcı adını yaz.'; userEl.setAttribute('aria-invalid', 'true'); userEl.focus(); return; }
    const pe = checkPassword(passEl.value);
    if (authMode === 'register' && pe) { err.textContent = pe; passEl.setAttribute('aria-invalid', 'true'); passEl.focus(); return; }
    if (authMode === 'login' && !passEl.value) { err.textContent = 'Şifreni yaz.'; passEl.setAttribute('aria-invalid', 'true'); passEl.focus(); return; }
    if (authMode === 'register' && passEl.value !== $('#auth-pass2').value) {
      err.textContent = 'Şifreler aynı değil.'; $('#auth-pass2').setAttribute('aria-invalid', 'true'); $('#auth-pass2').focus(); return;
    }
    const btn = $('#auth-submit');
    btn.disabled = true;
    try {
      const res = authMode === 'register' ? await Api.register(u.v, passEl.value) : await Api.login(u.v, passEl.value);
      auth.token = res.token;
      ctx.user = res.user;
      passEl.value = ''; $('#auth-pass2').value = '';
      sfx('join');
      if (authMode === 'register') toast(`Hoş geldin ${res.user.username}! Köye yeni bir yüz katıldı.`, 'ok');
      onLoggedIn();
    } catch (ex) {
      err.textContent = ex.message;
      if (ex.code === 'username_taken' || ex.code === 'invalid_username') userEl.setAttribute('aria-invalid', 'true');
      if (ex.code === 'invalid_password' || ex.code === 'wrong_credentials') passEl.setAttribute('aria-invalid', 'true');
    } finally {
      btn.disabled = false;
    }
  });
  setMode('login');
}

export function renderAuthInvite() {
  const inv = session.get('vk.invite');
  const el = $('#auth-invite');
  el.hidden = !inv;
  if (inv) el.innerHTML = `${icon('link')}<span><b>${esc(inv)}</b> odasına davet edildin. Giriş yap ya da kayıt ol, seni doğrudan odaya götürelim.</span>`;
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
        <span>Kod ${esc(r.id)}</span><span>· ${esc(r.hostName)}</span>
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
  const roles = ROLE_LIST.map((r) => `
    <article class="role-card">${emblem(r, 'l')}
      <div><h4>${ROLES[r].name} <span class="team-tag team-${ROLES[r].team}">${ROLES[r].teamName}</span></h4>
      <p>${ROLES[r].desc}</p>${ROLES[r].note ? `<p><b>${ROLES[r].note}</b></p>` : ''}</div></article>`).join('');
  openSheet({
    title: 'Nasıl Oynanır?',
    wide: true,
    body: `<div class="stack">
      <div><div class="section-title">Amaç</div>
        <p class="muted">Köyün içine vampirler sızmış. <b>Köylüler</b> gündüz tartışıp oy vererek vampirleri asmaya çalışır. <b>Vampirler</b> ve gizli yardımcıları <b>İftiracı</b> ise her gece birini ortadan kaldırarak köyü ele geçirmeye çalışır.</p></div>
      <div><div class="section-title">Oyun akışı</div>
      <ol class="steps">
        <li><strong>Roller dağıtılır.</strong> Herkes sadece kendi kartını görür. Rolünü kimseye söyleme! Vampirler ve İftiracı birbirini tanır.</li>
        <li><strong>Gece.</strong> Herkes evine çekilir, köylüler konuşamaz. Gece görevi olanlar birini seçer ve karakterleri o kişinin evine gizlice gider. Bunu sadece kendileri görür; vampirler birbirinin seçimini de görür. Seçimini süre bitene kadar değiştirebilirsin.</li>
        <li><strong>Sabah.</strong> Gece ne olduğu duyurulur. Kahin baktığı kişinin sonucunu, Gözcü gözetlediği eve kimlerin girdiğini gizlice öğrenir. Ölen kişi Avcıysa son atışını yapar.</li>
        <li><strong>Gündüz.</strong> Herkes tartışır ve şüphelendiği kişiye oy verir: karaktere ya da alttaki oyuncu şeridine dokun. Oylar herkese açıktır. Süre bitince en çok oy alan kişi asılır; eşitlikte kimse asılmaz. Herkes oy verdiyse süre 10 saniyeye iner.</li>
        <li><strong>Hızlı Uyu.</strong> Kimseyi asmak istemiyorsanız <em>Hızlı Uyu</em>'ya basın. Yaşayan herkes basarsa hemen geceye geçilir. Hızlı Uyu "kimseyi asmayalım" oyu da sayılır.</li>
        <li>Gece ve gündüz, bir taraf kazanana kadar sırayla devam eder.</li>
      </ol></div>
      <div><div class="section-title">Roller</div><div class="role-grid">${roles}</div>
        <p class="muted small">Vampir sayısı oyuncu sayısına göre belirlenir: 5–9 kişide 1, 10–14 kişide 2, 15 ve üstünde 3. Oda sahibi özel rolleri açıp kapatır; roller sırayla eklenir ve her oyunda en az bir sade köylü kalır.</p></div>
      <div><div class="section-title">Kim kazanır?</div>
        <ul class="bullets">
          <li><b>Köylüler</b>, son vampir ve İftiracı da öldüğünde kazanır.</li>
          <li><b>Vampirler</b> (İftiracı dahil), sayıları yaşayan diğer oyunculara eşit olduğunda kazanır.</li>
          <li><b>Soytarı</b>, köy onu gündüz asarsa tek başına kazanır ve oyun biter.</li>
          <li>Son vampir ölür ama İftiracı yaşıyorsa, İftiracı hemen vampire dönüşür ve oyun sürer.</li>
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
  const A = window.VKAudio;
  const vol = (A && A.getVolume && A.getVolume()) || { music: 0.7, sfx: 0.8 };
  const muted = !!(A && A.isMuted && A.isMuted());
  const q = W.getQuality() || store.get('vk.quality', 'auto');
  const p2 = prefers2D();
  const pct = (v) => Math.round((v == null ? 0.7 : v) * 100);
  const sheet = openSheet({
    title: 'Ayarlar',
    body: `
      <div class="section-title">Ses</div>
      <div class="set-row"><label for="s-mute">Tüm sesleri kapat</label><span class="switch"><input type="checkbox" id="s-mute" ${muted ? 'checked' : ''}><i></i></span></div>
      <div class="set-row"><label for="s-music">Müzik</label><div class="range"><input type="range" id="s-music" min="0" max="100" value="${pct(vol.music)}"><output>${pct(vol.music)}</output></div></div>
      <div class="set-row"><label for="s-sfx">Efektler</label><div class="range"><input type="range" id="s-sfx" min="0" max="100" value="${pct(vol.sfx)}"><output>${pct(vol.sfx)}</output></div></div>
      ${A ? '' : '<p class="note note-moon">Ses motoru yüklenemedi; oyun sessiz çalışıyor.</p>'}
      <div class="section-title">Görüntü</div>
      <div class="set-row"><label>Grafik kalitesi</label>
        <div class="seg" style="grid-column:1/-1" id="s-q">
          ${[['auto', 'Otomatik'], ['low', 'Düşük'], ['medium', 'Orta'], ['high', 'Yüksek']].map(([k, l]) => `<button type="button" class="seg-btn${q === k ? ' on' : ''}" data-q="${k}">${l}</button>`).join('')}
        </div><small>Telefon ısınıyor ya da takılıyorsa düşür.</small></div>
      <div class="set-row"><label for="s-2d">Basit 2B köy</label><span class="switch"><input type="checkbox" id="s-2d" ${p2 ? 'checked' : ''}><i></i></span>
        <small>${isFallback() && !p2 ? 'Bu cihazda 3B köy açılamadığı için zaten 2B köy kullanılıyor.' : 'Çok eski telefonlar için hafif kuşbakışı köy. Değişiklik sayfa yenilenince uygulanır.'}</small></div>
      ${ctx.user ? `<div class="section-title">Hesap</div>
      <div class="set-row"><span><b>${esc(ctx.user.username)}</b><br><small class="muted">Üyelik: ${new Date(ctx.user.createdAt).toLocaleDateString('tr-TR')}</small></span>
        <button type="button" class="btn btn-ghost btn-s" id="s-logout">${icon('logout')}Çıkış yap</button></div>` : ''}`,
    footer: '<button type="button" class="btn btn-primary" data-close>Tamam</button>',
  });
  const b = sheet.body;
  const setV = () => {
    try {
      A && A.setVolume({ music: b.querySelector('#s-music').value / 100, sfx: b.querySelector('#s-sfx').value / 100 });
    } catch { /* yoksay */ }
    b.querySelector('#s-music + output').textContent = b.querySelector('#s-music').value;
    b.querySelector('#s-sfx + output').textContent = b.querySelector('#s-sfx').value;
  };
  b.querySelector('#s-music').addEventListener('input', setV);
  b.querySelector('#s-sfx').addEventListener('input', setV);
  b.querySelector('#s-sfx').addEventListener('change', () => sfx('click'));
  b.querySelector('#s-mute').addEventListener('change', (e) => { try { A && A.mute(e.target.checked); } catch { /* yoksay */ } });
  b.querySelector('#s-q').addEventListener('click', (e) => {
    const x = e.target.closest('[data-q]');
    if (!x) return;
    W.setQuality(x.dataset.q);
    b.querySelectorAll('[data-q]').forEach((y) => y.classList.toggle('on', y === x));
  });
  b.querySelector('#s-2d').addEventListener('change', async (e) => {
    setPrefers2D(e.target.checked);
    if (await confirmBox('Köy değişiyor', 'Yeni görünüm için sayfa yenilensin mi? Odadaysan yerine geri dönersin.', 'Yenile', false)) location.reload();
  });
  const lo = b.querySelector('#s-logout');
  if (lo) lo.addEventListener('click', async () => { sheet.close(); emitLocal('logout'); });
}

export function teamLabel(t) { return TEAM_NAME[t] || t; }
export { inkOn };
