// simple methods
let arr = ["a","b","c","d"]

// reverse -- mutates org array
console.log(arr.reverse())
console.log(arr)

// concat -- no mutation
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let newArr = arr1.concat(arr2)
console.log(newArr)
console.log(arr1)
console.log(arr2)

// join -- no mutation
let joined = arr.join("@")
console.log("using join():",typeof joined, joined)

// slice -- continuous part of array -- no mutation
let num = [2,4,5,6,7,7,8,9]
console.log("original array:", num)
console.log("using slice:",num.slice(0,3)) // [ 2, 4, 5 ]


// splice -- add new element
let num2 = [2,3,5,7,8,9,0,3,1]
console.log("using splice:", num2.splice(1,2,1)) // 2
console.log("original array:", num2)


// at method 
let nums = [1,2,3,4,5]
console.log(nums.at(0))