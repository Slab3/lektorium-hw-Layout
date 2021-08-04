const email = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");
const form = document.getElementById("form").addEventListener('submit', function (e) {
  e.preventDefault();
  onSubmit();
});

// fields for errors
const errorEmail = document.getElementById("errorEmail");
const errorPass = document.getElementById("errorPass");

const emailRule = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

function onSubmit() {
  if (emailRule.test(email.value)) {
    email.classList.remove('error');
    errorEmail.innerText = null;
  } else {
    email.classList.add('error');
    return errorEmail.innerText = "Not correct email!";
  }

  if (passwordRule.test(password.value)){
    email.classList.remove('error');
    errorPass.innerText = null;
  } else {
    password.classList.add('error');
    return errorPass.innerText = "Sorry! Your password must contain at least 8 characters, one capital and small letter and one number!";
  }

  // if the execution of the function was not terminated by "return", the data is correct, and we can send
  // a request to "log in"
  // after tests send data ...
  window.location.reload()
}

