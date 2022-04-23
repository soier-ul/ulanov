$(function () {

  const teamSwiper = new Swiper('.team__swiper', {
    slidesPerView: 4,
    spaceBetween: 30,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

});