const portfolioSection = document.querySelector(".portfolio-container");

const displayAllProjects = (projects) => {
  for (let i = 0; i < projects.length; i++) {
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

export default displayAllProjects;
