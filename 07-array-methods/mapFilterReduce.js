// -------------MAP METHOD -- gives new array no mutation on org array

// e.g. 1
let arr = ["govind","abhi","aditi","mohit"]
arr.map((el)=> console.log(el))

// e.g. 2
let salary = [1000, 2000, 3000,4000]

let newSalaries = salary.map((salary)=>{
    incrementedAmount = salary/2
    return salary+incrementedAmount
})
console.log("after 50% increment:",newSalaries)
console.log("original salaries:",salary)

// -------FILTER METHOD----------
// perform filteration on array

let gifts = ["a","b","c","d","e","f","g","h"]
// now want to filter only "a" and "g"
let filteredArray = gifts.filter((gift)=>{
    if(gift==="a"||gift==="g"){
        return gift
    }
})

console.log("filtered array:",filteredArray)
console.log("original array:", gifts)

// filtering out even numbers from array
let nums = [1,2,3,4,5,5,6,7,8]
let result = nums.filter((num)=>{
    return num %2==0
})
console.log(result)

// --------- REDUCE METHOD---------------
// 1. run reducer function for each element in the array
// 2. Array.reduce(function(total, currentValue), initialValue)
// 3. it returns a single value

let numbers = [1,2,3,4,5,6,7,8,9,10]
let sum = numbers.reduce(function( total, currentValue){
    console.log(total+" "+currentValue)
    return total + currentValue
},0)
console.log(sum)
