 'use strict'
import  i18nObj from './i18n.js';
import  cash from './cash.js';
import  gallery from './gallery.js';
import hamburger from './hamburger.js';
import translate from './translate.js';
import changeTheme from './change-theme.js';

i18nObj
cash();
gallery();
hamburger();
translate();
changeTheme();


const Body = document.querySelector('body');
function setLocalStorage() {
  
  let theme = "light";
  if (!Body.classList.contains('_light-theme')) {
    theme = 'dark'
  }
  localStorage.setItem('theme', theme);

  let lang = 'en';
  const btnRu = document.querySelector('.header__switch-ru');
  if (btnRu.classList.contains('_active')) {
    lang = 'ru';
  }
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    if (theme == 'light')
      Body.classList.add('_light-theme')
  }

  if (localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    if (lang == 'ru') {
      const btns = document.querySelectorAll('.lang-btn'),
            btnRu = document.querySelector('.header__switch-ru'),
            langElements = document.querySelectorAll('[data-i18n]');
      btns.forEach(btn => btn.classList.remove('_active'));
      btnRu.classList.add('_active');
      langElements.forEach(elem => {
        let lang = 'ru';
        let text = i18nObj[lang][elem.dataset.i18n];
        if (elem.placeholder) {
          elem.placeholder = text;
        } else if (elem.textContent != text) {
          elem.textContent = text;
        }
      });
    }
  }
}
window.addEventListener('load', getLocalStorage)

console.log(
  `Смена изображений в секции portfolio +25
  при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20
  кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5

  Перевод страницы на два языка +25
  при клике по надписи ru англоязычная страница переводится на русский язык +10
  при клике по надписи en русскоязычная страница переводится на английский язык +10
  надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5

  Переключение светлой и тёмной темы +25
  Внешний вид тёмной темы соответствует макету, который верстали в предыдущих частях задания, внешний вид светлой темы соответствует одному из двух вариантов макетов на выбор. 
  Вариант второй. Изменения затронули все блоки и секции, в том числе поменялись фоновые изображения и есть два варианта меню на выбор Макет в figma - светлая тема - 2
  тёмная тема приложения сменяется светлой +10
  светлая тема приложения сменяется тёмной +10
  после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5

  Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5

  Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5
  Для получения максимального балла за пункт требований достаточно добавить кнопкам только один эффект

  Итого:  85 баллов
  `
)


