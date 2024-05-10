const productNumber = document.getElementById("productNumber");

export function minusBtnHandeler() {
  if (+productNumber.value === 0) {
  +productNumber.value === 0;
  } else {
    +productNumber.value--;
  }
}

export function plusBtnHandeler() {
  +productNumber.value++;
}
