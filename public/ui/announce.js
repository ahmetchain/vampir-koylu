// Duyurular: dünya sinematiği (world.announce) + sinematik alt bant (başlık, metin, anlatı).
// Sıraya alınır, dokununca geçilir, dünya sözünü tutmasa da makul bir sürede biter.
import { ctx, emitLocal } from './ctx.js';
import { $, esc, sleep, sfx, vibrate, reducedMotion } from './util.js';
import { icon, emblem } from './icons.js';
import { W } from './world-host.js';
import { appendSystem } from './chat.js';

const queue = [];
let playing = false;
let skipFn = null;
let gen = 0;

const PRIVATE = { seer: true, watch: true, promote: true };
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
};

export function initAnnounce() {
  $('#announce').addEventListener('click', () => { if (skipFn) skipFn(); });
  document.addEventListener('keydown', (e) => {
    if ((e.key === ' ' || e.key === 'Enter' || e.key === 'Escape') && playing && skipFn && !$('#announce').hidden) { e.preventDefault(); skipFn(); }
  });
}

export function pushAnnounce(a) {
  if (!a || !a.kind) return;
  queue.push(a);
  // Sohbet geçmişine de kısa bir satır.
  // Özel duyurular (kahin, gözcü, dönüşüm) sadece bu oyuncuya gelir; akışta da öyle olduğu açıkça yazsın.
  appendSystem(`${PRIVATE[a.kind] ? 'Sadece sen görüyorsun · ' : ''}${a.title}: ${a.text}`, a.kind === 'night' ? 'moon' : a.kind === 'death' || a.kind === 'hanged' || a.kind === 'shot' ? 'tomb' : PRIVATE[a.kind] ? 'eye' : 'scroll');
  if (!playing) next(gen);
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
  const [ic, color, snd] = KIND[a.kind] || ['scroll', '#f4e4c1', null];
  const priv = !!PRIVATE[a.kind];
  el.dataset.kind = a.kind;
  el.dataset.private = String(priv);
  $('#lt-emblem').innerHTML = ic.startsWith('role:') ? emblem(ic.slice(5), 'l') : `<span class="emblem emblem-l" style="--rc:${color}">${icon(ic)}</span>`;
  $('#lt-title').textContent = a.title || '';
  const text = a.text || '';
  $('#lt-text').textContent = text;
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
