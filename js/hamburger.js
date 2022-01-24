/*====================гамбургер меню=======================*/
const hamburger = () => {
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
};

export default hamburger;
