var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
 centerSlide :'true',
 fade:'true',
 grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    450:{
     slidesPerView:1,
    },
    500:{
      slidesPerView:2,
    },
    670:{
      slidesPerView:3, 
    },
    950:{
      slidesPerView:4,
    }
  }
});