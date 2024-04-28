// for loop simple
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Looping string
const str = "tea chai";
for (const el of str) {
  console.log(el);
}

const str2 = "Hey There";
for (const str of str2) {
  console.log(str);
}

// printing array of strings using for loop
let arr = ["dish1", "dish2", "didh3", "dish4"];
for (const el of arr) {
  console.log(el);
}

// access elements and print
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// opposite print
console.log("opposite array print");
for (let i = arr.length - 1; i >= 0; i--) {
  console.log("for loop  " + arr[i]);
}

// while loop
let j = 1;
while (j <= 5) {
  console.log("while loop", j);
  j++;
}

//do-while loop -- runs atleast one time

let k = 1;
do {
  console.log("do-while loop", k);
  k++;
} while (k <= 5);

// if-else statements
const isTrue = false;

if (isTrue) {
  console.log("isTrue is true");
} else {
  console.log("isTrue is false");
}

// else if
const amount = 0;
if (amount > 2000) {
  console.log("greater than 2000");
} else if (amount > 1000) {
  console.log("greater than 1000");
} else if (amount > 500) {
  console.log("greater than 500");
} else {
  console.log("else");
}

// ternary operator
isTrue ? console.log("true") : console.log("false");

// nested if statements
let num = 2;
if (num <= 22) {
  console.log("less than 22");
  if (num < 10) {
    console.log("less than 10");
  } else if (num > 30) {
    console.log("greater than 30");
  }
}

// break
console.log("BREAK STATEMENT");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("breaking at i = 3", i);
    break;
  }
  console.log("inside the loop", i);
}

// continue
console.log("CONTINUE STATEMENT");
for (let k = 1; k <= 5; k++) {
  if (k == 2) {
    console.log("skipping iteration at k = 2", k);
    continue;
  }
  console.log("inside loop", k);
}

// break and continue are called jump statements

// -------------LOGICAL OPERATORS------------------

// Logical AND (&&)
let isTrue1 = true;
let isTrue2 = true;
let resultAND = isTrue1 && isTrue2;
console.log(`Logical AND: ${resultAND}`); // Output: Logical AND: true

// Logical OR (||)
let isTrue3 = true;
let isFalse1 = false;
let resultOR = isTrue3 || isFalse1;
console.log(`Logical OR: ${resultOR}`); // Output: Logical OR: true

// Logical NOT (!)
let isFalse2 = false;
let resultNOT = !isFalse2;
console.log(`Logical NOT: ${resultNOT}`); // Output: Logical NOT: true

// Combining logical operators
let x = 5;
let y = 10;
let z = 15;

// Using AND and OR together
let resultCombined = (x < y && y < z) || x === y;
console.log(`Combined: ${resultCombined}`); // Output: Combined: true

// PASSWORD USING LOGICAL OPERATORS
let password = "qwerty123@#";
if (password.length > 5 && password.includes("@")) {
  console.log("good password");
} else {
  console.log("change password");
}

// -----------VARIABLE AND BLOCK SCOPE-------------
let score = 99; // global scope

if (true) {
  let score = 22; // local scope
  console.log("inside block", score);
}
console.log("outside block", score);

// TERNARY OPERATOR
let isSahi = false;

isSahi ? console.log("isSahi is true") : console.log("isSahi is false");

// ----------- SWITCH ---------------
let daysOfWeek = 22;
switch (daysOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thu");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  case 7:
    console.log("Sun");
    break;
  default:
    console.log("Invalid");
}
