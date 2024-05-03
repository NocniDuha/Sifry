let slideIndex = 1;

showSlides(slideIndex);
addEvent();

// Next/previous controls

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let i;
  let slides = document.getElementsByClassName("mySlides");
  let zk = document.getElementById('zkouska');
  let od = document.getElementsByClassName('odpoved');

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  }

// Pridava event listener ke kazde karte
function addEvent () {
let karta = document.getElementsByClassName("karta");
let odpoved = document.getElementsByClassName("odpoved");
let zk = document.getElementById("zkouska");

for (let i=0; i < karta.length; i++) {
   karta[i].addEventListener('click', function () { //odpoved[i].style.display="block";
     
     if (odpoved[i].style.display == "none") {
          odpoved[i].style.display = "block"} 
     else {
          odpoved[i].style.display="none"}
         });
       }
}
