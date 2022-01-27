 const gallery = () => {

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
});



}

export  default gallery;