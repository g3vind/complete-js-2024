function updateObject(obj) {
    obj.property = "updated"
}

const myObject = { property: "original" }

updateObject(myObject)
console.log(myObject)  // { property: 'updated' }



// In this example, myObject is an object.When you pass it to the updateObject function, you are passing a copy of the reference to the object.Both the original variable and the parameter in the function point to the same object, so changes made inside the function are reflected outside.