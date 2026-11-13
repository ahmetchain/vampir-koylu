// Ses ayarları: sessiz + Müzik / Efektler / Ortam sesi kaydırıcıları. Değişiklikler anında uygulanır,
// VKAudio kendi ayarını localStorage['vk.audio'] içinde saklar. Hem küçük açılır pencerede (giriş, menü,
// oyun üst çubuğu) hem de Ayarlar sayfasında aynı bileşen kullanılır.
import { $, $$, esc } from './util.js';
import { icon } from './icons.js';
import { emitLocal } from './ctx.js';

const A = () => window.VKAudio || null;
const SLIDERS = [
  ['music', 'Müzik', 'Menü ve gece/gündüz müzikleri'],
  ['sfx', 'Efektler', 'Oy, kapı, duyuru sesleri'],
  ['amb', 'Ortam sesi', 'Ateşin çıtırtısı, gece böcekleri'],
];

function readVol() {
  const a = A();
  const v = (a && a.getVolume && a.getVolume()) || {};
  return { music: v.music ?? 0.7, sfx: v.sfx ?? 0.9, amb: v.amb ?? 1 };
}
function isMuted() { const a = A(); try { return !!(a && a.isMuted && a.isMuted()); } catch { return false; } }

// Ses kontrollerinin HTML'i (id çakışmasın diye önek alır).
export function soundControlsHTML(px = 'snd') {
  const v = readVol();
  const pct = (x) => Math.round(x * 100);
  const muted = isMuted();
  return `<div class="sound" data-sound>
    <div class="set-row"><label for="${px}-mute">Tüm sesleri kapat</label>
      <span class="switch"><input type="checkbox" id="${px}-mute" data-k="mute" ${muted ? 'checked' : ''}><i></i></span></div>
    ${SLIDERS.map(([k, label, hint]) => `
      <div class="set-row"><label for="${px}-${k}">${label}</label>
        <div class="range"><span class="range-ic">${icon(k === 'music' ? 'music' : k === 'amb' ? 'flame' : 'volume')}</span>
          <input type="range" id="${px}-${k}" data-k="${k}" min="0" max="100" value="${pct(v[k])}" aria-label="${esc(label)}">
          <output>${pct(v[k])}</output></div>
        <small>${hint}</small></div>`).join('')}
    ${A() ? '' : '<p class="note note-moon">Ses motoru yüklenemedi; oyun sessiz çalışıyor.</p>'}
  </div>`;
}

export function bindSoundControls(root) {
  const box = root.querySelector('[data-sound]');
  if (!box) return;
  const apply = () => {
    const a = A();
    const o = {};
    $$('input[type=range]', box).forEach((r) => { o[r.dataset.k] = Number(r.value) / 100; r.nextElementSibling.textContent = r.value; });
    try { if (a) a.setVolume(o); } catch { /* yoksay */ }
    box.classList.toggle('is-muted', isMuted());
  };
  box.addEventListener('input', (e) => { if (e.target.type === 'range') apply(); });
  box.addEventListener('change', (e) => {
    const a = A();
    if (e.target.dataset.k === 'mute') { try { if (a) a.mute(e.target.checked); } catch { /* yoksay */ } syncSoundButtons(); }
    if (e.target.dataset.k === 'sfx') { try { if (a && !isMuted()) a.sfx('click'); } catch { /* yoksay */ } }
    box.classList.toggle('is-muted', isMuted());
  });
  box.classList.toggle('is-muted', isMuted());
}

// Ses düğmeleri (giriş, menü, oyun üst çubuğu): sessizse ikon değişir.
export function syncSoundButtons() {
  const m = isMuted();
  $$('[data-sound-btn]').forEach((b) => {
    b.innerHTML = icon(m ? 'mute' : 'volume');
    b.setAttribute('aria-label', m ? 'Ses kapalı, ses ayarlarını aç' : 'Ses ayarları');
    b.classList.toggle('is-muted', m);
  });
}

let pop = null;
function closePop() {
  if (!pop) return;
  const p = pop; pop = null;
  p.el.classList.add('closing');
  setTimeout(() => p.el.remove(), 160);
  document.removeEventListener('pointerdown', p.outside, true);
  document.removeEventListener('keydown', p.esc, true);
  if (p.btn) p.btn.setAttribute('aria-expanded', 'false');
}

// Küçük açılır pencere, düğmenin altına hizalanır.
export function openSoundPopover(btn) {
  if (pop) { const same = pop.btn === btn; closePop(); if (same) return; }
  const el = document.createElement('div');
  el.className = 'pop sound-pop';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-label', 'Ses ayarları');
  el.innerHTML = `<header class="pop-head"><b>Ses</b><button type="button" class="iconbtn pop-x" aria-label="Kapat">${icon('close')}</button></header>${soundControlsHTML('pop')}
    <button type="button" class="link pop-more" data-more>${icon('gear')}Diğer ayarlar (grafik, FPS)</button>`;
  $('#app').appendChild(el);
  const app = $('#app').getBoundingClientRect();
  const r = btn.getBoundingClientRect();
  const w = Math.min(320, app.width - 16);
  const left = Math.max(8, Math.min(app.width - w - 8, r.right - app.left - w));
  el.style.width = `${w}px`;
  el.style.left = `${left}px`;
  el.style.top = `${r.bottom - app.top + 8}px`;
  el.style.maxHeight = `${app.height - (r.bottom - app.top) - 16}px`;
  bindSoundControls(el);
  el.querySelector('.pop-x').addEventListener('click', closePop);
  el.querySelector('[data-more]').addEventListener('click', () => { closePop(); emitLocal('open-settings'); });
  const outside = (e) => { if (!el.contains(e.target) && !btn.contains(e.target)) closePop(); };
  const esc2 = (e) => { if (e.key === 'Escape') { e.stopPropagation(); closePop(); } };
  document.addEventListener('pointerdown', outside, true);
  document.addEventListener('keydown', esc2, true);
  btn.setAttribute('aria-expanded', 'true');
  pop = { el, btn, outside, esc: esc2 };
}

export function initSoundButtons() {
  $$('[data-sound-btn]').forEach((b) => {
    b.setAttribute('aria-haspopup', 'dialog');
    b.addEventListener('click', (e) => { e.stopPropagation(); openSoundPopover(b); });
  });
  syncSoundButtons();
}
export function closeSoundPopover() { closePop(); }
