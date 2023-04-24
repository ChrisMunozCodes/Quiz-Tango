// Check if there is a difficulty setting in localStorage
let storedDifficulty = localStorage.getItem('difficulty');

// If there is no stored difficulty, use 'easy'
let difficulty = storedDifficulty || 'easy';

// If there is no stored difficulty, store 'easy' in localStorage
if (!storedDifficulty) {
  localStorage.setItem('difficulty', 'easy');
}

//if there's already 'difficulty' within storage use that instead. 
if (localStorage.getItem('difficulty')) {
  difficulty = localStorage.getItem('difficulty');
}
//

//Create a category variable for localStorage.
let category;

//if there's already 'category' within storage use that instead. 
if (localStorage.getItem('category')) {
  difficulty = localStorage.getItem('category');
}
//

//query selector variables

//for main page
const easyBtn = document.querySelector('.easy button');
const mediumBtn = document.querySelector('.medium button');
const hardBtn = document.querySelector('.hard button');

//for category page
const general = document.querySelector('#general');
const books = document.querySelector('#books');
const film = document.querySelector('#film');
const music = document.querySelector('#music');
const musicals = document.querySelector('#musicals');
const television = document.querySelector('#television');
const videoGames = document.querySelector('#videoGames');
const science = document.querySelector('#science');
const computers = document.querySelector('#computers');
const math = document.querySelector('#math');
const mythology = document.querySelector('#mythology');
const sports = document.querySelector('#sports');
const geography = document.querySelector('#geography');
const historyVar = document.querySelector('#history');
const politics = document.querySelector('#politics');
const art = document.querySelector('#art');
const celeb = document.querySelector('#celeb');
const animals = document.querySelector('#animals');
const vehicles = document.querySelector('#vehicles');
const comics = document.querySelector('#comics');
//

//if easyBtn exists, on click run the function 'selectEasy'
if (easyBtn) {
  easyBtn.addEventListener('click', selectEasy);
}

//if mediumBtn exists, on click run the function 'selectMedium'
if (mediumBtn) {
  mediumBtn.addEventListener('click', selectMedium);
}

//if hardBtn exists, on click run the function 'selectHard'
if (hardBtn) {
  hardBtn.addEventListener('click', selectHard);
}

//contains two variables, one for storing an element with the .circle-img class, another for storing the h3 within it.
function selectEasy() {
    const circleThatDisplaysDifficulty = document.querySelector('.circle-img')
    const circleText = document.querySelector('.circle-img h3')

    circleThatDisplaysDifficulty.style.backgroundColor = "#627881"
    circleText.textContent = 'Easy'
}

//contains two variables, one for storing an element with the .circle-img class, another for storing the h3 within it.
function selectMedium() {
    const circleThatDisplaysDifficulty = document.querySelector('.circle-img')
    const circleText = document.querySelector('.circle-img h3')

    circleThatDisplaysDifficulty.style.backgroundColor = "#D78F69"
    circleText.textContent = 'Medium'
}

//contains two variables, one for storing an element with the .circle-img class, another for storing the h3 within it.
function selectHard() {
    const circleThatDisplaysDifficulty = document.querySelector('.circle-img')
    const circleText = document.querySelector('.circle-img h3')

    circleThatDisplaysDifficulty.style.backgroundColor = "#BD6378"
    circleText.textContent = 'Hard'
}

// ** White button select feature (Both for the select difficulty and also the 'tango' button) ** //
if (easyBtn) {
  easyBtn.addEventListener('click', function() {
    this.parentNode.classList.add('selected');
    if (mediumBtn) {
      mediumBtn.parentNode.classList.remove('selected');
    }
    if (hardBtn) {
      hardBtn.parentNode.classList.remove('selected');
    }
  });
}

if (mediumBtn) {
  mediumBtn.addEventListener('click', function() {
    this.parentNode.classList.add('selected');
    if (easyBtn) {
      easyBtn.parentNode.classList.remove('selected');
    }
    if (hardBtn) {
      hardBtn.parentNode.classList.remove('selected');
    }
  });
}

if (hardBtn) {
  hardBtn.addEventListener('click', function() {
    this.parentNode.classList.add('selected');
    if (easyBtn) {
      easyBtn.parentNode.classList.remove('selected');
    }
    if (mediumBtn) {
      mediumBtn.parentNode.classList.remove('selected');
    }
  });
}

//** Tango button, click style ** //
const tangoButton = document.querySelector('.tango-button button');
if (tangoButton) {
  tangoButton.addEventListener('click', () => {
    tangoButton.classList.add('clicked');

    setTimeout(() => {
      tangoButton.classList.remove('clicked');
    }, 200);
  });
}
//**  **/
//** End of white button select section ** //

//When difficulty buttons are clicked, update the difficulty variable to the correct difficulty value.
if (easyBtn) {
  easyBtn.addEventListener('click', () => {
    difficulty = 'easy'
    localStorage.setItem('difficulty', difficulty);
    console.log(difficulty)
  });
}

if (mediumBtn) {
  mediumBtn.addEventListener('click', () => {
    difficulty = 'medium'
    localStorage.setItem('difficulty', difficulty);
    console.log(difficulty)
  });
}

if (hardBtn) {
  hardBtn.addEventListener('click', () => {
    difficulty = 'hard'
    localStorage.setItem('difficulty', difficulty);
    console.log(difficulty)
  });
}

// When category buttons are clicked, update the category variable to the correct category value.
if (general) {
  general.addEventListener('click', () => {
    category = '9'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (books) {
  books.addEventListener('click', () => {
    category = '10'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (film) {
  film.addEventListener('click', () => {
    category = '11'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (music) {
  music.addEventListener('click', () => {
    category = '12'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (musicals) {
  musicals.addEventListener('click', () => {
    category = '13'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (television) {
  television.addEventListener('click', () => {
    category = '14'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (videoGames) {
  videoGames.addEventListener('click', () => {
    category = '15'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (science) {
  science.addEventListener('click', () => {
    category = '17'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (computers) {
  computers.addEventListener('click', () => {
    category = '18'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (math) {
  math.addEventListener('click', () => {
    category = '19'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (mythology) {
  mythology.addEventListener('click', () => {
    category = '20'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (sports) {
  sports.addEventListener('click', () => {
    category = '21'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (geography) {
  geography.addEventListener('click', () => {
    category = '22'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (historyVar) {
  historyVar.addEventListener('click', () => {
    category = '23'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (politics) {
  politics.addEventListener('click', () => {
    category = '24'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (art) {
  art.addEventListener('click', () => {
    category = '25'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (celeb) {
  celeb.addEventListener('click', () => {
    category = '26'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (animals) {
  animals.addEventListener('click', () => {
    category = '27'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (vehicles) {
  vehicles.addEventListener('click', () => {
    category = '28'
    localStorage.setItem('category', category);
    console.log(category)
  });
}

if (comics) {
  comics.addEventListener('click', () => {
    category = '29'
    localStorage.setItem('category', category);
    console.log(category)
  });
}
