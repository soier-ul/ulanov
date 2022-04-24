$(function () {
  const teamSwiper = new Swiper('.team__swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1000,
    simulateTouch: false,

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
    slidesPerView: 1,
    speed: 1000,
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

document.addEventListener('DOMContentLoaded', () => {
  let accordion = document.querySelectorAll('.accordion__btn');

  accordion.forEach(accordion => {
    accordion.addEventListener('click', (e) => {
      const active = document.querySelector('.accordion__btn--active');

      if (active && active !== accordion) {
        active.classList.toggle('accordion__btn--active');
        active.nextElementSibling.style.maxHeight = 0;
      }
      accordion.classList.toggle('accordion__btn--active');
      const accordionContent = accordion.nextElementSibling;

      if (accordion.classList.contains('accordion__btn--active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = 0;
      }
    })
  });
});