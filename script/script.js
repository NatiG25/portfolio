const menu = document.querySelector('.menu');
const info = document.querySelector('.info');
const headline = document.querySelector('.background');
const navClose = document.getElementById('nav_close'),
navMenu = document.getElementById('nav_menu'),
menuApp = document.getElementById('menu-app');

const addShowClass = () => {
  navMenu.classList.add('show-menu')
}
menuApp.addEventListener('click', addShowClass)
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})

document.querySelectorAll('.nav-mobile-link').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
}));

// menu.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   info.classList.toggle('active');
//   headline.classList.toggle('active');
// });

// document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
//   menu.classList.remove('active');
//   info.classList.remove('active');
//   headline.classList.remove('active');
// }));