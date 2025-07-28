let car = {
  brand: "Tesla",
  getBrand: function() {
    return this.brand;
  }
};

// Using bind() to permanently bind 'this' to the car object
let boundGetBrand = car.getBrand.bind(car);

// Calling the bound function
console.log(boundGetBrand()); // Output: "Tesla"
