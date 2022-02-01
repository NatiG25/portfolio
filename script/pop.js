const projects = [
    {
      title: 'Tonic',
      src: './image/Snapshoot-Portfolio.png',
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
      tags : ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
      seeLivelink: '#',
      seeSourceLink: '#'
    },

    {
      title: 'Multi-Post Stories',
      src: './image/Snapshoot-Portfolio.svg',
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
      tags : ['html', 'css', 'javascript','github', 'ruby', 'Bootstrap'],
      seeLivelink: '#',
      seeSourceLink: '#' 
    },
    {
      title: 'Tonic',
      src: './image/Snapshoot-3Portfolio.svg',
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
      tags : ['html', 'css', 'javascript','github', 'ruby', 'Bootstrap'],
      seeLivelink: '#',
      seeSourceLink: '#' 
    },
    {
      title: 'Multi-Post Stories',
      src: './image/Snapshoot-4Portfolio.svg',
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
      tags : ['html', 'css', 'javascript','github', 'ruby', 'Bootstrap'],
      seeLivelink: '#',
      seeSourceLink: '#' 
    }
  ];

const popButtons = document.getElementsByClassName("view");
const work = document.querySelector('.wrapper-1');
const popup = document.createElement('section');
popup.classList.add('popup-body');

function popupDisplay(cardNum) {
    popup.style.display = ('block');
    work.appendChild(popup);
    popup.innerHTML = `
      <div class='popup-section'>
        <div class="popup-head">
          <h2>${projects[cardNum].title}</h2>
          <i id="closeBtn" class="fas fa-times" alt='#'></i>
        </div>
        <ul class="list-media">
          <li class="canopy">CANOPY</li>
          <li class="date">Back End Dev</li>
          <li class="date">2015</li>
        </ul>
        <div class="popup-image">
          <img src="${projects[cardNum].src}" alt="p1">
        </div>
        <div class="popup-bottom">
          <p>${projects[cardNum].description}</p>
          <div class='modal-footer'>
            <ul class="tag_list no_bullet">
              <li class="tag">${projects[cardNum].tags[0]}</li>
              <li class="tag">${projects[cardNum].tags[1]}</li>
              <li class="tag">${projects[cardNum].tags[2]}</li>
              <li class="tag">${projects[cardNum].tags[3]}</li>
              <li class="tag">${projects[cardNum].tags[4]}</li>
              <li class="tag">${projects[cardNum].tags[5]}</li>
            </ul>
            <div class='popup-buttons'>
              <button href="${projects[cardNum].seeLivelink}" class="view">See Project</button>
              <button href="${projects[cardNum].seeSourceLink}" class="view">See Project</button>
            </div>
          </div>
        </div>
      </div>
    `
    document.addEventListener('click', (event) => {
      if (event.target.id === "closeBtn") {
        popup.style.display = 'none'
      }
    });
  }

  for (let i = 0 ; i < popButtons.length; i += 1) {
    popButtons[i].addEventListener('click', () => {
      popupDisplay(i);
    })
}