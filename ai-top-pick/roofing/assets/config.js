// Whop checkout links (checkout configurations that redirect to upsell.html / thanks.html after payment).
// bundle = kit + Review Booster, bundlePro = kit + Pro Toolkit, bundleAll = all three: the sales-page add-on boxes use them
// (leave them empty to hide the boxes). Leave "exit" empty to turn off the $19 exit offer.
window.CHECKOUT = {
  core: 'https://whop.com/checkout/ch_WSYN1XfRKPVlntR/',
  exit: 'https://whop.com/checkout/ch_g2zpt9TFeaqFNhY/',
  bundle: 'https://whop.com/checkout/ch_YoA9LeiCYRMWoS3/',
  bundlePro: 'https://whop.com/checkout/ch_Dt40AVnOZZ5Oet7/',
  bundleAll: 'https://whop.com/checkout/ch_fkPAO7Frg6MHQw7/',
  booster: 'https://whop.com/checkout/ch_CQPTmuJjAXToKq1/',
  pro: 'https://whop.com/checkout/ch_wmAlFtVPCVtOAvl/'
};

// Whop product and price IDs, sent with the sales page's view_content and add_to_cart events.
window.PRODUCTS = {
  core: { product_id: 'prod_lMz6EnKxykPVh', variant_id: 'plan_sK6fDWfwDYhWg' },
  booster: { product_id: 'prod_NfRk4REjKyUxG', variant_id: 'plan_TZc9BCdYXLLsJ' },
  pro: { product_id: 'prod_l1IVOMQfa5oXV', variant_id: 'plan_6SgiCa22tUn6K' }
};

// Launch price: $27 until the end of December 31, 2026 (US Eastern time). After that the sales page shows $47
// and the exit offer stops. The Whop prices themselves must also be changed that day.
window.LAUNCH = { ends: '2027-01-01T05:00:00Z', after: '$47' };

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-checkout]').forEach(a => {
    const url = window.CHECKOUT[a.dataset.checkout];
    if (url) a.href = url;
  });
});
