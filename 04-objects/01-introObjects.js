// INTRO TO OBJECTS IN JS

let car = {
    name: "Speed",
    color: "red",
    mileage: 12,
    model: "2000",
    company: "TATA",
}
console.log(car)

// accessing properties of objects in js
console.log(`Name : ${car.name} Color : ${car.color} Company : ${car.company}`)

// intresting example
let property = "color"
console.log(car[property])  // red

// -----------DELETE PROPERTIES OF OBJECT---------
let obj = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3",
}

delete obj.prop3
console.log(obj)  // { prop1: 'value1', prop2: 'value2' }

// delete always return 'true
let returnValue = delete obj.prop1
console.log(returnValue)  // true



// -----------FUNCTIONS VS METHODS--------------------
let ageCalculate = function (birthYear) {
    console.log(`Age is ${2023 - birthYear}`)
}
ageCalculate(2002)

// FUNCTION INSIDE AN OBJECT ------ "METHOD"

let obj2 = {
    fullName: function (fName = "Govind", lName = "Singh") {
        console.log(`${fName + " " + lName}`)
    }
}

obj2.fullName()
obj2.fullName("Ladhli", "Singh")