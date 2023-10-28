const accordianButtons = document.querySelectorAll(".question__top");
const accordianquestions = document.querySelectorAll(".question");

for (const question of accordianButtons) {
  question.addEventListener("click", () => {
    const activeQues = document.querySelector(".question.active");

    if (activeQues && activeQues !== question.closest(".question")) {
      activeQues.classList.toggle("active");
      activeQues.lastChild.style.maxHeight = 0;
    }
    const textContent = question.nextElementSibling;

    question.closest(".question").classList.toggle("active");
    if (question.closest(".question").classList.contains("active")) {
      textContent.style.maxHeight = `${textContent.scrollHeight}px`;
    } else {
      textContent.style.maxHeight = 0;
    }
  });
}
