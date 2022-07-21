// import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';

// // ---------------------------------

// window.addEventListener('DOMContentLoaded', () => {

//   // Utils
//   // ---------------------------------

//   iosVhFix();

//   // Modules
//   // ---------------------------------

//   // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
//   // в load следует добавить скрипты, не участвующие в работе первого экрана
//   window.addEventListener('load', () => {
//     initModals();
//   });
// });

// // ---------------------------------

// // ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// // привязывайте js не на классы, а на дата атрибуты (data-validate)

// // вместо модификаторов .block--active используем утилитарные классы
// // .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// // .select.select--opened ❌ ---> [data-select].is-open ✅

// // выносим все в дата атрибуты
// // url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// // для адаптивного JS используейтся matchMedia и addListener
// // const breakpoint = window.matchMedia(`(min-width:1024px)`);
// // const breakpointChecker = () => {
// //   if (breakpoint.matches) {
// //   } else {
// //   }
// // };
// // breakpoint.addListener(breakpointChecker);
// // breakpointChecker();

// // используйте .closest(el)

var burgerButton = document.querySelector('.header__toggle');
var burgerNav = document.querySelector('.header__nav');
var burgerParent = document.querySelector('.header__container');

burgerButton.addEventListener('click', function(){
  burgerNav.classList.toggle('header__nav--opened');
  burgerNav.classList.toggle('header__nav--closed');
  burgerButton.classList.toggle('header__toggle--close');
  burgerButton.classList.toggle('header__toggle--open');
  burgerParent.classList.toggle(
    'header__container--hidden');
})
