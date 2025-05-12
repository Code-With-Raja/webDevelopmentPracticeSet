const object = document.getElementById('movingObject');
const button = document.getElementById('startAnimation');

const speed = 2; // Speed of the object (pixels per frame)
const distance = window.innerHeight - object.offsetHeight; // Maximum vertical distance object can travel

let position = 0; // Starting position
let direction = 1; // 1 for moving up, -1 for moving down
let animationFrameId; // To keep track of the animation frame

function animate() {
    position += speed * direction; // Update position
    object.style.bottom = position + 'px'; // Apply the new position

    // Reverse direction if the object hits the top or bottom of the screen
    if (position >= distance || position <= 0) {
        direction *= -1;
    }

    // Request the next frame if the object hasn't completed its cycle
    if (position !== 0 || direction === 1) {
        animationFrameId = requestAnimationFrame(animate);
    }
}

function startAnimation() {
    // Cancel any ongoing animation before starting a new one
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    position = 0; // Reset position to the bottom
    direction = 1; // Start moving up
    animate(); // Start the animation
}

// Start the animation when the button is clicked
button.addEventListener('click', startAnimation);


