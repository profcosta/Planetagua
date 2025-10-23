// ===== CARROSSEL =====
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let slide of slides) slide.style.display = "none";
  slideIndex = (slideIndex + 1) > slides.length ? 1 : slideIndex + 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// Inicia após carregar o DOM
document.addEventListener("DOMContentLoaded", () => {
  if (slides.length) showSlides();
});