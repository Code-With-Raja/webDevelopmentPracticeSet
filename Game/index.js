document.body.style.backgroundColor = "aqua";


let container = document.getElementById('container');



let img1 = document.createElement('img');
img1.id = 'img';
img1.src = 'image/Proggammar.jpg';
img1.style.width = '150px';
img1.style.position = 'absolute';
img1.style.top = '0';
img1.style.left = '0';
img1.style.transition = 'top 0.1s, left 0.1s';
img1.style.boxShadow = '2px 5px 5px rgba(0,0,0, 0.7)';
img1.style.borderRadius = '50px';

container.appendChild(img1);



const speed = 50;



document.addEventListener('keydown', function (event) {
    // Get current position
    let top = parseInt(window.getComputedStyle(img1).top, 10);
    let left = parseInt(window.getComputedStyle(img1).left, 10);

    // Update position based on arrow key pressed
    switch (event.key) {
        case 'ArrowUp':
            img1.style.top = (top - speed) + 'px';
            break;
        case 'ArrowDown':
            img1.style.top = (top + speed) + 'px';
            break;
        case 'ArrowLeft':
            img1.style.left = (left - speed) + 'px';
            break;
        case 'ArrowRight':
            img1.style.left = (left + speed) + 'px';
            break;
    }
});



let bugs = document.getElementById('bugs');
let bugs1 = document.getElementById('bugs1');
let bugs2 = document.getElementById('bugs2');
let bugs3 = document.getElementById('bugs3');
let bugs4 = document.getElementById('bugs4');
// Movement speed in pixels
const speed1 = 5;

function move() {
        setInterval(() => {

            let top = parseInt(window.getComputedStyle(bugs).top, 10);
            let top1 = parseInt(window.getComputedStyle(bugs1).top, 10);
            let top2 = parseInt(window.getComputedStyle(bugs2).top, 10);
            let top3 = parseInt(window.getComputedStyle(bugs3).top, 10);
            let top4 = parseInt(window.getComputedStyle(bugs4).top, 10);


            bugs.style.top = (top - speed1) + 'px';
            bugs1.style.top = (top1 - speed1) + 'px';
            bugs2.style.top = (top2 - speed1) + 'px';
            bugs3.style.top = (top3 - speed1) + 'px';
            bugs4.style.top = (top4 - speed1) + 'px';
 
        }, 40);
         
    }
    move();

    
    
    
let coffee = document.getElementById('coffee');
let coffee1 = document.getElementById('coffee1');
let coffee2 = document.getElementById('coffee2');
let coffee3 = document.getElementById('coffee3');
 
// Movement speed in pixels
const speed3 = 5;

 
 

function move1() {
    
 setInterval(() => {    
let top5 = parseInt(window.getComputedStyle(coffee).top, 10);
       
let top6 = parseInt(window.getComputedStyle(coffee1).top, 10);
      
let top7 = parseInt(window.getComputedStyle(coffee2).top, 10);
        
let top8 = parseInt(window.getComputedStyle(coffee3).top, 10);

        // Update the top position of each element
        
coffee.style.top = (top5 - speed3) + 'px';
        
coffee1.style.top = (top6 - speed3) + 'px';
        
coffee2.style.top = (top7 - speed3) + 'px';
        
coffee3.style.top = (top8 - speed3) + 'px';

  
 }, 40);

  
         
}
move1();

if (move1()> window.innerHeight - coffee.offsetHeight) {
    position = 0;
    
}






    





 






