// console.log('hello world'); //works!

let emailInput = document.querySelector("#exampleInputEmail1");
let passwordInput = document.querySelector("#exampleInputPassword1");
let messageDisplay = document.getElementById("message");
let submitBtn = document.querySelector(".btn");
let showEmailInput = document.querySelector("#showemail");
let showPasswordInput = document.querySelector("#showpassword");
let toggle = document.getElementById("exampleCheck1");

let registered = localStorage.getItem("register"); //getting info
displayInput();//calling

function confirmationMessage(type, message) {
    messageDisplay.textContent = message; // will display a message
    messageDisplay.setAttribute("class", type);//will set a class
}

function displayInput() {//getting local storage/retrieving
    showEmailInput.textContent = localStorage.getItem("email");
    showPasswordInput.textContent = localStorage.getItem("password");
}

toggle.addEventListener("click", function (event) {
    event.preventDefault();

    let hidePassword = document.getElementById("exampleInputPassword1");

    if (hidePassword.type === "password") {
        hidePassword.type = "text";
    } else {
        hidePassword.type = "password";
    }
})

submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); //always preventDefault

    //id MUST be the same as html!!!!! null error
    let email = document.querySelector("#exampleInputEmail1").value; //getting value for email and password
    let password = document.querySelector("#exampleInputPassword1").value;

    if (email === '') { //if email is blank
        confirmationMessage("error", "Email cannot be blank.");
    } else if (password === '') {
        confirmationMessage("error", "Password cannot be blank.");
    } else {
        confirmationMessage("success", "Registered Successfully!");

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        displayInput();
    }
})

