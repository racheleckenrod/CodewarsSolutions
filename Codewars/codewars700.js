// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
// FUNDAMENTALSALGORITHMS


// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;


// describe("Sample Tests", () => {
//   it("Should pass Sample Tests", () => {
//     assert.strictEqual(stray([1, 1, 2]), 2);
//     assert.strictEqual(stray([1, 2, 1]), 2);
//     assert.strictEqual(stray([2, 1, 1]), 2);
//   });
// });

// PREP
// Parameters:
// we are given an array of 3 or more numbers, with one number having only one instance.
// Results:
// we are to return the single number.
// Pseudocode:
// compare elements in the array... could use first index of and last index of to see if the number is the only one, and return that.
function stray(numbers) {
    for(let i = 0; i < numbers.length; i++){
        if(numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){
            return numbers[i]
        }
    }
  }