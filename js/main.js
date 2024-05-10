let hadanky = [
  {otazka: "Otázka 1",
   odpoved:"Odpověď 1"},
  {otazka: "Otázka 2",
   odpoved:"Odpověď 2"},
  {otazka: "Otázka 3",
   odpoved:"Odpověď 3"},
  {otazka: "Otázka 4",
   odpoved:"Odpověď 4"}
];

let otazka = document.getElementById("otazka");
let odpoved = document.getElementById("odpoved");
let karta = document.getElementById("karta");

// Carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  if (n > hadanky.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = hadanky.length;}
  otazka.innerText = hadanky[slideIndex-1].otazka;
  odpoved.style.display = "block";
  odpoved.innerText = hadanky[slideIndex-1].odpoved;

  karta.addEventListener('click', function () { 
    odpoved.style.display="block";
    
    if (odpoved.style.display == "none") {
        odpoved.style.display = "block"} 
    else {
          odpoved.style.display="none"}
         });
       }
