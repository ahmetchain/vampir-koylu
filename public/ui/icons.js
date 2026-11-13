// Arayüz ikonları ve rol amblemleri: bu proje için çizilmiş satır içi SVG'ler (emoji kullanılmaz).
// Hepsi 24x24 görünüm kutusunda, çizgi rengi currentColor.

const P = {
  // --- arayüz ---
  moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>',
  sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  chat: '<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4h0A2.5 2.5 0 0 1 4 13.5z"/>',
  book: '<path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/><path d="M7 8h1.5M7 11h1.5M15.5 8H17M15.5 11H17"/>',
  users: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3 19.5c.6-3.3 3-5 6-5s5.4 1.7 6 5"/><path d="M15.5 5.6a3 3 0 0 1 0 5.8M17.5 14.6c1.8.6 3 2.2 3.4 4.9"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2.8l1.6 2.3 2.7-.7.6 2.7 2.6 1-.9 2.6 1.9 2-1.9 2 .9 2.6-2.6 1-.6 2.7-2.7-.7L12 21.2l-1.6-2.3-2.7.7-.6-2.7-2.6-1 .9-2.6-1.9-2 1.9-2-.9-2.6 2.6-1 .6-2.7 2.7.7z"/>',
  logout: '<path d="M14 4h4.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H14"/><path d="M10 8l-4 4 4 4M6 12h9"/>',
  share: '<circle cx="6.5" cy="12" r="2.5"/><circle cx="17.5" cy="6" r="2.5"/><circle cx="17.5" cy="18" r="2.5"/><path d="M8.7 10.8l6.6-3.6M8.7 13.2l6.6 3.6"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/><path d="M12 14.5v2"/>',
  crown: '<path d="M4 17.5L3 8l5 4 4-6.5 4 6.5 5-4-1 9.5z"/><path d="M4.5 20.5h15"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  send: '<path d="M4 12l16-8-6 16-2.5-6.5z"/><path d="M11.5 13.5L20 4"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="M3 3l18 18"/><path d="M10.6 5.6A10 10 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-2.9 3.7M6.3 6.9C3.9 8.6 2.5 12 2.5 12S6 18.5 12 18.5c1.5 0 2.9-.4 4-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  ghost: '<path d="M5.5 20V11a6.5 6.5 0 0 1 13 0v9l-2.2-1.6-2.1 1.6-2.2-1.6-2.2 1.6-2.1-1.6z"/><circle cx="9.7" cy="11" r=".9" fill="currentColor"/><circle cx="14.3" cy="11" r=".9" fill="currentColor"/>',
  tomb: '<path d="M6.5 20.5V10a5.5 5.5 0 0 1 11 0v10.5"/><path d="M4 20.5h16M12 9v6M9.5 11.5h5"/>',
  zz: '<path d="M4 6h6l-6 7h6M13 11h6l-6 7h6"/>',
  check: '<path d="M4.5 12.5l4.5 4.5L19.5 6.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  palette: '<path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.2 0 1.8-.8 1.8-1.7 0-1.3-1.2-1.6-1.2-2.8 0-1 .8-1.7 1.8-1.7h2.2a3.9 3.9 0 0 0 3.9-3.9C20.5 6.7 16.7 3.5 12 3.5z"/><circle cx="7.6" cy="11" r="1.2" fill="currentColor"/><circle cx="10.2" cy="7.4" r="1.2" fill="currentColor"/><circle cx="14.6" cy="7.6" r="1.2" fill="currentColor"/>',
  trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 5.5H4.5a3.5 3.5 0 0 0 3.8 4.4M16 5.5h3.5a3.5 3.5 0 0 1-3.8 4.4"/><path d="M12 13v3.5M8.5 20h7l-1-3.5h-5z"/>',
  door: '<path d="M6 20.5V5a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 5v15.5"/><path d="M3.5 20.5h17"/><circle cx="14.5" cy="12.5" r="1" fill="currentColor"/>',
  play: '<path d="M7.5 5v14l11-7z"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  next: '<path d="M9 5l7 7-7 7"/>',
  volume: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/>',
  mute: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/>',
  refresh: '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4h-4"/>',
  bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/><path d="M12 3v2"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r=".9" fill="currentColor"/>',
  star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z"/>',
  key: '<circle cx="8" cy="15.5" r="4"/><path d="M11 12.5l8.5-8.5M16.5 7l2.5 2.5M14.5 9l2 2"/>',
  wifiOff: '<path d="M3 3l18 18"/><path d="M8.5 16a5 5 0 0 1 7 0M5 12.5a10 10 0 0 1 4.5-2.4M12.5 10a10 10 0 0 1 6.5 2.5M2 9a15 15 0 0 1 4-2.6M10 5.6A15 15 0 0 1 22 9"/><circle cx="12" cy="19.5" r=".9" fill="currentColor"/>',
  house: '<path d="M3.5 11L12 4l8.5 7"/><path d="M5.5 9.5v10h13v-10"/><path d="M10 19.5v-5h4v5"/>',
  vote: '<path d="M5 13.5l3.5 3.5L15 10"/><rect x="3" y="4" width="18" height="16.5" rx="3"/>',
  hand: '<path d="M8 12V5.5a1.5 1.5 0 0 1 3 0V11M11 10.5V4.5a1.5 1.5 0 0 1 3 0v6M14 10.5V6a1.5 1.5 0 0 1 3 0v7.5c0 4-2.5 7-6.5 7-2.7 0-4.4-1.4-5.6-3.6L3.4 13.6a1.5 1.5 0 0 1 2.5-1.6L8 14.5"/>',
  scroll: '<path d="M7 4.5h11.5a2 2 0 0 1 2 2V8H17"/><path d="M17 8v10.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V17h9.5v1.5a2 2 0 0 0 3.5 0"/><path d="M7 4.5a2 2 0 0 0-2 2V17M9 9h5M9 12.5h5"/>',
  sparkle: '<path d="M12 3.5l1.8 5 5 1.8-5 1.8-1.8 5-1.8-5-5-1.8 5-1.8z"/><path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
  undo: '<path d="M9 7.5L4.5 12 9 16.5"/><path d="M4.5 12H14a5.5 5.5 0 0 1 0 11h-2" transform="translate(0 -4)"/>',
  hat: '<path d="M3 16.5c3 1.5 15 1.5 18 0"/><path d="M6.5 16V9.5a5.5 3 0 0 1 11 0V16"/>',
  shirt: '<path d="M8.5 4L4 6.5l1.5 4 2-.8V20h9V9.7l2 .8 1.5-4L15.5 4a3.5 3.5 0 0 1-7 0z"/>',
  music: '<path d="M9 18.5V6l11-2.5v12.5"/><circle cx="6.5" cy="18.5" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/><path d="M9 10l11-2.5"/>',
  flame: '<path d="M12 21c-4 0-6.5-2.6-6.5-6 0-3.6 3-5.6 3.8-9.5 2.6 1.5 3.4 3.8 3.2 6 1-.6 1.8-1.7 2-3.2 2 1.6 3 3.9 3 6.7 0 3.4-2.5 6-5.5 6z"/><path d="M12 21c-1.6 0-2.7-1.1-2.7-2.6 0-1.6 1.3-2.4 1.7-4.1 1.9 1 2.9 2.4 2.9 4 0 1.5-.8 2.7-1.9 2.7z"/>',
  bot: '<rect x="4.5" y="7.5" width="15" height="11.5" rx="3.5"/><path d="M12 7.5V4.5"/><circle cx="12" cy="3.6" r="1.1" fill="currentColor"/><circle cx="9" cy="12.5" r="1.4" fill="currentColor"/><circle cx="15" cy="12.5" r="1.4" fill="currentColor"/><path d="M9.5 16h5M2.5 12v3M21.5 12v3"/>',
  gauge: '<path d="M4 17a8 8 0 1 1 16 0"/><path d="M12 17l4-5"/><circle cx="12" cy="17" r="1.3" fill="currentColor"/>',
  chevDown: '<path d="M6 9l6 6 6-6"/>',
  chevUp: '<path d="M6 15l6-6 6 6"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.2 1.2"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.2-1.2"/>',
};

// Rol amblemleri (rozet içinde gösterilir).
const R = {
  vampir: '<path d="M3.5 6.5c2.5 1 4 1 5.5 0 1 1.3 2 2 3 2s2-.7 3-2c1.5 1 3 1 5.5 0-.6 5.8-3.2 9.8-8.5 12.5C6.7 16.3 4.1 12.3 3.5 6.5z"/><path d="M9.5 11.5l1 3 1-3M12.5 11.5l1 3 1-3"/>',
  iftiraci: '<path d="M3.5 8c3-1.5 5.5-1.5 8.5 0 3-1.5 5.5-1.5 8.5 0-.3 4.5-2.6 7-5.2 7-1.6 0-2.6-.9-3.3-2.2-.7 1.3-1.7 2.2-3.3 2.2C6.1 15 3.8 12.5 3.5 8z"/><path d="M6.8 10.2c.8-.6 1.8-.6 2.6 0M14.6 10.2c.8-.6 1.8-.6 2.6 0"/><path d="M17.5 15.5l1.5 5M19 20.5l-2.5-.5"/>',
  doktor: '<path d="M12 3.5l7 2.5v5.5c0 4.4-2.9 7.6-7 9-4.1-1.4-7-4.6-7-9V6z"/><path d="M12 8.5v7M8.5 12h7"/>',
  kahin: '<circle cx="12" cy="10.5" r="6.5"/><path d="M8 20.5h8l-1.5-3h-5z"/><path d="M9.5 8.5a3 3 0 0 1 2.5-1.5"/><path d="M14.5 12.5l.4 1 1 .4-1 .4-.4 1-.4-1-1-.4 1-.4z"/>',
  gozcu: '<path d="M2.5 12.5S6 6.5 12 6.5s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12.5" r="3.2"/><circle cx="12" cy="12.5" r="1" fill="currentColor"/><path d="M12 2.5v2M5.5 4.5l1.2 1.6M18.5 4.5l-1.2 1.6"/>',
  cadi: '<path d="M10 3.5h4M10.5 3.5v4.2L6 16a3.8 3.8 0 0 0 3.3 5h5.4A3.8 3.8 0 0 0 18 16l-4.5-8.3V3.5"/><path d="M7.8 14h8.4"/><circle cx="10.5" cy="17" r=".9" fill="currentColor"/><circle cx="13.6" cy="18.2" r=".7" fill="currentColor"/>',
  avci: '<path d="M6 3.5c5 2 8 5.4 8 8.5s-3 6.5-8 8.5"/><path d="M6 3.5v17"/><path d="M3 12h17M17 9l3 3-3 3"/>',
  muhtar: '<circle cx="12" cy="14.5" r="5.5"/><path d="M9 3.5l3 5 3-5M8 3.5h2.5M13.5 3.5H16"/><path d="M12 11.8l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3z"/>',
  soytari: '<path d="M4 9c2.5-4 5.5-5 8-2 2.5-3 5.5-2 8 2-2 0-3.4 1-4 3H8c-.6-2-2-3-4-3z"/><circle cx="4" cy="9" r="1.3"/><circle cx="20" cy="9" r="1.3"/><circle cx="12" cy="5" r="1.3"/><path d="M8 12c0 5 1.8 8 4 8s4-3 4-8"/><path d="M10 15.5c.6.7 1.3 1 2 1s1.4-.3 2-1"/>',
  koylu: '<path d="M12 21V8"/><path d="M12 8c-2.5 0-3.5-2-3.5-4.5C11 3.5 12 5.5 12 8zM12 8c2.5 0 3.5-2 3.5-4.5C13 3.5 12 5.5 12 8z"/><path d="M12 13c-2.5 0-4-1.8-4-4.3 2.6 0 4 1.8 4 4.3zM12 13c2.5 0 4-1.8 4-4.3-2.6 0-4 1.8-4 4.3zM12 17.5c-2.5 0-4-1.8-4-4.3 2.6 0 4 1.8 4 4.3zM12 17.5c2.5 0 4-1.8 4-4.3-2.6 0-4 1.8-4 4.3z"/>',
};

// Şapka simgeleri (görünüm düzenleyici).
const HATS = [
  '<circle cx="12" cy="12" r="7.5"/><path d="M7 17L17 7"/>',
  '<path d="M2.5 15.5c4 2.2 15 2.2 19 0"/><path d="M6.5 15.2c0-4.2 2.3-7.2 5.5-7.2s5.5 3 5.5 7.2"/><path d="M7 12.8c3 .9 7 .9 10 0"/>',
  '<path d="M5 16.5c0-5.5 3.1-9 7-9s7 3.5 7 9z"/><path d="M4.5 16.5h15v2.5h-15z"/><circle cx="12" cy="5.5" r="2"/>',
  '<circle cx="12" cy="11" r="2.2"/><circle cx="12" cy="6.3" r="2.6"/><circle cx="16.4" cy="9.6" r="2.6"/><circle cx="14.7" cy="14.8" r="2.6"/><circle cx="9.3" cy="14.8" r="2.6"/><circle cx="7.6" cy="9.6" r="2.6"/><path d="M12 17.5v4"/>',
  '<path d="M7.5 15.5V5.5h9v10"/><path d="M3.5 15.5h17v2.5h-17z"/><path d="M7.5 12.5h9"/>',
  '<path d="M4.5 14c0-5 3.4-8 7.5-8s7.5 3 7.5 8z"/><path d="M4.5 14h15"/><path d="M19.5 14l2 4M19.5 14l-.5 4.5"/><circle cx="9" cy="10.5" r=".8" fill="currentColor"/><circle cx="14" cy="9.5" r=".8" fill="currentColor"/>',
  '<path d="M12 21v-9"/><path d="M12 12c-4.5 0-6.5-3-6.5-6.5 4.2 0 6.5 2.6 6.5 6.5zM12 14.5c3.8 0 5.5-2.5 5.5-5.5-3.5 0-5.5 2.2-5.5 5.5z"/>',
  '<path d="M4.5 14.5c0-5 3.4-8 7.5-8s7 2.6 7.4 6.8"/><path d="M4.5 14.5h10c3 0 5.5.6 7 2-1.5.8-4 1-7 1h-10z"/><circle cx="12" cy="6" r="1" fill="currentColor"/>',
  '<path d="M5.5 15V12a6.5 6.5 0 0 1 13 0v3"/><rect x="3" y="13" width="5" height="7" rx="2"/><rect x="16" y="13" width="5" height="7" rx="2"/>',
];

function svg(body, cls, label) {
  const aria = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"';
  return `<svg class="ic ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" ${aria}>${body}</svg>`;
}

export function icon(name, cls = '', label = '') {
  return svg(P[name] || P.info, cls, label);
}
export function roleIcon(role, cls = '') {
  return svg(R[role] || R.koylu, cls);
}
// Renkli yuvarlak rozet içinde rol amblemi.
export function emblem(role, size = 'm', color) {
  const c = color || (ROLE_COLORS[role] || '#c9a96e');
  return `<span class="emblem emblem-${size}" style="--rc:${c}">${roleIcon(role)}</span>`;
}
export function hatIcon(i, cls = '') {
  return svg(HATS[i] || HATS[0], cls);
}

const ROLE_COLORS = {
  vampir: '#d7263d', iftiraci: '#b0408a', doktor: '#3fb58a', kahin: '#8f7cff', gozcu: '#e8a33a',
  cadi: '#6cc04a', avci: '#c9772b', muhtar: '#f2c12e', soytari: '#ff6fae', koylu: '#c9a96e',
};

// Oyunun amblemi: hilal ay, sivri çatılı ev ve iki küçük diş.
export function logoMark(cls = '') {
  return `<svg class="logo-mark ${cls}" viewBox="0 0 96 96" aria-hidden="true">
    <defs>
      <radialGradient id="lgGlow" cx="50%" cy="45%" r="55%"><stop offset="0" stop-color="#3a2a6b"/><stop offset="1" stop-color="#15122b"/></radialGradient>
      <linearGradient id="lgFire" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd27a"/><stop offset="1" stop-color="#ff7a1a"/></linearGradient>
    </defs>
    <circle cx="48" cy="48" r="45" fill="url(#lgGlow)" stroke="#8fb4ff" stroke-opacity=".35" stroke-width="2"/>
    <path d="M70 22a20 20 0 1 0 6 26 16 16 0 1 1-6-26z" fill="#f4e4c1"/>
    <path d="M18 78V56l15-13 15 13v22z" fill="#221c44" stroke="#f4e4c1" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M44 78V60l14-12 14 12v18z" fill="#2a2252" stroke="#f4e4c1" stroke-width="2.5" stroke-linejoin="round"/>
    <rect x="28" y="62" width="10" height="16" rx="5" fill="url(#lgFire)"/>
    <rect x="53" y="63" width="9" height="8" rx="2" fill="url(#lgFire)"/>
    <path d="M12 78h72" stroke="#f4e4c1" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M30 30c2-3 5-3.5 7-1.5 1-2 2.6-2.6 3.5-1.6.9-1 2.5-.4 3.5 1.6 2-2 5-1.5 7 1.5-2.6-.4-4.2.6-4.6 2.2-1.4-.9-3-.7-3.9.5-.4-.9-1.1-1.3-2-1.3s-1.6.4-2 1.3c-.9-1.2-2.5-1.4-3.9-.5-.4-1.6-2-2.6-4.6-2.2z" fill="#15122b" stroke="#f4e4c1" stroke-width="1" stroke-linejoin="round"/>
  </svg>`;
}
