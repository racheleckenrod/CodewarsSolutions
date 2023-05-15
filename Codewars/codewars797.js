// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
// Have fun!

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe('Basic tests', function() {
//   it("Test", () => {
//     assert.strictEqual(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
//     assert.strictEqual(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
//     assert.strictEqual(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
//     assert.strictEqual(maxDiff([16]), 0);
//     assert.strictEqual(maxDiff([]), 0);
//   })
// });

// find Math.min and Math.max and subtract then return

function maxDiff(list) {
  if(list.length === 0) return 0
    let max = Math.max(...list)
    let min = Math.min(...list)
    console.log(max, min)
    return max - min
  };

  console.log(maxDiff([]))