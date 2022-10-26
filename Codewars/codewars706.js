// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)
// FUNCTIONAL PROGRAMMINGFUNDAMENTALS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.deepEqual( reverse([1,2,3]), [3,2,1] )
//     assert.deepEqual( reverse([1,null,14,"two"]), ["two",14,null,1] )
//   });
// });

// Pseudocode:
// work with the index?
// could remove first element and push it into a new array, wouldn't even need to remove it, could just access it and push each one into the new array. could try array methods here instead of doing a for loop.


reverse = function(array) {
    let reversed = []
    array.forEach(item => reversed.unshift(item))
    return reversed
    // TODO: program me!
  }
  console.log(reverse([1,2,3]))