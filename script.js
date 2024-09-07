const form = document.getElementById("contact-form");

form.addEventListener("focusout", (event) => {
    event.target.required = true;
});