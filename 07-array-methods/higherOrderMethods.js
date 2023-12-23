// find -- return the first occurence of the element we are looking for
// returns "undefined" if that element does'nt exists

let students = [
  { id: 1, name: "stu1" },
  { id: 2, name: "stu2" },
  { id: 3, name: "stu3" },
];

let result = students.find((student) => {
  return student.id === 4;
});

console.log(result); // { id: 3, name: 'stu3' }

// findIndex
// execute function for each array element
// returns index of element that passes test otherwise -1

let result2 = students.findIndex((ele) => {
  return ele.name == "stu3";
});
console.log(result2); // 2

// ----------------some and every method-------------
// some : if any method passes the test it'll return "true"
// every : every element should pass the test

let scores = [12, 432, 532, 556, 77, 7];

let someResult = scores.some((score) => {
  return score > 500;
});
console.log("some result:", someResult); // true

let everyResult = scores.every((score) => {
  return score > 5;
});
console.log("every result:", everyResult); // true

// -----------flat()--------------------
// flats the subarray (array inside array)
// non mutating method

let arr = [1, 2, 3, [4, 5, [6, 7, 8]]];

console.log("Before Flat:", arr);

let result3 = arr.flat(); // by default value is 1
console.log("After Flat:", result3);

let result4 = arr.flat(2);
console.log(result4);

// -----------------flatMap()---------------------
//combination of flat() and map()

let cart = [
  {
    name: "Mobile Phone",
    qty: 2,
    price: 500,
  },
  {
    name: "Tablet",
    qty: 5,
    price: 200,
  },
];

let newCart = cart.flatMap((item) => {
  //   item.name == "Mobile Phone"
  //     ? [item, { name: "Screen Guard", qty: 1, price: 0 }]
  //     : [item];

  if (item.name == "Mobile Phone") {
    return [item, { name: "Screen Guard", qty: 1, price: 1 }];
  } else {
    return [item];
  }
});

console.log(newCart);
