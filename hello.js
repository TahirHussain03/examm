document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const formSection = document.getElementById("formSection");
    const displaySection = document.getElementById("displaySection");
    const displayUsername = document.getElementById("displayUsername");
    const displayEmail = document.getElementById("displayEmail");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;

        // Update the display section with user details
        displayUsername.textContent = username;
        displayEmail.textContent = email;

        // After successful submission, hide the form and display the success section.
        formSection.style.display = "none";
        displaySection.style.display = "block";
    });
});