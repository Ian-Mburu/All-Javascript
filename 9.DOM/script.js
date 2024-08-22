(function() {

    function clickHandler(message) {
        console.log('Hello...' + message)
    } 

    // Get a reference to myButton
    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {clickHandler('Hello world')});
})