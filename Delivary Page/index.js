let submit = document.getElementById("submit");
document.addEventListener("DOMContentLoaded", () => {
  submit.addEventListener("click", function () {
    let detail = document.getElementById("detail");
    if (detail.style.display === "none") {
      detail.style.display = "flex";
    } else {
      detail.style.display = "none";
    }

    let name = document.getElementById("name");
    let inputname = document.getElementById("inputname");
    name.textContent = inputname.value;

    let address = document.getElementById("address");
    let inputaddress = document.getElementById("inputaddress");
    address.textContent = inputaddress.value; 

    let debit = document.getElementById("debit");
    let inputdebit = document.getElementById("inputdebit");
    debit.textContent = inputdebit.value; 

    let credit = document.getElementById("credit");
    let inputcredit = document.getElementById("inputcredit");
    credit.textContent = inputcredit.value; 

    let remarks = document.getElementById("remarks");
    let inputremarks = document.getElementById("inputremarks");
    remarks.textContent = inputremarks.value; 

    let date = document.getElementById("date");
    let inputdate = document.getElementById("inputdate");
    date.textContent = inputdate.value; 

    const due = document.getElementById("due");
    const debitValue = inputdebit.value;
    const creditValue = inputcredit.value;
    due.textContent = debitValue - creditValue; 

    const duePaid = document.getElementById("duePaid");
    const dueValue = due.textContent; 
    if(dueValue == "0"){
      duePaid.textContent = "Paid :";
    }else{
      duePaid.textContent = "Due :";  
    }
  });

  const inputname = document.getElementById("inputname");
  const inputaddress = document.getElementById("inputaddress");

  inputname.addEventListener('input', ()=>{
    const value = inputname.value;

    const updatevalue = value.replace (/^(\w)(\w*)/,(match,p1,p2) => p1.toUpperCase() + p2);
    inputname.value = updatevalue; 
  })

  inputaddress.addEventListener('input', ()=>{
    const value = inputaddress.value;

    const updatevalue = value.replace (/^(\w)(\w*)/,(match,p1,p2) => p1.toUpperCase() + p2);

    inputaddress.value = updatevalue;

  })



});
