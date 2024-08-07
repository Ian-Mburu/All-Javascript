function sayHello () {
    // Find the element with the ID (message)
    let messageElement = document.getElementById('message');

    // Change the text of the element to "Hello"
    messageElement.textContent = 'Hello Ian';
}

// Find the button element with the ID 'myButton'
let button = document.getElementById('myButton');

// Event listener
button.addEventListener('click', sayHello);