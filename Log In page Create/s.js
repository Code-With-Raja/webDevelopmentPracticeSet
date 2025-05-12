
const emailID = document.getElementById('email1');
const password = document.getElementById('password1');
const button = document.getElementById('button');
const msg = document.getElementById('msg');


const mailId = 'raja@gmail.com';
const pass = '28091992';

button.addEventListener('click', function() {
    if (emailID.value === mailId && password.value === pass){
        msg.textContent = "Successfully Log In";
    } else{
        msg.textContent = 'Input valid user name and password';
    }   
});
