// // this is going to be a test case first
// // adding the ignore config commands again, I guess it is for the repo, I thought it was for my whole git before, but maybe not. Find out more what the global means exactly


// // now for another Kata:

// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", function() {
//   it("should pass some sample tests", function() {
//     assert.strictEqual(filterString("123"), 123, 'Just return the numbers');
//     assert.strictEqual(filterString("a1b2c3"), 123, 'Just return the numbers');
//     assert.strictEqual(filterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
//   });
// });

// PREP
// Parameters:
// given a string of letters and numbers
// Results:
// are to return just the numbers in the order they are given.
// Example:
// if given: "a1bc2def3gh" we are to return 123 looks like it should be in number format.

// Pseudocode:
// will need to test each digit, and I am thinking to test against !isNaN else push it into an array then join the array and make it a number.


var filterString = function(value) {
    let arr = value.split("")
    let nums = []
    for(let i = 0; i < arr.length; i++){
        if (!isNaN(arr[i])){
            nums.push(arr[i])
        }
    }
    nums = nums.join("")
    return Number(nums)
  }

  console.log(filterString("63hhon4ppj6k3kkp2jn5"))

//   happy to be back at solving codewars