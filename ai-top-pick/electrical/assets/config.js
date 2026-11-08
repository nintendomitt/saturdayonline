// Whop checkout links (checkout configurations that redirect to upsell.html / thanks.html after payment).
// bundle = kit + Review Booster, bundlePro = kit + Pro Toolkit, bundleAll = all three: the sales-page add-on boxes use them
// (leave them empty to hide the boxes). Leave "exit" empty to turn off the $19 exit offer.
window.CHECKOUT = {
  core: 'https://whop.com/checkout/ch_og0x6B4N6fd0Mg4/',
  exit: 'https://whop.com/checkout/ch_1QUOKcfKHp2YSc8/',
  bundle: 'https://whop.com/checkout/ch_8c5vS6b7EPG3vEb/',
  bundlePro: 'https://whop.com/checkout/ch_GBxFIHnyEXVV1mG/',
  bundleAll: 'https://whop.com/checkout/ch_yV4DEWboqPXdlvK/',
  booster: 'https://whop.com/checkout/ch_trqOU7lN620Zkvb/',
  pro: 'https://whop.com/checkout/ch_SQ1UT3G8Wf6GjsB/'
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
