import { toggleForm } from "./signUpPage/activatingContainer.js";
import {validateFormInLogIn } from "./signUpPage/formValidation.js";
import {validateFormInSignUp } from "./signUpPage/formValidation.js";

const signBtns = document.querySelectorAll('#sign');
const submitSignUp = document.getElementById('submitSignUp');
const submitLogIn = document.getElementById('submitLogIn')

signBtns.forEach(element => {
  element.addEventListener('click',toggleForm)
});

submitLogIn.addEventListener('click',validateFormInLogIn);
submitSignUp.addEventListener('click',validateFormInSignUp);

