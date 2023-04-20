const toggle = document.querySelector('#toggle')
const menu = document.querySelector('.menu2')

toggle.addEventListener('click', e => {
    menu.classList.toggle('active')
})