// Task 1

let a = Number(prompt("enter a number "));
let b = 4;
let c = 40;
let d = 41;

if (a === b || a === c || a === d) {
  console.log("correct");
} else {
  console.log("not correct!");
}


// Task 2
let birthYear = +prompt("Enter your birth year");

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log("Your age is:", age);



// Task 3
let n = Number(prompt("enter a number "));
let mynums = [10, 20, 30, 40, 60, 50];

if (mynums.includes(n)) {
  console.log("correct");
} else {
  console.log("not correct");
}
