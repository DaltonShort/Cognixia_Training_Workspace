/* covering
        - Truthy vs Falsy
        - difference between == and ===
        - transpilation
*/

let condition = false;

if (condition) {
        console.log("condition is True");
}
else {
        console.log("condition is False");
}

// 5 is not necessarily equal to true, but it is evaluated as true within a condition in JavaScript
if(5) {
        console.log("5 is True");
}
else {
        console.log("5 is False");
}

/*
-truthy and falsey are values that will evaluate to a true or false in conditions even though they are not booleans
-these values are not eual to true and false. just being evaluated as such
-values evalutate
        falsey -> 0, NaN, flase, undefined, null, empty string, 
        truthy -> evrything else
*/


let myval = 0;
if(myval) {
        console.log(myval + " is a Truthy")
}
else {
        console.log(myval + " is a Falsey")
}


// null evaluates to false when talking about truthy falsey but is not equal to flase
if(null == false) {
        console.log("null == False");
}
else {
        console.log("null != False")
}

// transpilation = translate a value to fit the data type of of the variable comparison being made
console.log("5 + true = " + (5 + true));


// 5 = "5"
// 5 == 5 <- translated string 5 to number 5
// true
if(5 == "5") {
        console.log("5 == '5'");
}
else {
        console.log("5 != '5'");
}


// "" == 0
// "" == "" <- translate 0 to empty string
// true 
if("" == 0) {
        console.log("'' == 0");
}
else {
        console.log("'' != 0");
}



// what is the difference between "==" and "===" in JS
// == -> only compares the value
// === -> compares value and data type

// if using === first thing that will be checked is the data type
// if data types are not the same, it will evaluate as not equal
// after the data type it compares the value
if(5 === "5") {
        console.log("5 === '5'");
}
else {
        console.log("5 !== '5'");
}

// !== -> same thing as === but opposite. (not ===)
if("" !== 0) {
        console.log("'' !== 0");
}
else {
        console.log("'' === 0");
}
