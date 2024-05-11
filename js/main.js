let hadanky = [
  {dil:"1. díl",
   tema:"Z cyklu nevšední úmrtí",
    otazka: "Ve 48 si podřezal hrdlo a probodl srdce. KDO je to?",
   odpoved:"Vilém Mrštík"},
  {dil:"2. díl",
   tema:"",
    otazka: "Jako malá dívka zbožňovala domečky pro panenky. Dokázala je zařizovat pidi dekoracemi celé hodiny. Když vyrostla, zbožňovala domy, kupovala je, zařizovala vkusným nábytkem a mnoha dekoracemi. Mohla si to dovolit. KDO je to?",
   odpoved:"Agatha Christie"},
  {dil:"3. díl",
   tema:"Poznej literární dílo",
    otazka: "Schopnost tělesa odrážet světlo se pojí s nedostatkem životních potřeb profesionálních společnic",
   odpoved:"Lesk a bída kurtizán"}
];

let dil = document.getElementById("dil");
let tema = document.getElementById("tema");
let otazka = document.getElementById("otazka");
let odpoved = document.getElementById("odpoved");
let karta = document.getElementById("karta");

Add();

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
  dil.innerText = hadanky[slideIndex-1].dil;
  tema.innerText = hadanky[slideIndex-1].tema;
  otazka.innerText = hadanky[slideIndex-1].otazka;
 // odpoved.style.display = "none";
  odpoved.innerText = hadanky[slideIndex-1].odpoved;
}

function Add() {
  karta.addEventListener('click', function () { 
    if (odpoved.style.display == "none") {
        odpoved.style.display = "block"} 
    else {
          odpoved.style.display="none"}
         });
       }
