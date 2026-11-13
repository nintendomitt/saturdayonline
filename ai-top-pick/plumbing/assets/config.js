// Whop checkout links (checkout configurations that redirect to upsell.html / thanks.html after payment).
// bundle = kit + Review Booster, bundlePro = kit + Pro Toolkit, bundleAll = all three: the sales-page add-on boxes use them
// (leave them empty to hide the boxes). Leave "exit" empty to turn off the $19 exit offer.
window.CHECKOUT = {
  core: 'https://whop.com/checkout/ch_URfsXOGfr7Zii6T/',
  exit: 'https://whop.com/checkout/ch_ndOh7NIMUzDVaw0/',
  bundle: 'https://whop.com/checkout/ch_U5Gu1SSVRNA0I3t/',
  bundlePro: 'https://whop.com/checkout/ch_VpN8Ekg425yMFVI/',
  bundleAll: 'https://whop.com/checkout/ch_kPxhqolpOMBJ9hM/',
  booster: 'https://whop.com/checkout/ch_4rHUxUjtMFItZ8L/',
  pro: 'https://whop.com/checkout/ch_id7nCkzApB2wLPp/'
};

// Whop product and price IDs, sent with the sales page's view_content and add_to_cart events.
window.PRODUCTS = {
  core: { product_id: 'prod_87AAkbyOofk6K', variant_id: 'plan_INkQVu4UsY1PW' },
  booster: { product_id: 'prod_30wuXjWJhqEa8', variant_id: 'plan_t30ijVg9gKJHx' },
  pro: { product_id: 'prod_ooHuIeDilbFIs', variant_id: 'plan_9BUX7Nu1nQS2h' }
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
