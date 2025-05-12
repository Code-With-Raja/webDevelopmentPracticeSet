
// "For Loop".
let a=1;

for (let i = 0; i < 10; i++) {
     console.log(a+i)
    
    
}

// "For in Loop".
let obj = {
    name: "raja",
    role:"programmar",
    company: "Ai tool"

} 
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log( key , element)
        
    }
}
// "For of Loop". 

for (const array of "raja") {
    console.log(array)
}
 let i = 5;

// While loop//
while (i<6) {
    console.log(i)
     i++;
    
}
