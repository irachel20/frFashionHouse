export function matchpass() {
  const firstpassword = document.getElementById("password");
  const secondpassword = document.getElementById("password2");

  if (firstpassword.value !== secondpassword.value) {
    document.getElementById("pass1InSignUpErr").innerText =
      "* password must be same";
    return false;
  } else if (firstpassword.value === "") {
    document.getElementById("pass1InSignUpErr").innerText =
      "* password is required!";
    return false;
  } else {
    document.getElementById("pass1InSignUpErr").innerText =
    "";
    return true;
  }
}

export function validPass() {
  const logInPass = document.getElementById("logInPass");
  if (logInPass.value == null || logInPass.value == "") {
    const passErr = document.getElementById("passInLogInErr");
    passErr.innerText = "* pass is required";
    return false;
  } else {
    const passErr = document.getElementById("passInLogInErr");
    passErr.innerText = "";
    return true;
  }
}
