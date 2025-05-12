document.addEventListener('DOMContentLoaded', () => {
    const mySelect = document.getElementById('mySelect');
    const dependentSelect = document.getElementById('dependentSelect');

    mySelect.addEventListener('change', () => {
        // Enable dependent select if an option is selected
        if (mySelect.value) {
            dependentSelect.disabled = false;
        } else {
            dependentSelect.disabled = true; // Disable if no selection
        }
    });
});

