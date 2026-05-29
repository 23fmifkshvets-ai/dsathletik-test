const promo = document.querySelector('.promo-overlay');
const closeBtn = document.querySelector('.promo-close');

closeBtn.addEventListener('click', () => {
  promo.style.display = 'none';
});
