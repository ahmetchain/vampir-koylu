// Doğrudan hareket: dokunmatik ekranda sanal kol (joystick), masaüstünde WASD / ok tuşları.
// Çıktı ekran-uzayı bir vektör: x sağa, y ileri (kameraya göre), büyüklük 0..1.
const CSS = `
.vkw-joy{position:absolute;width:112px;height:112px;border-radius:50%;pointer-events:auto;touch-action:none;
  background:radial-gradient(circle at 50% 50%,rgba(244,228,193,.10),rgba(21,18,43,.38) 70%);border:2px solid rgba(244,228,193,.35);
  box-shadow:0 2px 10px rgba(0,0,0,.35);opacity:0;transform:scale(.8);transition:opacity .25s,transform .25s;z-index:3000}
.vkw-joy.on{opacity:.9;transform:scale(1)}
.vkw-joy:not(.on){pointer-events:none}
.vkw-joy i{position:absolute;left:50%;top:50%;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;
  background:radial-gradient(circle at 40% 35%,#f4e4c1,#c9a96e);box-shadow:0 2px 6px rgba(0,0,0,.45);will-change:transform}
.vkw-joy.act{opacity:1;border-color:rgba(244,228,193,.7)}
`;
let styleEl = null;
function style() { if (styleEl) return; styleEl = document.createElement('style'); styleEl.id = 'vkw-joy-style'; styleEl.textContent = CSS; document.head.appendChild(styleEl); }

export function createControls(ov, opts = {}) {
  style();
  const touch = opts.touch ?? (navigator.maxTouchPoints > 0 || 'ontouchstart' in window);
  const joy = document.createElement('div');
  joy.className = 'vkw-joy';
  joy.setAttribute('aria-hidden', 'true');
  const knob = document.createElement('i');
  joy.appendChild(knob);
  ov.appendChild(joy);
  let R = 42;
  let zoneOff = false; // arayüz bu cihazda kol alanı vermiyor (masaüstü: null)
  let jx = 0, jy = 0, pid = null, cx = 0, cy = 0;
  let enabled = false;
  const keys = new Set();

  function setKnob(x, y) { knob.style.transform = `translate3d(${(x * R).toFixed(1)}px,${(-y * R).toFixed(1)}px,0)`; }
  function down(e) {
    if (!enabled || pid != null) return;
    e.preventDefault(); e.stopPropagation();
    pid = e.pointerId;
    joy.setPointerCapture && joy.setPointerCapture(pid);
    const r = joy.getBoundingClientRect();
    cx = r.left + r.width / 2; cy = r.top + r.height / 2;
    joy.classList.add('act');
    move(e);
  }
  function move(e) {
    if (e.pointerId !== pid) return;
    e.preventDefault();
    let dx = (e.clientX - cx) / R, dy = -(e.clientY - cy) / R;
    const m = Math.hypot(dx, dy);
    if (m > 1) { dx /= m; dy /= m; }
    // ölü bölge
    const mm = Math.hypot(dx, dy);
    if (mm < 0.12) { jx = 0; jy = 0; } else { const k = (mm - 0.12) / 0.88 / mm; jx = dx * k; jy = dy * k; }
    setKnob(dx, dy);
  }
  function up(e) {
    if (e.pointerId !== pid) return;
    pid = null; jx = 0; jy = 0; setKnob(0, 0);
    joy.classList.remove('act');
  }
  joy.addEventListener('pointerdown', down);
  joy.addEventListener('pointermove', move);
  joy.addEventListener('pointerup', up);
  joy.addEventListener('pointercancel', up);

  // klavye: yazı alanındayken dinleme
  const isField = (t) => !!(t && t.tagName && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable));
  const isTyping = (t) => isField(t) || isField(document.activeElement);
  const MAP = { KeyW: 'u', ArrowUp: 'u', KeyS: 'd', ArrowDown: 'd', KeyA: 'l', ArrowLeft: 'l', KeyD: 'r', ArrowRight: 'r' };
  function kd(e) {
    if (!enabled || e.ctrlKey || e.metaKey || e.altKey || isTyping(e.target)) return;
    const k = MAP[e.code];
    if (!k) return;
    keys.add(k);
    if (e.code.startsWith('Arrow')) e.preventDefault();
  }
  function ku(e) { const k = MAP[e.code]; if (k) keys.delete(k); }
  // bir alana odaklanınca basılı tuşlar bırakılmış sayılır
  const fin = (e) => { if (isField(e.target)) keys.clear(); };
  window.addEventListener('focusin', fin);
  const blur = () => keys.clear();
  window.addEventListener('keydown', kd);
  window.addEventListener('keyup', ku);
  window.addEventListener('blur', blur);

  return {
    touch,
    // birleşik girdi: { x, y } (büyüklük <= 1)
    vector(out) {
      let x = jx, y = jy;
      if (keys.size) {
        x += (keys.has('r') ? 1 : 0) - (keys.has('l') ? 1 : 0);
        y += (keys.has('u') ? 1 : 0) - (keys.has('d') ? 1 : 0);
        const m = Math.hypot(x, y);
        if (m > 1) { x /= m; y /= m; }
      }
      out.x = x; out.y = y;
      return out;
    },
    setEnabled(on) {
      if (on === enabled) return;
      enabled = on;
      joy.classList.toggle('on', on && touch && !zoneOff);
      if (!on) { keys.clear(); jx = 0; jy = 0; pid = null; setKnob(0, 0); joy.classList.remove('act'); }
    },
    // Arayüzün ayırdığı kare (insets.joystick: { left, bottom, size }, kapsayıcıya göre CSS px) varsa oraya;
    // alan null ise (masaüstü) kol gösterilmez; alan hiç yoksa: sol alt, arayüz boşluklarının içinde.
    place(insets, W, H) {
      const z = insets.joystick;
      let left, top, size;
      if (z === null) { zoneOff = true; joy.classList.remove('on'); return; }
      zoneOff = false;
      if (z && z.size > 0) {
        size = Math.max(88, Math.min(160, z.size));
        left = z.left || 0;
        top = H - (z.bottom || 0) - size;
      } else {
        size = 112;
        left = (insets.left || 0) + 18;
        top = Math.max((insets.top || 0) + 10, H - (insets.bottom || 0) - 18 - size);
      }
      joy.style.left = left + 'px';
      joy.style.top = top + 'px';
      joy.style.width = joy.style.height = size + 'px';
      const k = Math.round(size * 0.41);
      knob.style.width = knob.style.height = k + 'px';
      knob.style.margin = (-k / 2) + 'px 0 0 ' + (-k / 2) + 'px';
      R = size * 0.375;
      if (enabled) joy.classList.toggle('on', touch);
    },
    get el() { return joy; },
    dispose() {
      window.removeEventListener('keydown', kd);
      window.removeEventListener('keyup', ku);
      window.removeEventListener('blur', blur);
      window.removeEventListener('focusin', fin);
      joy.remove();
    },
  };
}
