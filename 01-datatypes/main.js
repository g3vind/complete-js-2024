let num = 22
console.log(typeof (num))

num = "Hi"
console.log(typeof (num))

num = true
console.log(typeof (num))

// var
var score = 22
var score = 24
console.log(score)

// let
let num2;
num2 = 22;
console.log(num2)

// const
const name = "govind"
// const name;     ------not allowed have to initialize
// name = "abhi"
// console.log(name)  -------- cant reassign to const


// null
let marks = null
marks = 99
console.log(marks)


// undefined
let scores;
console.log(scores)  // ------ undefined


//-----------DATATYPES----------------
// 1. number
// 2. string
// 3. boolean
// 4. undefind
// 5. null
// 6. objects
// 7. symbol



// ---------STRINGS--------------
const str = "this is a string"

console.log(str.charAt(0))  // t
console.log(str.charCodeAt(0))  // 116
console.log(str.includes(str)) // true

//  STRING CONCATENATION

// METHOD 1 (+ operator)
let fName = "Govind"
let lName = "Kumar"
console.log(fName + " " + lName)

// METHOD 2 (template literal)
let fullName = `${fName} ${lName}`
console.log(fullName)

// METHOD 3 (concat() method)
fullName = fName.concat(lName)
console.log(fullName)


// GETTING STRING CHARACTERS
const strr = "dsnbvdvdjv"
console.log(str.charAt(2))

// STRING METHODS
console.log(strr.toUpperCase())

console.log(strr.indexOf("v"))  // returns first occurence


// COMMON STRING METHODS
const hobbies = "        coding reading walking     "

// removing whitespaces
let result = hobbies.trim()
console.log(result)

// SLICE  ------ does'nt mutates the string

const temp = "cdwbccjascjcjcacscsc"
console.log(temp.length)
console.log(temp.slice(0, 2))
console.log(temp.slice(0).length)

// SPLIT METHOD     --------string to array
const favColors = "red white blue black"
console.log(favColors)
const colors = favColors.split(" ")
console.log(colors)

// IMMUTABLE STRINGS    
let str3 = "Hello"
str3[0] = "a"   // won't work
console.log(str3)


// NUMBERS
const num3 = 22

console.log(typeof (num3)) // number

const res = num3.toString()
console.log(typeof (res))  // string


// LOOSE (==) VS STRICT EQUALITY (===)
let eq1 = "22"
let eq2 = 22
console.log(eq1 == eq2) // true
console.log(eq1 === eq2) // false

// NOT EQUAL - LOOSE (!=)  --- STRICT (!==)
let ne = 22
let ne2 = "22"
console.log(ne != ne2)  // false
console.log(ne !== ne2) // true

// TYPE CONVERSION
const stringType = "22"
console.log(stringType, typeof stringType)

// converting string into number
const Num = Number(stringType)
console.log(Num, typeof Num)

// number to string
const res4 = String(Num)
console.log(res4, typeof res4)

// Boolean Method  --- anything except 0 is true
const age = 22
const booleanOfAge = Boolean(age)
console.log(booleanOfAge, typeof booleanOfAge)

let newAge = 0
console.log(Boolean(newAge), typeof Boolean(newAge))



// --------------ARRAYS------------------
const names = ["A", "B", "C"]
names[0] = "G"
console.log(names)

// JOIN
console.log(names.join(" | "))

// INDEXOF
console.log(names.indexOf("C"))

// CONCAT

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

let newArr = arr1.concat(arr2)
console.log(newArr)

// PUSH  --- ADD FROM BEHIND
newArr.push(0)
console.log(newArr)

// POP --- REMOVE FROM BEHIND
newArr.pop()
console.log(newArr)

// ---- PUSH AND POP MUTATES THE ORIGINAL ARRAY


// BOOLEAN VALUES AND COMPARISON OPERATORS

let booleanType = true
let stringTypee = "string"
console.log(typeof booleanType, typeof stringTypee)

// METHODS RETURNING BOOLEAN VALUES
let email = "gevind@gmail.com"
let emailValue = email.includes("@")
console.log(emailValue) // true