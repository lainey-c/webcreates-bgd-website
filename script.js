// 1. Hamburger Menu (runs on every page)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        hamburger.setAttribute("aria-expanded", isOpen);
    });
}

// 2. Hero 2-Image Carousel (runs only on the Welcome/Home page)
const slides = document.querySelectorAll(".hero-slide");
const prevBtn = document.querySelector(".hero-btn.prev");
const nextBtn = document.querySelector(".hero-btn.next");
let currentSlide = 0;

function flipSlide() {
    if (currentSlide === 0) {
        currentSlide = 1;
    } else {
        currentSlide = 0;
    }

    slides[0].classList.toggle("active", currentSlide === 0);
    slides[1].classList.toggle("active", currentSlide === 1);
}

if (slides.length >= 2 && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", flipSlide);
    nextBtn.addEventListener("click", flipSlide);
}

let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}