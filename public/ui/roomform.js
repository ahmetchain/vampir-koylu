// Oda kurma ve lobi ayarları formu (aynı bileşen). Rol dağıtım kuralları açıklamalı ve canlı önizlemeli.
import { ctx, send, iAmHost } from './ctx.js';
import { openSheet } from './kit.js';
import { esc, clamp, sfx, store } from './util.js';
import { icon, emblem } from './icons.js';
import { ROLES, TOGGLE_ROLES, DEFAULT_ROLES, distribution, countRoles, FRAMER_MIN, MIN_PLAYERS, MAX_PLAYERS, EVENTS, EVENT_FREQ, EVENTS_UI } from './data.js';

const LAST_KEY = 'vk.lastSettings';

export function distChips(list) {
  return countRoles(list).map(({ role, n }) => `<span class="chip">${emblem(role, 's')}${n > 1 ? `${n} × ` : ''}${ROLES[role].name}</span>`).join('');
}

function formHTML(s, editable, withRoomFields, sampleN) {
  const dis = editable ? '' : 'disabled';
  return `
  <form class="form" novalidate>
    ${withRoomFields ? `
    <label class="field"><span>Oda adı</span>
      <input class="input" name="roomName" maxlength="24" value="${esc(s.roomName || '')}" placeholder="ör. Cuma Gecesi" required></label>
    <label class="field"><span>Oda şifresi <small class="muted">(isteğe bağlı)</small></span>
      <input class="input" name="password" maxlength="20" placeholder="Boş bırakırsan herkes katılabilir" autocomplete="off"></label>` : ''}
    <div class="section-title">Süreler</div>
    <div class="set-row"><label>Gece süresi</label>
      <div class="stepper" data-step="nightSec" data-min="15" data-max="120" data-inc="5">
        <button type="button" class="iconbtn" data-d="-1" ${dis} aria-label="Azalt">${icon('minus')}</button><output>${s.nightSec} sn</output>
        <button type="button" class="iconbtn" data-d="1" ${dis} aria-label="Artır">${icon('plus')}</button></div></div>
    <div class="set-row"><label>Gündüz süresi</label>
      <div class="stepper" data-step="daySec" data-min="30" data-max="300" data-inc="15">
        <button type="button" class="iconbtn" data-d="-1" ${dis} aria-label="Azalt">${icon('minus')}</button><output>${s.daySec} sn</output>
        <button type="button" class="iconbtn" data-d="1" ${dis} aria-label="Artır">${icon('plus')}</button></div></div>
    <div class="set-row"><label for="rf-reveal">Ölenlerin rolü açıklansın</label>
      <span class="switch"><input type="checkbox" id="rf-reveal" name="revealRoles" ${s.revealRoles ? 'checked' : ''} ${dis}><i></i></span>
      <small>Kapalıysa ölen oyuncuların rolü oyun bitene kadar gizli kalır (Soytarı asılırsa yine açıklanır).</small></div>
    ${EVENTS_UI ? `<div class="section-title">Köy olayları</div>
    <div class="seg" role="radiogroup" aria-label="Köy olayları" data-evseg>
      ${EVENT_FREQ.map(([k, l]) => `<button type="button" role="radio" class="seg-btn${(s.events || 'some') === k ? ' on' : ''}" data-ev="${k}" aria-checked="${(s.events || 'some') === k}" ${dis}>${l}</button>`).join('')}
    </div>
    <p class="muted small" style="margin:6px 0 0"><span data-evtxt>${esc((EVENT_FREQ.find((x) => x[0] === (s.events || 'some')) || EVENT_FREQ[1])[2])}</span>
      Tellal duyurur: ${Object.values(EVENTS).map((e) => e.name).join(', ')}. Ayrıntılar "Nasıl Oynanır"da.</p>` : ''}
    <div class="section-title">Özel roller</div>
    <div class="role-toggles">
      ${TOGGLE_ROLES.map((r) => `
        <button type="button" class="rtoggle${s.roles[r] ? ' on' : ''}" data-role="${r}" aria-pressed="${!!s.roles[r]}" ${dis}>
          ${emblem(r, 'm')}
          <span><b>${ROLES[r].name}</b><small>${ROLES[r].short}</small>${r === 'iftiraci' ? `<small class="warn">${FRAMER_MIN}+ oyuncuda dağıtılır</small>` : ''}</span>
          <span class="check">${icon('check')}</span>
        </button>`).join('')}
    </div>
    <details class="box" open>
      <summary>${icon('info')}Roller nasıl dağıtılır?</summary>
      <div class="explain">
        <p>Vampir sayısı oyuncu sayısına göre belirlenir: 5–9 kişide 1, 10–14 kişide 2, 15 ve üstünde 3 vampir.</p>
        <p>İftiracı açıksa ve en az ${FRAMER_MIN} oyuncu varsa vampirlere ek olarak 1 İftiracı dağıtılır.</p>
        <p>Açık özel roller şu sırayla, yer kaldıkça eklenir: Doktor, Kahin, Gözcü, Gardiyan, Cadı, Avcı, Muhtar, Soytarı. Her oyunda en az bir sade köylü kalır.</p>
      </div>
      <div class="row-between" style="margin-top:8px"><b class="small">Örnek: <span data-n>${sampleN}</span> oyuncu</b></div>
      <input type="range" min="${MIN_PLAYERS}" max="${MAX_PLAYERS}" value="${sampleN}" data-sample aria-label="Örnek oyuncu sayısı">
      <div class="dist" data-dist></div>
    </details>
    <p class="form-error" aria-live="polite"></p>
  </form>`;
}

function bindForm(root, s, onChange) {
  const update = () => {
    const n = Number(root.querySelector('[data-sample]').value);
    root.querySelector('[data-n]').textContent = n;
    root.querySelector('[data-dist]').innerHTML = distChips(distribution(n, s.roles));
    onChange && onChange();
  };
  root.addEventListener('click', (e) => {
    const st = e.target.closest('.stepper [data-d]');
    if (st) {
      const box = st.closest('.stepper');
      const k = box.dataset.step;
      s[k] = clamp(s[k] + Number(st.dataset.d) * Number(box.dataset.inc), Number(box.dataset.min), Number(box.dataset.max));
      box.querySelector('output').textContent = `${s[k]} sn`;
      sfx('click');
      update();
      return;
    }
    const ev = e.target.closest('[data-ev]');
    if (ev && !ev.disabled) {
      s.events = ev.dataset.ev;
      root.querySelectorAll('[data-ev]').forEach((b) => { b.classList.toggle('on', b === ev); b.setAttribute('aria-checked', String(b === ev)); });
      const hint = root.querySelector('[data-evtxt]');
      if (hint) hint.textContent = (EVENT_FREQ.find((x) => x[0] === s.events) || EVENT_FREQ[1])[2];
      sfx('click');
      onChange && onChange();
      return;
    }
    const rt = e.target.closest('.rtoggle[data-role]');
    if (rt && !rt.disabled) {
      const r = rt.dataset.role;
      s.roles[r] = !s.roles[r];
      rt.classList.toggle('on', s.roles[r]);
      rt.setAttribute('aria-pressed', String(s.roles[r]));
      sfx('click');
      update();
    }
  });
  root.querySelector('[name=revealRoles]').addEventListener('change', (e) => { s.revealRoles = e.target.checked; onChange && onChange(); });
  root.querySelector('[data-sample]').addEventListener('input', update);
  update();
}

export function openCreateRoom() {
  const last = store.get(LAST_KEY, null) || {};
  const s = {
    roomName: `${ctx.user.username} Köyü`.slice(0, 24),
    nightSec: last.nightSec || 30, daySec: last.daySec || 120,
    revealRoles: last.revealRoles !== undefined ? last.revealRoles : true,
    events: EVENTS_UI ? (last.events || 'some') : 'off',
    roles: { ...DEFAULT_ROLES, ...(last.roles || {}) },
  };
  const sheet = openSheet({
    title: 'Oda Kur',
    body: formHTML(s, true, true, 7),
    footer: `<button type="button" class="btn btn-ghost" data-close>Vazgeç</button>
             <button type="button" class="btn btn-primary" data-create>${icon('house')}Odayı Kur</button>`,
  });
  const form = sheet.body.querySelector('form');
  bindForm(form, s);
  const err = form.querySelector('.form-error');
  const submit = async () => {
    const roomName = form.roomName.value.trim().replace(/\s+/g, ' ');
    if (roomName.length < 3) { err.textContent = 'Oda adı en az 3 karakter olmalı.'; form.roomName.focus(); return; }
    const btn = sheet.foot.querySelector('[data-create]');
    btn.disabled = true;
    err.textContent = '';
    const settings = { nightSec: s.nightSec, daySec: s.daySec, revealRoles: s.revealRoles, events: s.events, roles: s.roles };
    store.set(LAST_KEY, settings);
    const res = await send('room:create', { roomName, password: form.password.value, settings }, { quiet: true });
    btn.disabled = false;
    if (!res.ok) { err.textContent = res.error || 'Oda kurulamadı.'; return; }
    ctx.roomId = res.roomId;
    store.set('vk.room', res.roomId);
    sheet.close();
  };
  sheet.foot.querySelector('[data-create]').addEventListener('click', submit);
  form.addEventListener('submit', (e) => { e.preventDefault(); submit(); });
  return sheet;
}

export function openRoomSettings() {
  const st = ctx.state;
  if (!st) return;
  const host = iAmHost() && st.room.phase === 'lobby';
  const cur = st.room.settings;
  const s = { nightSec: cur.nightSec, daySec: cur.daySec, revealRoles: cur.revealRoles, events: EVENTS_UI ? (cur.events || 'some') : 'off', roles: { ...cur.roles } };
  const n = Math.max(MIN_PLAYERS, st.players.filter((p) => !p.left).length);
  const sheet = openSheet({
    title: host ? 'Oda Ayarları' : 'Oda Kuralları',
    body: (host ? '' : '<p class="note note-moon">Ayarları sadece oda sahibi değiştirebilir.</p>') + formHTML(s, host, false, Math.min(MAX_PLAYERS, n)),
    footer: host
      ? `<button type="button" class="btn btn-ghost" data-close>Vazgeç</button><button type="button" class="btn btn-primary" data-save>${icon('check')}Kaydet</button>`
      : '<button type="button" class="btn btn-primary" data-close>Tamam</button>',
  });
  const form = sheet.body.querySelector('form');
  bindForm(form, s);
  if (host) {
    sheet.foot.querySelector('[data-save]').addEventListener('click', async () => {
      const res = await send('room:settings', { settings: { nightSec: s.nightSec, daySec: s.daySec, revealRoles: s.revealRoles, events: s.events, roles: s.roles } });
      if (res.ok) {
        store.set(LAST_KEY, { nightSec: s.nightSec, daySec: s.daySec, revealRoles: s.revealRoles, events: s.events, roles: s.roles });
        sheet.close();
      }
    });
  }
}
