let startBtn = document.getElementById("start");
/*Add event listener to generate button*/
startBtn.addEventListener("click", startQuiz);

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


/*block questions until submit button or end of quiz*/

var firstQuestion = true;
var nextQuestion = true;

if (firstQuestion === true) {
  console.log("Correct!");
  else {
    console.log("Try Again") 

  }
}
