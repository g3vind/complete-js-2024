// Constructor and new
// no arrow function as a constructor
// call "contructor" function using "new" operator

// 1. new {object} created empty initially
// 2. "this" : obj
// 3. object linked to prototype
// 4. functional automaticaly return {object}

let Car = function (color, model) {
  //   console.log(this); // Car {}

  // properties
  this.color = color;
  this.model = model;
  //   methods : not recommended
  this.login = function () {
    console.log("login");
  };
};
let instanceOfCarObject = new Car("Black", "R1");
console.log(instanceOfCarObject); // Car { color: 'Black', model: 'R1' }

// ---------check if it is instance of class or not
console.log(instanceOfCarObject instanceof Car); // true
