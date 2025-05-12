function capitalizeFirstLetter() {
    // Get the input element
    const inputElement = document.getElementById('inputText');

    // Get the current value
    let inputText = inputElement.value;

    // Check if the input text is not empty
    if (inputText) {
        // Capitalize the first letter and make the rest lowercase
        inputText = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
        
        // Update the input value with the transformed text
        inputElement.value = inputText;
    }
}

