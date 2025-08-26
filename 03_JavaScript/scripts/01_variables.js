console.log("hello from js file")

//change color of paragraph
document.getElementById("myParagraph").style.color='blue';


/*Variables in JS
    -no type declaration in JS
    -any data type value can be placed in whichever variable that is desired
    */


/*declare a variable as var, let, or const
    var - global scope, visible outside pf block declared in
    let - Block scope. Visible only within block it was declared in 90% of the time let should be used
    const - final variable. can't change. This is also locally scoped
*/
/**/
/**/
/**/


var a = 5;
let b = 4;

//print an access values hre
console.log("-------------");
console.log("BEFORE BLOCK:");
console.log("-------------");
console.log("var a = " + a);
console.log("let b = " + b);
console.log("-------------");


if(true) {
    var c = 3;
    let d = 2;
    const e = 1;

    console.log("INSIDE BLOCK: ");
    console.log("var a = " + a);
    console.log("let b = " + b);
    console.log("var c = " + c);
    console.log("let d = " + d);
    console.log("const e = " + e);
    console.log("-------------");

}

console.log("INSIDE BLOCK: ");
console.log("var a = " + a);
console.log("let b = " + b);
console.log("var c = " + c);
// console.log("let d = " + d); Throws error. Variable is locally scoped within the if statement and not visible outsode of the code block
// console.log("const e = " + e); Const variables are also locally scoped so it will also throw an error

console.log("-------------");

/* JavaScript allows for the following data types
        - strings
        - numbers (no int or float) include whole numbers, decimals, NaN, etc.
        - Boolean
        - object type - 
        - null - absence of value
        - Undefined - no value given
        - symbol - new data type not necessarily required for much so far. Check documentation if necessary
*/

let myvar = "hello, world!";
console.log("myvar = " + myvar);
myvar = 5.45;
console.log("myvar = " + myvar);
myvar = null;
console.log("myvar = " + myvar);
myvar = undefined;
console.log("myvar = " + myvar);
let myvar2;
console.log("myvar 2 = " + myvar2);

console.log("-------------");



// javascript can be graceful when adding values of different data types
// will translate values ot the right data types to do the addition or concantenation

console.log("'Hello' + 5 = " + ("hello" + 5 ) );
console.log("true + 5 + " + (true + 5) ); // true evalutates to 1

// NaN number type but does not throw an error. given when a variable or operation cannot be evaluated to a number
console.log("'Hello' - 5 = " + ("hello" - 5 ) );

console.log("-------------");

// this was to show order of operations
console.log( '5 + true + "Hello" + 7 * 2 = ' +(5 + true +"Hello" +7 * 2));


// Functions - can be single entities without being attached to a class or object
function myFunc(name) {
    console.log("func = " + name);
}

myFunc("Dalton")
myFunc("Hello, World!");
myFunc(5.4);

function mult(a, b) {
    return a * b;
}

console.log( mult(2, 3));

let ans = mult(3, 5);
console.log(ans)