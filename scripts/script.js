const faqTitles = document.querySelectorAll(".faq-title");
const faqIcons = document.querySelectorAll(".faq-icon");
const faqAnswers = document.querySelectorAll(".faq-answer");

faqAnswers.forEach((answer) => {
  answer.style.display = "none";
});

faqTitles.forEach((faqTitle, index) => {
  let selected = false;
  faqTitle.addEventListener("click", () => {
    const currentAnswer = faqTitle.nextElementSibling;
    const currentIcon = faqIcons[index];
    if (!selected) {
      currentAnswer.style.display = "block";
      currentIcon.style.backgroundImage =
        "url('../assets/images/icon-minus.svg')";
      selected = true;
    } else {
      currentAnswer.style.display = "none";
      currentIcon.style.backgroundImage =
        "url('../assets/images/icon-plus.svg')";
      selected = false;
    }
  });
});
