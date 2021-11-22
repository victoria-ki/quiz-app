const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  checkUsername(username);
  checkEmail(email);
  checkPassword(password);
  checkConfirmPassword(password, confirmPassword);
}

// check for input fields to have proper values
function checkUsername(username) {
  const usernameValue = username.value.trim();
  if (isEmpty(usernameValue)) {
    // add error class
    displayErrorFor(username, "Enter your name");
  } else {
    // add success class
    displaySuccessFor(username);
  }
}

function checkEmail(email) {
  const emailValue = email.value.trim();

  if (isEmpty(emailValue)) {
    displayErrorFor(email, "Enter your email");
    // email validation
  } else if (!isValidEmail(emailValue)) {
    displayErrorFor(email, "Not a valid email");
  } else {
    displaySuccessFor(email);
  }
}

function checkPassword(password) {
  const passwordValue = password.value.trim();
  if (!isValidLengthOf(passwordValue)) {
    displayErrorFor(password, "Password must be at least 6 characters long");
  } else {
    displaySuccessFor(password);
  }
}

function checkConfirmPassword(password, confirmPassword) {
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  if (!isValidLengthOf(confirmPasswordValue)) {
    displayErrorFor(confirmPassword, "Password must be at least 6 characters long");
  } else if (!doPasswordsMatch(passwordValue, confirmPasswordValue)) {
    displayErrorFor(confirmPassword, "Passwords don't match");
  } else {
    displaySuccessFor(confirmPassword);
  }
}

function displayErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // add error msg inside the "small" tag
  small.innerText = message;
  // set value of class attribute to "form-control error"
  formControl.className = "form-control error";
}

function displaySuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isValidEmail(value) {
  const regex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return regex.test(value);
}

function isEmpty(value) {
  return value === "";
}

function isValidLengthOf(value) {
  return value.length >= 6;
}

function doPasswordsMatch(pwd1, psd2) {
  return pwd1 === psd2;
}
