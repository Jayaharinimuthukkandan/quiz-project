const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'which of the following is not an olympics sport?',
    answers:[
     { text: 'Football', correct: false },
     { text: 'Basketball', correct: false },
     { text: 'Gymnastics', correct: false },
     { text: 'Bocceball', correct: true }
  ]
},
{
  question: 'what is the term for the largest common factor of 30 and 132?',
  answers:[
    { text: '4', correct: false },
    { text: '5', correct: false },
    { text: '6', correct: true },
    { text: '2', correct: false }
    ]
},
{
  question:'what is the gc() method?',
  answers:[
    { text: 'public static void', correct: false },
    { text: 'public static void gc()', correct: true },
    { text: 'public static void gc', correct: false },
    { text: 'public static void main', correct: false }
    ]
},
  {
  question: 'which sport was orginally known as minonette?',
  answers:[
    { text: 'Vollyball', correct: true },
    { text: 'football', correct: false },
    { text: 'Basketball', correct: false }
  ]
},
{
  question: 'what is the binary number of 10?',
  answers:[
    { text: '1011', correct: false },
    { text: '1111', correct: false },
    { text: '1010', correct: true },
    { text: '1000', correct: false }
    ]
},
  {
    question: 'what is the output of following python code: print('Hello'[::-1]?',
    answers:[
  { text: 'Hello', correct: false },
  { text: 'olleH', correct: true },
  { text: 'elloH', correct: false },
  { text: 'holle', correct: false }
  ]
},
  {
    question: 'what game is called  sport of king?',
    answers:[
      { text: 'chess', correct: true },
      { text: 'tennis', correct: false },
      { text: 'batmiton', correct: false },
      { text: 'carrom', correct: false }
      ]
  },
   {
    question: 'X+5=8 find the x?',
     answers:[
       { text: '3', correct: true },
       { text: '1', correct: false },
       { text: '7', correct: false }
       ]
   },
     {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]
