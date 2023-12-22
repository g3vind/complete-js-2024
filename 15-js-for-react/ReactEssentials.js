import { Teacher } from "./Teacher";

// let vs var vs const

// var -- function scope
// let - block scope
// const - can't reassign

// var has global scope that is dangerous
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // var is accessible here
}
sayHello();

// let keyword -- has block scope
function sayHi() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // console.log(i) ------- error here "let" has block scope
}
sayHi();

// const -- no reassigning
const name = "g";
// name = "f" - not allowed

// ------------OBJECTS---------------
const person = {
  name: "Govind",
  email: "g3vind@email.com",
  walk: function () {
    console.log(`${this.name} is walking`);
  },
  talk() {},
};

person.talk();
person.name = "Mosh";
person.walk();

// -----------OBJECT DESTRUCTURING-------------------
const addresses = {
  street: "some street",
  city: "some city",
  state: "some state",
  country: "some country",
};

// const street = addresses.street;
// const city = addresses.city;
// const state = addresses.state;
// const country = addresses.country;

// or use destructing
const { street, city, state } = addresses;
// using an alias
const { country: cn } = addresses;

// ------------------SPREAD OPERATOR-----------------------
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
console.log("Using conact():", combined);

// instead
const combined2 = [...first, ...second];
console.log("Using Spread Operator:", combined2);

// adding an element in the middle of concatenation of two arrays
const combined3 = [...first, 100, ...second];
console.log("adding element:", combined3);

// adding an element at the end of concatenation of two arrays
const combined4 = [1000, ...first, 2000, 3000, ...second, 4000];
console.log(combined4);

// cloning the first array
const cloneFirst = [...first];
console.log("Clone of first: ", cloneFirst);

// spread operators on objects
const one = { name: "Govind" };
const two = { job: "Instructor" };

// combining objects
const combObject = { ...one, ...two };

// adding extra objects
const extra = { ...one, ...two, location: "India" };
console.log(extra);

// cloning first object
const objClone = { ...one };
console.log(objClone);

// ---------------------CLASSES----------------------
const person2 = {
  name: "Govind",
  walk() {
    console.log("walk");
  },
};

// const person2 = {
//     name:"Govind",
//     walk(){
//         console.log("walk")
//     }
// }

class CoolPerson {
  // constructor
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`walk`);
  }
}
// creating object of class "CoolPerson"
const person5 = new CoolPerson("Hitesh")


// -----------------INHERITANCE------------------
class Person  {
    constructor(name){
        this.name = name
    }
    walk(){
        console.log("walk")
    }
}

// if want to use walk() of Person class
// inherit Teacher class from Person Class

class Teacher extends Person{

    constructor(name, degree){
        super(name)
        this.degree = degree
    }

    teach(){
        console.log("teach")
    }
}


// ---------------------MODULES-----------------------
// modularity - splitting code into multiple files

// making diff files for classes "Person" and "Teacher"

const teacher = new Teacher("Mosh","MCA")
teacher.walk()