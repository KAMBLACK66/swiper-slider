const swiper = new Swiper('.swiper', {
  // Optional parameters
 /*  slidesPerView: 3,
  spaceBetween: 15,
  slidesPerGroupAuto: true, */
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  simulateTouch: true,
  allowTouchMove: true,
  updateOnWindowResize: true,
  autoplay: true,
  autoplay:{
    delay: 5000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  // type: 'progressbar'
  clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    /* el: '.swiper-scrollbar',
    draggable: true, */
  },
});