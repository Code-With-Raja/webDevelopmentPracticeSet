const btn = document.getElementById("btn");
const dob = document.getElementById("dob");
const calculate = document.getElementById("calculate");


function getAge(birthValue){
    const currentdate = new Date();
    const birthdate = new Date(birthValue);
    let age = currentdate.getFullYear() - birthdate.getFullYear();
    let month = currentdate.getMonth() - birthdate.getMonth();

    if(month < 0 || (month === 0 && currentdate.getDate() < birthdate.getDate())){
        age--;
    }
    return age; 

}

function calculateAge(){
    const birthValue = dob.value;
    if(birthValue === ""){
        alert("Please Enter Your Birthday");
    }
    else {
        const age = getAge(birthValue);
        calculate.innerText = `Your Current Age is ${age} ${age>1 ? "Years" : "Year" } old `
    }
}
btn.addEventListener("click", calculateAge);