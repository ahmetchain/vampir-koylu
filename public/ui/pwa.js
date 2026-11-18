// PWA: service worker kaydı ve "Ana ekrana ekle / Uygulamayı yükle" düğmesi (yalnızca menüde, yüklü değilse).
import { toast } from './kit.js';

const standalone = () => window.matchMedia('(display-mode: fullscreen)').matches || window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

let deferred = null;
let btn = null;

function ensureButton(label, onClick) {
  const host = document.querySelector('#screen-menu .menu-actions');
  if (!host || standalone()) return;
  if (!btn) {
    btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-secondary btn-block pwa-install';
    btn.id = 'pwa-install';
    host.appendChild(btn);
  }
  btn.textContent = label;
  btn.onclick = onClick;
}

export function initPwa() {
  // Servis işçisi: yalnızca güvenli bağlantıda (https ya da localhost).
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
  }
  // Android/Chrome: yükleme istemini yakala, menüye "Uygulamayı yükle" düğmesi koy.
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferred = e;
    ensureButton('📲 Uygulamayı yükle', async () => {
      if (!deferred) return;
      deferred.prompt();
      try { await deferred.userChoice; } catch (err) { /* sessiz */ }
      deferred = null;
      if (btn) { btn.remove(); btn = null; }
    });
  });
  window.addEventListener('appinstalled', () => { deferred = null; if (btn) { btn.remove(); btn = null; } toast('Uygulama yüklendi 🎉', 'info', 3000); });
  // iPhone/iPad Safari: otomatik istem yok; nasıl ekleneceğini göster.
  if (isIOS() && !standalone()) {
    ensureButton('📲 Ana ekrana ekle', () => toast('Safari\'de Paylaş ⬆️ düğmesine, sonra "Ana Ekrana Ekle"ye dokun.', 'info', 7000));
  }
}
