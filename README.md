# TypeScript

## What is TypeScript?

- Open-source programming language from Microsoft
- A Typed superset of JavaScript
- A language building up on JavaScript
- Adds new Features + Advantages to JavaScript
  - Types
  - Next-gen JS features compiled down for older browsers
  - Non-JS features like Interfaces or Generics.
  - Meta programming features like Decorators.
  - Rich configuration options.
- It is a powerful compiler that runs over the code to compile the TypeScript code into JavaScript.

- [Difference between Transpilers and Compiler](https://stackoverflow.com/questions/44931479/compiling-vs-transpiling#:~:text=Compiling%20is%20the%20general%20term,a%20similar%20level%20of%20abstraction.)

## Why TypeScript?

> In JS, when we access the value of an input element regardless of its input type, its always a string.

- JS is dynamically typed and error only shows up in runtime when instantiated. TS adds type support to JS, and errors are caught while it is being typed and during the compilation.
- Specifying type is completely optional in TS.
- More time on coding, less time on debugging.

- TS forces us to write better, cleaner and less error prone code.

- TypeScript can't be executed by JavaScript environment like the browsers and NodeJS.

## Installing TypeScript

`npm install -g typescript` : This installs TypeScript globally.
`tsc -v` : Version of TypeScript install on the machine.

## Hello, World!

```typescript
let msg = "Hello, world!";
console.log(msg);
```

- Save the file as .ts extension before compiling.

- To compile the file, open up the terminal and run

- `tsc <filename>`: You could leave the extension '.ts' out while compiling.

- After successful compilation/transpilation of the TS file, a JS file will be generated with the same name on the same directory.

- Run the JS code in node using `node <filename>`

- You will be presented with an error `Cannot redeclare block-scoped variable 'msg'` on the TS file because the TS file is treated as a script rather than a module. Module has it's own scope whereas scripts share the global scope.

- To get around this add `export {}`, this exports nothing and in-turn makes it behave like a module.

- To get around recompiling on every edit do the below so it compiles on-save
  `tsc <filename> --watch`

## Variable declarations

- Checks whether the variable is declared in global scope, function scope or block-scoped.

## Types

```typescript
let name: string = "Anonymous";
// name = 'Anonymous' // This will throw an error before transpiling
let age: number = 63;
let isSeniorCitizen: boolean = true;
```

- This helps with static type checking that prevents devs from making mistakes.
- Intellisense: shows only type related property and methods. Example: on doing `age.` will show only number type methods and property.
- `null` and `undefined` are classified as subtypes of all other types. Example

```typescript
let name: string = undefined;
let age: number = null;
```

### Tuples

Fixed number of values, different types and order has to be maintained.

- Example:

```typescript
let characterOne: [string, number] = ["Goku", 9000];
```

### Enum

- Enum values begin with a value 0.

### Any

- If unsure what variable type is, use `any` type. Example data from API or dynamic user input.
- Most capable type in TS. It encompasses values of every possible type and doesn't do any checking before accessing its methods or property.
- Useful while migrating from JS to TS.

```typescript
let randomValue: any = 10;

randomValue = true;
randomValue = "Anupam";

// Making use of any to access any property or methods

randomValue.toFixed(2); // throws error on compiling the transpiled TS
randomValue.toUppercase();
randomValue.name;
```

### Unknown

- Introduced in TS 3.0
- Any value is assignable to type `unknown`
- Can't access any properties of an `unknown` type nor call or construct them.
- To make use of any property, we will have to do type assertion which is same as type casting in other languages.

### Type Inference

```typescript
// without specifying :type and type inference is dormant as no initialization is taking place
let num;
num = 20;
num = true;

// type inference has joined the chat
let numTwo = 20;
numTwo = true;

Error: Type 'boolean' is not assignable to type 'number'.
```

- Takes place only when initializing variables and not all the time.
- Provides static type checking and intellisense support.

### Union of types

```typescript
let multiType: number | boolean;
multiType = 100;
multiType = false;
multiType = "Hello"; // will throw an error
```

Use case would be

- When value is not under our control, eg from an library, API or user input.
- Why not use `any` type instead? Two reasons:
  - The union type restrict to the specified types whereas `any` type has no restrictions.
  - Intellisense support

## Functions

```typescript
function add(num1: number, num2?: number): number {
  // checking if num2 is provided or not
  if (num2)
    return num1 + num2;
  else
    return num1;
}

add(5,10)
add(5, '100')

Error: Argument of type 'string' is not assignable to parameter of
type 'number'

add()

Error: An argument for 'num1' was not provided.

add(100) // optional parameter num2, returns NaN
```

- On hovering while calling the function intellisense will show type of parameters it accepts and infers the return type if not specified.

### Optional Parameters

- In TS, every parameter is assumed to be required by the function. if called without parameters it throws an error. And in JS, it could have been possible to call the function without a parameter which will return the value `undefined`.
- We achieve the same in TS by adding a '?' at the end of parameter, making it optional and when provided will hold the value `undefined`.
- We can have any number of optional parameters and has to after the required parameter.

### Default Parameters

- Is like optional parameters with a set value instead of `undefined`.

```typescript
function totalCost(price: number, shipCost: number = 40): number {
  if (price < 500) return price + shipCost;
  else return price;
}

totalCost(600);
totalCost(300, 180);
```

## Interface

It is possible to specify an object as a Type in TypeScript.

```typescript
interface Person {
  firstName: string;
  lastName?: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
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
```

## Classes

```typescript
class User {
  public userName: string;

  constructor(userName: string) {
    this.userName = userName;
  }

  greet() {
    console.log(`Welcome back, ${this.userName}`);
  }
}

let user1 = new User("noobmaster69");
user1.greet();
```

## Access modifiers

- By default, each class memember is `public`.
- `private` can be accessed only within the same class. This way we can secure the class property.
- `protected` lets you access that property or method in the derived class.

### Reference

- [Learn TypeScript in 50 minutes by Codevolution](https://www.youtube.com/watch?v=WBPrJSw7yQA)
- [TypeScript Course for Beginners 2021 - Learn TypeScript from Scratch!](https://www.youtube.com/watch?v=BwuLxPH8IDs)
