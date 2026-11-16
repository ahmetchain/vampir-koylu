'use strict';

// Akıllı bot testleri için sahte Claude taşıyıcısı (ağ yok) ve sahte saatle oyun sürme yardımcıları.
// Taşıyıcı, SDK'nın messages.create yanıtı biçiminde cevap verir; kararlarını istemdeki izin verilen
// isimlerden tohumlu rastgele seçer. Her istem kaydedilir (bilgi sınırı denetimi için).

const { Room } = require('../game');
const { AiClient } = require('../lib/ai/client');
const { aiConfig } = require('../lib/ai/config');

function mulberry(seed) {
  let a = 0;
  for (const ch of String(seed)) a = (Math.imul(a ^ ch.charCodeAt(0), 2654435761) >>> 0);
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let x = a;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

// Kaba token tahmini (Türkçe + İngilizce karışık metin, yeni tokenizer): ~3,2 karakter/token.
const estTokens = (s) => Math.ceil(String(s || '').length / 3.2);

function section(user, tag) {
  const m = user.match(new RegExp(`<${tag}>\\n([\\s\\S]*?)\\n</${tag}>`));
  return m ? m[1] : '';
}

function allowedNames(task) {
  const m = task.match(/allowed: ([^)]*)\)/);
  if (!m || m[1] === 'nobody') return [];
  return m[1].split(', ').map((s) => s.trim()).filter(Boolean);
}

const SAY = ['Dün gece çok sessizdi, kim ne gördü?', 'Bence acele etmeyelim.', 'Sen neden bu kadar sessizsin?', 'Bu oylar biraz garip.', 'Haklısın, ikna oldum.'];

// mode: 'ok' | 'error' | 'hang' | 'refusal' | 'malformed' | 'max_tokens' | fonksiyon(params) → mod
// decide(ctx) → çıktı alanlarını özelleştirmek için (ctx: { user, task, kind, rng, out }).
// spare: bu isim gece hedefi olarak hiç seçilmez (insan oyuncu testte hayatta kalsın diye).
function mockTransport({ seed = 'mock', latency = 400, mode = 'ok', decide = null, spare = null } = {}) {
  const rng = mulberry(seed);
  const calls = [];
  let cached = false;
  const transport = (params, { signal } = {}) => {
    const user = params.messages[0].content;
    const system = params.system[0].text;
    const m = typeof mode === 'function' ? mode(params) : mode;
    calls.push({ params, user, system, mode: m });
    return new Promise((resolve, reject) => {
      if (signal) signal.addEventListener('abort', () => { const e = new Error('aborted'); e.name = 'AbortError'; reject(e); });
      if (m === 'hang') return;
      const lat = typeof latency === 'function' ? latency(params) : latency;
      setTimeout(() => {
        if (m === 'error') { const e = new Error('boom'); e.status = 500; reject(e); return; }
        const task = section(user, 'task');
        const names = allowedNames(task).filter((n) => !(spare && /^NIGHT/.test(task) && n === spare));
        const pick = names.length ? names[Math.floor(rng() * names.length)] : '';
        const out = { say: '', vote: '', target: '', poison: '', memory: '' };
        if (/^NIGHT/.test(task)) out.target = pick;
        else if (/Decide your vote|COURT re-vote/.test(task)) { out.vote = pick; out.target = /door to lock/.test(task) ? pick : ''; }
        else if (/shoot one last arrow/.test(task)) out.target = pick;
        else {
          out.say = SAY[Math.floor(rng() * SAY.length)];
          const alive = section(user, 'players').split('\n').filter((l) => / · alive · /.test(l) && !/\(you\)/.test(l))
            .map((l) => l.replace(/^- /, '').split(/ · | \[bot\]/)[0]);
          if (alive.length && rng() < 0.5) out.vote = alive[Math.floor(rng() * alive.length)];
        }
        const prev = section(user, 'memory');
        out.memory = `not${calls.length}${prev && prev !== '(empty)' ? ` | ${prev}` : ''}`.slice(0, 300);
        if (decide) decide({ user, task, rng, out, params });
        let text = JSON.stringify(out);
        let stop = 'end_turn';
        if (m === 'malformed') text = 'Tabii! İşte cevabım: oy veriyorum.';
        if (m === 'refusal') { stop = 'refusal'; text = ''; }
        if (m === 'max_tokens') { stop = 'max_tokens'; text = text.slice(0, 20); }
        const sysTok = estTokens(system);
        const usage = {
          input_tokens: estTokens(user),
          output_tokens: estTokens(text) + 40,   // +40: düşük eforda olası kısa düşünme
          cache_creation_input_tokens: cached ? 0 : sysTok,
          cache_read_input_tokens: cached ? sysTok : 0,
        };
        cached = true;
        resolve({ content: [{ type: 'text', text }], stop_reason: stop, usage, stop_details: m === 'refusal' ? { type: 'refusal', category: null } : null });
      }, lat);
    });
  };
  transport.calls = calls;
  return transport;
}

function makeClient(transport, env = {}) {
  const config = aiConfig({ ANTHROPIC_API_KEY: 'test-key', ...env });
  return new AiClient({ config, transport, logger: { log() {}, warn() {} } });
}

const flush = () => new Promise((r) => setImmediate(r));

// Sahte saati adım adım ilerletir; her adımda bekleyen söz zincirleri çalışır.
async function advance(t, ms, step = 100) {
  for (let e = 0; e < ms; e += step) {
    t.mock.timers.tick(step);
    await flush();
  }
}

// 1 insan + n bot. Sohbet ve duyurular kaydedilir.
function smartRoom({ seed = 's', bots = 8, settings = {}, client } = {}) {
  const ev = { chats: [], announces: [] };
  const deal = mulberry(`deal-${seed}`);
  const room = new Room({
    id: 'AKILLI', name: 'Akıllı', settings: { nightSec: 10, daySec: 60, ...settings },
    botRng: mulberry(seed), eventRng: mulberry(`olay-${seed}`), storySeed: `hikaye-${seed}`, dealRng: (n) => Math.floor(deal() * n),
    ai: client,
    hooks: {
      update() {},
      announce(r, a, to) { ev.announces.push({ ...a, to }); },
      chat(r, recipients, message) { ev.chats.push({ recipients, message }); },
      empty() {},
      finished() {},
    },
  });
  room.addPlayer('h1', 'İrem', { userId: 'u1' });   // oda sahibi (botları ekler)
  for (let i = 0; i < bots; i++) room.addBot('h1');
  return { room, ev };
}

// İnsan oyuncunun sohbeti: sunucudaki chat:send ile aynı yol.
function humanSay(room, ev, id, text) {
  const res = room.chat(id, text);
  if (res.error) return res.error;
  ev.chats.push({ recipients: res.recipients, message: res.message });
  room.observeChat(res.recipients, res.message);
  return null;
}

module.exports = { mockTransport, makeClient, advance, flush, smartRoom, humanSay, mulberry, estTokens, section };
