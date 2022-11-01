const navClose = document.getElementById('nav_close');
const navMenu = document.getElementById('nav_menu');
const menuApp = document.getElementById('menu-app');

const addShowClass = () => {
  navMenu.classList.add('show-menu');
};
menuApp.addEventListener('click', addShowClass);
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

document.querySelectorAll('.nav-mobile-link').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
}));
