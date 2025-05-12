
var timer = 60;
var score = -10;
var hitrn = 0; 


function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector ("#hitbar").textContent = hitrn;
}

function makebubble() {
    var clutter = "";
for (var i = 1; i <=208; i++){
    var rn = Math.floor(Math.random()*10)

    clutter += `<div class="bubble"> ${rn}</div>`
}

document.querySelector('#pbtm').innerHTML = clutter;
    
}
function runtimer() {
    var timeint = setInterval (function(){
        if (timer>0){
            timer --;
        document.querySelector ("#timevar").textContent = timer;


        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over<h1>` ;
            
        }
        
    },1000)

}
function incressescore(){
    score += 10;
    document.querySelector ("#scorebar").textContent = score;
}


document.querySelector("#pbtm").addEventListener ( 'click',function(details){
    var clickednum = Number(details.target.textContent);
    if (clickednum === hitrn){
        incressescore();
        getnewhit();
        makebubble();


    }

})


getnewhit();
makebubble();
runtimer();
incressescore();
