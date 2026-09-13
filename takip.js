/* Saturday Online — dönüşüm olayı takibi
   Meta Pixel + Google Ads. Olay delegasyonuyla çalışır, tek yerden yönetilir. */
(function () {
  'use strict';

  var GADS = 'AW-18195117473';

  function meta(ev, data) {
    if (typeof fbq === 'function') { try { fbq('track', ev, data || {}); } catch (e) {} }
  }
  function gads(label) {
    if (typeof gtag === 'function') {
      try { gtag('event', 'conversion', { send_to: GADS }); } catch (e) {}
      try { gtag('event', label, { event_category: 'donusum' }); } catch (e) {}
    }
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';

    // Randevu — Calendly
    if (href.indexOf('calendly.com') !== -1) {
      meta('Schedule', { content_name: 'Ucretsiz Strateji Gorusmesi', source_page: location.pathname });
      gads('randevu_tikla');
      return;
    }
    // WhatsApp
    if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp.com') !== -1) {
      meta('Contact', { contact_method: 'whatsapp', source_page: location.pathname });
      gads('whatsapp_tikla');
      return;
    }
    // Telefon
    if (href.indexOf('tel:') === 0) {
      meta('Contact', { contact_method: 'telefon', source_page: location.pathname });
      gads('telefon_tikla');
      return;
    }
    // E-posta
    if (href.indexOf('mailto:') === 0) {
      meta('Contact', { contact_method: 'eposta', source_page: location.pathname });
      gads('eposta_tikla');
      return;
    }
    // Veri indirme (harita CSV/JSON)
    if (/\.(csv|json)$/i.test(href) && a.hasAttribute('download')) {
      meta('ViewContent', { content_name: 'veri-indirme', content_type: 'dataset' });
      gads('veri_indir');
    }
  }, true);

  // Blog yazısında ciddi okuma — ilgi sinyali (retarget kitlesi için)
  if (/^\/blog\/.+\.html$/.test(location.pathname)) {
    var tetiklendi = false;
    window.addEventListener('scroll', function () {
      if (tetiklendi) return;
      var h = document.documentElement;
      var oran = (h.scrollTop + window.innerHeight) / h.scrollHeight;
      if (oran > 0.7) {
        tetiklendi = true;
        meta('ViewContent', { content_type: 'blog', content_name: document.title.slice(0, 80) });
      }
    }, { passive: true });
  }
})();
