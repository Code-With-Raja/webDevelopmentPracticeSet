// Get the button that opens the popup
var openPopupBtn = document.getElementById("openPopupBtn");

// Get the popup element
var popup = document.getElementById("popup");

// Get the <span> element that closes the popup
var closePopupBtn = document.getElementById("closePopupBtn");

// When the user clicks the button, open the popup 
openPopupBtn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
closePopupBtn.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
