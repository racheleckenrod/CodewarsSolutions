// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// FUN

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", () => {
//   it("should pass some sample tests", () => {
//     assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
//     assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
//     assert.deepEqual(sortArray([]),[]);
//   });
// });

// pseudocode:
// my inclanation is to put a place holder in the arr for the odds, sort the odds, then replace the placeholders with the sorted array elements.

function sortArray(array) {
    let odds = array.filter(item => item % 2 != 0)
    let sorted = odds.sort((a,b) => b - a)
    let result = []

    array.forEach(item => item % 2 === 0 ? result.push(item) :  result.push(sorted.pop()))

    return result.flat()
  }
  console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])