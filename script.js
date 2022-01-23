'use strict'

/*====================гамбургер меню=======================*/

const navMenu = document.querySelector('.header__nav')
const menuBtn = document.querySelector(".hamburger");

menuBtn.addEventListener("click", function(e) {
  
  menuBtn.classList.toggle("is-active");
  navMenu.classList.toggle('active-menu');
  document.body.classList.toggle('overflow') 
  e.stopPropagation();
});

document.addEventListener ('click', function(e) {
  const navList = document.querySelector('.header__nav-list')
    if (!(navList.contains(e.target)) && 
        (navMenu.classList.contains('active-menu'))) {

        menuBtn.classList.toggle("is-active");
        navMenu.classList.toggle('active-menu');
        document.body.classList.toggle('overflow'); 
             
    }
})

document.addEventListener ('click', function(e) {
	if ( (e.target.classList.contains('header__nav-item-link')) && 
			(navMenu.classList.contains('active-menu'))) {

			menuBtn.classList.toggle("is-active");
			navMenu.classList.toggle('active-menu');
      document.body.classList.toggle('overflow');      
	}
})

/*==================переключение фото в секции портфолио======================*/


const arrBtns = document.querySelectorAll('.portfolio__buttons-btn'),
      portfolioBtns =  document.querySelector('.portfolio__buttons'),     
      portfolioPhotos = document.querySelectorAll('.portfolio__img');

portfolioBtns.addEventListener('click', function changePhoto (e) {
  if (e.target.classList.contains('portfolio__buttons-btn')) {
    let btn = e.target;
   
    arrBtns.forEach(btn => btn.classList.remove('_active'));
    btn.classList.add('_active');
    portfolioPhotos.forEach((img, i) => {
       img.src = `./assets/img/portfolio/${btn.dataset.season}/${i + 1}.jpg`
     });  
  }
})


