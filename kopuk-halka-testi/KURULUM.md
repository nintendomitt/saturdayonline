# Kopuk Halka Testi — Kurulum

Test çalışıyor ama iki şey eksik. İkisi de sizin yapmanız gereken adımlar.

---

## 1. Google Sheets bağlantısı (10 dakika)

Şu an e-posta toplanıyor ama hiçbir yere kaydedilmiyor. Bağlamak için:

**Adım 1.** Yeni bir Google Sheet açın, adını "Kopuk Halka Testi" koyun.

**Adım 2.** Uzantılar → Apps Script. Açılan editöre şunu yapıştırın:

```javascript
const BASLIKLAR = ['tarih','ad','eposta','isletme','kvkk_onay','sure_sn','cevaplanan',
  'atlanan','zayif_halka','genel_skor','skor_gorunurluk','skor_ilgi','skor_talep',
  'skor_donusum','skor_eldetutma','cevaplar','kaynak'];

function doPost(e) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sh.getLastRow() === 0) sh.appendRow(BASLIKLAR);
  const d = JSON.parse(e.postData.contents);
  sh.appendRow(BASLIKLAR.map(k => d[k] !== undefined ? d[k] : ''));
  return ContentService.createTextOutput('ok');
}
```

**Adım 3.** Dağıt → Yeni dağıtım → Tür: **Web uygulaması**
- Yürüten: **Ben**
- Erişimi olan: **Herkes**
- Dağıt → izin verin → çıkan URL'yi kopyalayın

**Adım 4.** `index.html` dosyasında şu satırı bulun:

```javascript
const SHEETS_URL = '';
```

Tırnakların arasına kopyaladığınız URL'yi yapıştırın. Bitti.

**Test:** Testi baştan çözün, Sheet'e satır düşüyor mu bakın.

---

## 2. KVKK Aydınlatma Metni — YAYINA ALMADAN ÖNCE ZORUNLU

`/kvkk-aydinlatma-metni.html` dosyası şu an **placeholder**. İçi doldurulmadan bu
sayfaya trafik göndermeyin.

E-posta adresi kişisel veridir. KVKK kapsamında aydınlatma yükümlülüğünüz var ve
metin olmadan veri toplamak ihlal sayılır. Ayrıca onay kutusundaki link boş bir
sayfaya gidiyor — hem hukuken hem güven açısından sorun.

Metinde bulunması gerekenler:
- Veri sorumlusunun kimliği (Saturday Online, adres, iletişim)
- Hangi veriler işleniyor (ad, e-posta, işletme adı, test cevapları)
- İşleme amacı (test sonucu gönderimi, pazarlama iletişimi)
- Hukuki sebep (açık rıza)
- Verilerin kimlerle paylaşıldığı (Google — Sheets/Analytics, Meta)
- Saklama süresi
- KVKK md. 11 hakları ve başvuru yöntemi

Mali müşaviriniz veya bir avukattan taslak alın. Hazır şablonları olduğu gibi
kullanmayın — veri sorumlusu bilgileri ve işleme amaçları size özel olmalı.

---

## 3. ManyChat bağlantısı

Plan: "sistem" yazana testi göndermek, takip şartıyla.

ManyChat akışında gönderilecek link:
```
https://saturdayonline.co/kopuk-halka-testi/?utm_source=manychat
```

`utm_source` parametresi Sheet'te `kaynak` sütununa düşüyor — ManyChat'ten gelenleri
organik trafikten ayırabilirsiniz.

---

## Ölçüm — nerede bırakıyorlar?

Sayfa her adımda olay gönderiyor. GA4 → Raporlar → Etkinlikler:

| Olay | Anlamı |
|---|---|
| `test_basladi` | Teste başlayan |
| `test_soru_goruntulendi` | Hangi soruyu kaç kişi gördü (`soru_no` parametresi) |
| `test_cevap` | Cevaplanan soru |
| `test_atla` | Atlanan soru — hangi soru rahatsız ediyor |
| `test_tamamlandi` | Son soruya ulaşan |
| `test_lead` | E-posta bırakan |
| `test_terk` | Yarıda bırakan (`son_adim` parametresi) |

**Huni:** `test_basladi` → `test_tamamlandi` → `test_lead`

`test_soru_goruntulendi` olaylarını `soru_no`'ya göre kırarsanız düşüşün hangi
soruda olduğunu tam görürsünüz. Çok atlanan veya çok terk edilen soru varsa
o soruyu değiştirin.

Meta tarafında aynı olaylar özel dönüşüm olarak tanımlanabilir; `test_lead`
standart `Lead` olayını da tetikliyor.

---

## Sayfa neden `noindex`?

Lead magnet sayfaları arama sonuçlarında çıkmamalı — trafiği siz yönlendireceksiniz
(ManyChat, Instagram bio, reklam). Ayrıca sitede zaten tarama bütçesi sıkıntısı var,
bu sayfa onu tüketmesin.
