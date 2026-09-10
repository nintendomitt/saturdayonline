/* Saturday Online — WebMCP araç tanımları
   https://webmachinelearning.github.io/webmcp/
   Tarayıcı tabanlı ajanlara sitenin gerçek eylemlerini açar. */
(function () {
  if (!('modelContext' in navigator) ||
      typeof navigator.modelContext.provideContext !== 'function') return;

  var BLOG_INDEX = '/blog-index.json';
  var CALENDLY   = 'https://calendly.com/saturdayonlinesolutions/30min';

  var HIZMETLER = [
    { ad: 'Meta Reklam Yönetimi',   kapsam: 'Facebook ve Instagram kampanyaları, hedef kitle optimizasyonu, ROAS takibi', sayfa: '/meta-reklam-yonetimi/' },
    { ad: 'Google Ads Yönetimi',    kapsam: 'Arama, Display ve Shopping kampanyaları',                                     sayfa: '/google-ads-yonetimi/' },
    { ad: 'Sosyal Medya Yönetimi',  kapsam: 'İçerik takvimi, tasarım, topluluk yönetimi, aylık raporlama',                 sayfa: '/sosyal-medya-yonetimi/' },
    { ad: 'Pazarlama Otomasyonu',   kapsam: 'CRM entegrasyonu, lead nurturing, e-posta otomasyon akışları',                sayfa: '/pazarlama-otomasyonu/' }
  ];

  function ok(data) { return { content: [{ type: 'text', text: JSON.stringify(data, null, 1) }] }; }

  navigator.modelContext.provideContext({
    tools: [
      {
        name: 'hizmetleri_listele',
        description: 'Saturday Online\'ın sunduğu dijital pazarlama hizmetlerini, kapsamlarını ve detay sayfalarını döndürür.',
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
        async execute() {
          return ok({ ajans: 'Saturday Online', konum: 'İzmir, Türkiye', hizmetler: HIZMETLER });
        }
      },
      {
        name: 'blog_ara',
        description: 'Saturday Online blogundaki Türkçe dijital pazarlama rehberlerinde başlık ve anahtar kelimeye göre arama yapar.',
        inputSchema: {
          type: 'object',
          properties: {
            sorgu:    { type: 'string',  description: 'Aranacak kelime veya konu. Örn: "sosyal medya fiyat", "Meta reklam", "SEO"' },
            kategori: { type: 'string',  description: 'İsteğe bağlı kategori filtresi. Örn: "SEO", "Sosyal Medya", "E-Ticaret"' },
            limit:    { type: 'integer', description: 'Döndürülecek en fazla sonuç sayısı (varsayılan 10)', minimum: 1, maximum: 50 }
          },
          required: ['sorgu'],
          additionalProperties: false
        },
        async execute(args) {
          var r = await fetch(BLOG_INDEX, { cache: 'no-store' });
          if (!r.ok) return ok({ hata: 'Blog indeksi okunamadı', durum: r.status });
          var posts = (await r.json()).posts || [];
          var q = (args.sorgu || '').toLocaleLowerCase('tr');
          var kat = args.kategori ? args.kategori.toLocaleLowerCase('tr') : null;
          var hit = posts.filter(function (p) {
            var metin = ((p.title || '') + ' ' + (p.keyword || '') + ' ' + (p.category || '')).toLocaleLowerCase('tr');
            var katOk = !kat || (p.category || '').toLocaleLowerCase('tr').indexOf(kat) !== -1;
            return katOk && metin.indexOf(q) !== -1;
          }).slice(0, args.limit || 10).map(function (p) {
            return {
              baslik: p.title,
              kategori: p.category,
              tarih: p.date,
              url: 'https://saturdayonline.co' + (p.url || '/blog/' + p.slug + '.html')
            };
          });
          return ok({ sorgu: args.sorgu, bulunan: hit.length, toplam_yazi: posts.length, sonuclar: hit });
        }
      },
      {
        name: 'randevu_linki_al',
        description: 'Ücretsiz 30 dakikalık dijital pazarlama strateji görüşmesi için randevu linkini ve görüşme öncesi sorulacak nitelendirme sorularını döndürür. Randevuyu kendisi oluşturmaz, kullanıcı linkten seçer.',
        inputSchema: {
          type: 'object',
          properties: {
            sektor: { type: 'string', description: 'İsteğe bağlı. İşletmenin sektörü — görüşmenin odağını belirlemek için.' }
          },
          additionalProperties: false
        },
        async execute(args) {
          return ok({
            randevu_linki: CALENDLY,
            sure: '30 dakika',
            ucret: 'Ücretsiz',
            taahhut: 'Yok — görüşme sonunda çalışmak zorunda değilsiniz',
            sektor: args.sektor || null,
            gorusme_oncesi_sorular: [
              'İşletmeniz hangi sektörde? (E-ticaret / Restoran-Kafe / Klinik-Estetik / Hizmet / Diğer)',
              'Aylık dijital pazarlama bütçeniz ne kadar? (Yok / 1-5K TL / 5-15K TL / 15K+ TL)',
              'En büyük probleminiz ne? (Trafik yok / Trafik var satış yok / Rakipler önde / Nereden başlayacağımı bilmiyorum)'
            ],
            hazir_akis: 'https://saturdayonline.co/teklif.html',
            whatsapp: 'https://wa.me/905548847178'
          });
        }
      },
      {
        name: 'iletisim_bilgisi',
        description: 'Saturday Online\'ın iletişim bilgilerini, konumunu ve çalışma kapsamını döndürür.',
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
        async execute() {
          return ok({
            ad: 'Saturday Online',
            tanim: 'İzmir merkezli, performans odaklı dijital pazarlama ajansı',
            web: 'https://saturdayonline.co',
            eposta: 'saturdayonlinesolutions@gmail.com',
            whatsapp: 'https://wa.me/905548847178',
            telefon: '+905548847178',
            konum: 'İzmir, Türkiye',
            hizmet_alani: 'İzmir ve Türkiye geneli (uzaktan)',
            google_puani: '5.0 / 21 değerlendirme'
          });
        }
      }
    ]
  });
})();
