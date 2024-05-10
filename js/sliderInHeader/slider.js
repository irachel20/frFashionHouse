const sliderParent = document.querySelector(".carousel-inner");
const slides = [...sliderParent.children];

var slideIndex = 0;
showSlides();

export function showSlides() {
  var i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
