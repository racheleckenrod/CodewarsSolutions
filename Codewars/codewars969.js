// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

// ARRAYSALGORITHMS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("KataTests", function(){
//   it("Basic Tests", function(){
//     assert.strictEqual(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
//     assert.strictEqual(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
//     assert.strictEqual(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
//     assert.strictEqual(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);
      
//     assert.strictEqual(getLengthOfMissingArray([ ]), 0);
//   });
// });

// PREP
// P: we are given an array of arrays of different lengths, with one missing length to be consequitive.
// R: we are to return the length of the missing array.
// E: if given [[1],[1,2],[1,2,3,4]] we are to return 3, as there is no array with length = 3.
// P: can make an array of the lengths, sort it, loop through and find the first time the value of i + 1 is not there and return it.


// function getLengthOfMissingArray(arrayOfArrays) {

//     let lengths = arrayOfArrays.map(item => item.length)
//     let sorted = lengths.sort((a, b) => a - b)

//     for (let i = 0; i < sorted.length; i++) {
//         if (sorted[i + 1] - sorted[i] !== 1)
//         return sorted[i] + 1
//     }
//     return 0;
//   }

// function that passed edge cases too:

function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || arrayOfArrays.includes(null)) return 0
     let lengths = arrayOfArrays.map(item => item.length)
     if (lengths.includes(0) ) return 0
      let sorted = lengths.sort((a, b) => a - b)
  
      for (let i = 0; i < sorted.length; i++) {
          if (sorted[i + 1] - sorted[i] !== 1)
          return sorted[i] + 1
      }
      return 0;
  }
  
  console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5)