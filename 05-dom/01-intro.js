// querySelector - returns the first element
// querySelectorAll - returns all the elements


//----------querySelector--------------------
const ele1 = document.querySelector('p')
console.log(ele1)

let ele2 = document.querySelector(".one")
console.log(ele2)

// -----------querySelectorAll----------------
ele2 = document.querySelectorAll('p')
console.log(ele2)

const ele4 = document.querySelectorAll(".p")
console.log(ele4)

// accessing through class
const ele3 = document.getElementsByClassName("one")
console.log(ele3)

// getting by tag name
const tag = document.getElementsByTagName('p')
console.log(tag)