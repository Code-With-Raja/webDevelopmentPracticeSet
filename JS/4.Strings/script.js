let a = "Hello i am Prabhat Kumar Das";

// Do print this containt.
console.log(a)

// want to Konow the length of containt.
console.log(a.length)


let b = "Raja";
console.log(b)
// to write containt in Upper case.
console.log (b.toUpperCase())

// to write cotaint in Lower case.
console.log (b.toLowerCase())

// to print a target word.
console.log (b.slice(2,))
  
// to replace containt.
let x = "prabaht das"
let newx = x.replace("prabaht", "raja")
console.log(newx)

//  to print many containt in one line.
let name1 = "raja";
let name2 = "das";
let name3 = name1.concat(name2, "yes")
console.log(name3);

// for remove "space".
let name4 = "     raja das "
console.log(name4)
let newname = name4.trim()
console.log(newname)

// to print any word  in there possion.
console.log(name1[0])
console.log(name1[1])
console.log(name1[2])
console.log(name1[3])

// in any sentence any word remove. 

let c = "please give me Rs. 1000";
console.log(c);
let d = c.replace("give", "taken");
console.log(d);