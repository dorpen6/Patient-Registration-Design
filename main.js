
const form = document.getElementById("registrationForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    confirmation.style.display = "block";
    form.reset();
});
