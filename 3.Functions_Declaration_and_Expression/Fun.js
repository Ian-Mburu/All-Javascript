// Function - block of code

function sayHello() {
    console.log('---------------------');
    console.log('Hello!');
    console.log('---------------------')
}


sayHello();

function goodMorning(name) {
    console.log('---------------------');
    console.log('GoodMorning!' + name);
    console.log('---------------------')
}

goodMorning('Ian');
goodMorning('Kenya');
goodMorning('Mburu');
goodMorning('Moses');


function calculateTax(amount) {
    let result = amount * 0.222;
    return result;
}

let tax = calculateTax(300);
console.log(tax);