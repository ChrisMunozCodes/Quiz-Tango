//Variables to get category, difficulty data from localStorage, and update the question.
const savedCategory = localStorage.getItem('category');
const savedDifficulty = localStorage.getItem('difficulty');

// variable that holds the index of the current question, if an index already exists in localStorage, use that instead.
let currentQuestion = localStorage.getItem('currentQuestion') || -1;
//



let apiUrl = `https://opentdb.com/api.php?amount=10&category=${savedCategory}&difficulty=${savedDifficulty}&type=multiple`;

//Run next question on load, since currentQuestion = -1, the first time this runs it will increment and display the first question aka 0.
window.onload = nextQuestion();

//algorithm to randomly shuffle arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//
function nextQuestion(){
    currentQuestion++


  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        document.querySelector('#questionNumber').innerHTML = `Question: ${currentQuestion + 1}/10`

      //puts question in the dom.
      document.querySelector('.questions p').innerHTML = data.results[currentQuestion].question
        
      //shuffles array of answers.
      let answerArr = [data.results[currentQuestion].correct_answer, data.results[currentQuestion].incorrect_answers[0], data.results[currentQuestion].incorrect_answers[1], data.results[currentQuestion].incorrect_answers[2]]
      answerArr = shuffleArray(answerArr);

      //puts answers in the dom.
      document.querySelector('.choice1 p').innerHTML = answerArr[0]
      document.querySelector('.choice2 p').innerHTML = answerArr[1]
      document.querySelector('.choice3 p').innerHTML = answerArr[2]
      document.querySelector('.choice4 p').innerHTML = answerArr[3]
    })
    .catch(err => {
      console.log(`error ${err}`)
    }) 
}

/**** End of API code ****/

//Those code adds the class 'selected' to whichever button is clicked. This changes the button to white and tracks the users selected answer.
const firstBtn = document.querySelector('.choice1 button');
const secondBtn = document.querySelector('.choice2 button');
const thirdBtn = document.querySelector('.choice3 button');
const fourthBtn = document.querySelector('.choice4 button');

if (firstBtn) {
  firstBtn.addEventListener('click', function() {
    this.classList.add('selected');
    if (secondBtn) {
      secondBtn.classList.remove('selected');
    }
    if (thirdBtn) {
      thirdBtn.classList.remove('selected');
    }
    if (fourthBtn) {
      fourthBtn.classList.remove('selected');
    }
  });
}

if (secondBtn) {
  secondBtn.addEventListener('click', function() {
    this.classList.add('selected');
    if (firstBtn) {
      firstBtn.classList.remove('selected');
    }
    if (thirdBtn) {
      thirdBtn.classList.remove('selected');
    }
    if (fourthBtn) {
      fourthBtn.classList.remove('selected');
    }
  });
}

if (thirdBtn) {
  thirdBtn.addEventListener('click', function() {
    this.classList.add('selected');
    if (firstBtn) {
      firstBtn.classList.remove('selected');
    }
    if (secondBtn) {
      secondBtn.classList.remove('selected');
    }
    if (fourthBtn) {
      fourthBtn.classList.remove('selected');
    }
  });
}

if (fourthBtn) {
  fourthBtn.addEventListener('click', function() {
    this.classList.add('selected');
    if (firstBtn) {
      firstBtn.classList.remove('selected');
    }
    if (secondBtn) {
      secondBtn.classList.remove('selected');
    }
    if (thirdBtn) {
      thirdBtn.classList.remove('selected');
    }
  });
}
//


//** Submit button, click style ** //
const submitButton = document.querySelector('.submit button');
if (submitButton) {
    submitButton.addEventListener('click', () => {
        submitButton.classList.add('clicked');

    setTimeout(() => {
        submitButton.classList.remove('clicked');
    }, 200);
  });
}
//


//timer functionality
//variables that grabs the dom element and sets the time count.
const timer = document.getElementById('timer');
let timeLeft = 60;

// Define timerInterval outside of runTimer
let timerInterval = setInterval(runTimer, 1000);

// runTimer lowers timeLeft by 1 every time it's runned. 
function runTimer() {
  timeLeft--;

  //Time format
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  //concates both minutes and sections and uses padStart to ensure seconds are always displayed as two numbers.
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`
  document.querySelector('.header div:nth-child(2) h2').innerHTML = formattedTime;

  // Update the timer element
  timer.textContent = formattedTime;

  // Stop the timer when timeLeft reaches 0
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    localStorage.setItem('currentQuestion', currentQuestion);
    showWrong();
    nextQuestion();
    timeLeft = 60;
    timerInterval = setInterval(runTimer, 1000);
  }
}

// show wrong answer screen.
function showWrong(){
  window.location.href = 'wrong-answer.html'
}

// show correct answer screen.
function showCorrect(){
  window.location.href = 'correct-answer.html'
}

// wrong and right answer conditions



