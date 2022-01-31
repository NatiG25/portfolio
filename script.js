const menu = document.querySelector('.menu');
const info = document.querySelector('.info');
const headline = document.querySelector('.background');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  info.classList.toggle('active');
  headline.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  menu.classList.remove('active');
  info.classList.remove('active');
  headline.classList.remove('active');
}));