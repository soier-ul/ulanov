$(function () {
  const teamSwiper = new Swiper('.team__swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1000,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const reviewsSwiper = new Swiper('.reviews__swiper', {
    slidesPerView: 'auto',
    speed: 1000,
    centeredSlides: true,
    slideToClickedSlide: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  $('.rating').rateYo({
    rating: 5,
    readOnly: true,
    starWidth: '22px',
    ratedFill: '#f6d021',
    spacing: '9px',
    starSvg: '<svg><use xlink:href="images/sprite.svg#icon-star"></use></svg>'
  });
});