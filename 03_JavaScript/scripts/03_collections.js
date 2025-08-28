/*
what we need to know about collections in JavaScript
    - arrays 
    - objects (Json)
    - spread operator
*/

/*
arrays
JS arrays are declared using []. not of a fixed size
*/

// when working with collections. declare them as const
// as you don't want to replace an entire collection by re-defining variable it is stored in

const numArr = [1, 2, 3, 4];
console.log("numArray = " + numArr);
console.log(numArr);
console.log("--------------------------------------------");

// arr[index] references element at that index
console.log("numArr[0] = " + numArr[0]);
console.log("--------------------------------------------");

// arrays don't strictly store one data type
[numArr[0] = "Hello"];
console.log(numArr);
console.log("--------------------------------------------");

// looping thorugh an array
for (let i = 0; i < numArr.length; i++) {
    // `` = write string and use ${} to insert and interpret values
    console.log(`numArr[${i}] = ${numArr[i]}`)
}

console.log("--------------------------------------------");


const fruitArr = ["apple", "orange", "banana", "strawberry", "melon"];
console.log(fruitArr);

// push() add an element to the end of the array
fruitArr.push("mango");
console.log(fruitArr);


// splice = remove one or more elements from an array
// splice (starting element, number of elements to remove)
fruitArr.splice(1, 1);
console.log(fruitArr);

// splice() = can also add elements in the middle of an array 
// splice( starting element, number of elements to delete, elements to add)
fruitArr.splice(2, 0, "watermelon");
console.log(fruitArr);

fruitArr.splice(2, 0, "kiwi", "blue-berries");
console.log(fruitArr);


// if we add an aray it will put the array in the index it was inserted into not the values. need to use the spread operator
// fruitArr.splice(2, 0, ["kiwi", "blue-berries"]);
// console.log(fruitArr);


// sort default sorts by ascending value
fruitArr.sort();
console.log(fruitArr);

/*
spread operator:
    - used to combine 2 arrays into a new array eith all the lements from both the originals
    - spreads out and extracts elements from an array to be placed in another array 
*/
const foodArr = ["chips", "juice", "eggs"];

// create a 2 dimensional array
const groceries = [foodArr, fruitArr];
console.log(groceries);


const groceries2 = [ ...foodArr, ...fruitArr];
console.log(groceries2);

// the "..." adds the elements of the array as if they were individual elements to add
fruitArr.splice(2, 0, ...["raspberries", "tangerine"]);
console.log(fruitArr);
console.log("--------------------------------------------");




/*
json = popular object notation for sending data cross different channels. JavaScript Object notation
    - objects are created without the need for a class
    - objects are declared with {} 
    - made of key-vaue pairs
    - keys are declared as strings or raw values
    - values can be any data type including functions and arrays
    - want to access values through their keys
*/

const person = {
    name: "Dalton", 
    id: 1234, 
    "hair color": "brown",
    favoriteColors: ["red", "black", "yellow"], 
    hello: function() {console.log("Hello");}, 
    address: {
        street: "1 main street",
        city: "new york", 
        state: "NY",
        zip: "12345"
    }
}

console.log(person);


// access values in an object
console.log( person.name );
console.log("--------------------------------------------");
console.log( person.favoriteColors );
console.log("--------------------------------------------");
console.log( person.favoriteColors[0] );
console.log("--------------------------------------------");
console.log( person.address );
console.log("--------------------------------------------");
console.log( person.address.street );
console.log("--------------------------------------------");

// can also access values this way
console.log( person["name"] );
console.log("--------------------------------------------");


// add more key-value pairs
person.eyecolor = "brown";
person["occupation"] = "Full STack Developer";
console.log(person);

// reassign values
person.eyecolor = "green";
console.log(person);
console.log("--------------------------------------------");

// call function
person.hello();
console.log("--------------------------------------------");


// spread operator will work with objects too
const words = {word: "Hello"}
const numbers = {num: 1}

const newObj = {...words, ...numbers} 
console.log(newObj);
console.log("--------------------------------------------");


