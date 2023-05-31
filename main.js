import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const navClose = document.getElementById("nav_close");
const navMenu = document.getElementById("nav_menu");
const menuApp = document.getElementById("menu-app");
const portfolioSection = document.querySelector(".portfolio-container");
const portfolioContent = document.querySelector(".portfolio-content");

const addShowClass = () => {
  navMenu.classList.add("show-menu");
};
menuApp.addEventListener("click", addShowClass);
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

document.querySelectorAll(".nav-mobile-link").forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);

const projects = [
  {
    img: "image/react-weather-app.png",
    title: "Weather App",
    description: `With this app, you can quickly check the current weather
    conditions and forecast ⛅ for any city in the world.`,
    tech: ["React", "Tailwind", "React-Toastify", "OpenWeatherAPI", "Netlify"],
    sourceLink: "https://github.com/NatiG25/weather-app",
    liveLink: "https://openweather-websiteapp.netlify.app",
  },
  {
    img: "image/SpaceTravelers.png",
    title: "Space Travels",
    description: `This is a web application for a company that provides
    commercial and scientific space travel services. The
    application will allow users to book rockets and join selected
    space missions. All information is real-time data from the
    SpaceX API.`,
    tech: ["React", "Redux", "API", "Netlify", "Snapshot-Testing"],
    sourceLink: "https://github.com/NatiG25/Space-Travels-Hub",
    liveLink: "https://spacehub1.netlify.app/",
  },
  {
    img: "image/MovieSpace.png",
    title: "MovieSpace",
    description: `This web application is based on an external API. We selected
                  an API that provides data about top-rated movies and then
                  built a web app around it. The web app has two user
                  interfaces.`,
    tech: ["JavaScriptES6", "Webpack", "API", "Jest", "CSS3"],
    sourceLink: "https://github.com/NatiG25/MovieSpace",
    liveLink: "https://natig25.github.io/MovieSpace/",
  },
  {
    img: "image/bugetApp.png",
    title: "Budget App",
    description: `This is a web application where you can manage your budget.
    You have a list of transactions associated with categories, so
    that you can see how much money you have spent and on what.`,
    tech: ["Ruby on Rails", "PostgreSQL", "Devise", "Rspec", "Bootstrap"],
    sourceLink: "https://github.com/NatiG25/budget-app",
    liveLink: "https://budget-app-qgqp.onrender.com/",
  },
  {
    img: "image/riyadh-saudi-arabia.jpeg",
    title: "Riyadh Season",
    description: `This website provides users with a glimpse or an idea of how
    Saudi Arabia celebrates during the annual Riyadh season
    festival for both this year and the previous one.
    Additionally, users can get to know the people behind the
    festival.`,
    tech: ["JavaScriptES6", "Bootstrap", "Git", "CSS", "GitHub"],
    sourceLink: "https://github.com/NatiG25/Riyadh-season",
    liveLink: "https://natig25.github.io/Riyadh-season/",
  },
  {
    img: "image/MathMagic.png",
    title: "Math Magicians",
    description: `"Math magicians" is a website for all math lovers out there.
    It is a single-page app that allows users to make simple
    calculations while reading math-related content.`,
    tech: ["JavaScriptES6", "React", "Netlify", "Router", "Snapshot-Testing"],
    sourceLink: "https://github.com/NatiG25/Math-Magicians",
    liveLink: "https://math-magicians25.netlify.app/",
  },
];

const displayAllProjects = (projectsArr) => {
  for (let i = 0; i < projectsArr.length; i++) {
    if (i % 2 === 0) {
      portfolioSection.innerHTML += ` <div class="portfolio-content">
      <img
        src=${projects[i].img}
        class="portfolio-img"
        alt="Project-preview"
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
        <a 
        href="" 
        class="button-project button--small"
        >
        See project
        </a>
      </div>
    </div>`;
    } else {
      portfolioSection.innerHTML += ` <div class="portfolio-content reverse">
      <img
        src=${projects[i].img}
        class="portfolio-img"
        alt="Project-preview"
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
        <a 
        href="" 
        class="button-project button--small"
        >
        See project
        </a>
      </div>
    </div>`;
    }
  }
};

displayAllProjects(projects);

// ==== TESTIMONIAL ====
const swiperTestimonial = new Swiper(".testimonial-container", {
  gradCursor: true,
  loop: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

{
  /* <a
href=${projects[i].sourceLink}
target="_blank"
class="button button--flex button--small portfolio-button"
>
Source code
<i class="fa-solid fa-arrow-right button-icon"></i>
</a>
<a
href=${projects[i].liveLink}
target="_blank"
class="button button--flex button--small button-live portfolio-button"
>
Live code
<i
  class="fa-solid fa-arrow-up-right-from-square button-icon"
></i>
</a>  */
}
