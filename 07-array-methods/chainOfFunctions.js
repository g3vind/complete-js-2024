class SimpleChain {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
    return this; // return the object for chaining
  }

  subtract(num) {
    this.value -= num;
    return this; // return the object for chaining
  }

  multiply(num) {
    this.value *= num;
    return this; // return the object for chaining
  }

  getValue() {
    return this.value;
  }
}

// Example usage
const result = new SimpleChain().add(5).subtract(3).multiply(2).getValue();

console.log(result); // Output: 8
