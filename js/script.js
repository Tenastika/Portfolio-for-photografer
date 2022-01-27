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


