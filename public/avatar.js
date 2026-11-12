// Köylü karakterlerini SVG olarak çizer. Her şey kodla üretilir, dışarıdan görsel dosyası gerekmez.
(() => {
  'use strict';

  // Sunucudaki COLOR_COUNT ile aynı uzunlukta olmalı.
  const COLORS = [
    { name: 'Kırmızı', body: '#d7263d' },
    { name: 'Mavi', body: '#2b59c3' },
    { name: 'Yeşil', body: '#2f9e44' },
    { name: 'Pembe', body: '#f06595' },
    { name: 'Turuncu', body: '#f76707' },
    { name: 'Sarı', body: '#f2c12e' },
    { name: 'Siyah', body: '#3b3b46' },
    { name: 'Beyaz', body: '#e9ecef' },
    { name: 'Mor', body: '#7048e8' },
    { name: 'Kahverengi', body: '#8d5a3b' },
    { name: 'Camgöbeği', body: '#15aabf' },
    { name: 'Fıstık', body: '#94d82d' },
    { name: 'Bordo', body: '#862e3c' },
    { name: 'Gül', body: '#ffa8c5' },
    { name: 'Lacivert', body: '#1c2e6e' },
    { name: 'Gri', body: '#868e96' },
    { name: 'Bej', body: '#d9b99b' },
    { name: 'Mercan', body: '#ff8364' },
    { name: 'Zeytin', body: '#6b7a2a' },
    { name: 'Lavanta', body: '#b197fc' },
  ];

  // Sunucudaki HAT_COUNT ile aynı uzunlukta olmalı.
  const HATS = ['Yok', 'Hasır şapka', 'Bere', 'Çiçek', 'Silindir', 'Bandana', 'Filiz', 'Kasket', 'Kulaklık'];

  const ROLE_ICON = {
    vampir: '🧛', doktor: '🩺', kahin: '🔮', cadi: '🧪', avci: '🏹', muhtar: '🎖️', soytari: '🃏', koylu: '🧑‍🌾',
  };

  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const f = (c) => Math.max(0, Math.min(255, Math.round(c + (amt < 0 ? c * amt : (255 - c) * amt))));
    const r = f(n >> 16);
    const g = f((n >> 8) & 255);
    const b = f(n & 255);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  function hatSVG(hat, c) {
    switch (hat) {
      case 1: // hasır şapka
        return `<g class="hat"><ellipse cx="50" cy="26" rx="34" ry="7" fill="#e8c46a" stroke="#a9862f" stroke-width="2"/>
          <path d="M32 26 Q34 8 50 8 Q66 8 68 26 Z" fill="#f0d27e" stroke="#a9862f" stroke-width="2"/>
          <path d="M33 21 Q50 25 67 21" stroke="#c0392b" stroke-width="4" fill="none"/></g>`;
      case 2: // bere
        return `<g class="hat"><path d="M27 30 Q28 6 50 6 Q72 6 73 30 Z" fill="${shade(c, -0.35)}" stroke="#00000044" stroke-width="2"/>
          <rect x="25" y="25" width="50" height="8" rx="4" fill="${shade(c, -0.15)}"/>
          <circle cx="50" cy="5" r="6" fill="#fff"/></g>`;
      case 3: // çiçek
        return `<g class="hat" transform="translate(66 14)">${[0, 72, 144, 216, 288].map((a) => `<ellipse rx="5" ry="8" fill="#ff6fa8" transform="rotate(${a}) translate(0 -7)"/>`).join('')}
          <circle r="5" fill="#ffd43b"/></g>`;
      case 4: // silindir
        return `<g class="hat"><ellipse cx="50" cy="24" rx="27" ry="6" fill="#222"/>
          <rect x="36" y="-4" width="28" height="28" rx="3" fill="#2b2b2b"/>
          <rect x="36" y="14" width="28" height="6" fill="#c92a2a"/></g>`;
      case 5: // bandana
        return `<g class="hat"><path d="M26 28 Q30 12 50 11 Q70 12 74 28 Q50 22 26 28 Z" fill="#e03131"/>
          <circle cx="40" cy="20" r="1.8" fill="#fff"/><circle cx="56" cy="17" r="1.8" fill="#fff"/><circle cx="64" cy="23" r="1.8" fill="#fff"/>
          <path d="M74 26 l9 -2 l-4 8 Z" fill="#c92a2a"/></g>`;
      case 6: // filiz
        return `<g class="hat"><path d="M50 16 Q50 6 50 2" stroke="#2f9e44" stroke-width="3" fill="none"/>
          <path d="M50 6 Q40 -4 32 4 Q42 10 50 6 Z" fill="#51cf66"/><path d="M50 4 Q60 -6 68 2 Q58 8 50 4 Z" fill="#40c057"/></g>`;
      case 7: // kasket
        return `<g class="hat"><path d="M28 28 Q29 10 50 9 Q71 10 72 28 Z" fill="#495057"/>
          <path d="M60 26 Q80 24 86 30 Q70 32 58 30 Z" fill="#343a40"/><circle cx="50" cy="10" r="3" fill="#343a40"/></g>`;
      case 8: // kulaklık
        return `<g class="hat"><path d="M24 42 Q24 8 50 8 Q76 8 76 42" stroke="#343a40" stroke-width="5" fill="none"/>
          <rect x="16" y="34" width="12" height="18" rx="5" fill="#f03e3e"/><rect x="72" y="34" width="12" height="18" rx="5" fill="#f03e3e"/></g>`;
      default:
        return '';
    }
  }

  // Rol kostümleri: sadece rolü görmeye hakkı olanlara çizilir (oyun sonu, takım arkadaşı vb.).
  function costumeSVG(role, c) {
    switch (role) {
      case 'vampir':
        return {
          back: `<path d="M18 52 Q10 92 20 108 L50 98 L80 108 Q90 92 82 52 Q50 64 18 52 Z" fill="#1a0b10"/>
                 <path d="M22 56 Q16 90 24 102 L50 94 L76 102 Q84 90 78 56 Q50 66 22 56 Z" fill="#8b0f24"/>`,
          front: `<path d="M24 50 L36 40 L50 52 L64 40 L76 50 L64 58 L50 54 L36 58 Z" fill="#1a0b10"/>`,
          face: `<path d="M44 66 l2 6 l2 -6 M52 66 l2 6 l2 -6" fill="#fff" stroke="#fff" stroke-width="1"/>`,
        };
      case 'doktor':
        return {
          front: `<rect x="38" y="78" width="24" height="10" rx="3" fill="#fff"/><rect x="47" y="74" width="6" height="18" rx="2" fill="#e03131"/><rect x="41" y="80" width="18" height="6" rx="2" fill="#e03131"/>`,
          hat: `<g class="hat"><path d="M30 26 Q30 10 50 10 Q70 10 70 26 Z" fill="#fff" stroke="#ced4da" stroke-width="2"/><rect x="46" y="13" width="8" height="10" fill="#e03131"/><rect x="44" y="15" width="12" height="6" fill="#e03131"/></g>`,
        };
      case 'kahin':
        return {
          back: `<path d="M20 30 Q50 -8 80 30 L86 90 Q50 100 14 90 Z" fill="#5f3dc4"/>`,
          hat: `<g class="hat"><path d="M24 34 Q50 -14 76 34 Q50 22 24 34 Z" fill="#7048e8"/><circle cx="50" cy="16" r="3" fill="#ffd43b"/></g>`,
          front: `<circle cx="50" cy="96" r="9" fill="#a5d8ff" stroke="#fff" stroke-width="2" opacity=".9"/>`,
        };
      case 'cadi':
        return {
          hat: `<g class="hat"><ellipse cx="50" cy="26" rx="34" ry="6" fill="#212529"/><path d="M34 26 L56 -18 Q60 -2 66 26 Z" fill="#2b2b2b"/><rect x="36" y="18" width="29" height="5" fill="#9c36b5"/></g>`,
          front: `<path d="M38 90 q-6 -10 2 -14 q2 6 6 2 q2 8 -8 12 Z" fill="#69db7c"/>`,
        };
      case 'avci':
        return {
          hat: `<g class="hat"><path d="M26 28 Q28 8 50 8 Q72 8 74 28 Z" fill="#5c940d"/><rect x="22" y="24" width="56" height="6" rx="3" fill="#3f6212"/><path d="M68 18 Q86 0 80 20" stroke="#e03131" stroke-width="3" fill="none"/></g>`,
          back: `<path d="M74 40 Q96 70 74 104" stroke="#8d5a3b" stroke-width="4" fill="none"/><path d="M74 40 L74 104" stroke="#ddd" stroke-width="1"/>`,
        };
      case 'muhtar':
        return {
          front: `<path d="M24 56 L76 92" stroke="#f2c12e" stroke-width="7"/><circle cx="50" cy="74" r="5" fill="#f08c00"/>`,
          hat: hatSVG(4, c),
        };
      case 'soytari':
        return {
          hat: `<g class="hat"><path d="M28 30 Q20 6 8 12 Q22 16 34 28 Z" fill="#e03131"/><path d="M72 30 Q80 6 92 12 Q78 16 66 28 Z" fill="#7048e8"/>
                <path d="M34 30 Q50 0 66 30 Z" fill="#f2c12e"/><circle cx="8" cy="12" r="4" fill="#ffd43b"/><circle cx="92" cy="12" r="4" fill="#ffd43b"/><circle cx="50" cy="4" r="4" fill="#ffd43b"/></g>`,
          front: `<path d="M32 56 L42 64 L50 56 L58 64 L68 56 L68 62 L32 62 Z" fill="#fff"/>`,
        };
      default:
        return {};
    }
  }

  function eyesSVG(mode) {
    if (mode === 'closed') {
      return `<path d="M35 50 Q41 55 47 50 M53 50 Q59 55 65 50" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    }
    if (mode === 'dead') {
      return `<path d="M36 44 l10 10 M46 44 l-10 10 M54 44 l10 10 M64 44 l-10 10" stroke="#222" stroke-width="3.5" stroke-linecap="round"/>`;
    }
    if (mode === 'scared') {
      return `<g class="eyes"><ellipse cx="41" cy="49" rx="8" ry="10" fill="#fff"/><ellipse cx="59" cy="49" rx="8" ry="10" fill="#fff"/>
        <circle cx="41" cy="49" r="2.5" fill="#222"/><circle cx="59" cy="49" r="2.5" fill="#222"/></g>`;
    }
    return `<g class="eyes"><ellipse cx="41" cy="49" rx="7" ry="8.5" fill="#fff"/><ellipse cx="59" cy="49" rx="7" ry="8.5" fill="#fff"/>
      <circle class="pupil" cx="42.5" cy="50.5" r="3.6" fill="#222"/><circle class="pupil" cx="60.5" cy="50.5" r="3.6" fill="#222"/>
      <circle cx="44" cy="48.5" r="1.2" fill="#fff"/><circle cx="62" cy="48.5" r="1.2" fill="#fff"/></g>`;
  }

  function mouthSVG(mode) {
    if (mode === 'dead' || mode === 'scared') return `<ellipse cx="50" cy="66" rx="4" ry="5" fill="#3b1d1d"/>`;
    if (mode === 'happy') return `<path d="M42 62 Q50 72 58 62 Z" fill="#3b1d1d"/>`;
    if (mode === 'closed') return `<path d="M46 65 Q50 67 54 65" stroke="#3b1d1d" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    return `<path d="M45 63 Q50 67 55 63" stroke="#3b1d1d" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  }

  /**
   * look: { color, hat }
   * opts.role: kostüm çizilecek rol (yoksa normal şapka)
   * opts.mood: 'normal' | 'closed' | 'dead' | 'happy' | 'scared'
   */
  function avatar(look, opts = {}) {
    const color = (COLORS[look && look.color] || COLORS[0]).body;
    const dark = shade(color, -0.32);
    const light = shade(color, 0.3);
    const mood = opts.mood || 'normal';
    const costume = opts.role ? costumeSVG(opts.role, color) : {};
    const hat = costume.hat !== undefined ? costume.hat : hatSVG(look ? look.hat : 0, color);
    const eyes = eyesSVG(mood === 'happy' ? 'normal' : mood);
    return `<svg class="av" viewBox="-6 -22 112 142" aria-hidden="true">
      <ellipse class="av-shadow" cx="50" cy="114" rx="28" ry="5" fill="#000" opacity=".28"/>
      <g class="av-legs">
        <ellipse class="foot foot-l" cx="38" cy="108" rx="10" ry="7" fill="${dark}"/>
        <ellipse class="foot foot-r" cx="62" cy="108" rx="10" ry="7" fill="${dark}"/>
      </g>
      <g class="av-body">
        ${costume.back || ''}
        <path d="M50 14 C24 14 18 38 18 60 C18 88 26 106 50 106 C74 106 82 88 82 60 C82 38 76 14 50 14 Z" fill="${color}" stroke="${dark}" stroke-width="3"/>
        <path d="M30 34 Q34 22 46 20" stroke="${light}" stroke-width="5" fill="none" stroke-linecap="round" opacity=".7"/>
        <ellipse cx="50" cy="88" rx="16" ry="11" fill="${light}" opacity=".35"/>
        <ellipse class="hand hand-l" cx="20" cy="76" rx="6" ry="7" fill="${dark}"/>
        <ellipse class="hand hand-r" cx="80" cy="76" rx="6" ry="7" fill="${dark}"/>
        ${eyes}
        <ellipse cx="33" cy="60" rx="5" ry="3" fill="#ff8787" opacity=".45"/>
        <ellipse cx="67" cy="60" rx="5" ry="3" fill="#ff8787" opacity=".45"/>
        ${mouthSVG(mood)}
        ${costume.face || ''}
        ${costume.front || ''}
        ${hat}
      </g>
    </svg>`;
  }

  function tombstone(name, role) {
    return `<svg class="av tomb" viewBox="-6 -22 112 142" aria-hidden="true">
      <ellipse cx="50" cy="112" rx="34" ry="6" fill="#000" opacity=".3"/>
      <path d="M22 110 L22 50 Q22 22 50 22 Q78 22 78 50 L78 110 Z" fill="#6c7280" stroke="#3d424d" stroke-width="3"/>
      <path d="M28 104 L28 52 Q28 30 50 30" stroke="#8a90a0" stroke-width="3" fill="none"/>
      <text x="50" y="62" text-anchor="middle" font-size="16" font-weight="700" fill="#2d3039" font-family="serif">RIP</text>
      ${role ? `<text x="50" y="92" text-anchor="middle" font-size="22">${ROLE_ICON[role] || ''}</text>` : ''}
      <path d="M14 112 Q30 104 44 112 Q60 102 76 112 Q84 106 90 112" stroke="#2f9e44" stroke-width="4" fill="none"/>
    </svg>`;
  }

  function ghost(look) {
    const color = (COLORS[look && look.color] || COLORS[0]).body;
    return `<svg class="av ghost" viewBox="-6 -22 112 142" aria-hidden="true">
      <path d="M22 100 L22 50 Q22 18 50 18 Q78 18 78 50 L78 100 L70 92 L62 100 L54 92 L46 100 L38 92 L30 100 Z" fill="#f1f3f5" opacity=".85"/>
      <path d="M30 98 L30 52" stroke="${color}" stroke-width="4" opacity=".6"/>
      <ellipse cx="41" cy="50" rx="5" ry="7" fill="#222"/><ellipse cx="59" cy="50" rx="5" ry="7" fill="#222"/>
      <ellipse cx="50" cy="68" rx="4" ry="5" fill="#222"/>
    </svg>`;
  }

  window.VKAvatar = { COLORS, HATS, ROLE_ICON, avatar, tombstone, ghost };
})();
