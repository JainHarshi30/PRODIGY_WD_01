const toggleBtn = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');


toggleBtn.onclick = () => {
    navbar.classList.toggle('active');
}

const numberOfSlides = slides.length;
let slideNumber  = 0;

//slider next btn
nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
}

//slider prev btn
prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}