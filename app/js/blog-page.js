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
$(".card__slider-inner").slick({
  dots: false,
  arrow: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: false,
  prevArrow: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1401,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
