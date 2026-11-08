// Whop checkout links (checkout configurations that redirect to upsell.html / thanks.html after payment). Leave "bundle" empty to hide the Review Booster add-on on the sales page.
window.CHECKOUT = {
  core: 'https://whop.com/checkout/ch_RARpgfC8nsfGYwT/',
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
