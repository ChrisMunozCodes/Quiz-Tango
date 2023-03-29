//on click of the button with the class of .easy, this line of code will execute the function 'selectEasy'.
document.querySelector('.easy').addEventListener('click', selectEasy);

//on click of the button with the class of .medium, this line of code will execute the function 'selectMedium'.
document.querySelector('.medium').addEventListener('click', selectMedium);

//on click of the button with the class of .hard, this line of code will execute the function 'selectHard'.
document.querySelector('.hard').addEventListener('click', selectHard);

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

const easyBtn = document.querySelector('.easy button');
const mediumBtn = document.querySelector('.medium button');
const hardBtn = document.querySelector('.hard button');

easyBtn.addEventListener('click', function() {
  this.parentNode.classList.add('selected');
  mediumBtn.parentNode.classList.remove('selected');
  hardBtn.parentNode.classList.remove('selected');
});

mediumBtn.addEventListener('click', function() {
  this.parentNode.classList.add('selected');
  easyBtn.parentNode.classList.remove('selected');
  hardBtn.parentNode.classList.remove('selected');
});

hardBtn.addEventListener('click', function() {
  this.parentNode.classList.add('selected');
  easyBtn.parentNode.classList.remove('selected');
  mediumBtn.parentNode.classList.remove('selected');
});



//** Tango button, click style ** //
document.querySelector('.tango-button button').addEventListener('click', () => {
    const tangoButton = document.querySelector('.tango-button button');

    tangoButton.classList.add('clicked');

  setTimeout(() => {
    tangoButton.classList.remove('clicked');
  }, 200);
});
//**  **/



//** End of white button select section ** //