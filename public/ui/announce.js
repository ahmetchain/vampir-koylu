// Duyurular: dünya sinematiği (world.announce) + sinematik alt bant (başlık, metin, anlatı).
// Sıraya alınır, dokununca geçilir, dünya sözünü tutmasa da makul bir sürede biter.
import { ctx, emitLocal } from './ctx.js';
import { $, esc, sleep, sfx, vibrate, reducedMotion } from './util.js';
import { icon, emblem } from './icons.js';
import { W } from './world-host.js';
import { appendSystem } from './chat.js';
import { EVENTS, ROLES } from './data.js';

const queue = [];
let playing = false;
let skipFn = null;
let gen = 0;

const PRIVATE = { seer: true, watch: true, promote: true, locked: true, bounced: true, lockreport: true, steal: true, stealfail: true, saved: true, attacked: true, killed: true, rattled: true };
const KIND = {
  start: ['sparkle', '#f4e4c1', 'start'],
  night: ['moon', '#8fb4ff', 'night'],
  death: ['tomb', '#d7263d', 'death'],
  safe: ['sun', '#5fd39a', 'safe'],
  seer: ['role:kahin', null, 'seer'],
  watch: ['role:gozcu', null, 'watch'],
  promote: ['role:vampir', null, 'bite'],
  hunter: ['role:avci', null, 'hunter'],
  shot: ['target', '#ff7a1a', 'shot'],
  nohunt: ['role:avci', null, 'whoosh'],
  hanged: ['vote', '#d7263d', 'hang'],
  nohang: ['hand', '#8fb4ff', 'whoosh'],
  sleep: ['zz', '#8fb4ff', 'night'],
  win: ['trophy', '#ffb347', 'win'],
  left: ['door', '#8fb4ff', 'leave'],
  event: ['bell', '#ffb347', 'bell'],
  locked: ['lock', '#7f9cc4', 'door'],
  bounced: ['lock', '#7f9cc4', 'door'],
  lockreport: ['role:gardiyan', null, 'door'],
  trial: ['gavel', '#ffb347', 'bell'],
  steal: ['role:hirsiz', null, 'whoosh'],
  stealfail: ['role:hirsiz', null, 'door'],
  saved: ['role:doktor', null, 'safe'],
  attacked: ['hand', '#ffb347', 'door'],
  killed: ['tomb', '#d7263d', 'death'],
  rattled: ['lock', '#7f9cc4', 'door'],
};

export function initAnnounce() {
  $('#announce').addEventListener('click', () => { if (skipFn) skipFn(); });
  document.addEventListener('keydown', (e) => {
    if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if ((e.key === ' ' || e.key === 'Enter' || e.key === 'Escape') && playing && skipFn && !$('#announce').hidden) { e.preventDefault(); skipFn(); }
  });
}

// Gece duyurusu: karar süresini yemesin diye küçük, sessiz bir şerit (sıraya girmez, hiçbir şeyi örtmez).
let nbTimer = 0;
function nightBanner(a) {
  let el = $('#night-banner');
  if (!el) {
    el = document.createElement('div');
    el.id = 'night-banner';
    el.className = 'night-banner';
    el.addEventListener('click', () => el.classList.remove('on'));
    document.body.appendChild(el);
  }
  el.innerHTML = `<span class="nb-ic">${icon('moon')}</span><div class="nb-body"><b>${esc(a.title || '')}</b><span>${esc(a.story || a.text || '')}</span></div>`;
  el.classList.add('on');
  clearTimeout(nbTimer);
  nbTimer = setTimeout(() => el.classList.remove('on'), 3000);
  sfx('night');
  W.announce(a, 12000).catch(() => {});
}

export function pushAnnounce(a) {
  if (!a || !a.kind) return;
  // Bu gece öldürüldün: sabaha kadar gece etiketinde gösterilir.
  if (a.kind === 'killed' && ctx.state) ctx.killedRound = ctx.state.room.round;
  if (a.kind !== 'night') queue.push(a);
  // Sohbet geçmişine de kısa bir satır.
  // Özel duyurular (kahin, gözcü, dönüşüm) sadece bu oyuncuya gelir; akışta da öyle olduğu açıkça yazsın.
  appendSystem(`${PRIVATE[a.kind] ? 'Sadece sen görüyorsun · ' : ''}${a.title}: ${a.text}`, a.kind === 'night' ? 'moon' : a.kind === 'death' || a.kind === 'hanged' || a.kind === 'shot' ? 'tomb' : PRIVATE[a.kind] ? 'eye' : 'scroll');
  if (a.kind === 'night') nightBanner(a);
  // "Roller dağıtıldı": mühürlü zarf ekranı zaten "rolünü kimseye gösterme" der; alt kart zarfın önünü kapatmasın.
  // 3B açılış sahnesi arkada yine oynar.
  else if (a.kind === 'start') { queue.pop(); sfx('start'); W.announce(a, 12000).catch(() => {}); }
  else if (!playing) next(gen);
}

export function isAnnouncing() { return playing; }

export function clearAnnounces() {
  gen += 1;
  queue.length = 0;
  if (skipFn) skipFn();
  playing = false;
  const el = $('#announce');
  el.classList.remove('on');
  el.hidden = true;
  const nb = $('#night-banner');
  if (nb) nb.classList.remove('on');
}

async function next(g) {
  if (g !== gen) return;
  const a = queue.shift();
  const el = $('#announce');
  if (!a) {
    playing = false;
    el.classList.remove('on');
    await sleep(320);
    if (!playing && g === gen) { el.hidden = true; emitLocal('announce:idle'); }
    return;
  }
  playing = true;
  let [ic, color, snd] = KIND[a.kind] || ['scroll', '#f4e4c1', null];
  if (a.kind === 'steal' && a.role) ic = `role:${a.role}`;
  const priv = !!PRIVATE[a.kind];
  el.dataset.kind = a.kind;
  el.dataset.private = String(priv);
  const evIc = a.kind === 'event' && a.event && EVENTS[a.event.id] ? EVENTS[a.event.id].icon : null;
  $('#lt-emblem').innerHTML = evIc ? `<span class="emblem emblem-l" style="--rc:${color}">${icon(evIc)}</span>` : ic.startsWith('role:') ? emblem(ic.slice(5), 'l') : `<span class="emblem emblem-l" style="--rc:${color}">${icon(ic)}</span>`;
  $('#lt-title').textContent = a.title || '';
  const text = a.text || '';
  $('#lt-text').textContent = text;
  // Kahin (§15.2): "X şu ikisinden biri" — iki rol amblemi yan yana.
  const two = a.kind === 'seer' && Array.isArray(a.roles) ? a.roles.filter((r) => ROLES[r]) : [];
  const rolesEl = $('#lt-roles');
  rolesEl.hidden = two.length < 2;
  rolesEl.innerHTML = two.length < 2 ? '' : two.map((r) => `<span class="lt-role">${emblem(r, 'l')}<b>${ROLES[r].name}</b></span>`).join('<span class="lt-or">ya da</span>');
  const story = $('#lt-story');
  story.hidden = !a.story;
  const scen = a.kind === 'start' && a.scenario && a.scenario.name ? `<b class="lt-scen">${esc(a.scenario.name)}</b>` : '';
  story.innerHTML = scen + esc(a.story || '');
  const pv = $('#lt-private');
  pv.hidden = !priv;
  pv.innerHTML = `${icon('eye')}Sadece sen görüyorsun`;
  el.hidden = false;
  void el.offsetWidth;
  el.classList.add('on');

  // ses ve titreşim
  if (a.kind === 'win') {
    const won = ctx.state && (a.targets || []).some((t) => t.id === ctx.state.me.id);
    sfx(won ? 'win' : 'lose');
  } else if (snd) sfx(snd);
  if (a.kind === 'death' || a.kind === 'safe') setTimeout(() => sfx('dawn', { volume: 0.6 }), 200);
  if (['death', 'hanged', 'shot'].includes(a.kind)) vibrate([80, 60, 120]);

  const chars = (a.title || '').length + text.length + (a.story || '').length;
  const minMs = Math.min(a.kind === 'win' ? 9000 : 8000, Math.max(a.kind === 'win' ? 4500 : 2800, 1600 + chars * 42));
  const bar = $('#lt-bar');
  bar.style.transition = 'none';
  bar.style.width = '0';
  void bar.offsetWidth;
  bar.style.transition = reducedMotion() ? 'none' : `width ${minMs}ms linear`;
  bar.style.width = '100%';

  const skip = new Promise((r) => { skipFn = r; });
  let worldDone = false;
  const world = W.announce(a, 12000).then(() => { worldDone = true; });
  await Promise.race([Promise.all([world, sleep(minMs)]), skip, sleep(14000)]);
  skipFn = null;
  // Oyuncu geçtiyse ya da süre dolduysa 3B sahne de kesilsin; yoksa arkada oynamaya devam eder.
  if (!worldDone) W.skip();
  if (g !== gen) return;
  el.classList.remove('on');
  await sleep(260);
  next(g);
}
