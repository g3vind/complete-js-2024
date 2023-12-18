// PASSING FUNCTION AS ARGUMENTS (HOF)

let upperCase = function (str) {
    return str.toUpperCase();
}

let lowerCase = function (str) {
    return str.toLowerCase();
}

let transformer = function (str, fun) {
    return fun(str)
}

console.log(transformer("hello", upperCase))
console.log(transformer("HI", lowerCase))



// ------ FUNCTION RETURNING ANOTHER FUNCTION --------
let compliment = function (msg) {
    return function (name) {
        console.log(`Message: ${msg}. Name: ${name}.`)
    }
}

// console.log(compliment("You're doing good")("Govind"))
compliment("You're doing good")("Govind")

// 2nd Method
let complimented = compliment("You're good coder")
complimented(("Abhi"))

    // compliment is higher order function




    // Immediately invoked function expression
    // Executed Only Once

    (function () { console.log("This will execute") })()