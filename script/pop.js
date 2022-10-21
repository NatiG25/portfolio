const projects = [
  {
    title: 'Riyadh Season',
    src: './image/Riyadh-portifolio.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"],
    tags: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    seeLivelink: 'https://natig25.github.io/Riyadh-season/',
    seeSourceLink: '#',
  },

  {
    title: 'Budget App',
    src: './image/BudgetApp.png',
    description: 'You have a list of transactions associated with a category so that you can see how much money you spent and on what.',
    tags: ['html', 'css', 'github', 'ruby', 'ruby on rails', 'Bootstrap'],
    seeLivelink: 'https://budget-app-nati.herokuapp.com/',
    seeSourceLink: 'https://github.com/NatiG25/budget-app',
  },
  {
    title: 'We Fly Digital',
    src: './image/WeFlyDigital.png',
    description: "We Fly Digital is a responsive app that lists flight reservations. A user can selects a specific airline, see the details page with its full description, and can click the 'Reserve' button to reserve it. The user can also access the 'Reserve page from the navigation panel, add or delete a reservation or airline.",
    tags: ['html', 'css', 'javascript', 'github', 'ruby on rails', 'react', 'Bootstrap'],
    seeLivelink: 'https://we-fly-digital.herokuapp.com/',
    seeSourceLink: 'https://github.com/ibr5500/flight_reservation-frontend',
  },
  {
    title: 'MovieSpace',
    src: './image/MovieSpace.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    tags: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    seeLivelink: 'https://natig25.github.io/MovieSpace/',
    seeSourceLink: 'https://github.com/NatiG25/MovieSpace',
  },
];

const popButtons = document.getElementsByClassName('view');
const work = document.querySelector('.cards-radious');
const popup = document.createElement('section');
popup.classList.add('popup-body');
const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
const { body } = document;

function popupDisplay(cardNum) {
  body.style.overflowY = ('hidden');
  overlay.style.display = ('block');
  popup.style.display = ('block');
  work.appendChild(overlay);
  work.appendChild(popup);
  popup.innerHTML = `
        <div class="tonic-popup">
          <h2>${projects[cardNum].title}</h2>
          <i id="closeBtn" class="fas fa-times" alt='#'></i>
        </div>
        <ul class="list-popup">
          <h2 class="canopy">CANOPY</h2>
          <li class="date"> <i class="fa fa-circle"></i>&#160; Back End Dev</li>
          <li class="date"> <i class="fa fa-circle"></i>&#160; 2015</li>
        </ul>
        <div class="card-img">
          <img src="${projects[cardNum].src}" alt="Project-preview-1">
        </div>
        <div class="media-img">
        <img src="${projects[cardNum].src}" alt="Project-preview-1">
      </div>
      <div class='flex'>
          <p class="content-2">${projects[1].description}</p>
          <p class="popup-content">${projects[0].description}</p>
          <div class="flex-buttons">
            <ul class="popup-btns">
              <li>
              <p>${projects[cardNum].tags[0]}</p>
              </li>
              <li>
              <p>${projects[cardNum].tags[1]}</p>
              </li>
              <li>
              <p>${projects[cardNum].tags[2]}</p>
              </li>
            </ul>

            <ul class="popup-btns-media">
            <li>
            <p>${projects[cardNum].tags[0]}</p>
            </li>
            <li>
            <p>${projects[cardNum].tags[1]}</p>
            </li>
            <li>
            <p>${projects[cardNum].tags[2]}</p>
            </li>
            <li>
            <p>${projects[cardNum].tags[3]}</p>
            </li>
            <li>
            <p>${projects[cardNum].tags[4]}</p>
            </li>
            <li>
            <p>${projects[cardNum].tags[5]}</p>
            </li>
          </ul>
            <div class='popup-buttons'>
              <a href="${projects[cardNum].seeLivelink}" class="view-popup"> <p> See live&#160; <img src="image/Arrow-Export.svg" alt="arrow icon">
              </p> </a>
              <a href="${projects[cardNum].seeSourceLink}" class="view-popup"> <p> See Source&#160; <img src="image/Frame.svg"></p> </a>
        </div>
        </div>
        </div>
    `;
  document.addEventListener('click', (event) => {
    if (event.target.id === 'closeBtn') {
      popup.style.display = 'none';
      overlay.style.display = 'none';
      body.style.overflowY = ('auto');
    }
  });
}

for (let i = 0; i < popButtons.length; i += 1) {
  popButtons[i].addEventListener('click', () => {
    popupDisplay(i);
  });
}

// Validate form
const email = document.getElementById('email');
const errorMessage = document.getElementById('error');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  const mssg = ['The email is not valid, email characters should be in lowercase'];

  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.innerHTML = mssg.join(', ');
    errorMessage.style.display = ('flex');
  } else {
    errorMessage.style.display = ('none');
  }
});
