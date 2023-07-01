const projectPopUp = document.querySelector(".project-popUp");

const popUp = (project, id) => {
  projectPopUp.innerHTML = `
  <section>
    <div class="portfolio-content">
      <img
        src=${project[id].img}
        class="portfolio-img"
        alt="Project-preview"
      />
      <div class="portfolio-data">
        <h3 class="portfolio-title">${project[id].title}</h3>
        <p class="portfolio-description">
        ${project[id].description}
        </p>
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
    </section>
  `
}

const displayPopUps = () => {
  const buttonProject = document.querySelectorAll(".button-project");
  buttonProject.forEach(button => {
    button.addEventListener('click', () => popUp(projects, button.id))
  });
}

export default displayPopUps;
