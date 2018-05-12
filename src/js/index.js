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

