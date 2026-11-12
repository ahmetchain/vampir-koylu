// Vampir Köylü v2 – arayüz giriş noktası (ES modülü, derleme yok).
// Açılış → oturum kontrolü → giriş ya da ana menü → oda (lobi + oyun). Sunucu protokolü: docs/PROTOCOL.md.
import { ctx, emitLocal, on, send } from './ui/ctx.js';
import { Api, auth, SERVER } from './ui/api.js';
import { $, loadScript, session, store, audioScene } from './ui/util.js';
import { toast, closeAllSheets } from './ui/kit.js';
import { initWorld, W, ready as worldReady } from './ui/world-host.js';
import {
  fillLogos, initAuth, renderAuthInvite, initMenu, enterMenu, leaveMenu, renderProfile,
  disposeProfilePreview, onRoomsUpdate, rewatchRooms, joinByCode,
} from './ui/screens.js';
import { initChat, appendChat, clearChat } from './ui/chat.js';
import { initAnnounce, pushAnnounce, clearAnnounces } from './ui/announce.js';
import { initChronicle, resetChronicle, chronicleOnState, closeChronicle } from './ui/chronicle.js';
import { initRoom, renderAll, resetRoomUI, pick, scheduleInsets } from './ui/room.js';
import { openLookEditor } from './ui/look.js';

const ROOM_KEY = 'vk.room';
const INVITE_KEY = 'vk.invite';

// ---------- görünür alan: klavye açıkken de uygulama tam ekran, sayfa kaymaz ----------
function setupViewport() {
  const root = document.documentElement;
  const vv = window.visualViewport;
  const apply = () => {
    const h = vv ? vv.height : window.innerHeight;
    root.style.setProperty('--app-h', `${Math.round(h)}px`);
    root.style.setProperty('--vv-top', `${Math.round(vv ? vv.offsetTop : 0)}px`);
    if (window.scrollY || window.scrollX) window.scrollTo(0, 0);
    W.resize();
    scheduleInsets();
  };
  if (vv) { vv.addEventListener('resize', apply); vv.addEventListener('scroll', apply); }
  window.addEventListener('resize', apply);
  window.addEventListener('orientationchange', () => setTimeout(apply, 250));
  document.addEventListener('focusout', () => setTimeout(apply, 60));
  apply();
}

// ---------- görünümler ----------
function show(view) {
  const prev = ctx.view;
  ctx.view = view;
  $('#app').dataset.view = view;
  $('#splash').hidden = view !== 'splash';
  $('#screen-auth').hidden = view !== 'auth';
  $('#screen-menu').hidden = view !== 'menu';
  $('#screen-down').hidden = view !== 'down';
  $('#room').hidden = view !== 'room';
  if (prev === 'menu' && view !== 'menu') { leaveMenu(); disposeProfilePreview(); }
  if (view === 'room') W.setView('game'); else W.setView('menu');
  if (view === 'menu') { enterMenu(); audioScene('menu'); document.title = 'Vampir Köylü'; }
  if (view === 'auth') { renderAuthInvite(); audioScene('menu'); document.title = 'Vampir Köylü · Giriş'; }
  scheduleInsets();
}

function setConn(text) {
  const el = $('#conn');
  el.hidden = !text;
  if (text) el.innerHTML = `<span class="spin"></span><span>${text}</span>`;
}

// ---------- soket ----------
function connectSocket() {
  if (ctx.socket) { ctx.socket.removeAllListeners(); ctx.socket.disconnect(); }
  const opts = { auth: { token: auth.token }, transports: ['websocket', 'polling'] };
  const socket = SERVER ? window.io(SERVER, opts) : window.io(opts);
  ctx.socket = socket;
  let everConnected = false;

  socket.on('connect', async () => {
    everConnected = true;
    setConn('');
    const roomId = store.get(ROOM_KEY);
    if (roomId) {
      const res = await send('session:resume', { roomId }, { quiet: true });
      if (res.ok) { ctx.roomId = res.roomId; return; }
      store.set(ROOM_KEY, null);
      if (ctx.view === 'room') { exitRoom(); toast('Oda artık yok ya da oyundaki yerin kalmadı.', 'error'); }
    }
    const invite = session.get(INVITE_KEY);
    if (invite) {
      session.set(INVITE_KEY, null);
      if (ctx.view !== 'menu') show('menu');
      const ok = await joinByCode(invite);
      if (ok) return;
    }
    if (ctx.view !== 'room' && ctx.view !== 'menu') show('menu');
    else rewatchRooms();
  });

  socket.on('disconnect', (reason) => {
    if (!auth.token) return;
    setConn('Bağlantı koptu, yeniden bağlanılıyor…');
    // Sunucu bağlantıyı kendisi kestiyse (ör. oturum kapatıldı) socket.io kendiliğinden denemez.
    if (reason === 'io server disconnect') setTimeout(() => { if (auth.token) socket.connect(); }, 800);
  });

  socket.on('connect_error', (err) => {
    const msg = err && err.message;
    if (msg === 'auth') {
      logoutLocal('Oturumun sona erdi, tekrar giriş yap.');
      return;
    }
    if (msg === 'unavailable') setConn('Sunucu hesaplara şu an ulaşamıyor, tekrar deneniyor…');
    else setConn(everConnected ? 'Bağlantı koptu, yeniden bağlanılıyor…' : 'Sunucuya bağlanılıyor…');
    // Ara katman hatalarında socket.io kendisi tekrar denemez.
    if (msg === 'unavailable') setTimeout(() => { if (auth.token && !socket.connected) socket.connect(); }, 3000);
  });

  socket.on('state', (s) => {
    if (!s || !s.me) return;
    const first = ctx.view !== 'room';
    if (first) enterRoom(s);
    ctx.state = s;
    ctx.receivedAt = Date.now();
    ctx.clockOffset = s.serverNow - Date.now();
    ctx.roomId = s.room.id;
    store.set(ROOM_KEY, s.room.id);
    if (first) resetChronicle(s);
    renderAll(s);
    chronicleOnState(s);
    emitLocal('state', s);
  });

  socket.on('announce', (a) => {
    if (!a) return;
    if (a.kind === 'win') ctx.lastWin = a;
    if (a.kind === 'start') ctx.lastWin = null;
    pushAnnounce(a);
  });
  socket.on('chat', (m) => { if (m) appendChat(m); });
  socket.on('kicked', (message) => {
    exitRoom();
    toast(message || 'Odadan çıkarıldın.', 'error', 5000);
  });
  socket.on('rooms:update', onRoomsUpdate);
}

function enterRoom() {
  closeAllSheets();
  clearChat();
  clearAnnounces();
  resetRoomUI();
  ctx.statsBefore = null;
  ctx.statsAfter = null;
  show('room');
}

function exitRoom() {
  store.set(ROOM_KEY, null);
  ctx.state = null;
  ctx.roomId = null;
  clearAnnounces();
  closeChronicle();
  closeAllSheets();
  resetRoomUI();
  W.reset();
  if (auth.token) {
    show('menu');
    Api.me().then((r) => { ctx.user = r.user; renderProfile(); }).catch(() => {});
  }
}

function logoutLocal(message) {
  auth.token = null;
  store.set(ROOM_KEY, null);
  if (ctx.socket) { ctx.socket.removeAllListeners(); ctx.socket.disconnect(); ctx.socket = null; }
  ctx.user = null;
  ctx.state = null;
  clearAnnounces();
  closeAllSheets();
  resetRoomUI();
  W.reset();
  setConn('');
  show('auth');
  if (message) toast(message, 'error', 5000);
}

on('left', exitRoom);
on('logout', async () => {
  try { await Api.logout(); } catch { /* zaten geçersiz olabilir */ }
  logoutLocal();
  toast('Çıkış yaptın. Görüşmek üzere!', 'ok');
});

async function afterLogin() {
  show('menu');
  renderProfile();
  connectSocket();
}

// ---------- açılış ----------
async function boot() {
  fillLogos();
  $('#splash-logo').innerHTML = $('[data-logo]').innerHTML;
  setupViewport();
  try { window.VKAudio && window.VKAudio.init(); } catch { /* ses yok */ }
  audioScene('menu');

  const inv = new URLSearchParams(location.search).get('oda');
  if (inv) {
    session.set(INVITE_KEY, inv.trim().toUpperCase().slice(0, 10));
    history.replaceState(null, '', location.pathname);
  }

  initAuth(afterLogin);
  initMenu();
  initChat();
  initAnnounce();
  initChronicle();
  initRoom();
  $('#down-retry').addEventListener('click', () => location.reload());

  const bar = $('#splash-bar');
  const worldP = initWorld($('#world'), {
    onPick: (id) => pick(id),
    onMove: (x, y) => { if (ctx.state) send('player:move', { x, y }, { quiet: true }); },
    onSelf: () => openLookEditor(),
    onProgress: (d, t) => { if (t) bar.style.width = `${Math.max(6, Math.round((d / t) * 100))}%`; },
    onReady: () => { bar.style.width = '100%'; },
  }).catch((e) => console.warn(e));

  // Socket.IO istemcisi oyun sunucusundan gelir; gelmezse sunucu kapalıdır.
  let ioOK = true;
  try { await loadScript(`${SERVER}/socket.io/socket.io.js`, 20000); } catch { ioOK = false; }

  await worldP;
  await Promise.race([worldReady, new Promise((r) => setTimeout(r, 7000))]);
  if (!ioOK || !window.io) { show('down'); return; }

  if (!auth.token) { show('auth'); return; }
  try {
    const res = await Api.me();
    ctx.user = res.user;
    afterLogin();
  } catch (e) {
    if (e.status === 401) { auth.token = null; show('auth'); toast('Oturumun sona erdi, tekrar giriş yap.', 'error'); }
    else { $('#down-text').textContent = e.message; show('down'); }
  }
}

// Geliştirme kancası: localStorage['vk.debug'] açıksa test betikleri duyuru tetikleyebilir.
if (store.get('vk.debug')) window.__vkDebug = { ctx, pushAnnounce };

boot();
