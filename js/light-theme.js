const lightTheme = () => {

  /*==================изменение режима просмотра==================================*/

  const btn = document.querySelector('.theme-btn'),
        body = document.querySelector('body')
console.log(btn)
  btn.addEventListener('click', () => {
    body.classList.toggle('_light-theme')
  })
}
export  default lightTheme;