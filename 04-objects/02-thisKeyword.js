// this keyword in js
// this keyword is used for methods(function properties of an object)

// in each method we have access to a keyword "this"

let person = {
  firstName: "Abhi",
  lastName: "Singh",
  city: "Vellore",
  education: "MCA",
  getSummary: function () {
    return `${this.firstName} ${this.lastName} lives in ${this.city} and pursuing ${this.education}`;
    // return this
  },
};
console.log(person.getSummary());

// Step 1 : Check in which method we use "this" keyword
// Step 2 : Who is owner of that method (who is calling those method)
