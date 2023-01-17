// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Should pass Basic tests", () => {
//     assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
//     assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
//     assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
//     assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
//     assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
//     assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
//   });
// });


// PREP
// Parameters:
// we are given two arrays.
// Results:
// we are to return array a , but with array b's elements removed.
// Pseudocode:
// since we are going to be returning an array, I'd like to see if I can use map. for each element, we will check to is that it is not in the second array.
// that sort of worked the first time, but retunrs an array or booleans

function arrayDiff(a, b) {

    return a.filter((item => !b.includes(item)))
  
}
console.log(arrayDiff([1,2,3], [1,2]), [3])