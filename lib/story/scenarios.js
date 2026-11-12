'use strict';

// Senaryolar (temalar): her oyun bunlardan birini rastgele (tohuma göre) alır. Senaryo satırları genel
// havuzlara karıştırılır ve daha sık seçilir (ağırlık 2), böylece hikâye temaya bürünür ama sabit bir
// olay örgüsü izlemez. Anahtarların hangi genel havuza karıştığı engine'deki SCENARIO_MAP'te.
// Senaryo coda satırları (death.coda, hanged.coda) sahne kelimesi içermez.

const SCENARIOS = [
  {
    id: 'sisli-vadi',
    name: 'Sisli Vadi',
    mood: 'nemli, boğuk, belirsiz; fenerler, çanlar, sisin içinde kıpırdayan gölgeler',
    intro: [
      "Sisli Vadi'de sabahlar geç, akşamlar erken gelir. Bu hafta sis hiç kalkmadı ve sisin içinde bir şeyler kıpırdamaya başladı.",
      'Vadiye bir sis çöktü; öyle koyu ki insan kendi elini zor görüyor. Ninelere göre böyle sislerde gece yaratıkları kapı kapı dolaşır.',
      "Sisli Vadi'nin tek yolu sisle kapandı. Kimse giremiyor, kimse çıkamıyor; ve aramızdan biri yalan söylüyor.",
    ],
    night: [
      'Sis pencerelere yapıştı, fenerlerin ışığı iki adım ötede boğuldu. Vadide gece yine sessizce başladı.',
      'Sisin içinden boğuk bir çan sesi geldi. Kimse çanı kimin çaldığını sormadı.',
      'Vadinin üstüne süt beyazı bir örtü çekildi. Altında neler döndüğünü yalnızca karanlık bilecek.',
      'Sis bu gece daha da koyu; kapı aralıklarından içeri sızmaya çalışıyor.',
    ],
    safe: [
      'Sis sabah biraz aralandı ve bütün kapıları tek tek gösterdi: hepsi yerindeydi, herkes de.',
      'Vadide sabah: sis dağılmadı ama kimse de eksilmedi. Bu bile bir zafer.',
    ],
    'death.coda': [
      'Sis, ayak izlerini çoktan silmişti.',
      'Vadide kimse bir şey görmemişti; sis görmeye izin vermiyor.',
      'Sisin içinde bir hayalet daha dolaşıyor artık.',
    ],
    day: [
      'Sis meydanı yarım yamalak açtı. Herkes birbirinin yüzünü ancak yakından seçebiliyor; belki de iyi bir şey bu.',
      'Vadinin nemli sabahında ahali ateşin başına toplandı. Sis kulakları tıkıyor ama dedikoduyu değil.',
      'Sisin arasından seçilen yüzler solgun. Bugün kimin maskesi düşecek?',
    ],
    'hanged.coda': [
      'Sis kararı da yuttu; vadide bir ses daha eksildi.',
      'Vadinin sisinde bir silüet daha seçilmez oldu.',
    ],
    sleep: ['Sis o kadar koyuydu ki köy kimi suçlayacağını bile göremedi. Herkes uyumaya gitti.'],
    nohang: ['Sisli kafalar, sisli kararlar: vadide bugün kimse gönderilmedi.'],
    'win.koylu': [
      'Ve sis kalktı. Vadide ilk kez gökyüzü bütün maviliğiyle göründü: köy kurtulmuştu.',
      'Güneş sisi yırttı, vadiye sıcak bir ışık doldu. Son vampir o ışığa dayanamadı.',
    ],
    'win.vampir': [
      'Sis artık hiç kalkmayacak. Vadi, sisin içinde yaşayanlara kaldı.',
      'Vadinin son feneri de söndü. Sisin içinden yalnızca kanat sesleri geliyor.',
    ],
    'win.soytari': ['Sisin içinden bir kahkaha yükseldi: Soytarı, vadinin en sisli şakasını yapmıştı.'],
    rumor: [
      'Sis dün gece pencerelerin camına parmakla yazılmış harfler bırakmış. Kimse ne yazdığını okuyamamış.',
      'Vadinin ağzındaki köprüde geceleri bir fener sallanıyormuş; feneri tutan kimse yokmuş.',
      'Sürüsünü sisin içinde sayan biri, her seferinde bir koyun fazla saydığını anlatıyor.',
    ],
    'epi.open': [
      "Sisli Vadi'de, sisin hiç kalkmadığı o günlerin hikâyesi {nightsw} gece sürdü.",
      'Vadide sis {nightsw} gece boyunca köyün üstünde bekledi.',
    ],
  },
  {
    id: 'kanli-ay',
    name: 'Kanlı Ay',
    mood: 'kızıl ışık, kehanetler, baykuşlar; masalların uğursuz ayı',
    intro: [
      'Bu ay gökyüzüne kıpkırmızı doğdu. Yaşlılar, kanlı ayın her doğuşunda köyden birinin eksildiğini anlatır.',
      'Kanlı Ay yükseliyor. Köpekler ona havlıyor, kediler kuyruklarını kabartıyor; köyün içindeki biri ise gülümsüyor.',
      'Yüz yılda bir doğan kızıl ay yine tepede. Ninelerin masallarındaki geceler artık masal değil.',
    ],
    night: [
      'Kızıl ay çatıların üstünde yükseldi; bütün köy pembe bir gölgeye büründü. Kapılar sürgülendi.',
      'Ay yine kanlı, yine iri. Köy onun bakışı altında uyumaya çalışıyor.',
      'Kızıl ışık pencerelerden içeri sızdı, yorganların üstüne düştü. Bu gece kimin rüyasına girecek?',
      'Baykuşlar kanlı aya doğru öttü. Ninelere göre bu, avın başladığını haber verir.',
    ],
    safe: [
      'Kızıl ay sabahın ilk ışığıyla soldu ve bu kez kimseyi götürmedi.',
      'Ay bu gece yalnızca izledi. Köy onun bakışlarından sağ çıktı.',
    ],
    'death.coda': [
      'Kızıl ay batarken yüzü sanki biraz daha kırmızıydı.',
      'Ninelerin kehaneti tuttu: kanlı ay yine birini aldı.',
      'Kanlı ay bir isim daha fısıldadı ve battı.',
    ],
    day: [
      'Gökyüzünde ayın kızıl izi hâlâ seçiliyor. Meydanda herkes birbirinin gözüne bakıyor.',
      'Güneş çıktı ama kanlı ayın soğuğu kemiklerde kaldı. Tartışma başladı.',
      'Kanlı ayın altında geçen gecenin ardından meydanda herkes biraz daha solgun.',
    ],
    'hanged.coda': [
      'Kızıl ay bu akşam doğduğunda meydandaki boşluğu görecek.',
      'Gökyüzünde ayın hayaleti, kararı onaylar gibi parladı.',
    ],
    sleep: ['Kanlı ay doğmadan uyumak isteyen köy, oy birliğiyle yataklara dağıldı.'],
    nohang: ['Kızıl ay bu kararsızlığa gülümsüyor olmalı.'],
    'win.koylu': [
      'Kanlı ay son kez soldu ve bir daha kızarmadı. Köy kehaneti yendi.',
      'Ay bu gece gümüş renginde doğdu. Kötülük, kızıl ışığıyla birlikte gitti.',
    ],
    'win.vampir': [
      'Ay artık hep kızıl doğacak. Köy, onun gölgesindekilere kaldı.',
      'Kanlı ayın altında son kapı da açıldı. Vampirler kazandı.',
    ],
    'win.soytari': ["Kanlı ayın altında en yüksek kahkaha Soytarı'dan geldi."],
    rumor: [
      'Kanlı ay doğduğunda bütün aynaların bir anlığına karardığı söyleniyor.',
      'Ninelerin dediğine göre kızıl ayın ışığında gölgesi düşmeyen biri varmış aramızda. Kimse gölgesine bakmaya cesaret edemiyor.',
      'Mezarcı, kızıl ay doğduğu gece mezarlıkta toprağın ılık olduğunu anlatıyor.',
    ],
    'epi.open': [
      'Kanlı ayın doğduğu o hafta köy, {nightsw} gece boyunca kızıl ışığın altında yaşadı.',
      'Kızıl ay {nightsw} kez doğdu ve battı.',
    ],
  },
  {
    id: 'hasat-senligi',
    name: 'Hasat Şenliği',
    mood: 'balkabakları, fenerler, davullar, elma şırası; şenliğin ortasında gizlenen gölgeler',
    intro: [
      'Hasat Şenliği başladı! Meydan balkabaklarıyla, elma şırasıyla, renkli fenerlerle dolu. Ama bu yıl şenliğe davetsiz misafirler de gelmiş.',
      'Ambarlar dolu, sofralar kurulu, davullar hazır. Herkes şenliğe hazırlanırken kimse kalabalığın içindeki sivri dişleri fark etmedi.',
      'Bu yılın hasadı bereketli, şenliği uzun olacak. Tabii herkes şenliğin sonunu görebilirse.',
    ],
    night: [
      'Şenlik fenerleri birer birer söndü; balkabaklarının oyuk gözleri karanlıkta parladı.',
      'Davullar sustu, sofralar toplandı. Şenliğin gecesi başka türlü bir şenliğe gebe.',
      'Ambarların kapısı kapandı, kuru mısır sapları rüzgârda hışırdadı. Kimse dışarıda kalmak istemedi.',
      'Elma şırası yarım kaldı, köy erkenden yattı. Tarlalardaki korkuluklar bu gece biraz daha korkunç.',
    ],
    safe: [
      'Şenlik sabahı herkesi sofrada buldu. Gözleme kokusu bütün evlerden aynı anda yükseldi.',
      'Sabah balkabakları yerinde, komşular yerinde. Şenlik devam ediyor!',
    ],
    'death.coda': [
      'Şenlik sofrasında bir tabak boş kaldı.',
      'Davulcu bu sabah tokmağını eline almadı.',
      'Hasat çelengindeki bir başak sessizce yere düştü.',
    ],
    day: [
      'Meydanda şenlik çadırları kurulu ama kimse eğlenmiyor. Elma şekerlerinin yerini şüpheler aldı.',
      'Şenliğin ortasında ahali toplandı: önce adalet, sonra halay.',
      'Gözlemeler soğuyor, tartışma kızışıyor. Hasat Şenliği hiç bu kadar gergin geçmemişti.',
    ],
    'hanged.coda': [
      'Şenlik davulu bir kez, ağır ağır vurdu.',
      'Hasat sofrasından bir sandalye daha kaldırıldı.',
    ],
    sleep: ['Şenlik yorgunluğu ağır bastı; köy oy birliğiyle yatağa gitti.'],
    nohang: ['Meydanda karar çıkmadı; şenlik çadırlarının altında homurtular sürüyor.'],
    'win.koylu': [
      'Davullar çaldı, halaylar çekildi; son vampirin pelerini tarladaki korkuluğa giydirildi. Şenlik şimdi başlıyor!',
      'Hasat kurtuldu, köy kurtuldu. Bu yılın şenliği yıllarca anlatılacak.',
    ],
    'win.vampir': [
      'Şenlik sofrası kuruldu ama bu kez sofraya oturanlar başkaları. Vampirler kazandı.',
      'Fenerler söndü, davullar sustu. Hasadın tadına artık vampirler bakacak.',
    ],
    'win.soytari': ['Şenliğin asıl yıldızı belli oldu: Soytarı son gösterisini alkışlar arasında yaptı.'],
    rumor: [
      'Tarladaki korkuluğun dün gece yer değiştirdiği söyleniyor. Bu sabah başka tarafa bakıyormuş.',
      'Şenlik için yapılan balkabağı tatlısından bir tepsi kaybolmuş. Şüpheliler arasında köyün bütün çocukları var.',
      'Ambarın arkasında bir pelerin bulunmuş. Kimse sahiplenmedi.',
    ],
    'epi.open': [
      'O yılın Hasat Şenliği {nightsw} gece sürdü ve kimse onu kolay kolay unutmadı.',
      'Hasat toplandı, şenlik kuruldu ve {nightsw} gece boyunca köy kendi gölgesiyle dans etti.',
    ],
  },
  {
    id: 'kara-kis',
    name: 'Kara Kış',
    mood: 'kar, tipi, buz sarkıtları, uzak kurtlar; sobaların başında soğuk şüpheler',
    intro: [
      'Kara Kış geldi. Yollar karla kapandı, köy dünyadan koptu. Ve karın üstünde kimsenin tanımadığı ayak izleri belirdi.',
      'Kar dizlere kadar, ayaz kemiklere kadar. Bu kış köyde yalnızca soğuk değil, aç bir şey de dolaşıyor.',
      'Bacalar tütüyor, sobalar gürlüyor, kurtlar uzakta uluyor. Köyde biri ise ısınmak için bambaşka bir yol arıyor.',
    ],
    night: [
      'Kar sessizce yağmaya başladı. Bütün ayak izleri örtülecek; bu, birilerinin işine geliyor.',
      'Sobalar kısıldı, yorganlar üst üste yığıldı. Dışarıda tipi uğulduyor.',
      'Uzaktan kurtlar uludu; yakından ise kimse bir şey duymadı. Gece donarak başladı.',
      'Saçaklardan buz sarkıtları sarkıyor, pencerelerde buz çiçekleri açtı. Köy kar altında uykuya daldı.',
    ],
    safe: [
      'Sabah karın üstünde tek bir yabancı ayak izi yoktu. Bütün bacalar tütüyordu.',
      'Tipi gece boyunca kapıları dövdü ama sabah herkes sobasının başındaydı, sapasağlam.',
    ],
    'death.coda': [
      'Karın üstündeki izler sabah olmadan örtülmüştü.',
      'Bir baca daha tütmüyor bu sabah.',
      'Kar, sessizce yeni bir tümseği örttü.',
    ],
    day: [
      'Kar küreklendi, meydanda ateş yakıldı. Ellerini ısıtan ahali şimdi kafalarını ısıtıyor.',
      'Ayaz yüzleri kızarttı, şüpheler dilleri çözdü. Meydanda tartışma başladı.',
      'Herkes kalın paltosuna sarınmış; kimin paltosunun altında ne sakladığını bilen yok.',
    ],
    'hanged.coda': [
      'Ayaz, meydandaki sessizliği dondurdu.',
      'Kar yağmaya devam etti, kararın üstünü örtmek ister gibi.',
    ],
    sleep: ['Ayaz o kadar sertti ki kimse meydanda kalmak istemedi. Köy oy birliğiyle sobanın başına döndü.'],
    nohang: ['Ayazda donan yalnızca parmaklar değildi; kararlar da dondu.'],
    'win.koylu': [
      'Kar erimeye başladı, ilk kardelenler açtı. Köy kışı da vampirleri de atlattı.',
      'Bahar bu yıl erken geldi. Köy kara kışı da karanlığı da geride bıraktı.',
    ],
    'win.vampir': [
      'Kış bu köyde hiç bitmeyecek. Bacalar sustu; yalnızca rüzgâr ve vampirler kaldı.',
      'Kar bütün kapıları örttü. Köy, soğuğun ve gecenin yeni sahiplerine kaldı.',
    ],
    'win.soytari': ['Karın ortasında bir kahkaha yankılandı: Soytarı, kara kışın en soğuk şakasını yaptı.'],
    rumor: [
      'Kuyunun suyu donmuş, ama buzun üstünde kime ait olduğu belirsiz iki çift ayak izi varmış.',
      'Kurtlar dün gece köyün tam kenarına kadar gelmiş, sonra bir şeyden korkmuş gibi geri kaçmış.',
      'Odunluklardan odun eksiliyormuş. "Kimin sobası fazla yanıyor?" sorusu kapı kapı dolaşıyor.',
    ],
    'epi.open': [
      'O kara kışta köy, {nightsw} gece boyunca karın ve karanlığın altında direndi.',
      'Kar {nightsw} gece boyunca aralıksız yağdı.',
    ],
  },
  {
    id: 'veba-soylentisi',
    name: 'Veba Söylentisi',
    mood: 'salgın dedikodusu, sarımsak ve nane, sirke kokusu; herkes birbirinden uzak durur',
    intro: [
      'Komşu kasabadan kötü haberler geliyor: bir salgın varmış. Köy kapılarını kapattı, ama kötülük çoktan içeri girmişti; hem de hastalıktan çok daha dişli.',
      'Veba söylentisi yayıldı, kapılara sarımsak ve nane asıldı. Ama köydeki solgun yüzlerin hepsi hastalıktan değil.',
      'Herkes öksürene yan gözle bakıyor. Oysa asıl tehlike öksürmüyor; geceleri sessizce dolaşıyor.',
    ],
    night: [
      'Kapı eşiklerine kireç döküldü, pencerelere nane asıldı. Köy, hangi kötülükten korunduğunu bilmeden uyudu.',
      'Aktarın tütsüleri sokakları dumana boğdu. Bu duman kimi kovar, kimi saklar, kimse bilmiyor.',
      'Gece öksürüklerle ve fısıltılarla çöktü. Herkes kendi kapısının ardında, kendi korkusuyla yalnız.',
      'Sokaklarda kimse yok; yalnızca sirke kokusu ve uzaklardan gelen bir öksürük.',
    ],
    safe: [
      'Sabah bütün kapılar açıldı, öksürükler bile azalmıştı. Kimse eksik değil.',
      'Bu sabah köyün tek derdi sirke kokusuydu. Herkes hayatta.',
    ],
    'death.coda': [
      'Kimse yaklaşmaya cesaret edemedi; ya hastalıksa?',
      'Kapısına tebeşirle bir çarpı çizildi.',
      'Söylenti bir isim daha büyüdü.',
    ],
    day: [
      'Meydanda herkes birbirinden üç adım uzakta duruyor; şüphe bulaşıcı.',
      'Ağızlar mendillerle örtülü ama diller durmuyor. Tartışma başladı.',
      'Aktarın tezgâhında kuyruk var: sarımsak, nane, sirke… ve dedikodu.',
    ],
    'hanged.coda': [
      'Köy, hastalığın bir kişiyle gitmesini umdu. Kötülük öyle kolay gitmez.',
      'Sirke kokusu meydandaki sessizliği bastıramadı.',
    ],
    sleep: ['Kimse kalabalıkta kalmak istemedi; meydan oy birliğiyle boşaltıldı.'],
    nohang: ['Kararsızlık da bir salgın gibi; bugün bütün meydana bulaştı.'],
    'win.koylu': [
      'Söylentiler dindi, kapılardaki çarpılar silindi. Köy hem hastalığı hem vampirleri atlattı.',
      'Aktar bu sabah tütsü değil çiçek satıyor. Köy kurtuldu!',
    ],
    'win.vampir': [
      'Söylenti doğruymuş: köyü bir salgın sardı. Adı veba değil, vampirmiş.',
      'Kapılardaki sarımsaklar kurudu, köy sessizliğe gömüldü. Vampirler kazandı.',
    ],
    'win.soytari': ['Salgının en bulaşıcı şeyi kahkahaymış: Soytarı kazandı!'],
    rumor: [
      'Aktar, sarımsak stoğunun bir gecede tükendiğini söylüyor. Kim aldı, neden bu kadar çok aldı?',
      "Kasabadan gelen son mektupta \"hastalık değil, başka bir şey\" yazıyormuş. Mektubun gerisi okunamamış.",
      'Birinin gece pencereden pencereye sirke serptiği konuşuluyor. Kim olduğunu gören yok.',
    ],
    'epi.open': [
      'Veba söylentisinin köyü sardığı o günlerde, {nightsw} gece boyunca kimse kimseye güvenmedi.',
      'Söylenti {nightsw} gece boyunca kapıdan kapıya dolaştı.',
    ],
  },
  {
    id: 'panayir',
    name: 'Panayır Haftası',
    mood: 'atlıkarınca, pamuk şeker, kukla perdesi, gezgin topluluk; gösterinin bir de gece seansı var',
    intro: [
      'Köye panayır geldi! Rengârenk çadırlar, atlıkarınca, pamuk şeker… ve kimsenin nereden geldiğini bilmediği gezgin bir topluluk.',
      'Panayır kuruldu, kuklacılar perdeyi açtı, atlıkarınca dönmeye başladı. Bu hafta köyde gösterinin bir de gece seansı var.',
      'Atlıkarıncanın müziği köyün her köşesinden duyuluyor. Panayır bir hafta kalacak; köydekilerin hepsi o kadar kalabilecek mi?',
    ],
    night: [
      'Atlıkarınca durdu, çadırların fenerleri söndü. Panayırın gece yüzü ortaya çıktı.',
      'Kukla perdesi kapandı ama gölgeler oynamaya devam ediyor.',
      'Panayır müziği son bir kez çaldı ve kesildi. Köy pamuk şeker kokusu içinde uykuya daldı.',
      'Boş çadırların bezleri rüzgârda dalgalanıyor; içlerinden biri sanki nefes alıyor.',
    ],
    safe: [
      'Sabah atlıkarınca yeniden döndü ve bütün köy oradaydı. Kimse eksik değil!',
      'Panayır çadırları açıldı, gösteri devam ediyor: bu gece kimse sahneden inmedi.',
    ],
    'death.coda': [
      'Panayırın müziği bu sabah biraz daha kısık çalıyor.',
      'Atlıkarıncanın bir atı boş döndü.',
      'Kuklacı bugün perdeyi açmadı.',
    ],
    day: [
      'Meydan panayır yerine döndü: herkes kendi gösterisini yapıyor, seyirciler oy vermeye hazır.',
      'Pamuk şeker satıcısı bile tartışmaya katıldı. Panayırın en büyük gösterisi meydanda.',
      'Kukla perdesinin önünde ahali toplandı; bugün ipleri kimin oynattığını bulmak gerek.',
    ],
    'hanged.coda': [
      'Panayır davulu ağır ağır vurdu; gösteri bitti.',
      'Kuklacı bir kuklasını daha sandığa kaldırdı.',
    ],
    sleep: ['Panayır yorgunu köy oy birliğiyle erkenden yattı.'],
    nohang: ['Bugünkü gösteri seyircisiz bitti: kimse sahneden indirilmedi.'],
    'win.koylu': [
      'Panayır son gecesini köyün zaferiyle kutladı. Havai fişekler gökyüzünü boyadı; gece yaratıklarından eser kalmadı.',
      'Atlıkarınca neşeyle döndü, pamuk şekerler bedava dağıtıldı. Köy kurtuldu!',
    ],
    'win.vampir': [
      'Panayır çadırlarını toplayıp gitti, ama gezgin topluluğun bazıları köyde kaldı. Sonsuza dek.',
      'Atlıkarınca boş dönüyor. Panayırın son gösterisi vampirlerindi.',
    ],
    'win.soytari': ['Panayırın en iyi gösterisi sonda geldi: Soytarı reverans yaptı ve kazandı!'],
    rumor: [
      'Panayırın ayna labirentinde birinin yansıması görünmüyormuş. Kim olduğunu kimse hatırlamıyor.',
      'Kuklacının kuklalarından birinin gece kendi kendine dans ettiği söyleniyor.',
      'Atlıkarıncanın sahibi her gece bir bilet fazla sattığını ama hiç fazla binici görmediğini anlatıyor.',
    ],
    'epi.open': [
      'Panayırın köyde kaldığı o hafta, {nightsw} gece boyunca gösteri hiç durmadı.',
      'Panayır çadırlarının gölgesinde {nightsw} gece geçti.',
    ],
  },
];

const SCENARIO_BY_ID = new Map(SCENARIOS.map((s) => [s.id, s]));

module.exports = { SCENARIOS, SCENARIO_BY_ID };
