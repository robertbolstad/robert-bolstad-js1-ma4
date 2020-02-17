
const form = document.getElementById("contactForm");

form.addEventListener("submit", validateForm);


function validateForm(event) {

    event.preventDefault();

    const firstName = document.getElementById("firstName");
    const firstNameError = document.getElementById("firstNameError");
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
}

function checkInputLength(value) {

    const trimmedValue = value.trim();

    if (trimmedValue.length >= 2) {
        return true;
    } else {
        return false;
    }
}
