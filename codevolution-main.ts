export {}
let msg = 'Hello World';
console.log(msg)

// Types

const name: string = 'Anupam Chakrawarti'
let language: string = 'TypeScript'
let version: number = 4.2

let sentence: string = `My name is ${name}
I am learning ${language} v${version}`

console.log(sentence)

// Homogeneous array declaration

let listOne: number[] = [1,2,3]
let listTwo: Array<number> = [4,5,6]

// Array of mixed types: Tuples
// Fixed no of values with different types and order has to be maintained

let person1: [string, number] = ['Iron Man', 3000]

console.log(listOne)
console.log(`${person1[0]}: I love you, ${person1[1]}!`)

// Enum

enum Color {Red, Green, Blue}

let c: Color = Color.Green;
console.log(c);

enum CONSTANTS {
    pi = 3.14,
    e = 2.72
  }
  
function area(radius: number): void {
    console.log(`Area of a circle with radius ${radius} is ${(2* CONSTANTS.pi* radius).toFixed(3)}`)
}

area(20)

// Any type

let randomValue: any = 10;

randomValue = true;
randomValue = "Anupam";

// Making use of any to access any property or methods

// (randomValue as number).toFixed(2);
// randomValue.toUppercase();
// randomValue.name;


// Unknown Type

let randomValueTwo: unknown = '10';

// (randomValueTwo as number).toFixed(2);
(randomValueTwo as string).charAt(1);

console.log(randomValueTwo)

// Type Inference

let num;
num = 20;
num = true;

console.log('Type Inference dormant:',num)

let anotherNum = 20;
// anotherNum = true;

console.log(anotherNum)

// Union of Types
type NumOrBool = number | boolean;
let multiType: NumOrBool;
multiType = 100;
multiType = false;

console.log('MultiType with Aliases: ', multiType)

// functions

function add(num1: number, num2?: number): number {
    if (num2) {
        return num1 + num2
    }
    else {
        return num1
    }
  }
  
  add(5,10)
//   add(5, '100')
console.log('Optional Parameter: ',add(100))


// default parameters

function totalCost(price: number, shipCost: number = 40): number {
    if (price < 500)
      return price + shipCost
    else
      return price
  }
  
console.log(totalCost(600));
console.log(totalCost(300, 180));


// Interface

interface Person {
    firstName: string;
    lastName?: string;
}

// Type Aliases with Object

type PersonWithTypes = {
    firstName: string;
    lastName?: string;
  };
  
function fullName(person: PersonWithTypes) {
    if (person.lastName) {
        console.log(`${person.firstName} ${person.lastName}`);
    } else {
        console.log(`${person.firstName}`)
    }
}
  
let avenger1 = {
    firstName: "Wanda",
    lastName: "Maximoff",
};

let avenger2 = {
    firstName: "Hawkeye",
};
  
fullName(avenger1);
fullName(avenger2);



// classes

class User {
    protected userName: string;
  
    constructor(userName: string) {
      this.userName = userName
    }
  
    greet() {
      console.log(`Welcome back, ${this.userName}!`)
    }
  }
  
let user1 = new User('noobmaster69')
// user1.greet()

class Administrator extends User {
    constructor(adminName: string) {
        super(adminName);
    }

    kickAvenger(avenger: string) {
        console.log(`${this.userName} has kicked ${avenger}!`)
    }
}

let admin = new Administrator('noobmaster69');
admin.greet();
admin.kickAvenger('Thor')


// Arrays

let fruits = ["lemon", "apple", "orange"];

fruits.push("jackfruit");
// fruits.push(25); // Error as TS's Type inference detects fruits as an array of string.
// fruits[0] = 32; // Error

let numStrings: Array<number|string> = []

numStrings.push(10)
numStrings.push('Apple')
// numStrings.push(false)
console.log(numStrings)

console.log(fruits)

// Objects

let myObj = {
    name: 'Anonymous',
    age: 69,
    profession: 'Rtd. Cononel'
  }
  
  myObj.age = 32
//   myObj.name = 007 Error, octal type :D
// myObj.skill = ['sniper', 'strategist']

  console.log(myObj)

