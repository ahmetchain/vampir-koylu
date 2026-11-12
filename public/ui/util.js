// Küçük yardımcılar: DOM, kaçış, depolama, zaman.

export const $ = (sel, el = document) => el.querySelector(sel);
export const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

export const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// HTML parçasından tek eleman üretir.
export function frag(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// Gizli sekme ya da engellenmiş depolama durumunda da çalışsın.
export const store = {
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem(key);
      return v == null ? fallback : JSON.parse(v);
    } catch { return fallback; }
  },
  set(key, value) {
    try {
      if (value == null) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(value));
    } catch { /* depolama yoksa yoksay */ }
  },
};
export const session = {
  get(key) {
    try { return JSON.parse(sessionStorage.getItem(key)); } catch { return null; }
  },
  set(key, value) {
    try {
      if (value == null) sessionStorage.removeItem(key);
      else sessionStorage.setItem(key, JSON.stringify(value));
    } catch { /* yoksay */ }
  },
};

export function loadScript(src, timeoutMs = 20000) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    const t = setTimeout(() => reject(new Error('timeout')), timeoutMs);
    s.onload = () => { clearTimeout(t); resolve(); };
    s.onerror = () => { clearTimeout(t); s.remove(); reject(new Error('load')); };
    document.head.appendChild(s);
  });
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function fmtClock(sec) {
  const s = Math.max(0, Math.ceil(sec));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export function fmtTime(ts) {
  const d = new Date(ts);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

// Sunucu notlarının başındaki emojiyi atar (kendi ikonlarımızı kullanıyoruz).
export function stripEmoji(text) {
  return String(text || '').replace(/^[\p{Extended_Pictographic}‍️\s]+/u, '');
}

export const reducedMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function sfx(name, opts) {
  try { if (window.VKAudio) window.VKAudio.sfx(name, opts); } catch { /* ses yoksa sessiz */ }
}
export function audioScene(name) {
  try { if (window.VKAudio) window.VKAudio.setScene(name); } catch { /* yoksay */ }
}

export function vibrate(pattern) {
  try { if (navigator.vibrate) navigator.vibrate(pattern); } catch { /* yoksay */ }
}
