// store correct answers from value property
const correctAnswers = ["C", "B", "A", "C", "B"];

const form = document.querySelector(".quiz-form");
const resultSection = document.querySelector(".result");

const modal = document.querySelector(".modal-wrapper");
const modal_cancel = document.querySelector(".cancel");

// event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // create user score based on answers
  let score = 0;
  const points = 100 / correctAnswers.length;

  // gets user's answers
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

  // compare user answers with correct answers
  userAnswers.forEach(function (answer, index) {
    // check if user's answer matches the correct answer
    if (answer === correctAnswers[index]) {
      score += points;

      // select correct radio button
      currentQuestion = index + 1;
      let correctAnswer = document.querySelector('[name="q' + currentQuestion + '"][value="' + answer + '"]');

      // select parent of correct radio button
      answerContainer = correctAnswer.parentElement;

      const successIcon = document.createElement("i");
      successIcon.classList.add("fas", "fa-check-circle", "correct");

      // display success icon next to the correct answer
      answerContainer.append(successIcon);
    }
  });

  // show score on the page:
  setTimeout(() => {
    // scroll to the top on submit
    window.scrollTo(0, 0);
  }, 200);

  // display results section
  resultSection.classList.remove("d-none");

  // animate the score
  let count = 0;
  const timer = setInterval(() => {
    resultSection.querySelector("span").textContent = `${count}%`;
    count++;
    if (count > score) {
      clearInterval(timer);
    }
  }, 30);

  // display modal after 4 secs
  setTimeout(() => {
    modal.classList.remove("d-none");
  }, 4000);
});

// hide modal
modal_cancel.addEventListener("click", () => {
  modal.classList.add("d-none");
});
