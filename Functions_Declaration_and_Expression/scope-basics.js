// Scope determine the accessibility of variables

// 1. Global scope --  Variables declared outside any function. They are not accessible from anywhere in the code.
// 2. Local scope --  Variables declared inside a function, are only accessible within that func.


let globalVariable = "I am a global variable";

function myFunction() {
    let localVar = 'I am a local variable';
    console.log(globalVariable);  // Accessible
    console.log(localVar);        // Accessible
}

myFunction();
console.log(globalVariable);      // Accessible
//console.log(localVar);         // error: undefined
