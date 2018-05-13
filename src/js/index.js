import toggle from './toggle';
import mapRussia from './mapRussia';
import hover from './hover';

const headerToggleBlock = ['cityBlock-wrapper', 'cityActive', 'cityActiveWrapper'];

/* toggle header */
toggle('cityActive', headerToggleBlock);
toggle('cityClose', headerToggleBlock);

/* toggle academy popup */
const academyToggleBlock = ['academyPopup', 'academyPopupBtn', 'academySliderDots', 'academySlider'];
toggle('academyPopupBtn', academyToggleBlock);
toggle('academyPopupClose', academyToggleBlock);


/* slick sliders */

$(document).ready(function () {
  $('.banner-sliders').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    dotsClass: 'slider-dots'
  });
});
$(document).ready(function () {
  $('.academy-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnDotsHover: true,
    dotsClass: 'slider-dots is__alt academySlider-dots'
  });
});