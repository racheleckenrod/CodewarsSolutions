// You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

// The array is unsorted.

// An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

// You should return the duplicate value as a single integer.


// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(findDup([1,2,2,3]), 2);
// Test.assertEquals(findDup([1,3,2,5,4,5,7,6]), 5);
//   });
// });

// PREP 
// P: we are given an array of integers
// R: we are to return the value of the integer that is repeated, unless the array is missing a consecutive number, then the input is invalid and we are not told what to return.
// P: we dont necessrily need to sort the array as we can check the array for i and i+1, returning null or invalid if not found, then we can check for first and last index of i being equal, returning it if it is not..



function findDup( arr ){

    for (let i = 1; i < arr.length; i++){
        if (!arr.includes(i)){
            return 'invalid'
        }
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr.indexOf(i) !== arr.lastIndexOf(i)){
            return i
        }
    }
    return null
  }