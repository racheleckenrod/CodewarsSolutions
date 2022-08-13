// We have the number 12385. We want to know the value of the closest cube but higher than 12385. The answer will be 13824.

// Now, another case. We have the number 1245678. We want to know the 5th power, closest and higher than that number. The value will be 1419857.

// We need a function find_next_power ( findNextPower in JavaScript, CoffeeScript and Haskell), that receives two arguments, a value val, and the exponent of the power, pow_, and outputs the value that we want to find.

// Let'see some cases:

// findNextPower(12385, 3) == 13824

// findNextPower(1245678, 5) == 1419857
// The value, val will be always a positive integer.

// The power, pow_, always higher than 1.

// Happy coding!!

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic Tests", function() {
//   it("Tests", () => {
//     assert.strictEqual(findNextPower(8, 3), 27)
//     assert.strictEqual(findNextPower(12385, 3), 13824)
//     assert.strictEqual(findNextPower(1245678, 5), 1419857)1889568
//     assert.strictEqual(findNextPower(1245678, 6), 1771561)
//   })
// });
// Pseudocode:
// will do Math.ceil(val ** 1/pow)**pow

function findNextPower(val, power) {
  
    console.log(val**(1/power),Math.ceil(val**(1/power)))
    return (Math.ceil( val**(1/power) +.01 ))**power

}
console.log(findNextPower(8,3))