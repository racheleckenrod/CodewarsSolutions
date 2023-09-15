// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.

// ARRAYSRECURSIONFUNDAMENTALS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", () => {
//   it("Should pass sample tests", () => {
//     assert.deepEqual(deepCount([]), 0, "Expected 0");
//     assert.deepEqual(deepCount([1, 2, 3]), 3, "Expected 3");
//     assert.deepEqual(deepCount(["x", "y", ["z"]]), 4, "Expected 4");
//     assert.deepEqual(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7");
//     assert.deepEqual(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8");
//  });   
// });

// PREP
// P: we ar given an array or a nested array
// R: we are to return an integer of how many elements are in the array, counting each nested array as one element.
// E: if given [1,[2],[3]] we are to return 5
// P: we can use Array.isArray to check each element to see if it is an array, counting up each time that it is and add that to the length of the array?


// function deepCount(a){
//     let count = 0
//     let string = JSON.stringify(a)
//     for (let i = 0; i < string.length; i++){
//         if (string[i] === ']') {
//             count ++
//         }
//     }
//     console.log(a.flat(Infinity))
//     //...
//     return count - 1 + a.flat(Infinity).length
//   }


function deepCount(array) {
    var count = array.length
    
    for (const element of array) {
      if (Array.isArray(element)) {
        count += deepCount(element)
      }
    }
    
    return count
  }

  console.log(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8");
