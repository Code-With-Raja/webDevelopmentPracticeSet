function getRandomColor() {
    const r = Math.floor(Math.random() * 500);
    const g = Math.floor(Math.random() * 500);
    const b = Math.floor(Math.random() * 500);

    return `rgb(${r}, ${g}, ${b})`;
     

}

function changeBackgroundColor() {
    document.getElementById("heading1").style.color = getRandomColor();
    document.getElementById("heading2").style.color = getRandomColor(); 
}
setInterval(changeBackgroundColor, 1000);


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
 