"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var msg = 'Hello World';
console.log(msg);
// Types
var name = 'Anupam Chakrawarti';
var language = 'TypeScript';
var version = 4.2;
var sentence = "My name is " + name + "\nI am learning " + language + " v" + version;
console.log(sentence);
// Homogeneous array declaration
var listOne = [1, 2, 3];
var listTwo = [4, 5, 6];
// Array of mixed types: Tuples
// Fixed no of values with different types and order has to be maintained
var person1 = ['Iron Man', 3000];
console.log(listOne);
console.log(person1[0] + ": I love you, " + person1[1] + "!");
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var CONSTANTS;
(function (CONSTANTS) {
    CONSTANTS[CONSTANTS["pi"] = 3.14] = "pi";
    CONSTANTS[CONSTANTS["e"] = 2.72] = "e";
})(CONSTANTS || (CONSTANTS = {}));
function area(radius) {
    console.log("Area of a circle with radius " + radius + " is " + (2 * CONSTANTS.pi * radius).toFixed(3));
}
area(20);
// Any type
var randomValue = 10;
randomValue = true;
randomValue = "Anupam";
// Making use of any to access any property or methods
// (randomValue as number).toFixed(2);
// randomValue.toUppercase();
// randomValue.name;
// Unknown Type
var randomValueTwo = '10';
// (randomValueTwo as number).toFixed(2);
randomValueTwo.charAt(1);
console.log(randomValueTwo);
// Type Inference
var num;
num = 20;
num = true;
console.log('Type Inference dormant:', num);
var anotherNum = 20;
// anotherNum = true;
console.log(anotherNum);
var multiType;
multiType = 100;
multiType = false;
console.log('MultiType with Aliases: ', multiType);
// functions
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 10);
//   add(5, '100')
console.log('Optional Parameter: ', add(100));
// default parameters
function totalCost(price, shipCost) {
    if (shipCost === void 0) { shipCost = 40; }
    if (price < 500)
        return price + shipCost;
    else
        return price;
}
console.log(totalCost(600));
console.log(totalCost(300, 180));
function fullName(person) {
    if (person.lastName) {
        console.log(person.firstName + " " + person.lastName);
    }
    else {
        console.log("" + person.firstName);
    }
}
var avenger1 = {
    firstName: "Wanda",
    lastName: "Maximoff"
};
var avenger2 = {
    firstName: "Hawkeye"
};
fullName(avenger1);
fullName(avenger2);
// classes
var User = /** @class */ (function () {
    function User(userName) {
        this.userName = userName;
    }
    User.prototype.greet = function () {
        console.log("Welcome back, " + this.userName + "!");
    };
    return User;
}());
var user1 = new User('noobmaster69');
// user1.greet()
var Administrator = /** @class */ (function (_super) {
    __extends(Administrator, _super);
    function Administrator(adminName) {
        return _super.call(this, adminName) || this;
    }
    Administrator.prototype.kickAvenger = function (avenger) {
        console.log(this.userName + " has kicked " + avenger + "!");
    };
    return Administrator;
}(User));
var admin = new Administrator('noobmaster69');
admin.greet();
admin.kickAvenger('Thor');
// Arrays
var fruits = ["lemon", "apple", "orange"];
fruits.push("jackfruit");
// fruits.push(25); // Error as TS's Type inference detects fruits as an array of string.
// fruits[0] = 32; // Error
var numStrings = [];
numStrings.push(10);
numStrings.push('Apple');
// numStrings.push(false)
console.log(numStrings);
console.log(fruits);
// Objects
var myObj = {
    name: 'Anonymous',
    age: 69,
    profession: 'Rtd. Cononel'
};
myObj.age = 32;
//   myObj.name = 007 Error, octal type :D
myObj.skill = ['sniper', 'strategist'];
console.log(myObj);
