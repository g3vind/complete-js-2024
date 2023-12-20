// used to iterate over properties of an object
const myObj = {
    name: "John",
    age: 22,
    place: "Patna"
}

// using for in loop
for (let key in myObj) {
    console.log(`Key - ${key} & Value -  ${myObj[key]}`)
}

// for an array
const arr = ["a", "b", "c", "d"]
for (let i in arr) {
    console.log(`${i}: ${arr[i]}`)
}