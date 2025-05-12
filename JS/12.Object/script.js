let person = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(person.greet());

person.address = "Indas";
person["phone"] = "9735157562"
delete person.age;
console.log(person.name)
console.log(person.age)
console.log(person.greet());
console.log(person.address)
console.log(person.phone)




