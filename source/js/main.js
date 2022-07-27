// ---------------------------------
function menuOpen() {
  const navButton = document.querySelector('.header__toggle');
  const headerNav = document.querySelector('.nav');
  const navContainer = document.querySelector('.header__container');
  const headerTop = document.querySelector('.header__top');
  const body = document.body;
  const navItems = headerNav.querySelectorAll('a[href*="#"]');

  navButton.classList.remove('header__toggle--nojs');
  headerNav.classList.remove('nav--nojs');
  headerTop.classList.remove('header__top--nojs');
  navButton.classList.add('header__toggle--open');
  headerNav.classList.add('nav--closed');

  function navMenuOpen() {
    headerNav.classList.toggle('nav--opened');
    headerNav.classList.toggle('nav--closed');
    navButton.classList.toggle('header__toggle--close');
    navButton.classList.toggle('header__toggle--open');
    navContainer.classList.toggle('header__container--hidden');
    body.classList.toggle('scroll-off');

    document.addEventListener('click', function (e) {
      const target = e.target;
      const itsMenu = target === headerNav || headerNav.contains(target);
      const itsBtnMenu = target === navButton;
      const menuIsActive = headerNav.classList.contains('nav--opened');

      if (!itsMenu && !itsBtnMenu && menuIsActive) {
        navMenuClose();
      }
    });

    navItems.forEach((item) => {
      item.addEventListener('click', function () {
        navMenuClose();
      });
    });
  }

  function navMenuClose() {
    headerNav.classList.remove('nav--opened');
    headerNav.classList.add('nav--closed');
    navButton.classList.remove('header__toggle--close');
    navButton.classList.add('header__toggle--open');
    navContainer.classList.remove('header__container--hidden');
    body.classList.remove('scroll-off');
  }

  navButton.addEventListener('click', function () {

    navMenuOpen();

  });
}

if (window.localStorage) {
  let elements = document.querySelectorAll('[name]');

  for (let i = 0, length = elements.length; i < length; i++) {
    (function (element) {
      let name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || '';

      element.onkeyup = function () {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    menuOpen();
  });
});

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
