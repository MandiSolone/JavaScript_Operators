console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
// YOUR CODE HERE
var a = 20; 
var b = 4; 
var add = (a + b);
var minus = (a-b); 
var multiply = (a*b); 
var divide = (a/b);  
console.log(a);
console.log(b);
console.log(add);
console.log(minus);
console.log(multiply);
console.log(divide);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

console.log(num + str);
console.log(num + str2);
console.log(num + isPresent);
console.log(firstName + num);
console.log( isPresent + str);
console.log( firstName + lastName);

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE
let val = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;

console.log(val == str3);
console.log(val === str3);
console.log(!isPresent2);
console.log("EXERCISE 3:\n==========\n");

console.log (val >= str3);
console.log( `eleven` == str4 && val >= str3);

console.log("EXERCISE 3:\n==========\n");
console.log(!isPresent2 || isPresent2);

console.log("EXERCISE 3:\n==========\n");
console.log(0 == false);
console.log(0 === false);
console.log( 0 != false);
console.log(0 !== false);