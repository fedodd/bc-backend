export default (toggleBtn, toggleBlock) => {
  const toggleFunc = () => {
    toggleBlock.map(elem => document.getElementById(elem).classList.toggle('is__active'));
  };
  document.getElementById(toggleBtn).addEventListener('click', toggleFunc);
};
