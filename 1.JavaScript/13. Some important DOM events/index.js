// Mouse Events //

let btn = document.getElementById('btn');

btn.addEventListener ('click', function(){

    let con = document.getElementById ('con');
    con.textContent = "prabhat kumaar das";
})


btn.addEventListener('mouseover', function(){
    btn.style.backgroundColor = "red";
})
btn.addEventListener('mouseout', function(){
    btn.style.backgroundColor = "green";
})

btn.addEventListener('mousedown', function(){
    let con = document.getElementById ('con');
    con.textContent = "go to school";
})

btn.addEventListener('mouseup', function(){
    let con = document.getElementById ('con');
    con.textContent = "go to home";
})

btn.addEventListener('mousmove', function(){
    let con = document.getElementById ('con');
    con.textContent = "you can permitted";
})



// keyboard event //


let btn1 = document.getElementById('btn1');

btn1.addEventListener('keydown', function(e){
   
    e.preventDefault();
    if(e.ctrlKey && e.key === "d"){
        alert('Enter ctrl + D')
    }

    if(e.altKey && e.key === "c"){
        alert ("Enter Alt + C")
    }
   
    const keyName = e.key;

    if (keyName === "Control") {
      // do not alert when only Control key is pressed.
      return;
    }
})