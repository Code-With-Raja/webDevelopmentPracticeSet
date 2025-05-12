let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const offset = index * -100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Automatically change slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the first slide
showSlide(currentIndex);
