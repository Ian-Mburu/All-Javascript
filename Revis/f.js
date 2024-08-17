// toFixed()
// formats number to fixed decimal places.

let a = 45.2222;
let b = 565.22;
let c = a + b;
console.log(c.toFixed())


// toString()
// converts number to string.

let d = 49949;
console.log(d.toString)


// parseInt()
// parses string to an integer.

let marks = "3333";
console.log(parseInt(marks))

// parseFloat.
// parses a string to floating-point number
let marks1 = '233.3333';
console.log(parseFloat(marks1))


let text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
let obj = JSON.parse(text);