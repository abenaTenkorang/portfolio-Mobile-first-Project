const data = [
  {
    id: 'project-1',
    title: 'Awesome books',
    canopy: 'User',
    card_list: ['html', 'css', 'javascript'],
    image: 'images/one.png',
    about:
      'Awesome Books is a website that allow users to create a book with title and author name and add to their books list on the page.',
    live: 'https://abenatenkorang.github.io/AwesomeBooks-ES6/',
    source: 'https://github.com/abenaTenkorang/AwesomeBooks-ES6',
  },
  {
    id: 'project-2',
    title: 'To Do List',
    canopy: 'User',
    card_list: ['css', 'javascript'],
    image: 'images/two.png',
    about:
      'To-do list" is a tool that helps organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    live: 'https://abenaTenkorang.github.io/Todo-list/dist',
    source: 'https://github.com/abenaTenkorang/Todo-list',
  },
  {
    id: 'project-3',
    title: 'Leaderboard',
    canopy: 'User',
    card_list: ['html', 'css', 'javascript', 'API'],
    image: 'images/first-work1.png',
    about:
      'leaderboard is a website that displays scores submitted by different people. It also allows users to submit their own score',
    live: 'https://abenaTenkorang.github.io/leaderboard/dist/',
    source: 'https://github.com/abenaTenkorang/leaderboard',
  },
  {
    id: 'project-4',
    title: 'the Movies',
    canopy: 'User',
    card_list: ['css', 'javascript', 'API'],
    image: 'images/four.png',
    about:
      'the Movies is an online entertainment streaming source for TV shows, movies. All data is preserved thanks to the external tvmaze API service.',
    live: 'https://abenatenkorang.github.io/JavaScript-Capstone/dist/',
    source: 'https://github.com/abenaTenkorang/JavaScript-Capstone',
  },
  {
    id: 'project-5',
    title: 'BookStore',
    canopy: 'User',
    card_list: ['Redux', 'React', 'JavaScript'],
    image: 'images/five.png',
    about:
      'This is an MVP version of awesome_books that allows users to "Display a list of books", "Add a book" and "Remove a selected book".',
    live: 'https://book-store-wolh.onrender.com/',
    source: 'https://github.com/abenaTenkorang/book_store',
  },
];

const myHtmlArticle = (myObj) => {
  const articleTemplate = `
        <article class="my-design">
        <div class="first-card">
          <div class="card-image">
            <img
                class="first-work-one"
                src=${myObj.image}
                alt="Nature"
              />
          </div>
          <div class="card-content">
            <h2 class="card-title">${myObj.title}</h2>
            <div class="card-info">
              <p class="card-info-item-canopy">${myObj.canopy}</p>
              <img class="circle-img" src="./images/circle.png" alt="Circle">
              <p class="card-info-item">Front End Dev</p>
              <img class="circle-img" src="./images/circle.png" alt="Circle">
              <p class="card-info-item">2022</p>
            </div>

            <p class="card-description">
             ${myObj.about}
            </p>

            <ul class="card-list">
            ${myObj.card_list.map((elem) => `<li class="card-list-tags">${elem}</li>`).join('')}
             
            </ul>

            <div class="button">
            <a href="#">
                <button type="submit" class="card-link btn-popup" id=${myObj.id}>
                See Project
                </button>
            </a>
             </div>

          </div>
        </div>
      </article>
  `;
  return articleTemplate;
};

const cardHolder = document.querySelector('#portfolio');
data.forEach((elem) => {
  cardHolder.insertAdjacentHTML('beforeend', myHtmlArticle(elem));
});

const portfolioContainer = document.querySelector('#portfolio');
const showModalBtns = portfolioContainer.querySelectorAll('.btn-popup');
showModalBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const btnUi = e.target;
    const obj = data.find((item) => item.id === btnUi.id);
    if (obj) {
      // eslint-disable-next-line no-use-before-define
      openPopup(obj);
    }
  });
});

// Popup section//
function openPopup(obj) {
  document.querySelector('#popup-section').innerHTML += `<div class="popup-container">
    <div class="popup" id="popup"> 
        <div id="desktop-popup" class="">
            <div class="info-header popup-header">
                <h2 class="tonic">${obj.title}
                </h2>
                <img src="./images/Icon.png" alt="popup-x icon" class="popup-header-image" onclick="closePopup()">
            </div>
            <div class="card-content">
            <div class="card-info">
              <p class="card-info-item-canopy">${obj.canopy}</p>
              <img class="circle-img" src="./images/circle.png" alt="Circle">
              <p class="card-info-item">Front End Dev</p>
              <img class="circle-img" src="./images/circle.png" alt="Circle">
              <p class="card-info-item">2022</p>
            </div>
            <div id="desktop-popup" class="popup-img1">
                <img src=${obj.image} alt="popup image 1">
            </div>

            <div id="mobile-popup" class="popup-img2">
                <img src=${obj.image} alt="popup image 1">
            </div>
            <div class="popup-text">
                <div class="popup-body">
                    <p class="desk-hidden">
                      ${obj.about}  
                    </p>
                    <p class="mobile-hidden">
                    ${obj.about}
                    </p>
                </div>
                <div id ="mobile-popup-langs" class="popup-lang">
                    <div id="lang">
                        <ul class="langs">
                            ${obj.card_list.map((elem) => `<li class="card-list-tags">${elem}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="pop-button-div">
                     
                    <a href ='${obj.live}' type="button" class="see-project pop-button">
                    See Live
                    <img src="./images/g.png" alt=""see live icon">
                  </a>
                      
                  <a href ='${obj.source}' type="button" class="see-project pop-button">
                  See Source
                   <img src="./images/h.png" alt="">
                </a>
                    </div>
                </div>
                <div id ="mobile-popup-langs"class="popup-langs">
                    <div id="lang" style= "height: 24px;">
                        <ul class="langs">
                          ${obj.card_list.map((elem) => `<li class="card-list-tags">${elem}</li>`).join('')} 
                        </ul>
                    </div>
                    <div class="pop-button-div">
                       
                          <a href ='${obj.live}' type="button" class="see-project pop-button">
                            See Live
                            <img src="./images/g.png" alt=""see live icon">
                          </a>
                       
                          <a href ='${obj.source}' type="button" class="see-project pop-button">
                           See Source
                            <img src="./images/h.png" alt="">
                         </a>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</div>`;

  document.getElementById('popup-section').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup-section').style.display = 'none';
}
closePopup();

// form-validation

const form = document.getElementById('form');
const email = document.getElementById('email');
const ermsg = document.getElementById('error');

form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    ermsg.style.display = 'block';
    e.preventDefault();
  }
});