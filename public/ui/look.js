// Görünüm düzenleyici: karakter (12), renk (20), şapka (9).
// Menüde profile kaydeder (PATCH /api/me), odada `player:look` gönderir (alınmış renkler kapalı).
import { ctx, send, on, emitLocal } from './ctx.js';
import { Api } from './api.js';
import { openSheet, toast } from './kit.js';
import { esc, sfx } from './util.js';
import { icon, hatIcon } from './icons.js';
import { COLORS, COLOR_NAMES, HAT_NAMES, SKIN_NAMES } from './data.js';
import { preview, isFallback, lookNames } from './world-host.js';

let open = null;

function inRoom() {
  const s = ctx.state;
  return !!(s && s.me && (s.room.phase === 'lobby' || s.room.phase === 'ended'));
}

export function openLookEditor() {
  if (open) return;
  const roomMode = inRoom();
  if (ctx.state && ctx.state.me && !roomMode) {
    toast('Oyun sırasında görünüm değiştirilemez.', 'error');
    return;
  }
  let look = { ...(roomMode ? ctx.state.me.look : ctx.user.look) };
  let tab = 'skin';
  const skins = lookNames('SKINS', SKIN_NAMES);
  const hats = lookNames('HATS', HAT_NAMES);

  const body = document.createElement('div');
  body.className = 'look';
  body.innerHTML = `
    <div class="look-stage"><div class="look-fig" style="position:absolute;inset:0 0 26px"></div><div class="look-name"></div></div>
    <div class="seg look-tabs" role="tablist">
      <button type="button" class="seg-btn" data-tab="skin">Karakter</button>
      <button type="button" class="seg-btn" data-tab="color">Renk</button>
      <button type="button" class="seg-btn" data-tab="hat">Şapka</button>
    </div>
    <div class="opt-grid" role="listbox"></div>
    ${roomMode ? '<p class="muted small" style="margin:0">Seçimin profiline de kaydedilir. Başka oyuncunun rengini seçemezsin.</p>' : '<p class="muted small" style="margin:0">Görünümün profiline kaydedilir ve katıldığın odalarda kullanılır.</p>'}`;
  const pv = preview(body.querySelector('.look-fig'), look, { turntable: true });
  const grid = body.querySelector('.opt-grid');
  const nameEl = body.querySelector('.look-name');
  const thumbs = [];

  function taken() {
    const m = new Map();
    if (!roomMode || !ctx.state) return m;
    for (const p of ctx.state.players) if (p.id !== ctx.state.me.id && !p.left) m.set(p.look.color, p.name);
    return m;
  }

  function render() {
    body.querySelectorAll('[data-tab]').forEach((b) => b.classList.toggle('on', b.dataset.tab === tab));
    nameEl.textContent = `${skins[look.skin]} · ${COLOR_NAMES[look.color]}${look.hat ? ` · ${hats[look.hat]}` : ''}`;
    thumbs.length = 0;
    if (tab === 'color') {
      const t = taken();
      grid.innerHTML = COLORS.map((c, i) => {
        const owner = t.get(i);
        return `<button type="button" class="opt${look.color === i ? ' on' : ''}" data-v="${i}" ${owner ? 'disabled' : ''}
          aria-label="${esc(COLOR_NAMES[i])}${owner ? ` (${esc(owner)})` : ''}" aria-selected="${look.color === i}">
          <span class="opt-sw" style="background:${c}"></span>${COLOR_NAMES[i]}
          ${owner ? `${icon('lock', 'taken')}<small>${esc(owner)}</small>` : ''}</button>`;
      }).join('');
    } else if (tab === 'hat') {
      grid.innerHTML = hats.map((h, i) => `<button type="button" class="opt${look.hat === i ? ' on' : ''}" data-v="${i}" aria-selected="${look.hat === i}">${hatIcon(i)}${esc(h)}</button>`).join('');
    } else {
      const draw = isFallback() && window.VKWorldFallback;
      grid.innerHTML = skins.map((s, i) => `<button type="button" class="opt${look.skin === i ? ' on' : ''}" data-v="${i}" aria-selected="${look.skin === i}">
        ${draw ? '<canvas width="108" height="108"></canvas>' : icon('shirt')}${esc(s)}</button>`).join('');
      if (draw) {
        grid.querySelectorAll('canvas').forEach((cv, i) => {
          const g = cv.getContext('2d');
          g.setTransform(2, 0, 0, 2, 0, 0);
          window.VKWorldFallback.drawFigure(g, 27, 51, 44, { ...look, skin: i, hat: 0 }, {});
        });
      }
    }
  }

  let saveTimer = null;
  async function choose(field, v) {
    if (look[field] === v) return;
    const prev = look[field];
    look = { ...look, [field]: v };
    pv.setLook(look);
    sfx('click');
    render();
    if (roomMode) {
      const res = await send('player:look', { [field]: v });
      if (!res.ok) { look = { ...look, [field]: prev }; pv.setLook(look); render(); }
    } else {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(async () => {
        try {
          const res = await Api.saveLook(look);
          ctx.user = res.user;
          emitLocal('user');
        } catch (e) { toast(e.message, 'error'); }
      }, 350);
      ctx.user = { ...ctx.user, look };
      emitLocal('user');
    }
  }

  body.addEventListener('click', (e) => {
    const t = e.target.closest('[data-tab]');
    if (t) { tab = t.dataset.tab; sfx('click'); render(); return; }
    const o = e.target.closest('.opt[data-v]:not(:disabled)');
    if (o) choose(tab, Number(o.dataset.v));
  });

  const unsub = on('state', () => {
    if (!open) return;
    if (!inRoom()) { open.close(); return; }
    look = { ...ctx.state.me.look };
    pv.setLook(look);
    render();
  });
  render();
  open = openSheet({
    title: 'Karakterin',
    body,
    footer: '<button type="button" class="btn btn-primary" data-close>Tamam</button>',
    onClose: () => { unsub(); pv.dispose(); open = null; },
  });
}

export function lookEditorOpen() { return !!open; }
