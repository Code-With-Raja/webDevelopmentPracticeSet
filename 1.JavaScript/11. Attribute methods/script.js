// The hidden property//

let element = document.getElementById ("element");

element.hidden = true; 







// Attribute methods //

//1. has attribute //

if (element.hasAttribute('required')) {
    console.log('The input element has the "required" attribute.');
} else {
    console.log('The input element does not have the "required" attribute.');
}

// // 2. set Attribute // 

// if (element.setAttribute('required')) {
//     console.log('The input element has the "required" attribute.');
// } else {
//     console.log('The input element does not have the "required" attribute.');


// }

// // 3. get Attribute // 

// if (element.getAttribute('required')) {
//     console.log('The input element has the "required" attribute.');
// } else {
//     console.log('The input element does not have the "required" attribute.');
// }

// // 4. remove Attribute //

// if (element.removeAttribute('required')) {
//     console.log('The input element has the "required" attribute.');
// } else {
//     console.log('The input element does not have the "required" attribute.');
// }




// data attributes//
let element1 = document.getElementById ("element");


console.log(element1.dataset.userId);





// insertion methods //

let span = document.createElement ("span");
span.id = "alert";
span.textContent = "i am web devolopment";
 
element1.after(span);




// insert Adjacent HTML/Text/Element.//

// "before begin".
let first = document.getElementById("element");
 

first.insertAdjacentHTML('beforebegin','<span> i am computer man </span>')

// "after  begin".

first.insertAdjacentHTML('afterbegin', '<a> Raja das </a>')

// "before end".
first.insertAdjacentHTML('beforeend', '<a> Prabhat </a>')
// "after end".
first.insertAdjacentHTML('afterend', '<a> Prabhat </a>')


// Node removal //


// first.remove();


// className and ClassList. //


first.classList.add("element"); // className //
first.classList.remove("element");  // className //

first.classList.toggle("element"); // class list toggle // 



