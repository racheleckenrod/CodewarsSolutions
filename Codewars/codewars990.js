// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

// Examples
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

// [1, 23, 3, 4, 7] should return [[1, 3]]

// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
// ARRAYSSORTINGALGORITHMS

// PREP
// P: we are given an array of integers
// R: we are to return an array of arrays of pairs of numbers that are two numbers apart
// E: see above
// P: since the order is to be ascending, we should sort the array forst, and loop through it looking to see if the number +2 is present, and if it is, add the numbers to an array then add the array to the return array, and remove the second number from the search array

// Sample Tests
// 1
// const Test = require('@codewars/test-compat');
// 2
// ​
// 3
// const {assert} = require("chai");
// 4
// ​
// 5
// describe("Sample tests", function() {
// 6
//   it("Tests", function() {
// 7
//     assert.deepEqual(twosDifference([1,2,3,4]),[[1,3],[2,4]]);
// 8
//     assert.deepEqual(twosDifference([1,3,4,6]),[[1,3],[4,6]]);
// 9
//   });
// 10
// });
function twosDifference(input){
    let result = []
    let sorted = input.slice(0).sort((a,b) => a-b)

    for (let i = 0; i < sorted.length; i++){
        if (sorted.includes(sorted[i] + 2)) {
            result.push([sorted[i], (sorted[i] +2)])
          
        }
    }
   return result
   }
console.log(twosDifference([1,3,6,4]))