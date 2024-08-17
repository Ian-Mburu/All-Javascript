let fruits = ['Apple', 'Orange', 'Banana'];
console.dir(fruits)                // console.dir()

let cars = ['Landcruiser', 'Audi', 'Mercedes']
console.table(cars)               // console.table()

console.group('User Info');
console.log('Name: John Doe');
console.log('Age: 30');
console.groupEnd();                // console.group()


console.time('Timer');

let sum = 0;
for (let i = 0; i < 1000000; i++) {
    sum += i;
}

console.timeEnd('Timer')