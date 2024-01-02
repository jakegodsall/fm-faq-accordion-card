const questions = document.querySelectorAll(".question-answer");

questions.forEach(function (question) {
  question.addEventListener("click", function () {
    if (question.classList.contains("active")) {
      question.classList.remove("active");
    } else {
      questions.forEach(function (otherQuestion) {
        if (otherQuestion.classList.contains("active")) {
          otherQuestion.classList.remove("active");
        }
      });
      question.classList.add("active");
    }
  });
});
