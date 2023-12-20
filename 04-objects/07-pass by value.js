// eg for passing by value in js

function updateValue(value) {
    value = 32
}
let num = 10
updateValue(num)
console.log(num)  // 10
// In this example, num is a primitive type(a number), and when you pass it to the updateValue function, a copy of the value is passed.Changing the value inside the function does not affect the original variable.