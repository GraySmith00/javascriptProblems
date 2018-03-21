// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person. 

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.multiplyFavoriteNumber = function(num){
        return num * this.favoriteNumber;
    }
}

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.
const gray = new Person('Gray', 'Smith', 'blue', 16);
console.log(gray);

console.log(gray.multiplyFavoriteNumber(3));

// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.favoriteColor = favoriteColor;
    Parent.apply(this, arguments);
}

const jane = new Child('jane', 'doe', 'pink', 'pasta');
console.log(jane);


// Creat a constructor function for a vehicle: every object from this constructor should have a make, model, and year property. Each object should also have a property called isRunning, which should be set to false

// Every object created from the vehicle constructor should have a function called turnOn, which changes the isRunning property to true

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
    return this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
    return this.isRunning = false;
}

Vehicle.prototype.honk = function() {
    if (this.isRunning) {
        return 'beep';
    }
}