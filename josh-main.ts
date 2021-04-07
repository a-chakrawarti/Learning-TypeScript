export {}
import {Student} from './josh-student-class';
let message; //type any
message = "abc";
let endsWithC = (<string>message).endsWith("c");
console.log(endsWithC)


let messageTwo; // type any
messageTwo = "def"
let endsWithF = (messageTwo as string).endsWith("f")
console.log(endsWithF)


let studentOne = new Student("Harry 'Green Goblin' Osborn", 5)
studentOne.setStd(10);
console.log(studentOne.name)
studentOne.name = 'Peter Parker'
console.log(studentOne.getStd())
studentOne.studentInfo()