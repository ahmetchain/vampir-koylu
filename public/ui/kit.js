// Ortak arayüz parçaları: bildirim (toast), alt sayfa (sheet), onay ve giriş pencereleri.
import { $, esc, frag, sfx } from './util.js';
import { icon } from './icons.js';

export function toast(message, kind = 'info', ms = 3400) {
  const host = $('#toasts');
  if (!host || !message) return;
  // Aynı mesaj üst üste gelmesin.
  for (const t of host.children) if (t.dataset.msg === message) t.remove();
  const el = frag(`<div class="toast toast-${kind}" role="status">${icon(kind === 'error' ? 'info' : kind === 'ok' ? 'check' : 'bell')}<span>${esc(message)}</span></div>`);
  el.dataset.msg = message;
  host.appendChild(el);
  while (host.children.length > 3) host.firstElementChild.remove();
  setTimeout(() => el.classList.add('out'), ms);
  setTimeout(() => el.remove(), ms + 400);
}

const openSheets = [];

// Alt sayfa: telefonda alttan kayar, geniş ekranda ortada pencere olur. İçerik kendi içinde kayar.
// opts: { title, body (html|Element), cls, onClose, footer (html), wide, parchment }
export function openSheet(opts) {
  const host = $('#sheets');
  const el = frag(`
    <div class="sheet-wrap ${opts.cls || ''}" role="dialog" aria-modal="true" aria-label="${esc(opts.title || '')}">
      <div class="sheet-backdrop" data-close></div>
      <section class="sheet ${opts.wide ? 'sheet-wide' : ''} ${opts.parchment ? 'sheet-parchment' : ''}">
        <header class="sheet-head">
          <span class="sheet-grab" aria-hidden="true"></span>
          <h2 class="sheet-title">${opts.titleHtml || esc(opts.title || '')}</h2>
          <button type="button" class="iconbtn sheet-x" data-close aria-label="Kapat">${icon('close')}</button>
        </header>
        <div class="sheet-body"></div>
        ${opts.footer ? `<footer class="sheet-foot">${opts.footer}</footer>` : ''}
      </section>
    </div>`);
  const body = el.querySelector('.sheet-body');
  if (typeof opts.body === 'string') body.innerHTML = opts.body;
  else if (opts.body) body.appendChild(opts.body);
  host.appendChild(el);
  const api = {
    el, body,
    foot: el.querySelector('.sheet-foot'),
    closed: false,
    close() {
      if (api.closed) return;
      api.closed = true;
      el.classList.add('closing');
      const i = openSheets.indexOf(api);
      if (i >= 0) openSheets.splice(i, 1);
      setTimeout(() => el.remove(), 220);
      if (opts.onClose) opts.onClose();
    },
    setTitle(t) { el.querySelector('.sheet-title').textContent = t; },
  };
  el.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) { sfx('click'); api.close(); }
  });
  // Tutamaktan aşağı kaydırınca kapanır.
  dragToClose(el.querySelector('.sheet-head'), el.querySelector('.sheet'), () => api.close());
  openSheets.push(api);
  requestAnimationFrame(() => el.classList.add('open'));
  return api;
}

export function closeAllSheets() {
  for (const s of openSheets.slice()) s.close();
}
export function topSheet() {
  return openSheets[openSheets.length - 1] || null;
}

export function dragToClose(handle, panel, onClose) {
  let y0 = null; let dy = 0;
  handle.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    y0 = e.clientY; dy = 0;
    panel.style.transition = 'none';
    try { handle.setPointerCapture(e.pointerId); } catch { /* yoksay */ }
  });
  handle.addEventListener('pointermove', (e) => {
    if (y0 == null) return;
    dy = Math.max(0, e.clientY - y0);
    panel.style.transform = `translateY(${dy}px)`;
  });
  const end = () => {
    if (y0 == null) return;
    y0 = null;
    panel.style.transition = '';
    panel.style.transform = '';
    if (dy > 70) onClose();
  };
  handle.addEventListener('pointerup', end);
  handle.addEventListener('pointercancel', end);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && openSheets.length) openSheets[openSheets.length - 1].close();
});

export function confirmBox(title, text, okLabel = 'Evet', danger = true) {
  return new Promise((resolve) => {
    let answer = false;
    const s = openSheet({
      title,
      cls: 'sheet-small',
      body: `<p class="muted">${esc(text)}</p>`,
      footer: `<button type="button" class="btn btn-ghost" data-close>Vazgeç</button>
               <button type="button" class="btn ${danger ? 'btn-danger' : 'btn-primary'}" data-ok>${esc(okLabel)}</button>`,
      onClose: () => resolve(answer),
    });
    s.el.querySelector('[data-ok]').addEventListener('click', () => { answer = true; s.close(); });
  });
}

// Tek alanlı form (ör. oda şifresi). submit(value) => Promise<string|null> (hata mesajı ya da null).
export function promptBox({ title, label, placeholder = '', type = 'text', okLabel = 'Tamam', maxlength = 40, intro = '', submit }) {
  const s = openSheet({
    title,
    cls: 'sheet-small',
    body: `<form class="form" novalidate>
        ${intro ? `<p class="muted">${intro}</p>` : ''}
        <label class="field"><span>${esc(label)}</span>
          <input class="input" name="v" type="${type}" maxlength="${maxlength}" placeholder="${esc(placeholder)}" autocomplete="off" autocapitalize="off" spellcheck="false">
        </label>
        <p class="form-error" aria-live="polite"></p>
        <div class="row-end">
          <button type="button" class="btn btn-ghost" data-close>Vazgeç</button>
          <button type="submit" class="btn btn-primary">${esc(okLabel)}</button>
        </div>
      </form>`,
  });
  const form = s.body.querySelector('form');
  const input = form.querySelector('input');
  const err = form.querySelector('.form-error');
  setTimeout(() => input.focus(), 60);
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.disabled = true;
    err.textContent = '';
    try {
      const error = await submit(input.value, s);
      if (error) err.textContent = error;
      else s.close();
    } finally {
      btn.disabled = false;
    }
  });
  return s;
}
