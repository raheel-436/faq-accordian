const faqTitles = document.querySelectorAll(".faq-title");
const faqIcons = document.querySelectorAll(".faq-icon");
const faqAnswers = document.querySelectorAll(".faq-answer");

faqAnswers.forEach((answer) => {
  answer.style.display = "none";
});

faqTitles.forEach((faqTitle) => {
  let selected = false;
  faqTitle.addEventListener("click", () => {
    const currentAnswer = faqTitle.nextElementSibling;
    if (!selected) {
      currentAnswer.style.display = "block";
      selected = true;
    } else {
      currentAnswer.style.display = "none";
      selected = false;
    }
  });
});
