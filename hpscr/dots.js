document.querySelectorAll('.gallery-card').forEach(product => {

  const gallery = product.querySelector('.product-gallery');
  const dots = product.querySelectorAll('.dot');



  // DOTS
  gallery.addEventListener('scroll', () => {

    const index = Math.round(
      gallery.scrollLeft / gallery.offsetWidth
    );

    dots.forEach(dot =>
      dot.classList.remove('active')
    );

    if (dots[index]) {
      dots[index].classList.add('active');
    }

  });



  // DESKTOP SCROLL
  gallery.addEventListener('wheel', (e) => {

    e.preventDefault();

    gallery.scrollLeft += e.deltaY;

  }, { passive: false });

});
