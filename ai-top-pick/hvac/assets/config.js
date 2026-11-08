// Whop checkout links. Leave "bundle" empty to hide the Review Booster add-on on the sales page.
window.CHECKOUT = {
  core: 'https://whop.com/checkout/plan_de88tKGK5SJQM',
  bundle: '',
  booster: 'https://whop.com/checkout/plan_sZ4DO20s1iBeu',
  pro: 'https://whop.com/checkout/plan_Cj9tyXZ54Xs76'
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-checkout]').forEach(a => {
    const url = window.CHECKOUT[a.dataset.checkout];
    if (url) a.href = url;
  });
});
