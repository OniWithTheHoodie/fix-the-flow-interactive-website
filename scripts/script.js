// Timeline
// circle 1
let content1 = document.querySelector('.textBox--1');

let button1 = document.querySelector('.circle--1');

button1.addEventListener('click', function(e) {
    content1.classList.toggle('invisible');
});

// circle 2
let content2 = document.querySelector('.textBox--2');

let button2 = document.querySelector('.circle--2');

button2.addEventListener('click', function(e) {
    content2.classList.toggle('invisible');
});

// circle 3
let content3 = document.querySelector('.textBox--3');

let button3 = document.querySelector('.circle--3');

button3.addEventListener('click', function(e) {
    content3.classList.toggle('invisible');
});

// circle 4
let content4 = document.querySelector('.textBox--4');

let button4 = document.querySelector('.circle--4');

button4.addEventListener('click', function(e) {
    content4.classList.toggle('invisible');
});

//Content scroll effect
// deze lijn code gaat alleen in effect als de pagina geladen is word het opgeroepen met de functie setup
window.addEventListener('DOMContentLoaded', setup);

// voor deze functie maak ik een variable met de naam options voor de intersection observer deze variable houd de object vast
// in de options variable komt de root margin de root margin heeft een standaard waarde van 0 als de intersection observer element in de viewpoort terecht komt gaat het in effect
// in dit geval als de viewpoort -200px bereikt gaat intersection observer in effect
function setup() {
    const options = {
        rootMargin: '0px 0px -200px 0px'
    }

    // hier maak ik een variable voor de intersection observer met een call back functie met 2 arugementen entries en observer en de opties variable ↑ 
    const observer = new IntersectionObserver ((entries, observer) => {
        // hiervoor maak ik een for each loop voor alles dat is ingevoerd met isIntersecting zeg ik dat als het intersect focus de specifieke class naam in mijn css met de naam show en voeg het toe
        entries.forEach(entery => {
            if(entery.isIntersecting) {
                entery.target.classList.add('show--content');
                // als show is geobserveerd dan wil ik het niet meer observeren met unobserve
                observer.unobserve(entery.target);
            }else {
                return;
            } 
        })
    }, options);

    // nu wil ik dat er specifieke elementen worden geobserveerd en getoont met de scroll effect
    const h1 = document.querySelector('.h1-observe');
    observer.observe(h1);

    const h2 = document.querySelector('.h2-observe');
    observer.observe(h2);

    // Er zijn meerdere paragrafen dus hier gebruik ik queryselector all om alle "p" te selecteren en in for each loop alles op te roepen
    const paras = document.querySelectorAll('.p-observe');
    paras.forEach(p => observer.observe(p));

    // const button = document.querySelector('primary--button');
    // observer.observe('.primary--button');

    
    const img = document.querySelector('.img-hero');
    observer.observe(img);
}

// button shake function
let buttonRumble = document.querySelector('.form--primary--button');

buttonRumble.addEventListener('mouseover', buttonShake);

function buttonShake() {
    buttonRumble.classList.toggle('button--rumble');
    
}

