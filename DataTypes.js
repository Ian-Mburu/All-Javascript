// Data Types And Methods





let y = 'Hello World'            
console.log(typeof y)   // Strings

let z = true;          // Boolean either true or false
console.log(typeof z)

let a;
console.log(a)
console.log(typeof a)  // Undefined

let b = null;
console.log(b)        // Null

let student = {
    name:'Ian',
    age: 22,          // Objects
    isStudent: true
}

let Toyota = ['Lexus', 'v8', 'Prado']  // Arrays

let description = Symbol("white, long-sleeve, polo-neck");
console.log(description)  // Symbol


// DATA TYPES METHOD

// Strings
// 1. Length

let leng = "My name is Ian Mburu, i come from Nairobi, I am a software developer."
console.log(leng.length)

let l = '2222222222222222222222222222222222222222222222222222222222222222222222222222'
console.log(l.length)
                                            // Only returns length of the string but not numbers
let Ronaldo = 21345679009324
console.log(Ronaldo.toString().length)

// 2. Returns Character

let char = 'Ecclesiastes';
console.log(char[7])                        // Returns the character which is specified

let cha = 'Ecclesiastes';   // Undefined 
console.log(cha[79]) 

// 3. to uppercase() / to lowercase()

let name = 'Ian Mburu'
console.log(name.toUpperCase())            // Converts to uppercase and lowercase

console.log(name.toLowerCase())

// 4. Substring() & Slice()

let player = 'Bellingham';
console.log(player.substring(0, 5))  // Belling
      
console.log(player.slice(0, 5))                  // Extracts part of a string

// 5. Split()

let plyr = 'Virgil';
console.log(plyr.split(''))                     // Splits the array into substring

// 6. Concatenation()

let object1 = 'match';                            // joins two variables/ together
let object2 = 'box';
let conc = (object1 + object2)
console.log(conc)



                     // NUMBERS
        
// 1. tofixed()

let num1 = 3.141213456745
console.log(num1.toFixed(2))                    // Rounds to 2 decimal places

// 2. tostring()

let num2 = 3.141213456745;
console.log(num2.toString())                    // Converts to string

// 3. parseint()/ parsefloat()

let num3 = '3.141213456745';
console.log(parseInt(num3))                     // Converts to integer

console.log(parseFloat(num3))                   // Converts to float




//     MATHS OPERATIONS 

const radius = 10;
const pi = 3.14;

// Area = n * r^2
const area = pi * (radius ** 2);

console.log("The area of the circle is: " + area);

// Template string way - allow inject variables into a string using backticks 

const name1 = 'Ian';
const age = 22;
const city = 'Nairobi';
const radius1 = 13245675432;
const pi1 = Math.PI;
const area1 = pi1 * (radius ** 2);

// template string that includes these variables

const message = 'Hello, my name is ${name1}. I am ${age} years old and I live in ${city} city. Did you know the that the area of a circle with a radius of ${radius1} is ${area1} ? '

console.log(message);