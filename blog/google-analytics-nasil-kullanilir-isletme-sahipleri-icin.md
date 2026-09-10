# Google Analytics Nasıl Kullanılır? İşletme Sahipleri İçin

> Google Analytics 4 nasıl kullanılır? Kurulum, bakılacak 6 rapor, dönüşüm hedefi tanımlama, trafik kaynağı okuma ve işletme sahipleri için pratik GA4 rehberi.

Google Analytics kurulu ama kimse açmıyor — bu, karşılaştığımız en yaygın durum. Panel yüzlerce metrik gösteriyor, hangisinin işinize dokunduğu belli değil. Bu rehber, GA4'ü bir analist gibi değil, **bir işletme sahibi gibi** kullanmanız için yazıldı: hangi 6 rapora bakılır, dönüşüm nasıl tanımlanır ve hangi sayılar kararı değiştirir.

## Neden Kimse Analytics'e Bakmıyor?

Sorun ilgisizlik değil, **çeviri eksikliği**. GA4 size "etkileşim oranı %54,2" der; siz "bu ay neden daha az telefon geldi" sorusunun cevabını arıyorsunuz. İkisi arasındaki köprü kurulmadığında panel açılmaz.

**İlgili:** [İzmir dijital pazarlama hizmetlerimiz](/izmir-dijital-pazarlama-ajansi/)

Çözüm basit: metriklerin tamamını öğrenmeye çalışmayın. İşletmeniz için anlam taşıyan üç soruyu belirleyin ve yalnızca onları cevaplayan raporlara bakın.

**Temel prensip:** Analytics bir rapor aracı değil, **karar aracıdır**. Baktığınız sayı bir kararı değiştirmiyorsa, o sayıya bakmayı bırakın. Ayda 20 dakika, doğru üç rapora bakmak; haftada bir saat rastgele gezinmekten çok daha değerlidir.

## Bilmeniz Gereken 4 Temel Kavram

GA4 (Google Analytics 4), eski Universal Analytics'ten farklı bir mantıkla çalışır: sayfa görüntülemeleri yerine **olaylar** üzerine kuruludur. Kullanıcının yaptığı her şey — sayfa açma, kaydırma, tıklama, form gönderme — bir olaydır.

KavramNe anlama gelir

KullanıcıSiteyi ziyaret eden ayrı kişi sayısı (yaklaşık)
OturumTek bir ziyaret bloğu. Aynı kişi bir ayda 5 oturum açabilir
Olay (event)Kullanıcının yaptığı tek bir eylem: tıklama, kaydırma, form gönderimi
Dönüşüm (key event)Sizin "değerli" olarak işaretlediğiniz olay: teklif formu, telefon tıklaması, satış

Bu dört kavramı ayırt edebiliyorsanız GA4'ün %80'ini anlamış olursunuz. Gerisi detaydır.

## Kurulum: 20 Dakikada Doğru Temel

Kurulum yanlışsa sonrasındaki her rapor yanlıştır. Sırayla ilerleyin:

1
Mülk (property) oluşturun

analytics.google.com üzerinden hesap ve mülk açın. Zaman diliminizi **İstanbul**, para biriminizi **TRY** seçin. Bu ayarı sonradan değiştirmek geçmiş veriyi düzeltmez — baştan doğru yapın.

2
Ölçüm kodunu siteye ekleyin

Size verilen ölçüm kimliğini (G- ile başlar) sitenizin tüm sayfalarına ekleyin. WordPress'te bir eklenti, Shopify ve Wix'te hazır bir alan, özel yazılmış sitede ise <head> bölümü kullanılır. Google Tag Manager kullanıyorsanız kodu doğrudan siteye değil, GTM üzerinden yükleyin.

3
Kurulumu gerçek zamanlı doğrulayın

Kodu ekledikten sonra siteyi telefonunuzdan açın ve GA4'te **Raporlar → Gerçek zamanlı** ekranına bakın. Kendinizi göremiyorsanız kod çalışmıyor. Bu adımı atlamak, aylar sonra "veri yokmuş" demenin en yaygın sebebi.

4
Search Console ve Google Ads'i bağlayın

**Yönetici → Ürün bağlantıları** bölümünden Search Console'u bağlayın; hangi arama sorgusuyla gelindiğini GA4 içinde görürsünüz. Reklam veriyorsanız Google Ads bağlantısı da zorunlu — aksi halde reklamın gerçek dönüşümünü ölçemezsiniz.

5
İç trafiği ve spam'i filtreleyin

Kendi ekibinizin ziyaretleri veriyi şişirir. **Yönetici → Veri akışları → Etiket ayarları** içinden ofis IP'nizi iç trafik olarak tanımlayın ve filtreyi etkinleştirin. Küçük siteler için bu fark ciddi olabilir.

## En Önemli Adım: Dönüşümleri Tanımlamak

Kurulum sonrası GA4 size trafik gösterir ama **sonuç** göstermez. Sonucu siz tanımlamalısınız. Hizmet veren bir işletme için tipik dönüşümler:

- Form gönderimi — teklif, iletişim veya randevu formu

- Telefon tıklaması — mobilde numaraya dokunma

- WhatsApp tıklaması — sohbet başlatma butonu

- Yol tarifi tıklaması — fiziksel mekânı olan işletmeler için

- Fiyat listesi indirme veya katalog görüntüleme

Bu olayları GA4'te işaretlemek için: **Yönetici → Etkinlikler** listesinde ilgili olayı bulun ve "anahtar etkinlik olarak işaretle" seçeneğini açın. Olay listede yoksa, GTM ile veya "Etkinlik oluştur" özelliğiyle tanımlanması gerekir.

**En pahalı hata:** Dönüşüm tanımlamadan aylarca veri toplamak. Dönüşüm yoksa GA4 hangi kanalın gerçekten müşteri getirdiğini söyleyemez; elinizde yalnızca ziyaretçi sayısı kalır. Ziyaretçi sayısı kimseye fatura kesmez.

## Bakmanız Gereken 6 Rapor

GA4'ün onlarca ekranı var. İşletme sahibi olarak yalnızca şunlara ihtiyacınız var:

### 1. Trafik edinme (Acquisition)

**Raporlar → Edinme → Trafik edinme.** Ziyaretçilerin nereden geldiğini gösterir. Kanalları şöyle okuyun:

KanalNe demekNasıl yorumlanır

Organic SearchGoogle aramasından geldiSEO çalışıyor mu göstergesi
Paid SearchGoogle reklamından geldiReklam bütçesinin karşılığı
Paid SocialMeta/Instagram reklamındanSosyal reklam performansı
Organic SocialÜcretsiz sosyal paylaşımdanİçerik stratejisinin getirisi
DirectAdresi doğrudan yazdı veya kaynak belirsizMarka bilinirliği + etiketsiz linkler
ReferralBaşka bir siteden link ileİş birlikleri ve dizin kayıtları

Bu tabloyu **dönüşüm sayısıyla birlikte** okuyun. 5.000 ziyaretçi getiren ama tek form üretmeyen bir kanal, 300 ziyaretçiyle 12 form getiren kanaldan değersizdir.

### 2. Sayfalar ve ekranlar

**Raporlar → Etkileşim → Sayfalar ve ekranlar.** Hangi sayfaların gerçekten okunduğunu gösterir. İki şeye bakın: en çok görüntülenen 10 sayfa ve bunların ortalama etkileşim süresi. Çok trafik alıp süresi 10 saniyenin altında kalan sayfalar, ya yanlış kitleyi çekiyor ya da beklentiyi karşılamıyor.

### 3. Açılış sayfaları

**Raporlar → Etkileşim → Açılış sayfası.** Ziyaretçinin siteye girdiği ilk sayfayı gösterir. Bu rapor, hangi içeriğin yeni kişi getirdiğini anlamanın en net yolu. Blog yazılarınızdan biri sürekli listenin başındaysa, o konuda daha fazla içerik üretmek net bir fırsattır.

### 4. Dönüşümler (Anahtar etkinlikler)

**Raporlar → Etkileşim → Etkinlikler** veya doğrudan "Anahtar etkinlikler" görünümü. Aylık form/telefon/WhatsApp sayınızı burada takip edin. Bu, panelinizdeki tek "para" metriğidir.

### 5. Demografi ve teknoloji

**Raporlar → Kullanıcı → Kullanıcı özellikleri** ve **Teknoloji**. İki pratik çıktısı var: hangi şehirlerden geldiğiniz (reklam hedeflemesi için) ve mobil/masaüstü oranı. Türkiye'de çoğu yerel işletmede trafiğin %75–90'ı mobildir; site mobilde yavaşsa geri kalan her çalışma boşa gider.

### 6. Keşfet (Explore) — tek bir özel rapor

Kalıcı olarak kuracağınız tek özel rapor şu olsun: **kanal bazında dönüşüm oranı**. Keşfet bölümünde boş bir keşif açın, satırlara "Oturum varsayılan kanal grubu", metriklere "Oturum" ve "Anahtar etkinlikler" ekleyin. Artık her ayın tek ekranlık karnesi hazır.

## Aylık 20 Dakikalık Rutin

Ayın ilk iş günü, şu sırayla ilerleyin:

- Toplam dönüşüm: Geçen aya göre arttı mı, azaldı mı? (5 dk)

- Kanal karnesi: Dönüşümlerin hangi kanaldan geldiğini kontrol edin. Bir kanal çöktüyse sebebini arayın. (5 dk)

- Açılış sayfaları: Yeni trafiği hangi içerik getirdi? (5 dk)

- Tek karar yazın: Bu verilere dayanarak bu ay ne yapacaksınız? Bütçeyi hangi kanala kaydıracaksınız, hangi konuda içerik üreteceksiniz? (5 dk)

Dördüncü adım en önemlisi. Karar üretmeyen bir raporlama rutini, kısa sürede terk edilir.

Sağlık sinyali
Dönüşüm sayısı
Trafikten önce buna bakın

Verim sinyali
Dönüşüm oranı
Kanal bazında karşılaştırın

Büyüme sinyali
Yeni kullanıcı
Kitle genişliyor mu

## Sık Yapılan 6 Hata

- Dönüşüm tanımlamamak. En yaygın ve en maliyetli hata. Panel çalışıyor sanılır, aslında hiçbir iş sorusuna cevap vermez.

- Kampanya linklerini etiketlemeden kullanmak. Instagram biyografisine veya e-postaya çıplak link koyarsanız trafik "Direct" olarak düşer ve kaynağını asla bilemezsiniz. UTM parametresi kullanın.

- Hemen çıkma oranına takılmak. GA4'te bu metrik eski anlamını taşımıyor. Bunun yerine etkileşim oranına ve etkileşim süresine bakın.

- Günlük veriye bakıp panik yapmak. Küçük sitelerde günlük dalgalanma gürültüdür. Karşılaştırma birimi ay veya en az 28 gün olmalı.

- Kullanıcı ile oturumu karıştırmak. "1.000 ziyaretçi" rakamının kullanıcı mı oturum mu olduğunu bilmeden yapılan karşılaştırmalar yanlış sonuç verir.

- Veri saklama süresini varsayılanda bırakmak. Yönetici → Veri ayarları → Veri saklama bölümünden süreyi en uzun seçeneğe (14 ay) çekin. Aksi halde yıllık karşılaştırma yapamazsınız.

## GA4 Tek Başına Yeterli mi?

Hayır — ama merkez odur. Yanına iki araç daha koyun:

🔍
Search Console
Hangi kelimede kaçıncı sıradasınız, hangi sorguda gösterilip tıklanmıyorsunuz — GA4 bunu söylemez.

📍
Google Business Profile
Yerel işletmelerde aramaların önemli kısmı siteye hiç girmeden aramaya/yol tarifine dönüşür. O veri burada.

🎥
Isı haritası araçları
Ziyaretçinin sayfada nerede durduğunu ve nereye tıkladığını görmek, sayıların "neden"ini açıklar.

📞
Kendi kayıtlarınız
Gelen aramaların kaçı satışa döndü? GA4 bunu bilemez; sizin CRM'iniz veya not defteriniz bilir.

## Gizlilik ve Onay Yönetimi

Kişisel veri mevzuatı ve tarayıcıların çerez kısıtlamaları, ölçümü doğrudan etkiliyor. Sitenizde bir çerez onay çözümü kullanıyorsanız, GA4'ün onay durumuna göre çalışacak şekilde yapılandırıldığından emin olun. Onay verilmediğinde veri toplanmaması normaldir — bu, panelde bir miktar eksiklik anlamına gelir ve GA4 bu boşluğu modelleme ile doldurur.

Pratik sonuç: GA4 rakamları **mutlak gerçek değil, tutarlı bir gösterge** olarak okunmalıdır. Reklam panelindeki dönüşüm sayısı ile GA4'teki sayının birebir eşleşmemesi bir hata değil, farklı sayma yöntemlerinin sonucudur. Önemli olan trendin yönüdür.

## Sonuç

Google Analytics'i kullanmak, tüm metrikleri öğrenmek değil; **işinize dair üç soruyu her ay aynı yerden cevaplamak** demek. Dönüşümlerinizi tanımlayın, altı rapora bakın, ayda 20 dakika ayırın ve her seferinde tek bir karar çıkarın.

Bugün yapabileceğiniz en değerli iş: GA4'ü açın ve dönüşümlerinizin tanımlı olup olmadığını kontrol edin. Tanımlı değilse, panelinizde şu an iş değeri taşıyan hiçbir veri yok.

### Analitik kurulumunuzu birlikte kontrol edelim

GA4, Search Console ve dönüşüm takibinizi 30 dakikada gözden geçirelim.

[Ücretsiz Randevu Al →](https://calendly.com/saturdayonlinesolutions/30min)

---

Kaynak: https://saturdayonline.co/blog/google-analytics-nasil-kullanilir-isletme-sahipleri-icin.html
Saturday Online — İzmir dijital pazarlama ajansı
