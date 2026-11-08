// Whop checkout links (checkout configurations that redirect to upsell.html / thanks.html after payment). Leave "bundle" empty to hide the Review Booster add-on on the sales page, and "exit" empty to turn off the $7 exit offer.
window.CHECKOUT = {
  core: 'https://whop.com/checkout/ch_RARpgfC8nsfGYwT/',
  exit: 'https://whop.com/checkout/ch_tGGGs6nm0gp1lv6/',
  bundle: '',
  booster: 'https://whop.com/checkout/ch_ABWbiTRHMm2caWy/',
  pro: 'https://whop.com/checkout/ch_U1wZaLlLwu8DXvn/'
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-checkout]').forEach(a => {
    const url = window.CHECKOUT[a.dataset.checkout];
    if (url) a.href = url;
  });
});
