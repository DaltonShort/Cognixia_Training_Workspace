/**
* flow control
    - if-else statement
    - switch cases
    - loops: while, do-while, for, for-in, for-of
 */


// to check multiple conditions you use if-else statements
let num = 0;
if(num<0) {
    console.log(`${num} is negative`);
}
else if (num === 0) {
        console.log(`${num} is 0`);

}
else {
        console.log(`${num} is positive`);
}

console.log("----------------------------------------------------");


// switch cases = loo for specific cases or values
switch (num) {
    case 0:
        console.log("num is zero");
        break;

    case 1:
        console.log("num is one");
        break;

    default:
        console.log("num is some other number");
        break;
}

console.log("----------------------------------------------------");

// while vs do-while
//  do-while always runs atleast once
let n = 1;
while (n < 5) {
    console.log(`n = ${n}`);
    n++;
}

console.log("----------------------------------------------------");

n = 0;
do {
        console.log(`n = ${n}`);
        n++;

} while ( n < 5)
console.log("----------------------------------------------------");


const fruits = ["Apples", "oranges", "watermelon", "grapes", "mangos", "blueberries"];

//for loop
for (let i = 0; i < fruits.length; i ++) {
    console.log(`For loop: ${fruits[i]}` );
}
console.log("----------------------------------------------------");

// for of loop
for ( f of fruits ) {
    console.log(`For-Of Loop: ${f}` );   
}
console.log("----------------------------------------------------");


// for-in loop: loop through an object
let coins = {
    penny: 1,
    nickel: 5,
    dime: 10,
    quarter: 25
}

for ( key in coins ) {
    console.log(`key = ${key} | value = ${coins[key]} `);
}
console.log("----------------------------------------------------");

const products = [
    {
        id: 1,
        name: "chair",
        price: 23.99
    }, 
    {
        id: 2,
        name: "table",
        price: 123.99
    }, 
    {
        id: 3,
        name: "lamp",
        price: 10.99,
        type: "floor"
    }
] 

// often will be looping through arrays of objects
for (p of products ) {
    console.log(p);
    console.log(p.name);
}


console.log("----------------------------------------------------");
