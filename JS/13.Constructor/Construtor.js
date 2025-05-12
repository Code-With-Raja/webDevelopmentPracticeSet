class user {
   constructor (username, email,password) {
    this.username = username;
    this.email = email;
    this.password = password;

   }
    Password (){
    return `${this.password}abc`

   }
   changeusername (){
    return `${this.username.toUpperCase()}`
   }
   changeusername (){
    return `${this.username.toLowerCase()}`
   }

}
const chai = new user ("chai", "chai@gamail.com", "123")

console.log(chai.encryptPassword);
console.log(chai.changeusername());
console.log(chai.password);




// // behind the scene

// function user (username, email,password) {
//      this.username = username;
//      this.email = email;
//      this.password = password;
 
//     }
//     user.prototype.Password = function (){
//             return `${this.password}abc`

//     }
//     user.prototype.changeusername= function (){
//        return `${this.username.toUpperCase()}`

// }
// user.prototype.changeusername1= function (){
//     return `${this.username.toLowerCase()}`

// }
//     const tea = new user ("tea", "tea@gamail.com", "123")

// console.log(tea.Password());
// console.log(tea.changeusername());
// console.log(tea.changeusername1());



