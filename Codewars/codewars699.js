// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes

// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.
// If you like this kata, check out the next one: Last Survivors Ep.2

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Sample", function () {
//    it("given 'abc' and [1, 1] ", function () {
//       assert.deepEqual(lastSurvivor('abc', [1, 1]), 'a');
//    });

//    it("given 'kbc' and [0, 1]", function () {
//       assert.deepEqual(lastSurvivor('kbc', [0, 1]), 'b');
//    });

//    it("given 'zbk' and [2, 1]", function () {
//       assert.deepEqual(lastSurvivor('zbk', [2, 1]), 'z');
//    });

//    it("given 'zbk' and [2, 1]", function () {
//       assert.deepEqual(lastSurvivor('c', []), 'c');
//    });
// });

// describe("New Edge", function () {
//    it("given 'foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr' and [8,59,52,93,21,40,88,85,59,10,82,18,74,59,51,47,75,49,23,56,1,33,39,33,34,44,25,0,51,25,36,32,57,10,57,12,51,55,24,55,31,49,6,15,10,48,27,29,38,30,35,42,23,32,9,39,39,36,8,29,2,33,14,3,13,25,9,25,18,10,1,2,20,8,2,11,5,7,0,10,10,8,12,3,5,1,7,7,5,1,4,0,4,0,0,1]", function () {
//       assert.deepEqual(lastSurvivor('foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr', [8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49, 23, 56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12, 51, 55, 24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32, 9, 39, 39, 36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20, 8, 2, 11, 5, 7, 0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0, 1]), 'd');
//    });
// });

// PREP
// Parameters:
// We are given a string and an array
// Results:
// we are to return the remaining letter in the string, after each other element is eliminated accoring to the index of letter in the string being listed in the array.
// Example:
// if given the string od "test" and array of [0,1,1]... first we eliminate the zeroth element, then the first, then the first, so "test" becomes "est", then "et", then "e" and "e" is to be returned.
// Pseudocode:
// loop through array and remove (splice) the element from the string.

function lastSurvivor(letters, coords) {
    let survivor = letters.split('')
    for(let i = 0; i < coords.length; i++){
        survivor.splice(coords[i],1)
    }
    return survivor
}