// Oda kurma ve lobi ayarları formu (aynı bileşen). Rol dağıtım kuralları açıklamalı ve canlı önizlemeli.
import { ctx, send, iAmHost } from './ctx.js';
import { openSheet } from './kit.js';
import { esc, clamp, sfx, store } from './util.js';
import { icon, emblem } from './icons.js';
import { ROLES, TOGGLE_ROLES, DEFAULT_ROLES, distribution, distributionPlan, countRoles, FRAMER_MIN, THIEF_MIN, MIN_PLAYERS, MAX_PLAYERS, EVENTS, EVENT_FREQ, EVENTS_UI } from './data.js';

// v2: eski kayıtlarda yalnızca Doktor+Kahin açıktı; yeni varsayılan (bütün roller açık) bir kez uygulansın.
const LAST_KEY = 'vk.lastSettings.v2';
const AI_KEY = 'vk.aiAvailable';

export function distChips(list) {
  return countRoles(list).map(({ role, n }) => `<span class="chip">${emblem(role, 's')}${n > 1 ? `${n} × ` : ''}${ROLES[role].name}</span>`).join('');
}

// Rastgele kısım: "7 özel rolden 6'sı çıkacak" + aday roller.
// Aday havuzu: { pick, from: [rol], maybe?: [rol | { role, chance }] }.
export function poolNote(pool) {
  if (!pool) return '';
  const chip = (r) => (ROLES[r] ? `<span class="chip">${emblem(r, 's')}${ROLES[r].name}</span>` : '');
  const from = (pool.from || []).filter((r) => ROLES[r]);
  let out = '';
  const pick = Math.max(0, (pool.pick || 0) - (pool.helpersMax || 0));   // yardımcı yerleri ayrı yazılır
  if (from.length && pick) {
    out += `<p class="muted" style="margin:6px 0 0">${pick >= from.length ? 'Bu özel roller çıkacak:' : `Bu ${from.length} özel rolden ${pick} tanesi rastgele çıkacak:`}</p><div class="dist">${from.map(chip).join('')}</div>`;
  }
  const maybe = [].concat(pool.maybe || []).map((m) => (typeof m === 'string' ? { role: m } : m)).filter((m) => m && ROLES[m.role]);
  const helpers = pool.helpers || 0;
  if (helpers > 0 && maybe.length) {
    // Yardımcı kesin, hangisi olduğu belli değil (sunucu: rolePool.helpers / helpersMax).
    out += `<p class="muted" style="margin:6px 0 0">${helpers} yardımcı: ${maybe.map((m) => ROLES[m.role].name).join(' ya da ')}${(pool.helpersMax || 0) > helpers ? '; belki bir yardımcı daha' : ''}.</p>`;
  } else if (maybe.length) {
    out += `<p class="muted" style="margin:6px 0 0">Belki: ${maybe.map((m) => `${ROLES[m.role].name}${m.chance ? ` (%${Math.round(m.chance * (m.chance <= 1 ? 100 : 1))})` : ''}`).join(', ')}. Her oyunda çıkmayabilir.</p>`;
  }
  return out;
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
      <div class="stepper" data-step="nightSec" data-min="10" data-max="60" data-inc="5">
        <button type="button" class="iconbtn" data-d="-1" ${dis} aria-label="Azalt">${icon('minus')}</button><output>${s.nightSec} sn</output>
        <button type="button" class="iconbtn" data-d="1" ${dis} aria-label="Artır">${icon('plus')}</button></div></div>
    <div class="set-row"><label>Gündüz süresi</label>
      <div class="stepper" data-step="daySec" data-min="30" data-max="300" data-inc="15">
        <button type="button" class="iconbtn" data-d="-1" ${dis} aria-label="Azalt">${icon('minus')}</button><output>${s.daySec} sn</output>
        <button type="button" class="iconbtn" data-d="1" ${dis} aria-label="Artır">${icon('plus')}</button></div></div>
    <div class="set-row"><label for="rf-reveal">Ölenlerin rolü açıklansın</label>
      <span class="switch"><input type="checkbox" id="rf-reveal" name="revealRoles" ${s.revealRoles ? 'checked' : ''} ${dis}><i></i></span>
      <small>Kapalıysa ölen oyuncuların rolü oyun bitene kadar gizli kalır (Soytarı asılırsa yine açıklanır).</small></div>
    <div class="set-row"><label for="rf-random">Rastgele roller</label>
      <span class="switch"><input type="checkbox" id="rf-random" name="roleMode" ${s.roleMode !== 'all' ? 'checked' : ''} ${dis}><i></i></span>
      <small>Açıkken açık roller arasından her oyunda rastgele bir kısmı çıkar; kimse neyle karşılaşacağını tam bilemez. Kapalıysa açık rollerin hepsi (sığdığı kadar) dağıtılır.</small></div>
    ${s.aiAvailable ? `<div class="set-row"><label for="rf-smart">Akıllı botlar</label>
      <span class="switch"><input type="checkbox" id="rf-smart" name="smartBots" ${s.smartBots !== false ? 'checked' : ''} ${dis}><i></i></span>
      <small>Botlar rolüne göre düşünür, konuşur, soru sorar, ikna edilebilir ve blöf yapar. Açıkken sohbet mesajları ve oyuncu adları bir yapay zekâ hizmetine gönderilir.</small></div>` : ''}
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
          <span><b>${ROLES[r].name}</b><small>${ROLES[r].short}</small>${r === 'iftiraci' || r === 'temizlikci' || r === 'hirsiz' ? `<small class="warn">${r === 'hirsiz' ? THIEF_MIN : FRAMER_MIN}+ oyuncuda dağıtılır</small>` : ''}</span>
          <span class="check">${icon('check')}</span>
        </button>`).join('')}
    </div>
    <details class="box" open>
      <summary>${icon('info')}Roller nasıl dağıtılır?</summary>
      <div class="explain">
        <p>Vampir sayısı oyuncu sayısına göre belirlenir: 5–9 kişide 1, 10–14 kişide 2, 15 ve üstünde 3 vampir.</p>
        <p>İftiracı ve Temizlikçi vampirlerin yardımcılarıdır; en az ${FRAMER_MIN} oyuncuda dağıtılırlar. Rastgele dağıtımda açık olanlardan biri her zaman çıkar, 13 ve üstü oyuncuda ikisi de açıksa ikincisi %50 ihtimalle gelir. Klasik dağıtımda açık olanların hepsi gelir.</p>
        <p>Açık özel roller şu sırayla, yer kaldıkça eklenir: Doktor, Kahin, Gözcü, Gardiyan, Cadı, Avcı, Muhtar, Soytarı, Deli, Hırsız. Hırsız sadece en az ${THIEF_MIN} oyuncuda dağıtılır. 8 kişiden az oyunda en az bir sade köylü kalır. Roller sığmazsa hangilerinin çıkacağı her oyun rastgele seçilir (kahin/gözcüden en az biri hep çıkar).</p>
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
    const plan = distributionPlan(n, s.roles, s.roleMode === 'all' ? 'all' : 'random');
    root.querySelector('[data-dist]').innerHTML = distChips(plan.list) + poolNote(plan.pool);
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
  root.querySelector('[name=roleMode]').addEventListener('change', (e) => { s.roleMode = e.target.checked ? 'random' : 'all'; update(); });
  const smart = root.querySelector('[name=smartBots]');
  if (smart) smart.addEventListener('change', (e) => { s.smartBots = e.target.checked; onChange && onChange(); });
  root.querySelector('[data-sample]').addEventListener('input', update);
  update();
}

export function openCreateRoom() {
  const last = store.get(LAST_KEY, null) || {};
  const s = {
    roomName: `${ctx.user.username} Köyü`.slice(0, 24),
    nightSec: Math.min(60, last.nightSec || 20), daySec: last.daySec || 120, roleMode: last.roleMode || 'random',
    revealRoles: last.revealRoles !== undefined ? last.revealRoles : true,
    events: EVENTS_UI ? (last.events || 'some') : 'off',
    roles: { ...DEFAULT_ROLES, ...(last.roles || {}) },
    smartBots: last.smartBots !== false,
    aiAvailable: Boolean(store.get(AI_KEY, false)),   // son görülen oda durumundan (sunucuda anahtar var mı)
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
    const settings = { nightSec: s.nightSec, daySec: s.daySec, revealRoles: s.revealRoles, events: s.events, roleMode: s.roleMode, roles: s.roles, smartBots: s.smartBots };
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
  const s = {
    nightSec: cur.nightSec, daySec: cur.daySec, revealRoles: cur.revealRoles, events: EVENTS_UI ? (cur.events || 'some') : 'off',
    roleMode: cur.roleMode || 'random', roles: { ...cur.roles }, smartBots: cur.smartBots !== false, aiAvailable: Boolean(st.room.aiAvailable),
  };
  store.set(AI_KEY, Boolean(st.room.aiAvailable));
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
      const settings = { nightSec: s.nightSec, daySec: s.daySec, revealRoles: s.revealRoles, events: s.events, roleMode: s.roleMode, roles: s.roles, smartBots: s.smartBots };
      const res = await send('room:settings', { settings });
      if (res.ok) {
        store.set(LAST_KEY, settings);
        sheet.close();
      }
    });
  }
}
