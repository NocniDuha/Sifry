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
let pokus = document.getElementById("pokus");

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
  otazka.innerHTML = hadanky[slideIndex-1].otazka;
  odpoved.innerHMTL = hadanky[slideIndex-1].odpoved;
}

// Pridava event listener ke kazde karte
//function addEvent () {
//let karta = document.getElementsByClassName("karta");
//let zk = document.getElementById("zkouska");
//
//for (let i=0; i < hadanky.length; i++) {
//   karta[i].addEventListener('click', function () { //odpoved[i].style.display="block";
//     
//     if (odpoved[i].style.display == "none") {
//          odpoved[i].style.display = "block"} 
//    else {
//          odpoved[i].style.display="none"}
//         });
//       }
//}
