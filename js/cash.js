const cash = () => {

  /*==================кеширование изображений==================================*/

const seasons = ['winter', 'spring', 'summer', 'autumn'];

 seasons.forEach(season => {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/portfolio/${season}/${i}.jpg`;
  }
});

}

export  default cash;