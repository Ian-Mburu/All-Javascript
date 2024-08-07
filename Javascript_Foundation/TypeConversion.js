  // JAVASCRIPT TYPE CONVERSION
// Data type conversion in js involves converting a value from one data type to another.


let a = 7;
let b ='2';
let c = a + b;             // Javascript is treating 7 as a string and concatenating the two numbers to 72
console.log('Answer: '+ c)  


let i = 4;
let j = '6';
j = parseInt(j)
let k = i + j;
console.log('Answer: '+ k)


let m = 2;
let n = '4';
n = parseInt('ian')
let o = n + m;
console.log('Answer: '+ o);     // Not a number (NaN).
// isNaN() function is used to check if a value is not a number.

let x = parseInt('ian');
let y = isNaN(x);
console.log(y);