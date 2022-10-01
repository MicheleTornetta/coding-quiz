//The Array of questions and answers

const questions = [
  {
    question:
      "<h4>What is the difference between a span tag and a div tag?</h4>",
    answers: [
      "A div tag divides a block; while a span tag includes multiple sections in the block.",
      "A div tag is used for block-level elements; while a span tag is used for inline elements.",
      "A div tag does not support the align attribute; while a span tag does support the align attribute.",
    ],
    correctAnswer: 1,
  },
  {
    question: "<h4>What is the definition of a DOM?</h4>",
    answers: [
      "It is a data optimization management system.",
      "It is a domain orientation management system.",
      "It is a document object model.",
    ],
    correctAnswer: 2,
  },
  {
    question: "<h4>What is the best understanding of an API?</h4>",
    answers: [
      "An API helps two different programs to communicate with each other.",
      "An Application Programming Internode that allows the user input data directly into the program.",
      "Academic Programs International allows learning software to communicate internationally.",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "<h4>When building a Web Application what are some things you should consider?</h4>",
    answers: [
      "What company will host the domain?",
      "What will the design look like and will it be responsive?",
      "Is the font being used popular?",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "<h4>In CSS, how would you add padding to the bottom of an element?</h4>",
    answers: [
      "padding: 20px;",
      "padding: 0px, 0px, 0px, 10px;",
      "padding: 0 0 10px 0;",
    ],
    correctAnswer: 2,
  },
];

//storage of current questions

let currentQuestion;
let correctAnswer;
let clock;
let currentIndex;

//hides the quiz div and shows the start menu div
function showStartMenu() {
  document.getElementById("startMenu").classList.remove("hide");
  document.getElementById("quizform").classList.add("hide");
}

//hides the start menu div and shows the quiz div
function showQuiz() {
  document.getElementById("quizform").classList.remove("hide");
  document.getElementById("startMenu").classList.add("hide");
}

//to start the questions on same click as timer
function applyQuestion(questionIndex) {
  currentQuestion = questions[questionIndex];
  let answerText = makeAnswerList(currentQuestion.answers);

  //To update the html
  document.getElementById("question").innerHTML = currentQuestion.question;
  document.getElementById("answers").innerHTML = answerText;
}

//End of game functions
function celebrateWin() {
  alert("Congratulations!  You've won!");
}

//put the player's initials and score on the left bottom of the html page
function displayScores() {
  let scores = getScores();
  let scoresHtml = "";
  for (let i = 0; i < scores.length; i++) {
    scoresHtml +=
      "<li>" + scores[i].initials + ":  " + scores[i].value + "</li>";
  }
  document.getElementById("scoreResults").innerHTML = scoresHtml;
}
//resets the clock
function stopClock() {
  clearInterval(interval);
}

//once player wins, will multiply the amount of time left on the clock to calculate the score and open the type initials field
function calculateScore() {
  let score = clock * 5;
  let initials = prompt("Type your initials here!");
  saveScore({
    value: score,
    initials: initials,
  });
}
//save the score and turn it into an aray
function getScores() {
  let scores = localStorage.getItem("savedScores");
  if (scores === null) {
    scores = [];
  } else {
    scores = JSON.parse(scores); //turn it back into an array
  }
  return scores;
}

function saveScore(score) {
  let currentScores = getScores();
  currentScores.push(score);
  localStorage.setItem("savedScores", JSON.stringify(currentScores)); //turns it into a string
}

//run the above functions when game is over
function winGame() {
  stopClock();
  celebrateWin();
  calculateScore();
  displayScores();
  showStartMenu();
}

//verify if correct answer and move on or wrong answer and STILL NEED TO subtract time
function submitAnswer(answerIndex) {
  if (answerIndex === currentQuestion.correctAnswer) {
    alert("Correct!");
    clock += 5; //adds 5 sectons to the clock which will increase player's score
    currentIndex += 1;
    if (currentIndex === questions.length) {
      winGame();
    } else {
      applyQuestion(currentIndex);
    }
  } else {
    clock -= 20;
    alert("Try again!");
  }
}

// Below is to populate the answer options
//function that can be used anywhere you want to turn an array into a text in a list
function makeAnswerList(answerArray) {
  let answerlist = "";

  for (i = 0; i < answerArray.length; i++) {
    //submits the answer and tells which answer they chose
    answerlist +=
      "<li><button onclick='submitAnswer(" +
      i +
      ")'>" +
      answerArray[i] +
      "</button></li>";
  }
  return answerlist;
}
// Countdown Clock - see readme for credits

function start() {
  showQuiz();

  clock = 120;
  console.log("clock");
  currentIndex = 0;

  //Timer to start the timer on click
  interval = setInterval(function () {
    clock -= 1;
    let minutes = Math.floor(clock / 60);
    let seconds = clock % 60;
    if (seconds < 10) {
      document.getElementById("clock").innerHTML = minutes + ":0" + seconds;
    } else {
      document.getElementById("clock").innerHTML = minutes + ":" + seconds;
    }

    if (clock <= -1) {
      clearInterval(interval);
      document.getElementById("clock").innerHTML = "Done";
      // or...
      alert("Game Over. Try again!");
      showStartMenu();
    }
  }, 1000);

  //calls the function = runs the code inside
  applyQuestion(currentIndex);
}
