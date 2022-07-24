const form = document.getElementById("form");
const fullName = document.getElementById("name");
const gender = document.getElementById("gender");
const birthday = document.getElementById("birthday");
const nic = document.getElementById("nic");
const address = document.getElementById("address");
const telephone = document.getElementById("telephone");
const zscore = document.getElementById("zscore");
const small1 = document.getElementById("small1");

form.addEventListener("submit", (e) => {
  e.preventDefault(e);

  validateForm();
});

function validateForm() {
  setError(fullName);
  checkTextOnly(fullName);

  setError(gender);
  setError(birthday);

  setError(nic);
  checkNumbersOnly(nic);

  setError(address);

  setError(telephone);
  checkNumbersOnly(telephone);
  checkTenNumbers(telephone);

  setError(zscore);
  checkNumbersOnly(zscore);
}

//function to check wheather the input field empty or not
function setError(input) {
  if (input.value == "") {
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "green";
  }
}

//function to check wheather the input filed has numbers or not
function checkTextOnly(input) {
  const word = input.value;

  var letter = /^[A-Za-z]+$/;

  if (!word.match(letter)) {
    input.style.borderColor = "red";
  }
}

//function to check only numbers
function checkNumbersOnly(input) {
  const word = input.value;

  var numbers = /^[0-9]/;

  if (!word.match(numbers)) {
    input.style.borderColor = "red";
  }
}

//function to check tp number 10 digits
function checkTenNumbers(input) {
  const number = input.value;

  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  if (number.length > 10 || number.length < 10) {
    input.style.borderColor = "red";
    small.innerText= 'enter a valid number';
    small.style.visibility = 'visible';
  } else {
    input.style.borderColor = "green";
  }
}
