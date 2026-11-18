'use strict';

// scripts/ai-eval.js (geliştirme aracı): senaryolar gerçek Room ile kurulur, istemler üretilir, anahtarsız
// çalıştırma dosyaları yazar. Gerçek modele hiç gidilmez.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const { SCENARIOS } = require('../scripts/ai-scenarios');
const { makeClient, mockTransport, section } = require('./ai-mock');

test('değerlendirme senaryoları: en az 17, kimlikler benzersiz, hepsi kurulur ve her tur için istem üretir', () => {
  assert.ok(SCENARIOS.length >= 17, `senaryo sayısı ${SCENARIOS.length}`);
  assert.equal(new Set(SCENARIOS.map((s) => s.id)).size, SCENARIOS.length);
  const client = makeClient(mockTransport({}));
  const { Game } = require('../scripts/ai-scenario-kit');
  void Game;
  for (const sc of SCENARIOS) {
    const { g, turns } = sc.build(client);
    try {
      assert.ok(turns.length > 0, sc.id);
      for (const t of turns) {
        const user = g.prompt(t.bot, t.task, { memory: t.memory || '' });
        assert.match(user, /<task>\n[\s\S]+\n<\/task>/, sc.id);
        assert.ok(section(user, 'timeline').includes('== '), `${sc.id}: zaman çizelgesi`);
        assert.ok(g.alive(t.bot) || t.task.kind === 'hunter', `${sc.id}: sınanan bot (${t.bot}) hayatta`);
        // Denetim işlevleri boş çıktıda da çökmez.
        for (const c of t.checks) assert.doesNotThrow(() => c.fn({ say: '', vote: '', target: '' }, { g, turn: t }));
      }
    } finally { g.destroy(); }
  }
});

test('kapsam: vaka 1–8 ve sahibinin ek istekleri için senaryo var', () => {
  const ids = SCENARIOS.map((s) => s.id).join(' ');
  for (const k of ['doktor-disarida', 'doktor-kendini-korudu', 'eski-mesaj', 'kahin-kim', 'disaridaki-oyuncu', 'son-3-eleme', 'gece-celiskisi', 'ikna-olur',
    'vampir-sikistirildi', 'gozcu-gorus', 'kahin-cifti', 'meslek-suse', 'gun1-kanitsiz-oy', 'belki-deliyim',
    'karsit-iddia-ortaya-cikti', 'suclama-cevabi', 'oy-yigilmasi-yok', 'farkli-konusma', 'kahin-kaybi', 'vampir-acigi']) assert.ok(ids.includes(k), k);
});

test('anahtarsız çalıştırma: her senaryo için system.txt, user.txt, expect.md yazılır; anahtar okunmaz/yazılmaz', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vk-eval-'));
  try {
    const env = { ...process.env, VK_NO_ENV_LOCAL: '1' };   // .env.local'daki gerçek anahtar okunmasın (ana klasörde API çağrısı yapıyordu)
    delete env.ANTHROPIC_API_KEY;
    execFileSync(process.execPath, [path.join(__dirname, '..', 'scripts', 'ai-eval.js'), '--out', dir, '--only', '06,17'], { env, stdio: 'pipe' });
    for (const id of ['06-son-3-eleme', '17-oy-yigilmasi-yok']) {
      for (const f of ['system.txt', 'user.txt', 'expect.md']) assert.ok(fs.existsSync(path.join(dir, id, f)), `${id}/${f}`);
    }
    assert.ok(fs.existsSync(path.join(dir, '17-oy-yigilmasi-yok', 'user-2.txt')), 'çok turlu senaryoda ek istemler');
    const user = fs.readFileSync(path.join(dir, '06-son-3-eleme', 'user.txt'), 'utf8');
    assert.match(user, /Roles still unaccounted for among the 2 other living players: 1 Vampir, 1 Doktor\./);
    assert.match(fs.readFileSync(path.join(dir, '06-son-3-eleme', 'expect.md'), 'utf8'), /HARD: Deniz'e oy verir/);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
  assert.match(fs.readFileSync(path.join(__dirname, '..', '.gitignore'), 'utf8'), /^\.env\.\*$/m);
});
