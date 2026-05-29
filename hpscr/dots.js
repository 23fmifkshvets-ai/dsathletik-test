document.querySelectorAll('.gallery-card').forEach(product => {

  const gallery = product.querySelector('.product-gallery');
  const dots = product.querySelectorAll('.dot');



  // ACTIVE DOT
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



  // CLICK DOTS
  dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

      gallery.scrollTo({
        left: gallery.offsetWidth * index,
        behavior: 'smooth'
      });

    });

  });

});
