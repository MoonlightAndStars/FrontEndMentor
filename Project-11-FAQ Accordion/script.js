const questionsContainer = document.querySelector(".questions");

questionsContainer.addEventListener("click", (e) => {
  const toggleBtn = e.target.closest(".toggle-btn");
  if (!toggleBtn) return;

  const question = toggleBtn.closest(".question");
  const answer = question.querySelector(".answer");
  const isActive = answer.classList.contains("active")
  document
    .querySelectorAll(".answer")
    .forEach((ans) => ans.classList.remove("active"));
  document
    .querySelectorAll(".toggle-btn")
    .forEach((btn) => btn.classList.remove("active"));

    if(isActive) return;

  answer.classList.add("active");
  toggleBtn.classList.add("active");
});
