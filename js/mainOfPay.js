window.onload = function () {
  const name = document.getElementById("name");
  const cardnumber = document.getElementById("cardnumber");
  const expirationdate = document.getElementById("expirationdate");
  const securitycode = document.getElementById("securitycode");
  const output = document.getElementById("output");
  const ccicon = document.getElementById("ccicon");
  const ccsingle = document.getElementById("ccsingle");

  document.querySelector(".preload").classList.remove("preload");
  document.querySelector(".creditcard").addEventListener("click", function () {
    if (this.classList.contains("flipped")) {
      this.classList.remove("flipped");
    } else {
      this.classList.add("flipped");
    }
  });

  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      document.getElementById("svgname").innerHTML = "John Doe";
      document.getElementById("svgnameback").innerHTML = "John Doe";
    } else {
      document.getElementById("svgname").innerHTML = this.value;
      document.getElementById("svgnameback").innerHTML = this.value;
    }
  });

  name.addEventListener("focus", function () {
    document.querySelector(".creditcard").classList.remove("flipped");
  });

  cardnumber.addEventListener("focus", function () {
    document.querySelector(".creditcard").classList.remove("flipped");
  });

  expirationdate.addEventListener("focus", function () {
    document.querySelector(".creditcard").classList.remove("flipped");
  });

  securitycode.addEventListener("focus", function () {
    document.querySelector(".creditcard").classList.add("flipped");
  });
};

cardnumber.addEventListener("input", () => {
  const svgNumber = document.getElementById("svgnumber");
  svgNumber.innerHTML = cardnumber.value;
});

securitycode.addEventListener("click", () => {
  const svgsecurity = document.getElementById("svgsecurity");
  const r1 = Math.floor(Math.random() * 1000);
  svgsecurity.innerHTML = r1;
});

expirationdate.addEventListener("input", () => {
  const svgexpire = document.getElementById("svgexpire");
  console.log(svgexpire.innerHTML);
  svgexpire.innerHTML = expirationdate.value ;
});
