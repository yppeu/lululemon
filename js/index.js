// 스와이퍼
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper2", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper3", {
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper4", {
  watchSlidesProgress: true,
  slidesPerView: 3,
});
