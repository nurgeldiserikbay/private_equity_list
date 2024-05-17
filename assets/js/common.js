/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
document.addEventListener('DOMContentLoaded', () => {
  burgerMenu()
})

function burgerMenu() {
  const burgerMenu = document.querySelector('.burger-menu')
  const burgerMenuBtn = document.querySelector('.nav-mobile__btn')

  burgerMenuBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    burgerMenuBtn.classList.toggle('active')
  })
}


/******/ })()
;
//# sourceMappingURL=common.js.map