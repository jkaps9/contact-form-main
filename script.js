const form = document.getElementById("contact-form");
const successMessage = document.querySelector(".success-message");

// Form submission handler
form.addEventListener("submit", function (event) {
  event.preventDefault();
  successMessage.classList.add("visible");
  form.reset();
  setTimeout(() => successMessage.classList.remove("visible"), 5000);
});
