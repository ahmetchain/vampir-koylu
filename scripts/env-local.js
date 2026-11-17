'use strict';

// Geliştirme betikleri için .env.local okuyucu (git'e girmez). Önce bu klasörün kökü aranır; main: true ise
// (git worktree'de) ana çalışma klasörünün dosyası da denenir (yalnızca ai-reviews.js ister; ai-eval.js anahtarı
// başka klasörden kendiliğinden almaz). Ortamdaki değişkenler önceliklidir. Değerler hiçbir yere yazdırılmaz.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function loadEnvLocal(env = process.env, { main = false } = {}) {
  const out = { ...env };
  if (env.VK_NO_ENV_LOCAL) return out;   // testler: gerçek anahtarlar kazara kullanılmasın
  const candidates = [path.join(ROOT, '.env.local'), ...(main ? [path.resolve(ROOT, '..', '..', '..', '.env.local')] : [])];
  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*(?:export\s+)?([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (!m || m[1].startsWith('#')) continue;
      if (out[m[1]] === undefined || out[m[1]] === '') out[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
    break;
  }
  return out;
}

module.exports = { loadEnvLocal, ROOT };
