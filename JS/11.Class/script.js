// class person{ 
//     constructor(name,age){
//         this.name = name;
//         this.age = age ;
//     }


// }
 
// let person1 = new person("raja", 30);
// let person2 = new person("prabhat", 25);


class Person {
    constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
    greet() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    }
    let person1 = new Person ("raja", 30);
    
    console.log(person1.greet());