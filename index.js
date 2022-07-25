const form = document.getElementById("form");
const fullName = document.getElementById("name");
const gender = document.getElementById("gender");
const birthday = document.getElementById("birthday");
const nic = document.getElementById("nic");
const address = document.getElementById("address");
const telephone = document.getElementById("telephone");
const zscore = document.getElementById("zscore");
const small1 = document.getElementById("small1");
const submitButton = document.getElementById("submitButton");

const course = document.getElementById("course");
const checkboxBio = document.getElementById("checkboxBio");
const checkboxBio2 = checkboxBio;
const checkboxPhysical = document.getElementById("checkboxPhysical");
const checkboxSor = document.getElementById("checkboxSor");
const checkboxCm = document.getElementById("checkboxCm");


form.addEventListener("submit", (e) => {
  e.preventDefault(e);

  validateForm();
});

function enableButton() {
  const submitButton = document.getElementById("submitButton");
  if (
    fullName.value != "" &&
    gender.value != "none" &&
    birthday.value != "" &&
    nic.value != "" &&
    address.value != "" &&
    telephone.value != "" &&
    zscore.value != "" &&
    course.value != "select subject"
  ) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled");
  }
}

fullName.addEventListener("change", enableButton);
gender.addEventListener("change", enableButton);
birthday.addEventListener("change", enableButton);
nic.addEventListener("change", enableButton);
address.addEventListener("change", enableButton);
telephone.addEventListener("change", enableButton);
zscore.addEventListener("change", enableButton);
course.addEventListener("change", enableButton);

//function to validate whether inputs empty or not
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

  setError(course);
}

//function to check whether the input field empty or not
function setError(input) {
  if (input.value == "") {
    input.style.borderColor = "red";
    input.style.backgroundColor = "red";
  } else {
    input.style.borderColor = "green";
  }
}

//function to check whether the input field has numbers or not
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

//function to check telephone number 10 digits
function checkTenNumbers(input) {
  const number = input.value;

  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  if (number.length > 10 || number.length < 10) {
    input.style.borderColor = "red";
    small.innerText = "enter a valid number";
    small.style.visibility = "visible";
  } else {
    input.style.borderColor = "green";
  }
}

//course and subects

function courseRegistration(input) {
  switch (input.value) {
    case "Biological Science":
      checkboxBio.style.display = "block";
      checkboxPhysical.style.display = "none";
      checkboxSor.style.display = "none";
      checkboxCm.style.display = "none";
      break;

    case "Physical science":
      checkboxPhysical.style.display = "block";
      checkboxSor.style.display = "none";
      checkboxCm.style.display = "none";
      checkboxBio.style.display = "none";
      break;

    case "SOR":
      checkboxSor.style.display = "block";
      checkboxCm.style.display = "none";
      checkboxBio.style.display = "none";
      checkboxPhysical.style.display = "none";
      break;

    case "CM":
      checkboxCm.style.display = "block";
      checkboxBio.style.display = "none";
      checkboxPhysical.style.display = "none";
      checkboxSor.style.display = "none";
      break;

    default:
      break;
  }
}

//limit checkbox click
var checks = document.querySelectorAll(".check");
var limit = 5;
for (var i = 0; i < checks.length; i++) {
  checks[i].onclick = selectiveCheck;
  function selectiveCheck(event) {
    var checkedChecks = document.querySelectorAll(".check:checked");
    if (checkedChecks.length >= limit + 1) {
      return false;
    }
  }
}

//Thanking Alert

function thankAlert(){
  alert("Successfully Registered..")
}
