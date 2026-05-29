document.querySelectorAll('.gallery-card').forEach(product => {

  const gallery = product.querySelector('.product-gallery');
  const dots = product.querySelectorAll('.dot');



  // DOTS ACTIVE
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



  // DESKTOP WHEEL SCROLL
  gallery.addEventListener('wheel', (e) => {

    e.preventDefault();

    gallery.scrollLeft += e.deltaY;

  });

});
