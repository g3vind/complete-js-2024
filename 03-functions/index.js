// normal func
function addNum(a, b) {
    return console.log("Sum ", a + b)
}
addNum(4, 6)

// function expression
let sub = function print() {
    console.log("function expression")
}
// calling function expression
sub()

// ------- ARGUMENTS AND PARAMETERS---------
let invitation = function (name = "default value") {
    console.log(`${name} is invited`)
}
invitation("Govind")
// calling with default value
invitation()

// --------RETURNING VALUES FROM FUNCTION-----------    
let ageCalculator = function (birthYear, currentYear = 2023) {
    let age = currentYear - birthYear
    console.log(`Your current age is ${age}`)
}
ageCalculator(2002)




