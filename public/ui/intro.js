// Açılış hikâyesi (arayüz katmanı): başlangıç kapısı ("Hikâyeyi başlat" / "Geç"), alt üçte bir altyazı kutusu,
// sağ üstte "Geç", sahne geçiş perdesi ve sondaki "Vampir Köylü" başlığı. Görüntü 3B köyde (VKWorld 'intro'
// sinematiği) oynar; 3B yoksa (2B yedek / WebGL yok / dünya hazır değil) gökyüzü renk geçişli basit CSS sahnesi.
// Ses tarayıcı kuralı gereği ancak dokunuştan sonra çalabildiği için ilk açılışta kapı ekranı gösterilir.
import { STORY, DURS, TITLE_S, wordDelay, markSeen, readSeen, shouldAutoplay } from './intro-story.js';
import { W } from './world-host.js';
import { audioScene, sfx } from './util.js';

const storage = () => { try { return window.localStorage; } catch { return null; } };
const reducedMotion = () => { try { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); } catch { return false; } };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const VOICES = ['voice-1', 'voice-2', 'voice-3', 'voice-4', 'voice-5'];
const prefetchVoice = () => { try { if (window.VKAudio && window.VKAudio.prefetch) window.VKAudio.prefetch(VOICES); } catch { /* ses yok */ } };
const stopVoice = () => { try { if (window.VKAudio && window.VKAudio.stopSfx) VOICES.forEach((v) => window.VKAudio.stopSfx(v, 0.35)); } catch { /* ses yok */ } };
const owl = (v) => { try { if (window.VKAudio && window.VKAudio.owl) window.VKAudio.owl(v); } catch { /* ses yok */ } };

export function introAutoplay(o) { return shouldAutoplay({ ...o, seen: readSeen(storage()) }); }
export function markIntroSeen() { markSeen(storage()); }

let active = false;
let cancelFn = null;
export function introActive() { return active; }
// Dışarıdan hemen kapat (ör. oturum devam ettirilip odaya alındı): perde beklemeden kalkar
export function cancelIntro() { if (cancelFn) cancelFn(); }

const CHEV = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>';

function build() {
  const el = document.createElement('div');
  el.id = 'intro';
  el.className = 'intro';
  el.innerHTML = `
    <div class="intro-sky" aria-hidden="true"><i class="sk sk-day"></i><i class="sk sk-dusk"></i><i class="sk sk-dawn"></i><i class="sk sk-night"></i></div>
    <i class="intro-bar intro-bar-top" aria-hidden="true"></i><i class="intro-bar intro-bar-bot" aria-hidden="true"></i>
    <div class="intro-veil" aria-hidden="true"></div>
    <div class="intro-cap" aria-live="polite"><p class="intro-text"></p></div>
    <h1 class="intro-title auth-title" aria-hidden="true"><span class="at-v">Vampir</span> <span class="at-k">Köylü</span></h1>
    <button type="button" class="intro-skip" aria-label="Hikâyeyi geç">Geç${CHEV}</button>
    <section class="intro-gate" role="dialog" aria-modal="true" aria-labelledby="intro-gate-h" hidden>
      <div class="ig-card">
        <p class="ig-eyebrow">Bir köy masalı</p>
        <h2 class="ig-h auth-title" id="intro-gate-h"><span class="at-v">Vampir</span> <span class="at-k">Köylü</span></h2>
        <p class="ig-sub">Her şey nasıl başladı? Yarım dakikalık kısa bir hikâye. Sesini aç.</p>
        <button type="button" class="btn btn-primary btn-xl btn-block ig-start" data-intro="start">${PLAY}Hikâyeyi başlat</button>
        <button type="button" class="btn btn-ghost btn-block ig-skip" data-intro="skip">Geç</button>
      </div>
    </section>`;
  // CSS sahnesi için giriş ekranının köy siluetini ve ayını ödünç al (ek indirme yok)
  const town = document.querySelector('.auth-bg .ab-town');
  const moon = document.querySelector('.auth-bg .ab-moon');
  const sky = el.querySelector('.intro-sky');
  if (moon) sky.appendChild(moon.cloneNode(true));
  if (town) sky.appendChild(town.cloneNode(true));
  return el;
}

// Kapı ekranı: kullanıcı seçene kadar bekler ('start' | 'skip')
function gateChoice(el) {
  const g = el.querySelector('.intro-gate');
  g.hidden = false;
  el.dataset.stage = 'gate';
  const start = g.querySelector('.ig-start');
  setTimeout(() => { try { start.focus({ preventScroll: true }); } catch { /* yok */ } }, 60);
  return new Promise((resolve) => {
    const done = (v) => { g.removeEventListener('click', onClick); window.removeEventListener('keydown', onKey, true); resolve(v); };
    const onClick = (e) => { const b = e.target.closest('[data-intro]'); if (b) done(b.dataset.intro); };
    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); done('skip'); }
      else if (e.key === 'Tab') {
        // odak kapıdan dışarı kaçmasın
        const f = [...g.querySelectorAll('button')];
        const i = f.indexOf(document.activeElement);
        e.preventDefault();
        f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
      }
    };
    g.addEventListener('click', onClick);
    window.addEventListener('keydown', onKey, true);
  });
}

// Altyazı: kelime kelime yumuşak beliriş
function setCaption(el, text) {
  const cap = el.querySelector('.intro-cap');
  const p = el.querySelector('.intro-text');
  const words = text.split(/\s+/);
  const d = wordDelay(words.length);
  p.innerHTML = '';
  words.forEach((w, i) => {
    const s = document.createElement('span');
    s.className = 'iw';
    s.style.animationDelay = `${(0.15 + i * d).toFixed(3)}s`;
    s.textContent = w;
    p.appendChild(s);
    if (i < words.length - 1) p.appendChild(document.createTextNode(' '));
  });
  p.setAttribute('aria-label', text);
  cap.classList.remove('on');
  void cap.offsetWidth;
  cap.classList.add('on');
}

/**
 * Hikâyeyi oynatır. opts.gate: önce kapı ekranı; opts.enter(): oynatma başlarken (arayüz 'intro' görünümüne geçer).
 * Döner: reveal() — çağıran altındaki ekranı (giriş/menü) hazırladıktan sonra çağırır; perde ve başlık yumuşakça kalkar.
 * Kapıda "Geç" seçilirse enter() çağrılmaz; reveal() yine güvenle çağrılabilir.
 */
export async function runIntro({ gate = false, enter } = {}) {
  if (active) return async () => {};
  active = true;
  const host = document.getElementById('app') || document.body;
  const el = build();
  host.appendChild(el);
  const remove = () => { el.remove(); active = false; cancelFn = null; };

  if (gate) {
    const splash = document.getElementById('splash');
    if (splash) splash.hidden = true;
    prefetchVoice();
    const v = await gateChoice(el);
    markIntroSeen();
    if (v !== 'start') {
      el.classList.add('fade-out');
      await sleep(320);
      remove();
      if (splash) splash.hidden = false;
      return async () => {};
    }
    sfx('click');
  } else { markIntroSeen(); prefetchVoice(); }

  el.querySelector('.intro-gate').hidden = true;
  el.dataset.stage = 'play';
  try { if (enter) enter(); } catch (e) { console.warn('[intro]', e); }
  audioScene('intro-day');
  const reduced = reducedMotion();
  el.classList.toggle('reduced', reduced);

  const veil = el.querySelector('.intro-veil');
  // süre CSS değişkeniyle (hareketi azalt ayarındaki genel "geçiş yok" kuralı perdeyi ani yapmasın: yumuşak kararma kalır)
  const veilTo = (a, ms) => { veil.style.setProperty('--vd', `${Math.max(1, ms)}ms`); veil.style.opacity = String(a); };
  // açılış: perde ilk sahne başlayınca kalkar (menü kamerasından sahneye sıçrama görünmesin), siyah bantlar girer
  veilTo(1, 0);
  void veil.offsetWidth;
  requestAnimationFrame(() => el.classList.add('on'));

  let skipped = false;
  let skipResolve;
  const skipP = new Promise((r) => { skipResolve = r; });
  const doSkip = () => { if (skipped) return; skipped = true; stopVoice(); skipResolve(); };
  let cancelled = false;
  cancelFn = () => { cancelled = true; W.skip(); doSkip(); };
  const skipBtn = el.querySelector('.intro-skip');
  skipBtn.addEventListener('click', doSkip);
  const onKey = (e) => { if (e.key === 'Escape' || e.key === 'Enter') { e.preventDefault(); doSkip(); } };
  window.addEventListener('keydown', onKey, true);

  const css = () => { el.dataset.mode = 'css'; };
  let dipped = true;
  const hooks = {
    dip() { dipped = true; veilTo(1, reduced ? 450 : 380); el.querySelector('.intro-cap').classList.remove('on'); },
    beat(i) {
      if (dipped) { dipped = false; veilTo(0, i === 0 ? 1100 : reduced ? 600 : 520); }
      el.dataset.scene = i < STORY.length ? STORY[i].id : 'title';
      if (i === 1) audioScene('intro-night');
      if (el.dataset.mode === 'css') {
        if (i === 1) sfx('bell', { volume: 0.45 });
        if (i === 2) { sfx('door', { volume: 0.8 }); setTimeout(() => sfx('dawn', { volume: 0.5 }), 500); }
        if (i === 3) owl(0.75);
        if (i === 5) sfx('zzGong', { volume: 0.7 });
      }
      if (i < STORY.length) { setCaption(el, STORY[i].text); sfx('voice-' + (i + 1)); }
      else { el.querySelector('.intro-cap').classList.remove('on'); el.classList.add('titled'); }
    },
  };

  // CSS sahnesi: aynı ritimle zamanlayıcılar (3B sahnenin perde aralıkları dahil)
  function cssTimeline() {
    css();
    return new Promise((resolve) => {
      const timers = [];
      let t = 0;
      const at = (s, fn) => timers.push(setTimeout(fn, s * 1000));
      at(0, () => hooks.beat(0));
      for (let i = 1; i <= 5; i++) {
        t += DURS[i - 1];
        if (i <= 3) { at(t, () => hooks.dip()); t += 0.42; }
        const k = i;
        at(t, () => hooks.beat(k));
      }
      at(t + TITLE_S, resolve);
      skipP.then(() => { timers.forEach(clearTimeout); resolve(); });
    });
  }

  let worldP = null;
  if (W.introReady()) {
    el.dataset.mode = '3d';
    worldP = W.playIntro({ durs: DURS, hooks });
  }
  let playP;
  if (worldP) {
    // dünya hemen "oynatamadım" derse CSS sahnesine düş
    playP = worldP.then((ok) => (ok || skipped ? null : cssTimeline()));
  } else playP = cssTimeline();
  await Promise.race([playP, skipP]);

  window.removeEventListener('keydown', onKey, true);
  cancelFn = null;
  skipBtn.disabled = true;
  if (cancelled) { remove(); return async () => {}; }
  if (skipped) {
    el.classList.remove('titled');
    el.querySelector('.intro-cap').classList.remove('on');
    veilTo(1, 320);
    await sleep(340);
    W.skip();
    if (worldP) await Promise.race([worldP, sleep(1500)]);
  } else {
    // başlık kısa bir an kalır; köy kararır, başlık giriş ekranına devredilir
    veilTo(1, reduced ? 500 : 800);
    await sleep(reduced ? 520 : 820);
  }
  el.classList.add('ending');

  let revealed = false;
  const reveal = async () => {
    if (revealed) return;
    revealed = true;
    el.classList.add('fade-out');
    await sleep(reduced ? 400 : 750);
    remove();
  };
  setTimeout(reveal, 5000);   // çağıran unutursa da perde kalksın
  return reveal;
}
