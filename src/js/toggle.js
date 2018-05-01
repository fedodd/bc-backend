export default (toggleBtn, toggleBlock) => {
  const toggleFunc = () => {
    document.getElementById(toggleBlock).classList.toggle('is__active');
  };
  document.getElementById(toggleBtn).addEventListener('click', toggleFunc);
};
