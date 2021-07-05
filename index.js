let questionCount = 0;
let correct = 0;
const options = document.querySelector("#options");

document.addEventListener("DOMContentLoaded", () => {
  loadQuestions();
  loadOptions();

  document.querySelector(".btn-next").onclick = () => {
    loadNextQuestion();
  };

  document.querySelector(".btn-previous").onclick = () => {
    loadPreviousQuestion();
  };
});

const loadQuestions = () => {
  document.querySelector("#question").innerHTML =
    questions[questionCount].question;
};

const loadOptions = () =>
  questions[questionCount].options.forEach((option) => {
    options.innerHTML += `<button class="option btn">${option}</button>`;
    document.querySelectorAll(".option").forEach(
      (btn) =>
        (btn.onclick = () => {
          if (btn.textContent === questions[questionCount].answer) {
            btn.classList.add("right");
            console.log(btn.textContent);
            document.querySelector(
              "#question"
            ).innerHTML = `${btn.textContent} is right. click next to continue`;
          } else {
            btn.classList.add("wrong");
            document.querySelector(
              "#question"
            ).innerHTML = `${btn.textContent} is wrong. Try another answer`;
          }
        })
    );
  });

const loadNextQuestion = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    loadQuestions();
    options.innerHTML = "";
    loadOptions();
  }
};

const loadPreviousQuestion = () => {
  if (questionCount > 0) {
    questionCount--;
    loadQuestions();
    options.innerHTML = "";
    loadOptions();
  }
};
