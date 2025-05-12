

document.addEventListener('DOMContentLoaded', ()=>{
 

    const lstDistrictCode1 = document.getElementById("lstDistrictCode1");
    const lstBlockCode1 = document.getElementById("lstBlockCode1");
    const select0 = document.getElementById("select0");
 
    lstDistrictCode1.addEventListener("change", function(){
        

        if (lstDistrictCode1.value === "01") {
            select0.style.display = "none";
            lstBlockCode1.style.display = "flex";
            
        } else{
            lstBlockCode1.style.display = "none";
            select0.style.display = "flex";
        }


    })
    lstBlockCode1.addEventListener("change", ()=>{
        const lstMouzaList = document.getElementById ('lstMouzaList');
        const lstMouzaList1 = document.getElementById ('lstMouzaList1');
        const select1 = document.getElementById('select1');
        if (lstBlockCode1.value === "22_NEW") {
            select1.style.display = "none";
            lstMouzaList.style.display = "flex";
            lstMouzaList1.style.display = "none";

            
        } else if (lstBlockCode1.value === "21_NEW") {
            select1.style.display = "none";
            lstMouzaList.style.display = "none";
            lstMouzaList1.style.display = "flex";

            
        } else{
            select1.style.display = "flex";
            lstMouzaList.style.display = "none";
            lstMouzaList1.style.display = "none";
        } 
    })

});
