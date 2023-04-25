$(".article__slider").slick({
  dots: false,
  arrow: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: `<button type="button" class="slick-next"><img src="images/blog-page/right-arr.svg" alt="Стрелка вправо"></button>`,
  prevArrow: `<button type="button" class="slick-prev"><img src="images/blog-page/left-arr.svg" alt="Стрелка влево"></button>`,
});
// $(".card__slider-inner").slick({
//   dots: false,
//   arrow: true,
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   // waitForAnimate: false,
//   draggable: true,
//   swipeToSlide: true,
//   swipe: true,
//   touchMove: true,
//   nextArrow: false,
//   prevArrow: false,
//   // autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1401,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//       },
//     },
//     {
//       breakpoint: 1025,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 577,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: true,
//       },
//     },
//   ],
// });

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper2 = new Swiper(".card__slider-inner", {
  autoplay: {
    delay: 4000,
  },
  loop: true,

  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },

  breakpoints: {
    320: {
      spaceBetween: 10,
    },
    375: {
      spaceBetween: 10,
    },
    576: {
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      grabCursor: true,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
  },
});
