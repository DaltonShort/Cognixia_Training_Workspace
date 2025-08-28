/**
 functions:
    - declaring functions
    - calling functions
    - arrow functions (lambda functions)
    - call backs
 */


// declare a function with the function keyword
function helloWorld () {
    console.log("Hello");
}    

// call a function by its name plus ()
helloWorld();
console.log("--------------------------------------------");

// store function in variable
const HI = function() {
    console.log("HI");
}
HI();
console.log("--------------------------------------------");


const addValues = function(a, b, c) {
    return a + b + c;
}
console.log(addValues(2, 5, 9) );
console.log("--------------------------------------------");


/**
  - ES6 - introduced arroe function syntax
  - arrow syntax/lambda expression - same as using function keyword
  - arrow functions take up less space than functions created with the function keyword and execute faster
  - syntax - () => {}
        (args) => {function body}
 */

        // arrow function no arguments
const greeting = () => {
    console.log("Hello, World!");
}
greeting();
console.log("--------------------------------------------");

// arrow function with arguments
const mult = (a, b) => {
    return a * b;
} 
console.log("4 x 8 = " + mult(4, 8) );
console.log("--------------------------------------------");


// if funtion only returns a value, you don't need to use the return keyword or curly brackets
const mult2 = (a, b) => a * b;
console.log("4 x 8 = " + mult(4, 8) );
console.log(`4 x 8 = ${mult(4, 8)}` );
console.log("--------------------------------------------");

// if you only have one argumetn, there is no need for parenthesis
const print = x => {
    console.log(x);
}
print("hello");
print(3.5);
console.log("--------------------------------------------");

// combining arrow functions together
const square = x => x * x;
print(square(4));
console.log("--------------------------------------------");


// callbacks - function that is called/executed within another function
//  pass a function as an argument to another function

// setup 2 simple functions...
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

// ... setup function that accepts a function as an argument...
const calcPrint = (a, b, calc) => {
    console.log("num1 = " + a);
    console.log(`num2 = ${b}`);
    console.log(`calc results: ${calc(a, b) }` );
}

// ... use calcprint function to display information for different calculations
calcPrint(7, 4, sum);
calcPrint(12, -6, sub);

console.log("--------------------------------------------");

/**
 how are callbacks and arrow functions often used?
    - sum and sub could be functions that can be used elsewhere besides in a callback with calcPrint
    - however you may need to create a function that finds the average of 2 numbers and pass it to calcPrint
        - but will only be used once so there is no need to store the function definiton
    - we can create an arrow function and pass it in calcprint without storing it
 */

// simple arrow function to create callback function as it is invoking calcPrint
calcPrint(7, 8, (a, b) => ((a * b) / 2) );
console.log("--------------------------------------------");

calcPrint(2, 4, (a, b) => {
    console.log("Hello");
    return a + b + 100;
} )

console.log("--------------------------------------------");


const temp = () => {
    print("hello");
    print("hello");
    print("hello");
    print("hello");
    print("hello");

    calcPrint(2, 4, (a, b) => {
    console.log("Hello");
    return a + b + 100;
    } )
}

temp();