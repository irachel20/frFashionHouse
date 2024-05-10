export function validateemail() {
  const emailOfSignUp = document.getElementById("emailOfSignUp");
  var mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (emailOfSignUp.value.match(mailformat)) {
    document.getElementById("emailInSignUpErr").innerText = "";
    return true;
  } else if (!emailOfSignUp.value) {
    document.getElementById("emailInSignUpErr").innerText =
      "* email is required";
    return false;
  } else {
    document.getElementById("emailInSignUpErr").innerText =
      "* email is not valid";
    return false;
  }
}
