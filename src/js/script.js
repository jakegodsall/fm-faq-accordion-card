// query selector
const questions = document.querySelectorAll(".question-answer");

questions.forEach(function (question) {
  const btn = question.firstElementChild.lastElementChild;

  btn.addEventListener("click", function () {
    questions.forEach(function (question) {
      if (question.classList.contains("active")) {
        question.classList.remove("active");
      }
    });
    const answer = btn.parentNode.nextElementSibling;
    question.classList.add("active");

    // Set height of element
  });
});
