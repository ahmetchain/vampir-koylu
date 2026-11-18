// Görünüm düzenleyici: karakter (12), renk (20), şapka, aksesuar, kıyafet (üst + alt), ev. Öğe tabloları, yuva (slot)
// kuralları ve kilitler tek tabloda: ./cosmetics.js (sunucu kopyası lib/cosmetics.js).
//  - Aynı yuvadaki iki öğe birlikte takılamaz: yeni seçilen eskisini çıkarır ve kısa bir not gösterilir
//    (ör. "Kral tacı takıldı, Takke çıkarıldı.").
//  - Karakterin kendi parçasıyla çakışan öğe seçilemez ("Bu karakterin zaten sakalı var."); karakter değişince
//    çakışan öğe çıkar.
//  - Puanla/sahiplikle açılan öğeler kilitli görünür (sahip/admin hepsini açık görür); kilidi sunucu doğrular.
// Menüde profile kaydeder (PATCH /api/me), odada `player:look` gönderir (alınmış renkler kapalı).
import { ctx, send, on, emitLocal } from './ctx.js';
import { Api } from './api.js';
import { openSheet, toast } from './kit.js';
import { esc, sfx } from './util.js';
import { icon, hatIcon, accIcon, topIcon, bottomIcon } from './icons.js';
import {
  COLORS, COLOR_NAMES, HAT_NAMES, SKIN_NAMES, ACC_NAMES, TOP_NAMES, BOTTOM_NAMES, HOUSES, pointsOf,
  resolveLook, skinBlock, lockOf, conflictNote, skinBlockNote,
} from './data.js';
import { preview, isFallback, lookNames, houseThumbs } from './world-host.js';

let open = null;
const ITEM_FIELDS = ['hat', 'acc', 'top', 'bottom'];

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
  // eski kayıtlarda acc/top/bottom/house yok: 0 sayılır
  const full = (l) => ({ acc: 0, top: 0, bottom: 0, house: 0, ...l });
  let look = full(roomMode ? ctx.state.me.look : ctx.user.look);
  let tab = 'skin';
  let note = '';
  const skins = lookNames('SKINS', SKIN_NAMES);
  const hats = lookNames('HATS', HAT_NAMES);
  const accs = lookNames('ACCS', ACC_NAMES);
  const tops = lookNames('TOPS', TOP_NAMES);
  const bottoms = lookNames('BOTTOMS', BOTTOM_NAMES);
  const names = { hat: hats, acc: accs, top: tops, bottom: bottoms };
  const icons = { hat: hatIcon, acc: accIcon, top: topIcon, bottom: bottomIcon };

  const body = document.createElement('div');
  body.className = 'look';
  body.innerHTML = `
    <div class="look-stage"><div class="look-fig" style="position:absolute;inset:0 0 26px"></div><div class="look-name"></div></div>
    <div class="seg look-tabs" role="tablist">
      <button type="button" class="seg-btn" data-tab="skin">Karakter</button>
      <button type="button" class="seg-btn" data-tab="color">Renk</button>
      <button type="button" class="seg-btn" data-tab="hat">Şapka</button>
      <button type="button" class="seg-btn" data-tab="acc">Aksesuar</button>
      <button type="button" class="seg-btn" data-tab="wear">Kıyafet</button>
      <button type="button" class="seg-btn" data-tab="house">Evim</button>
    </div>
    <p class="look-note" role="status" aria-live="polite" hidden></p>
    <div class="opt-grid" role="listbox"></div>
    ${roomMode ? '<p class="muted small" style="margin:0">Seçimin profiline de kaydedilir. Başka oyuncunun rengini seçemezsin.</p>' : '<p class="muted small" style="margin:0">Görünümün profiline kaydedilir ve katıldığın odalarda kullanılır.</p>'}`;
  const pv = preview(body.querySelector('.look-fig'), look, { turntable: true });
  const grid = body.querySelector('.opt-grid');
  const nameEl = body.querySelector('.look-name');
  const noteEl = body.querySelector('.look-note');
  const owner = !!(ctx.user && ctx.user.ownerLooks);   // yalnızca gösterim; kilidi sunucu doğrular
  const points = () => (ctx.user && ctx.user.admin ? Infinity : pointsOf(ctx.user && ctx.user.stats));
  const who = () => ({ owner, points: points() });

  // Küçük ev önizlemesi: gerçek 3B modelden alınmış görüntü; 3B yoksa/hazır değilse basit SVG yedeği
  let thumbs3d = null;
  houseThumbs(HOUSES.length).then((t) => { thumbs3d = t; if (open && tab === 'house') render(); });
  function houseThumb(h, i) {
    if (thumbs3d && thumbs3d[i]) return `<img class="house-thumb" src="${thumbs3d[i]}" alt="" width="88" height="72" draggable="false">`;
    return `<svg class="house-thumb" viewBox="0 0 64 52" aria-hidden="true">
      <rect x="0" y="46" width="64" height="6" rx="3" fill="rgba(255,255,255,.08)"/>
      <rect x="12" y="22" width="40" height="25" rx="2" fill="${h.wall}"/>
      <path d="M7 24L32 6l25 18z" fill="${h.roof}"/>
      ${h.dome ? `<circle cx="32" cy="8" r="5.5" fill="${h.dome}"/><path d="M32 0v4" stroke="${h.dome}" stroke-width="2" stroke-linecap="round"/>` : ''}
      <rect x="27" y="32" width="10" height="15" rx="4" fill="#4a2f1f"/>
      <rect x="15" y="29" width="8" height="8" rx="1.5" fill="#ffd27a"/><rect x="41" y="29" width="8" height="8" rx="1.5" fill="#ffd27a"/>
    </svg>`;
  }
  function houseLock(h) {
    if (h.owner) return owner ? null : 'Yalnızca sahibine özel';
    return points() >= h.min ? null : `${h.min} puan gerek`;
  }

  function taken() {
    const m = new Map();
    if (!roomMode || !ctx.state) return m;
    for (const p of ctx.state.players) if (p.id !== ctx.state.me.id && !p.left) m.set(p.look.color, p.name);
    return m;
  }

  function showNote(text) {
    note = text || '';
    noteEl.textContent = note;
    noteEl.hidden = !note;
  }

  // Öğe düğmesi: kilit (puan/sahip) ya da karakterin kendi parçasıyla çakışma notu
  function itemButton(field, i, label) {
    const cur = (look[field] | 0) === i;
    const lock = lockOf(field, i, who());
    const blk = i ? skinBlock(look.skin, field, i) : null;
    const why = lock || (blk ? `Karakterin kendi ${blk.what} var` : '');
    return `<button type="button" class="opt${cur ? ' on' : ''}${why ? ' locked' : ''}" data-f="${field}" data-v="${i}" aria-selected="${cur}"
      ${lock ? `aria-disabled="true" data-lock="${esc(lock)}"` : ''}${blk && !lock ? ` aria-disabled="true" data-block="${esc(skinBlockNote(blk))}"` : ''}>
      ${icons[field](i)}${esc(label)}${why ? `${lock ? icon('lock', 'taken') : ''}<small class="lock-note">${esc(why)}</small>` : ''}</button>`;
  }

  function render() {
    body.querySelectorAll('[data-tab]').forEach((b) => b.classList.toggle('on', b.dataset.tab === tab));
    const bits = [skins[look.skin], COLOR_NAMES[look.color]];
    for (const f of ITEM_FIELDS) if (look[f]) bits.push(names[f][look[f]]);
    nameEl.textContent = bits.join(' · ');
    // Ev görünümü karakter önizlemesinde değil, köyde görünür: sekme adı bunu söyler
    if (tab === 'house') nameEl.textContent = `Evim: ${HOUSES[look.house | 0].name}`;
    // şapka ve aksesuar seçerken önizleme yüze yaklaşır; kıyafette gövdeye yarı yakın plan
    if (pv.setFocus) pv.setFocus(tab === 'hat' || tab === 'acc' ? 'head' : tab === 'wear' ? 'wear' : 'body');
    if (tab === 'color') {
      const t = taken();
      grid.innerHTML = COLORS.map((c, i) => {
        const owner = t.get(i);
        return `<button type="button" class="opt${look.color === i ? ' on' : ''}" data-f="color" data-v="${i}" ${owner ? 'disabled' : ''}
          aria-label="${esc(COLOR_NAMES[i])}${owner ? ` (${esc(owner)})` : ''}" aria-selected="${look.color === i}">
          <span class="opt-sw" style="background:${c}"></span>${COLOR_NAMES[i]}
          ${owner ? `${icon('lock', 'taken')}<small>${esc(owner)}</small>` : ''}</button>`;
      }).join('');
    } else if (tab === 'house') {
      grid.innerHTML = `<p class="house-points">Puanın: <b>${points() === Infinity ? '∞' : points()}</b> <span>oynanan oyun + 2 × galibiyet</span></p>`
        + HOUSES.map((h, i) => {
          const lock = houseLock(h);
          return `<button type="button" class="opt house-card${(look.house | 0) === i ? ' on' : ''}${lock ? ' locked' : ''}" data-f="house" data-v="${i}"
            aria-selected="${(look.house | 0) === i}" ${lock ? `aria-disabled="true" data-lock="${esc(lock)}"` : ''}>
            ${houseThumb(h, i)}<span>${esc(h.name)}</span>
            ${lock ? `${icon('lock', 'taken')}<small class="lock-note">${esc(lock)}</small>` : (look.house | 0) === i ? '<small>Seçili</small>' : ''}</button>`;
        }).join('');
    } else if (tab === 'wear') {
      grid.innerHTML = '<h3 class="opt-head">Üst giysi</h3>' + tops.map((n, i) => itemButton('top', i, n)).join('')
        + '<h3 class="opt-head">Alt giysi ve ayakkabı</h3>' + bottoms.map((n, i) => itemButton('bottom', i, n)).join('');
    } else if (tab === 'acc' || tab === 'hat') {
      grid.innerHTML = names[tab].map((n, i) => itemButton(tab, i, n)).join('');
    } else {
      const draw = isFallback() && window.VKWorldFallback;
      grid.innerHTML = skins.map((s, i) => `<button type="button" class="opt${look.skin === i ? ' on' : ''}" data-f="skin" data-v="${i}" aria-selected="${look.skin === i}">
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
    if ((look[field] | 0) === v) return;
    const prev = look;
    // yuva çakışması: yeni seçilen önce yerleşir, aynı yuvadaki eski öğe çıkar (karakter değişince de çakışan öğe çıkar)
    const res = resolveLook({ ...look, [field]: v }, ITEM_FIELDS.includes(field) ? [field] : []);
    look = full(res.look);
    showNote(res.removed.map(conflictNote).join(' '));
    if (res.removed.length) toast(note, 'info', 2600);
    pv.setLook(look);
    sfx('click');
    render();
    if (roomMode) {
      // sunucu aynı tabloyla aynı çakışma çözümünü uygular; durum yayını gelince görünüm eşitlenir
      const r = await send('player:look', { [field]: v });
      if (!r.ok) { look = prev; showNote(''); pv.setLook(look); render(); if (r.error) toast(r.error, 'error'); }
    } else {
      clearTimeout(saveTimer);
      // çıkarılan isteğe bağlı öğeler açıkça 0 gönderilir (eksik alan "değişmedi" sayılır)
      const patch = { ...look };
      saveTimer = setTimeout(async () => {
        try {
          const r = await Api.saveLook(patch);
          ctx.user = r.user;
          emitLocal('user');
        } catch (e) { toast(e.message, 'error'); }
      }, 350);
      ctx.user = { ...ctx.user, look };
      emitLocal('user');
    }
  }

  body.addEventListener('click', (e) => {
    const t = e.target.closest('[data-tab]');
    if (t) { tab = t.dataset.tab; showNote(''); sfx('click'); render(); return; }
    const o = e.target.closest('.opt[data-v]:not(:disabled)');
    if (!o) return;
    if (o.dataset.lock) { sfx('click'); toast(`Kilitli: ${o.dataset.lock}.`, 'error'); return; }
    if (o.dataset.block) { sfx('click'); showNote(o.dataset.block); toast(o.dataset.block, 'error'); return; }
    choose(o.dataset.f || tab, Number(o.dataset.v));
  });

  const unsub = on('state', () => {
    if (!open) return;
    if (!inRoom()) { open.close(); return; }
    look = full(ctx.state.me.look);
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
