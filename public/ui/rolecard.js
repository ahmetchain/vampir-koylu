// Rol kartı: mühürlü mektup. Oyun başında tarafsız bir zarf gelir (rolü yandakine belli etmesin diye
// herkesinki aynıdır); oyuncu mühre dokununca mühür çatlar, kapak açılır, mektup çıkar ve açılır.
// İki aile kart: vampir (koyu bordo, kan damlası mühür, dikenler, yarasalar) ve köy (fildişi parşömen,
// rol renginde mühür, lale köşeler, rolün motifi). Saf SVG + CSS; hareket Web Animations API ile,
// yalnızca transform/opacity (z-index dışında) ve yaylı (spring) eğrilerle.
import { esc } from './util.js';
import { ROLES } from './data.js';
import { roleIcon, roleMotif } from './icons.js';

const pct = (n) => `${Math.round(n * 1000) / 10}%`;

// Düşük poligonlu mum mührü: kenarı tırtıklı çokgen (iki ton: koyu taban + açık üst yüz).
function blob(cx, cy, r1, r2, n, rot = 0) {
  const pts = [];
  for (let i = 0; i < n * 2; i++) {
    const a = rot + (Math.PI * i) / n;
    const r = i % 2 ? r2 : r1;
    pts.push(`${(cx + Math.cos(a) * r).toFixed(1)} ${(cy + Math.sin(a) * r).toFixed(1)}`);
  }
  return `M${pts.join(' ')}z`;
}

// Mektubun başındaki rol mührü (köy: yuvarlak mum, vampir: kan damlası).
function sealSVG(evil) {
  if (evil) {
    return `<svg class="lr-seal-bg" viewBox="0 0 80 92" aria-hidden="true">
      <path d="M40 3C40 3 11 38 11 58a29 29 0 0 0 58 0C69 38 40 3 40 3z" fill="#5c0a16" stroke="#1a0509" stroke-width="2" stroke-linejoin="round"/>
      <path d="M40 9C40 9 15 40 15 58a25 25 0 0 0 25 25V9z" fill="#a3162b"/>
      <path d="M40 9V83a25 25 0 0 0 25-25C65 40 40 9 40 9z" fill="#83101f"/>
      <path d="M24 50c1.5-8 6-16 11-23" fill="none" stroke="#e0606c" stroke-width="3.5" stroke-linecap="round" opacity=".55"/>
      <circle cx="40" cy="60" r="17" fill="none" stroke="#3a0610" stroke-width="1.6" opacity=".55"/>
    </svg>`;
  }
  return `<svg class="lr-seal-bg" viewBox="0 0 80 80" aria-hidden="true">
    <path d="${blob(40, 41, 38, 34, 13, 0.2)}" style="fill:color-mix(in srgb,var(--rc) 55%,#1a0f08)" stroke="rgba(26,15,8,.55)" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="${blob(39, 39, 33, 30.5, 13, 0.45)}" style="fill:var(--rc)"/>
    <path d="M17 31a24 24 0 0 1 18-19" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="39" cy="39" r="23" fill="none" stroke="rgba(26,15,8,.35)" stroke-width="1.6"/>
    <circle cx="39" cy="39" r="25.5" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1"/>
  </svg>`;
}

// Köşe süsleri. Köy: çift çizgili köşebent + lale; vampir: dikenli köşebent + kare hatlı küçük yarasa.
const CORNER_KOY = `<svg viewBox="0 0 48 48" aria-hidden="true">
  <path d="M4 44V12a8 8 0 0 1 8-8h32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M9 44V15a6 6 0 0 1 6-6h29" fill="none" stroke="currentColor" stroke-width="1" opacity=".55"/>
  <g transform="translate(19 19) rotate(-45)" fill="currentColor" stroke="rgba(42,28,18,.45)" stroke-width=".8" stroke-linejoin="round">
    <path d="M0-8.5C2.8-6 3.4-2.2 1.9 1.6H-1.9C-3.4-2.2-2.8-6 0-8.5z"/>
    <path d="M-1.9 1.6C-5.3 1-7-1.7-6.8-4.9-4.2-4.1-2.5-2.1-1.9 1.6zM1.9 1.6C5.3 1 7-1.7 6.8-4.9 4.2-4.1 2.5-2.1 1.9 1.6z" opacity=".75"/>
    <path d="M-.7 1.6h1.4V9h-1.4z"/>
  </g>
  <circle cx="44" cy="4" r="1.6" fill="currentColor"/><circle cx="4" cy="44" r="1.6" fill="currentColor"/>
</svg>`;
const BAT = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="#14050a" stroke-width="1.2" stroke-linejoin="round">
    <path d="M12 8.4 10.5 5.6 9.6 8.7 6 7.3 2 8.6 4 10.7 3.6 13 6.4 12.1 7.6 14.8 9.8 12.9 12 17.6 14.2 12.9 16.4 14.8 17.6 12.1 20.4 13 20 10.7 22 8.6 18 7.3 14.4 8.7 13.5 5.6z" fill="#b51f35"/>
    <path d="M12 8.4 13.5 5.6 14.4 8.7 18 7.3 22 8.6 20 10.7 20.4 13 17.6 12.1 16.4 14.8 14.2 12.9 12 17.6z" fill="#7e1223" stroke="none"/>
    <path d="M10.3 10.1h1.3v1.1h-1.3zM12.4 10.1h1.3v1.1h-1.3z" fill="#ffcf8a" stroke="none"/>
  </g>`;
const CORNER_VAMP = (bat) => `<svg viewBox="0 0 48 48" aria-hidden="true">
  <path d="M4 44V12a8 8 0 0 1 8-8h32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M4 34l-3-2.2M4 24l3.2-1.8M4 16l-3-2M16 4l-1.8-3.2M26 4l1.8 3M36 4l-2-3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  ${bat ? BAT(9, 8, 1.15) : '<path d="M10 40c0-12 6-22 16-26-6 6-9 13-9 22" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity=".8"/><path d="M16 26l-4 1.5M21 18l-1-4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>'}
</svg>`;

// Ayırıcı: iki çizgi ve ortada sekiz köşeli Selçuklu yıldızı (vampirde diken).
function divider(evil) {
  const mid = evil
    ? '<path d="M60 1.5 63 6 60 10.5 57 6z" fill="currentColor"/><path d="M50 6h-6M70 6h6" stroke="currentColor" stroke-width="1.2"/>'
    : '<g transform="translate(60 6)" fill="currentColor"><rect x="-4.2" y="-4.2" width="8.4" height="8.4"/><rect x="-4.2" y="-4.2" width="8.4" height="8.4" transform="rotate(45)"/><circle r="1.8" fill="var(--paper)"/></g>';
  return `<svg class="lr-divider" viewBox="0 0 120 12" aria-hidden="true"><path d="M6 6H50M70 6H114" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="4" cy="6" r="1.5" fill="currentColor"/><circle cx="116" cy="6" r="1.5" fill="currentColor"/>${mid}</svg>`;
}

/**
 * Açık mektup (rol kartı) HTML'i.
 * d = { role, ability:{name,desc}|null, mates:[html], evilSolo:bool, job, scenario:{name,intro}|null, notes:[{text,rolesHtml}] }
 */
export function letterHTML(d) {
  const r = ROLES[d.role] || ROLES.koylu;
  const evil = r.team === 'vampir';
  const fam = evil ? 'vamp' : 'koy';
  const corners = evil
    ? `<span class="lr-corner c-tl">${CORNER_VAMP(true)}</span><span class="lr-corner c-tr">${CORNER_VAMP(true)}</span><span class="lr-corner c-bl">${CORNER_VAMP(false)}</span><span class="lr-corner c-br">${CORNER_VAMP(false)}</span>`
    : ['tl', 'tr', 'bl', 'br'].map((c) => `<span class="lr-corner c-${c}">${CORNER_KOY}</span>`).join('');
  const sealed = evil ? `<section class="lr-sealed" data-st>
      <span class="lr-sealed-wax" aria-hidden="true">${roleIcon('vampir')}</span>
      <b class="lr-label">Mühürlü not · yalnız sana</b>
      ${d.ability ? `<div class="lr-ab"><b>${esc(d.ability.name)}</b><p>${d.ability.desc}</p><small>Takım arkadaşların da bilir; köy bilmez.</small></div>` : ''}
      <div class="lr-mates"><b>Takım arkadaşların</b>${d.mates.length ? `<p>${d.mates.join(', ')}</p>` : '<p>Takımında senden başka kimse yok.</p>'}</div>
    </section>` : '';
  const job = d.job ? `<section class="lr-box" data-st><b class="lr-label">Köydeki işin</b><p>${esc(d.job)}</p><small>Sadece hikâye için; rolün hakkında hiçbir şey söylemez.</small></section>` : '';
  const scen = d.scenario ? `<section class="lr-box lr-scen" data-st><b class="lr-label">Bu oyunun hikâyesi · ${esc(d.scenario.name)}</b>${d.scenario.intro ? `<p>${esc(d.scenario.intro)}</p>` : ''}</section>` : '';
  const notes = d.notes.length ? `<section class="lr-box lr-notes" data-st><b class="lr-label">Notların</b><ul>${d.notes.map((n) => `<li>${esc(n.text)}${n.rolesHtml ? `<span class="note-roles">${n.rolesHtml}</span>` : ''}</li>`).join('')}</ul></section>` : '';
  return `<article class="letter lr-${fam} rolecard" style="--rc:${r.color}" data-role="${esc(d.role)}" tabindex="-1" aria-label="Rol kartın: ${esc(r.name)}">
    <span class="lr-glow" aria-hidden="true"></span>
    <span class="lr-band lr-band-t" aria-hidden="true"></span><span class="lr-band lr-band-b" aria-hidden="true"></span>
    ${corners}
    <span class="lr-motif" aria-hidden="true">${evil ? roleIcon('vampir') : roleMotif(d.role)}</span>
    <div class="lr-scroll">
      <header class="lr-head">
        <span class="lr-eyebrow" data-st>${evil ? 'Gizli mektup' : 'Köyden mektup'} · Rolün</span>
        <span class="lr-seal lr-seal-${fam}" data-st>${sealSVG(evil)}<span class="lr-seal-ic">${roleIcon(d.role)}</span></span>
        <h2 data-st>${esc(r.name)}</h2>
        <span class="lr-team" data-st>${esc(r.teamName)}</span>
        <span data-st>${divider(evil)}</span>
      </header>
      ${sealed}
      <p class="lr-desc" data-st>${r.desc}</p>
      ${job}${scen}${notes}
    </div>
  </article>`;
}

// Zarfın tarafsız mührü: fener sarısı mum, ortasında köy feneri (tek başına hilal kullanılmaz: dini sembol gibi okunabilir).
const ENV_SEAL = `<svg viewBox="0 0 72 72" aria-hidden="true">
  <path d="${blob(36, 37, 34, 30.5, 12, 0.1)}" fill="#9a5f12" stroke="#4a2a06" stroke-width="1.4" stroke-linejoin="round"/>
  <path d="${blob(35, 35, 30, 27.5, 12, 0.36)}" fill="#e3a23a"/>
  <path d="M35 7.5A27.5 27.5 0 0 1 62.5 35H35z" fill="#ffd27a" fill-opacity=".45"/>
  <circle cx="35" cy="35" r="19.5" fill="none" stroke="#8a5210" stroke-width="1.6" opacity=".7"/>
  <path d="M31 22.5a4 4 0 0 1 8 0" fill="none" stroke="#7a470c" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M28.5 26h13l-1.6 3.2h-9.8z" fill="#7a470c"/>
  <rect x="29.5" y="29.2" width="11" height="13.6" rx="1.6" fill="#fff1cf" stroke="#7a470c" stroke-width="1.3"/>
  <path d="M35 32.4c2.4 2.5 2.6 4.8 0 7-2.6-2.2-2.4-4.5 0-7z" fill="#f2a43a"/>
  <path d="M28.5 42.8h13l1.2 2.6h-15.4z" fill="#7a470c"/>
</svg>`;
// Mührün üç kırık parçası (aynı çizim, farklı kırpma) ve çatlak çizgisi; koordinatlar 72'lik kutuya göre.
const CRACK_TOP = [[32.4, 0], [37.4, 15.8], [33.8, 27.4], [36, 37.4]];
const CRACK_R = [[50, 44], [60, 52], [72, 57.6]];
const CRACK_L = [[24, 46], [10, 50], [0, 54]];
const P = (pts) => pts.map(([x, y]) => `${pct(x / 72)} ${pct(y / 72)}`).join(', ');
const PIECES = [
  `0 0, ${P(CRACK_TOP)}, ${P(CRACK_L)}`,
  `${P(CRACK_TOP.slice(0, 1))}, 100% 0, 100% 80%, ${P([...CRACK_R].reverse().slice(1))}, ${P([...CRACK_TOP].reverse())}`,
  `${P([...CRACK_L].reverse())}, ${P(CRACK_TOP.slice(3))}, ${P(CRACK_R)}, 100% 100%, 0 100%`,
];
const CRACK_PATH = `M${CRACK_TOP.map((p) => p.join(' ')).join(' L')} M36 37.4 L${CRACK_R.map((p) => p.join(' ')).join(' L')} M36 37.4 L${CRACK_L.map((p) => p.join(' ')).join(' L')}`;

// Kapalı zarf (herkes için aynı). Mektup HTML'i içinde gizli bekler, animasyonla açılır.
export function envelopeHTML() {
  return `<button type="button" class="env" data-env aria-label="Mektubunu aç ve rolünü gör">
    <span class="env-float">
      <svg class="env-back" viewBox="0 0 140 100" preserveAspectRatio="none" aria-hidden="true"><rect x="0" y="0" width="140" height="100" rx="7" fill="#cdb489"/><path d="M0 0 70 52 140 0" fill="#bfa477"/></svg>
      <span class="env-paper" aria-hidden="true"></span>
      <svg class="env-pocket" viewBox="0 0 140 100" preserveAspectRatio="none" aria-hidden="true">
        <defs><clipPath id="envClip"><rect width="140" height="100" rx="7"/></clipPath></defs>
        <g clip-path="url(#envClip)" stroke="#a88a5a" stroke-width="1" stroke-linejoin="round" vector-effect="non-scaling-stroke">
          <path d="M0 0 72 57 0 100z" fill="#f1e3c2"/>
          <path d="M140 0 68 57 140 100z" fill="#e2cda1"/>
          <path d="M0 100 70 46 140 100z" fill="#ead9b3"/>
        </g>
        <path d="M18 88h30M18 82h22" stroke="#b9996a" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>
      </svg>
      <svg class="env-flap" viewBox="0 0 140 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M2 0H138L72 60Q70 62 68 60z" fill="#f6ebd0" stroke="#a88a5a" stroke-width="1" stroke-linejoin="round"/>
        <path d="M70 0 138 0 72 60Q70 62 68 60z" fill="#000" fill-opacity=".05"/>
      </svg>
      <span class="env-seal" aria-hidden="true">
        ${PIECES.map((poly, i) => `<span class="env-pc env-pc-${i}" style="clip-path:polygon(${poly})">${ENV_SEAL}</span>`).join('')}
        <svg class="env-crack" viewBox="0 0 72 72"><path d="${CRACK_PATH}" fill="none" stroke="#3a1d02" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>
      </span>
    </span>
    <span class="rv-hint"><b>Mührü kırmak için dokun</b><span>Rolünü kimseye gösterme!</span></span>
  </button>`;
}

// Kritik sönümlü olmayan yay (Rive/Framer benzeri): t saniyede 0→1 ilerleme.
function spring(t, w = 11, z = 0.6) {
  const wd = w * Math.sqrt(1 - z * z);
  return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + ((z * w) / wd) * Math.sin(wd * t));
}
// İki dönüşüm arasında yay eğrisini örnekleyip anahtar kareler üretir (WAAPI 'linear' ile oynatılır).
function springFrames(from, to, ms, extra) {
  const frames = [];
  const N = 36;
  for (let i = 0; i <= N; i++) {
    const p = i === N ? 1 : spring((i / N) * (ms / 1000));
    const v = (k) => from[k] + (to[k] - from[k]) * p;
    const f = { offset: i / N, transform: `translate(${v('x').toFixed(2)}px, ${v('y').toFixed(2)}px) scale(${v('sx').toFixed(4)}, ${v('sy').toFixed(4)})` };
    if (extra) Object.assign(f, extra(i / N));
    frames.push(f);
  }
  return frames;
}

/**
 * Zarfı açar. stage: .rv-stage (içinde .env ve gizli .letter). Döner: Promise (bitince).
 * Aşamalar (ms): 0 hazırlık (mühür basılır) → 150 çatlak + titreşim → 190 parçalar saçılır →
 * 230 kapak açılır → 470 mektup yukarı kayar → 720 zarf aşağı iner/solar → 880 mektup yayla açılır →
 * 1120+ içerik kademeli belirir (~1.6 sn'de tamam) → (vampir) 1250 kırmızı parıltı nabzı (bir kez).
 */
export function openEnvelope(stage, { onCrack, onFlap } = {}) {
  const env = stage.querySelector('.env');
  const letter = stage.querySelector('.letter');
  const timers = [];
  const later = (ms, fn) => timers.push(setTimeout(fn, ms));
  stage.classList.add('opening');
  // kağıt artık görünecek: ailesinin rengini alsın (kapalıyken zarf herkes için aynı)
  if (letter.classList.contains('lr-vamp')) env.classList.add('env-vamp');
  letter.hidden = false;
  const S = stage.getBoundingClientRect();
  const paper = env.querySelector('.env-paper');
  const Pr = paper.getBoundingClientRect();
  const lift = Pr.height * 0.62;
  const anims = [];
  const A = (el, kf, o) => { if (!el) return null; const a = el.animate(kf, { fill: 'both', ...o }); anims.push(a); return a; };
  const OUT = 'cubic-bezier(.2, .8, .2, 1)';

  // 1) hazırlık: mühür bastırılır, zarf hafifçe çöker
  A(env.querySelector('.env-seal'), [{ transform: 'scale(1)' }, { transform: 'scale(.86)', offset: 0.7 }, { transform: 'scale(1.06)' }], { duration: 210, easing: 'ease-in-out' });
  A(env.querySelector('.env-float'), [{ transform: 'translateY(0)' }, { transform: 'translateY(4px)', offset: 0.5 }, { transform: 'translateY(0)' }], { duration: 300, easing: OUT });
  // 2) çatlak ve 3) parçalar
  A(env.querySelector('.env-crack'), [{ opacity: 0 }, { opacity: 0, offset: 0.43 }, { opacity: 1, offset: 0.6 }, { opacity: 1, offset: 0.66 }, { opacity: 0 }], { duration: 350 });
  const fly = [[-34, -26, -38], [36, -22, 32], [4, 40, 14]];
  env.querySelectorAll('.env-pc').forEach((pc, i) => {
    const [x, y, r] = fly[i];
    A(pc, [
      { transform: 'translate(0,0) rotate(0)', opacity: 1 },
      { transform: `translate(${x * 0.35}px, ${y * 0.35}px) rotate(${r * 0.4}deg)`, opacity: 1, offset: 0.3 },
      { transform: `translate(${x}px, ${y + 30}px) rotate(${r}deg)`, opacity: 0 },
    ], { duration: 560, delay: 190, easing: OUT });
  });
  later(150, () => onCrack && onCrack());
  // 4) kapak açılır (yarıda zarfın arkasına geçer)
  const flap = env.querySelector('.env-flap');
  A(flap, [{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(180deg)' }], { duration: 380, delay: 230, easing: 'cubic-bezier(.45, 0, .35, 1)' });
  A(flap, [{ zIndex: 5 }, { zIndex: 5, offset: 0.5 }, { zIndex: 1, offset: 0.501 }, { zIndex: 1 }], { duration: 380, delay: 230 });
  later(240, () => onFlap && onFlap());
  // 5) mektup yukarı kayar (hafif aşmayla)
  A(paper, [{ transform: 'translateY(0)' }, { transform: `translateY(${-lift * 1.04}px)`, offset: 0.75 }, { transform: `translateY(${-lift}px)` }], { duration: 420, delay: 470, easing: OUT });
  A(paper, [{ opacity: 1 }, { opacity: 0 }], { duration: 160, delay: 900 });
  // 6) zarf aşağı iner ve solar
  ['.env-back', '.env-pocket', '.env-flap'].forEach((sel) => {
    A(env.querySelector(sel), [{ translate: '0 0', opacity: 1 }, { translate: '0 46%', opacity: 0 }], { duration: 300, delay: 720, easing: 'cubic-bezier(.55, 0, .8, .4)' });
  });
  // 7) mektup katlı kağıdın yerinden yayla açılır
  const from = {
    x: Pr.left + Pr.width / 2 - (S.left + S.width / 2), y: Pr.top + Pr.height / 2 - lift - (S.top + S.height / 2),
    sx: Pr.width / S.width, sy: Pr.height / S.height,
  };
  A(letter, springFrames(from, { x: 0, y: 0, sx: 1, sy: 1 }, 760, (t) => ({ opacity: Math.min(1, t * 7) })), { duration: 760, delay: 880, easing: 'linear' });
  // 8) içerik kademeli
  letter.querySelectorAll('[data-st]').forEach((el, i) => {
    A(el, [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 300, delay: 1120 + Math.min(i, 8) * 55, easing: OUT });
  });
  A(letter.querySelector('.lr-seal'), [{ transform: 'scale(.4) rotate(-20deg)' }, { transform: 'scale(1.12) rotate(4deg)', offset: 0.6 }, { transform: 'scale(1) rotate(0)' }], { duration: 480, delay: 1150, easing: OUT, composite: 'add' });
  // süsler kendi (CSS) saydamlıklarına kadar belirir; bitişte sıçrama olmasın
  letter.querySelectorAll('.lr-corner, .lr-band, .lr-motif').forEach((el) => A(el, [{ opacity: 0 }, { opacity: getComputedStyle(el).opacity }], { duration: 420, delay: 1100, easing: OUT }));
  // 9) vampir: bir kez kırmızı nabız
  if (letter.classList.contains('lr-vamp')) A(letter.querySelector('.lr-glow'), [{ opacity: 0 }, { opacity: 1, offset: 0.35 }, { opacity: 0 }], { duration: 1100, delay: 1250, easing: 'ease-in-out' });

  const done = Promise.all(anims.filter(Boolean).map((a) => a.finished.catch(() => {})));
  return done.then(() => {
    timers.forEach(clearTimeout);
    env.remove();
    anims.forEach((a) => { try { a.cancel(); } catch { /* yoksay */ } });
    stage.classList.remove('opening');
    stage.classList.add('open');
    try { letter.focus({ preventScroll: true }); } catch { /* yoksay */ }
  });
}
