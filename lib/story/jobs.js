'use strict';

// Köy meslekleri: herkese açık, tamamen süs. Rollerle hiçbir ilgisi yoktur, roller hakkında bir şey
// sızdırmaz. Hiçbiri bir rol adıyla ya da rolü çağrıştıran bir anlamla (hekim, şifacı, falcı, bekçi,
// avcılık, büyücülük, kâhya, palyaço…) çakışmaz.
//
// Alanlar:
//   id, label     – "terzi", "Terzi" (UI'da adın yanında)
//   noun          – yalın cins isim, ad önünde: "terzi Ali"; soft: ünlüyle başlayan ekten önce yumuşayan gövde (kasap -> kasabın)
//   poss          – "köyün ___": "terzisi", "nalbandı"
//   tool, place   – iyelik ekli: "{a|gen} {atool}" -> "Ali'nin makası", "{a|gen} {aplace|loc}" -> "Ali'nin dükkânında"
//   evil          – rolü açıkken (vampir olduğu ortaya çıktığında) meslek esprisi
//   innocent      – rolü açıkken (köy tarafından biri gittiğinde) mesleğin yokluğu
// Bu satırlar sahne kelimeleri içermez (diş, yarasa, zehir, mahzen, darağacı…), her sahneye uyar.

const JOBS = [
  {
    id: 'terzi', label: 'Terzi', noun: 'terzi', poss: 'terzisi', tool: 'makası', place: 'dükkânı',
    evil: [
      'Meğer köyün terzisi bir gece yaratığıymış: yıllardır herkesin yakasını o dikiyor, boyunların ölçüsünü en iyi o biliyormuş.',
      'Herkese pelerin diken terzinin kendi pelerinini hiç çıkarmadığı şimdi anlaşıldı.',
    ],
    innocent: [
      'Yarım kalmış bir ceket, askıda sahibini boşuna bekleyecek.',
      'Köyün söküklerini bundan sonra kimse dikmeyecek.',
    ],
  },
  {
    id: 'firinci', label: 'Fırıncı', noun: 'fırıncı', poss: 'fırıncısı', tool: 'küreği', place: 'fırını',
    evil: [
      'Fırının neden hep gece yarısı yandığı sonunda anlaşıldı: köyün fırıncısı ekmekten fazlasını pişiriyormuş.',
      'Her sabah sıcak ekmek dağıtan el, geceleri kapı kapı başka bir sıcaklık arıyormuş.',
    ],
    innocent: [
      'Yarın köyde ekmek yok.',
      'Fırının bacası bu sabah tütmedi; köy kahvaltıyı kuru ekmekle yapacak, o da bulunursa.',
    ],
  },
  {
    id: 'nalbant', label: 'Nalbant', noun: 'nalbant', soft: 'nalband', poss: 'nalbandı', tool: 'çekici', place: 'nalbant dükkânı',
    evil: [
      'Köyün atları neden hep ürkekti, şimdi anlaşıldı: nal çakan el, geceleri başka işler çeviriyormuş.',
      'Meğer nalbant atları değil, hangi kapının kaç adım ötede olduğunu ölçüyormuş.',
    ],
    innocent: [
      'Köyün atları bundan sonra yalınayak.',
      'Nalbant dükkânında örs soğudu; atlar bile başını öne eğdi.',
    ],
  },
  {
    id: 'degirmenci', label: 'Değirmenci', noun: 'değirmenci', poss: 'değirmencisi', tool: 'un çuvalı', place: 'değirmeni',
    evil: [
      'Değirmen geceleri boşuna dönmüyormuş: köyün değirmencisi un değil, komşu öğütüyormuş.',
      'Değirmencinin yüzündeki o beyazlık undan değilmiş meğer.',
    ],
    innocent: [
      'Değirmen taşı durdu; köyün unu da neşesi de azaldı.',
      'Dere hâlâ akıyor ama değirmen artık dönmüyor.',
    ],
  },
  {
    id: 'coban', label: 'Çoban', noun: 'çoban', poss: 'çobanı', tool: 'kavalı', place: 'ağılı',
    evil: [
      'Kurdu koyunun yanına çoban diye koymuşuz! Sürünün neden hep huzursuz olduğu şimdi anlaşıldı.',
      'Köyün çobanı geceleri kavalını değil, başka bir ezgiyi çalıyormuş; koyunlar bunu hep biliyormuş.',
    ],
    innocent: [
      'Koyunlar bu akşam ağıla kendi kendilerine dönecek.',
      'Tepelerde artık kaval sesi duyulmayacak.',
    ],
  },
  {
    id: 'hanci', label: 'Hancı', noun: 'hancı', poss: 'hancısı', tool: 'kepçesi', place: 'hanı',
    evil: [
      'Handa kalan yolcuların neden hiç kahvaltıya inmediği sonunda anlaşıldı.',
      'Köyün hancısı herkese oda verirmiş ama kendisi hiç uyumazmış; şimdi nedeni belli.',
    ],
    innocent: [
      'Hanın kapısına "kapalı" yazısı asıldı.',
      'Handaki ocak söndü; köyün en sıcak köşesi bu akşam buz gibi.',
    ],
  },
  {
    id: 'balikci', label: 'Balıkçı', noun: 'balıkçı', poss: 'balıkçısı', tool: 'oltası', place: 'kayığı',
    evil: [
      'Köyün balıkçısı oltasını göle değil, komşu kapılarına atıyormuş.',
      'Balıkçının ağına hep az balık takılırdı; meğer asıl avını karada arıyormuş.',
    ],
    innocent: [
      'Göl kıyısındaki kayık bu sabah boş boş sallanıyor.',
      'Bu cuma köyde kimse balık yemeyecek.',
    ],
  },
  {
    id: 'oduncu', label: 'Oduncu', noun: 'oduncu', poss: 'oduncusu', tool: 'baltası', place: 'odunluğu',
    evil: [
      'Baltası hep keskindi ama niyeti daha da keskinmiş: köyün oduncusu gece yaratığı çıktı.',
      'Ormana her gün gidip akşam eli boş dönmesinin sebebi sonunda anlaşıldı.',
    ],
    innocent: [
      'Bu kış sobalar biraz daha soğuk yanacak.',
      'Odunluk yarı dolu kaldı; kış uzun, köy üşüyecek.',
    ],
  },
  {
    id: 'arici', label: 'Arıcı', noun: 'arıcı', poss: 'arıcısı', tool: 'peçesi', place: 'kovanları',
    evil: [
      'Arıcı kovanlarına kimseyi neden yaklaştırmazdı, şimdi anlaşıldı: bal değil, sır biriktiriyormuş.',
      'Peçesini yüzünden hiç indirmemesinin sebebi arılar değilmiş.',
    ],
    innocent: [
      'Arılar bu akşam kovanların önünde vızıldayarak bekledi.',
      'Bu yıl köyün balı biraz acı olacak.',
    ],
  },
  {
    id: 'berber', label: 'Berber', noun: 'berber', poss: 'berberi', tool: 'usturası', place: 'dükkânı',
    evil: [
      'Köyün bütün enselerini tıraş eden el, geceleri o enselere bambaşka gözle bakıyormuş.',
      'Berber dükkânında neden hiç ayna olmadığı sonunda anlaşıldı.',
    ],
    innocent: [
      'Köyün sakalları bundan sonra kendi bildiğince uzayacak.',
      'Berber koltuğu bu sabah boş; köyün bütün dedikoduları yarım kaldı.',
    ],
  },
  {
    id: 'demirci', label: 'Demirci', noun: 'demirci', poss: 'demircisi', tool: 'çekici', place: 'örsü',
    evil: [
      'Ateşin başında demir döverken bile hiç terlemezdi; meğer köyün demircisi bir gece yaratığıymış.',
      'Köyün bütün kapı sürgülerini döven oymuş; hangisinin gevşek olduğunu en iyi o biliyormuş.',
    ],
    innocent: [
      'Örs sustu; köyde artık çekiç sesiyle uyanan kalmadı.',
      'Demirhanenin ateşi söndü; köyün nalları, sabanları sahipsiz.',
    ],
  },
  {
    id: 'mumcu', label: 'Mumcu', noun: 'mumcu', poss: 'mumcusu', tool: 'fitil makarası', place: 'mum dükkânı',
    evil: [
      'Herkese mum satan, karanlığı en çok seven çıktı.',
      'Köyün mumcusu, kimin gece kaçta mumunu söndürdüğünü en iyi bilen kişiymiş.',
    ],
    innocent: [
      'Bu gece köyün pencerelerinde birkaç mum eksik yanacak.',
      'Mum dükkânının raflarında son mumlar eriyor.',
    ],
  },
  {
    id: 'comlekci', label: 'Çömlekçi', noun: 'çömlekçi', poss: 'çömlekçisi', tool: 'çarkı', place: 'atölyesi',
    evil: [
      'Çarkında çömlek değil, plan çeviriyormuş.',
      'Köyün bütün testilerini yapan elin neden hep soğuk olduğu şimdi anlaşıldı.',
    ],
    innocent: [
      'Çarkın üstünde yarım kalmış bir testi, sahibini boşuna bekliyor.',
      'Bundan sonra köyde kırılan çömleğin yenisi gelmeyecek.',
    ],
  },
  {
    id: 'kunduraci', label: 'Kunduracı', noun: 'kunduracı', poss: 'kunduracısı', tool: 'kalıbı', place: 'dükkânı',
    evil: [
      'Herkesin ayak ölçüsünü bilen kunduracı, kimin kapısına kaç adımda varılacağını da biliyormuş.',
      'Köyün kunduracısı geceleri hep sessiz pabuçlar giyermiş; artık nedeni belli.',
    ],
    innocent: [
      'Köyün yırtık pabuçları bundan sonra yamasız kalacak.',
      'Tezgâhta bir çift yarım çizme, sahibini boşuna bekliyor.',
    ],
  },
  {
    id: 'dokumaci', label: 'Dokumacı', noun: 'dokumacı', poss: 'dokumacısı', tool: 'mekiği', place: 'tezgâhı',
    evil: [
      'Tezgâhında kilim değil entrika dokuyormuş.',
      'Köyün dokumacısı her ilmeği sabırla atarmış; meğer kurbanlarını da öyle seçiyormuş.',
    ],
    innocent: [
      'Tezgâhtaki kilim yarım kaldı; desenin sonunu kimse bilmeyecek.',
      'Mekik sustu; köyün bütün renkleri biraz soldu.',
    ],
  },
  {
    id: 'sutcu', label: 'Sütçü', noun: 'sütçü', poss: 'sütçüsü', tool: 'güğümü', place: 'ahırı',
    evil: [
      'Her sabah kapı kapı süt dağıtırken hangi kapının zayıf olduğunu da not ediyormuş.',
      'Köyün sütçüsü sabahları bembeyaz süt, geceleri kapkara niyet taşıyormuş.',
    ],
    innocent: [
      'Yarın sabah kapı eşiklerinde süt güğümü olmayacak.',
      'İnekler bu akşam ahırda sahiplerini bekleyerek böğürdü.',
    ],
  },
  {
    id: 'bahcivan', label: 'Bahçıvan', noun: 'bahçıvan', poss: 'bahçıvanı', tool: 'çapası', place: 'bahçesi',
    evil: [
      'Köyün bahçelerinde sarımsakların neden hep kuruduğu nihayet anlaşıldı.',
      'Bahçıvanın gülleri hep gece açarmış; şimdi nedeni belli.',
    ],
    innocent: [
      'Güller bu sabah biraz solgun açtı.',
      'Bahçede yarım kalmış bir tarh, sulanmayı bekliyor.',
    ],
  },
  {
    id: 'kasap', label: 'Kasap', noun: 'kasap', soft: 'kasab', poss: 'kasabı', tool: 'önlüğü', place: 'dükkânı',
    evil: [
      'Kasap dükkânında neden hiç sarımsak satılmadığı nihayet anlaşıldı.',
      'Köyün kasabı her şeyi gramıyla tartardı; komşularını da öyle tartıp seçmiş.',
    ],
    innocent: [
      'Kasabın kepengi bu sabah açılmadı; köy bu hafta sebze yiyecek.',
      'Dükkânın terazisi boş sallanıyor.',
    ],
  },
  {
    id: 'marangoz', label: 'Marangoz', noun: 'marangoz', poss: 'marangozu', tool: 'rendesi', place: 'atölyesi',
    evil: [
      'Köyün bütün kapılarını yapan oymuş; hangi menteşenin gıcırdamadığını en iyi o biliyormuş.',
      'Marangozun yaptığı dolapların neden hep pelerin boyunda olduğu şimdi anlaşıldı.',
    ],
    innocent: [
      'Tezgâhta yarım bir sandalye, bacakları eksik bekliyor.',
      'Köyde kırılan kapıları bundan sonra kimse onarmayacak.',
    ],
  },
  {
    id: 'kalayci', label: 'Kalaycı', noun: 'kalaycı', poss: 'kalaycısı', tool: 'körüğü', place: 'dükkânı',
    evil: [
      'Kazanları ayna gibi parlatırdı ama kendi yansımasına hiç bakmazdı; şimdi nedeni anlaşıldı.',
      'Köyün kalaycısı her kazanı parlatır, her mutfağın yolunu bilirmiş.',
    ],
    innocent: [
      'Köyün bakır kapları bundan sonra kararmaya mahkûm.',
      'Körük sustu; dükkânda yalnızca soğuk bakır kokusu kaldı.',
    ],
  },
  {
    id: 'sucu', label: 'Sucu', noun: 'sucu', poss: 'sucusu', tool: 'kovası', place: 'su arabası',
    evil: [
      'Her eve su taşıyan, her evin arka kapısını da bilirmiş.',
      'Köyün sucusu testileri doldururken kimin evde yalnız kaldığını da not edermiş.',
    ],
    innocent: [
      'Kuyudan eve su taşıyacak kimse kalmadı; köy bugün susuz.',
      'Su arabası meydanda boş duruyor, eşek bile ne yapacağını bilmiyor.',
    ],
  },
  {
    id: 'ulak', label: 'Ulak', noun: 'ulak', soft: 'ulağ', poss: 'ulağı', tool: 'çantası', place: 'atı',
    evil: [
      'Kapı kapı mektup dağıtan ulak, kapı kapı başka şeyler de dağıtıyormuş.',
      'Köyün ulağı her mektubu okurmuş; kimin ne zaman evde olduğunu da öyle öğrenmiş.',
    ],
    innocent: [
      'Bundan sonra köyün mektupları yerine ulaşmayacak.',
      'Ulağın atı meydanda, bekleyeceği mektubu bilmeden duruyor.',
    ],
  },
  {
    id: 'peynirci', label: 'Peynirci', noun: 'peynirci', poss: 'peynircisi', tool: 'tahta kaşığı', place: 'mandırası',
    evil: [
      'Mandıradaki peynirlerin neden hep o kadar solgun olduğu nihayet anlaşıldı.',
      'Köyün peynircisi sütü mayalamayı iyi bilirdi; komşularını da öyle bekletiyormuş.',
    ],
    innocent: [
      'Kahvaltı sofraları bundan sonra biraz eksik kalacak.',
      'Mandırada teneke teneke peynir, sahibini boşuna bekliyor.',
    ],
  },
  {
    id: 'komurcu', label: 'Kömürcü', noun: 'kömürcü', poss: 'kömürcüsü', tool: 'çuvalı', place: 'kömürlüğü',
    evil: [
      'Yüzü hep kömür karası olduğu için kimse solgunluğunu fark etmemiş.',
      'Köyün kömürcüsü karanlıktan hiç şikâyet etmezdi; şimdi nedeni anlaşıldı.',
    ],
    innocent: [
      'Kömür çuvalları kapının önünde, alıcısını bekliyor.',
      'Bu kış ocaklar biraz daha erken sönecek.',
    ],
  },
  {
    id: 'kuyumcu', label: 'Kuyumcu', noun: 'kuyumcu', poss: 'kuyumcusu', tool: 'büyüteci', place: 'dükkânı',
    evil: [
      'Herkese gümüş yüzük satardı ama kendisi gümüşe hiç dokunmazdı. Şimdi anlaşıldı.',
      'Köyün kuyumcusu her şeyin değerini bilirdi; en çok da komşularınınkini.',
    ],
    innocent: [
      'Vitrindeki yüzükler sahipsiz parlıyor.',
      'Dükkânın camında son bir gümüş kolye, ışığı boşuna yansıtıyor.',
    ],
  },
  {
    id: 'helvaci', label: 'Helvacı', noun: 'helvacı', poss: 'helvacısı', tool: 'kazanı', place: 'tezgâhı',
    evil: [
      'Helvasının tatlılığına kanmışız: ağzı bal, niyeti zifirmiş.',
      'Köyün helvacısı herkese tatlı dağıtırmış; acısını sonra çıkarmak için.',
    ],
    innocent: [
      'Bu akşam köyde kimse helva kavurmayacak; tatlı da kalmadı, tat da.',
      'Tezgâhta bir tepsi helva soğudu; kimse dokunmaya cesaret edemiyor.',
    ],
  },
  {
    id: 'boyaci', label: 'Boyacı', noun: 'boyacı', poss: 'boyacısı', tool: 'fırçası', place: 'atölyesi',
    evil: [
      'Bütün köyün duvarlarını boyardı; kendi yüzünün renginin neden hiç değişmediği şimdi anlaşıldı.',
      'Köyün boyacısı her şeyi bir kat badanayla örtmeyi iyi bilirmiş; niyetini de.',
    ],
    innocent: [
      'Kapı pervazları yarım boyalı kaldı.',
      'Köyün renkleri bu sabah biraz daha soluk.',
    ],
  },
  {
    id: 'saatci', label: 'Saatçi', noun: 'saatçi', poss: 'saatçisi', tool: 'cımbızı', place: 'dükkânı',
    evil: [
      'Köyün saatlerini kuran oymuş; gece yarısının tam ne zaman geldiğini en iyi o biliyormuş.',
      'Saatçinin dükkânındaki saatlerin hepsi neden hep gece yarısını gösterirdi, şimdi anlaşıldı.',
    ],
    innocent: [
      'Çan kulesinin saati bu sabah durdu.',
      'Dükkândaki saatler hâlâ tıkırdıyor ama kimse onları kurmayacak.',
    ],
  },
  {
    id: 'sepetci', label: 'Sepetçi', noun: 'sepetçi', poss: 'sepetçisi', tool: 'çakısı', place: 'tezgâhı',
    evil: [
      'Köyün sepetçisi söğüt dallarını sabırla örermiş; tuzaklarını da öyle.',
      'Sepet örerken bile bütün uçları hep kendi elinde tutarmış.',
    ],
    innocent: [
      'Köyün sepetleri bundan sonra delik kalacak.',
      'Tezgâhta yarım bir sepet, son dalını bekliyor.',
    ],
  },
  {
    id: 'kahveci', label: 'Kahveci', noun: 'kahveci', poss: 'kahvecisi', tool: 'cezvesi', place: 'kahvehanesi',
    evil: [
      'Köyün bütün sırları kahvehanede konuşulurdu; en çok o dinler, en az o konuşurmuş.',
      'Kahvecinin gece geç saatlere kadar açık kalmasının sebebi müşteriler değilmiş.',
    ],
    innocent: [
      'Kahvehanenin ocağı söndü; köy bugün kahvesiz.',
      'Kahvehanede taburelerin hepsi masaların üstüne kaldırıldı.',
    ],
  },
  {
    id: 'eskici', label: 'Eskici', noun: 'eskici', poss: 'eskicisi', tool: 'terazisi', place: 'arabası',
    evil: [
      '"Eski pelerin alırım!" diye dolaşırmış; meğer hepsi kendi pelerinleriymiş.',
      'Köyün eskicisi her evin tavan arasını bilirmiş; saklanacak yerleri de.',
    ],
    innocent: [
      'Eskicinin arabası meydanda, gıcırdayarak bekliyor.',
      'Köyün kırık dökük eşyaları bundan sonra kimseye satılmayacak.',
    ],
  },
  {
    id: 'yorganci', label: 'Yorgancı', noun: 'yorgancı', poss: 'yorgancısı', tool: 'yay tokmağı', place: 'dükkânı',
    evil: [
      'Herkesin yorganını o atardı; kimin nasıl uyuduğunu en iyi o biliyormuş.',
      'Köyün yorgancısı herkese sıcacık yorgan diker, kendisi hiç uyumazmış.',
    ],
    innocent: [
      'Bu kış köyün yorganları biraz ince kalacak.',
      'Dükkânda yarım bir yorgan, pamuğunu bekliyor.',
    ],
  },
];

// Role isimleri ve bunları çağrıştıran kelimeler: hiçbir meslek bunlarla çakışmamalı (testte de bakılır).
const FORBIDDEN_JOB_WORDS = [
  'vampir', 'iftiracı', 'doktor', 'kahin', 'gözcü', 'cadı', 'avcı', 'muhtar', 'soytarı', 'köylü',
  'hekim', 'şifacı', 'falcı', 'bekçi', 'büyücü', 'kâhya', 'palyaço', 'nöbetçi', 'ebe', 'aktar', 'çiftçi',
  'gardiyan', 'zindancı', 'çilingir', 'kilitçi',
];

const JOB_BY_ID = new Map(JOBS.map((j) => [j.id, j]));

module.exports = { JOBS, JOB_BY_ID, FORBIDDEN_JOB_WORDS };
