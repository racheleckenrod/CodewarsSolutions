// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.const chai = require("chai");
// const assert = chai.assert;

// const fixedCases = [
//   [[1, 1, 2, 3], 5],
//   [[], 0],
//   [[1, 1, 2, 2, 3], 3],
//   [[5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1], 21],
//   [[0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0], 31],
//   [[0, 1, 4, 4, 0, 4, 2, 5, 9, 0, 10, 9, 0, 1, 2], 15],
//   [[7, 2, 10, 9, 10, 2, 7, 3, 10, 8, 2, 5], 25],
//   [[7, 2, 0, 3, 5, 7, 8, 3, 2, 10, 9, 5], 27],
//   [[1, 9, 9, 5, 7, 7, 6, 1, 5, 6], 0],
//   [[10, 10, 1, 4, 10, 3, 9, 6, 10, 10, 9, 9, 10, 5, 6, 10, 4, 1], 8],
//   [[7, 10, 10, 9, 0, 2, 5, 10, 3, 8, 1, 4, 9, 9, 5, 8, 8, 8, 5, 3], 14],
//   [[1, 9, 2, 1, 5, 5, 1, 1, 5, 10, 5, 9, 5, 2, 1], 10],
//   [[8, 6, 3, 6, 7, 3, 4, 4, 2, 1, 4, 5, 8, 6], 15],
//   [[10, 9, 2, 8, 9, 10, 4, 6, 9, 5, 1, 1, 4, 3, 9, 7, 8, 5, 5], 18],
//   [[5, 5, 0, 0, 6, 3, 7, 2, 4, 2], 20],
//   [[0, 8, 5, 10, 1, 1, 6, 8], 21],
//   [[4, 2, 10, 9, 10, 5, 1, 7, 1, 9, 8, 7, 4, 2, 5, 8, 3, 10, 8], 3],
//   [[9, 8, 3, 1, 8, 1, 7], 19],
//   [[1, 4, 3, 8, 9, 4, 7, 5, 10, 10, 7, 6, 9, 3], 20],
//   [[2, 0, 4, 2, 2, 3, 6, 7, 3, 8, 10, 6, 8], 21],
//   [[7, 9, 5, 6, 1, 0, 5, 0, 4, 7, 1, 2, 8, 9, 6, 1], 14],
//   [[7, 1, 8, 8, 5, 5, 1, 4, 0, 1, 10, 1], 21],
// ];

// describe("Fixed test cases", function() {
//   for (let [input, expected] of fixedCases) {
//     it(`Testing for [${input.join(", ")}]`, function() {
//       assert.deepStrictEqual(sumNoDuplicates(input), expected);
//     });
//   }
// });

// PREP
// P: we are given an arrary of numbers
// R: we are to return the sum of the numbers excluding any duplicates.
// E: if given [1,1,2,2,3,3,4,5] we are to return the sum of 1 + 2 + 3 + 4 + 5 = 15
// P: we can convert the array to a set  then back to an array and reduce it.

// Correction: I read the problem wrong, and the entire du[plicate numbers are to be ignored. so that if there is a duplicate, both numbers are to be ignored and converting to a set wont work. we will need to check if the number has a duplicate, and only add to the new array numbers that are unique.


function sumNoDuplicates(numList) {

   let unique = []

   for (let i = 0; i < numList.length; i++){
    if (numList.indexOf(numList[i]) === numList.lastIndexOf(numList[i])) {
        unique.push(numList[i])
    }
   }
   return unique.reduce((acc,c) => acc + c,0)
  }

  console.log(sumNoDuplicates([7, 9, 5, 6, 1, 0, 5, 0, 4, 7, 1, 2, 8, 9, 6, 1]), 14)