// Instructions
// Output
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.sameOrderedMembers(upArray([4,3,2,5]), [4,3,2,6]);
//     assert.sameOrderedMembers(upArray([2,3,9,9]), [2,4,0,0]);
//     assert.sameOrderedMembers(upArray(    [9,9]),   [1,0,0]);
//     assert.sameOrderedMembers(upArray(    [0,7]),     [0,8]);
//     assert.sameOrderedMembers(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]);
    
//     assert.isNull(upArray([1,-9]));
//     assert.isNull(upArray([1,10]));
//   });
// });

// PREP
// P: we are given an array of integers
// R: we are to return an array with 1 added to the number represented by the array, or null if the array is either empty, contains negative or more than one digit numbers.
// E: if given [1,22,2] we return null, likewise return null if given [1,-2,2] or []
// P: to test for valid input, we can loop through the array checking for both negativity or length < 1 in each element.
// provided the array passes the tests, we can .join() the array, add 1, then .split() it and return it

function upArray(arr){
    if (arr.length === 0) return null

    for (let i = 0; i < arr.length; i++){
        if(arr[i].toString().length > 1 || arr[i] < 0) return null
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] < 9) {
            arr[i]++
            break
        } else {
            arr[i] = 0
            if (i === 0) {
                arr.unshift(1)
                break
            }
        }
    }
    return arr
  }
  console.log(upArray([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]))
