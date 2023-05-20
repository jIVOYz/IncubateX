new Swiper('.swiper', {
  navigation: {
    nextEl: '.swipe-button-next',
    prevEl: '.swipe-button-prev',
  },
  pagination: {
    pagination: true,
  },
})

//* Burger menu
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.hamburger-lines')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
})
