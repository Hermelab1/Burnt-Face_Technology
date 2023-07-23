var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    520:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },

    912:{
      slidesPerView: 2,
    },
    1280:{
      slidesPerView:3,
    }

  }
});