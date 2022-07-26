export {menuOpen};

function menuOpen() {
  const navButton = document.querySelector('.header__toggle');
  const headerNav = document.querySelector('.header__nav');
  const navContainer = document.querySelector('.header__container');
  const headerTop = document.querySelector('.header__top');
  const body = document.body;
  const navItems = headerNav.querySelectorAll('a[href*="#"]');

  navButton.classList.remove('header__toggle--nojs');
  headerNav.classList.remove('header__nav--nojs');
  headerTop.classList.remove('header__top--nojs');
  navButton.classList.add('header__toggle--open');
  headerNav.classList.add('header__nav--closed');

  function navMenuOpen() {
    headerNav.classList.toggle('header__nav--opened');
    headerNav.classList.toggle('header__nav--closed');
    navButton.classList.toggle('header__toggle--close');
    navButton.classList.toggle('header__toggle--open');
    navContainer.classList.toggle('header__container--hidden');
    body.classList.toggle('scroll-off');

    document.addEventListener('click', function (e) {
      const target = e.target;
      const itsMenu = target === headerNav || headerNav.contains(target);
      const itsBtnMenu = target === navButton;
      const menuIsActive = headerNav.classList.contains('header__nav--opened');

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
    headerNav.classList.remove('header__nav--opened');
    headerNav.classList.add('header__nav--closed');
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
