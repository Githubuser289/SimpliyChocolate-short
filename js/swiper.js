var swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper1 .swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 18, // Ajustați spațiul dintre elemente la 18px
  breakpoints: {
    767: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // If we need pagination
  pagination: {
    el: '.swiper2 .swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
