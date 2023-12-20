// call and apply
// for manually setting the value of "this" keyword we use call and apply

let mainPlane = {
    airline: "Air India",
    iatacode: "FI",
    booking: [],
    book: function (flightNumber = "223232", name = "Govind") {
        console.log(`${name} booked flight ${flightNumber} in ${this.airline} with code ${this.iatacode}`)
        // pushing values to bookings array
        this.booking.push({ flight: `${this.airline}`, name: name })
    }
}
mainPlane.book(223232, "Kishan")
mainPlane.book()
console.log(mainPlane.booking)


// EXMAPLE 2
function greet(message, punctuation) {
    console.log(`${message}, ${this.name}${punctuation}`)
}

const person = {
    name: "govind"
}

// using call
greet.call(person, "Hello", "!")
// greet.call(person, args)   ------ not allowed

// using apply
const args = ["Hi", "!!!"]
greet.apply(person, args)