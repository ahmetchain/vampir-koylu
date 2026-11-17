'use strict';

// Akıllı bot değerlendirme senaryoları (YALNIZCA geliştirme; scripts/ai-eval.js kullanır).
// Her senaryo gerçek bir Room kurar (scripts/ai-scenario-kit.js), sınanan botun istemini oyundaki yolla üretir ve
// otomatik denetimler tanımlar. "hard" denetimler kural/olgu ihlalidir (oyun mantığı yanlışsa kalır); "soft"
// denetimler beklenen tonu/içeriği sezgisel olarak yoklar (raporda ayrı sayılır, insan gözüyle bakılır).
//
// Senaryo: { id, title, expect (insan için beklenen davranış), build(client) -> { g, turns, final? } }
// Tur:     { bot, task, memory?, post?: (g, out) -> void (cevabın sohbete eklenmesi), placeholder?, checks: [...] }
// Denetim: { name, soft?, fn(out, ctx) -> boolean }, ctx = { g, turn }

const { Game } = require('./ai-scenario-kit');

const re = (r) => (out) => r.test(out.say || '');
const notRe = (r) => (out) => !r.test(out.say || '');
const voteNot = (name) => (out) => (out.vote || '').trim().toLocaleLowerCase('tr') !== name.toLocaleLowerCase('tr');
const voteIs = (name) => (out) => (out.vote || '').trim().toLocaleLowerCase('tr') === name.toLocaleLowerCase('tr');
const voteIn = (...names) => (out) => names.map((n) => n.toLocaleLowerCase('tr')).includes((out.vote || '').trim().toLocaleLowerCase('tr'));
const hard = (name, fn) => ({ name, fn });
const soft = (name, fn) => ({ name, fn, soft: true });

const FIVE = (extra = []) => [
  { name: 'Ahmet', role: 'koylu' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
  { name: 'Eren', role: 'kahin', bot: true }, { name: 'Ece', role: 'doktor', bot: true }, ...extra,
];
const SIX = () => FIVE([{ name: 'Fatma', role: 'koylu', bot: true }]);
const everyoneVotes = (g, target, voters) => { for (const v of voters) g.vote(v, target); };

const SCENARIOS = [
  {
    id: '01-doktor-disarida',
    title: 'Doktor asıldı ve rolü açıklandı; sonra biri "ben Doktorum, kendimi koruyorum" diyor (vaka 1)',
    expect: 'Bot, Doktorun zaten çıktığını (Eren, 1. gün asıldı, Doktor çıktı) bilir: iddianın yalan olduğunu ya da çelişkiyi söyler; koruma sürüyormuş gibi davranmaz. Eren\'in eski satırlarını yeniden yorumlayabilir.',
    build(client) {
      const g = new Game({ client, players: [
        { name: 'Ahmet', role: 'koylu' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
        { name: 'Eren', role: 'doktor', bot: true }, { name: 'Ece', role: 'kahin', bot: true }, { name: 'Fatma', role: 'koylu', bot: true },
      ] });
      g.night([['Deniz', 'Ece'], ['Eren', 'Eren']]);
      g.talk([['Eren', 'Dün gece kendimi korudum ama kimse saldırmamış.'], ['Deniz', 'Eren çok konuşuyor, bence şüpheli.']]);
      everyoneVotes(g, 'Eren', ['Ahmet', 'Deniz', 'Fatma']);
      g.vote('Cem', 'Deniz');
      g.endDay();
      g.night([['Deniz', 'Fatma']]);
      g.say('Ahmet', 'Ben doktorum, dün gece kendimi korudum, o yüzden yaşıyorum.');
      return { g, turns: [{
        bot: 'Cem', task: { kind: 'react', trigger: g.lastChat('Cem') },
        checks: [
          hard('Eren/Doktor anılır', re(/Eren|Doktor/i)),
          hard('iddiayı yalan/çelişkili bulur', re(/yalan|çıkmıştı|asılmıştı|çelişiyor|olamaz|tutmuyor|zaten|blöf|ölmüştü|inanmıyorum|güvenmiyorum/i)),
          hard('"nereye gittin / ne gördün" diye sormaz', notRe(/nereye (gittin|gitti)|ne gördün/i)),
        ],
      }] };
    },
  },
  {
    id: '02-doktor-kendini-korudu',
    title: 'İnsan "Doktorum, kendimi korudum" diyor; botlar "nereye gittin, ne gördün?" diye sormamalı (vaka 2)',
    expect: 'Bot, Doktorun gece bilgisi olmadığını bilir: "kimi korudun, saldırı raporu geldi mi, hangi gece?" gibi sorar; "ne gördün / nereye gittin" sormaz.',
    build(client) {
      const g = new Game({ client, players: [
        { name: 'Ahmet', role: 'doktor' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
        { name: 'Eren', role: 'kahin', bot: true }, { name: 'Ece', role: 'koylu', bot: true },
      ] });
      g.night([['Ahmet', 'Ahmet']]);
      g.say('Ahmet', 'Ben doktorum, kendimi korudum.');
      return { g, turns: [{
        bot: 'Cem', task: { kind: 'react', trigger: g.lastChat('Cem') },
        checks: [
          hard('"nereye gittin / ne gördün / kimi gördün" sormaz', notRe(/nereye (gittin|gitti|gittiniz)|ne gördün|kimi gördün|gece.*gördün|gördüklerin/i)),
          soft('Doktora uygun soru: kimi/hangi gece/rapor', re(/kimi|hangi gece|rapor|saldır|koru/i)),
        ],
      }] };
    },
  },
  {
    id: '03-eski-mesaj',
    title: 'Dünkü iddia/suçlama bugünküymüş gibi ele alınmamalı (vaka 3)',
    expect: 'Bot 1. günde Ahmet\'in "Ece\'ye oy" dediğini bugün de geçerliymiş gibi sürmez; yeni bir gerekçe yokken Ece\'ye oy vermez ("az önce dedi" demez).',
    build(client) {
      const g = new Game({ client, players: SIX() });
      g.night([]);
      g.say('Ahmet', 'Ece çok sessiz, ona oy veriyorum.');
      for (const v of ['Ahmet', 'Cem', 'Deniz', 'Eren', 'Ece', 'Fatma']) g.vote(v, 'uyu');
      g.night([['Deniz', 'Fatma']]);
      g.say('Eren', 'Günaydın, Fatma gitmiş.');
      return { g, turns: [{
        bot: 'Cem', task: { kind: 'vote', final: false },
        checks: [
          hard('yeni gerekçe yokken Ece\'ye oy vermez', voteNot('Ece')),
          soft('dünkü sözü "az önce" gibi anmaz', notRe(/az önce.*Ece|demin.*Ece/i)),
        ],
      }] };
    },
  },
  {
    id: '04-kahin-kim',
    title: '"Kahin kim?" sorusu şüphe sebebi değil (vaka 4)',
    expect: 'Bot soran insana "sen misin?" demez, ona oy vermez; sonuç isteyen sorunun normal olduğunu kabul eder.',
    build(client) {
      const g = new Game({ client, players: SIX() });
      g.night([]);
      g.say('Ahmet', 'Kahin kim? Sonuç varsa söylesin.');
      return { g, turns: [
        { bot: 'Cem', task: { kind: 'react', trigger: g.lastChat('Cem') }, checks: [
          hard('"sen misin / neden soruyorsun" demez', notRe(/sen misin|sen mi\b|neden soruyorsun|niye soruyorsun|kahin sen/i)),
        ] },
        { bot: 'Fatma', task: { kind: 'vote', final: false }, checks: [hard('soran Ahmet\'e oy vermez', voteNot('Ahmet'))] },
      ] };
    },
  },
  {
    id: '05-disaridaki-oyuncu',
    title: 'Oyundan çıkmış oyuncuya soru sorulmamalı / oy verilmemeli (vaka 5)',
    expect: 'Bot asılan Ece\'ye hitap etmez, ona soru sormaz, oy vermez; en fazla onun hakkında konuşur.',
    build(client) {
      const g = new Game({ client, players: SIX() });
      g.night([['Deniz', 'Eren']]);
      g.talk([['Ece', 'Ben köylüyüm, bana bakmayın.'], ['Ahmet', 'Bence Ece şüpheli.']]);
      everyoneVotes(g, 'Ece', ['Ahmet', 'Cem', 'Deniz', 'Fatma']);
      g.endDay();
      g.night([['Deniz', 'Fatma']]);
      return { g, turns: [
        { bot: 'Cem', task: { kind: 'open' }, checks: [
          hard('Ece\'ye hitap etmez', notRe(/\bEce[,?:]|Ece\s+(sen|neden|niye|nerede)|\bEce'(ye|den) soru/i)),
          hard('Ece\'ye oy vermez', voteNot('Ece')),
        ] },
        { bot: 'Cem', task: { kind: 'vote', final: true }, checks: [hard('Ece\'ye oy vermez', voteNot('Ece')), hard('Eren/Fatma (ölü) seçilmez', (o) => !['eren', 'fatma', 'ece'].includes((o.vote || '').toLocaleLowerCase('tr')))] },
      ] };
    },
  },
  {
    id: '06-son-3-eleme',
    title: 'Son 3: Vampir, Köylü (bot), Doktor; Doktor ve ikinci Köylü iddiası (vaka 6)',
    expect: 'Bot Köylü olduğunu, kalan rollerin Vampir+Doktor olduğunu sayar: ikinci Köylü iddiası yalan, Doktor uyuyor. Deniz\'e oy verir, sebebi söyler.',
    build(client) {
      const g = new Game({ client, players: [
        { name: 'Ahmet', role: 'doktor' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
        { name: 'Eren', role: 'kahin', bot: true }, { name: 'Ece', role: 'koylu', bot: true },
      ] });
      g.night([['Deniz', 'Eren'], ['Ahmet', 'Ahmet']]);
      g.talk([['Ahmet', 'Ben doktorum, kendimi korudum.'], ['Deniz', 'Ben köylüyüm.']]);
      everyoneVotes(g, 'Ece', ['Ahmet', 'Cem', 'Deniz']);
      g.endDay();
      g.night([['Deniz', 'Ahmet'], ['Ahmet', 'Ahmet']]);
      g.talk([['Ahmet', 'Ben doktorum, dün gece vampir geldi, kurtuldum.'], ['Deniz', 'Ben de köylüyüm, Ahmet yalan söylüyor, ben tek köylüyüm.']]);
      return { g, turns: [
        { bot: 'Cem', task: { kind: 'direct', trigger: g.lastChat('Cem') }, checks: [
          soft('"ben tek köylü / ikinci iddia yalan" mantığını söyler', re(/tek köylü|ikinci|yalan|doktor.*uyuyor|kalan/i)),
          hard('Ahmet\'e oy vermez', voteNot('Ahmet')),
        ] },
        { bot: 'Cem', task: { kind: 'vote', final: true }, checks: [hard('Deniz\'e oy verir', voteIs('Deniz'))] },
      ] };
    },
  },
  {
    id: '07-gece-celiskisi',
    title: '"Vampir evime geldi, kurtuldum" iddiası vampir ölümü olan geceyle çelişir (vaka 7)',
    expect: 'Bot, 2. gece vampirin Eren\'i öldürdüğünü ve gecede tek vampir kurbanı olduğunu hatırlayıp iddianın çelişkili olduğunu söyler.',
    build(client) {
      const g = new Game({ client, players: SIX() });
      g.night([]);
      for (const v of ['Ahmet', 'Cem', 'Deniz', 'Eren', 'Ece', 'Fatma']) g.vote(v, 'uyu');
      g.night([['Deniz', 'Eren']]);
      g.say('Fatma', 'Ben doktorum, 2. gece vampir evime geldi ve kurtuldum.');
      return { g, turns: [{
        bot: 'Cem', task: { kind: 'react', trigger: g.lastChat('Cem') },
        checks: [
          hard('çelişkiyi/ölümü anar', re(/Eren|öldü|çelişiyor|yalan|tek kurban|bir kurban|olamaz|tutmuyor|ölen/i)),
          hard('iddiaya olduğu gibi inanmaz', notRe(/süper|harika.*kurtul|geçmiş olsun|iyi ki kurtuldun/i)),
        ],
      }] };
    },
  },
  {
    id: '08-ikna-olur',
    title: 'Sağlam bir argüman gelince bot oyunu değiştirir (vaka 8)',
    expect: 'Bot önce Fatma\'ya oy vermişti. Ahmet "Deniz Doktorum demişti, gerçek Doktor Eren çıktı" deyince Deniz\'e geçer ve sebebini söyler.',
    build(client) {
      const g = new Game({ client, players: SIX() });
      g.night([]);
      g.say('Deniz', 'Ben doktorum, kendimi koruyorum.');
      for (const v of ['Ahmet', 'Cem', 'Deniz', 'Eren', 'Ece', 'Fatma']) g.vote(v, 'uyu');
      g.night([['Deniz', 'Ece']]);
      g.vote('Cem', 'Fatma');
      g.say('Ahmet', 'Cem, Fatma değil! Deniz dün Doktorum demişti ama gerçek Doktor Ece çıktı, Deniz yalan söyledi.');
      return { g, turns: [{
        bot: 'Cem', task: { kind: 'direct', trigger: g.lastChat('Cem') },
        checks: [hard('oyunu Deniz\'e değiştirir', voteIs('Deniz')), soft('sebebini söyler', re(/Doktor|yalan|Ece|çelişi/i))],
      }] };
    },
  },
  {
    id: '09-vampir-sikistirildi',
    title: 'Vampir bot rolünü söylemesi için sıkıştırılıyor',
    expect: 'Bot kendini ele vermez; "Vampirim" demez, yapay zeka/bot olduğunu söylemez; Köylü iddiası ya da gerçek bir olguya dayanarak savuşturur.',
    build(client) {
      const g = new Game({ client, players: SIX() });
      g.night([['Deniz', 'Eren']]);
      g.say('Ahmet', 'Deniz, rolünü söyle! Vampir misin? Söylemezsen oy veririm.');
      return { g, turns: [{
        bot: 'Deniz', task: { kind: 'direct', trigger: g.lastChat('Deniz') },
        checks: [
          hard('vampir olduğunu söylemez', notRe(/ben vampirim|evet.*vampir|vampirim/i)),
          hard('yapay zeka/bot demez', notRe(/yapay zeka|\bbot\b|\bmodel\b|talimat/i)),
          hard('cevap verir', (o) => (o.say || '').trim().length > 0),
        ],
      }] };
    },
  },
  {
    id: '10-gozcu-gorus',
    title: 'Gözcü bot: gördüğü ziyaretçiler gerçek; uydurma isim yok',
    expect: 'Gözcü Eren, Cem\'in evini izledi: gelenler Deniz (kurban arayan vampir) ve Ece (koruyan Doktor), evden "kurtarıldı" ışığı. Bot söylerse yalnızca bu isimleri/olguları söyler; ziyaretçi = katil demez.',
    build(client) {
      const g = new Game({ client, players: [
        { name: 'Ahmet', role: 'koylu' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
        { name: 'Eren', role: 'gozcu', bot: true }, { name: 'Ece', role: 'doktor', bot: true }, { name: 'Fatma', role: 'koylu', bot: true },
      ] });
      g.night([['Eren', 'Cem'], ['Deniz', 'Cem'], ['Ece', 'Cem']]);
      g.say('Ahmet', 'Gözcü varsa söylesin, dün gece kim kimin evine gitti?');
      return { g, turns: [{
        bot: 'Eren', task: { kind: 'react', trigger: g.lastChat('Eren') },
        checks: [
          hard('olmayan isim uydurmaz (Fatma/Ahmet gelmedi)', notRe(/Fatma (gel|git)|Ahmet (gel|git)|Fatma'?n?ın evine|Ahmet'?in evine/i)),
          soft('gördüğünü paylaşır (Deniz ya da Ece)', re(/Deniz|Ece/)),
        ],
      }] };
    },
  },
  {
    id: '11-kahin-cifti',
    title: 'Kahin bot: Deniz için "Vampir ya da Doktor" çifti',
    expect: 'Çift kesin sonuç değildir (Doktor sahte rol olabilir). Bot çifti doğru aktarır ya da saklar; "kesin vampir" demez; iki rolü de anar.',
    build(client) {
      const g = new Game({ client, seerRng: () => 0.9, players: [
        { name: 'Ahmet', role: 'koylu' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
        { name: 'Eren', role: 'kahin', bot: true }, { name: 'Ece', role: 'doktor', bot: true }, { name: 'Fatma', role: 'koylu', bot: true },
      ] });
      g.night([['Eren', 'Deniz'], ['Deniz', 'Fatma'], ['Ece', 'Fatma']]);
      g.say('Ahmet', 'Kahin varsa sonucunu söylesin, zaman daralıyor.');
      return { g, turns: [{
        bot: 'Eren', task: { kind: 'react', trigger: g.lastChat('Eren') }, memory: 'results: gece 1 Deniz = Doktor ya da Vampir',
        checks: [
          hard('"kesin vampir" demez', notRe(/kesin vampir|vampir kesin|%100/i)),
          soft('Deniz anılırsa iki rol de anılır', (o) => !/Deniz/.test(o.say || '') || (/Vampir/i.test(o.say) && /Doktor/i.test(o.say))),
        ],
      }] };
    },
  },
  {
    id: '12-meslek-suse',
    title: 'Meslekler süstür: "mesleği yüzünden şüpheli" gerekçe değil',
    expect: 'Bot, Fatma\'nın mesleğini gerekçe yapmaz; Fatma\'ya oy vermez; mesleğin rol olmadığını söyleyebilir.',
    build(client) {
      const g = new Game({ client, players: SIX() });
      g.night([]);
      const job = g.view('Cem').players.find((p) => p.name === 'Fatma').job;
      const label = job && job.label ? job.label : 'Fırıncı';
      g.say('Ahmet', `Bence Fatma şüpheli, çünkü ${label.toLocaleLowerCase('tr')} ve ${label.toLocaleLowerCase('tr')}lar gece dolaşır.`);
      return { g, label, turns: [{
        bot: 'Cem', task: { kind: 'react', trigger: g.lastChat('Cem') },
        checks: [
          hard('Fatma\'ya oy vermez', voteNot('Fatma')),
          hard('mesleği suçlama sebebi yapmaz', (o) => !new RegExp(`${label.toLocaleLowerCase('tr')}.*(şüpheli|vampir|yalan)|(şüpheli|vampir).*${label.toLocaleLowerCase('tr')}`, 'i').test((o.say || '').toLocaleLowerCase('tr'))),
        ],
      }] };
    },
  },
  {
    id: '13-gun1-kanitsiz-oy',
    title: '1. gün, kanıt yok: erken oy boş, son karar boş ya da "uyu"',
    expect: 'Erken turda vote "" olur; bağlayıcı turda da kimseyi seçmek için kanıt yok: "" ya da "uyu".',
    build(client) {
      const g = new Game({ client, players: SIX() });
      g.night([]);
      g.talk([['Ahmet', 'Günaydın, kimse bir şey gördü mü?'], ['Fatma', 'Ben de bir şey görmedim.']]);
      return { g, turns: [
        { bot: 'Cem', task: { kind: 'vote', final: false }, checks: [hard('erken oy boş', voteIs(''))] },
        { bot: 'Cem', task: { kind: 'vote', final: true }, checks: [hard('son karar boş ya da uyu', voteIn('', 'uyu'))] },
      ] };
    },
  },
  {
    id: '14-belki-deliyim',
    title: 'İnsan "belki Deliyim" diyor',
    expect: 'Bot bunu kanıt saymaz, insanı hemen asmak istemez (Deli köy takımıdır, sahte sonuç verir); sonuçlarına temkinli bakar.',
    build(client) {
      const g = new Game({ client, players: [
        { name: 'Ahmet', role: 'deli', fake: 'doktor' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
        { name: 'Eren', role: 'kahin', bot: true }, { name: 'Ece', role: 'doktor', bot: true }, { name: 'Fatma', role: 'koylu', bot: true },
      ] });
      g.night([['Deniz', 'Ece']]);
      g.say('Ahmet', 'Ben doktorum ama Deli de olabilirim, emin değilim; rolüm Doktor yazıyor.');
      return { g, turns: [{
        bot: 'Cem', task: { kind: 'react', trigger: g.lastChat('Cem') },
        checks: [hard('Ahmet\'e oy vermez', voteNot('Ahmet')), soft('Deli olasılığını anar ya da temkinli', re(/Deli|temkin|emin değil|bakalım|sonuç/i))],
      }] };
    },
  },
  {
    id: '15-karsit-iddia-ortaya-cikti',
    title: 'A Gözcü olduğunu söyledi; sonra B oyundan ayrıldı ve Gözcü çıktı',
    expect: 'Bot sesli akıl yürütür: "Eren gerçek Gözcü çıktı; Ahmet ya yalan söyledi ya da Deli". Güçlü kanıt, ama Deli olabildiği için otomatik "Vampir" değil.',
    build(client) {
      const g = new Game({ client, players: [
        { name: 'Ahmet', role: 'koylu' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
        { name: 'Eren', role: 'gozcu', bot: true }, { name: 'Ece', role: 'doktor', bot: true }, { name: 'Fatma', role: 'deli', bot: true, fake: 'gozcu' },
      ] });
      g.night([['Deniz', 'Ece'], ['Eren', 'Cem']]);
      g.say('Ahmet', 'Ben Gözcüyüm, Cem\'in evine kimse gelmedi.');
      g.leave('Eren');
      return { g, turns: [{
        bot: 'Cem', task: { kind: 'open' },
        checks: [
          hard('Gözcü çelişkisini söyler', re(/Gözcü/i)),
          hard('yalan ya da Deli olasılığını söyler', re(/yalan|Deli|blöf|çelişiyor|doğru değil/i)),
          soft('Deli de olabilir der (otomatik "Vampir" demez)', re(/Deli|olabilir|ya da/i)),
        ],
      }] };
    },
  },
  {
    id: '16-suclama-cevabi',
    title: 'Suçlanan bot esasa cevap verir, karşı suçlama refleksi yok',
    expect: 'Cem (Doktor) "sen vampirsin" suçlamasına iddiasını/gerekçesini söyler, kanıt ister; Ahmet\'e refleks oy/suçlama yapmaz.',
    build(client) {
      const g = new Game({ client, players: [
        { name: 'Ahmet', role: 'koylu' }, { name: 'Cem', role: 'doktor', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
        { name: 'Eren', role: 'kahin', bot: true }, { name: 'Ece', role: 'koylu', bot: true }, { name: 'Fatma', role: 'koylu', bot: true },
      ] });
      g.night([['Cem', 'Cem']]);
      g.say('Ahmet', 'Cem, sen vampirsin! Bu kadar sessiz kalan biri masum olamaz.');
      return { g, turns: [{
        bot: 'Cem', task: { kind: 'direct', trigger: g.lastChat('Cem') },
        checks: [
          hard('karşılık olarak Ahmet\'e oy vermez', voteNot('Ahmet')),
          hard('"asıl sen vampirsin" refleksi yok', notRe(/asıl sen|sen vampirsin|sensin vampir/i)),
          soft('kanıt/gerekçe ister ya da kendini anlatır', re(/kanıt|neye dayanıyor|neden|niye|gerekçe|ben /i)),
        ],
      }] };
    },
  },
  {
    id: '17-oy-yigilmasi-yok',
    title: 'Sürü oyu yok: "sen nesin?" diye soran insana kimse oy vermez',
    expect: 'Ahmet gün 1\'de birkaç bota "sen nesin?" ve "Kahin kim?" diye sordu; Deniz (Vampir) ona oy verip yığılma çağırdı. Cem, Ece, Fatma Ahmet\'e oy vermez.',
    build(client) {
      const g = new Game({ client, players: SIX() });
      g.night([]);
      g.talk([['Ahmet', 'Cem sen nesin?'], ['Ahmet', 'Ece sen nesin?'], ['Ahmet', 'Fatma sen nesin? Kahin kim?'],
        ['Deniz', 'Ahmet çok soru soruyor, bence şüpheli. Ona oy veriyorum.']]);
      g.vote('Deniz', 'Ahmet');
      const turns = ['Cem', 'Ece', 'Fatma'].map((bot) => ({
        bot, task: { kind: 'vote', final: true }, checks: [hard('Ahmet\'e oy vermez (sorular kanıt değil)', voteNot('Ahmet'))],
      }));
      return { g, turns };
    },
  },
  {
    id: '18-farkli-konusma',
    title: 'Çeşitlilik: dört bot arka arkaya gün açılışı yapıyor; kalıp tekrarı yok',
    expect: 'Cümle başlangıçları farklı, aynı satır tekrar yok, söylenene tepki var.',
    build(client) {
      const g = new Game({ client, players: [
        { name: 'Ahmet', role: 'koylu' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
        { name: 'Eren', role: 'kahin', bot: true }, { name: 'Ece', role: 'doktor', bot: true }, { name: 'Fatma', role: 'koylu', bot: true }, { name: 'Gül', role: 'koylu', bot: true },
      ] });
      g.night([['Deniz', 'Gül'], ['Ece', 'Ece']]);
      g.say('Ahmet', 'Gül gitti, kimse bir şey gördü mü?');
      const post = (gm, out, bot) => { if (out.say) gm.say(bot, out.say); };
      const bots = ['Cem', 'Eren', 'Fatma', 'Deniz'];
      const turns = bots.map((bot, i) => ({
        bot, task: { kind: 'open' }, placeholder: `Örnek satır ${i + 1}`, post: (gm, out) => post(gm, out, bot), checks: [],
      }));
      return { g, turns, final(outs) {
        const lines = outs.map((o) => (o.say || '').trim()).filter(Boolean);
        const firstWords = lines.map((l) => l.split(/\s+/)[0].toLocaleLowerCase('tr'));
        return [
          { name: 'hiçbir satır birbirinin aynısı değil', soft: false, pass: new Set(lines.map((l) => l.toLocaleLowerCase('tr'))).size === lines.length },
          { name: 'ilk kelimeler çoğunlukla farklı (en az 3 farklı)', soft: true, pass: new Set(firstWords).size >= Math.min(3, lines.length) },
        ];
      } };
    },
  },
  {
    id: '19-kahin-kaybi',
    title: 'Kahin gece öldü (rolü açıklandı): köy tepkisi',
    expect: 'Köylü bot bunu köy için kötü haber olarak görür (yeni Kahin sonucu yok); eski sonuçları sorar/yeniden okur.',
    build(client) {
      const g = new Game({ client, players: SIX() });
      g.night([['Deniz', 'Eren']]);
      return { g, turns: [{ bot: 'Cem', task: { kind: 'open' }, checks: [
        hard('Eren/Kahin anılır', re(/Eren|Kahin/i)),
        soft('kayıp tonu', re(/yazık|kayıp|kötü|zor|üzücü|büyük|artık|bundan sonra|sonuç/i)),
      ] }] };
    },
  },
  {
    id: '20-vampir-acigi',
    title: 'Asılan Vampir çıktı: köy tepkisi, savunanlar sorgulanır',
    expect: 'Bot bunu iyi haber sayar; Deniz\'i savunan Fatma\'yı sorgular, ona soru sorabilir; körü körüne oy yığmaz.',
    build(client) {
      const g = new Game({ client, players: [...SIX(), { name: 'Gül', role: 'iftiraci', bot: true }] });
      g.night([]);
      g.talk([['Fatma', 'Deniz masum, ona dokunmayın.'], ['Ahmet', 'Bence Deniz şüpheli.']]);
      everyoneVotes(g, 'Deniz', ['Ahmet', 'Cem', 'Eren', 'Ece']);
      g.vote('Fatma', 'Ahmet');
      g.vote('Deniz', 'Ahmet');
      g.endDay();
      g.night([]);
      return { g, turns: [{ bot: 'Cem', task: { kind: 'open' }, checks: [
        hard('Deniz\'e hitap etmez (dışarıda)', notRe(/Deniz[,?:]\s|Deniz sen\b/)),
        soft('savunan Fatma anılır/sorgulanır', re(/Fatma|savun/i)),
      ] }] };
    },
  },
  {
    id: '21-gozcu-doktoru-dogrular',
    title: 'Doktor "kendimi korudum, saldırı engellendi" der; Gözcü bot aynı evi izlemişti ve bunu görmüştü',
    expect: 'Gözcü Eren, Ahmet\'in evini izledi: Deniz geldi, saldırı engellendi. Ahmet Doktor olduğunu ve saldırının engellendiğini söyleyince Eren onu destekler, Deniz\'i adıyla söyler ve Deniz\'e oy verir; Ahmet\'e oy vermez.',
    build(client) {
      const g = new Game({ client, players: [
        { name: 'Ahmet', role: 'doktor' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
        { name: 'Eren', role: 'gozcu', bot: true }, { name: 'Ece', role: 'koylu', bot: true }, { name: 'Fatma', role: 'koylu', bot: true },
      ] });
      g.night([['Ahmet', 'Ahmet'], ['Deniz', 'Ahmet'], ['Eren', 'Ahmet']]);
      g.say('Ahmet', 'Ben Doktorum, dün gece kendimi korudum; vampir evime geldi ama saldırı engellendi.');
      g.say('Deniz', 'Ahmet yalan söylüyor bence, Doktor olduğunu kanıtlayamaz. Ahmet\'i asalım.');
      return { g, turns: [{
        bot: 'Eren', task: { kind: 'react', trigger: g.lastChat('Eren') },
        checks: [
          hard('Ahmet\'e oy vermez', (o) => !voteIs('Ahmet')(o)),
          soft('Ahmet\'i destekler / Deniz\'i adıyla söyler', re(/Deniz/)),
          soft('Deniz\'e oy verir', voteIs('Deniz')),
        ],
      }] };
    },
  },
  {
    id: '22-iki-iddia-birbirini-dogrular',
    title: 'Doktor ve Gözcü birbirini doğruluyor; köylü bot bunu güçlü kanıt sayar',
    expect: 'Ahmet "Doktorum, kendimi korudum, saldırı engellendi" dedi; Eren "Gözcüyüm, Ahmet\'in evini izledim: Deniz geldi, saldırı engellendi" dedi; Deniz Ahmet\'i suçluyor. İki bağımsız iddia birbirini tutuyor: Cem Deniz\'e oy verir, Ahmet\'e vermez.',
    build(client) {
      const g = new Game({ client, players: [
        { name: 'Ahmet', role: 'doktor' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
        { name: 'Eren', role: 'gozcu', bot: true }, { name: 'Ece', role: 'koylu', bot: true }, { name: 'Fatma', role: 'koylu', bot: true },
      ] });
      g.night([['Ahmet', 'Ahmet'], ['Deniz', 'Ahmet'], ['Eren', 'Ahmet']]);
      g.talk([
        ['Ahmet', 'Ben Doktorum, dün gece kendimi korudum; vampir evime geldi ama saldırı engellendi.'],
        ['Eren', 'Gözcüyüm, dün Ahmet\'in evini izledim: Deniz geldi, içeride saldırı engellendi.'],
        ['Deniz', 'İkisi anlaşmış, Ahmet\'i asalım.'],
      ]);
      return { g, turns: [
        { bot: 'Cem', task: { kind: 'vote', final: true }, checks: [hard('Ahmet\'e oy vermez', (o) => !voteIs('Ahmet')(o)), hard('Deniz\'e oy verir', voteIs('Deniz'))] },
      ] };
    },
  },
];

module.exports = { SCENARIOS };
