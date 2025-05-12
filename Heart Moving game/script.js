const bodyEl = document.querySelector ("body");

bodyEl.addEventListener ("mousemove" , (event)=>{

const xpos = event.offsetX;
const ypos = event.offsetY;
const spanEl = document.createElement ("span");
spanEl.style.left = xpos + "px";
spanEl.style.top = ypos + "px";
bodyEl.appendChild (spanEl);
const size = Math.random()* 100;
spanEl.style.width = size + "px";
spanEl.style.height = size + "px";

setTimeout (()=>{
    spanEl.remove();
}, 3000);



})


function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

   
    return `rgb(${r},${g},${b})`;
     

};

function changeColor (){

     
    const color = document.getElementById("div");
    color.style.color = getRandomColor();

    setTimeout (changeColor, 300); 
   
};
changeColor();


const backGroundMusic = new Audio ("happy-birthday-155461.mp3");
backGroundMusic.loop = true;
backGroundMusic.volume = 0.5;
backGroundMusic.play();

backGroundMusic.addEventListener('ended', ()=>{
    alert("Music Ended");
})

setTimeout(() => {
    backGroundMusic.pause();
    
}, 10000);


    
 
 
 
