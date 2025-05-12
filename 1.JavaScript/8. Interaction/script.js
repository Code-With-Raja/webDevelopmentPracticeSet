// Interaction //

// There are 3 inteaction //
// 1. alert, 2. prompt , 3. confirm //


// 1. alert //
alert ("I am a web Devolopment"); // for any msg show.

let btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    alert ("you click succefully.");

})




// 2. prompt //
let inp = document.getElementById("btn");

inp.addEventListener("click", ()=>{
    let username = prompt("pls enter your name")

    if (username !== null && username.trim() !== ""){
        alert ("Hello," + username + "!");
    } else {
        alert("you do not enter your name");
    }

})



// 3. confirm //

let con = document.getElementById("btn");

con.addEventListener("click", ()=>{
    let confir = confirm("do you want to proceed?")

    if (confir){
        alert ("you chose to procced");
    } else {
        alert("you not to proceed");
    }

})

