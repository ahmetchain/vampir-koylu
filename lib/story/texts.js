'use strict';

// Genel anlatı havuzları (senaryodan bağımsız). Her anahtar bir "vuruş" (beat), her dize bir şablon.
// Yer tutucular (bkz. docs/STORY.md):
//   {a} {b}            oyuncu adı; {a|gen} {a|acc} {a|dat} {a|loc} {a|abl} {a|ile} {a|cop} hal ekleri
//   {aj}               meslek + ad ("terzi Ali"); {ajob} "terzi", {ajobs} "terzisi" (köyün ___),
//   {atool} {aplace}   "makası", "dükkânı" (iyelikli, hal eki alabilir: {aplace|loc})
//   {n} {nw} {Nw}      oy sayısı (rakam / yazıyla / büyük harfle)
//   {r} {rord} {Rord}  tur ("3", "üçüncü", "Üçüncü"); {alive} {alivew} {Alivew} yaşayan sayısı
//   {streakw}          seri uzunluğu yazıyla; {list} isim listesi ("A ile B", hal eki alabilir)
//   {role} {Role}      rol etiketi (yalnızca rolün herkese açık olduğu yerlerde)
// Kural: ad geçen şablonlar oyuncunun cinsiyetini varsaymaz; ölü/elenmiş oyuncunun rolüne yalnızca
// role.* havuzlarında değinilir; coda (ikinci cümle) havuzları sahne kelimesi içermez.

const T = {
  // ---------------- GECE ----------------
  'night.first': [
    'İlk gece köyün üstüne kalın bir yorgan gibi çöktü. Herkes kapısını sürgüledi; kimin gerçekten uyuduğunu bilen yok.',
    'İlk gece başladı. Lambalar birer birer söndü; karanlıkta yalnızca kedilerin gözleri ve birkaç aç niyet parlıyordu.',
    'Güneş tepelerin ardına kaçtı. Köy ilk kez bu kadar erken yattı ama kimsenin gözüne uyku girmedi.',
    'İlk gece köpekler bile havlamaya çekindi. Perdeler çekildi, mumlar üflendi, bekleyiş başladı.',
    'Daha dün herkes birbirine "komşum" diyordu. İlk gece çöktüğünde bu kelime biraz daha ağır geldi.',
    'Baykuş üç kez öttü; ninelere sorarsanız bu hiç iyiye işaret değil. İlk gece başladı.',
    'Çan kulesinin saati ilk geceyi çaldı. Yorganlar kulaklara kadar çekildi, sürgüler iki kez yoklandı.',
  ],
  'night.early': [
    'Akşam yemeği aceleyle yendi, bulaşıklar sabaha kaldı. Köy {rord} gecesine kapılarını kilitleyerek girdi.',
    'Kediler damlara çekildi, rüzgâr bacalarda ıslık çaldı. {Rord} gece sessizce köyün üstüne çöktü.',
    'Işıklar söndü ama kulaklar açık kaldı. Her gıcırtı birinin adımı, her esinti birinin nefesi sanıldı.',
    'Yine gece oldu. Komşular birbirine "iyi geceler" dedi; bazıları bunu biraz fazla içten söyledi.',
    'Ay bulutların arkasından köyü kolaçan etti. Kapı tokmakları bile bu gece daha soğuk.',
    'Herkes evine çekildi; meydanda yalnızca sönmekte olan ateşin çıtırtısı kaldı.',
    'Fırtına öncesini andıran bir sessizlik var; yapraklar bile kıpırdamıyor. {Rord} gece başladı.',
  ],
  'night.mid': [
    'Artık kimse "iyi geceler" demiyor; başlarını sallayıp kapılarını sürgülüyorlar.',
    'Boş kalan evlerin pencereleri kara birer göz gibi meydanı izliyor. {Rord} gece başladı.',
    'Kandiller erkenden söndürüldü. Kimse karanlıktan korkmuyor artık; korktukları, karanlıkta dolaşan.',
    'Gece yine geldi, bu kez daha çabuk. Sanki gün, köyün dertlerini dinlemekten yorulmuştu.',
    'Yastıkların altına sarımsak, kapıların arkasına süpürge kondu. İşe yaradıkları hiç görülmedi ama olsun.',
    'Bacalardan son dumanlar yükseldi. Köyde {alivew} kişi kaldı ve her biri öbürlerini dinleyerek uyumaya çalışıyor.',
    'Kuyunun zinciri rüzgârda şıngırdadı. Kimse bakmaya çıkmadı.',
    'Köyde bir katil dolaşıyor ve bunu artık herkes biliyor. Gece, bu bilgiyle birlikte çöktü.',
  ],
  'night.late': [
    'Köy o kadar sessiz ki {alivew} kalbin atışı sayılabilir. Gece son kozlarını oynamaya geldi.',
    'Boş evlerin sayısı dolu evleri geçmek üzere. Bu gece kimse uyumayacak, uyuyormuş gibi yapacak.',
    'Son kalanlar kapılarını iki kez kilitledi, sonra bir kez daha yokladı. Gece hiç bu kadar uzun görünmemişti.',
    'Rüzgâr boş sokaklarda kimseyi bulamayınca kapıları tek tek yokladı. Köyün nefesi kesildi.',
    'Mezarlıktaki taşlar artık meydandaki insanlardan kalabalık. {Rord} gece, belki de son gece.',
    'Ateş söndü, köpekler sustu, ay bile gözlerini kıstı. Kimin sabahı göreceği bu gece belli olacak.',
    'Köyde {alivew} kişi kaldı. Bu gece herkes yorganın altından tek gözle kapıyı izliyor.',
    'Gece yaratığı acele etmiyor artık; masa kurulmuş, sandalyeler azalmış.',
  ],
  'night.afterNoElim': [
    'Gün kararsız bitti; gece ise hiç kararsız görünmüyor.',
    'Köy bugün kimseyi seçemedi. Karanlığın böyle bir derdi yok.',
    'Oylar sandıkta boşa gitti. Gece, köyün bu cömertliğine teşekkür eder gibi erkenden geldi.',
    'Meydan bugün kimseden vazgeçmedi. Bakalım gece de o kadar merhametli mi?',
    'Kimse yargılanmadı, kimse rahatlamadı. Kapılar yine sürgülendi.',
  ],
  'night.afterCaught': [
    'Dün meydanda doğru kişiyi bulan köy, bu gece biraz daha rahat uyuyor. Biraz.',
    'Köyde bu akşam hafif bir bayram havası var. Yine de kimse pencereyi açık bırakmadı.',
    'Dünkü zaferin tadı damaklarda, sarımsak kokusu sokaklarda. Gece yine de geldi.',
    'Köy dün bir yılanın başını ezdi; karanlıkta başka yılan kalıp kalmadığını bu gece görecek.',
    'Bir kötü eksildi ama gece hâlâ aynı gece. Kapılar yine sürgülendi.',
  ],
  'night.afterInnocent': [
    'Dün meydanda verilen kararın ağırlığı, bu gece her yastığa bir taş gibi çöktü.',
    'Köy dün yanlış kapıyı çaldı. Karanlıkta birileri buna kıs kıs gülüyordur.',
    'Vicdanlar kapı menteşelerinden daha yüksek sesle gıcırdıyor. Gece başladı.',
    'Dün haksız yere gönderilen komşunun evi bu gece karanlık. Bir ev daha, bir mum eksik.',
    'Köy suçluyu bulamadı; suçlu ise köyü bulmakta hiç zorlanmıyor. Gece çöktü.',
  ],
  'night.coda': [
    'Bu gece {alivew} kapı sürgülendi.',
    'Köyde {alivew} mum söndü.',
    'Yoklamada {alivew} kişi vardı.',
    'Meydanda {alivew} çift ayak izi kaldı.',
  ],

  // ---------------- SABAH: ÖLÜM ----------------
  'death.bite': [
    'Sabah {a|gen} kapısı aralık bulundu. Boynunda iki minik iz vardı; ruhu çoktan bulutlara doğru yola çıkmıştı.',
    'Horoz öttüğünde {a} uyanmadı. Yastığın kenarında iki küçük diş izi, pencerede açık kalmış bir mandal…',
    'Biri gece {a|gen} evine süzüldü, boynuna eğildi ve geldiği gibi gitti. Sabah geriye solgun bir hayalet kaldı.',
    'Gece yarısı {a|gen} penceresinden bir pelerin hışırtısı duyuldu. Sabah boynundaki iki iz, hikâyenin gerisini anlattı.',
    '{a} dün akşam "bana bir şey olmaz" demişti. Boynundaki iki minik delik başka türlü düşünüyordu.',
    'Kim bilir hangi saatte bir gölge {a|gen} başucuna eğildi. Gün doğduğunda boynunda iki iz, yüzünde şaşkın bir ifade vardı.',
    '{a|gen} kapısının önünde ayak izi yoktu, yatağında ise ısırık izi vardı. Gece yaratığı bu gece aç kalmamış.',
    'Sıcak süt, yün çorap, sıkı kapalı kepenkler… Hiçbiri yetmedi; {a|gen} boynunda sabah iki minik diş izi bulundu.',
    'Katil bu gece kapıyı çalmaya bile tenezzül etmedi: {a|gen} boynuna iki diş izi bırakıp sessizce uzaklaştı.',
    'Sabah {a|gen} odasında devrilmiş bir mum ve boynunda iki minik iz bulundu. Ruhu ise çoktan pencereden süzülmüştü.',
  ],
  'death.bats': [
    'Gece yarısı bir yarasa sürüsü {a|gen} bacasından içeri doldu. Sabah kanat sesleri dindiğinde ev boştu, {a} gitmişti.',
    'Şafak sökerken {a|gen} çatısından kara bir yarasa bulutu havalandı. Arkalarında yalnızca soğumuş bir yatak bıraktılar.',
    'Komşular gece boyunca {a|gen} evinin etrafında dönen yarasaları gördü ama kimse dışarı çıkamadı. Sabah çok geçti.',
    '{a|gen} penceresine yüzlerce minik kanat çarptı. Cam dayanmadı, {a|da} dayanamadı.',
    'Sabah {a|gen} evinin damı yarasa tüyüyle… pardon, yarasa kanadıyla kaplıydı. İçeride ise kimse yoktu.',
    'Yarasalar bu gece tek bir eve uğradı: {a|gen} evine. Gün doğarken çığlık çığlığa dağıldılar, ardında bir hayalet bırakarak.',
    'Gecenin bir yarısı karanlık, kanatlı bir bulut {a|gen} kapısına çöktü. Sabah kapı ardına kadar açıktı.',
    '{a} rüyasında kanat sesleri duydu sandı. Rüya değildi. Sabah yarasalar dağıldığında köy bir komşu eksikti.',
    'Kuşlar sabah ötmek için dallara konduğunda, {a|gen} çatısındaki yarasalar çoktan işini bitirmişti.',
  ],
  'death.vanish': [
    'Sabah {a|gen} evi bomboştu. Masada yarım bir fincan, askıda bir şapka… {a} ise iz bırakmadan kaybolmuştu.',
    '{a} gece yatağına girdi, sabah ortadan kaybolmuştu. Ne bir ses, ne bir çığlık; yalnızca buruşuk bir yorgan.',
    '{a|gen} evinden geriye yalnızca terlikleri kaldı, kapının önünde, birbirine dönük. Gerisi gecenin içinde buharlaştı.',
    'Köy sabah {a|gen} kapısını çaldı, açan olmadı. İçeride yanan bir soba ve sahipsiz bir şapka vardı; {a} sırra kadem basmıştı.',
    '{a} sanki hiç var olmamış gibi ortadan kayboldu. Pencere pervazında yalnızca solgun bir hayalet el sallıyordu.',
    'Gece {a|gen} evinden bir pelerin hışırtısı geçti, sonra hiçbir şey. Sabah oda boştu; {a} izsiz kaybolmuştu.',
    '{a|gen} tabağındaki çorba bile soğumamıştı. Ne kapı kırılmıştı ne pencere; ama {a} sırra kadem basmıştı.',
    'Sabah {a|gen} evinde tek bir şey eksikti: {a}. Gece onu iz bırakmadan yuttu.',
    '{a|gen} {atool} masada, {aplace} yerli yerinde duruyordu. Bir tek sahibi ortadan kaybolmuştu.',
  ],
  'death.poison': [
    '{a|gen} başucunda sabah boş bir şişe bulundu. Dibinde zehrin yeşil tortusu, yatakta ise derin, uzun bir uyku vardı.',
    'Gece biri {a|gen} su testisine üç damla zehir damlattı. Sabah {a} bir daha hiç susamayacaktı.',
    '{a|gen} odasında acı badem kokusu vardı. Masadaki kara şişe, gecenin kimseye söylemediği sırrı taşıyordu.',
    'Sabah {a|gen} dudakları mosmordu. Zehir sessiz çalışır; ne kapı çalar ne ses çıkarır.',
    'Köy {a|gen} başında toplandığında komodindeki iksir şişesi hâlâ hafifçe tütüyordu. Bu bir gece yaratığının işi değildi.',
    'Bu sabahki ölüm başka türlüydü: {a|gen} bardağında yeşil bir zehir, yüzünde şaşkın bir ifade.',
    '{a} gece bir yudum su için kalktı, sabah kalkmadı. Testinin ağzında zehrin acı kokusu vardı.',
    'Kimse kapıyı zorlamamıştı, pencere de sıkı kapalıydı. Ama {a|gen} başucundaki şişe boştu ve zehir işini yapmıştı.',
  ],
  'death.double.bite': [
    'Bu sabah iki ev birden sessizdi: {a|gen} boynunda diş izleri, {b|gen} başucunda boş bir zehir şişesi bulundu.',
    'Gece çifte mesai yapmış: {a} bir gece yaratığının dişlerine, {b} bir şişe zehre yenik düştü.',
    'Köy iki kayba uyandı. {a|gen} boynunda iki minik iz vardı; {b|gen} bardağında ise zehrin tortusu.',
  ],
  'death.double.bats': [
    'Gece yarasalar {a|gen} çatısına çöktü; aynı saatlerde {b|gen} bardağına zehir damlıyordu. Köy iki komşusunu birden yitirdi.',
    'Sabah iki kapı açılmadı. {a|gen} evini yarasalar basmış, {b|gen} başucunda boş bir zehir şişesi kalmıştı.',
    '{a} kanat seslerine, {b} bir yudum zehre yenildi. Bu gece karanlığın iki eli vardı.',
  ],
  'death.double.vanish': [
    'Bu sabah {a} ortadan kaybolmuştu; {b} ise başucundaki zehir şişesinin yanında hiç uyanmayacak bir uykudaydı.',
    '{a|gen} evi bomboştu, sahibi iz bırakmadan kaybolmuştu; {b|gen} evinde ise masada boş bir zehir şişesi.',
    'Gece iki kez vurdu: {a} sırra kadem bastı, {b} bir şişe zehrin kurbanı oldu.',
  ],
  'death.first': [
    'Köyün ilk kaybı bu. Bundan sonra hiçbir şey eskisi gibi olmayacak.',
    'İlk mezar kazıldı. Kürekler, ne yazık ki, kenara kaldırılmadı.',
    'Herkes bunun bir şaka olmasını diledi. Değildi.',
    'Böylece hikâyenin ilk sayfası karardı.',
    'Demek söylentiler doğruymuş: köyde bir katil var.',
    'Köy artık bir masal değil, bir bilmece.',
  ],
  'death.coda.early': [
    'Meydanda fısıltılar başladı bile.',
    'Komşular birbirine yan gözle bakmaya başladı.',
    'Kuyu başında herkes aynı soruyu soruyor: kim?',
    'Kimse bir şey görmemiş. Herkes bir şey duymuş.',
    'Köyün çanı bugün biraz daha ağır çaldı.',
    'Nineler başörtülerini sıktı, çocuklar içeri çağrıldı.',
  ],
  'death.coda.mid': [
    'Mezarcı küreğini artık kapının önünde tutuyor.',
    'Köyün yarısı artık sabahları kapıyı açmaya korkuyor.',
    'Taziyeler kısa, şüpheler uzun.',
    'Çan yine çaldı. Kimse sayıyı tutmak istemiyor.',
    'Meydandaki boşluklar artık gözden kaçmıyor.',
    'Her sabah biraz daha az kahvaltı tabağı kuruluyor.',
    'Seri katil işini aksatmıyor; köy de saymayı bıraktı.',
  ],
  'death.coda.late': [
    'Köyde artık sayılacak kadar az kişi kaldı: {alivew}.',
    'Geriye kalanlar birbirinin gözünün içine bakıyor; bu iş bugün bitmeli.',
    'Mezarlık meydandan kalabalık. Bu masalın sonu yakın.',
    'Kalanlar el ele tutuşmuyor artık; ellerini görebilecekleri yerde tutuyorlar.',
    'Çanı çalacak kimse kalmadı; çan da sustu.',
    '{Alivew} kişi kaldı, {alivew} ayrı şüphe.',
  ],
  // Rolü açık ölü (gece ölümü ya da avcı oku). Rol etiketine yalnızca burada değinilir.
  'death.role.koylu': [
    'Sade bir köylüydü; tarlasını sürer, kimseye bulaşmazdı.',
    'Hiçbir sırrı yoktu; yalnızca iyi bir komşuydu.',
    'Gizli bir gücü yoktu ama koca bir yüreği vardı.',
    'Bir köylüydü. Bahçesindeki domatesler sahipsiz kaldı.',
  ],
  'death.role.doktor': [
    'Köyün doktoruydu. Bundan sonra yaralar kendi kendine iyileşmeyi öğrenmeli.',
    'Doktor gitti; çantası kapının yanında, açılmayı bekliyor.',
    'Herkesi korumaya çalışan doktor, kendini koruyamadı.',
  ],
  'death.role.kahin': [
    'Kahin buymuş! Kristal küresi masada, hâlâ bir şeyler söylemeye çalışıyor.',
    'Köyün kahini gitti; geleceği artık kimse önceden göremeyecek.',
    'Kahinmiş. Bildiklerini yanında mı götürdü, yoksa birine fısıldadı mı?',
  ],
  'death.role.gozcu': [
    'Köyün gözcüsüydü; o pencereden artık kimse bakmayacak.',
    'Gözcü gitti. Geceleri perdelerin ardını izleyen gözler bir çift eksildi.',
  ],
  'death.role.cadi': [
    'Cadıymış! Kazanı hâlâ ocakta, içinde ne kaynadığını kimse bilmiyor.',
    'Köyün cadısı gitti; kavanozlarla dolu rafları tozlanmaya başladı.',
  ],
  'death.role.avci': [
    'Bir avcıydı; sadağı hâlâ duvarda asılı.',
    'Avcıymış! Ve avcılar son sözü kendileri söyler.',
  ],
  'death.role.muhtar': [
    'Köyün muhtarıydı. Mühür sahipsiz kaldı, meydan bir sesini kaybetti.',
    'Muhtar gitti; bundan sonra meydanda her oy tek sayılacak.',
  ],
  'death.role.soytari': [
    'Soytarıymış! Asılmayı ne çok istiyordu oysa; bu son şakayı hiç beklemiyordu.',
    'Köyün soytarısı gitti; çıngıraklı şapkası kapının arkasında sessiz.',
  ],
  'death.role.vampir': [
    'Ve işte sürpriz: bir vampirmiş! Köy bu sabah hem yas tutuyor hem bayram ediyor.',
    'Vampirmiş! Pelerinini dolaba asıp yıllardır komşu rolü yapıyormuş.',
    'Bir vampir eksildi. Gece bu kez kendi çocuklarından birini aldı.',
  ],
  'death.role.iftiraci': [
    'İftiracıymış! Kimin hakkında hangi yalanı fısıldadığını artık mezar taşına yazmak gerek.',
    'İftiracıymış. Dilinin acısı sonunda kendine döndü.',
  ],

  // ---------------- SABAH: KİMSE ÖLMEDİ ----------------
  // Kural: kurtarılma ile saldırı olmaması aynı sözle anlatılır; ne "biri kurtardı" ne "kimse gelmedi" denir.
  'safe.early': [
    'Horoz öttü, kapılar birer birer açıldı. Yoklama tam: bu gece kimse eksilmedi.',
    'Sabah güneşi bütün pencereleri tek tek saydı. Hiçbiri karanlık kalmamıştı.',
    'Köy uyandı, esnedi, gerindi ve şaşkınlıkla herkesin yerinde olduğunu gördü.',
    'Bu sabah çan kederle değil, sevinçle çaldı. Kimse ölmemişti.',
    'Gece boyunca köpekler havladı, kapılar gıcırdadı ama sabah herkes kahvaltı masasındaydı.',
    'Güneş doğdu, kuşlar öttü ve inanılmaz bir şey oldu: hiçbir şey olmadı.',
    'Şans mı, kader mi, başka bir şey mi? Kimse bilmiyor; ama herkes hayatta.',
  ],
  'safe.mid': [
    'Köy nefesini tutarak uyandı ve bıraktı: bu gece kimse eksilmedi.',
    'Kapılar açıldı, başlar sayıldı, bir daha sayıldı. Doğru: herkes burada.',
    'Bu sabah mezarcı boşuna erken kalktı.',
    'Gece bu kez eli boş döndü. Ya da öyle görünüyor.',
    'Sabah sessizdi; ama bu kez iyi bir sessizlik.',
    'Gece uzun sürdü ama kimseyi götürmedi. Köy bu küçük ikramiyeyi minnetle kabul etti.',
  ],
  'safe.late': [
    'Bu kadar az kişi kalmışken kimsenin ölmemesi neredeyse tuhaf. Köy şüpheyle sevindi.',
    'Son kalanların hepsi kapılarından çıktı. Birbirlerine sarılmadılar ama başlarıyla selamlaştılar.',
    'Bir gece daha atlatıldı; sevinmek için bile fazla yorgunlar.',
    'Gece bu kez kimseyi almadı. Belki oyun oynuyor, belki nefesleniyor.',
    'Köyde hâlâ {alivew} kişi var. Bu sabah bunun ne kadar değerli olduğunu herkes biliyor.',
    'Son kalanlar sabaha sağ salim çıktı. Kimse "neden" diye sormadı; sormaya korktular.',
  ],
  'safe.streak': [
    'Üst üste {streakw} gecedir kimse ölmüyor. Köy bu sessizlikten hoşlanmakla korkmak arasında gidip geliyor.',
    'Yine sessiz bir gece! Mezarcı başka bir iş aramayı düşünmeye başladı.',
    'Bu sessizlik fazla uzadı. Ninelerin dediği gibi: durgun suyun dibi derin olur.',
    'Gecelerdir kimse eksilmiyor. Ya köy şanslı, ya karanlık sabırlı.',
    'Sessiz gecelerin ardı ardına gelmesi, bazılarının uykusunu kaçırmaya başladı.',
  ],

  // ---------------- GÜNDÜZ BAŞI ----------------
  'day.early': [
    'Köy meydanda toplandı. Ellerde çay bardakları, dillerde sorular.',
    'Ateşin başında herkes yerini aldı. İlk kim konuşacak diye göz göze gelmemeye çalışıyorlar.',
    'Meydanda tartışma başladı. Bazıları çok konuşuyor, bazıları fazla susuyor.',
    'Güneş tepeye tırmanırken köy de kendi tepesine çıktı: kimden şüpheleniyoruz?',
    'Herkes yerini aldı. Bugünün sorusu basit, cevabı değil.',
    'Ahali meydanda; kimi yemin ediyor, kimi tırnaklarını yiyor.',
  ],
  'day.mid': [
    'Meydandaki halka her gün biraz daha daralıyor. Bugün de birileri kendini savunmak zorunda kalacak.',
    'Gün ortası, sıcak, sinirler gergin. Meydanda parmaklar havada.',
    'Dünkü kararların gölgesi meydanın taşlarına düşmüş. Bugün daha dikkatli olmak gerek.',
    'Söz sırası kimsede değil, herkes aynı anda konuşuyor. Meydan arı kovanı gibi.',
    'Kuşkular dolu bir çuval gibi ortaya döküldü. Herkes kendi payını almaya hazır.',
    'Köyün içinde bir katil var ve şu an büyük ihtimalle meydanda, herkes gibi başını sallıyor.',
  ],
  'day.late': [
    'Meydanda o kadar az kişi kaldı ki herkes herkesin nefesini duyuyor. Bugünkü karar belki de son karar.',
    'Kalanlar ateşin etrafında daire oldu. Artık saklanacak kalabalık yok.',
    'Bugün yanılmanın bedeli çok ağır. Herkes bunu biliyor, kimse yüksek sesle söylemiyor.',
    '{Alivew} kişi, {alivew} hikâye. Hangisi yalan?',
    'Meydandaki taşlar bile sessiz. Herkes son hamleyi bekliyor.',
    'Ateş çıtırdıyor ama kimse ısınmıyor. Bugün her şey bir oya bakıyor.',
  ],
  'day.afterSafe': [
    'Herkes sağ ama kimse rahat değil. Meydan kuşkuyla toplandı.',
    'Kimse ölmedi diye kimse masum olmadı. Tartışma başladı.',
    'Gece kimseyi almadı; bugün köy kendi kararını verecek.',
    'Sağ salim bir sabahın ardından tartışma eskisinden de hararetli.',
  ],

  // ---------------- MEYDAN KARARI ----------------
  'hanged.gallows': [
    'Meydandaki darağacı bugün boş kalmadı: {a}, {nw} oyla son basamakları çıktı.',
    'Köy elini kaldırdı, tam {nw} el. Darağacının halatı gerildi ve {a|gen} hikâyesi orada bitti.',
    '{a} son sözlerini söylemeye çalıştı ama meydanın uğultusu buna izin vermedi. Darağacı gıcırdadı ve sustu.',
    'Darağacının tahtaları gıcırdadı. {a}, {nw} komşusunun kararıyla meydanın ortasında son kez göğe baktı.',
    'İlmik hazırdı, kalabalık hazırdı; {a} hazır değildi. Ama {nw} oy, hazır olup olmadığını sormadı.',
    'Çan bir kez çaldı. {a} darağacına yürürken kimseye bakmadı; kimse de ona bakamadı.',
    'Yaşlı meşenin altındaki darağacında {a} için çan son kez çaldı. Sonra yalnızca rüzgâr.',
    '{Nw} parmak {a|acc} gösterdi. Darağacı, köyün en sessiz tanığı, bir kez daha işini yaptı.',
    'Halat çekildi, kuzgunlar havalandı. {a} artık köyün hikâyesinde bir dipnot.',
    '{a} darağacının basamaklarında durdu, belki bir şaka bekledi. Gelmedi.',
  ],
  'hanged.exile': [
    '{a} meşalelerin ışığında köy kapısına kadar yürütüldü. Kapı arkasından kapandı; bir daha onu gören olmadı.',
    '{Nw} oy tek bir yön gösterdi: köyün dışını. {a} sırtında bir bohçayla tozlu yola sürüldü.',
    'Köy {a|acc} sürgüne gönderdi. Orman kıyısında bir an döndü, sonra karanlık onu yuttu.',
    'Ahali {a|acc} köy kapısına kadar geçirdi, ama uğurlamak için değil. Kapı gıcırtıyla kapandı.',
    '{a|dat} bir somun ekmek, bir matara su verildi ve köyden sürüldü. Yol uzun, orman karanlıktı.',
    '{a} meşaleler eşliğinde köyden kovuldu. Tepenin ardında kaybolmadan önce bir kez el salladı; belki veda, belki tehdit.',
    'Köy kapısının menteşeleri yıllardır böyle gıcırdamamıştı. {a} öbür yanda kaldı; köy, sürgünün adını bir daha anmamaya yemin etti.',
    'Sürgün kararı {nw} oyla çıktı. {a} arkasına bakmadan yürüdü; köpekler bile peşinden havlamadı.',
    '{a|gen} pılı pırtısı bir eşeğe yüklendi ve ikisi birlikte köyden sürüldü. Eşek geri döndü, {a} dönmedi.',
    'Meşaleler köy kapısında bir duvar ördü. {a} o duvarın öbür yanında kaldı; bir daha onu gören olmadı.',
  ],
  'hanged.cellar': [
    '{a} köyün eski turşu mahzenine kapatıldı. Anahtar kuyuya atıldı; kimse yerini hatırlamak istemiyor.',
    'Ahali {a|acc} merdivenlerden aşağı, mahzenin serin karanlığına indirdi. Ağır kapı kapandı, kilit üç kez döndü.',
    '{Nw} oyla karar çıktı: mahzen. {a|gen} sesi bir süre tahta kapının ardından geldi, sonra kesildi.',
    '{a|dat} bir mum ve bir battaniye verildi, sonra mahzenin kapısı kilitlendi. Mum sabaha kadar yanmadı.',
    'Mahzenin demir sürgüsü çekildi. {a} artık turşu küpleri ve örümceklerle aynı kaderi paylaşıyor.',
    '{a} kilitli bir kapının ardında. Köy anahtarı kimsenin bulamayacağı bir yere sakladı ve konuyu kapattı.',
    'Köy {a|acc} mahzene kapattı. Kimse ne kadar süreliğine diye sormadı.',
    'Mahzenin kapısı {a|gen} arkasından gümbürtüyle kapandı. Toprağın altından bir süre tıkırtılar geldi.',
    '{a} zindanın soğuk taşlarına oturdu. Yukarıda {nw} kişi, kilidin sağlam olduğundan emin olmak için iki kez yokladı.',
  ],
  'hanged.close': [
    'Karar kıl payı çıktı; tek bir oy her şeyi değiştirebilirdi.',
    'Oylar başa baş gitti. Kaybeden taraf hâlâ homurdanıyor.',
    'Sandık son ana kadar kararsızdı. Köy de.',
    'Bir oy farkla… Köyde birileri bu gece o oyu düşünerek uyuyacak.',
  ],
  'hanged.landslide': [
    'Tek bir itiraz bile çıkmadı. Köy bu kez tek ses oldu.',
    'Bütün eller aynı anda kalktı. Böyle bir birlik köyde en son bir düğünde görülmüştü.',
    'Kimse karşı çıkmadı; belki de karşı çıkmaya korktu.',
  ],
  'hanged.coda.early': [
    'Köy ilk kez birini yargıladı; ellerin hâlâ titrediği belli.',
    'Meydan dağıldı ama kimse eve gitmek istemedi.',
    'Bu karar doğru muydu? Köy cevabı yakında öğrenecek.',
    'Bazıları rahatladı, bazıları yüzünü çevirdi.',
  ],
  'hanged.coda.mid': [
    'Bir kişi daha eksildi. Bakalım doğru kişi miydi.',
    'Meydandaki halka biraz daha daraldı.',
    'Kararı verenler birbirine bakmamaya özen gösterdi.',
    'Köy adalet istedi; aldığı şeyin adını henüz kimse bilmiyor.',
  ],
  'hanged.coda.late': [
    'Artık her oy bir kader. Bu kader de yazıldı.',
    'Bu kadar az kişi kalmışken yanılmak lüks değil, felaket.',
    '{Alivew} kişi kaldı. Her biri bir sonraki adın kendi adı olmamasını diliyor.',
    'Köyün kaderi artık bir avuç insanın elinde.',
  ],
  'hanged.role.vampir': [
    'Ve işte: bir vampir! Köy bu kez doğru kapıyı çaldı.',
    'Pelerin düştü, gerçek yüz ortaya çıktı. Bir vampir eksildi!',
    'Vampirmiş! Meydanda alkışlar koptu, sarımsaklar havaya atıldı.',
    'Köyün kuşkusu boşa çıkmadı: bir gece yaratığı yakalandı.',
    'Bir vampir! Demek o solgun yüz uykusuzluktan değilmiş.',
  ],
  'hanged.role.iftiraci': [
    'İftiracı çıktı! Kimin hakkında hangi yalanı fısıldadığını artık kimse öğrenemeyecek.',
    'Bir iftiracı! Dilinden çıkan her söz şimdi yeniden tartılıyor.',
    'İftiracıymış. Vampir değil ama vampirlerin en iyi dostu.',
  ],
  'hanged.role.koylu': [
    'Ama o sade bir köylüydü. Köy bu gece vicdanıyla baş başa.',
    'Köylüymüş… Masum bir komşu daha. Asıl katil bir yerde gülümsüyor.',
    'Kartı ortaya çıktığında meydanda derin bir sessizlik oldu: köylü.',
    'Masummuş. Köy bir kez daha kendi ayağına sıktı.',
    'Köylüymüş. Ahali özür dilemek için ağzını açtı ama söyleyecek söz bulamadı.',
  ],
  'hanged.role.doktor': [
    'Eyvah: köyün doktoruymuş! Bundan sonra yaralara kim bakacak?',
    'Doktormuş… Köy kendi şifacısını kendi eliyle gönderdi.',
    'Doktor gitti. Gece yaratıkları bu habere çok sevinecek.',
  ],
  'hanged.role.kahin': [
    'Kahinmiş! Kristal küresiyle bildiği her şey onunla birlikte gitti.',
    'Köy kahinini gönderdi. Geleceği görebilen tek göz kapandı.',
    'Kahin! Belki söylemek istediği bir şey vardı; artık asla bilinmeyecek.',
  ],
  'hanged.role.gozcu': [
    'Gözcüymüş! Geceleri pencereleri izleyen o dikkatli göz artık yok.',
    'Köy gözcüsünü kaybetti. Karanlıkta kimin nereye girdiğini artık kim görecek?',
  ],
  'hanged.role.cadi': [
    'Cadıymış! Ama kötü cadı değil, köyün cadısı. Fark edildiğinde iş işten geçmişti.',
    'Cadı gitti; raflarındaki kavanozlarda kim bilir neler kaldı.',
  ],
  'hanged.role.avci': [
    'Avcıymış! Ve avcılar sessiz gitmez.',
    'Bir avcı! Herkes eğilsin; son ok hâlâ yayda.',
  ],
  'hanged.role.muhtar': [
    'Muhtarmış! Köy kendi muhtarını kendi oyuyla gönderdi; demokrasi bazen böyledir.',
    'Köyün muhtarı gitti. Mühür sahipsiz, sandık öksüz.',
  ],
  'hanged.role.soytari': [
    'Ve kahkaha! Soytarıymış. Tam da istediği buydu.',
    'Soytarı son anda göz kırptı: köy, onun en büyük şakasına alet olmuştu.',
    'Soytarıymış! Bütün oyun boyunca bunun için uğraşmış; köy de ona yardım etti.',
    'Çıngıraklı şapka yere düştü ve meydanda bir kahkaha yankılandı: Soytarı kazanmıştı.',
  ],
  'hanged.streakInnocent': [
    'Üst üste {streakw} masum. Köyün terazisi iyice şaştı.',
    'Yine bir masum! Gece yaratıkları artık hiçbir şey yapmasa da olur; köy işi kendisi görüyor.',
    'Bir masum daha. Köy, düşmanının işini kendi eliyle yapmaya devam ediyor.',
  ],
  // Soytarı asılınca meslekli göz kırpması (rol her zaman açıktır).
  'job.soytari': [
    'Köyün {ajobs} bütün bu zaman boyunca bir soytarıymış; {aplace} bile kıs kıs gülüyor.',
    'Meğer {ajob} kılığındaki soytarı, en büyük numarasını en sona saklamış.',
  ],

  // ---------------- KİMSE GİTMEDİ ----------------
  'nohang.tie': [
    'Oylar {list} arasında bölündü; terazi bir türlü bir yana yatmadı. Köy bugün kimseden vazgeçmedi.',
    '{list} arasında kalan köy sonunda yazı tura atmayı bile düşündü. Atmadı. Kimse gitmedi.',
    'Eşitlik! {list} rahat bir nefes aldı; köy ise kafasını kaşıdı.',
    'Meydan {list} arasında ikiye bölündü ve iki yarım, bir karar etmedi.',
  ],
  'nohang.tieAnon': [
    'Oylar eşitlendi; meydan bir süre birbirine bakıp dağıldı.',
    'Terazinin iki kefesi de aynı ağırlıktaydı. Köy bugün eli boş döndü.',
    'Sandıktan iki eşit yığın çıktı. Köy ikiye bölündü, karar sıfıra.',
    'Oylar iki yana eşit dağıldı; köyün terazisi bugün kararsız kaldı.',
    'Eşit oylar, eşit inat. Kimse bir adım geri atmadı.',
    'İki taraf da sandığı kendi lehine saydı; sonuç berabere.',
  ],
  // Sebebi ne olursa olsun kimsenin gitmediği günler (beraberlik, oy yok, uyku) için yedek havuz.
  'nohang.any': [
    'Bugün meydandan kimse gönderilmedi. Herkes evine, kuşkularıyla birlikte döndü.',
    'Güneş battı, karar çıkmadı. Köy bu akşam kalabalık ama huzursuz.',
    'Kimse gitmedi; ama herkes, kimin gitmesi gerektiğini düşünerek uyuyacak.',
    'Meydan dağıldı. Kararsızlığın sesi kapı gıcırtılarından bile yüksek.',
    'Bugünkü toplantı ortak bir sonuca varamadı; yarın yine buradayız.',
    'Köy bugün kimseyi seçmedi. Gece yaratığı ise seçimini çoktan yaptı.',
    'Herkes sağ salim evine döndü. Bu cümlenin ne kadar doğru kalacağını gece belirleyecek.',
    'Meydan boşaldı ama tartışma bitmedi; kapı aralarında hâlâ sürüyor.',
  ],
  'nohang.novote': [
    'Sandık boş kaldı. Herkes birinin ilk adımı atmasını bekledi; kimse atmadı.',
    'Bugün meydanda çok konuşuldu ama tek bir el bile kalkmadı.',
    'Köy bugün kimseyi işaret etmedi. Ya çok emindiler, ya hiç emin değildiler.',
    'Oy sandığına bir serçe kondu, o kadar. Başka kimse yaklaşmadı.',
    'Kimse parmağını kaldırmadı. Belki korkudan, belki tembellikten.',
    'Bütün gün tartışıldı, sonunda kimse kimseye oy vermedi. Köy siyaseti böyledir.',
  ],
  'nohang.coda.early': [
    'Vakit var, diyorlar. Umarım haklıdırlar.',
    'Karar yarına kaldı.',
    'İlk günlerde temkin, iyi bir huydur. Genellikle.',
  ],
  'nohang.coda.mid': [
    'Kararsızlık da bir karardır; genelde kötüsü.',
    'Gece yine kapıda.',
    'Katil bu kararsızlığı not etti.',
  ],
  'nohang.coda.late': [
    'Ama zaman tükeniyor ve köy bunu biliyor.',
    'Bir gün daha boşa gitti, oysa günler sayılı.',
    'Bu kadar az kişiyle her boş gün, gece yaratığına bir hediye.',
  ],

  // ---------------- HIZLI UYU ----------------
  'sleep.any': [
    'Köy oy birliğiyle esnedi ve yatağa gitti. Bugün kimse yargılanmadı.',
    'Tartışmaya kimsenin hâli yoktu. Herkes "Hızlı Uyu" dedi, meydan bir anda boşaldı.',
    'Bugün köyde nadir bir uyum vardı: herkes uyumak istiyordu.',
    'Ahali tek ağızdan "yarın bakarız" dedi ve evine dağıldı.',
    'Oy birliği sağlandı: yorgan kazandı.',
    'Kimse kimseyi suçlamadı; bütün köy aynı anda yastığa döndü.',
  ],
  'sleep.coda.early': [
    'Daha ilk günler; köy acele etmemeyi seçti.',
    'Belki de akıllıca. Ya da değil.',
    'Uykuda herkes hemfikir; başka hiçbir şeyde değil.',
  ],
  'sleep.coda.mid': [
    'Gece yaratığı bu nezaketi unutmayacaktır.',
    'Uyuyan köyün kapısı, uyanık olanlara açıktır.',
    'Bazıları gerçekten uykulu, bazıları yalnızca öyle görünüyordu.',
  ],
  'sleep.coda.late': [
    'Bu kadar az kişi kalmışken uyumak cesaret mi, çaresizlik mi? Yakında belli olur.',
    'Herkes uyumayı seçti. Bu durumda uyku, en riskli oyundu.',
    'Son kalanlar gözlerini kapadı. Hepsi açacak mı, o ayrı mesele.',
  ],
  'sleep.streak': [
    'Yine mi uyku? Köy artık horlayarak savaşıyor.',
    'Üst üste {streakw} gün kimse yargılanmadı. Bu köy uykuyu gerçekten çok seviyor.',
    'Meydan yine erkenden boşaldı. Sandık tozlanmaya başladı.',
  ],

  // ---------------- AVCI ----------------
  'hunter.any': [
    '{a} yere düşerken yayını sıkıca kavradı. Bir avcı sessiz gitmez; son ok kime?',
    'Herkes şaşkın: {a} bir avcıymış! Son nefesinde yayını gerdi, gözlerini kıstı…',
    '{a|gen} sadağında tek bir ok kaldı. Meydanda herkes bir adım geri çekildi.',
    'Gözlerini kapamadan önce {a}, köyü son bir kez süzdü. Ok yaydaydı.',
    'Avcı yıkıldı ama yayı hâlâ elinde. {a|gen} son atışını herkes yüreği ağzında bekliyor.',
    'Meğer {a} bir avcıymış. Ve avcılar, ne olursa olsun, son sözü kendileri söyler.',
  ],
  // Meydan kararıyla sürülen ya da mahzene kapatılan avcı "yere düşmez": sahneye uygun satırlar.
  'hunter.exile': [
    'Köy kapısına varmadan {a} durdu ve yayını omzundan indirdi. Meğer bir avcıymış; giderken son bir ok bırakacak.',
    '{a} sürgün yoluna çıkmadan önce sadağına uzandı. Bir avcı köyden eli boş ayrılmaz.',
    'Meşalelerin ışığında {a|gen} yayı parladı. Sürgün edilen bir avcıymış ve son oku hâlâ elinde.',
  ],
  'hunter.cellar': [
    'Mahzenin kapısı kapanmadan {a} yayını gerdi. Meğer bir avcıymış; son ok kime?',
    '{a} merdivenlerin başında durdu ve sadağından tek bir ok çekti. Bir avcı, kilit altına sessizce girmez.',
    'Kilit dönmeden önce {a|gen} elinde bir yay belirdi. Meğer köyün avcısıymış!',
  ],
  'hunter.coda': [
    'Bu ok, oyunun gidişini değiştirebilir.',
    'Herkes aynı anda masum görünmeye çalışıyor.',
    'Meydanda kimse kıpırdamıyor; kıpırdayan hedef olur.',
  ],
  'shot.any': [
    'Ok ıslık çalarak meydanı geçti ve {a|gen} şapkasını değil, kendisini buldu.',
    '{b|gen} son oku havada bir yay çizdi ve {a|dat} saplandı. Avcının eli titrememişti.',
    'Yay gerildi, ok fırladı. {a} ne olduğunu anlamadan yere yığıldı.',
    '{b} son okunu {a|dat} ayırmıştı. Ok tam hedefine gitti.',
    'Bir vınlama, bir sessizlik… {b|gen} oku {a|acc} buldu.',
    '{b} son bir hamleyle yayını gerdi. Meydandakiler eğildi; {a} eğilmeye fırsat bulamadı.',
    'Avcının oku rüzgârı yararak {a|gen} kapısına kadar gitti. Ve geri dönmedi.',
  ],
  'shot.anon': [
    'Son ok ıslık çalarak meydanı geçti ve {a|acc} buldu.',
    'Yay gerildi, ok fırladı. {a} ne olduğunu anlamadan yere yığıldı.',
    'Bir vınlama, bir sessizlik… Avcının oku {a|acc} seçmişti.',
  ],
  'nohunt.any': [
    '{a|gen} yayı gerildi ama ok yaydan çıkmadı. Avcı gözlerini kimseyi vurmadan kapadı.',
    '{a} son anda vazgeçti; belki kimseden emin değildi, belki kimseye kıyamadı.',
    'Ok yerde kaldı. {a} son anda kimseyi seçmedi.',
    'Avcının eli titredi, ok toprağa saplandı. Meydanda herkes derin bir nefes aldı.',
    '{a} yayı bıraktı ve gülümsedi. Kimse ne demek istediğini anlamadı.',
    'Herkes eğildi, kimse vurulmadı. Avcı son okunu sadağında bırakarak gitti.',
  ],

  // ---------------- AYRILAN ----------------
  'left.any': [
    '{a} pılını pırtısını topladı ve köyden ayrıldı. Ardından bakan olmadı; herkes kendi derdinde.',
    '{a} bir çay demlemeye gitti ve bir daha dönmedi.',
    'Kapı çarptı, {a} gitti. Köy bir an durdu, sonra kaldığı yerden devam etti.',
    '{a} bu masala daha fazla dayanamadı ve sessizce köyden çekildi.',
    'Bir gün herkes gibi {a|da} gitti; yalnızca biraz erken.',
    '{a|gen} evinin ışıkları bir anda söndü. Kimse veda edemedi.',
    '{a} bohçasını kaptığı gibi köyün dışındaki yola koyuldu. Toz bulutu bile arkasında beklemedi.',
  ],
  'left.role': [
    'Giderken düşürdüğü kartta "{Role}" yazıyordu.',
    'Ardında bıraktığı kart herkesin merakını giderdi: {Role}.',
  ],
  'left.role.vampir': [
    'Giden bir vampirmiş! Köy, kaçağın ardından rahat bir nefes aldı.',
    'Kartı yere düştü: Vampir. Gece yaratığı köyü kendi isteğiyle terk etti.',
  ],

  // ---------------- ZAFER ----------------
  'win.koylu': [
    'Son vampir de düştü. Köyün çanları bu kez neşeyle çaldı; pencereler açıldı, perdeler havalandı.',
    'Köy karanlıkla savaştı ve kazandı. Bu gece herkes kapısını açık bırakarak uyuyacak. Belki.',
    'Sarımsak çelenkleri indirildi, yerine bayram fenerleri asıldı. Vampirler artık yalnızca masallarda.',
    'Ahali meydanda halay çekti, nineler kurabiye dağıttı. Köy kurtuldu!',
    'Güneş bu sabah biraz daha parlak doğdu. Köyde artık hiçbir gölge saklanmıyor.',
    'Kayıplar unutulmayacak ama köy ayakta. Ve ayakta kalan, hikâyeyi anlatır.',
  ],
  'win.vampir': [
    'Köyün son ışığı da söndü. Artık her gece vampirlerin gecesi.',
    'Vampirler pelerinlerini savurdu: köy artık onların.',
    'Sabah oldu ama kimse kapısını açmadı. Köy, gölgelerin yeni sahiplerine teslim oldu.',
    'Son komşular kapılarını kilitledi ama kilitler artık kimseyi durdurmuyor. Vampirler kazandı.',
    'Çan kulesine bir yarasa kondu ve orada kaldı. Köyün yeni sahibi oydu.',
    'Meydandaki ateş söndü, yerine soğuk bir ay ışığı yayıldı. Bu köyde gece artık hiç bitmeyecek.',
  ],
  'win.soytari': [
    'Soytarı son kahkahasını attı ve köy, bu oyunun baştan beri onun oyunu olduğunu anladı.',
    'Çıngıraklar çaldı, şapka havaya uçtu: Soytarı kazandı! Köy hâlâ ne olduğunu anlamaya çalışıyor.',
    'Gece yaratıkları bile şaşkın: bu oyunu ne köy kazandı ne onlar. En son gülen Soytarı oldu.',
    'Köy bir suçlu aradı, bir soytarı buldu. Soytarı da tam bunu istiyordu.',
    'Soytarının son numarası: köyü, onu kendi eliyle göndermeye ikna etmek. Alkışlar!',
  ],
  'win.coda.koylu': [
    'Hayatta kalan {alivew} kişi bu hikâyeyi torunlarına anlatacak.',
    'Köyde {alivew} kişi kaldı; her biri bu sabahı ömrü boyunca hatırlayacak.',
  ],
  'win.coda.vampir': [
    'Geriye kalan {alivew} kişinin ne yapacağını artık gece belirleyecek.',
    'Köyde hâlâ {alivew} kişi nefes alıyor, ama artık kimse kapısını açmıyor.',
  ],
};

// ---------------- KÖY GÜNLÜĞÜ (oyun sonu özeti) ----------------
const EPI = {
  'epi.first.vampir': [
    'Karanlığın ilk kurbanı {a} oldu.',
    'İlk giden, bir gece kapısı sessizce açılan {a} oldu.',
  ],
  'epi.first.zehir': [
    'İlk ölüm bir zehir şişesinden geldi: {a}.',
  ],
  'epi.first.hanged': [
    'İlk giden, meydanın kararıyla gönderilen {a} oldu.',
  ],
  'epi.first.left': [
    'İlk ayrılan, köyü kendi isteğiyle terk eden {a} oldu.',
  ],
  'epi.first.shot': [
    'İlk giden, avcının okuyla düşen {a} oldu.',
  ],
  'epi.elims.none': [
    'Meydan bir kez bile ortak bir karara varamadı.',
    'Köy bütün oyun boyunca kimseyi meydandan göndermedi.',
  ],
  'epi.elims.some': [
    'Meydanın kararıyla {list} köyden gönderildi.',
    'Köy meydanı {list} hakkında karar verdi.',
  ],
  'epi.elims.allEvil': ['Köyün her kararı isabetliydi.'],
  'epi.elims.noEvil': ['Ne yazık ki hiçbiri kötü taraftan değildi.'],
  'epi.elims.someEvil': ['İçlerinden {nw} kişi gerçekten kötü taraftandı.'],
  'epi.quiet': ['{Nw} gece boyunca kimse ölmedi; köy o geceleri uzun süre şükranla andı.'],
  'epi.nohang': ['Meydan {nw} kez karar veremeden dağıldı.'],
  'epi.poison': ['{list} bir zehir şişesine yenik düştü.'],
  'epi.shot': ['Avcı {b}, son okunu {a|dat} gönderdi.', 'Avcının son oku {a|acc} buldu.'],
  'epi.left': ['{list} hikâye bitmeden köyü terk etti.'],
  'epi.mask': [
    'Perde kapandığında maskeler düştü: kötü tarafta {list} vardı.',
    'Son sayfada gerçek ortaya çıktı: karanlığın elleri {list} imiş.',
  ],
  'epi.mask.one': [
    'Perde kapandığında maske düştü: gece yaratığı {list|cop}.',
    'Son sayfada gerçek ortaya çıktı: bütün bu kötülüğün ardında {list} vardı.',
  ],
  'epi.iftiraci': [
    'İftiracı ise {aj} çıktı: köyün {ajobs} olarak her kapıya uğrayıp her kulağa bir yalan fısıldamış.',
  ],
  'epi.end.koylu': [
    'Sonunda köy karanlığı yendi.',
    'Sonunda köyde tek bir gece yaratığı bile kalmadı ve köy kurtuldu.',
  ],
  'epi.end.vampir': [
    'Sonunda köy, gecenin yeni sahiplerine kaldı.',
    'Sonunda karşı koyacak kimse kalmadı ve köy gece yaratıklarına teslim oldu.',
  ],
  'epi.end.soytari': [
    'Sonunda meydan {a|acc} gönderdi ve {a} bir soytarı çıktı; oyunun tek kazananı oydu.',
  ],
  'epi.survivors': [
    'Hayatta kalanlar: {list}.',
    'Bu hikâyeyi anlatmak için geriye {list} kaldı.',
  ],
};

module.exports = { T, EPI };
