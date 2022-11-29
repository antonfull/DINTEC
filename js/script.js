/*
1. найти элемент, на который кликаем
2. найти элемент меню
3. написать клик на кнопку и добавить класс
*/
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

burger.addEventListener('click', function () {
  menu.classList.toggle('header__nav--active');
  burger.classList.toggle('burger--active');
});

menu.addEventListener('click', function () {
  menu.classList.remove('header__nav--active');
  burger.classList.remove('burger--active');
});

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('is-active');

  }

};


select();