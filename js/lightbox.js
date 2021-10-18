
// ***************************event lightbox atau modal card popup***************************
// Open the Modal
function openModal() {
  document.getElementById("artikel-popup").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("artikel-popup").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// controls navigasi thumbnail/card
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("konten-artikel");
  var dots = document.getElementsByClassName("img-artikel");
  var captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// *************************** end event lightbox atau modal card popup***************************
