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
- **Ses:** müzik, ortam sesi ve efektler (`public/audio.js`).

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
