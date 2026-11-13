// Köy Günlüğü: oda kaydı (story/rumor dahil) ve özel notlar; gün başında tellal şeridi (rumor).
import { ctx, on } from './ctx.js';
import { isAnnouncing } from './announce.js';
import { $, esc, sfx, stripEmoji } from './util.js';
import { icon } from './icons.js';
import { openSheet } from './kit.js';

const KIND_IC = { info: 'scroll', night: 'moon', day: 'sun', death: 'tomb', safe: 'sun', win: 'trophy', story: 'sparkle', rumor: 'bell', note: 'eye', epilogue: 'book', event: 'bell' };
let lastSeenTs = 0;
let lastRumorTs = 0;
let crierTimer = null;
let sheet = null;
let tab = 'log';

export function initChronicle() {
  const btn = $('#btn-chron');
  btn.insertAdjacentHTML('afterbegin', icon('book'));
  btn.addEventListener('click', () => { sfx('click'); openChronicle(); });
}

export function resetChronicle(state) {
  const log = (state && state.log) || [];
  lastSeenTs = log.length ? log[log.length - 1].ts : 0;
  const rumors = log.filter((l) => l.kind === 'rumor');
  lastRumorTs = rumors.length ? rumors[rumors.length - 1].ts : 0;
  hideCrier();
}

export function chronicleOnState(state) {
  const log = state.log || [];
  const newest = log.length ? log[log.length - 1].ts : 0;
  $('#chron-ping').hidden = !(newest > lastSeenTs) || !!sheet;
  if (sheet) { lastSeenTs = newest; renderInto(sheet.body.querySelector('[data-chron]'), state); }
  // tellal: gün başında yeni söylenti
  const rumor = [...log].reverse().find((l) => l.kind === 'rumor');
  if (rumor && rumor.ts > lastRumorTs) {
    lastRumorTs = rumor.ts;
    if (['day', 'night', 'trial', 'hunter'].includes(state.room.phase)) showCrier(rumor.text);
  }
}

function showCrier(text) {
  // Sinematik sürerken bekle; bitince göster.
  if (isAnnouncing()) {
    const off = on('announce:idle', () => { off(); showCrier(text); });
    return;
  }
  const el = $('#crier');
  el.innerHTML = `<span class="bellwrap">${icon('bell')}</span><span><b>Tellal bağırıyor</b>${esc(text)}</span>
    <button type="button" class="iconbtn crier-x" aria-label="Kapat">${icon('close')}</button>`;
  el.hidden = false;
  window.dispatchEvent(new Event('resize'));
  sfx('bell', { volume: 0.7 });
  el.querySelector('.crier-x').onclick = hideCrier;
  clearTimeout(crierTimer);
  crierTimer = setTimeout(hideCrier, 16000);
}
export function hideCrier() {
  clearTimeout(crierTimer);
  $('#crier').hidden = true;
  window.dispatchEvent(new Event('resize'));
}

function items(state) {
  if (tab === 'notes') return (state.me.notes || []).map((n) => ({ ...n, kind: 'note' }));
  return state.log || [];
}

function renderInto(root, state) {
  if (!root) return;
  const list = items(state);
  if (!list.length) {
    root.innerHTML = `<p class="chron-empty">${tab === 'notes' ? 'Henüz özel notun yok. Kahin ve Gözcü sonuçları, dönüşümler buraya yazılır; sadece sen görürsün.' : 'Günlük henüz boş.'}</p>`;
    return;
  }
  // Senaryo başlığı (giriş metni günlükte zaten bir story satırı olarak varsa tekrarlanmaz).
  const sc = state.room.scenario;
  let head = '';
  if (tab === 'log' && sc && sc.name) {
    const dup = sc.intro && list.some((l) => l.kind === 'story' && l.text === sc.intro);
    head = `<div class="chron-scen"><b>${esc(sc.name)}</b>${sc.intro && !dup ? `<p>${esc(sc.intro)}</p>` : ''}</div>`;
  }
  root.innerHTML = head + list.map((l) => {
    const text = stripEmoji(l.text);
    if (l.kind === 'night' || l.kind === 'day') {
      return `<div class="chron-day">${icon(KIND_IC[l.kind])}${esc(text)}</div>`;
    }
    return `<div class="chron-item k-${esc(l.kind)}">${icon(KIND_IC[l.kind] || 'scroll')}<span>${esc(text)}</span></div>`;
  }).join('');
  const body = root.closest('.sheet-body');
  if (body) body.scrollTop = body.scrollHeight;
}

export function openChronicle() {
  if (sheet || !ctx.state) return;
  const body = document.createElement('div');
  body.innerHTML = `<div class="seg" style="margin-bottom:12px"><button type="button" class="seg-btn" data-t="log">Köy Günlüğü</button><button type="button" class="seg-btn" data-t="notes">Notlarım</button></div><div class="chron" data-chron></div>`;
  const sync = () => {
    body.querySelectorAll('[data-t]').forEach((b) => b.classList.toggle('on', b.dataset.t === tab));
    renderInto(body.querySelector('[data-chron]'), ctx.state);
  };
  body.addEventListener('click', (e) => {
    const t = e.target.closest('[data-t]');
    if (t) { tab = t.dataset.t; sfx('click'); sync(); }
  });
  sheet = openSheet({
    titleHtml: `${icon('book')}Köy Günlüğü`, title: 'Köy Günlüğü', body, parchment: true,
    onClose: () => { sheet = null; },
  });
  const log = ctx.state.log || [];
  lastSeenTs = log.length ? log[log.length - 1].ts : 0;
  $('#chron-ping').hidden = true;
  sync();
}

export function closeChronicle() { if (sheet) sheet.close(); }
