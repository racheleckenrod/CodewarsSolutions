// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []
// ARRAYSFUNDAMENTALS

// const {assert} = require('chai');

// describe("Sample tests", () => {
//   it("should work for no duplicates", () => {
//     assert.deepEqual(duplicates([1, 2, 3, 4, 5]), [], "arr = [1, 2, 3, 4, 5]");
//     assert.deepEqual(duplicates([]), [], "arr = []");
//     assert.deepEqual(duplicates(['no', 'duplicates', 'here']), [], "arr = ['no', 'duplicates', 'here']");
//   });
//   it("should work for duplicates", () => {
//     assert.deepEqual(duplicates([1, 2, 3, 4, 3]), [3], "arr = [1, 2, 3, 4, 3]");
//     assert.deepEqual(duplicates([1, 2, 3, 3, 2, 1]), [3, 2, 1], "arr = [1, 2, 3, 3, 2, 1]");
//     assert.deepEqual(duplicates([1, 2, 1, 2, 1, 2, 1]), [1, 2], "arr = [1, 2, 1, 2, 1, 2, 1]");
//   });
//   it("should work with string representations of numbers", () => {
//     assert.deepEqual(duplicates([1, 2, 3, 4, '3']), [], "arr = [1, 2, 3, 4, '3']");
//     assert.deepEqual(duplicates(['1', 2, 3, 3, '2', 1]), [3], "arr = ['1', 2, 3, 3, '2', 1]");
//     assert.deepEqual(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']), [4, 3, 'zut'], "arr = ['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']");
//   });
// });

// PREP
// P: we are given an array
// R: we are to return an array of the duplicates, in the oder that they appear in the given array.
// E: if given [2,3,4,5,4,5] we are to return [4,5]
// P: loop through the array and add any element that appers in the given array, and not in the results array.

function duplicates(arr) {
    let array = []
    let results = [];
    console.log(array)
    for (let i = 0; i < arr.length; i++) {
       
        console.log(array)
        if ( array.includes(arr[i]) && !results.includes(arr[i]) ) {
            results.push(arr[i])
        }
        array.push(arr[i]);
    }
    return results
}

console.log(duplicates(['1', 2, 3, 3, '2', 1]))