"use strict";
exports.__esModule = true;
var josh_student_class_1 = require("./josh-student-class");
var message; //type any
message = "abc";
var endsWithC = message.endsWith("c");
console.log(endsWithC);
var messageTwo; // type any
messageTwo = "def";
var endsWithF = messageTwo.endsWith("f");
console.log(endsWithF);
var studentOne = new josh_student_class_1.Student("Harry 'Green Goblin' Osborn", 5);
studentOne.setStd(10);
console.log(studentOne.name);
studentOne.name = 'Peter Parker';
console.log(studentOne.getStd());
studentOne.studentInfo();
