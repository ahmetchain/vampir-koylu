// Oda arayüzü: üst çubuk (aşama, sayaç, rol), bağlam istemi ve eylemler, oyuncu şeridi,
// lobi kartı, rol kartı (reveal), oyun sonu ekranı.
import { ctx, send, playerById, iAmHost, emitLocal, on, serverNow } from './ctx.js';
import { Api } from './api.js';
import { $, esc, sfx, fmtClock, vibrate, audioScene, store } from './util.js';
import { icon, emblem, logoMark } from './icons.js';
import { ROLES, COLORS, inkOn, isEvil, WIN_TITLE, levelOf, countRoles, MIN_PLAYERS, EVENTS } from './data.js';
import { W } from './world-host.js';
import { openSheet, confirmBox, toast } from './kit.js';
import { openLookEditor } from './look.js';
import { openRoomSettings, distChips } from './roomform.js';
import { renderChatState, isDocked } from './chat.js';
import { isAnnouncing } from './announce.js';
import { openChronicle } from './chronicle.js';

const SEL_COLOR = { vampir: '#ff4b5f', iftiraci: '#e070c0', doktor: '#4fe0a8', kahin: '#a898ff', gozcu: '#ffc062' };
const SEL_LABEL = { vampir: 'Hedef', iftiraci: 'İftira', doktor: 'Koruma', kahin: 'Bakılacak', gozcu: 'Gözetle' };

let phaseKey = '';
let lastTick = -1;
let flipped = false;
let endHidden = false;
let lobbyMin = store.get('vk.lobbyMin', false);
let inviteOrigin = location.origin + location.pathname.replace(/index\.html$/, '');
let roleSheet = null;
let lastPlayerCount = 0;

const initial = (name) => (String(name || '?').replace(/^Bot\s+/, '').trim()[0] || '?').toLocaleUpperCase('tr');
const hadBots = (s) => !!(s && s.players.some((p) => p.bot));
const botChip = (p) => (p && p.bot ? `<span class="chip chip-bot">${icon('bot')}Bot</span>` : '');
const nameJob = (p) => (p && p.job && p.job.label ? `${esc(p.name)} · <span class="job">${esc(p.job.label)}</span>` : esc(p ? p.name : ''));

export function initRoom() {
  $('#btn-leave').innerHTML = icon('door');
  $('#btn-leave').addEventListener('click', leaveRoom);
  $('#role-chip').addEventListener('click', () => { sfx('click'); openRoleSheet(); });
  $('#event-badge').addEventListener('click', () => { sfx('click'); openEventSheet(); });
  $('#rail').addEventListener('click', (e) => {
    const c = e.target.closest('[data-pid]');
    if (c) railTap(c.dataset.pid);
  });
  $('#prompt').addEventListener('click', onPromptClick);
  $('#lobby-card').addEventListener('click', onLobbyClick);
  // "Bot ekle": arka arkaya hızlı dokunmalar serbest, her biri bir bot ister.
  $('#lobby-card').addEventListener('pointerup', (e) => {
    if (e.button > 0) return;
    const b = e.target.closest('[data-l="bot"]');
    if (!b || b.disabled) return;
    sfx('click');
    send('room:addBot', {});
  });
  $('#overlay').addEventListener('click', onOverlayClick);
  setInterval(tick, 250);
  window.addEventListener('resize', scheduleInsets);
  on('announce:idle', () => { if (ctx.state) renderOverlay(ctx.state); });
  // localhost başkasının cihazında çalışmaz; LAN adresini kullan.
  const SERVER = String((window.VK_CONFIG && window.VK_CONFIG.serverUrl) || '');
  if (!SERVER && ['localhost', '127.0.0.1', '::1', '[::1]'].includes(location.hostname)) {
    fetch('/lan.json').then((r) => r.json()).then(({ addresses, port }) => {
      if (addresses && addresses.length) inviteOrigin = `http://${addresses[0]}:${port}/`;
    }).catch(() => {});
  }
}

export function resetRoomUI() {
  phaseKey = '';
  flipped = false;
  endHidden = false;
  lastPlayerCount = 0;
  $('#overlay').innerHTML = '';
  if (roleSheet) roleSheet.close();
}

export function inviteLink(id) { return `${inviteOrigin}?oda=${id}`; }

// ---------- eylemler ----------
export function pick(id) {
  const s = ctx.state;
  if (!s) return;
  const act = window.VKRules.action(s);
  const p = playerById(id);
  if (!act || !p) return;
  if (!window.VKRules.selectable(s, p, ctx.witchMode)) {
    if (s.room.phase === 'night' && s.me.role === 'cadi' && window.VKRules.witchBlocked(s, ctx.witchMode)) toast('Bu iksiri zaten kullandın.', 'error');
    return;
  }
  if (act === 'night') { sfx('click'); confirmNight(s, p); }
  else if (act === 'vote') { sfx('vote'); send('day:vote', { targetId: id }); }
  else if (act === 'shoot') { sfx('shot'); send('hunter:shoot', { targetId: id }); }
}

// Gece seçimi kesindir: önce onay sorulur.
let confirmSheet = null;
const NIGHT_VERB = {
  vampir: (n) => `<b>${n}</b> takımın hedefi olsun mu?`,
  iftiraci: (n) => `<b>${n}</b> kişisine iftira atılsın mı?`,
  doktor: (n) => `Bu gece <b>${n}</b> korunsun mu?`,
  kahin: (n) => `Kristal küre <b>${n}</b> için çalışsın mı?`,
  gozcu: (n) => `Bu gece <b>${n}</b> evini gözetleyecek misin?`,
  heal: (n) => `Hayat iksiri <b>${n}</b> için kullanılsın mı?`,
  poison: (n) => `<b>${n}</b> zehirlensin mi?`,
};
function confirmNight(s, p) {
  if (confirmSheet) confirmSheet.close();
  const role = s.me.role;
  const key = role === 'cadi' ? (ctx.witchMode === 'poison' ? 'poison' : 'heal') : role;
  const verb = (NIGHT_VERB[key] || ((n) => `<b>${n}</b> seçilsin mi?`))(esc(p.id === s.me.id ? 'Kendin' : p.name));
  const c = COLORS[p.look.color];
  const witchMode = ctx.witchMode;
  const phaseAt = phaseKey;
  const sheet = openSheet({
    title: 'Emin misin?', cls: 'sheet-small confirm-pick',
    body: `<div class="pinfo"><span class="pinfo-av" style="background:${c};color:${inkOn(c)}">${esc(initial(p.name))}</span>
      <div><h3>${verb}</h3><p>Bu seçim geri alınamaz.</p></div></div>`,
    footer: `<button type="button" class="btn btn-ghost" data-close>Vazgeç</button>
      <button type="button" class="btn ${key === 'poison' || key === 'vampir' ? 'btn-danger' : 'btn-primary'}" data-ok>${emblem(role, 's')}Evet, kesin</button>`,
    onClose: () => { if (confirmSheet === sheet) confirmSheet = null; },
  });
  confirmSheet = sheet;
  sheet.foot.querySelector('[data-ok]').addEventListener('click', async () => {
    sheet.close();
    if (phaseAt !== phaseKey) return; // gece bitti
    sfx(key === 'poison' ? 'potion' : 'click');
    await send('night:select', { targetId: p.id, action: witchMode });
  });
}

// Gardiyan: gelecek gece kilitlenecek kapıyı seçme penceresi (gün bitene kadar değiştirilebilir).
let lockSheet = null;
function openLockSheet() {
  const s = ctx.state;
  if (!s || !canLock(s) || lockSheet) return;
  const render = (st) => {
    const lock = (st.day && st.day.lock) || {};
    const opts = st.players.filter((p) => p.alive && !p.left).map((p) => {
      const c = COLORS[p.look.color];
      let why = '';
      if (p.id === st.me.id) why = 'Kendi kapını kilitleyemezsin';
      else if (lock.lastTargetId && p.id === lock.lastTargetId) why = 'Dün gece bu kapı kilitliydi; üst üste olmaz';
      return `<button type="button" class="lock-opt${lock.targetId === p.id ? ' on' : ''}" data-lock="${p.id}" ${why ? 'disabled' : ''}>
        <span class="pchip-av" style="width:34px;height:34px;font-size:14px;background:${c};color:${inkOn(c)}">${esc(initial(p.name))}</span>
        <span><b>${esc(p.name)}</b>${p.job && p.job.label ? ` <small style="display:inline">· ${esc(p.job.label)}</small>` : ''}${why ? `<small>${why}</small>` : ''}</span>
        ${lock.targetId === p.id ? icon('lock') : ''}</button>`;
    }).join('');
    return `<p class="muted small" style="margin:0 0 10px">Seçimin gizlidir ve gün bitene kadar değiştirilebilir. Kilitli evin sahibi bu gece dışarı çıkamaz, gelen herkes kapıdan döner.</p>
      <div class="lock-opts">${opts}
      <button type="button" class="lock-opt${!lock.targetId ? ' on' : ''}" data-lock=""><span class="pchip-av" style="width:34px;height:34px;background:rgba(255,255,255,.08)">${icon('close')}</span><span><b>Bu gece kapı kilitleme</b></span></button></div>`;
  };
  lockSheet = openSheet({
    title: 'Bu gece kimi kilitleyeceksin?', titleHtml: `${emblem('gardiyan', 's')}Bu gece kimi kilitleyeceksin?`,
    body: render(s), footer: '<button type="button" class="btn btn-primary" data-close>Tamam</button>',
    onClose: () => { unsub(); lockSheet = null; },
  });
  lockSheet.body.addEventListener('click', async (e) => {
    const o = e.target.closest('[data-lock]');
    if (!o || o.disabled) return;
    sfx('click');
    await send('day:lock', { targetId: o.dataset.lock || null });
  });
  const unsub = on('state', (st) => {
    if (!lockSheet) return;
    if (!canLock(st)) { lockSheet.close(); return; }
    lockSheet.body.innerHTML = render(st);
  });
}

function railTap(id) {
  const s = ctx.state;
  if (!s) return;
  const p = playerById(id);
  if (!p) return;
  if (window.VKRules.action(s) && window.VKRules.selectable(s, p, ctx.witchMode)) { pick(id); return; }
  if (p.id === s.me.id && (s.room.phase === 'lobby' || s.room.phase === 'ended')) { openLookEditor(); return; }
  openPlayerInfo(p);
}

function openPlayerInfo(p) {
  const s = ctx.state;
  const c = COLORS[p.look.color];
  const host = iAmHost() && s.room.phase === 'lobby' && p.id !== s.me.id;
  const state = p.left ? 'Oyundan ayrıldı' : !p.alive ? 'Öldü' : !p.connected ? 'Bağlantısı koptu' : s.room.phase === 'lobby' ? 'Lobide' : 'Hayatta';
  const sheet = openSheet({
    title: p.name, cls: 'sheet-small',
    body: `<div class="pinfo"><span class="pinfo-av" style="background:${c};color:${inkOn(c)}">${esc(initial(p.name))}</span>
      <div><h3>${esc(p.name)} ${botChip(p)}${p.isHost ? ` <span class="chip chip-fire">${icon('crown')}Oda sahibi</span>` : ''}</h3>
      ${p.job && p.job.label ? `<p>Köydeki işi: <b>${esc(p.job.label)}</b></p>` : ''}
      <p>${state}${p.role ? ` · Rolü: <b>${ROLES[p.role].name}</b>` : ''}</p></div></div>`,
    footer: host
      ? `<button type="button" class="btn btn-ghost" data-close>Kapat</button><button type="button" class="btn btn-danger" data-kick>${icon('door')}${p.bot ? 'Botu çıkar' : 'Odadan çıkar'}</button>`
      : '<button type="button" class="btn btn-primary" data-close>Kapat</button>',
  });
  const k = sheet.foot.querySelector('[data-kick]');
  if (k) k.addEventListener('click', async () => {
    sheet.close();
    if (await confirmBox('Oyuncuyu çıkar', `${p.name} odadan çıkarılsın mı?`, 'Çıkar')) send('room:kick', { playerId: p.id });
  });
}

async function leaveRoom() {
  const s = ctx.state;
  if (!s) { emitLocal('left'); return; }
  const inGame = ['reveal', 'night', 'day', 'trial', 'hunter'].includes(s.room.phase) && s.me.alive;
  const ok = await confirmBox('Odadan ayrıl',
    inGame ? 'Oyun sürüyor. Ayrılırsan ölmüş sayılırsın ve bu oyuna geri dönemezsin.' : 'Odadan ayrılmak istediğine emin misin?', 'Ayrıl');
  if (!ok) return;
  await send('room:leave', undefined, { quiet: true });
  sfx('leave');
  emitLocal('left');
}

function onPromptClick(e) {
  const b = e.target.closest('[data-a]');
  if (!b || b.disabled) return;
  const s = ctx.state;
  const a = b.dataset.a;
  if (a === 'heal' || a === 'poison') { ctx.witchMode = a; sfx('click'); renderAll(s); return; }
  if (a === 'sleep') { sfx('vote'); send('day:vote', { targetId: 'sleep' }); return; }
  if (a === 'unvote') { sfx('click'); send('day:vote', { targetId: null }); return; }
  if (a === 'role') openRoleSheet();
  if (a === 'lock') { sfx('click'); openLockSheet(); return; }
  if (a === 'tvote') { sfx('vote'); send('day:vote', { targetId: b.dataset.id }); return; }
  if (a === 'expand') { promptOpenKey = phaseKey; sfx('click'); renderPrompt(s); }
  if (a === 'collapse') { promptOpenKey = ''; sfx('click'); renderPrompt(s); }
}

async function onLobbyClick(e) {
  const b = e.target.closest('[data-l]');
  if (!b) return;
  if (b.dataset.l === 'bot' && e.detail !== 0) return; // pointerup işledi
  sfx('click');
  const s = ctx.state;
  const link = inviteLink(s.room.id);
  switch (b.dataset.l) {
    case 'share':
      if (navigator.share) {
        try { await navigator.share({ title: 'Vampir Köylü', text: `${s.room.name} odasına gel, vampirleri birlikte bulalım!`, url: link }); return; } catch (err) { if (err && err.name === 'AbortError') return; }
      }
      copy(link);
      break;
    case 'copy': copy(link); break;
    case 'code': copy(s.room.id, 'Oda kodu kopyalandı!'); break;
    case 'look': openLookEditor(); break;
    case 'settings': openRoomSettings(); break;
    case 'start': send('game:start'); break;
    // Fare/dokunma pointerup ile işlenir (kart arada yenilense de dokunuş kaybolmaz); burada sadece klavye.
    case 'bot': if (e.detail === 0) send('room:addBot', {}); break;
    case 'min': lobbyMin = !lobbyMin; store.set('vk.lobbyMin', lobbyMin); renderLobby(s); scheduleInsets(); break;
    default: break;
  }
}

async function copy(text, msg = 'Davet linki kopyalandı!') {
  try { await navigator.clipboard.writeText(text); toast(msg, 'ok'); } catch {
    const t = document.createElement('textarea');
    t.value = text; t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); toast(msg, 'ok'); } catch { toast(text); }
    t.remove();
  }
}

function onOverlayClick(e) {
  const fl = e.target.closest('.flip');
  if (fl) {
    if (fl.classList.contains('turning')) return;
    flipped = !flipped;
    fl.classList.add('turning');
    sfx(flipped ? 'whoosh' : 'click');
    setTimeout(() => { fl.classList.toggle('on', !!flipped); fl.classList.remove('turning'); }, 220);
    return;
  }
  const b = e.target.closest('[data-e]');
  if (!b) return;
  sfx('click');
  const a = b.dataset.e;
  if (a === 'again') send('game:lobby');
  if (a === 'hide') { endHidden = true; renderOverlay(ctx.state); scheduleInsets(); }
  if (a === 'show') { endHidden = false; renderOverlay(ctx.state); }
  if (a === 'leave') leaveRoom();
  if (a === 'chron') openChronicle();
  if (a === 'closecard') { flipped = 'closed'; renderOverlay(ctx.state); }
}

// ---------- çizim ----------
export function renderAll(s) {
  if (!s || !s.me) return;
  const { room, me } = s;
  const key = `${room.phase}-${room.round}`;
  if (key !== phaseKey) {
    const prevPhase = phaseKey.split('-')[0];
    phaseKey = key;
    onPhaseChange(s, prevPhase);
  }
  $('#room').dataset.phase = room.phase;
  document.title = `${phaseLabel(s)} · Vampir Köylü`;
  // lobi giriş/çıkış sesleri
  const count = s.players.filter((p) => !p.left).length;
  if (room.phase === 'lobby' && lastPlayerCount && count !== lastPlayerCount) sfx(count > lastPlayerCount ? 'join' : 'leave', { volume: 0.6 });
  lastPlayerCount = count;

  // Cadı: seçilmiş (kesin) iksirden diğerine geç
  const w = s.night && s.night.witch;
  if (w && window.VKRules.witchBlocked(s, ctx.witchMode)) {
    const other = ctx.witchMode === 'poison' ? 'heal' : 'poison';
    if (!window.VKRules.witchBlocked(s, other)) ctx.witchMode = other;
  }
  renderTop(s);
  renderWatch(s);
  renderPrompt(s);
  renderLobby(s);
  renderRail(s);
  renderChatState(s);
  renderOverlay(s);
  W.update(s, { witchMode: ctx.witchMode });
  scheduleInsets();
  tick();
  void me;
}

function onPhaseChange(s, prev) {
  const ph = s.room.phase;
  if (confirmSheet) confirmSheet.close();
  if (ph === 'night') {
    const w = s.night && s.night.witch;
    ctx.witchMode = w && w.healUsed && !w.poisonUsed ? 'poison' : 'heal';
  }
  if (ph === 'reveal') flipped = false;
  if (ph !== 'ended') endHidden = false;
  if (ph === 'reveal' && !ctx.statsBefore && ctx.user) ctx.statsBefore = JSON.parse(JSON.stringify(ctx.user.stats));
  if (ph === 'lobby') ctx.statsBefore = null;
  if (['night', 'day', 'trial', 'hunter'].includes(ph) && prev) vibrate(60);
  audioScene({ lobby: 'lobby', reveal: 'night', night: 'night', day: 'day', trial: 'day', hunter: 'day', ended: 'ended' }[ph] || 'lobby');
  if (ph === 'ended') { if (hadBots(s)) ctx.statsAfter = null; else fetchStatsDelta(); }
}

function phaseLabel(s) {
  const r = s.room;
  return {
    lobby: 'Lobi', reveal: 'Roller dağıtılıyor', night: `${r.round}. Gece`, day: `${r.round}. Gün`, trial: 'Mahkeme', hunter: 'Son atış', ended: 'Oyun bitti',
  }[r.phase] || '';
}

// Etkin köy olayı (room.event: { id, name, desc, phase } ya da sadece id).
export function activeEvent(s) {
  const e = s && s.room && s.room.event;
  if (!e) return null;
  const id = typeof e === 'string' ? e : e.id;
  const base = EVENTS[id] || {};
  return { id, name: (e && e.name) || base.name || id, desc: (e && e.desc) || base.desc || '', phase: (e && e.phase) || base.phase || '', icon: base.icon || 'sparkle' };
}

function renderEventBadge(s) {
  const el = $('#event-badge');
  const ev = ['night', 'day', 'hunter'].includes(s.room.phase) ? activeEvent(s) : null;
  el.hidden = !ev;
  if (!ev) { el.dataset.sig = ''; return; }
  const sig = `${ev.id}|${ev.name}`;
  if (el.dataset.sig !== sig) {
    el.dataset.sig = sig;
    el.dataset.phase = ev.phase;
    el.innerHTML = `${icon(ev.icon)}${esc(ev.name)}<small>${ev.phase === 'night' ? 'bu gece' : 'bugün'}</small>`;
    el.setAttribute('aria-label', `Köy olayı: ${ev.name}. Ayrıntı için dokun.`);
    scheduleInsets();
  }
}

function openEventSheet() {
  const ev = activeEvent(ctx.state);
  if (!ev) return;
  openSheet({
    title: ev.name, cls: 'sheet-small',
    body: `<div class="row" style="align-items:flex-start"><span class="ev-sheet-ic">${icon(ev.icon)}</span><div><p class="eyebrow" style="margin:0 0 4px">Köy olayı · ${ev.phase === 'night' ? 'bu gece' : 'bugün'}</p><p style="margin:0">${esc(ev.desc)}</p></div></div>`,
    footer: '<button type="button" class="btn btn-primary" data-close>Tamam</button>',
  });
}

function renderTop(s) {
  renderEventBadge(s);
  const ph = s.room.phase;
  const ic = { lobby: 'house', reveal: 'sparkle', night: 'moon', day: 'sun', trial: 'gavel', hunter: 'target', ended: 'trophy' }[ph];
  $('#phase-ic').innerHTML = icon(ic);
  let label = phaseLabel(s);
  if (ph === 'lobby') label = `${s.room.name}`;
  $('#phase-label').textContent = label;
  const chip = $('#role-chip');
  chip.hidden = !s.me.role;
  if (s.me.role) {
    const r = ROLES[s.me.role];
    const sig = `${s.me.role}|${s.me.alive}`;
    if (chip.dataset.sig !== sig) {
      chip.dataset.sig = sig;
      chip.innerHTML = `${emblem(s.me.role, 'm')}<span class="rc-label">${s.me.alive ? r.name : `${r.name} · Hayalet`}</span>`;
      chip.setAttribute('aria-label', `Rolüm: ${r.name}`);
    }
  }
}

function tick() {
  const s = ctx.state;
  const el = $('#timer');
  if (!s || !s.room.deadline) { el.hidden = true; return; }
  // Gece: herkes evine dönene kadar (room.timerFrom) sayaç tam gece süresinde donuk durur.
  const now = serverNow();
  const from = Number(s.room.timerFrom) || 0;
  const waiting = from > now && from < s.room.deadline;
  const sec = Math.max(0, Math.ceil((s.room.deadline - (waiting ? from : now)) / 1000));
  el.hidden = false;
  el.textContent = fmtClock(sec);
  el.classList.toggle('wait', waiting);
  el.title = waiting ? 'Köy evlerine dönüyor…' : '';
  const urgent = !waiting && sec <= 10 && ['night', 'day', 'trial', 'hunter'].includes(s.room.phase);
  el.classList.toggle('urgent', urgent);
  if (urgent && sec <= 5 && sec > 0 && sec !== lastTick) { lastTick = sec; sfx('tick', { volume: 0.5 }); }
}

function promptFor(s) {
  const { room, me, night, day } = s;
  const ph = room.phase;
  const name = (id) => { const p = playerById(id); return p ? `<b>${esc(p.id === me.id ? 'kendin' : p.name)}</b>` : ''; };
  const out = { tone: '', lead: icon('info'), html: '', actions: '' };
  if (ph === 'lobby' || ph === 'ended') return null;
  if (ph === 'reveal') {
    out.lead = icon('sparkle'); out.tone = 'fire';
    out.html = 'Kartına bak ve rolünü kimseye gösterme! Gece birazdan çöküyor…';
    return out;
  }
  if (ph === 'hunter') {
    out.lead = emblem('avci', 's');
    if (room.hunterId === me.id) { out.tone = 'fire'; out.html = '<b>Son atışın!</b> Vurmak istediğin kişiyi seç: karaktere ya da aşağıdaki listeye dokun.'; }
    else out.html = `${name(room.hunterId) || 'Avcı'} son nefesinde nişan alıyor… Kimi vuracak?`;
    return out;
  }
  if (ph === 'trial') return trialPrompt(s, name);
  if (!me.alive) {
    out.tone = 'ghost'; out.lead = icon('ghost');
    out.html = 'Hayalet olarak izliyorsun. Mesajların sadece ölülere gider; canlılara ipucu verme!';
    return out;
  }
  if (ph === 'night') {
    const n = night || {};
    const sel = n.mySelection;
    out.lead = emblem(me.role, 's');
    const ev = activeEvent(s);
    // Kilitli kapı / tipi: bu gece yapılacak bir şey yok
    if (n.locked) {
      out.tone = 'ghost'; out.lead = icon('lock');
      out.html = '<b>Kapın dışarıdan kilitlendi.</b> Bu gece evinden çıkamazsın; sabahı bekle.';
      return out;
    }
    if (ev && ev.id === 'tipi' && n.canAct === false && !isEvil(me.role) && ['doktor', 'kahin', 'gozcu', 'cadi'].includes(me.role)) {
      out.tone = 'ghost'; out.lead = icon('snow');
      out.html = '<b>Tipi var.</b> Bu gece köylüler evlerinden çıkamaz; sabahı bekle.';
      return out;
    }
    const st = tripStatus(s, sel);
    const teamLine = () => {
      if (!n.team || !n.team.length || n.teamTarget) return '';
      const picks = n.team.filter((t) => t.vampId !== me.id && t.targetId).map((t) => `${esc(t.name)} → ${name(t.targetId)}`);
      return picks.length ? `<br><span class="muted">Takımın: ${picks.join(', ')}</span>` : '';
    };
    switch (me.role) {
      case 'vampir': {
        out.tone = 'vampir';
        const tt = n.teamTarget;
        if (tt && tt.targetId) {
          const mine = tt.by === me.id;
          out.html = mine ? `Takımın hedefi: ${name(tt.targetId)} <span class="muted">(sen seçtin)</span> ${st}`
            : `<b>Takımının hedefi:</b> ${name(tt.targetId)} <span class="muted">(${esc(tt.byName || 'takım arkadaşın')} seçti)</span> ${st}`;
          out.short = `Hedef: ${name(tt.targetId)} ${st}`;
        } else {
          out.html = '<b>Avlanma vakti.</b> İlk onaylayan vampir takımın tek hedefini belirler; seçim kesindir.';
        }
        out.html += teamLine();
        if (n.framer) out.html += `<br><span class="muted">İftiracı ${name(n.framer)} kişisine iftira atıyor.</span>`;
        break;
      }
      case 'iftiraci':
        out.tone = 'vampir';
        if (n.teamTarget && n.teamTarget.targetId) out.html = `<span class="muted">Vampirlerin hedefi: ${name(n.teamTarget.targetId)}</span><br>`;
        out.html += sel ? `İftiran: ${name(sel)} ${st}` : '<b>Kime iftira atacaksın?</b> Kahin bu gece ona bakarsa VAMPİR görür.';
        out.html += teamLine();
        if (sel) out.short = `İftira: ${name(sel)} ${st}`;
        break;
      case 'doktor':
        out.tone = 'good';
        out.html = sel ? `Koruman: ${name(sel)} ${st}` : '<b>Bu gece kimi koruyacaksın?</b> Kendini de seçebilirsin. Seçim kesindir.';
        if (sel) out.short = `Koruman: ${name(sel)} ${st}`;
        break;
      case 'kahin':
        out.html = sel ? `Kristal küren ${name(sel)} için hazır ${st}. Sonucu sabah öğreneceksin.` : '<b>Kimin geleceğine bakmak istersin?</b> Birini seç; seçim kesindir.';
        if (sel) out.short = `Bakılacak: ${name(sel)} ${st}`;
        break;
      case 'gozcu':
        out.html = sel ? `Gözetlediğin ev: ${name(sel)} ${st}. Gelenler ayrı panelde, canlı.` : '<b>Bu gece kimin evini gözetleyeceksin?</b> Kendi evin de olur. Seçim kesindir.';
        if (sel) out.short = `Gözetlenen: ${name(sel)}`;
        break;
      case 'cadi': {
        const w = n.witch;
        if (!w) break;
        const v = (w.victims || []).map((id) => name(id)).filter(Boolean);
        out.html = v.length ? `Vampirler şu an ${v.join(' / ')} kişisini hedefliyor.` : 'Vampirler henüz bir hedef seçmedi.';
        const bits = [];
        if (w.heal) bits.push(`iksir: ${name(w.heal)}`);
        if (w.poison) bits.push(`zehir: ${name(w.poison)}`);
        out.html += bits.length ? `<br><span class="muted">Seçimin (kesin) — ${bits.join(', ')}</span> ${n.bounced ? statusHTML('locked') : ''}` : '<br><span class="muted">İksir seç, sonra bir kişiye dokun. Her seçim kesindir.</span>';
        const m = ctx.witchMode;
        out.actions = `
          <button type="button" class="btn btn-s mode-btn${m === 'heal' && !w.healUsed && !w.heal ? ' on' : ''}" data-a="heal" ${w.healUsed || w.heal ? 'disabled' : ''}>${icon('sparkle')}${w.heal ? 'İksir verildi' : w.healUsed ? 'Hayat iksiri (bitti)' : 'Hayat iksiri'}</button>
          <button type="button" class="btn btn-s mode-btn poison${m === 'poison' && !w.poisonUsed && !w.poison ? ' on' : ''}" data-a="poison" ${w.poisonUsed || w.poison ? 'disabled' : ''}>${icon('tomb')}${w.poison ? 'Zehir verildi' : w.poisonUsed ? 'Zehir (bitti)' : 'Zehir'}</button>`;
        break;
      }
      case 'gardiyan': {
        out.lead = emblem('gardiyan', 's');
        const tgt = n.mySelection;
        out.html = tgt ? `Bu gece kilitli kapı: ${name(tgt)}. Sabah kaç kişinin zorladığını öğreneceksin.` : 'Bu gece kilitli kapı yok. Gündüz, gelecek gece için bir kapı seçebilirsin.';
        break;
      }
      default: {
        out.lead = icon('zz');
        const extra = { avci: ' Ölürsen son atışını yapabilirsin.', muhtar: ' Gündüz oyun iki sayılacak.', soytari: ' Gündüz asılmak için köyü kışkırt!' }[me.role] || '';
        out.html = `Köy uyuyor… Bu gece görevin yok, sabahı bekle.${extra}`;
      }
    }
    return out;
  }
  if (ph === 'day' && day) {
    out.lead = icon('vote'); out.tone = 'fire';
    const mv = day.myVote;
    const fog = activeEvent(s) && activeEvent(s).id === 'sis';
    if (day.shortened) out.html = '<b>Herkes oy verdi!</b> Oylama birkaç saniye içinde sonuçlanıyor.';
    else if (mv && mv !== 'sleep') out.html = `Oyun: ${name(mv)}. Değiştirmek için başka birine, geri almak için aynı kişiye dokun.`;
    else if (mv === 'sleep') out.html = 'Hızlı Uyu dedin. Herkes derse kimse asılmadan geceye geçilir.';
    else out.html = fog ? '<b>Sis var: oylar gizli.</b> Herkes sadece oy sayılarını görür; kendi oyunu sen görürsün.' : '<b>Tartışın ve oy verin.</b> Şüphelendiğin kişiye dokun. Oylar herkese açık.';
    if (me.role === 'muhtar') out.html += ' <span class="muted">Muhtar olarak oyun iki sayılır.</span>';
    const lockBtn = canLock(s) ? lockButton(s) : '';
    out.actions = `${lockBtn}<button type="button" class="btn btn-s sleep-btn${mv === 'sleep' ? ' on' : ''}" data-a="sleep">${icon('zz')}Hızlı Uyu ${day.sleepers}/${day.voters}</button>
      ${mv && mv !== 'sleep' ? `<button type="button" class="btn btn-ghost btn-s" data-a="unvote">${icon('close')}Oyumu geri al</button>` : ''}`;
    if (mv) {
      out.short = day.shortened ? '<b>Herkes oy verdi!</b>' : mv === 'sleep' ? '<b>Hızlı Uyu</b> dedin' : `Oyun: ${name(mv)}`;
      out.mini = `${canLock(s) ? lockButton(s, true) : ''}<button type="button" class="btn btn-s sleep-btn mini${mv === 'sleep' ? ' on' : ''}" data-a="sleep" aria-label="Hızlı Uyu, ${day.sleepers}/${day.voters}">${icon('zz')}${day.sleepers}/${day.voters}</button>`
        + (mv !== 'sleep' ? `<button type="button" class="btn btn-ghost btn-s mini" data-a="unvote" aria-label="Oyumu geri al">${icon('close')}</button>` : '');
    }
    return out;
  }
  return null;
}

// Gece yolculuğu geri bildirimi: kapı kilitliydi / yolda / vardın.
function statusHTML(kind) {
  const m = { go: ['next', 'Yolda'], in: ['check', 'Vardın'], locked: ['lock', 'Kapı kilitliydi'], home: ['house', 'Evdesin'] }[kind];
  return `<span class="status ${kind}">${icon(m[0])}${m[1]}</span>`;
}
const selSeen = new Map(); // seçim -> ilk görüldüğü an
function tripStatus(s, sel) {
  const n = s.night || {};
  const target = (n.teamTarget && n.teamTarget.targetId) || sel || (n.witch && (n.witch.poison || n.witch.heal));
  if (!target) return '';
  if (n.bounced) return statusHTML('locked');
  if (target === s.me.id) return statusHTML('home');
  const key = `${phaseKey}|${target}`;
  if (!selSeen.has(key)) selSeen.set(key, Date.now());
  return statusHTML(Date.now() - selSeen.get(key) > 3500 ? 'in' : 'go');
}

// Gardiyan: gündüz, gelecek gece kilitlenecek kapı. Sunucu day.lock'u sadece yaşayan gardiyana gönderir.
function canLock(s) {
  return !!(s.me.alive && s.me.role === 'gardiyan' && s.day && s.day.lock && ['day', 'trial'].includes(s.room.phase));
}
function lockButton(s, mini = false) {
  const lock = s.day && s.day.lock;
  const p = lock && lock.targetId ? playerById(lock.targetId) : null;
  if (mini) return `<button type="button" class="btn btn-s mini" data-a="lock" aria-label="Kilit: ${esc(p ? p.name : 'seçilmedi')}">${icon('lock')}${p ? esc(p.name) : '?'}</button>`;
  return `<button type="button" class="btn btn-s" data-a="lock">${icon('lock')}${p ? `Kilit: ${esc(p.name)}` : 'Bu gece kimi kilitleyeceksin?'}</button>`;
}

// Mahkeme: savunma ve iki sanık arasında yeniden oylama.
function trialPrompt(s, name) {
  const t = s.room.trial || {};
  const acc = t.accused || [];
  const out = { tone: 'fire', lead: icon('gavel'), html: '', actions: '' };
  const counts = t.counts || {};
  const card = (id) => {
    const p = playerById(id);
    if (!p) return '';
    const c = COLORS[p.look.color];
    const live = s.day && s.day.counts ? s.day.counts[id] : null;
    const mine = s.day && s.day.myVote === id;
    const can = window.VKRules.trialVote(s) && s.me.alive && id !== s.me.id;
    return `<button type="button" class="trial-def${t.speaker === id ? ' speaking' : ''}${mine ? ' on' : ''}" ${can ? `data-a="tvote" data-id="${id}"` : 'disabled'}>
      <span class="pchip-av" style="background:${c};color:${inkOn(c)}">${esc(initial(p.name))}</span>${esc(p.id === s.me.id ? 'Sen' : p.name)}
      <small>${t.speaker === id ? 'savunuyor' : t.step === 'vote' ? `${live ?? 0} oy${mine ? ' · senin oyun' : ''}` : `${counts[id] ?? 0} oyla geldi`}</small></button>`;
  };
  if (t.step === 'vote') {
    out.html = s.me.alive ? '<b>Mahkeme oylaması.</b> Sadece iki sanıktan birine oy verebilirsin.' : 'Mahkeme oylaması sürüyor.';
    if (s.me.alive && acc.includes(s.me.id)) out.html = '<b>Sanıksın.</b> Kendine oy veremezsin; diğer sanığa ya da Hızlı Uyu\'ya oy verebilirsin.';
  } else {
    out.html = t.speaker ? `${name(t.speaker)} savunma yapıyor. Sonra köy bu iki kişi arasında yeniden oylayacak.` : 'Mahkeme kuruluyor…';
    if (t.speaker === s.me.id) out.html = '<b>Savunma sırası sende!</b> Sohbete yaz, köyü ikna et.';
  }
  out.actions = `${canLock(s) ? lockButton(s) : ''}<div class="trial" style="flex:1"><div class="trial-pair">${card(acc[0])}<span class="trial-vs">ya da</span>${card(acc[1])}</div>
    ${t.step === 'vote' && s.me.alive && s.day ? `<button type="button" class="btn btn-s sleep-btn${s.day.myVote === 'sleep' ? ' on' : ''}" data-a="sleep">${icon('zz')}Hızlı Uyu ${s.day.sleepers}/${s.day.voters}</button>` : ''}</div>`;
  return out;
}

// Gözcü canlı paneli (sadece gözcü görür): eve gelenler, kapıdan dönenler, ev sahibinin gittiği ev.
function renderWatch(s) {
  const el = $('#watch-panel');
  const wv = s.room.phase === 'night' && s.me.alive && s.me.role === 'gozcu' && s.night && s.night.watch;
  el.hidden = !wv;
  if (!wv) { el.dataset.html = ''; return; }
  const owner = playerById(wv.targetId);
  const ownName = owner ? (owner.id === s.me.id ? 'kendi evin' : `<b>${esc(owner.name)}</b>`) : '?';
  const vis = wv.visitors || [];
  let list;
  if (wv.dark) {
    list = vis.length
      ? `<div class="watch-list">${vis.map((v) => `<span class="chip${v.blocked ? ' locked' : ''}"><span class="sil"></span>Bir gölge${v.blocked ? ' · kapıdan döndü' : ''}</span>`).join('')}</div>
         <div class="watch-empty">Rüzgâr: karanlıkta ${wv.count ?? vis.length} gölge gördün${wv.blockedCount ? `, ${wv.blockedCount} tanesi kapıdan döndü` : ''}; kim olduklarını seçemiyorsun.</div>`
      : '<div class="watch-empty">Karanlıkta henüz kimse görünmedi.</div>';
  } else {
    list = vis.length
      ? `<div class="watch-list">${vis.map((v) => { const p = playerById(v.id); const c = p ? COLORS[p.look.color] : '#888'; return `<span class="chip${v.blocked ? ' locked' : ''}"><span class="swatch-dot" style="background:${c}"></span>${esc(p ? p.name : '?')}${v.blocked ? ` · ${icon('lock')}kapıdan döndü` : ''}</span>`; }).join('')}</div>`
      : '<div class="watch-empty">Henüz kimse gelmedi.</div>';
  }
  let own = '';
  if (wv.ownerOut) {
    const to = wv.ownerWent ? playerById(wv.ownerWent) : null;
    let where = '';
    if (to) where = to.id === s.me.id ? ' → <b>senin</b> evine geldi' : ` → gittiği ev: <b>${esc(to.name)}</b>`;
    else if (wv.dark) where = '; karanlıkta nereye gittiği görünmedi';
    own = `<div class="watch-owner">${icon('door')} Ev sahibi çıktı${where}.</div>`;
  }
  const html = `<header>${emblem('gozcu', 's')}<span>Gözetlediğin ev: ${ownName}</span><span class="lt-private">${icon('eye')}Sadece sen görüyorsun</span></header>${list}${own}`;
  if (el.dataset.html !== html) { el.dataset.html = html; el.innerHTML = html; scheduleInsets(); }
}

function renderPrompt(s) {
  const el = $('#prompt');
  const p = promptFor(s);
  el.hidden = !p;
  if (!p) return;
  // Seçim/oy yapıldıktan sonra istem tek satıra iner (dünya daha çok görünsün); dokununca açılır.
  const compact = !!p.short && promptOpenKey !== phaseKey;
  const toggle = p.short ? `<button type="button" class="iconbtn prompt-tog" data-a="${compact ? 'expand' : 'collapse'}" aria-label="${compact ? 'Ayrıntıları göster' : 'Küçült'}">${icon(compact ? 'chevUp' : 'chevDown')}</button>` : '';
  const html = compact
    ? `<span class="prompt-lead">${p.lead}</span><div class="prompt-text" data-a="expand">${p.short}</div><div class="prompt-mini">${p.mini || ''}${toggle}</div>`
    : `<span class="prompt-lead">${p.lead}</span><div class="prompt-text">${p.html}</div>${toggle ? `<div class="prompt-mini">${toggle}</div>` : ''}<div class="prompt-actions">${p.actions}</div>`;
  if (el.dataset.html !== html) { el.dataset.html = html; el.innerHTML = html; scheduleInsets(); }
  el.dataset.tone = p.tone;
  el.classList.toggle('compact', compact);
  el.classList.toggle('has-tog', !!toggle);
}
let promptOpenKey = '';

function renderLobby(s) {
  const el = $('#lobby-card');
  const { room, me } = s;
  el.hidden = room.phase !== 'lobby';
  if (el.hidden) return;
  const host = room.hostId === me.id;
  const connected = s.players.filter((p) => p.connected && !p.left).length;
  const total = s.players.filter((p) => !p.left).length;
  const need = Math.max(0, room.minPlayers - connected);
  const hostP = playerById(room.hostId);
  let why = '';
  if (need > 0) why = `Başlamak için en az ${room.minPlayers} bağlı oyuncu gerekli (şu an ${connected}). ${need} kişi daha davet et!`;
  else if (connected < total) why = 'Bağlantısı kopan oyuncular başlarken odadan çıkarılır.';
  const iftiraOff = room.settings.roles.iftiraci && total < 7 ? ' İftiracı 7 oyuncudan az olduğu için dağıtılmayacak.' : '';
  const bots = s.players.filter((p) => p.bot && !p.left).length;
  const full = total >= room.maxPlayers;
  const botBtn = (cls = '') => `<button type="button" class="btn btn-secondary ${cls}" data-l="bot" ${full ? 'disabled' : ''} aria-label="Bot ekle${full ? ' (oda dolu)' : ''}">${icon('bot')}Bot ekle</button>`;
  const startBtn = host
    ? `<div class="lobby-start-row">${botBtn('btn-lg')}<button type="button" class="btn btn-primary btn-lg lobby-start" data-l="start" ${need > 0 ? 'disabled' : ''}>${icon('play')}Oyunu Başlat</button></div>`
    : '';
  const botNote = bots ? `<p class="lobby-bots">${icon('bot')}<span>Odada ${bots} bot var. Botlu oyunlar istatistiğe sayılmaz.</span></p>`
    : host ? `<p class="lobby-bots">${icon('bot')}<span>Tek başına denemek için bot ekle. Botlu oyunlar istatistiğe sayılmaz.</span></p>` : '';
  el.classList.toggle('min', !!lobbyMin);
  setHTML(el, `
    <div class="lobby-row">
      <button type="button" class="lobby-code btn btn-ghost btn-s" data-l="code" aria-label="Oda kodunu kopyala">Kod <code>${esc(room.id)}</code></button>
      ${room.hasPassword ? `<span class="chip" title="Şifreli oda" aria-label="Şifreli oda">${icon('lock')}</span>` : ''}
      <span class="lobby-count">${icon('users', '', '').replace('class="ic ', 'style="width:16px;height:16px;display:inline;vertical-align:-3px" class="ic ')} ${total}/${room.maxPlayers}</span>
      <button type="button" class="iconbtn" data-l="min" aria-label="${lobbyMin ? 'Lobi kartını aç' : 'Lobi kartını küçült'}" style="width:36px;height:36px">${icon(lobbyMin ? 'plus' : 'minus')}</button>
    </div>
    <div class="lobby-full" style="display:grid;gap:10px">
      ${total >= MIN_PLAYERS ? `<div class="dist" aria-label="Rol dağılımı">${distChips(room.distribution)}</div>` : ''}
      ${host ? (why || iftiraOff ? `<p class="lobby-why">${esc(why + iftiraOff)}</p>` : '') : `<p class="lobby-why">${esc(hostP ? hostP.name : 'Oda sahibi')} oyunu başlatınca roller dağıtılacak.${need > 0 ? ` En az ${room.minPlayers} oyuncu gerekli (şu an ${connected}).` : ''}</p>`}
      ${botNote}
      <div class="lobby-btns">
        <button type="button" class="btn btn-secondary" data-l="share">${icon('share')}Davet Et</button>
        <button type="button" class="btn btn-secondary" data-l="look">${icon('palette')}Görünüm</button>
        <button type="button" class="btn btn-secondary" data-l="settings">${icon('gear')}${host ? 'Ayarlar' : 'Kurallar'}</button>
        ${startBtn}
      </div>
    </div>
    <div class="lobby-mini" style="gap:8px">
      <button type="button" class="btn btn-secondary btn-s" data-l="share" style="flex:1">${icon('share')}Davet</button>
      <button type="button" class="btn btn-secondary btn-s" data-l="look" style="flex:1">${icon('palette')}Görünüm</button>
      <button type="button" class="btn btn-secondary btn-s" data-l="settings" aria-label="${host ? 'Oda ayarları' : 'Oda kuralları'}">${icon('gear')}</button>
      ${host ? `<button type="button" class="btn btn-secondary btn-s" data-l="bot" ${full ? 'disabled' : ''} aria-label="Bot ekle">${icon('bot')}</button>` : ''}
      ${host ? `<button type="button" class="btn btn-primary btn-s" data-l="start" style="flex:1.4" ${need > 0 ? 'disabled' : ''}>${icon('play')}Başlat</button>` : ''}
    </div>`);
}

// Sadece içerik değiştiyse yeniden çizer (hareket yayınları her 100 ms'de gelir; dokunuşlar kaybolmasın).
function setHTML(el, html) {
  if (el.dataset.html === html) return false;
  el.dataset.html = html;
  el.innerHTML = html;
  return true;
}

function railOrder(s) {
  const me = s.me.id;
  return s.players.slice().sort((a, b) => {
    const ka = (a.id === me ? 0 : 1) + (a.alive && !a.left ? 0 : 10);
    const kb = (b.id === me ? 0 : 1) + (b.alive && !b.left ? 0 : 10);
    return ka - kb || a.seat - b.seat;
  });
}

function renderRail(s) {
  const { room, me, night, day } = s;
  const act = window.VKRules.action(s);
  const evilMe = isEvil(me.role);
  const victims = new Set(night && night.witch ? night.witch.victims : []);
  const chips = railOrder(s).map((p) => {
    const c = COLORS[p.look.color];
    const isMe = p.id === me.id;
    const can = act && window.VKRules.selectable(s, p, ctx.witchMode);
    const cls = ['pchip'];
    if (isMe) cls.push('me');
    if (!p.alive || p.left) cls.push('dead');
    if (!p.connected && !p.left) cls.push('off');
    if (can) cls.push('can'); else if (act && p.alive && !p.left) cls.push('locked');
    let mark = ''; let sel = '';
    if (night) {
      if (night.mySelection === p.id && SEL_LABEL[me.role]) { mark = SEL_LABEL[me.role]; sel = SEL_COLOR[me.role]; }
      if (night.witch) {
        if (night.witch.heal === p.id) { mark = 'İksir'; sel = '#8be06a'; }
        if (night.witch.poison === p.id) { mark = 'Zehir'; sel = '#b06cff'; }
      }
      const tp = (night.team || []).filter((t) => t.targetId === p.id && t.vampId !== me.id);
      if (!mark && tp.length) { mark = tp.map((t) => t.name).join(', '); sel = '#ff8a9a'; }
      if (!mark && night.framer === p.id && me.role === 'vampir') { mark = 'İftira'; sel = '#e070c0'; }
    }
    if (victims.has(p.id)) { cls.push('attacked'); if (!mark) { mark = 'Hedef'; sel = '#ff4b5f'; } }
    if (day && day.myVote === p.id) { mark = 'Oyun'; sel = '#ffd27a'; }
    if (room.phase === 'hunter' && p.id === room.hunterId) { mark = 'Avcı'; sel = '#ffb347'; }
    if (sel) cls.push('sel');
    const votes = day ? (day.counts && day.counts[p.id] != null ? Number(day.counts[p.id]) || 0 : day.votes && day.votes[p.id] ? day.votes[p.id].reduce((a, v) => a + v.w, 0) : 0) : 0;
    const trial = room.phase === 'trial' && room.trial;
    if (trial && (trial.accused || []).includes(p.id)) cls.push('defendant');
    else if (trial && p.alive) cls.push('excluded');
    let tag = '';
    if (p.isHost && (room.phase === 'lobby' || room.phase === 'ended')) tag = `<span class="pchip-tag host">${icon('crown')}</span>`;
    else if (evilMe && isEvil(p.role) && !isMe) tag = `<span class="pchip-tag evil">${icon('moon')}</span>`;
    else if (p.bot) tag = `<span class="pchip-tag bot" title="Bot">${icon('bot')}</span>`;
    let st = '';
    if (!p.alive || p.left) st = `<span class="pchip-state">${icon(p.left ? 'door' : 'tomb')}</span>`;
    else if (!p.connected) st = `<span class="pchip-state">${icon('wifiOff')}</span>`;
    else if (day && (day.sleeping || []).includes(p.id)) st = `<span class="pchip-state sleep">${icon('zz')}</span>`;
    else if (day && (day.voted || []).includes(p.id)) st = `<span class="pchip-state voted">${icon('check')}</span>`;
    const roleKnown = p.role && !isMe && (room.phase === 'ended' || !p.alive) ? ` (${ROLES[p.role].name})` : '';
    const label = `${p.name}${p.bot ? ' (bot)' : ''}${p.job && p.job.label ? `, ${p.job.label}` : ''}${roleKnown}${!p.alive ? ', öldü' : ''}${votes ? `, ${votes} oy` : ''}${can ? ', seçilebilir' : ''}`;
    return `<button type="button" role="listitem" class="${cls.join(' ')}" data-pid="${p.id}" ${sel ? `style="--sel:${sel}"` : ''} aria-label="${esc(label)}">
      ${mark ? `<span class="pchip-mark">${esc(mark)}</span>` : ''}
      <span class="pchip-av" style="background:${c};color:${inkOn(c)}">${esc(initial(p.name))}${st}</span>
      ${tag}${votes ? `<span class="pchip-votes">${votes}</span>` : ''}
      <span class="pchip-name">${isMe ? 'Sen' : esc(p.bot ? p.name.replace(/^Bot\s+/, '') : p.name)}</span>
      ${p.job && p.job.label ? `<span class="pchip-job">${esc(p.job.label)}</span>` : ''}
    </button>`;
  });
  // Sadece değişen çipler yenilenir: başkasının oyu gelirken yapılan dokunuş kaybolmasın.
  const rail = $('#rail');
  const ids = railOrder(s).map((p) => p.id).join('|');
  if (rail.dataset.ids !== ids || rail.children.length !== chips.length) {
    rail.dataset.ids = ids;
    rail.innerHTML = chips.join('');
    Array.from(rail.children).forEach((el, k) => { el.dataset.h = chips[k]; });
    return;
  }
  chips.forEach((h, k) => {
    const el = rail.children[k];
    if (el.dataset.h === h) return;
    const t = document.createElement('template');
    t.innerHTML = h.trim();
    const n = t.content.firstElementChild;
    n.dataset.h = h;
    el.replaceWith(n);
  });
}

// ---------- rol kartı ----------
function roleCardHTML(s) {
  const role = s.me.role;
  const r = ROLES[role];
  const mates = isEvil(role)
    ? s.players.filter((p) => p.id !== s.me.id && isEvil(p.role)).map((p) => `${esc(p.name)} <small class="muted">(${ROLES[p.role].name})</small>`)
    : [];
  const notes = s.me.notes || [];
  const job = s.me.job || (playerById(s.me.id) || {}).job;
  return `<div class="rolecard" style="--rc:${r.color}">
    <span class="eyebrow">Rolün</span>
    ${emblem(role, 'xl')}
    <h2>${r.name}</h2>
    <span class="team-tag team-${r.team}">${r.teamName}</span>
    <p>${r.desc}</p>
    ${mates.length ? `<div class="mates"><b>Takım arkadaşların</b>${mates.join(', ')}</div>` : isEvil(role) ? '<div class="mates"><b>Takım arkadaşların</b>Takımında senden başka kimse yok.</div>' : ''}
    ${job && job.label ? `<div class="job"><b>Köydeki işin</b>${esc(job.label)}<small>Sadece hikâye için; rolün hakkında hiçbir şey söylemez.</small></div>` : ''}
    ${s.room.scenario && s.room.scenario.name ? `<div class="scenario"><b>Bu oyunun hikâyesi · ${esc(s.room.scenario.name)}</b>${s.room.scenario.intro ? `<p>${esc(s.room.scenario.intro)}</p>` : ''}</div>` : ''}
    ${notes.length ? `<div class="notes"><b class="eyebrow">Notların</b><ul>${notes.map((n) => `<li>${esc(String(n.text).replace(/^[\p{Extended_Pictographic}‍️\s]+/u, ''))}</li>`).join('')}</ul></div>` : ''}
  </div>`;
}

function openRoleSheet() {
  const s = ctx.state;
  if (!s || !s.me.role || roleSheet) return;
  roleSheet = openSheet({
    title: 'Rol kartın', cls: 'sheet-small',
    body: `<div style="height:min(560px,calc(var(--app-h) - 200px));min-height:380px">${roleCardHTML(s)}</div>`,
    footer: '<button type="button" class="btn btn-primary" data-close>Kapat</button>',
    onClose: () => { roleSheet = null; },
  });
}

// ---------- üst katman: reveal ve oyun sonu ----------
function renderOverlay(s) {
  const host = $('#overlay');
  const ph = s.room.phase;
  if (ph === 'reveal' && flipped !== 'closed') {
    if (!host.querySelector('.flip')) {
      host.innerHTML = `<div class="ov"><div class="reveal-stack">
        <button type="button" class="flip${flipped ? ' on' : ''}" aria-label="Rol kartını çevir"><span class="flip-in">
          <span class="flip-face flip-back">${logoMark()}<p>Kartını çevirmek için dokun</p><p class="muted small">Rolünü kimseye gösterme!</p></span>
          <span class="flip-face flip-front">${roleCardHTML(s)}</span></span></button>
        <p class="reveal-hint"><button type="button" class="btn btn-ghost btn-s" data-e="closecard">${icon('check')}Tamam, köye dön</button></p>
      </div></div>`;
    }
    return;
  }
  if (ph === 'ended' && !isAnnouncing()) {
    if (endHidden) {
      host.innerHTML = `<div class="end-mini">${icon('trophy')}${WIN_TITLE[s.room.winner] || 'Oyun bitti'}<button type="button" class="btn btn-primary btn-s" data-e="show">Sonuçlar</button></div>`;
      return;
    }
    const sig = `${s.room.winner}|${s.room.hostId}|${s.players.length}|${ctx.statsAfter ? 1 : 0}|${s.log.length}`;
    if (host.dataset.sig !== sig || !host.querySelector('.end')) {
      host.dataset.sig = sig;
      host.innerHTML = `<div class="ov">${endHTML(s)}</div>`;
    }
    return;
  }
  host.innerHTML = '';
  host.dataset.sig = '';
}

function endHTML(s) {
  const { room, me } = s;
  const winners = new Set(room.winners || []);
  const won = winners.has(me.id);
  const winRole = room.winner === 'koylu' ? 'koylu' : room.winner === 'soytari' ? 'soytari' : 'vampir';
  const players = s.players.slice().sort((a, b) => (winners.has(b.id) - winners.has(a.id)) || a.seat - b.seat);
  const rows = players.map((p) => {
    const c = COLORS[p.look.color];
    const r = p.role ? ROLES[p.role] : null;
    return `<div class="end-role${winners.has(p.id) ? ' won' : ''}${!p.alive ? ' dead' : ''}">
      <span class="pchip-av" style="width:34px;height:34px;font-size:14px;background:${c};color:${inkOn(c)}">${esc(initial(p.name))}</span>
      <span class="end-name">${esc(p.name)}${p.id === me.id ? ' <small>(sen)</small>' : ''}${p.bot ? ` <span class="bot-mark">${icon('bot')}bot</span>` : ''}
        <span class="sub">${p.job && p.job.label ? `${esc(p.job.label)} · ` : ''}${p.left ? 'ayrıldı' : p.alive ? 'hayatta' : 'öldü'}${winners.has(p.id) ? ' · kazandı' : ''}</span></span>
      <span class="chip">${r ? `${emblem(p.role, 's')}${r.name}` : '?'}</span>
    </div>`;
  }).join('');
  // Hikâye: sunucunun kapanış metni (room.epilogue); yoksa story satırları; o da yoksa önemli olaylar.
  const ep = room.epilogue || (ctx.lastWin && ctx.lastWin.epilogue) || null;
  const stories = (s.log || []).filter((l) => l.kind === 'story' && l.text);
  let tale = '';
  if (ep && ep.story) {
    tale = `${ep.text ? `<span class="r">${esc(ep.text)}</span>` : ''}<p>${esc(ep.story)}</p>`;
    if (stories.length) {
      tale += `<details class="tale-more"><summary>Gece gece Köy Günlüğü (${stories.length})</summary>${stories.map((l) => `<p>${esc(l.text)}</p>`).join('')}</details>`;
    }
  } else if (stories.length) {
    tale = stories.map((l) => `<p>${esc(l.text)}</p>`).join('');
  } else {
    const key = (s.log || []).filter((l) => ['death', 'win', 'safe'].includes(l.kind));
    tale = key.length ? key.map((l) => `<p>${esc(l.text)}</p>`).join('') : '<p>Köy bu oyunu sessizce geride bıraktı.</p>';
  }
  const delta = hadBots(s)
    ? `<div class="note note-moon">${icon('bot')}<span>Bu oyunda bot vardı; istatistiklere ve liderlik tablosuna sayılmadı.</span></div>`
    : statsDeltaHTML();
  return `<section class="end" data-winner="${esc(room.winner || '')}">
    <div class="end-hero">${emblem(winRole, 'xl')}<h2>${WIN_TITLE[room.winner] || 'Oyun bitti'}</h2>
      <span class="end-me ${won ? 'win' : 'lose'}">${won ? 'Tebrikler, kazandın!' : 'Bu sefer kaybettin.'}</span></div>
    <div class="end-body">
      ${delta}
      <div><div class="section-title">${esc((ep && ep.title) || 'Köyün hikâyesi')}${room.scenario && room.scenario.name ? ` · ${esc(room.scenario.name)}` : ''}</div><div class="tale">${tale}</div></div>
      <div><div class="section-title">Herkesin rolü</div><div class="end-roles">${rows}</div></div>
    </div>
    <div class="end-foot">
      ${room.hostId === me.id ? `<button type="button" class="btn btn-primary" data-e="again">${icon('refresh')}Tekrar Oyna</button>` : '<p class="muted small" style="margin:0;flex-basis:100%;text-align:center">Oda sahibi yeni oyunu başlatabilir.</p>'}
      <button type="button" class="btn btn-secondary" data-e="hide">${icon('house')}Köye bak</button>
      <button type="button" class="btn btn-ghost" data-e="leave">${icon('door')}Odadan çık</button>
    </div>
  </section>`;
}

async function fetchStatsDelta() {
  ctx.statsAfter = null;
  const before = ctx.statsBefore;
  for (const wait of [1200, 2500]) {
    await new Promise((r) => setTimeout(r, wait));
    try {
      const res = await Api.me();
      if (!before || res.user.stats.games > before.games) {
        ctx.user = res.user;
        ctx.statsAfter = res.user.stats;
        emitLocal('user');
        if (ctx.state && ctx.state.room.phase === 'ended') renderOverlay(ctx.state);
        return;
      }
    } catch { /* sonra dene */ }
  }
}

function statsDeltaHTML() {
  const before = ctx.statsBefore;
  const after = ctx.statsAfter;
  if (!after) return '<div class="note note-moon">İstatistiklerin profiline işleniyor…</div>';
  const b = before || { games: after.games - 1, wins: after.wins };
  const lb = levelOf(b); const la = levelOf(after);
  const dg = after.games - b.games; const dw = after.wins - b.wins;
  return `<div><div class="section-title">Senin hesabın</div>
    <div class="end-delta">
      <div class="stat"><b>+${dg}</b><small>Oyun</small></div>
      <div class="stat"><b>+${dw}</b><small>Galibiyet</small></div>
      <div class="stat"><b>+${la.xp - lb.xp}</b><small>Puan</small></div>
    </div>
    <div class="level-row" style="margin-top:8px"><span class="level-badge">${la.level}</span>${la.level > lb.level ? '<b>Seviye atladın!</b> ' : ''}${la.title}</div>
    <div class="xp" style="margin-top:6px"><i style="width:${Math.round(la.progress * 100)}%"></i></div></div>`;
}

// ---------- dünya kenar boşlukları ----------
let insetRaf = 0;
export function scheduleInsets() {
  cancelAnimationFrame(insetRaf);
  insetRaf = requestAnimationFrame(() => {
    const app = $('#app').getBoundingClientRect();
    if ($('#room').hidden) { W.setInsets({ top: 0, bottom: 0, left: 0, right: 0 }); return; }
    let top = $('#hud-top').getBoundingClientRect().bottom - app.top;
    const crier = $('#crier');
    if (crier && !crier.hidden && crier.offsetHeight) top = Math.max(top, crier.getBoundingClientRect().bottom - app.top);
    let bottomEdge = app.bottom;
    for (const id of ['watch-panel', 'prompt', 'lobby-card', 'rail']) {
      const e = $(`#${id}`);
      if (!e.hidden && e.offsetHeight) bottomEdge = Math.min(bottomEdge, e.getBoundingClientRect().top);
    }
    const chat = $('#chat').getBoundingClientRect();
    let right = 0;
    if (isDocked()) right = chat.width;
    else bottomEdge = Math.min(bottomEdge, chat.top + 40);
    const bottom = Math.max(0, app.bottom - bottomEdge);
    // Dokunmatik cihazda joystick için ayrılmış boş alan: dünyanın görünen kısmının sol alt köşesi.
    // Arayüz bu kareye hiçbir kontrol koymaz; dünya joystick'i burada çizer (container'a göre px).
    const touch = window.matchMedia('(pointer: coarse)').matches;
    const size = Math.round(Math.max(104, Math.min(140, app.width * 0.34, (bottomEdge - app.top - top) * 0.45)));
    // Serbest yürüme sadece lobide ve oyun bitince; başka aşamada joystick yok (null).
    const ph = ctx.state && ctx.state.room.phase;
    const canWalk = ph === 'lobby' || ph === 'ended';
    const joystick = touch && canWalk ? { left: 12, bottom: bottom + 10, size } : null;
    $('#app').style.setProperty('--joy-bottom', `${bottom + 10}px`);
    $('#app').style.setProperty('--joy-size', joystick ? `${size}px` : '0px');
    W.setInsets({ top, bottom, left: 0, right, joystick });
  });
}

export { countRoles };
