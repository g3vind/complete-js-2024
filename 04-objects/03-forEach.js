// for each for traversing an array
// MUTATES THE ORIGINAL ARRAY

const dishes = ["A", "B", "C", "D"]

// using for loop
for (let i = 0; i < dishes.length; i++) { console.log(dishes[i]) }

console.log("USING FOR EACH")
// using forEach method
dishes.forEach(function (element) {
    console.log(element)
})

