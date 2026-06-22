$(document).ready(function () {

    $("#show").click(function () {
        $("#guide").collapse('show');
    });

        $("#hide").click(function () {
        $("#guide").collapse('hide');
    });

});

const form = document.getElementById("Register");

if (form) {
    form.addEventListener("submit", validateRegister);
}

function validateRegister(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let phone = document.getElementById("phone").value;
    let tech = document.getElementById("tech").value;

    let genderInput = document.querySelector('input[name="gender"]:checked');
    let gender = genderInput ? genderInput.value : "";

    if (name === "" || email === "" || password === "" || phone === "" || gender === "" || tech === "") {
        alert("Please fill in all fields.");
        return;
    }
    alert("Registration successful!");
    
}