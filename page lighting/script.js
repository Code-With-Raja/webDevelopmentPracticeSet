const container = document.getElementById("container");


const btn = document.createElement("button");
btn.textContent = "Button";
btn.id = "changer";
btn.style.backgroundColor = 'Blue'; 
btn.style.color = 'white';
btn.style.padding = '1rem';
btn.style.marginLeft = '50rem';
btn.style.marginTop = '20rem';

container.after(btn);


let isoriginalColor = true;

btn.addEventListener ('click', function(){
    if (isoriginalColor){
         document.body.style.backgroundColor = "aqua";

    } else {
        document.body.style.backgroundColor = 'white';


    } 
    isoriginalColor = !isoriginalColor;

})
 
