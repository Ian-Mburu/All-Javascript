// Arrow functions

const greet = (name) => {
    return `Hello, ${name}!`;
  };
  
  console.log(greet('Captain America')); 


// Callback Function -- function passed into another function as an argument which is then invoked inside the outer func.

function grt(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  grt('Alice', sayGoodbye);