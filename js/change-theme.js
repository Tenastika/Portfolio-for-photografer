const changeTheme = () => {

  /*==================изменение режима просмотра==================================*/

  const btn = document.querySelector('.theme-btn'),
    body = document.querySelector('body')

  btn.addEventListener('click', () => {
    body.classList.toggle('_light-theme')
  })
}
export default changeTheme;