import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

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

// ==== PORTFOLIO SWIPER ====
const swiper = new Swiper('.portfolio-container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// ==== TESTIMONIAL ====
const swiperTestimonial = new Swiper('.testimonial-container', {
  cssMode: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
