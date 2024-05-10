import { validPass } from "./passValidation.js";
import { matchpass } from "./passValidation.js";
import { validateemail } from "./emailvalidation.js";

export function validateFormInLogIn(e) {
  e.preventDefault();
  const name = document.getElementById("nameInLogIn");

  if (name.value == null || name.value == "") {
    const nameErr = document.getElementById("nameInLogInErr");
    nameErr.innerText = "* name cant be blank";
    return false;
  } else {
    const nameErr = document.getElementById("nameInLogInErr");
    nameErr.innerText = "";
  }

  validPass();
}

export function validateFormInSignUp(e) {
  e.preventDefault();
  const name = document.getElementById("nameInSignUp");
  if (name.value == null || name.value == "") {
    const nameErr = document.getElementById("nameInSignUpErr");
    nameErr.innerText = "* name cant be blank";
    return false;
  } else {
    const nameErr = document.getElementById("nameInSignUpErr");
    nameErr.innerText = "";
  }

 
  validateemail();

  
  matchpass();
}
