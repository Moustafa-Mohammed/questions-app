let questionCount = 0;

const options = document.querySelector("#options");

let score = 0;

document.addEventListener("DOMContentLoaded", () => {
  loadQuestions();
  loadOptions();
  loadScore();

  document.querySelector(".btn-next").onclick = () => {
    loadNextQuestion();
  };

  document.querySelector(".btn-reset").onclick = () => {
    resetQuestions();
  };
});

const loadQuestions = () => {
  document.querySelector("#question").innerHTML =
    questions[questionCount].question;
};

const loadScore = () => {
  document.querySelector("#score").innerHTML = `${score} of ${questionCount}`;
};

const loadOptions = () =>
  questions[questionCount].options.forEach((option) => {
    options.innerHTML += `<button class="option btn">${option}</button>`;
    document.querySelectorAll(".option").forEach(
      (btn) =>
        (btn.onclick = () => {
          document.querySelector(".btn-next").removeAttribute("disabled");
          if (btn.textContent === questions[questionCount].answer) {
            score += 1;
            btn.classList.add("right");
            document.querySelector(
              "#question"
            ).innerHTML = `${btn.textContent} is right. Click next to continue`;
          } else {
            btn.classList.add("wrong");
            document.querySelector(
              "#question"
            ).innerHTML = `${btn.textContent} is wrong. Click next to continue`;
          }
        })
    );
  });

const loadNextQuestion = () => {
  document.querySelector(".btn-next").setAttribute("disabled", "");
  questionCount++;
  console.log(questionCount);
  loadScore();
  if (questionCount < questions.length) {
    loadQuestions();
    options.innerHTML = "";
    loadOptions();
  } else {
    document.querySelector(
      "#question"
    ).innerHTML = `Congratulations! You completed the challenge. Your score is ${score} of ${questionCount}`;
  }
};

const resetQuestions = () => {
  questionCount = 0;
  score = 0;
  loadQuestions();
  options.innerHTML = "";
  loadOptions();
};
