const catagory = document.getElementById('all-catagory');
let numbar = 0;

function tabbar(){
    numbar += 1;
    if (numbar % 2 == 0){
        catagory.style.display = "none";
    }else{
        catagory.style.display = "flex";
    catagory.style.flexDirection = "column";
    }
}

var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var currentSlide = 0;
var slideInterval;

function startSlide() {
  slideInterval = setInterval(nextSlide, 8000);
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].style.display = 'none';
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
  dots[currentSlide].classList.add('active');
}

var nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click', nextSlide);

var prevBtn = document.querySelector('.prev');
prevBtn.addEventListener('click', prevSlide);

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function() {
    var clickedIndex = Array.from(dots).indexOf(this);
    goToSlide(clickedIndex);
  });
}

window.onload = function() {
  slides[currentSlide].style.display = 'block';
  dots[currentSlide].classList.add('active');
};