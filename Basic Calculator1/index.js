const button = document.querySelectorAll("button");
const inputArea = document.getElementById("inputarea");



for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click",  () =>{

        const buttonvalue = button[i].textContent;
            if (buttonvalue === "C"){
                clearResult();
    
            } else if (buttonvalue === "=") {
                calculateResult();
    
            }
            else {
                appendvalue (buttonvalue);
            }
        
        
      
        
        
        
        
        
    });
    
}



function clearResult(){
    inputArea.value = "";
}
function calculateResult(){
    inputArea.value = eval(inputArea.value) ;
}

function appendvalue(buttonvalue){
    inputArea.value = inputArea.value + buttonvalue;
}