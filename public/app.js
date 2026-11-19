// Vampir Köylü v2 – arayüz giriş noktası (ES modülü, derleme yok).
// Açılış → oturum kontrolü → giriş ya da ana menü → oda (lobi + oyun). Sunucu protokolü: docs/PROTOCOL.md.
import { ctx, emitLocal, on, send } from './ui/ctx.js';
import { Api, auth, SERVER } from './ui/api.js';
import { $, loadScript, session, store, audioScene, sfx } from './ui/util.js';
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
import { initSoundButtons, closeSoundPopover } from './ui/sound.js';
import { initPwa } from './ui/pwa.js';
import { syncFps } from './ui/fps.js';
import { runIntro, introAutoplay, introActive, cancelIntro, introGate, introLocalSeen } from './ui/intro.js';

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
  closeSoundPopover();
  syncFps();
  scheduleInsets();
}

// Kısa kopmalar sessiz geçer: bağlantı ~4 sn içinde dönmezse küçük bir şerit görünür (oyun ekranı kalır).
let connTimer = 0;
let connText = '';
function setConn(text, { now = false } = {}) {
  const el = $('#conn');
  if (!text) { clearTimeout(connTimer); connTimer = 0; el.hidden = true; return; }
  connText = text;
  const apply = () => { connTimer = 0; el.hidden = false; el.innerHTML = `<span class="spin"></span><span>${connText}</span>`; };
  if (now || !el.hidden) { clearTimeout(connTimer); apply(); }
  else if (!connTimer) connTimer = setTimeout(apply, 4000);
}

// Ekran yeniden açılınca ya da ağ dönünce beklemeden yeniden bağlan (socket.io'nun bekleme süresini atla).
function wakeSocket() {
  const s = ctx.socket;
  if (!s || !auth.token || s.connected) return;
  if (document.visibilityState === 'hidden') return;
  s.connect();
}
document.addEventListener('visibilitychange', wakeSocket);
window.addEventListener('online', wakeSocket);
window.addEventListener('pageshow', wakeSocket);
window.addEventListener('focus', wakeSocket);

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
      // Bağlantı yine koptuysa ya da cevap gelmediyse odadan çıkarma: bir sonraki bağlantıda yeniden denenir.
      if (!socket.connected || res.error === 'offline' || res.error === 'Sunucu cevap vermedi.') return;
      store.set(ROOM_KEY, null);
      if (ctx.view === 'room') { exitRoom(); toast('Oda artık yok ya da oyundaki yerin kalmadı.', 'error'); }
      // Kayıtlı oda eskiymiş (oyun bitmiş/oda kapanmış): girişte "odaya dönüyor" diye ertelenen hikâye şimdi açılır.
      else if (!session.get(INVITE_KEY)) setTimeout(introAfterStaleRoom, 0);
    }
    const invite = session.get(INVITE_KEY);
    if (invite) {
      session.set(INVITE_KEY, null);
      if (ctx.view !== 'menu') show('menu');
      const ok = await joinByCode(invite);
      if (ok) return;
    }
    // açılış hikâyesi izlenirken menüye atlama: hikâye bitince kendi döner
    if (ctx.view !== 'room' && ctx.view !== 'menu' && ctx.view !== 'intro') show('menu');
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
    if (msg === 'unavailable') setConn('Sunucu hesaplara şu an ulaşamıyor, tekrar deneniyor…', { now: !everConnected });
    else setConn(everConnected ? 'Bağlantı koptu, yeniden bağlanılıyor…' : 'Sunucuya bağlanılıyor…');
    // Ara katman hatalarında socket.io kendisi tekrar denemez.
    if (msg === 'unavailable') setTimeout(() => { if (auth.token && !socket.connected) socket.connect(); }, 3000);
  });

  socket.on('state', (s) => {
    if (!s || !s.me) return;
    const first = ctx.view !== 'room';
    if (first && introActive()) cancelIntro();   // odaya alındıysa hikâye beklemeden kapanır
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
  // Sahip hesap odaya girdi: giriş fanfarı + küçük bildirim (büyük kart yok).
  // Düğme etiketi: çalarken "Durdur".
  const musicLabel = (txt) => { const l = document.querySelector('#lobby-card [data-l="music"] span'); if (l) l.textContent = txt; };
  socket.on('entrance', (e) => {
    sfx('entrance');
    ctx.musicUntil = Date.now() + 31000; musicLabel('Durdur');
    setTimeout(() => { if (Date.now() >= (ctx.musicUntil || 0)) musicLabel('Müzik'); }, 31500);
    toast(`🎺 ${String((e && e.call) || 'Ahmet hocam').slice(0, 40)} geldi!`, 'info', 4000);
  });
  socket.on('entrance:stop', () => { ctx.musicUntil = 0; musicLabel('Müzik'); try { window.VKAudio && window.VKAudio.stopSfx && window.VKAudio.stopSfx('entrance', 1.5); } catch (e) { /* ses yoksa sessiz */ } });
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

// Hikâye "izlendi" sayıldı (başlat / geç / tekrar izle): giriş yapmışsa hesaba da işlenir (hata sessiz; cihaz bayrağı yine yazılır).
function syncIntroSeen() {
  if (!auth.token || !ctx.user) return;
  ctx.user.introSeen = true;
  Api.introSeen().catch(() => {});
}

// Giriş sonrası (kayıt/giriş formu ya da açılışta oturumdan): hesapta hikâye izlenmemişse kapıyı BİR KEZ göster.
// Davetle ya da oda oturumuyla geldiyse gösterilmez (sonraki normal menü açılışında gösterilir). Bu cihazda zaten
// izlenmişse (misafirken) kapı çıkmaz, yalnızca hesaba işlenir. Döner: perdeyi kaldıran reveal() ya da null.
async function afterLogin() {
  let reveal = null;
  const u = ctx.user;
  if (u && u.introSeen === false) {
    if (introLocalSeen()) syncIntroSeen();
    else if (introGate({ introSeen: u.introSeen, invite: !!session.get(INVITE_KEY), room: !!store.get(ROOM_KEY) }) && !introActive()) {
      try { reveal = await runIntro({ gate: true, enter: () => show('intro'), onSeen: syncIntroSeen }); } catch (e) { console.warn('[intro]', e); }
    }
  }
  if (!auth.token) return reveal;   // kapı beklenirken oturum kapandıysa devam etme
  if (ctx.view !== 'room' && ctx.view !== 'menu') show('menu');
  renderProfile();
  connectSocket();
  return reveal;
}

// Girişte kayıtlı bir oda vardı (hikâye ertelendi) ama odaya dönülemedi: hesap hikâyeyi hiç izlemediyse kapı şimdi
// bir kez açılır (ilk açılıştaki gibi zorunlu); bitince menüye dönülür.
async function introAfterStaleRoom() {
  const u = ctx.user;
  if (!u || u.introSeen !== false || introActive() || ctx.view !== 'menu') return;
  if (introLocalSeen()) { syncIntroSeen(); return; }
  if (!introGate({ introSeen: u.introSeen, invite: !!session.get(INVITE_KEY), room: !!store.get(ROOM_KEY) })) return;
  closeAllSheets();
  closeSoundPopover();
  let reveal = null;
  try { reveal = await runIntro({ gate: true, enter: () => show('intro'), onSeen: syncIntroSeen }); } catch (e) { console.warn('[intro]', e); }
  if (ctx.view === 'intro') show('menu');
  if (reveal) reveal();
}

// ---------- açılış ----------
async function boot() {
  fillLogos();
  $('#splash-logo').innerHTML = $('[data-logo]').innerHTML;
  setupViewport();
  // Menü müziği (~1,4 MB) ve efektler 3B dünya (world.js + modeller) indikten sonra insin: telefonda bant genişliği
  // paylaşılmaz, menü daha erken açılır. Dokunuşla başlayan çalma beklemez; en geç 8 sn sonra kapı açılır.
  try { window.VKAudio && window.VKAudio.deferPrefetch && window.VKAudio.deferPrefetch(Promise.race([worldReady, new Promise((r) => setTimeout(r, 8000))])); } catch { /* ses yok */ }
  try { window.VKAudio && window.VKAudio.init(); } catch { /* ses yok */ }
  audioScene('menu');

  const inv = new URLSearchParams(location.search).get('oda');
  if (inv) {
    session.set(INVITE_KEY, inv.trim().toUpperCase().slice(0, 10));
    history.replaceState(null, '', location.pathname);
  }

  initSoundButtons();
  initPwa();
  initAuth(async () => { const r = await afterLogin(); if (r) r(); });
  initMenu();
  initChat();
  initAnnounce();
  initChronicle();
  initRoom();
  $('#down-retry').addEventListener('click', () => location.reload());

  const bar = $('#splash-bar');
  const worldP = initWorld($('#world'), {
    onPick: (id) => pick(id),
    // Serbest yürüme sadece lobide ve oyun bitince (sunucu başka aşamada reddeder; hata gösterilmez).
    // Canlılar lobide ve oyun sonunda yürür; ölüler (hayaletler) oyunun her aşamasında (§12.1).
    onMove: (x, y) => {
      const s = ctx.state;
      const ph = s && s.room.phase;
      const ghost = s && s.me && !s.me.alive && ['night', 'day', 'trial', 'hunter'].includes(ph);
      if (ph === 'lobby' || ph === 'ended' || ghost) send('player:move', { x, y }, { quiet: true });
    },
    onSelf: () => openLookEditor(),
    onProgress: (d, t) => { if (t) bar.style.width = `${Math.max(6, Math.round((d / t) * 100))}%`; },
    onReady: () => { bar.style.width = '100%'; },
  }).catch((e) => console.warn(e));

  // Socket.IO istemcisi oyun sunucusundan gelir; gelmezse sunucu kapalıdır.
  let ioOK = true;
  // küçültülmüş istemci (aynı API; ~150 KB yerine ~47 KB ham, sıkıştırılmış ~38 KB yerine ~15 KB)
  try { await loadScript(`${SERVER}/socket.io/socket.io.min.js`, 20000); } catch { ioOK = false; }

  await worldP;
  await Promise.race([worldReady, new Promise((r) => setTimeout(r, 7000))]);

  // Açılış hikâyesi: yalnızca ilk ziyarette, davetle/oturumla/odaya dönerek gelmeyen kullanıcıya (kapı ekranıyla).
  // Davet linkiyle gelen atlanır ve "izlendi" sayılmaz: sonraki normal açılışta gösterilir.
  let reveal = null;
  if (introAutoplay({ invite: !!inv || !!session.get(INVITE_KEY), token: !!auth.token, room: !!store.get(ROOM_KEY) })) {
    try { reveal = await runIntro({ gate: true, enter: () => show('intro') }); } catch (e) { console.warn('[intro]', e); }
  }
  const lift = () => { if (reveal) { const r = reveal; reveal = null; r(); } };

  if (!ioOK || !window.io) { show('down'); lift(); return; }

  if (!auth.token) { show('auth'); lift(); return; }
  try {
    const res = await Api.me();
    ctx.user = res.user;
    const r2 = await afterLogin();   // hesapta hikâye izlenmemişse kapı burada çıkar (davet/oda yoksa)
    if (r2) reveal = r2;
  } catch (e) {
    if (e.status === 401) { auth.token = null; show('auth'); toast('Oturumun sona erdi, tekrar giriş yap.', 'error'); }
    else { $('#down-text').textContent = e.message; show('down'); }
  }
  lift();
}

// Ayarlar / giriş ekranındaki "Açılış hikâyesini izle": bulunduğu ekrana geri döner (odadayken oynamaz)
async function replayIntro() {
  if (introActive() || !['menu', 'auth', 'down'].includes(ctx.view)) return;
  const prev = ctx.view;
  closeAllSheets();
  closeSoundPopover();
  const reveal = await runIntro({ gate: false, enter: () => show('intro'), onSeen: syncIntroSeen });
  if (ctx.view === 'intro') show(prev);   // bu arada odaya alındıysa (oturum devamı) dokunma
  reveal();
}
on('intro:play', replayIntro);

// Geliştirme kancası: localStorage['vk.debug'] açıksa test betikleri duyuru tetikleyebilir.
if (store.get('vk.debug')) window.__vkDebug = { ctx, pushAnnounce };

boot();
