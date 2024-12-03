const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfslides = slides.length;
let slideNumder = 0;

//slider next button
nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumder++;

    if (slideNumder > (numberOfslides - 1)) {
        slideNumder = 0;
    }

    slides[slideNumder].classList.add('active')
}

//slider prev button
prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumder--;

    if (slideNumder < 0) {
        slideNumder = numberOfslides - 1;
    }

    slides[slideNumder].classList.add('active')
}