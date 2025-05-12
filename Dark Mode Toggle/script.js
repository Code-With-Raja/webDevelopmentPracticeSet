const inputEl = document.querySelector (".input");

const bodyEl = document.querySelector ("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));


updatBody();


function updatBody(){
    if (inputEl.checked){
        bodyEl.style.backgroundColor ="aqua";
    }
    else{
        bodyEl.style.backgroundColor = "white";
    }
}
inputEl.addEventListener ("input", ()=>{
    updatBody();
    updateLocalStorage();
})
function updateLocalStorage(){
    localStorage.setItem ("mode",
        JSON.stringify (inputEl.checked)
    )
}