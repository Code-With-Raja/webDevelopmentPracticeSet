
function Person(name, age) {
    let privateAge = age;
    this.name = name;

this.getAge = function() {
        return privateAge;
    }
}

let person = new Person("John", 30);
console.log(person.name); // "John"
console.log(person.privateAge); // undefined
console.log(person.getAge()); // 30
