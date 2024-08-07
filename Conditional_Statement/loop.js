//  For Loops, while loop, do...while loop
// Loops can execute a block of code a number of times.

// for -- repeats a block of code a specified times, by creating a loop with 3 optional expressions.

/* 
for (expression1; expression2; expression3) {
    code of block to be executed.
}
*/

let sum = 0;

for (let a = 1; a <= 10; a++) {
  sum += a;
}

console.log("Sum of numbers from 1 to 10 is: " + sum);


for (let i = 0; i < 10; i++) {     // i is 9, condition 'i < 10' is true '9 < 10
    console.log(i);                 // condition = i < 0(greater than, less than...)
}


// while  -- loops through a code block as long as the condition is true.

let x = 1;
while (x < 10) {
    console.log(x++);
    
    if (x == 6) {
        break;        // breaks the loop on the assigned number
    }
}


let count = 0;

while (count < 5) {
  console.log("Count is " + count);
  count++;
}

/* do...while`loop  -- similar to while loop but this runs code block once, then check if the condition is true before repeating the loop indefinitely */

let interval = 0;

do {
  console.log("Interval is " + count);
  interval++;
} while (interval < 5);