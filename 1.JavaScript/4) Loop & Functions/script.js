// We use loop function for value repited.

// Type of Loops In JS.

// 1) for loop.
// 2) for in loop.
// 3) for of loop.
//  4) while loop.
//  5) do-while loop.


//  1) for loop//

for (let i = 0; i <= 10; i++) {
     console.log(i);
     
};

// 2) for in loop //

let person = {
    name: "raja",
    age: 25,
    job: "devoper"
};

for (const key in person) {
    console.log(key + ":" + person[key]);
    
}

// 3) for of loop //

let n = [1,2,3,4,5]
for (const no  of n ) {
    console.log(n);
    
    
}


// 4) while loop //

let i = 1;

while (i<= 10) {
    console.log(i);
    i++;   
}


// let input = "";

// while (input !== "yes" && input !== "no") {
//     input = prompt("Please enter 'yes' or 'No'");
    
// }

 
function add(x,y) {
   
    return x+y ; 
    
}