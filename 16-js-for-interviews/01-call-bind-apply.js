// --------------------- CALL -----------------------------
var obj = { name: "Govind" };

function sayHello() {
  return "Hi " + this.name; // Hi undefined
}

console.log(sayHello());

// instead of above code try this

console.log(sayHello.call(obj)); // Hi Govind
