let form = document.querySelector(".signup");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

// Regular expression for password validation
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Password validation
    if (!passwordRegex.test(password.value)) {
        console.log("Invalid password. Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.");
        return;
    }

    console.log("Submitted successfully");
    console.log("Email value:", email.value);
    console.log("Password:", password.value);
});


