// Whop checkout links (checkout configurations that redirect to upsell.html / thanks.html after payment).
// bundle = kit + Review Booster, bundlePro = kit + Pro Toolkit, bundleAll = all three: the sales-page add-on boxes use them
// (leave them empty to hide the boxes). Leave "exit" empty to turn off the $19 exit offer.
window.CHECKOUT = {
  core: 'https://whop.com/checkout/ch_RARpgfC8nsfGYwT/',
  exit: 'https://whop.com/checkout/ch_tGGGs6nm0gp1lv6/',
  bundle: 'https://whop.com/checkout/ch_h69ZjSUjEQDnNef/',
  bundlePro: 'https://whop.com/checkout/ch_IVpnyEsMhWMRmuj/',
  bundleAll: 'https://whop.com/checkout/ch_TzIxRXs6KE7neuQ/',
  booster: 'https://whop.com/checkout/ch_ABWbiTRHMm2caWy/',
  pro: 'https://whop.com/checkout/ch_U1wZaLlLwu8DXvn/'
};

// Whop product and price IDs, sent with the sales page's view_content and add_to_cart events.
window.PRODUCTS = {
  core: { product_id: 'prod_Ae92O9aLThcbt', variant_id: 'plan_de88tKGK5SJQM' },
  booster: { product_id: 'prod_f1KdetHQ1FJ4t', variant_id: 'plan_sZ4DO20s1iBeu' },
  pro: { product_id: 'prod_VfaKwNInEKWbU', variant_id: 'plan_Cj9tyXZ54Xs76' }
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
