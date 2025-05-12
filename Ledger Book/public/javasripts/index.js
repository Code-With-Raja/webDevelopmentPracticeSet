// // document.addEventListener('DOMContentLoaded', function() {
// //     const itemName = document.getElementById('item');

// //     // Create dropdown button
// //     const select = document.createElement('select');
// //     select.className = 'select1';
    
// //     itemName.appendChild(select);

// //     // Create dropdown content container

// //     const options = ['Mouse', 'Keyboard', 'Monitor', 'Laptop', 'Printer'];

// //     options.forEach (option =>{
// //         const option1 = document.createElement('option');
// //     option1.className = 'option';
// //     option1.textContent = option;

    
// //     select.appendChild(option1);


// //     })
    
// });



function text(){

    const inputElement = document.getElementById("s-b1");
    const inputText = inputElement.value;

if (inputText){
    const trasformText = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();

    inputElement.value = trasformText
} else {
    inputElement.value = "";
}
    

}



document.addEventListener ("DOMContentLoaded", () =>{
    const inputNumber = document.getElementById("inv");

    const lastEty = document.getElementById("last-entry1") ;
 


    inputNumber.addEventListener ("input", ()=>{

        const value = parseFloat(inputNumber.value);

        if(!isNaN(value)){
            lastEty.value = value - 1;
            
        } else{
            lastEty.value = "";
        }
        
    })

    
     


})


 
// document.addEventListener("DOMContentLoaded", ()=>{
//     const btn1 = document.getElementById("btn");
    
//     btn1.addEventListener("click", ()=>{
//         const qunatity = document.getElementById("qty2");
//         const rate1 = document.getElementById("rate2");
//         const name = document.getElementById("s-b1");
//         const total3 = document.getElementById("total2");
//         const invoN = document.getElementById("inv");
//         const lastEty = document.getElementById("last-entry1") ;

//         qunatity.value = "";
//         rate1.value = "";
//         name.value = "";
//         total3.value = "";
        
//         lastEty.value = parseFloat(lastEty.value + 1);


//     })


// })


function calculateTotal() {
    // Get the values from the input fields
    const quantity = parseFloat(document.getElementById('qty2').value);
    const rate = parseFloat(document.getElementById('rate2').value);

    // Check if the values are valid numbers
    if (isNaN(quantity) || isNaN(rate)) {
        alert('Please enter valid numbers for quantity and rate.');
        return;
    }

    // Calculate the total cost
    const totalCost = quantity * rate;

    // Display the result
    document.getElementById('total3').textContent = totalCost.toFixed(2);
}
    
 