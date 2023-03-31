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
      document.querySelector('.choice1').innerHTML = answerArr[0]
      document.querySelector('.choice2').innerHTML = answerArr[1]
      document.querySelector('.choice3').innerHTML = answerArr[2]
      document.querySelector('.choice4').innerHTML = answerArr[3]
    })
    .catch(err => {
      console.log(`error ${err}`)
    }) 


/**** End of API code ****/