//////////////////////sliders homepage//////////////////////
var slidesSlider = document.querySelectorAll('#slides .slide');
var currentSlides = 0;
var slideInterval = setInterval(nextSlide, 5000);
var controls = document.querySelectorAll('.controls');
var next = document.getElementById('next');
var previous = document.getElementById('previous');
next.onclick = function(){
    nextSlide();  
}
previous.onclick = function(){
    previousSlide();
} 

function nextSlide(){
    goToSlide(currentSlides+1);
}
function previousSlide(){
    goToSlide(currentSlides-1);
}
function goToSlide(n){
    slidesSlider[currentSlides].className = 'slide';
    currentSlides = (n+slidesSlider.length)%slidesSlider.length;
    slidesSlider[currentSlides].className = 'slide showing';
}