import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const mainBody = document.querySelector('#main-body');
// NAV
const navClose = document.getElementById('nav_close');
const navMenu = document.getElementById('nav_menu');
const menuApp = document.getElementById('menu-app');
const navHeader = document.querySelector('.nav-header');
// PORTFOLIO
const portfolioSection = document.querySelector('.portfolio-container');
const noteWorthySection = document.querySelector('.noteWorthy-container');
const seeMoreSection = document.querySelector('.seeMore-container');
const seeMoreButton = document.querySelector('.seeMore-button');
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

window.addEventListener('scroll', () => {
  if (lastScrollY < window.scrollY) {
    navHeader.classList.add('nav-header-hide');
  } else {
    navHeader.classList.remove('nav-header-hide');
  }

  lastScrollY = window.scrollY;
});

const projects = [
  {
    img: 'image/weFlyDigital.png',
    title: 'We Fly Digital',
    description: `This is an app that lists flight reservations, 
    where a user can make reservations with a 
    specific airline. It also displays the airline’s 
    full description & details.`,
    tech: [
      'Jest/Snapshot testing',
      'Netlify',
      'JavaScript(ES6)',
      'React',
      'Redux',
      'JWT',
      'Rails-API',
    ],
    sourceLink: 'https://github.com/ibr5500/we_fly_digital_frontend',
    liveLink: 'https://weflydigital.netlify.app/',
  },
  {
    img: 'image/riyadhSeason.jpeg',
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
    calculations while reading math-related quotes.`,
    tech: [
      'JavaScriptES6',
      'API',
      'Rails',
      'React',
      'Netlify',
      'Router',
      'Snapshot-Testing',
    ],
    sourceLink: 'https://github.com/NatiG25/math-magicians',
    liveLink: 'https://math-magicians25.netlify.app/',
  },
  {
    img: 'image/bugetApp.png',
    title: 'Budget App',
    description: `This is a web application where you can manage your budget.
    You have a list of transactions associated with categories, so
    that you can see how much money you have spent and on what.`,
    tech: ['Ruby on Rails', 'PostgreSQL', 'Devise', 'Rspec', 'Bootstrap'],
    sourceLink: 'https://github.com/NatiG25/budget-app',
    liveLink: 'https://budget-app-13wq.onrender.com',
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
];

const noteWorthy = [
  {
    title: 'We Fly Digital Backend',
    description: `Our robust Rails API serves as the backbone 
    of the 'We Fly Digital' project, seamlessly connecting 
    users to a world of digital exploration. Whether it's 
    booking flights, making reservations, or create & delete 
    airlines, our Rails API ensures a smooth and responsive 
    experience, enabling users to soar through the digital 
    skies.`,
    tech: ['Rails-API', 'Rspec', 'PostgreSQL'],
    sourceLink: 'https://github.com/ibr5500/we_fly_digital_backend',
    liveLink: 'https://weflydigitalapi.onrender.com/',
  },
  {
    title: 'Flutter Todo-list',
    description: `Stay organized and boost productivity with our 
    sleek and intuitive Flutter/Dart todo list mobile app. 
    Effortlessly manage your tasks, set priorities, and track 
    your progress on the go.`,
    tech: ['Dart', 'Widgets', 'Custom classes'],
    sourceLink: 'https://github.com/NatiG25/flutter-todo-list',
    liveLink: '',
  },
  {
    title: 'MovieSpace',
    description: `This web application is based on an external API. We selected
                  an API that provides data about top-rated movies and then
                  built a web app around it. The web app has two user
                  interfaces.`,
    tech: ['JavaScriptES6', 'Webpack', 'API'],
    sourceLink: 'https://github.com/NatiG25/MovieSpace',
    liveLink: 'https://natig25.github.io/MovieSpace/',
  },
  {
    title: 'BookStore',
    description: `This app provides a user-friendly platform 
    for book enthusiasts to manage their personal reading 
    collection. Users can effortlessly add new books to their 
    virtual library, including essential details like title, 
    author, and cover image.`,
    tech: ['JavaScriptES6', 'React', 'Redux'],
    sourceLink: 'https://github.com/NatiG25/Bookstore',
    liveLink: 'https://bookstore25.netlify.app/',
  },
  {
    title: 'LeaderBoard',
    description: `This leader-board website displays scores submitted 
    by different players. It also allows you to submit 
    your score. All data is preserved thanks to the 
    external Leader-board API service.`,
    tech: [
      'JavaScriptES6',
      'Webpack',
      'Async/Await',
    ],
    sourceLink: 'https://github.com/NatiG25/leaderboard',
    liveLink: 'https://natig25.github.io/leaderboard/',
  },
  {
    title: 'React Todo-list',
    description: `This app allows you to create your todos 
    with ease. Additionally, users could add, delete, edit & clear
    out completed todos.`,
    tech: ['React', 'Custom React Hooks', 'React-icons'],
    sourceLink: 'https://github.com/NatiG25/react-todo',
    liveLink: 'https://react-todos25.netlify.app/',
  },
];

const seeMore = [
  {
    title: 'School Library',
    description: `Elevate learning with our innovative school 
    library app powered by Ruby. Seamlessly manage and 
    explore a vast collection of educational resources, from 
    books to digital media.`,
    tech: ['Ruby', 'Rspec', 'PostgreSQL'],
    sourceLink: 'https://github.com/NatiG25/school-library',
    liveLink: '',
  }, 
  {
    title: 'Blog App',
    description: `The Blog is a classic example of a blog 
    website. The goal is to create a fully functional website 
    that will show the list of posts and empower readers to 
    interact with them by adding comments and liking posts.`,
    tech: ['Ruby', 'Devise', 'PostgreSQL', 'cancancan', 'Rspec'],
    sourceLink: 'https://github.com/NatiG25/blog-app',
    liveLink: '',
  }, 
  {
    title: 'Catalog Of My Things',
    description: `Discover the power of organization with 
    our 'Catalog of My Things' project, thoughtfully crafted 
    using the versatility of Ruby. Seamlessly manage and 
    categorize your belongings with ease, creating a digital 
    inventory that puts your possessions at your fingertips.`,
    tech: ['Ruby', 'PostgreSQL', 'Rspec'],
    sourceLink: 'https://github.com/NatiG25/catalog-of-my-things',
    liveLink: '',
  },
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

const displayNoteWorthyProjects = (listOfProjects, projectSection) => {
  for(let i = 0; i < listOfProjects.length; i += 1) {
    if(listOfProjects[i].liveLink) {
      projectSection.innerHTML += `
      <div class="noteWorthy-content">
        <div class="noteWorthyIcons">
          <a 
            href=${listOfProjects[i].liveLink}
            target="_blank"
            >
            <i class="fa-solid fa-arrow-up-right-from-square button-icon"></i> 
          </a>
          <a 
            href=${listOfProjects[i].sourceLink}
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <h3 class="noteWorthy-title">${listOfProjects[i].title}</h3>
        <p class="portfolio-description">
        ${listOfProjects[i].description}
        </p>
        <ul class="portfolio-tech-list">
          <li class="noteWorthy-tech-item">${listOfProjects[i].tech[0]}</li>
          <li class="noteWorthy-tech-item">${listOfProjects[i].tech[1]}</li>
          <li class="noteWorthy-tech-item">${listOfProjects[i].tech[2]}</li>
        </ul>
      </div>
      `;
    } else {
      projectSection.innerHTML += `
      <div class="noteWorthy-content">
        <div class="noteWorthyIcons">
          <a 
            href=${listOfProjects[i].sourceLink}
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <h3 class="noteWorthy-title">${listOfProjects[i].title}</h3>
        <p class="portfolio-description">
        ${listOfProjects[i].description}
        </p>
        <ul class="portfolio-tech-list">
          <li class="noteWorthy-tech-item">${listOfProjects[i].tech[0]}</li>
          <li class="noteWorthy-tech-item">${listOfProjects[i].tech[1]}</li>
          <li class="noteWorthy-tech-item">${listOfProjects[i].tech[2]}</li>
        </ul>
      </div>
      `;
    }
  }
}

displayNoteWorthyProjects(noteWorthy, noteWorthySection);
displayNoteWorthyProjects(seeMore, seeMoreSection);

const displaySeeMore = () => {
  if (seeMoreButton.textContent === 'See less') {
    seeMoreSection.style.display = 'none';
    seeMoreButton.textContent = 'See more';
  } else {
    seeMoreSection.style.display = 'grid';
    seeMoreButton.textContent = 'See less'
  }
}

seeMoreButton.addEventListener('click', displaySeeMore)

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
