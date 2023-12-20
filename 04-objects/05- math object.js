let number = 9.2

console.log(Math.round(number))  // 10  round to nearest integer

console.log(Math.floor(number))  // 9 round to down

console.log(Math.ceil(number))  // 10 round to up

// remove decimal part
console.log(Math.trunc(number))  // 9

// random
// console.log(Math.random())  // between 0 and 1 always

let random = Math.random()
console.log(Math.round(random * 100))  // gives value between 1 to 100