import mytoggle from './toggle';
import mapRussia from './mapRussia';
import serviceHover from './hover';

/* service */
/* const hoverBlockNode = document.querySelectorAll('.priceList-item');
const serviceBlockNode = document.querySelectorAll('.service-slider');

/* serviceHover(hoverBlockNode); */
/* serviceHover(); */

serviceHover();


/* toggle header */
const headerToggleBlock = ['cityBlock-wrapper', 'cityActive', 'cityActiveWrapper'];

mytoggle('cityActive', headerToggleBlock);
mytoggle('cityClose', headerToggleBlock);

/* toggle academy popup */
const academyToggleBlock = ['academyPopup', 'academyPopupBtn', 'academySliderDots', 'academySlider'];
mytoggle('academyPopupBtn', academyToggleBlock);
mytoggle('academyPopupClose', academyToggleBlock);

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