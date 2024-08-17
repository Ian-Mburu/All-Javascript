// if, switch, ternary.

let count = 3;
if (count == 3){
    console.log('Count is 3')             
}


let test = 50;
if (test == 100) {
    console.log("Excellent!!!")
} if (test >= 50) {
    console.log("Above pass-mark")
} else if (test <= 50) {
    console.log("Failed!!!")
}


let age = 2;
if (age >= 18) {
    console.log("You are an adult.")
} else {
    console.log("You are a minor.")           // if...else
}


let interval = 4;
if (interval == 5) {
    console.log('Interval is not 5');
} else{
    console.log('Interval is NOT 5')         // if...else
}


// else if
let Age = 25;
if (Age == 30) {
    console.log('Age is 30');

} else if ( Age > 25) {
    console.log('Age is greater than 30');
} else if ( Age < 30) {
    console.log('Age is less than 30');         // if, else...if, <, >
}


let score = 5;

if (score >= 90) {
    console.log('Score is A');
} else if (score >= 80) {
    console.log('Score is B');
} else if (score >= 70) {
    console.log('score is c');
} else if (score >= 60) {                        // incase of when creating a signup or login page
    console.log('Score is D');
} else if (score <= 50) {
    console.log('Score is E')
}



// Switch Statement
// switch...case

let hero = 'wonderwoman';
switch (hero) {
    case 'superman':
        console.log('super strength');
        console.log('powerful');

    case 'batman':
        console.log('super rich');
        console.log('super intelligent');

    case 'wonderwoman':
        console.log('laser eyes');
        console.log('super human');

    default:
        console.log('member of Dc-superheroes')
}


// TERNARY OPERATORS

let a = 3, b = '3';
let result = (a == b) ? 'equal' : 'not equal';
console.log(result)


let d = Date();
console.log(d)

try {
    notAFunction();
} catch(err) {
    console.log(err);        // ReferenceError: notAFunction is not defined
} finally {
    console.log('This will run regardless of the errors')
}