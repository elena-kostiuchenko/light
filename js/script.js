$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header,.header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".header__menu").click(function () {
    $(".header__burger, .header__menu").removeClass("active");
    $("body").removeClass("lock");
  });
  $(".project__img").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: true,
    responsive: [
      {
        breakpoint: 1115,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".rent__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  });
  $(".catolog__button1").click(function (event) {
    $(".catalog-robe,.catolog__button1").addClass("active");
    $(".catalog-compulite,.catolog__button2").removeClass("active");
  });
  $(".catolog__button2").click(function (event) {
    $(".catalog-compulite,.catolog__button2").addClass("active");
    $(".catalog-robe,.catolog__button1").removeClass("active");
  });
});
