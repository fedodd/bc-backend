const toggleFunc1 = (elem) => {
  elem.classList.add('is__active');
};

const toggleFunc2 = (elem) => {
  elem.classList.remove('is__active');
};

const hoverList = document.querySelectorAll('.priceList-item');
const serviceList = document.querySelectorAll('.service-slider');
const FirstService = document.getElementById('firstService');
const serviceSliderBlock = document.getElementById('serviceSliderBlock');

const firstActivate = () => FirstService.classList.toggle('is__active');

export default () => {
  serviceSliderBlock.addEventListener('mouseout', firstActivate);
  for (let i = 0; i < hoverList.length; i++) {
    const button = hoverList[i];
    const service = serviceList[i];
    const toggleFuncAdd = () => toggleFunc1(service);
    const toggleFuncDelete = () => toggleFunc2(service);
    button.addEventListener('mouseover', toggleFuncAdd, false);
    button.addEventListener('mouseout', toggleFuncDelete, false);
  }
};
