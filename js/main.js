let hadanky = [
  {dil:"1. díl",
   tema:"Z cyklu nevšední úmrtí",
    otazka: "Ve 48 si podřezal hrdlo a probodl srdce. KDO je to?",
    img:"",
   odpoved:"Vilém Mrštík"},
  
  {dil:"2. díl",
   tema:"",
   otazka: "Jako malá dívka zbožňovala domečky pro panenky. Dokázala je zařizovat pidi dekoracemi celé hodiny. Když vyrostla, zbožňovala domy, kupovala je, zařizovala vkusným nábytkem a mnoha dekoracemi. Mohla si to dovolit. KDO je to?",
   img:"",
   odpoved:"Agatha Christie"},
  
  {dil:"3. díl",
   tema:"Poznej literární dílo",
   otazka: "Schopnost tělesa odrážet světlo se pojí s nedostatkem životních potřeb profesionálních společnic",
   img:"",
   odpoved:"Lesk a bída kurtizán"},

  {dil:"3. díl",
   tema:"Co je to?",
   otazka:"",
   img:"https://c.files.bbci.co.uk/17069/production/_132831349_aurora2.jpg",
   odpoved:"Aurora borealis"
  }
];

let dil = document.getElementById("dil");
let tema = document.getElementById("tema");
let otazka = document.getElementById("otazka");
let odpoved = document.getElementById("odpoved");
let karta = document.getElementById("karta");
let img = document.getElementById("img");
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
  odpoved.innerText = hadanky[slideIndex-1].odpoved;

  odpoved.style.display="none";
  
  if (hadanky[slideIndex-1].img !== "") {otazka.innerHTML = "<img id='img' src='"+hadanky[slideIndex-1].img+"'>"}
}

function Add() {
  karta.addEventListener('click', function () { 
    if (odpoved.style.display == "none") {
        odpoved.style.display = "block"} 
    else {
          odpoved.style.display="none"}
         });
       }
