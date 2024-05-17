/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/scripts/helpers.js

function grubScrolling(className, opt) {
  const slider = document.querySelector(className);

  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });

  if (opt) {
    const btnLeft = document.querySelector(opt.left)
    const btnRight = document.querySelector(opt.right)

    btnLeft.addEventListener('click', () => {
      const newVal = slider.scrollLeft - 300
      slider.scroll({
        left: newVal > 0 ? newVal : 0,
        behavior: 'smooth'
      })
    })

    btnRight.addEventListener('click', () => {
      const newVal = slider.scrollLeft + 300
      slider.scroll({
        left: newVal < slider.scrollWidth ? newVal : slider.scrollWidth,
        behavior: 'smooth'
      })
    })
  }
}

function tabHandler() {
  const tabs = document.querySelectorAll('[data-role="tab"]')
  const tabBodies = document.querySelectorAll('[data-role="tab-body"]')

  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      tabs.forEach((e) => {
        if (e.dataset.type === tab.dataset.type && e.classList.contains('active')) {
          e.classList.remove('active')
        }
      })
      tab.classList.add('active')
      tabBodies.forEach((tabBody) => {
        if (tabBody.dataset.type === tab.dataset.type) {
          if (tabBody.classList.contains('active')) {
            tabBody.classList.remove('active')
          }
          if (tabBody.dataset.index === tab.dataset.index) {
            tabBody.classList.add('active')
          }
        }
      })
    })
  })
}

function customSelect() {
  const customSelects = document.querySelectorAll('.selector')

  customSelects.forEach((customSelect) => {
    const customSelectInput = customSelect.querySelector('.selector__label')
    const input = customSelectInput.querySelector('input')

    customSelectInput.addEventListener('click', (e) => {
      e.preventDefault()
      customSelect.classList.toggle('selector--active')
    })

    customSelect.addEventListener('click', (e) => {
      const isOption = e.target.closest('.selector__item')
      if (isOption) {
        input.value = isOption.dataset.value
        customSelect.classList.add('selector--valued')
        customSelect.classList.remove('selector--active')
      }
    })

    document.addEventListener('click', (e) => {
      const isSelect = e.target.closest('.selector')

      if ((!isSelect || isSelect !== customSelect) && customSelect.classList.contains('selector--active')) {
        customSelect.classList.remove('selector--active')
      }
    })
  })
}

function customPassword() {
  const customSelects = document.querySelectorAll('.password')

  customSelects.forEach((customSelect) => {
    const passwordInput = customSelect.querySelector('input')
    const passwordControl = customSelect.querySelector('.password__control')

    passwordControl.addEventListener('click', (e) => {
      if (customSelect.classList.contains('password--viewed')) {
        customSelect.classList.remove('password--viewed')
        passwordInput.type = 'password'
      } else {
        customSelect.classList.add('password--viewed')
        passwordInput.type = 'text'
      }
    })
  })
}
;// CONCATENATED MODULE: ./src/assets/scripts/settings.js


customSelect()
tabHandler()
customPassword()
/******/ })()
;
//# sourceMappingURL=settings.js.map