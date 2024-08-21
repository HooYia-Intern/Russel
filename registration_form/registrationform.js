
function validating() {
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let Cpassword = document.getElementById("Cpassword").value;
    let number = document.getElementById("telephone").value;
    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");
    let CpassError = document.getElementById("Cpassword-error");
    let numberError = document.getElementById("telephone-error");
    let move = true;
}

// validating username
function checkname() {
    if (name.trim() === "") {
        nameError.textContent = "user name required";
        nameError.style.display = "block";
        move = false;
    } else {
        nameError.style.display = "none";
        move = true;
    }
}

// validating email
function checkemail() {
    if (email.trim() === "") {
        emailError.textContent = "email required";
        move = false;
    } else if (!ValidateEmail(email)) {
        emailError.textContent = "valid email required";
        emailError.style.display = "block";
        move = false;
    } else {
        emailError.style.display = "none";
        move = true;
    }
}

// validating password
function checkpass() {
    if (password.trim() === "") {
        passwordError.textContent = "enter a password";
        passwordError.style.display = "block";
        move = false;
    } else if (password.length !== 8) {
        passwordError.textContent = "password must be 8 characters long";
        passwordError.style.display = "block";
        move = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(password)) {
        console.log("your password is invalid try again");
        move = false;
    } else {
        passwordError.style.display = "none";
        move = true;
    }
}

// revalidating password
function checkpass2() {
    if (Cpassword.trim() !== password) {
        CpassError.textContent = "password does not match";
        CpassError.style.display = "block";
        move = false;
    } else {
        CpassError.style.display = "none";
        move = true;
    }
}

// validating number
function checknum() {
    if (number.length !== 9) {
        numError.textContent = "number is invalid";
        numError.style.display = "block";
        move = false;
    } else {
        numError.style.display = "none";
        move = true;
    }
}
// submit function
 function submit (){
if (move){
    //form 
    console.log("form submitted successfully");
}
    else{
        console.log("please check your informations correctly");

    }


    }
 
// calling functions
submit();
validating();
checkname();
checkemail();
checkpass();
checkpass2();
checknum();
