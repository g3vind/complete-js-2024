// Add, Remove & Replace class of elements

let heading = document.querySelector("h1")

// adding class
heading.classList.add("newClass")

// removing class
heading.classList.remove("newClass")

// replacing class
heading.classList.replace("main","newMain")



// -------PARENT, CHILDREN & SIBLING ELEMENT
let parentElement = document.querySelector(".parent")

// all child of parent
console.log(parentElement.children)

// we can't run forEach on HTML Collection so convert into array

// converting htmlCollection to Children
let convertedArray = Array.from(parentElement.children)
console.log(convertedArray)

// now applying forEach

convertedArray.forEach(function(ele){
    ele.classList.add("hehehe")
})
