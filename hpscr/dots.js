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



  // SMART DESKTOP SCROLL
  gallery.addEventListener('wheel', (e) => {

    const maxScroll =
      gallery.scrollWidth - gallery.clientWidth;

    const isScrollingRight = e.deltaY > 0;
    const isScrollingLeft = e.deltaY < 0;

    const atStart = gallery.scrollLeft <= 0;
    const atEnd = gallery.scrollLeft >= maxScroll - 1;



    // якщо можна гортати галерею
    if (
      (isScrollingRight && !atEnd) ||
      (isScrollingLeft && !atStart)
    ) {

      e.preventDefault();

      gallery.scrollLeft += e.deltaY;

    }

  }, { passive: false });

});
