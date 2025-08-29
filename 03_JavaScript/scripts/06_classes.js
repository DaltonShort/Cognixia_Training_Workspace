/*
    Classes mode up of:
        - member variables / attributes
        - functions / methods
        - constructors (in other languages maybe deconstructors)
*/

class Circle {

    // constructors -> called when creating an object from a class
    constructor(color, radius) {
        // this -> point to the current object
        this.color = color;
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    description() {
        console.log(`I am a ${this.color} circle with a radius of ${this.radius}`);
    }
}


const redCircle = new Circle("red", 3);

redCircle.description()

console.log("Circle Area: " + redCircle.area());

console.log(redCircle.radius);

redCircle.radius = 7;

console.log(redCircle.radius);
