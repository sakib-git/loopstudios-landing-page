
const navigationContainer = document.querySelector('.navigation-container')

document.addEventListener('click', (e) => {

if(e.target.closest('.menubtn')){
  navigationContainer.classList.add('show')
}
if(e.target.closest('.nav-menu-close-btn')){
  navigationContainer.classList.remove('show')
}

const h1 = e.target.closest('h1')
if(h1){
  h1.style.display = 'none'
}
setTimeout(() => {
  h1.style.display = 'block'
}, 1000)

})




