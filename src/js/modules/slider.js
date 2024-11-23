import 'slick-carousel';
import $ from 'jquery';

const goodsOption = {

  arrows: true,
  prevArrow: '<button type="button" class="slider_btn slider_btn--prev"><img class="slider_btn-img slider_btn-img--prev" src="./img/arrow-right.png"></button>',
  nextArrow: '<button type="button" class="slider_btn  slider_btn--next"><img class="slider_btn-img slider_btn-img--next" src="./img/arrow-right.png"></button>',
  centerMode: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  infinite: true,
  fade: true
}

$('.js-car-slider').slick(goodsOption);
