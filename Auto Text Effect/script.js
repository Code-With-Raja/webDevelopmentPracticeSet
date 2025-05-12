const containarEl = document.querySelector(".containar");

const careers = ["Youtuber", "Accountant", "Devolopar", "Softwar mannager"]

let characterIndex = 0;

let careersIndex = 0;


function updateText() {
    characterIndex++
    containarEl.innerHTML = `  <h1>I am ${careers[careersIndex].slice(0,1)=== "A" ? "an": "a"} ${careers[careersIndex].slice(0, characterIndex)}</h1>`;
    

    if (characterIndex === careers[careersIndex].length){

        careersIndex++
        characterIndex =0
    }
    if (careersIndex === careers.length) {

        careersIndex = 0;
    }
    setTimeout (updateText,100);

};
updateText();



