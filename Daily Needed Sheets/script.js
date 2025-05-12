document.addEventListener('DOMContentLoaded', function(){
    let item = document.querySelector('.item1');
    let qty = document.querySelector('.qty1');
    let date = document.querySelector('.date');
    let qtyId = document.getElementById('option')
    let tableBody = document.querySelector("tbody");
    let submit = document.querySelector('.submit');
submit.addEventListener('click', function(){
    if(item.value.trim() !== "" && qty.value.trim() !== ""){

        const newRow = document.createElement('tr');
        newRow.classList = "newrow";
        tableBody.appendChild(newRow);

        const newData = document.createElement('td');
        newData.classList = "newdata";
        newData.textContent = date.value;
        newRow.appendChild(newData);
        
        const newData1 = document.createElement('td');
        newData1.classList = "newdata1";
        newData1.textContent = item.value;
        newData.after(newData1);
        const newData2 = document.createElement('td');
        newData2.classList = "newdata2";
        newData2.textContent = qty.value+ qtyId.value;
        newData1.after(newData2);


        item.value = "";
        qty.value = "";



    }



})
    


})