import { showSlides } from "./sliderInHeader/slider.js";

import { aboutUsInHeaderHandeler } from "./aboutUsAndContactUsHandeler/aboutAndContact.js";
import { contactInHeaderHandeler } from "./aboutUsAndContactUsHandeler/aboutAndContact.js";

showSlides();

const aboutUsInHeader = document.getElementById("aboutUsInHeader");
const contactInHeader = document.getElementById("contactInHeader");

aboutUsInHeader.addEventListener("click", aboutUsInHeaderHandeler);
contactInHeader.addEventListener("click", contactInHeaderHandeler);

const cards = document.querySelectorAll(".center");

cards.forEach(element => {
    element.addEventListener('click',(e)=>{
        // e.preventDefault()
        console.log(element)
    })
});