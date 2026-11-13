// HTML katmanı: isim etiketleri, rozetler, oy noktaları, konuşma balonları, ev tabelaları, dokunma halkası.
// Sınıflar 'vkw-' önekli; stiller paket tarafından bir kez eklenir.
import * as THREE from 'three';
import { COLOR_HEX } from './constants.js';

const CSS = `
.vkw-root{position:absolute;inset:0;overflow:hidden;contain:strict;-webkit-tap-highlight-color:transparent;touch-action:none;user-select:none;-webkit-user-select:none}
.vkw-root canvas{position:absolute;inset:0;width:100%!important;height:100%!important;display:block;outline:none}
.vkw-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 46%,rgba(0,0,0,0) 55%,rgba(8,4,24,.38) 100%);transition:opacity 1.5s}
.vkw-ov{position:absolute;inset:0;pointer-events:none;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#f6f1ff}
.vkw-tag,.vkw-plaque,.vkw-bubble{position:absolute;left:0;top:0;will-change:transform;transform:translate3d(-9999px,0,0)}
.vkw-ov [hidden]{display:none!important}
.vkw-tag{display:flex;flex-direction:column;align-items:center;gap:2px;white-space:nowrap}
.vkw-name{display:flex;align-items:center;gap:4px;padding:2px 7px 2px 5px;border-radius:999px;background:rgba(21,18,43,.72);font-size:12px;font-weight:700;line-height:15px;letter-spacing:.01em;box-shadow:0 1px 3px rgba(0,0,0,.35);text-shadow:0 1px 1px rgba(0,0,0,.5)}
.vkw-name i{display:inline-block;width:9px;height:9px;border-radius:50%;border:1.5px solid rgba(255,255,255,.85);flex:none}
.vkw-job{margin-top:-1px;font-size:10px;font-weight:600;line-height:11px;color:#f4e4c1;opacity:.9;text-shadow:0 1px 2px #000,0 0 3px #000;letter-spacing:.02em}
.vkw-tag.cmp .vkw-name{font-size:11px;padding:1px 6px 1px 4px;line-height:14px}
.vkw-tag.cmp .vkw-name i{width:8px;height:8px}
.vkw-bubble.old{opacity:.38!important}
.vkw-tag.me .vkw-name{background:rgba(58,42,107,.88);box-shadow:0 0 0 1.5px rgba(244,228,193,.8),0 1px 3px rgba(0,0,0,.4)}
.vkw-tag.off .vkw-name{opacity:.6}
.vkw-tag.dead .vkw-name{background:rgba(60,56,90,.6);font-style:italic}
.vkw-tag.sel .vkw-name{pointer-events:auto;cursor:pointer}
.vkw-tag.sel .vkw-name{background:rgba(34,28,68,.9);box-shadow:0 0 0 2px var(--c,#f2c12e),0 2px 6px rgba(0,0,0,.45);padding:4px 9px 4px 6px;font-size:13px}
.vkw-tag.hover .vkw-name,.vkw-tag.picked .vkw-name{background:var(--c,#f2c12e);color:#15122b;text-shadow:none}
.vkw-mark{font-size:11px;font-weight:700;padding:1px 6px;border-radius:6px;background:rgba(21,18,43,.8);border:1px solid var(--c,#f2c12e);color:#fff}
.vkw-votes{display:flex;align-items:center;gap:2px;padding:1px 4px;border-radius:999px;background:rgba(244,228,193,.92);color:#2a1c10;font-size:11px;font-weight:800}
.vkw-votes b{margin-right:2px}
.vkw-votes i{width:8px;height:8px;border-radius:50%;border:1px solid rgba(0,0,0,.35);font-style:normal;font-size:7px;line-height:7px;text-align:center;color:#fff}
.vkw-plaque{display:flex;align-items:center;gap:5px;padding:2px 8px 2px 4px;border-radius:5px;background:linear-gradient(#6b4a2e,#4f3520);border:1px solid #2e1f12;color:#f4e4c1;font-size:11px;font-weight:700;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,.35);opacity:.92;transition:opacity .4s}
.vkw-plaque span{max-width:92px;overflow:hidden;text-overflow:ellipsis}
.vkw-plaque i{width:10px;height:14px;border-radius:2px 2px 5px 5px;flex:none;border:1px solid rgba(0,0,0,.4)}
.vkw-plaque.dim{opacity:.0}
.vkw-plaque.sel{pointer-events:auto;cursor:pointer;font-size:13px;padding:5px 10px 5px 6px;opacity:1;box-shadow:0 0 0 2px var(--c,#f2c12e),0 3px 8px rgba(0,0,0,.5)}
.vkw-plaque.sel::after{content:'';position:absolute;inset:-5px;border-radius:9px;border:2px solid var(--c,#f2c12e);will-change:opacity;animation:vkw-pulse 1.6s ease-in-out infinite;pointer-events:none}
.vkw-plaque.picked{background:var(--c,#f2c12e);color:#15122b}
.vkw-plaque.picked::after{animation:none;opacity:1}
.vkw-plaque.dead{filter:grayscale(.8);opacity:.6}
@keyframes vkw-pulse{0%,100%{opacity:.9}50%{opacity:.15}}
.vkw-bubble{max-width:180px;padding:5px 9px;border-radius:12px;background:#f4e4c1;color:#2a1c10;font-size:12.5px;font-weight:600;line-height:1.3;white-space:normal;box-shadow:0 3px 8px rgba(0,0,0,.35);opacity:0;transition:opacity .25s;word-break:break-word}
.vkw-bubble::after{content:'';position:absolute;left:50%;bottom:-6px;margin-left:-6px;border:6px solid transparent;border-bottom:0;border-top-color:inherit;border-top-color:#f4e4c1}
.vkw-bubble.show{opacity:1}
.vkw-bubble[data-ch=vampir]{background:#5a1020;color:#ffe3e8}.vkw-bubble[data-ch=vampir]::after{border-top-color:#5a1020}
.vkw-bubble[data-ch=olu]{background:#d8d0ff;color:#2a2050;font-style:italic}.vkw-bubble[data-ch=olu]::after{border-top-color:#d8d0ff}
.vkw-ripple{position:absolute;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;border:2px solid rgba(244,228,193,.9);pointer-events:none;animation:vkw-rip .55s ease-out forwards}
@keyframes vkw-rip{from{transform:scale(.2);opacity:1}to{transform:scale(1.4);opacity:0}}
.vkw-recenter{position:absolute;width:40px;height:40px;border-radius:50%;border:0;background:rgba(21,18,43,.75);color:#f4e4c1;font-size:20px;line-height:40px;text-align:center;pointer-events:auto;cursor:pointer;opacity:0;transform:scale(.6);transition:opacity .25s,transform .25s;box-shadow:0 2px 6px rgba(0,0,0,.4);padding:0}
.vkw-recenter.show{opacity:1;transform:scale(1)}
.vkw-recenter:not(.show){pointer-events:none}
@media (max-width:540px){.vkw-job{font-size:9.5px}.vkw-tag.sel .vkw-name{padding:3px 8px 3px 5px;font-size:12.5px}.vkw-plaque.sel{font-size:11.5px;padding:3px 7px 3px 4px}.vkw-plaque span{max-width:64px}.vkw-plaque{font-size:10.5px}}
@media (min-width:900px){.vkw-name{font-size:13px}.vkw-plaque{font-size:12px}}
`;

let styleEl = null;
let styleRefs = 0;
function injectStyle() {
  styleRefs++;
  if (styleEl) return;
  styleEl = document.createElement('style');
  styleEl.id = 'vkw-style';
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);
}
function releaseStyle() {
  styleRefs--;
  if (styleRefs <= 0 && styleEl) { styleEl.remove(); styleEl = null; styleRefs = 0; }
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const tmp = new THREE.Vector3();

export function createOverlay(root, handlers) {
  injectStyle();
  const ov = document.createElement('div');
  ov.className = 'vkw-ov';
  root.appendChild(ov);
  const tags = new Map();
  const plaques = new Map();
  const bubbles = new Map();
  let W = 1, H = 1;
  let compact = false;
  let ins = { top: 0, bottom: 0, left: 0, right: 0 };
  let bubbleSeq = 0;

  const recenter = document.createElement('button');
  recenter.className = 'vkw-recenter';
  recenter.type = 'button';
  recenter.title = 'Görünümü sıfırla';
  recenter.setAttribute('aria-label', 'Görünümü sıfırla');
  recenter.textContent = '⌖';
  recenter.addEventListener('click', (e) => { e.stopPropagation(); handlers.onRecenter(); });
  ov.appendChild(recenter);

  // Etiketlere dokunma: küçük kaymalarda tıklama say
  function bindTap(el, fn) {
    let sx = 0, sy = 0, t = 0;
    el.addEventListener('pointerdown', (e) => { sx = e.clientX; sy = e.clientY; t = performance.now(); e.stopPropagation(); });
    el.addEventListener('pointerup', (e) => {
      e.stopPropagation();
      if (Math.hypot(e.clientX - sx, e.clientY - sy) < 12 && performance.now() - t < 700) fn();
    });
    el.addEventListener('click', (e) => e.stopPropagation());
  }

  function tag(id) {
    let t = tags.get(id);
    if (t) return t;
    const el = document.createElement('div');
    el.className = 'vkw-tag';
    el.innerHTML = '<span class="vkw-mark" hidden></span><span class="vkw-votes" hidden></span><span class="vkw-name"></span><span class="vkw-job" hidden></span>';
    ov.insertBefore(el, recenter);
    t = { el, mark: el.children[0], votes: el.children[1], name: el.children[2], job: el.children[3], sig: '', markSig: '', voteSig: '', cls: '', w: 60, h: 20, measured: false, x: 0, y: 0, shown: false };
    bindTap(el, () => handlers.onTagTap(id));
    tags.set(id, t);
    return t;
  }

  function plaque(id) {
    let p = plaques.get(id);
    if (p) return p;
    const el = document.createElement('div');
    el.className = 'vkw-plaque';
    ov.insertBefore(el, ov.firstChild);
    p = { el, sig: '', cls: '', shown: false };
    bindTap(el, () => handlers.onPlaqueTap(id));
    plaques.set(id, p);
    return p;
  }

  // Durum bilgisini etikete yaz (yalnızca değişince DOM'a dokunur)
  function setTag(id, d) {
    const t = tag(id);
    const sig = d.name + '|' + d.job + '|' + d.color + '|' + d.badges;
    if (sig !== t.sig) {
      t.sig = sig;
      t.name.innerHTML = `<i style="background:${COLOR_HEX[d.color] || '#999'}"></i>${d.badges ? `<span>${d.badges}</span>` : ''}<span>${esc(d.name)}</span>`;
      t.job.textContent = d.job || '';
      t.jobText = d.job || '';
      t.measured = false;
    }
    const markSig = d.mark ? d.mark.label + d.mark.color : '';
    if (markSig !== t.markSig) {
      t.markSig = markSig;
      t.mark.hidden = !d.mark;
      if (d.mark) { t.mark.textContent = d.mark.label; t.mark.style.setProperty('--c', d.mark.color); }
      t.measured = false;
    }
    const voteSig = d.votes ? d.votes.total + ':' + d.votes.dots.join(',') : '';
    if (voteSig !== t.voteSig) {
      t.voteSig = voteSig;
      t.votes.hidden = !d.votes;
      if (d.votes) t.votes.innerHTML = `<b>${d.votes.total}</b>` + d.votes.dots.map((c) => `<i style="background:${c.color}">${c.w > 1 ? '2' : ''}</i>`).join('');
      t.measured = false;
    }
    const showJob = !!t.jobText && (!compact || d.picked || d.hover);
    if (t.job.hidden === showJob) { t.job.hidden = !showJob; t.measured = false; }
    const cls = 'vkw-tag' + (compact ? ' cmp' : '') + (d.me ? ' me' : '') + (d.off ? ' off' : '') + (d.dead ? ' dead' : '') + (d.sel ? ' sel' : '') + (d.picked ? ' picked' : '') + (d.hover ? ' hover' : '');
    if (cls !== t.cls) { t.cls = cls; t.el.className = cls; }
    if (d.selColor) t.el.style.setProperty('--c', d.selColor);
    t.data = d;
  }

  function setPlaque(id, d) {
    const p = plaque(id);
    const sig = d.name + '|' + d.color + '|' + (d.mark ? d.mark.label : '');
    if (sig !== p.sig) {
      p.sig = sig;
      p.el.innerHTML = `<i style="background:${COLOR_HEX[d.color] || '#c9b48a'}"></i><span>${esc(d.name)}</span>${d.mark ? `<em style="font-style:normal;font-size:10.5px;padding:0 4px;border-radius:4px;background:rgba(0,0,0,.35);color:#fff">${esc(d.mark.label)}</em>` : ''}`;
    }
    const cls = 'vkw-plaque' + (d.sel ? ' sel' : '') + (d.picked ? ' picked' : '') + (d.dim ? ' dim' : '') + (d.dead ? ' dead' : '');
    if (cls !== p.cls) { p.cls = cls; p.el.className = cls; }
    if (d.selColor) p.el.style.setProperty('--c', d.selColor);
    p.data = d;
  }

  function removeMissing(map, keep) {
    for (const [id, x] of map) if (!keep.has(id)) { x.el.remove(); map.delete(id); }
  }

  function bubble(id, text, channel) {
    let b = bubbles.get(id);
    if (!b) {
      const el = document.createElement('div');
      el.className = 'vkw-bubble';
      ov.insertBefore(el, recenter);
      b = { el, until: 0, h: 30 };
      bubbles.set(id, b);
    }
    b.el.textContent = text.length > 90 ? text.slice(0, 88) + '…' : text;
    b.el.dataset.ch = channel || 'genel';
    b.el.classList.add('show');
    b.until = performance.now() + 3200 + Math.min(3000, text.length * 45);
    b.h = 0;
    b.seq = ++bubbleSeq;
  }

  // Ekrana yansıtma ve çakışma giderme
  const placed = [];
  function project(camera, anchorFn, plaqueAnchorFn, tagVisibleFn) {
    const list = [];
    for (const [id, t] of tags) {
      const ok = anchorFn(id, tmp) && tagVisibleFn(id);
      if (!ok) { if (t.shown) { t.el.style.transform = 'translate3d(-9999px,0,0)'; t.shown = false; } t.vis = false; continue; }
      tmp.project(camera);
      if (tmp.z > 1 || tmp.x < -1.2 || tmp.x > 1.2 || tmp.y < -1.2 || tmp.y > 1.3) { if (t.shown) { t.el.style.transform = 'translate3d(-9999px,0,0)'; t.shown = false; } t.vis = false; continue; }
      if (!t.measured) { t.w = t.el.offsetWidth || 60; t.h = t.el.offsetHeight || 20; t.measured = true; }
      t.sx = (tmp.x * 0.5 + 0.5) * W; t.sy = (-tmp.y * 0.5 + 0.5) * H; t.depth = tmp.z;
      t.vis = true;
      list.push(t);
    }
    // yakındakiler (ekranda aşağıdakiler) önce yerleşir, diğerleri yukarı kayar
    list.sort((a, b) => b.sy - a.sy);
    placed.length = 0;
    for (const t of list) {
      let x = t.sx - t.w / 2, y = t.sy - t.h;
      for (let iter = 0; iter < 6; iter++) {
        let moved = false;
        for (const p of placed) {
          if (x < p.x + p.w - 2 && x + t.w > p.x + 2 && y < p.y + p.h - 1 && y + t.h > p.y + 1) {
            y = p.y - t.h - 1; moved = true;
          }
        }
        if (!moved) break;
      }
      x = Math.max(ins.left + 2, Math.min(W - ins.right - t.w - 2, x));
      y = Math.max(ins.top + 2, Math.min(H - ins.bottom - t.h - 2, y));
      placed.push({ x, y, w: t.w, h: t.h, t });
      t.x = x; t.y = y;
      t.el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
      t.el.style.zIndex = String(10 + Math.round((1 - t.depth) * 1000));
      t.shown = true;
    }
    // balonlar etiketin üstünde; yeniden eskiye yerleşir, çakışan yukarı kayar, eskiler solar
    const now = performance.now();
    const bl = [];
    for (const [id, b] of bubbles) {
      const t = tags.get(id);
      if (now > b.until) { if (b.el.classList.contains('show')) b.el.classList.remove('show'); }
      if (!t || !t.vis || now > b.until + 400) { b.el.style.transform = 'translate3d(-9999px,0,0)'; continue; }
      if (!b.h) { b.h = b.el.offsetHeight || 30; b.w = b.el.offsetWidth || 100; }
      bl.push({ b, t });
    }
    bl.sort((p, q) => q.b.seq - p.b.seq);
    const bplaced = [];
    bl.forEach(({ b, t }, i) => {
      let x = Math.max(ins.left + 4, Math.min(W - ins.right - b.w - 4, t.sx - b.w / 2));
      let y = t.y - b.h - 8;
      for (let iter = 0; iter < 6; iter++) {
        let moved = false;
        for (const p of bplaced) if (x < p.x + p.w && x + b.w > p.x && y < p.y + p.h + 4 && y + b.h + 4 > p.y) { y = p.y - b.h - 6; moved = true; }
        // başka birinin etiketini örtme (kendi etiketi zaten altında)
        for (const p of placed) if (p.t !== t && x < p.x + p.w && x + b.w > p.x && y < p.y + p.h + 2 && y + b.h + 2 > p.y) { y = p.y - b.h - 4; moved = true; }
        if (!moved) break;
      }
      y = Math.max(ins.top + 4, y);
      bplaced.push({ x, y, w: b.w, h: b.h });
      b.el.classList.toggle('old', i >= 3);
      b.el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
      b.el.style.zIndex = String(2000 + (100 - i));
    });
    // ev tabelaları: yansıt, sonra birbirinden it (en fazla ~28 px kayma)
    const pl = [];
    for (const [id, p] of plaques) {
      const ok = plaqueAnchorFn(id, tmp) && !(p.data && p.data.hidden);
      if (!ok) { if (p.shown) { p.el.style.transform = 'translate3d(-9999px,0,0)'; p.shown = false; } continue; }
      tmp.project(camera);
      if (tmp.z > 1 || Math.abs(tmp.x) > 1.15 || Math.abs(tmp.y) > 1.15) { if (p.shown) { p.el.style.transform = 'translate3d(-9999px,0,0)'; p.shown = false; } continue; }
      if (!p.w || p.sigW !== p.sig + p.cls) { p.w = p.el.offsetWidth || 70; p.h = p.el.offsetHeight || 20; p.sigW = p.sig + p.cls; }
      p.ax = (tmp.x * 0.5 + 0.5) * W; p.ay = (-tmp.y * 0.5 + 0.5) * H;
      p.px = p.ax; p.py = p.ay;
      pl.push(p);
    }
    for (let it = 0; it < 5; it++) {
      for (let i = 0; i < pl.length; i++) {
        const a = pl[i];
        for (let j = i + 1; j < pl.length; j++) {
          const b = pl[j];
          const ox = (a.w + b.w) / 2 + 3 - Math.abs(a.px - b.px), oy = (a.h + b.h) / 2 + 2 - Math.abs(a.py - b.py);
          if (ox > 0 && oy > 0) {
            // daha az örtüşen eksende ayır
            if (oy < ox) { const s = (a.py < b.py ? -1 : 1) * oy / 2; a.py += s; b.py -= s; }
            else { const s = (a.px < b.px ? -1 : 1) * ox / 2; a.px += s; b.px -= s; }
          }
        }
      }
      for (const p of pl) {
        const dx = p.px - p.ax, dy = p.py - p.ay, d = Math.hypot(dx, dy);
        if (d > 28) { p.px = p.ax + dx / d * 28; p.py = p.ay + dy / d * 28; }
      }
    }
    for (const p of pl) {
      const x = Math.max(ins.left + 2, Math.min(W - ins.right - p.w - 2, p.px - p.w / 2)), y = Math.max(ins.top + 2, Math.min(H - ins.bottom - p.h - 2, p.py - p.h / 2));
      p.el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
      p.el.style.zIndex = p.data && p.data.sel ? '900' : '5';
      p.shown = true;
    }
  }

  function ripple(x, y) {
    const el = document.createElement('div');
    el.className = 'vkw-ripple';
    el.style.left = x + 'px'; el.style.top = y + 'px';
    ov.appendChild(el);
    setTimeout(() => el.remove(), 600);
  }

  return {
    el: ov,
    setSize(w, h) { W = w; H = h; for (const t of tags.values()) t.measured = false; },
    setInsets(o) { ins = { top: o.top || 0, bottom: o.bottom || 0, left: o.left || 0, right: o.right || 0 }; },
    setCompact(c) { if (c !== compact) { compact = c; for (const t of tags.values()) { t.sig = ''; t.measured = false; } } },
    setTag, setPlaque, bubble, project, ripple,
    tags, plaques,
    sync(tagIds, plaqueIds) { removeMissing(tags, tagIds); removeMissing(plaques, plaqueIds); for (const [id, b] of bubbles) if (!tagIds.has(id)) { b.el.remove(); bubbles.delete(id); } },
    setRecenter(show, insets) {
      recenter.classList.toggle('show', !!show);
      recenter.style.right = (12 + (insets.right || 0)) + 'px';
      recenter.style.bottom = (12 + (insets.bottom || 0)) + 'px';
    },
    // ekran noktasına en yakın seçilebilir etiket
    hitTag(x, y) {
      for (const t of tags.values()) {
        if (!t.vis || !t.data || !t.data.sel) continue;
        if (x >= t.x - 6 && x <= t.x + t.w + 6 && y >= t.y - 6 && y <= t.y + t.h + 6) return t;
      }
      return null;
    },
    clear() { for (const m of [tags, plaques, bubbles]) { for (const x of m.values()) x.el.remove(); m.clear(); } },
    dispose() { ov.remove(); releaseStyle(); },
  };
}
