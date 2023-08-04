import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const mainBody = document.querySelector('#main-body');
// NAV
const navClose = document.getElementById('nav_close');
const navMenu = document.getElementById('nav_menu');
const menuApp = document.getElementById('menu-app');
const navHeader = document.querySelector('.nav-header')
// PORTFOLIO
const portfolioSection = document.querySelector('.portfolio-container');
const popUpContainer = document.querySelector('.popUp-container');

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

// Hide Nav
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    navHeader.classList.add("nav-header-hide")
  } else {
    navHeader.classList.remove("nav-header-hide")
  }

  lastScrollY = window.scrollY;
})

const projects = [
  {
    img: 'image/riyadh-saudi-arabia.jpeg',
    title: 'Riyadh Season',
    description: `This website provides users with a glimpse or an idea of how
    Saudi Arabia celebrates during the annual Riyadh season
    festival for both this year and the previous one.
    Additionally, users can get to know the people behind the
    festival.`,
    tech: ['JavaScriptES6', 'Bootstrap', 'Git', 'CSS', 'GitHub'],
    sourceLink: 'https://github.com/NatiG25/riyadh-season',
    liveLink: 'https://natig25.github.io/riyadh-season/',
  },
  {
    img: 'image/MathMagic.png',
    title: 'Math Magicians',
    description: `"Math magicians" is a website for all math lovers out there.
    It is a single-page app that allows users to make simple
    calculations while reading math-related content.`,
    tech: ['JavaScriptES6', 'API', 'Rails', 'React', 'Netlify', 'Router', 'Snapshot-Testing'],
    sourceLink: 'https://github.com/NatiG25/math-magicians',
    liveLink: 'https://math-magicians25.netlify.app/',
  },
  {
    img: 'image/react-weather-app.png',
    title: 'Weather App',
    description: `With this app, you can quickly check the current weather
    conditions and forecast ⛅ for any city in the world.`,
    tech: ['React', 'Tailwind', 'React-Toastify', 'OpenWeatherAPI', 'Netlify'],
    sourceLink: 'https://github.com/NatiG25/weather-app',
    liveLink: 'https://openweather-websiteapp.netlify.app',
  },
  {
    img: 'image/SpaceTravelers.png',
    title: 'Space Travels',
    description: `This is a web application for a company that provides
    commercial and scientific space travel services. The
    application will allow users to book rockets and join selected
    space missions. All information is real-time data from the
    SpaceX API.`,
    tech: ['React', 'Redux', 'API', 'Netlify', 'Snapshot-Testing'],
    sourceLink: 'https://github.com/NatiG25/space-travels-hub',
    liveLink: 'https://spacehub1.netlify.app/',
  },
  {
    img: 'image/MovieSpace.png',
    title: 'MovieSpace',
    description: `This web application is based on an external API. We selected
                  an API that provides data about top-rated movies and then
                  built a web app around it. The web app has two user
                  interfaces.`,
    tech: ['JavaScriptES6', 'Webpack', 'API', 'Jest', 'CSS3'],
    sourceLink: 'https://github.com/NatiG25/MovieSpace',
    liveLink: 'https://natig25.github.io/MovieSpace/',
  },
  // {
  //   img: 'image/bugetApp.png',
  //   title: 'Budget App',
  //   description: `This is a web application where you can manage your budget.
  //   You have a list of transactions associated with categories, so
  //   that you can see how much money you have spent and on what.`,
  //   tech: ['Ruby on Rails', 'PostgreSQL', 'Devise', 'Rspec', 'Bootstrap'],
  //   sourceLink: 'https://github.com/NatiG25/budget-app',
  //   liveLink: 'https://budget-app-qgqp.onrender.com/',
  // },
];

const displayAllProjects = (projects) => {
  for (let i = 0; i < projects.length; i += 1) {
    if (i % 2 === 0) {
      portfolioSection.innerHTML += ` <div class="portfolio-content">
      <img
        src=${projects[i].img}
        class="portfolio-img"
        alt="Project-preview"
        loading="lazy"
        />
      <div class="portfolio-data">
        <h3 class="portfolio-title">${projects[i].title}</h3>
        <p class="portfolio-description">
        ${projects[i].description}
        </p>
        <ul class="portfolio-tech-list">
          <li class="tech-item">${projects[i].tech[0]}</li>
          <li class="tech-item">${projects[i].tech[1]}</li>
          <li class="tech-item">${projects[i].tech[2]}</li>
          <li class="tech-item">${projects[i].tech[3]}</li>
          <li class="tech-item">${projects[i].tech[4]}</li>
        </ul>
        <button
        id="${i}"
        class="button-project button--small"
        >
        See project
        </button>
      </div>
    </div>`;
    } else {
      portfolioSection.innerHTML += ` <div class="portfolio-content">
      <img
        src=${projects[i].img}
        class="portfolio-img"
        alt="Project-preview"
        loading="lazy"
      />
      <div class="portfolio-data reverse">
        <h3 class="portfolio-title">${projects[i].title}</h3>
        <p class="portfolio-description">
        ${projects[i].description}
        </p>
        <ul class="portfolio-tech-list">
          <li class="tech-item">${projects[i].tech[0]}</li>
          <li class="tech-item">${projects[i].tech[1]}</li>
          <li class="tech-item">${projects[i].tech[2]}</li>
          <li class="tech-item">${projects[i].tech[3]}</li>
          <li class="tech-item">${projects[i].tech[4]}</li>
        </ul>
        <button
        id="${i}"
        class="button-project button--small"
        >
        See project
        </button>
      </div>
    </div>`;
    }
  }
};

const popUp = (project, id) => {
  popUpContainer.innerHTML = `
  <button class="popUp-close-btn">
  <i 
  class="fa-solid fa-xmark">
  </i>
  </button>
  <img
    src=${project[id].img}
    class="popUp-img"
    alt="Project-preview"
    loading="lazy"
  />
  <div class="popUp-data">
    <div class="popUp-intro">
      <h3 class="popUp-title">${project[id].title}</h3>
      <p class="popUp-description">
        ${project[id].description}
      </p>
    </div>
    <div class="popUp-details">
      <ul class="portfolio-tech-list">
        <li class="tech-item">${project[id].tech[0]}</li>
        <li class="tech-item">${project[id].tech[1]}</li>
        <li class="tech-item">${project[id].tech[2]}</li>
        <li class="tech-item">${project[id].tech[3]}</li>
        <li class="tech-item">${project[id].tech[4]}</li>
      </ul>
    <a
      href=${project[id].sourceLink}
      target="_blank"
      class="button button--flex button--small portfolio-button"
    >
      Source code
      <i class="fa-solid fa-arrow-right button-icon"></i>
    </a>
    <a
      href=${project[id].liveLink}
      target="_blank"
      class="button button--flex button--small button-live portfolio-button"
    >
      Live code
      <i
      class="fa-solid fa-arrow-up-right-from-square button-icon"
      ></i>
    </a>
    </div>
  `;
};

displayAllProjects(projects);

const popUpClosetoggle = () => {
  const closePopUpBtn = document.querySelector('.popUp-close-btn');
  closePopUpBtn.addEventListener('click', () => {
    popUpContainer.classList.toggle('active');
    mainBody.classList.toggle('active');
  });
};

const displayPopUps = () => {
  const buttonProject = document.querySelectorAll('.button-project');
  buttonProject.forEach((button) => {
    button.addEventListener('click', () => {
      popUp(projects, button.id);
      popUpContainer.classList.toggle('active');
      mainBody.classList.toggle('active');
      popUpClosetoggle();
    });
  });
};

displayPopUps();

// ==== TESTIMONIAL ====
const swiperTestimonial = new Swiper('.testimonial-container', {
  gradCursor: true,
  loop: true,
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});
