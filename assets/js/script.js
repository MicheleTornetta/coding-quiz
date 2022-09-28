//The Array of questions and answers 

const questions = [
  {
    question: "What is the difference between a span tag and a div tag?",
    answers: [
      "A div tag divides a block; while a span tag includes multiple multiple sections in the block.",
      "A div tag is used for block-level elements; while a span tag is used for inline elements.",
      "A div tag does not support the align attribute; while a span tag does support the align attribute.",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the definition of a DOM?",
    answers: [
      "It is a data optimization management system.",
      "It is a domain orientation management system.",
      "It is a document object model.",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the best understanding of an API?",
    answers: [
      "An API helps two different programs to communicate with each other.",
      "An Application Programming Internode that allows the user input data directly into the program.",
      "Academic Programs International allows learning software to communicate internationally.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "When building a Web Application what are some things you should consider?",
    answers: [
      "What company will host the domain?",
      "What will the design look like and will it be responsive?",
      "Is the font being used popular?",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is a JavaScript method?",
    answers: [
      "A method can be a function listed inside an object.",
      "A method is a way to add a string.",
      "A method is a property of logical operators.",
    ],
    correctAnswer: 0,
  },
  {
    question: "In CSS, how would you add padding to the bottom of an element?",
    answers: [
      "padding: 20px;",
      "padding: 0px, 0px, 0px, 10px;",
      "padding: 0 0 10px 0;",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "What is a preferred tool that can be utilized to debug code errors?",
    answers: [
      "A fly swatter.",
      "Inspect element in the brower's dev tools.",
      "View page source in the brower's dev tools.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "What are the 5 elements used in HTML5 that supports different media types?",
    answers: [
      "audio, video, source, embed, track.",
      "audio, video, media, source, mp3.",
      "flack, mp3, flv, mov, effects.",
    ],
    correctAnswer: 0,
  },
];

//Set up of random array for question to equal 5
let indices = [];
function fillIndices () {
  for (var i = 0; i < questions.length; i++) {
    indices.push(i)// add an item to the end an an array
  }
  while (indices.splice(index)) {
    
  }
}

//storage of current question

let currentQuestion;
let clock;

//verify if correct answer and move on or wrong answer and subtract time
function submitAnswer(answerIndex) {
  if (answerIndex === currentQuestion.correctAnswer) {
    alert("Correct!");
    
  }
  else {
    clock -= 10; 
    alert("Try again!");
  }
}

// Below is to populate the answer options
//function that can be used anywhere you want to turn an array into a text in a list
function makeAnswerList(answerArray) {
  let answerlist = "";

  for (i = 0; i < answerArray.length; i ++) {
    //submits the answer and tells which answer they chose
    answerlist += "<li><button onclick='submitAnswer("+ i +")'>" + answerArray[i] + "</button></li>";
  }
  return answerlist;
}
// Countdown Clock - see readme for credits

function start() {


  //clock
  console.log("clock");
  let clock = 30; 
  //Timer to start the timer on click
  let interval = setInterval(function () {
    clock -= 1;
    document.getElementById("clock").innerHTML = clock;
    if (clock === -1) {
      clearInterval(interval);
      document.getElementById("clock").innerHTML = "Done";
      // or...
      alert("Try again!");
    }
  }, 1000);

  //to start the questions on same click as timer
  function quizform() {
    currentQuestion = questions[0];
    let answerText = makeAnswerList(currentQuestion.answers);
    console.log(answerText);
    //To update the html
    document.getElementById("question").innerHTML = currentQuestion.question;
    document.getElementById("answers").innerHTML = answerText;
  }
  //calls the function = runs the code inside
  quizform();

}

   

/* Multiple choice questions with one correct anaser - each question is contained within the main array and the answers in an array as well*/



// stop page from refreshing when button pushed 
/*
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
} 
-------------------------------------*/
//capture keyboard text and log
/*
var typefaceEl = document.querySelector('#typeface');
var clearEl = document.querySelector('#clear');
var h1El = document.querySelector('#h1');
var h2El = document.querySelector('#h2');
var h3El = document.querySelector('#h3');
var pEl = document.querySelector('#p');
var textAreaEl = document.querySelector('#textarea');

var elements = [h1El, h2El, h3El, pEl];

var typeface;

// Change event
typefaceEl.addEventListener('change', function (event) {
  event.preventDefault();
  typeface = typefaceEl.value;
  document.querySelector('.container').style.fontFamily = typeface;
});

// Keydown event
textAreaEl.addEventListener('keydown', function (event) {
  // Access value of pressed key with key property
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
  );
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

clearEl.addEventListener('click', function (event) {
  event.preventDefault();
  textAreaEl.value = '';

  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
});
------------------------------------------------
*/



/*let startBtn = document.getElementById("start");
/*Add event listener to generate button
startBtn.addEventListener("click", startQuiz);*/

/* Get HTML Elements

const startButton = document.getElementById("start");
const quizBox = document.getElementById("quizform");
const submitButton = document.getElementById("score");
const resultsBox = document.getElementById("results");
const submitbtn = document.getElementById("submit");
const countdownClock = document.getElementById("clock");

function buildQuiz(){

}

function showResults(){

}

if



while

//display first question right away








function startBtn(duration, display) {
  var timer = 60
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
};


/*block questions until submit button or end of quiz

var firstQuestion = true;
var nextQuestion = true;

if (firstQuestion === true) {
  console.log("Correct!");
  else {
    console.log("Try Again") 

  }
}*/
