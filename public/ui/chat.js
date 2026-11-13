// Sohbet: telefonda dünyanın altında son mesajların yarı saydam şeridi + giriş satırı; dokununca ya da
// yukarı kaydırınca tam geçmişli alt sayfa açılır (kendi içinde kayar). Geniş ekranda sağda sabit panel.
import { ctx, send, playerById } from './ctx.js';
import { $, esc, sfx, fmtTime } from './util.js';
import { icon, roleIcon } from './icons.js';
import { COLORS } from './data.js';
import { W } from './world-host.js';
import { dragToClose } from './kit.js';

const MAX = 200;
const docked = window.matchMedia('(min-width: 760px) and (min-aspect-ratio: 4/3)');
const coarse = window.matchMedia('(pointer: coarse)');
let unread = 0;
let isOpen = false;

const el = {};

export function isDocked() { return docked.matches; }

export function initChat() {
  Object.assign(el, {
    chat: $('#chat'), list: $('#chat-list'), form: $('#chat-form'), input: $('#chat-input'), send: $('#chat-send'),
    toggle: $('#chat-toggle'), close: $('#chat-close'), backdrop: $('#chat-backdrop'), badge: $('#chat-badge'),
    mode: $('#chat-mode'), head: $('#chat-head'), room: $('#room'), app: $('#app'),
  });
  el.send.innerHTML = icon('send');
  el.toggle.insertAdjacentHTML('afterbegin', icon('chat'));
  el.close.innerHTML = icon('close');

  el.list.addEventListener('click', () => { if (!isOpen && !docked.matches) openChat(); });
  el.toggle.addEventListener('click', () => { sfx('click'); if (isOpen) closeChat(); else openChat(); });
  el.close.addEventListener('click', () => closeChat());
  el.backdrop.addEventListener('click', () => closeChat());
  dragToClose(el.head, el.chat, () => closeChat());

  // Kapalı şeritte yukarı kaydırınca açılır.
  let y0 = null;
  el.list.addEventListener('pointerdown', (e) => { y0 = e.clientY; });
  el.list.addEventListener('pointerup', (e) => {
    if (y0 != null && y0 - e.clientY > 30 && !isOpen && !docked.matches) openChat();
    y0 = null;
  });

  el.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = el.input.value.trim();
    if (!text) return;
    el.send.disabled = true;
    const res = await send('chat:send', { text });
    el.send.disabled = false;
    if (res.ok) el.input.value = '';
  });

  // Klavye açıkken (giriş odakta ve görünür alan belirgin biçimde küçüldüyse): oyuncu şeridi ve
  // istem gizlenir, giriş ve son mesajlar görünür kalır, dünya üstte görünmeye devam eder.
  let maxH = 0; let lastW = 0;
  const kbd = () => {
    const vv = window.visualViewport;
    const h = vv ? vv.height : window.innerHeight;
    if (window.innerWidth !== lastW) { lastW = window.innerWidth; maxH = h; }
    maxH = Math.max(maxH, h);
    const open = document.activeElement === el.input && coarse.matches && h < maxH * 0.8;
    el.app.classList.toggle('kbd', open);
  };
  el.input.addEventListener('focus', () => setTimeout(kbd, 50));
  el.input.addEventListener('blur', kbd);
  // Yazarken yön/WASD tuşları dünyaya ulaşmasın (karakter yürümesin, kısayollar tetiklenmesin).
  const MOVE_KEYS = new Set(['w', 'a', 's', 'd', 'W', 'A', 'S', 'D', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ']);
  document.addEventListener('keydown', (e) => {
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable) && MOVE_KEYS.has(e.key)) e.stopPropagation();
  }, true);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', kbd);
  window.addEventListener('resize', kbd);
  kbd();

  docked.addEventListener && docked.addEventListener('change', () => { if (docked.matches) closeChat(); syncUnread(); });

  setInterval(markStale, 2000);
  setInterval(() => trackSeen(500), 500);
}

function markStale() {
  const now = Date.now();
  for (const m of el.list.children) {
    const age = now - Number(m.dataset.t || now);
    m.classList.toggle('stale', age > 25000);
    m.classList.toggle('gone', age > 60000);
  }
}

export function openChat() {
  if (docked.matches) { el.input.focus(); return; }
  isOpen = true;
  el.chat.dataset.open = 'true';
  el.room.classList.add('chat-open');
  unread = 0;
  trackSeen(0);
  syncUnread();
  requestAnimationFrame(() => { el.list.scrollTop = el.list.scrollHeight; });
}
export function closeChat() {
  if (!isOpen) return;
  isOpen = false;
  el.chat.dataset.open = 'false';
  el.room.classList.remove('chat-open');
  el.list.scrollTop = el.list.scrollHeight;
}
export function chatIsOpen() { return isOpen; }

function syncUnread() {
  if (isOpen || docked.matches) unread = 0;
  el.badge.hidden = !unread;
  el.badge.textContent = unread > 99 ? '99+' : String(unread);
}

function push(node) {
  const list = el.list;
  const atBottom = list.scrollHeight - list.scrollTop - list.clientHeight < 60;
  node.dataset.t = String(Date.now());
  list.appendChild(node);
  while (list.children.length > MAX) list.firstElementChild.remove();
  if (atBottom || !isOpen) list.scrollTop = list.scrollHeight;
  trackSeen(0);
}

export function appendChat(m) {
  const mine = ctx.state && ctx.state.me && m.fromId === ctx.state.me.id;
  const p = playerById(m.fromId);
  const color = p ? COLORS[p.look.color] : '#c9c2d3';
  const node = document.createElement('div');
  node.className = `msg msg-${m.channel}${mine ? ' me' : ''}`;
  const tag = m.channel === 'vampir' ? `<span class="tag">${roleIcon('vampir')}Vampirler</span>`
    : m.channel === 'olu' ? `<span class="tag">${icon('ghost')}Ölüler</span>` : '';
  node.innerHTML = `${tag}<b style="color:${lighten(color)}">${esc(m.from)}</b>${p && p.bot ? `<span class="bot-mark">${icon('bot')}bot</span>` : ''}<span>${esc(m.text)}</span><time>${fmtTime(m.ts || Date.now())}</time>`;
  // Okunmamış sayımı: mesaj şeritte ~2,5 sn görünmeden kayarsa ya da görünmeden eskirse okunmamış sayılır.
  node.vkTrack = !mine;
  node.vkSeen = 0;
  push(node);
  W.bubble(m.fromId, m.text, m.channel);
  if (!mine) sfx('message', { volume: 0.5 });
}

const TICKER_N = 3;
const SEEN_MS = 2500;
// Şerit gerçekten görünüyor mu (sohbet sayfası kapalı, duyuru/rol kartı/oyun sonu üstünde değil)?
function tickerVisible() {
  if (isOpen || docked.matches || el.room.hidden) return false;
  if (!$('#announce').hidden) return false;
  if (document.querySelector('#overlay .ov')) return false;
  return true;
}
function settle(node, seen) {
  if (!node.vkTrack || node.vkDone) return;
  node.vkDone = true;
  if (!seen) { unread += 1; syncUnread(); }
}
function trackSeen(dtMs) {
  const kids = el.list.children;
  const vis = tickerVisible();
  const now = Date.now();
  for (let i = kids.length - 1, k = 0; i >= 0; i--, k++) {
    const n = kids[i];
    if (!n.vkTrack || n.vkDone) continue;
    if (isOpen || docked.matches) { settle(n, true); continue; }
    const stale = now - Number(n.dataset.t || now) > 25000;
    if (k < TICKER_N && vis && !stale) n.vkSeen += dtMs;
    if (n.vkSeen >= SEEN_MS) settle(n, true);
    else if (k >= TICKER_N || stale) settle(n, false);
  }
}

export function appendSystem(text, ic = 'scroll') {
  const node = document.createElement('div');
  node.className = 'msg msg-sys';
  node.innerHTML = `${icon(ic)}<span>${esc(text)}</span>`;
  push(node);
}

// Koyu renkler koyu zeminde okunmaz: isim rengini aydınlat.
function lighten(hex) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255; let g = (n >> 8) & 255; let b = n & 255;
  const l = 0.299 * r + 0.587 * g + 0.114 * b;
  if (l < 120) { const k = (120 - l) / 255 + 0.35; r += (255 - r) * k; g += (255 - g) * k; b += (255 - b) * k; }
  return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
}

export function renderChatState(state) {
  const { room, me } = state;
  const inGame = ['night', 'day', 'trial', 'hunter', 'reveal'].includes(room.phase);
  let mode = ['chat', 'Herkese açık']; let disabled = false; let ph = 'Mesaj yaz…';
  if (inGame && !me.alive) { mode = ['ghost', 'Sadece ölüler görür']; ph = 'Ölülere yaz…'; }
  else if (room.phase === 'night' && (me.role === 'vampir' || me.role === 'iftiraci')) { mode = ['moon', 'Sadece vampir takımı görür']; ph = 'Vampirlere fısılda…'; }
  else if (room.phase === 'night') { mode = ['moon', 'Gece köy uyur, konuşamazsın']; disabled = true; ph = 'Gece köy uyur, konuşamazsın'; }
  el.mode.innerHTML = `${icon(mode[0])}${mode[1]}`;
  el.input.disabled = disabled;
  el.send.disabled = disabled;
  el.input.placeholder = ph;
  el.form.classList.toggle('night', disabled);
  if (disabled && document.activeElement === el.input) el.input.blur();
}

export function clearChat() {
  el.list.innerHTML = '';
  unread = 0;
  syncUnread();
  closeChat();
}
