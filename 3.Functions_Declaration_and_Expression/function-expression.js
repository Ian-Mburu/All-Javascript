(function () {
    console.log('Immediately invoked function expression (IIFE)')
}) ();


// HOISTING -- hoisting in javascript is moving declaration to the top of the current scope.
// Javascript functions can be called before they are declared.
// Functions declaration are hoisted but func expression are not.

/*

console.log(greet('Ian'))

function greet (name) {
    return `Hello, ${name}! `;
}

*/



// ARGUMENTS AND PARAMETERS
// Parameters -- are name or values listed in the function definition. (act as placeholders)
// Arguments -- names or values we pass when calling the function.


function greet(name) { // 'name' is a parameter
  return `Hello, ${name}!`;
}

console.log(greet('Ninja')); // 'Ninja' is an argument


//We can also pass multiple parameters and arguments

function add(a, b) { // 'a' and 'b' are parameters
    return a + b;
  }
  
  console.log(add(3, 7)); // Output: 10, '3' and '7' are arguments



  //You can as well assign default values to the parameters
  
function greet(name = 'Fiona') { // Default parameter
    return `Hello, ${name}!`;
  }
  
  console.log(greet()); // Output: Hello, Fions!
  console.log(greet('Shrek')); // Output: Hello, Shrek!