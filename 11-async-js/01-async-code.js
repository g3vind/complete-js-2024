// synchronous code

// console.log(1);
// console.log(2);
// console.log(3);

// asynchronous (async) code
console.log(1);
setTimeout(() => {
  console.log(console.log("async" + 2));
}, 3000);
console.log(3);

// OUTPUT : 1 3 2
