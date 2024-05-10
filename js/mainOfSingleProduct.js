import { plusBtnHandeler } from "./proNumInSingleProduct/productNumber.js";
import { minusBtnHandeler } from "./proNumInSingleProduct/productNumber.js";

const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");

minusBtn.addEventListener("click", minusBtnHandeler);
plusBtn.addEventListener("click", plusBtnHandeler);
