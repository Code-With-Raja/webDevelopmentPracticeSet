// ARRAYS //


const fruits = ['apple', 'banana', 'graps'];

console.log(fruits[0]);
console.log(fruits[1]);


// Finding length //

let a = [5, 74, 6, 52, 25];

console.log(a[1]);
console.log(a[4]);

// Changing the value //

a[2] = 5;

console.log(a);


// toString() //

let n = [4, 5, 6, 4, 6,]

console.log(n.toString());

// Join () //

console.log(n.join("-"));

// pop () //

n.pop();

console.log(n);


// push() //

n.push(50);
console.log(n);


// shift () //

n.shift();

console.log(n);


// unshift //
n.unshift(100);

console.log(n);

// delete()  //

delete n[1];

console.log(n);

// concat ()  //

let h = [1, 2, 3, 4, 6];
let l = [5, 7, 8, 9];
let k = [10, 20, 54, 60];

console.log(h.concat(l, k));


// sort()  //

console.log(k.sort());

// splice()  //

k.splice(200);

console.log(k);


// slice () //

console.log(k.slice(2));


// reverse()  //

console.log(k.reverse())


// looping through arrays //


const o = [1, 2, 3, 4, 5];

o.forEach((value, index, array) => {
    console.log(o);

})

// map()  // in this method return a new array not modify the original array.
const numbers = [1, 2, 3, 4, 5]; 
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const people = [
    { name: 'Raja', age: 30},
    { name: 'Prabhat', age: 31},
    { name: 'Diya', age: 13}
];

const names = people.map(person => person.age);

console.log(names); // ['30', '31', '13'] 




// filter ()  // in this method return a new array with condition.

const people1 = [
    { name: 'Raja', age: 30},
    { name: 'Prabhat', age: 31},
    { name: 'Diya', age: 13}
];

const names1 = people1.filter(person => person.age>=30);

console.log(names1);


const Nos = [1,2,3,10,20,14] 
let result = Nos.filter (num=> 10).map (num=> num * 2);


console.log(result);





// reduce method // 

const number = [1, 2, 3, 4, 5];
const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 15


const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const count = items.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue]) {
        accumulator[currentValue] = 0;
    }
    accumulator[currentValue]++;
    return accumulator;
}, {});

console.log(count); // { apple: 2, banana: 3, orange: 1 }









// array from //


const str = 'hello';
const arr = Array.from(str);

console.log(arr); // ['h', 'e', 'l', 'l', 'o']


const no = [1, 2, 3, 4];
const doubled = Array.from(no, x => x * 2);

console.log(doubled); // [2, 4, 6, 8]

const nodelist = document.querySelectorAll("div");
const nodelistarry = Array.from (nodelist);

console.log(nodelistarry);




// for ---- of //

for (const element of o) {
    console.log(element);

}

// for----in //

for (const key in o) {
    console.log(key);



}




















