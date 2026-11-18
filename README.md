# Vampir Köylü

Arkadaşlarla tarayıcıdan oynanan, gerçek zamanlı Vampir Köylü oyunu (5–20 kişi, telefonda da rahat).
Her oyuncunun hesabı, profili ve istatistikleri var; köy, kamp ateşinin etrafındaki evleriyle tam ekran
bir 3B dünya olarak açılır. Gündüz tartışıp oylarla vampirleri bulmaya, gece hayatta kalmaya çalışırsınız.

- **Sunucu:** Node.js + Express + Socket.IO. Oyun kuralları, roller ve sayaçlar sunucuda; roller asla
  başka oyuncunun tarayıcısına gitmez.
- **Arayüz:** derleme gerektirmeyen düz HTML/CSS/JS (ES modülleri). Tam ekran oyun alanı, sayfa hiç
  kaymaz; sohbet telefonda alttan açılan bir şerit/sayfa, geniş ekranda sağda sabit panel.
- **3B köy:** three.js ile yapılmış `public/build/world.js` (derlenmiş dosya depoda durur). WebGL olmayan
  ya da çok zayıf cihazlarda arayüz kendiliğinden hafif 2B kuşbakışı köye geçer; oyun yine tam oynanır.
- **Ses:** müzik, ortam sesi ve efektler (`public/audio.js`). Giriş ekranında, menüde ve oyunun üst
  çubuğunda hoparlör düğmesi var: sessize alma ve Müzik / Efektler / Ortam sesi kaydırıcıları tek dokunuşla açılır.
- **Botlar:** oda sahibi lobide "Bot ekle" ile bot oyuncu ekleyebilir; tek başına da tam bir oyun denenebilir.
  Bot içeren oyunlar da insan oyuncuların istatistiklerine ve liderlik tablosuna sayılır. Lobide ve oyun sonunda botlar şablonlu kısa muhabbet yapar (selam, karşılama, gg; `lib/banter.js`, model çağrısı yok). Botlar normal "çıkar" ile odadan atılır.
- **Performans:** Ayarlar'da grafik kalitesi (açıklamalı kademeler) ve "FPS göster" seçeneği var; açılınca
  oyunda köşede kare hızı, kare süresi ve kalite kademesi görünür.

## Roller

| Rol | Takım | Ne yapar |
| --- | --- | --- |
| Vampir | Vampirler | Her gece diğer vampirlerle bir kurban seçer. Sayıları diğerlerine eşitlenince kazanırlar. |
| İftiracı | Vampirler | Vampirlerin gizli yardımcısı (7+ oyuncuda). Gece birine iftira atar: kahin ona bakarsa VAMPİR görür. Son vampir ölürse vampire dönüşür. |
| Doktor | Köylüler | Her gece birini korur (kendini de); korunan kişi o gece ölmez. |
| Kahin | Köylüler | Her gece birine bakar, sabah onun vampir olup olmadığını gizlice öğrenir. |
| Gözcü | Köylüler | Her gece bir evi gözetler; sabah o eve kimlerin girdiğini öğrenir. |
| Cadı | Köylüler | Vampirlerin hedefini görür. Oyunda bir kez hayat iksiri, bir kez zehir kullanır. |
| Avcı | Köylüler | Ölünce 20 saniye içinde birini vurup yanında götürür. |
| Muhtar | Köylüler | Gündüz oyu iki sayılır (herkes görür). |
| Soytarı | Tek başına | Gündüz asılırsa tek başına kazanır. |
| Köylü | Köylüler | Tartışır, oy verir, vampirleri bulmaya çalışır. |

Vampir sayısı oyuncu sayısına göre belirlenir (5–9: 1, 10–14: 2, 15+: 3). Oda sahibi özel rolleri oda
kurarken ya da lobide açıp kapatır. Özel roller Doktor, Kahin, Gözcü, Cadı, Avcı, Muhtar, Soytarı
sırasıyla eklenir; her oyunda en az bir sade köylü kalır. Her oyuncuya ayrıca sadece hikâye için bir köy
işi (terzi, fırıncı…) verilir; işin rolle hiçbir ilgisi yoktur.

## Bilgisayarda çalıştırma

1. [Node.js](https://nodejs.org) 18 veya üstü kurulu olmalı.
2. Bu klasörde:

   ```bash
   npm install
   npm start
   ```

3. Tarayıcıda `http://localhost:3000` adresini aç, bir hesap oluştur ve oda kur.

Sunucu açılınca terminalde `Aynı Wi-Fi'dakiler: http://192.168.x.x:3000` gibi bir satır yazar; lobideki
davet linki de bu adresle oluşur, aynı ağdaki arkadaşların linke dokunarak katılabilir. Tek başına denemek
için farklı tarayıcı profillerinde (ya da gizli pencerelerde) 5 ayrı hesap açman yeterli.

3B köyün kaynak kodu `client/world/` altındadır; değiştirirsen `npm run build` ile
`public/build/world.js` yeniden üretilir. Arayüzün geri kalanı derleme istemez.

## Ortam değişkenleri

| Değişken | Ne işe yarar |
| --- | --- |
| `PORT` | Sunucunun portu (varsayılan `3000`). |
| `DATA_DIR` | Hesapların tutulduğu JSON dosyasının klasörü (varsayılan `./data`). `DATABASE_URL` yoksa kullanılır. |
| `DATABASE_URL` | PostgreSQL adresi. Verilirse hesaplar ve istatistikler veritabanında tutulur, tablolar açılışta kurulur. |
| `DATABASE_SSL` | `off`, `on` ya da `no-verify`. Boşsa adrese göre otomatik seçilir. |
| `CLIENT_ORIGIN` | Arayüz başka bir adresten (ör. Netlify) yayınlanıyorsa o adres(ler), virgülle ayrılarak. |
| `TRUST_PROXY` | Sunucu bir vekil arkasındaysa gerçek IP için açılır (Render'da otomatik). |

Açık odalar ve süren oyunlar bellekte tutulur; sunucu yeniden başlarsa odalar kapanır, hesaplar ve
istatistikler (JSON dosyası ya da veritabanı) kalır.

## Akıllı botlar (isteğe bağlı, Claude Haiku)

Sunucuda bir Anthropic API anahtarı varsa botlar rastgele değil, rollerine göre düşünerek oynar:
konuşur, soru sorar, adıyla seslenilince cevap verir, iyi bir argümanla ikna olup oyunu değiştirir,
kötü takımdaysa blöf yapar. Anahtar yoksa ya da API hata verir, gecikir veya bütçe biterse botlar
sessizce eski rastgele davranışa döner; oyun hiçbir zaman API'yi beklemez. Oda sahibi "Akıllı botlar"
ayarını kapatabilir. Açıkken o odanın sohbet mesajları ve oyuncu adları yapay zekâ hizmetine gönderilir
(lobi ve ayarlar bunu yazar). İstemler ve sohbet içeriği loglanmaz.

**Render'da açmak:** servis → **Environment** → `ANTHROPIC_API_KEY` = anahtarın (console.anthropic.com →
API Keys) → kaydet; servis yeniden başlar. Açılış logunda "Akıllı botlar: açık" yazar, `/healthz`
yanıtında `ai` alanı (yalnızca çağrı/token/maliyet sayıları) görünür.

**Maliyet:** 10 kişilik bir oyun (1 insan + 9 bot) ≈ 70–120 çağrı, yaklaşık **1–3 sent** (Haiku 5.5,
önbellekli sabit kurallar). Her oyunun sonunda logda gerçek token sayısı ve tahmini maliyet yazar.
Sınırlar varsayılan olarak: günde en fazla 3000 çağrı (tüm odalar; ≈ 30 oyun, günde en fazla ~1 dolar),
oyun başına 300, bot başına oyun başına 45 çağrı.

| Değişken | Varsayılan | Ne işe yarar |
| --- | --- | --- |
| `ANTHROPIC_API_KEY` | – | Akıllı botları açar (yalnızca sunucuda; istemciye gitmez). |
| `AI_BOTS` | – | `off` yazılırsa anahtar olsa da kapalı. |
| `AI_BOT_MODEL` | `claude-haiku-5-5` | Kullanılan model. |
| `AI_BOT_EFFORT` | `medium` | `low`, `medium` ya da `high`. |
| `BANTER_PEOPLE` | – | Özel hesapların (sahip, takılınacak arkadaş) JSON ile değiştirilmesi (`lib/banter.js`). Sahip hesap oda ayarlarında "Bot zekâsı" olarak Normal (Haiku), Karma (önemli roller Sonnet) ya da Güçlü (hepsi Sonnet, pahalı) seçebilir. |
| `AI_MAX_TOKENS` | `1024` | Çağrı başına en fazla çıktı (düşünme dahil). |
| `AI_DAILY_CALL_LIMIT` | `3000` | Tüm sunucu için günlük (UTC) çağrı sınırı. |
| `AI_GAME_CALL_LIMIT` | `300` | Bir oyundaki en fazla çağrı. |
| `AI_BOT_CALL_LIMIT` | `45` | Bir botun bir oyundaki en fazla çağrısı. |
| `AI_CONCURRENCY` | `6` | Aynı anda en fazla istek. |
| `AI_TIMEOUT_MS` | `8000` | Gündüz turlarının zaman aşımı (gece kararları seçim süresine göre daha kısa). |
| `AI_REVIEW` | – | `off` yazılırsa biten oyunların otomatik incelemesi kapalı (anahtar yoksa da kapalı). |
| `AI_REVIEW_MODEL` | `claude-sonnet-5-5` | İnceleyen model (oyun başına ≈ $0.13). |
| `AI_REVIEW_DAILY_LIMIT` | `30` | Günlük (UTC) inceleme sayısı. |
| `AI_ANALYZE` | – | `off` yazılırsa oyun geçmişi çözümlemesi (sunucuda; `scripts/game-logs.js --analyze`) kapalı (anahtar yoksa da kapalı). |
| `AI_ANALYZE_MODEL` | `claude-sonnet-5-5` | Çözümleyen model. |
| `AI_ANALYZE_DAILY_LIMIT` | `20` | Günlük (UTC) çözümleme sayısı. |
| `AI_ANALYZE_EFFORT` | `medium` | `low` / `medium` / `high`. |
| `ADMIN_TOKEN` | – | `GET /api/admin/ai-reviews`, `GET /api/admin/game-logs` ve `POST /api/admin/game-logs/:id/analyze` için `Authorization: Bearer …` anahtarı; tanımsızsa bu adresler kapalıdır. |
| `GAME_LOGS` | – | `off` yazılırsa oyun geçmişleri saklanmaz (varsayılan: her oyunun geçmişi, sohbet dahil, saklanır). |

Akıllı botlu bir oyun bitince sunucu oyun kaydını daha güçlü bir modele inceletir ve bot hatalarını depoya yazar; geliştirici
`node scripts/ai-reviews.js` ile bunları okur (`REVIEW_URL` + `ADMIN_TOKEN`, `.env.local`). Ayrıntılar: `docs/AI-BOTS.md`.

Bitmiş (ya da herkes çıkınca yarıda kalmış) her oyunun tam geçmişi (sohbet, oylar, gece seçimleri, alıcıya özel sonuçlar, botların notları) sunucuda saklanır; `node scripts/game-logs.js`
onları okunur dökümlere çevirir, `--analyze` ile güçlü bir modele çözümlettirir. Ayrıntılar: `docs/GAME-LOGS.md`.

## İnternette yayınlama (farklı evlerden oynamak için)

Oyun, sürekli açık duran bir Node.js sunucusu ister: roller gizli tutulur, gece/gündüz sayaçları ve oylar
sunucuda hesaplanır. Bu yüzden **sadece Netlify ya da Firebase Hosting yetmez** (ikisi de yalnızca statik
dosya sunar, WebSocket sunucusu çalıştırmaz).

### Önerilen: Render (tek servis)

1. Projeyi GitHub'a yükle.
2. [render.com](https://render.com) → **New → Blueprint** → depoyu seç. `render.yaml` her şeyi ayarlar.
   (Elle kurmak istersen: **New → Web Service**, Build: `npm ci --omit=dev`, Start: `npm start`.)
3. **Hesaplar için veritabanı:** Render'ın ücretsiz planında disk kalıcı değildir; `DATABASE_URL` boş
   kalırsa hesaplar her yeniden başlatmada silinir. Ücretsiz bir PostgreSQL (ör. Neon ya da Render
   Postgres) açıp adresini `DATABASE_URL` olarak gir. Kalıcı disk bağladıysan `DATA_DIR` ile o klasörü de
   gösterebilirsin.
4. Birkaç dakika sonra `https://vampir-koylu.onrender.com` gibi bir adres verir. Davet linkleri de bu adresle oluşur.

Ücretsiz planda 15 dakika kimse bağlanmazsa sunucu uyur; ilk giren kişide açılış yaklaşık 1 dakika
sürer (arayüz bu sırada "Sunucuya ulaşılamadı, tekrar dene" ekranı gösterebilir). Sürekli açık olsun
istersen Render'ın en ucuz ücretli planı ya da Railway, Fly.io gibi bir servis kullanılabilir.

### İsteğe bağlı: arayüz Netlify'da, sunucu Render'da

1. Sunucuyu yukarıdaki gibi Render'a kur.
2. `public/config.js` içindeki `serverUrl` alanına Render adresini yaz.
3. Render'da `CLIENT_ORIGIN` ortam değişkenine Netlify adresini yaz (ör. `https://vampir-koylu.netlify.app`).
4. Netlify'da depoyu bağla; `netlify.toml` yayın klasörünü (`public`) zaten belirtir.

### Firebase neden kullanılmadı?

Firebase ile yapmak için oyun kurallarının Cloud Functions'a taşınması gerekir; aksi halde roller
veritabanında herkesin okuyabileceği yerde durur. Cloud Functions ücretli (Blaze) plan ister ve mevcut
kodun büyük kısmını yeniden yazmak demektir. Mevcut Socket.IO sunucusu bu iş için daha basit ve güvenli.

## Testler

```bash
npm test
```

Kural testleri (tüm roller), hesap/oturum testleri, iki depolama türü (JSON ve PostgreSQL, `pg-mem` ile)
ve gerçek sunucuyu sanal oyuncularla oynatan uçtan uca testler çalışır.

## Dosyalar

| Dosya | Görevi |
| --- | --- |
| `server.js` | Express + Socket.IO, odalar, REST hesap API'si, statik dosyalar, `/healthz` |
| `game.js` | Oyun kuralları: roller, gece/gündüz döngüsü, avcı, oylama, kazanma, sohbet kanalları |
| `lib/` | Hesaplar ve oturumlar, depolama (JSON / PostgreSQL), istatistikler, hikâye motoru |
| `docs/PROTOCOL.md` | Sunucu ile istemci arasındaki protokolün tam tarifi |
| `public/index.html` | Uygulama iskeleti: dünya katmanı, ekranlar, oyun arayüzü katmanları |
| `public/app.js` | Arayüzün giriş noktası: açılış, oturum, soket olayları, ekran geçişleri |
| `public/ui/` | Arayüz modülleri: giriş ve menü (`screens.js`), oda arayüzü (`room.js`), sohbet, duyurular, Köy Günlüğü, görünüm düzenleyici, oda ayarları, ikonlar |
| `public/ui/world-fallback.js` | 3B dünya açılamazsa kullanılan 2B köy (aynı API) |
| `public/ui/rules.js` | Kim kimi seçebilir: arayüz ve dünyaların ortak seçim kuralları |
| `public/style.css`, `public/game.css` | Tasarım belirteçleri, bileşenler, menü ve oyun arayüzü |
| `public/build/world.js` | Derlenmiş 3B köy (kaynağı `client/world/`) |
| `public/audio.js` | Ses motoru |
| `public/assets/` | Modeller, sesler, yazı tipleri (`assets/ui/fonts`, OFL lisanslı) ve emeği geçenler (`CREDITS.md`) |
| `public/config.js` | Sunucu ayrı bir adresteyse o adres |
| `render.yaml`, `netlify.toml` | Yayınlama ayarları |
