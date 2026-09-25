// Wait until the DOM content is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements using clear, descriptive variable names
    const actionButton = document.querySelector('#actionBtn');

    // Single-responsibility function: Handles the button click event
    function handleButtonClick() {
        console.log('Button was clicked successfully!');
        alert('JavaScript is connected and working cleanly!');
    }

    // Event Listener: Attaches behavior in JS rather than using inline HTML handlers (e.g., onclick="")
    if (actionButton) {
        actionButton.addEventListener('click', handleButtonClick);
    }

});