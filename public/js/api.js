//Variables to get category and difficulty data from localStorage.
const savedCategory = localStorage.getItem('category');
const savedDifficulty = localStorage.getItem('difficulty');

let apiUrl = `https://opentdb.com/api.php?amount=10&category=${savedCategory}&difficulty=${savedDifficulty}&type=multiple`;


//algorithm to randomly shuffle arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//

  
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      //puts question in the dom.
      document.querySelector('.questions p').innerHTML = data.results[0].question
        
      //shuffles array of answers.
      let answerArr = [data.results[0].correct_answer, data.results[0].incorrect_answers[0], data.results[0].incorrect_answers[1], data.results[0].incorrect_answers[2]]
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