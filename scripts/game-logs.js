#!/usr/bin/env node
'use strict';

// Her oyunun tam geçmişini (lib/ai/gamerec.js, docs/GAME-LOGS.md) sunucudan indirir ve istenirse güçlü bir modele
// çözümlettirir. Çözümleme varsayılan olarak SUNUCUDA, sunucunun anahtarıyla yapılır (bu bilgisayarda geçerli anahtar gerekmez).
//
//   node scripts/game-logs.js                        yeni oyun geçmişlerini çeker (REVIEW_URL + ADMIN_TOKEN)
//   node scripts/game-logs.js --all                  daha önce çekilenleri de yeniden çeker
//   node scripts/game-logs.js --analyze [id ...]     verilen oyunları (yoksa en yenisini) SUNUCUDA çözümlettirir -> analysis-<id>.md
//   node scripts/game-logs.js --analyze --latest N   sunucudaki en yeni N oyunu çözümlettirir (zaten çözümlenmişler ücretsiz gelir)
//   [--force]                                        kayıtlı çözümlemeyi yok sayıp yeniden çözümlettirir
//   [--local-model]                                  eski davranış: modele bu bilgisayardaki ANTHROPIC_API_KEY ile doğrudan gider
//   node scripts/game-logs.js --local FILE           yerel bir geçmiş JSON'unu markdown'a çevirir (--analyze ile yerel modelle çözümletir)
//   [--out DIR] [--model claude-sonnet-5-5] [--effort low|medium|high] (yalnızca yerel model) [--limit N]
//
// ADMIN_TOKEN ve REVIEW_URL (yayındaki sitenin adresi) ortamdan ya da git'e girmeyen .env.local dosyasından okunur;
// hiçbir yere yazdırılmaz. Çıktı (git'e girmez): ai-eval-out/game-logs/
//   json/<id>.json   ham geçmiş      <tarih>-<oda>-<id>.md   okunur döküm      analysis-<id>.md   model çözümlemesi

const fs = require('fs');
const path = require('path');
const { loadEnvLocal, ROOT } = require('./env-local');
const { logMarkdown } = require('../lib/ai/gamelog-format');

const write = (file, text) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, text); };
const safeName = (s) => String(s || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 40) || 'x';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const money = (n) => `$${(Number(n) || 0).toFixed(4)}`;

function parseArgs(argv) {
  const a = {
    out: path.join(ROOT, 'ai-eval-out', 'game-logs'), all: false, analyze: false, ids: [], local: null, model: '', effort: '', limit: 500,
    latest: 0, force: false, localModel: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    if (k === '--out') a.out = path.resolve(argv[++i]);
    else if (k === '--all') a.all = true;
    else if (k === '--local') a.local = path.resolve(argv[++i]);
    else if (k === '--local-model') a.localModel = true;
    else if (k === '--force') a.force = true;
    else if (k === '--latest') a.latest = Math.max(1, Math.min(50, Number.parseInt(argv[++i], 10) || 1));
    else if (k === '--model') a.model = String(argv[++i] || '');
    else if (k === '--effort') a.effort = String(argv[++i] || '');
    else if (k === '--limit') a.limit = Math.max(1, Number.parseInt(argv[++i], 10) || 500);
    else if (k === '--analyze') {
      a.analyze = true;
      while (argv[i + 1] && !argv[i + 1].startsWith('--')) a.ids.push(argv[++i]);
    } else if (k === '--help' || k === '-h') a.help = true;
  }
  return a;
}

function fileFor(meta) {
  return `${String(meta.date || '').slice(0, 10)}-${safeName(meta.room)}-${safeName(meta.id)}.md`;
}

// Sunucudan gelen { id, date, room, hasReview, reviewId, record } kaydını yazar (json + md).
function saveLog(outDir, full) {
  write(path.join(outDir, 'json', `${safeName(full.id)}.json`), JSON.stringify(full));
  const file = path.join(outDir, fileFor(full));
  write(file, logMarkdown(full.record, { reviewId: full.reviewId }));
  return file;
}

// ---------- sunucudan çekme ----------

async function apiGet(base, token, pathname) {
  const res = await fetch(`${base}${pathname}`, { headers: { Authorization: `Bearer ${token}` } });
  if (res.status === 404) {
    const j = await res.json().catch(() => null);
    if (j && j.code === 'not_found' && /geçmişi/.test(j.error || '')) throw new Error('Oyun geçmişi bulunamadı (404).');
    throw new Error('Yönetici adresi kapalı ya da sunucu bu sürümde değil (404; sunucuda ADMIN_TOKEN tanımlı mı?).');
  }
  if (res.status === 401) throw new Error('ADMIN_TOKEN reddedildi (401).');
  if (res.status === 429) throw new Error('Çok fazla istek (429); biraz bekleyin.');
  if (!res.ok) throw new Error(`Sunucu cevabı: ${res.status}`);
  return res.json();
}

function remote(env) {
  const token = String(env.ADMIN_TOKEN || '').trim();
  const base = String(env.REVIEW_URL || '').trim().replace(/\/+$/, '');
  if (!token || !base) throw new Error('ADMIN_TOKEN ve REVIEW_URL gerekli (ortam değişkeni ya da .env.local).');
  return { token, base };
}

async function fetchOne(env, id, outDir) {
  const { token, base } = remote(env);
  const full = await apiGet(base, token, `/api/admin/game-logs/${encodeURIComponent(id)}`);
  return { full: full.log, file: saveLog(outDir, full.log) };
}

async function fetchRemote(args, env) {
  const { token, base } = remote(env);
  const statePath = path.join(args.out, '.state.json');
  let state = { since: 0 };
  try { state = JSON.parse(fs.readFileSync(statePath, 'utf8')); } catch { /* ilk çalıştırma */ }
  const since = args.all ? 0 : Number(state.since) || 0;
  const list = await apiGet(base, token, `/api/admin/game-logs?limit=${args.limit}&since=${since}`);
  const rows = (list.logs || []).slice().sort((a, b) => a.createdAt - b.createdAt);
  let newest = Number(state.since) || 0;
  for (const row of rows) {
    const full = await apiGet(base, token, `/api/admin/game-logs/${encodeURIComponent(row.id)}`);
    saveLog(args.out, full.log);
    newest = Math.max(newest, row.createdAt);
  }
  write(statePath, JSON.stringify({ since: newest }));
  console.log(`${rows.length} yeni oyun geçmişi çekildi -> ${args.out}`);
  return rows;
}

// ---------- çözümleme: yerel model (--local-model) ----------

// Tek oyun geçmişini bu bilgisayardan çözümletir. { ok, text, usage, cost, model } döner; hata atar (anlaşılır mesajla).
async function analyzeLog(record, md, env, { transport = null, model = '', effort = '', log = () => {}, sleep: wait = sleep } = {}) {
  const { analyzeConfig, analyzeTranscript } = require('../lib/ai/analyze');
  const { sdkTransport } = require('../lib/ai/client');
  const cfg = analyzeConfig({ ...env, ...(model ? { AI_ANALYZE_MODEL: model } : {}), ...(effort ? { AI_ANALYZE_EFFORT: effort } : {}) });
  const useTransport = transport || (cfg.apiKey ? sdkTransport(cfg.apiKey) : null);
  if (!useTransport) throw new Error('--local-model için bu bilgisayarda ANTHROPIC_API_KEY gerekli (anahtarsız kullanmak için --local-model olmadan çalıştırın: çözümleme sunucuda yapılır).');
  try {
    // Bu bilgisayarda TLS ara katmanı bazen bağlantıyı bozar (SELF_SIGNED_CERT_IN_CHAIN): birkaç kez dene.
    return await analyzeTranscript({
      md, config: cfg, transport: useTransport, retries: 6, sleep: wait,
      log: (n, max) => log(`  ağ hatası, yeniden deneniyor (${n}/${max - 1})...`),
    });
  } catch (err) {
    const why = err && err.reason ? err.reason : 'error';
    const c = err && err.cost ? ` (maliyet ≈ ${money(err.cost)})` : '';
    if (why === 'auth') throw new Error(`ANTHROPIC_API_KEY reddedildi (${err.status || 'auth'}): anahtar geçersiz ya da iptal edilmiş.`);
    if (why === 'refusal') throw new Error(`Model reddetti${c}.`);
    if (why === 'empty') throw new Error(`Model boş cevap verdi${c}.`);
    if (why === 'malformed') throw new Error('Model cevabı okunamadı.');
    throw new Error(`Model isteği başarısız (${why}${err && err.status ? ` ${err.status}` : ''}).`);
  }
}

function analysisFile(outDir, id) { return path.join(outDir, `analysis-${safeName(id)}.md`); }

function writeAnalysis(args, id, a) {
  const u = a.usage;
  const tokens = u ? ` · token: girdi=${u.input_tokens || 0} çıktı=${u.output_tokens || 0}` : '';
  const file = analysisFile(args.out, id);
  write(file, `# Oyun ${id} çözümlemesi\n\n- Model: ${a.model || '?'} · maliyet ≈ ${money(a.cost)}${tokens}${a.where ? ` · ${a.where}` : ''}${a.truncated ? ' · UYARI: çıktı sınıra takıldı' : ''}\n\n${a.text}\n`);
  return file;
}

async function runAnalysis(args, env, items, opts = {}) {
  let total = 0;
  for (const { id, record, md } of items) {
    console.log(`Çözümleniyor (yerel model): ${id} (${md.length} karakter)...`);
    const res = await analyzeLog(record, md, env, { model: args.model, effort: args.effort, log: console.log, ...opts });
    const file = writeAnalysis(args, id, res);
    total += res.cost;
    console.log(`  Yazıldı: ${file}`);
    console.log(`  Maliyet ≈ ${money(res.cost)} (model ${res.model}, girdi=${res.usage.input_tokens || 0} önbellek_yazma=${res.usage.cache_creation_input_tokens || 0} çıktı=${res.usage.output_tokens || 0})`);
  }
  if (items.length > 1) console.log(`Toplam çözümleme maliyeti ≈ ${money(total)}`);
  return total;
}

// ---------- çözümleme: sunucuda (varsayılan) ----------

const FAIL_TEXT = {
  auth: 'sunucunun ANTHROPIC_API_KEY anahtarı reddedildi', network: 'sunucunun model bağlantısı koptu', timeout: 'model zaman aşımına uğradı',
  rate_limit: 'model istek sınırı', bad_request: 'model isteği geçersiz', api_error: 'model hatası', refusal: 'model reddetti', empty: 'model boş cevap verdi',
  malformed: 'model cevabı okunamadı', store: 'sonuç depoya yazılamadı', error: 'bilinmeyen hata',
};

// Sunucuya istek atar; hız sınırına (429) takılırsa Retry-After kadar bekleyip yeniden dener.
async function apiCall(base, token, method, pathname, { wait = sleep } = {}) {
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(`${base}${pathname}`, { method, headers: { Authorization: `Bearer ${token}` } });
    let j = null;
    try { j = await res.json(); } catch { /* gövde yok */ }
    if (res.status === 429 && !(j && j.code === 'daily_limit') && attempt < 5) {
      await wait((Math.min(120, Number(res.headers.get('retry-after')) || 10) + 1) * 1000);
      continue;
    }
    if (res.status === 404 && j && j.code === 'not_found' && /geçmişi/.test(j.error || '')) throw new Error('Oyun geçmişi bulunamadı (404).');
    if (res.status === 404) throw new Error('Yönetici adresi kapalı ya da sunucu bu sürümde değil (404; sunucuda ADMIN_TOKEN tanımlı mı?).');
    if (res.status === 401) throw new Error('ADMIN_TOKEN reddedildi (401).');
    if (res.status === 429 && j && j.code === 'daily_limit') throw new Error(j.error || 'Günlük çözümleme sınırına ulaşıldı.');
    if (res.status === 429) throw new Error('Çok fazla istek (429); biraz bekleyin.');
    if (res.status === 503 && j && j.code === 'analyze_disabled') throw new Error(j.error || 'Sunucuda çözümleme kapalı.');
    if (!res.ok) throw new Error(`Sunucu cevabı: ${res.status}${j && j.error ? ` (${j.error})` : ''}`);
    return { status: res.status, json: j || {} };
  }
}

// Sunucuda çözümletir, bitene kadar sorar. { text, cost, model, analyzedAt, cached } döner.
async function remoteAnalyze(args, env, id, { pollMs = Number(env.VK_ANALYZE_POLL_MS) || 8000, maxMs = 20 * 60 * 1000, wait = sleep, say = console.log } = {}) {
  const { token, base } = remote(env);
  const enc = encodeURIComponent(id);
  const start = await apiCall(base, token, 'POST', `/api/admin/game-logs/${enc}/analyze${args.force ? '?force=1' : ''}`, { wait });
  if (start.json.status === 'done') say('  Önceden çözümlenmiş (sunucudan alınıyor; --force ile yeniden çözümletilir).');
  else if (start.json.alreadyRunning) say('  Sunucuda zaten çözümleniyor, bekleniyor...');
  const t0 = Date.now();
  let none = 0;
  let nextNote = 30000;
  for (;;) {
    const r = await apiCall(base, token, 'GET', `/api/admin/game-logs/${enc}/analysis`, { wait });
    const a = r.json.analysis || {};
    if (a.status === 'done') return { text: a.text, cost: a.cost, model: a.model, analyzedAt: a.analyzedAt, cached: start.json.status === 'done' };
    if (a.status === 'failed') throw new Error(`Sunucuda çözümleme başarısız: ${FAIL_TEXT[a.reason] || a.reason || 'hata'}.`);
    // 'none': iş bellekte yok (sunucu yeniden başladı ya da uyudu); üst üste görülürse vazgeç.
    none = a.status === 'none' ? none + 1 : 0;
    if (none >= 3) throw new Error('Sunucuda çözümleme işi kayboldu (sunucu yeniden başlamış olabilir); yeniden deneyin.');
    const spent = Date.now() - t0;
    if (spent > maxMs) throw new Error('Çözümleme beklenenden uzun sürdü; sonra yeniden çalıştırın (bitmişse sonuç sunucuda saklanır, ek maliyet olmaz).');
    if (spent >= nextNote) { say(`  hâlâ çözümleniyor... (${Math.round(spent / 1000)} sn)`); nextNote += 30000; }
    await wait(pollMs);
  }
}

// --analyze için kimlikler: verilenler; yoksa sunucudaki en yeni N oyun (--latest N, varsayılan 1).
async function pickIds(args, env) {
  if (args.ids.length) return args.ids;
  const { token, base } = remote(env);
  const list = await apiGet(base, token, `/api/admin/game-logs?limit=${args.latest || 1}`);
  const ids = (list.logs || []).map((r) => r.id);
  if (!ids.length) throw new Error('Çözümlenecek oyun geçmişi yok.');
  return ids;
}

async function runRemote(args, env) {
  const ids = await pickIds(args, env);
  let total = 0;
  for (const id of ids) {
    console.log(`Sunucuda çözümleniyor: ${id}...`);
    const { full, file: transcript } = await fetchOne(env, id, args.out);   // okunur döküm de yerelde dursun
    const res = await remoteAnalyze(args, env, id);
    const file = writeAnalysis(args, full.id, { ...res, where: 'sunucuda çözümlendi' });
    if (!res.cached) total += Number(res.cost) || 0;
    console.log(`  Yazıldı: ${file}`);
    console.log(`  Maliyet ≈ ${money(res.cost)} (model ${res.model || '?'}${res.cached ? '; önceden çözümlenmişti, yeni maliyet yok' : ''}); döküm: ${transcript}`);
  }
  if (ids.length > 1) console.log(`Toplam yeni çözümleme maliyeti ≈ ${money(total)}`);
  return total;
}

// Yerel dosyalardan (json/<id>.json) yükler; yoksa sunucudan çeker.
async function loadItem(args, env, id) {
  const jsonFile = path.join(args.out, 'json', `${safeName(id)}.json`);
  let full = null;
  try { full = JSON.parse(fs.readFileSync(jsonFile, 'utf8')); } catch { /* sunucudan */ }
  if (!full) full = (await fetchOne(env, id, args.out)).full;
  return { id: full.id, record: full.record, md: logMarkdown(full.record, { reviewId: full.reviewId }) };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(3, 16).join('\n')); return; }
  const env = loadEnvLocal(process.env, { main: true });
  if (args.local) {
    const raw = JSON.parse(fs.readFileSync(args.local, 'utf8'));
    const record = raw.record && raw.record.events ? raw.record : raw;
    const md = logMarkdown(record, {});
    const file = path.join(args.out, `local-${safeName(record.id)}.md`);
    write(file, md);
    console.log(`Yazıldı: ${file}`);
    if (args.analyze) await runAnalysis(args, env, [{ id: record.id, record, md }]);
    return;
  }
  if (args.analyze && !args.localModel) {
    if (args.model || args.effort) console.log('Not: --model/--effort yalnızca --local-model ile geçerli; sunucu AI_ANALYZE_MODEL / AI_ANALYZE_EFFORT kullanır.');
    await runRemote(args, env);
    return;
  }
  let fetched = [];
  if (!args.analyze || !args.ids.length) fetched = await fetchRemote(args, env);
  if (args.analyze) {
    let ids = args.ids;
    if (!ids.length) {
      // Yeni çekilenlerin en yenisi; hiç yoksa yerel klasördeki en yeni geçmiş.
      const newest = fetched.length ? fetched[fetched.length - 1].id : null;
      const dir = path.join(args.out, 'json');
      const local = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => ({ f, t: fs.statSync(path.join(dir, f)).mtimeMs })).sort((a, b) => b.t - a.t) : [];
      ids = [newest || (local[0] && local[0].f.replace(/\.json$/, ''))].filter(Boolean);
      if (!ids.length) throw new Error('Çözümlenecek oyun geçmişi yok.');
    }
    const items = [];
    for (const id of ids) items.push(await loadItem(args, env, id));
    await runAnalysis(args, env, items);
  }
}

if (require.main === module) main().catch((e) => { console.error(e && e.message ? e.message : e); process.exit(1); });

module.exports = {
  parseArgs, saveLog, fileFor, fetchRemote, fetchOne, analyzeLog, runAnalysis, remoteAnalyze, runRemote, analysisFile, writeAnalysis,
};
