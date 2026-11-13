'use strict';

// Dedikodular (tellal). İki aile:
//  (a) adlı dedikodu: YALNIZCA herkese açık kayıttan (oy pusulaları, oy değiştirmeler, Hızlı Uyu,
//      gündüz sohbet sayıları, oylama sonuçları, sabah ölümleri, herkese açık roller) türetilir ve
//      söylediği şey kayda göre harfiyen doğrudur; yalnızca dedikodu üslubuyla anlatılır.
//  (b) adsız atmosfer: hiçbir oyuncuya değinmez, oyunla ilgili bir bilgi iddia etmez.
// Atmosfer satırlarında meslek adı geçen figür (fırıncı, çoban…) kullanılmaz: oyunculara meslek
// verildiği için bu, o oyuncu hakkında uydurma bir iddia olurdu.

const R = {
  'rumor.switch': [
    'Kuyu başında fısıldaşıyorlar: {a} dün oyunu önce {b|dat} vermiş, sonra {c|dat} çevirmiş.',
    'Tellal duyurur: {a|gen} oyu dün {b|abl} {c|dat} kaydı. Fikir mi değişti, rüzgâr mı?',
  ],
  'rumor.switchLate': [
    '{a} dün son anda oyunu {b|abl} çekip {c|dat} verdi. Son dakika kararları bu köyde hep konuşulur.',
    'Söylentiye göre {a|gen} eli dün son saniyelerde {b|abl} {c|dat} kaydı. Meydanın gözünden kaçmadı.',
  ],
  'rumor.fickle': [
    '{a} dün oyunu tam {nw} kez değiştirdi. Ya çok kararsız, ya çok hesaplı.',
    'Dün {a|gen} oyu sandık başında {nw} kez yer değiştirdi; tellal saymaktan yoruldu.',
  ],
  'rumor.sleepy': [
    '{a} dün oylamada "Hızlı Uyu" dedi. Komşulara göre bu kadar uykulu olmak pek hayra alamet değil.',
    'Dün meydan bir karar ararken {a} "Hızlı Uyu"yu seçmişti. Uykusu mu vardı, acelesi mi?',
  ],
  'rumor.sleepyAlone': [
    'Dün meydanda "Hızlı Uyu" diyen tek kişi {a|cop}. Köyün geri kalanı uykuyu pek düşünmüyordu.',
    'Dün bütün köyde bir tek {a} uyumak istedi. Kuyu başındakiler bu uykunun sebebini merak ediyor.',
  ],
  'rumor.abstainAll': [
    '{a} bugüne dek tek bir kez bile oy vermedi. Sandığın yolunu mu bilmiyor, yoksa bilmek mi istemiyor?',
    'Tellal soruyor: {a} {nw} oylamadır neden sandığa uğramıyor?',
  ],
  'rumor.abstain': [
    '{a} dün oy vermeyenler arasındaydı. Tellal bunu da defterine yazdı.',
    'Dün sandık {a|gen} oyunu bekledi, boşuna.',
  ],
  'rumor.silent': [
    'Dün meydanda çok konuşuldu ama {a|gen} sesi hiç çıkmadı. Dilini kedi mi yuttu, yoksa bir şey mi saklıyor?',
    '{a} dün meydanda tek kelime etmedi. Sessizlik altındır derler; bu köyde pek değil.',
  ],
  'rumor.chatty': [
    '{a} dün meydanda herkesten çok konuştu. Çok konuşan çok şey mi bilir, çok şey mi saklar?',
    'Dün meydanın en hararetli sesi {a|gen} sesiydi. Kimi ikna oldu, kimi kulaklarını tıkadı.',
  ],
  'rumor.closeCall': [
    '{a} dün kıl payı kurtuldu: oylarda {b|gen} hemen arkasındaydı, arada tek oy vardı.',
    'Dün az kalsın {a} gidiyordu; aradaki fark yalnızca tek oydu. Kuyu başında bu konuşuluyor.',
  ],
  'rumor.tie': [
    '{a} ile {b} dün oylarda berabere kaldı ve ikisi de kurtuldu. Ama meydan unutmadı.',
    'Dün terazinin iki kefesinde {a} ile {b} vardı. Bugün terazi kimden yana yatacak?',
  ],
  'rumor.pair': [
    '{a} ile {b} şimdiye dek tam {nw} kez aynı kişiye oy verdi; bir kez bile ayrı düşmediler.',
    '{a} ile {b|gen} oyları şimdiye dek {nw} kez aynı kişiye gitti, hiç ayrılmadı. Tesadüf mü, anlaşma mı?',
  ],
  'rumor.lone': [
    'Dün {b|dat} oy veren tek kişi {a|cop}. Kuyu başında bunun nedenini merak ediyorlar.',
    'Dün meydanda {b|acc} işaret eden yalnızca {a} oldu. Tek başına, inatla.',
  ],
  'rumor.votedThenDied': [
    '{a} dün {b|dat} oy vermişti; {b} bu sabah uyanmadı. Kuyu başında bu ikisini yan yana anıyorlar.',
    'Dün {b|dat} parmak uzatanlardan biri de {a|cop}. Bu sabah {b|gen} kapısı açılmadı.',
  ],
  'rumor.heat': [
    '{a|dat} bugüne dek tam {nw} kez oy verildi ve {a} hâlâ aramızda. Köyün en çok işaret edilen ama gönderilemeyen kişisi.',
    'Sandık {a|gen} adını herkesten çok duydu: tam {nw} kez. Yine de {a} meydanda dimdik duruyor.',
  ],
  'rumor.untouched': [
    '{a|dat} bugüne dek tek bir oy bile çıkmadı. Ya çok masum, ya çok kurnaz.',
    'Sandık {a|gen} adını hiç duymadı. Bazıları bunu güven, bazıları şüphe sebebi sayıyor.',
  ],
  'rumor.bandwagon': [
    '{a} dün {b|gen} gönderilmesi için el kaldıranlardan biriydi.',
    'Dünkü kararda {a|gen} oyu da {b|gen} aleyhineydi. Tellal not etti.',
  ],
  'rumor.bandwagonEvil': [
    '{a} dün {b|dat} oy verenlerdendi; {b|gen} kötü taraftan çıkması {a|gen} itibarını epey parlattı.',
    'Dün kötü taraftan çıkan {b|dat} oy verenlerden biri de {a|cop}. Kuyu başında takdirle anılıyor.',
  ],
  'rumor.bandwagonInnocent': [
    '{a} dün masum {b|dat} oy verenlerdendi. Köy bunu kolay kolay unutmaz.',
    'Dün masum çıkan {b|gen} gönderilmesinde parmağı olanlardan biri de {a|cop}.',
  ],
  'rumor.consistent': [
    '{a} iki gündür hep {b|dat} oy veriyor. Aralarında eski bir hesap mı var?',
    '{a|gen} oyu iki gündür şaşmıyor: hep {b}. Ya sezgisi kuvvetli, ya kini.',
  ],
  'rumor.firstVoter': [
    'Dün sandığa ilk oyu {a} attı, hem de {b|dat}. Acele mi etti, yoksa çoktan mı karar vermişti?',
    'Tellal hatırlatır: dün ilk eli kaldıran {a|cop}, hedefi de {b}.',
  ],
  'rumor.atmo': [
    'Kuyu başında anlatılıyor: dün gece ay bir an kıpkırmızı olmuş, sonra utanıp bulutların arkasına saklanmış.',
    'Mezarlıkta dün gece biri ıslıkla bir ninni çalıyormuş. Ninninin sözlerini kimse hatırlamıyor.',
    'Çan kulesindeki baykuş üç gecedir aynı saatte ötüyor. Nineler bunun iyiye alamet olmadığını söylüyor.',
    'Köyün kedileri dün akşamdan beri hep birlikte tek bir çatıda uyuyor. Hangi çatı olduğu kedilerin sırrı.',
    'Kuyunun suyu bu sabah tuzlu çıkmış. Yaşlılar, kuyuların da korktuğunu söyler.',
    'Bir pazarcı, geceleri köyün etrafında ayna satan bir yabancıdan bahsediyor. Aynaları alan olmamış.',
    'Rüzgâr dün gece bacalarda bir isim fısıldamış. Herkes başka bir isim duymuş.',
    'Ninelere göre gece yaratıkları aynada görünmez. Köyde aynaya bakmayanlar artık dikkat çekiyor.',
    'Söylenti bu ya: köyün altında eski bir tünel varmış ve geceleri orada ayak sesleri yankılanırmış.',
    'Köyün kazları dün bütün gün tek bir yöne bakıp tısladı. Kazlar bir şey biliyor ama söylemiyor.',
    'Çocuklar meydanda yeni bir tekerleme tutturmuş: "Ay doğdu, kapı kilit; kim uyudu, kim kaldı dik?" Nereden çıktığını kimse bilmiyor.',
    'Köyün en yaşlısı, böyle günleri gençliğinde de gördüğünü ve o zaman da kimsenin inanmadığını anlatıyor.',
    'Dün gece bir bacadan mor bir duman yükseldiği söyleniyor. Hangi baca olduğu konusunda herkes başka şey söylüyor.',
    'Bir gezgin, köyün dışındaki yolda sahipsiz bir pelerin gördüğünü anlattı ve hiç durmadan yoluna devam etti.',
    'Mezarcı bu hafta küreğini üç kez bilemiş. Kimse nedenini sormaya cesaret edemiyor.',
    'Sarımsak fiyatları iki katına çıktı. Pazarcılar memnun, gece yaratıkları değil.',
    'Kuyu başındakiler, vampirlerin bir eve davet edilmeden giremeyeceğini söylüyor. Köyde artık kimse kimseyi çaya çağırmıyor.',
    'Tellal bugün haber bulamadı; o da herkes gibi kendi gölgesinden şüpheleniyor.',
  ],
};

const SLEEP = 'sleep';
const LATE_MS = 15000;

function isPlayerTarget(t) {
  return typeof t === 'string' && t !== SLEEP;
}

// Bir günün oy değiştirme dizisi: oyuncu -> [değerler] (null = oyunu geri çekti).
function trailByVoter(day) {
  const by = new Map();
  for (const e of day.trail || []) {
    if (!by.has(e.voter)) by.set(e.voter, []);
    by.get(e.voter).push(e);
  }
  return by;
}

function weightedTally(day) {
  const counts = new Map();
  let sleep = 0;
  for (const [voter, target] of day.ballots) {
    const w = day.weights.get(voter) || 1;
    if (target === SLEEP) sleep += w;
    else counts.set(target, (counts.get(target) || 0) + w);
  }
  return { counts, sleep };
}

// Sohbet dedikoduları: yalnızca sayım gerçekten tutulduysa (en az 5 mesaj, 3 farklı konuşan).
function chatCandidates(day, d, alive, eligible, out) {
  const total = [...day.chat.values()].reduce((s, n) => s + n, 0);
  const speakers = [...day.chat.values()].filter((n) => n > 0).length;
  if (total >= 5 && speakers >= 3) {
    for (const id of eligible) {
      if (!(day.chat.get(id) > 0)) {
        out.push({ family: 'silent', key: 'rumor.silent', persons: { a: id }, vars: {}, fact: { day: d, id, count: 0 } });
      }
    }
    const ranked = [...day.chat].filter(([id]) => alive(id)).sort((x, y) => y[1] - x[1]);
    const all = [...day.chat].sort((x, y) => y[1] - x[1]);
    if (ranked.length && all.length >= 2) {
      const [top, n] = ranked[0];
      const others = all.filter(([id]) => id !== top).map(([, c]) => c);
      const second = others.length ? Math.max(...others) : 0;
      if (n >= 4 && n > second && n >= 1.5 * second) {
        out.push({ family: 'chatty', key: 'rumor.chatty', persons: { a: top }, vars: {}, fact: { day: d, id: top, count: n, second } });
      }
    }
  }
}

// Adlı dedikodu adayları. st: { roster: Map, days: Map(round->day), nights: Map(round->{deaths}), isEvil, isVillage }
// Dönen her aday: { family, key, persons:{a,b?}, vars, fact } – fact testte kayıtla karşılaştırılır.
function rumorCandidates(st, round) {
  const out = [];
  const alive = (id) => { const p = st.roster.get(id); return Boolean(p && p.alive); };
  const known = (id) => st.roster.has(id);
  const d = round - 1;
  const day = st.days.get(d);
  const allDays = [...st.days.values()].filter((x) => x.closed).sort((x, y) => x.round - y.round);
  // Sis günü (secret): kimin kime oy verdiği gizli -> o günden hiçbir oy dedikodusu çıkmaz.
  // Mahkeme günü (trial): kayıtlı pusulalar yalnızca son (iki sanıklı) oylamadır -> yalnızca o kararla
  // ilgili, kesin doğru aileler (closeCall, tie, votedThenDied, bandwagon*) ve sohbet aileleri.
  // Günler arası aileler (abstainAll, heat, untouched, pair) böyle bir gün varsa hiç kullanılmaz.
  const partial = allDays.some((x) => x.secret || x.trial);
  const TRIAL_OK = new Set(['closeCall', 'tie', 'votedThenDied', 'bandwagon', 'bandwagonEvil', 'bandwagonInnocent', 'silent', 'chatty']);
  const push = out.push.bind(out);
  out.push = (c) => {
    if (day && day.trial && !TRIAL_OK.has(c.family) && c.fact && c.fact.day === d) return out.length;
    if (c.family === 'consistent' && c.fact.days.some((r) => { const x = st.days.get(r); return !x || x.secret || x.trial; })) return out.length;
    return push(c);
  };

  if (day && day.closed && !day.secret) {
    const trails = trailByVoter(day);
    // 1) Oy değiştirme (son değişiklik), son anda ise ayrıca vurgulanır.
    for (const [voter, events] of trails) {
      if (!alive(voter)) continue;
      let cur = null;
      let lastVote = null;
      let lastSwitch = null;
      let changes = 0;
      for (const e of events) {
        if (cur !== null && e.to !== cur) changes++;
        if (isPlayerTarget(lastVote) && isPlayerTarget(e.to) && lastVote !== e.to && known(lastVote) && known(e.to)) {
          lastSwitch = { from: lastVote, to: e.to, msLeft: e.msLeft };
        }
        cur = e.to;
        if (e.to !== null) lastVote = e.to;
      }
      if (lastSwitch && day.ballots.get(voter) === lastSwitch.to) {
        const late = typeof lastSwitch.msLeft === 'number' && lastSwitch.msLeft <= LATE_MS;
        out.push({
          family: late ? 'switchLate' : 'switch',
          key: late ? 'rumor.switchLate' : 'rumor.switch',
          persons: { a: voter, b: lastSwitch.from, c: lastSwitch.to },
          vars: {},
          fact: { day: d, voter, from: lastSwitch.from, to: lastSwitch.to, late },
        });
      }
      if (changes >= 3) {
        out.push({ family: 'fickle', key: 'rumor.fickle', persons: { a: voter }, vars: { n: changes },
          fact: { day: d, voter, changes } });
      }
    }

    // 2) Hızlı Uyu oyu (gün oy birliğiyle uyumayla bitmediyse).
    if (day.outcome && day.outcome.type !== 'sleep') {
      const sleepers = [...day.ballots].filter(([, t]) => t === SLEEP).map(([v]) => v);
      for (const v of sleepers) {
        if (!alive(v)) continue;
        if (sleepers.length === 1) {
          out.push({ family: 'sleepyAlone', key: 'rumor.sleepyAlone', persons: { a: v }, vars: {},
            fact: { day: d, voter: v, only: true } });
        } else {
          out.push({ family: 'sleepy', key: 'rumor.sleepy', persons: { a: v }, vars: {}, fact: { day: d, voter: v } });
        }
      }
    }

    // 3) Dün oy vermeyen (seçmenlerin en az yarısı oy verdiyse).
    const eligible = day.aliveAtStart.filter((id) => alive(id));
    const voted = day.aliveAtStart.filter((id) => day.ballots.has(id)).length;
    if (day.aliveAtStart.length && voted * 2 >= day.aliveAtStart.length) {
      for (const id of eligible) {
        if (!day.ballots.has(id)) {
          out.push({ family: 'abstain', key: 'rumor.abstain', persons: { a: id }, vars: {}, fact: { day: d, voter: id } });
        }
      }
    }

    // 4) Sohbet (herkese açık; sis gününde de geçerli).
    chatCandidates(day, d, alive, eligible, out);

    // 5) Kıl payı / beraberlik.
    const { counts } = weightedTally(day);
    if (day.outcome && day.outcome.type === 'hanged') {
      const x = day.outcome.id;
      const top = counts.get(x) || 0;
      const rest = [...counts].filter(([t]) => t !== x).sort((p, q) => q[1] - p[1]);
      if (rest.length && (rest.length === 1 || rest[0][1] > rest[1][1]) && top - rest[0][1] === 1 && alive(rest[0][0])) {
        out.push({ family: 'closeCall', key: 'rumor.closeCall', persons: { a: rest[0][0], b: x }, vars: {},
          fact: { day: d, id: rest[0][0], hanged: x, margin: 1 } });
      }
    }
    if (day.outcome && day.outcome.type === 'tie' && day.outcome.tied && day.outcome.tied.length === 2) {
      const [p1, p2] = day.outcome.tied;
      if (alive(p1) && alive(p2) && known(p1) && known(p2)) {
        out.push({ family: 'tie', key: 'rumor.tie', persons: { a: p1, b: p2 }, vars: {}, fact: { day: d, tied: [p1, p2] } });
      }
    }

    // 6) Tek başına oy veren.
    const votersOf = new Map();
    for (const [v, t] of day.ballots) {
      if (!isPlayerTarget(t)) continue;
      if (!votersOf.has(t)) votersOf.set(t, []);
      votersOf.get(t).push(v);
    }
    for (const [t, vs] of votersOf) {
      if (vs.length === 1 && alive(vs[0]) && known(t)) {
        out.push({ family: 'lone', key: 'rumor.lone', persons: { a: vs[0], b: t }, vars: {}, fact: { day: d, voter: vs[0], target: t } });
      }
    }

    // 7) Dün oy verdiği kişi bu sabah vampir saldırısında öldü.
    const night = st.nights.get(round);
    for (const death of (night && night.deaths) || []) {
      if (death.cause !== 'vampir') continue;
      for (const v of votersOf.get(death.id) || []) {
        if (alive(v)) {
          out.push({ family: 'votedThenDied', key: 'rumor.votedThenDied', persons: { a: v, b: death.id }, vars: {},
            fact: { day: d, voter: v, target: death.id, night: round } });
        }
      }
    }

    // 8) Dün gönderilene oy verenler (rol herkese açıksa ona göre).
    if (day.outcome && day.outcome.type === 'hanged') {
      const x = day.outcome.id;
      const xp = st.roster.get(x);
      const role = xp ? xp.role : null;
      let key = 'rumor.bandwagon';
      let family = 'bandwagon';
      if (role && st.isEvil(role)) { key = 'rumor.bandwagonEvil'; family = 'bandwagonEvil'; }
      else if (role && st.isVillage(role)) { key = 'rumor.bandwagonInnocent'; family = 'bandwagonInnocent'; }
      for (const v of votersOf.get(x) || []) {
        if (alive(v)) out.push({ family, key, persons: { a: v, b: x }, vars: {}, fact: { day: d, voter: v, target: x, role } });
      }
    }

    // 9) İki gündür aynı kişiye oy.
    const prevDay = st.days.get(d - 1);
    if (prevDay && prevDay.closed) {
      for (const [v, t] of day.ballots) {
        if (isPlayerTarget(t) && prevDay.ballots.get(v) === t && alive(v) && alive(t)) {
          out.push({ family: 'consistent', key: 'rumor.consistent', persons: { a: v, b: t }, vars: {}, fact: { days: [d - 1, d], voter: v, target: t } });
        }
      }
    }

    // 10) Sandığa ilk oy.
    const first = (day.trail || []).find((e) => e.to !== null);
    if (first && isPlayerTarget(first.to) && alive(first.voter) && known(first.to)) {
      out.push({ family: 'firstVoter', key: 'rumor.firstVoter', persons: { a: first.voter, b: first.to }, vars: {},
        fact: { day: d, voter: first.voter, target: first.to } });
    }
  }

  if (day && day.closed && day.secret) chatCandidates(day, d, alive, day.aliveAtStart.filter((id) => alive(id)), out);

  // Bütün günler boyunca:
  if (allDays.length >= 2 && !partial) {
    // 11) Hiç oy vermeyen (hayattayken yapılan her oylamada).
    for (const [id, p] of st.roster) {
      if (!p.alive) continue;
      const daysAlive = allDays.filter((x) => x.aliveAtStart.includes(id));
      if (daysAlive.length >= 2 && daysAlive.every((x) => !x.ballots.has(id))) {
        out.push({ family: 'abstainAll', key: 'rumor.abstainAll', persons: { a: id }, vars: { n: daysAlive.length },
          fact: { voter: id, days: daysAlive.map((x) => x.round) } });
      }
    }
    // 12) En çok oy alan (pusula sayısı) / hiç oy almayan.
    const received = new Map();
    let playerBallotDays = 0;
    for (const x of allDays) {
      let any = false;
      for (const [, t] of x.ballots) {
        if (isPlayerTarget(t)) { received.set(t, (received.get(t) || 0) + 1); any = true; }
      }
      if (any) playerBallotDays++;
    }
    const aliveRec = [...received].filter(([id]) => alive(id)).sort((p, q) => q[1] - p[1]);
    if (aliveRec.length && aliveRec[0][1] >= 3) {
      const maxOther = Math.max(0, ...[...received].filter(([id]) => id !== aliveRec[0][0]).map(([, n]) => n));
      if (aliveRec[0][1] > maxOther) {
        out.push({ family: 'heat', key: 'rumor.heat', persons: { a: aliveRec[0][0] }, vars: { n: aliveRec[0][1] },
          fact: { id: aliveRec[0][0], ballots: aliveRec[0][1] } });
      }
    }
    if (playerBallotDays >= 2) {
      for (const [id, p] of st.roster) {
        if (p.alive && !received.has(id) && allDays.filter((x) => x.aliveAtStart.includes(id)).length >= 2) {
          out.push({ family: 'untouched', key: 'rumor.untouched', persons: { a: id }, vars: {}, fact: { id, ballots: 0 } });
        }
      }
    }
    // 13) Hep aynı kişiye oy veren ikili.
    const aliveIds = [...st.roster.values()].filter((p) => p.alive).map((p) => p.id);
    for (let i = 0; i < aliveIds.length; i++) {
      for (let j = i + 1; j < aliveIds.length; j++) {
        const x = aliveIds[i];
        const y = aliveIds[j];
        let matches = 0;
        let conflict = false;
        for (const dd of allDays) {
          const tx = dd.ballots.get(x);
          const ty = dd.ballots.get(y);
          const px = isPlayerTarget(tx);
          const py = isPlayerTarget(ty);
          if (!px && !py) continue;
          if (px && py && tx === ty) matches++;
          else { conflict = true; break; }
        }
        if (!conflict && matches >= 2) {
          out.push({ family: 'pair', key: 'rumor.pair', persons: { a: x, b: y }, vars: { n: matches }, fact: { a: x, b: y, matches } });
        }
      }
    }
  }
  return out;
}

module.exports = { R, rumorCandidates, SLEEP, LATE_MS };
