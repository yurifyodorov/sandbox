// burger-menu
let isBurgerClicked = false;
const burger = document.querySelector('.toggle-burger');
const burgerMenu = document.querySelector('.menu');

initPage();

function initPage() {
  burger.addEventListener('click', burgerClick);
  document.body.addEventListener('click', hideBurger);
}

function burgerClick(e) {
  e.stopPropagation();

  burger.classList.toggle('toggle-cross');
  burgerMenu.classList.toggle('menu-shown');

  isBurgerClicked = !isBurgerClicked;
}

function hideBurger(e) {
  if (isBurgerClicked && event.target !== burgerMenu) {
    burgerClick(event);
  }
}
