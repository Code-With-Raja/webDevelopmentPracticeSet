class user {
    constructor (username){
        this.username = username ;

    }
    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class teacher extends user {
    constructor (username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addcourse (){
        console.log(`A course added by ${this.username}`);
    }
}


const chai = new teacher ("raja" , "raja@gmail.com" , "12345") 
 chai.addcourse();