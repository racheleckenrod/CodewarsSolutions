// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
// ARRAYSFUNDAMENTALS

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(getMissingElement( [0,5,1,3,2,9,7,6,4]), 8);
// Test.assertEquals(getMissingElement( [9,2,4,5,7,0,8,6,1]), 3);
//   });
// });

// PREP
// P: we are given 9 digits out of 10
// R: we are to return the missing digit from 0-9
// E: if given 0,2,3,4,5,6,7,8,9 we are to return 1
// P: since the total of all digits is 45, we can sum the given array of digits using reduce, and subtract it from 45 and that will give us the missing digit.


function getMissingElement(superImportantArray){
    //TODO
    return 45 - superImportantArray.reduce((acc,c) => acc + c)
  }