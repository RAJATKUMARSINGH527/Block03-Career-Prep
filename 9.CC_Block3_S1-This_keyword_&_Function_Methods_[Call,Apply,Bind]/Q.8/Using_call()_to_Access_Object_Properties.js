function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

let person = {
  name: "Rajat",
  age: 25
};

// Using call() to invoke personInfo with 'person' as context
personInfo.call(person);
