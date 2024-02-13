// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("What dominates your array?", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(dominator([3,4,3,2,3,1,3,3]),3);
//     assert.strictEqual(dominator([1,2,3,4,5]),-1);
//     assert.strictEqual(dominator([1,1,1,2,2,2]),-1);
//     assert.strictEqual(dominator([1,1,1,2,2,2,2]),2);
//   })  
// });

// PREP
// P: we are given an array of positive integers.
// R: we are to return either the value of more than half of the array, or -1 if there is none.
// E: if we are given [1,1,1,2,3,4] we are to return -1, but given [1,1,1,1,2,3,4] we are to return 1.
// P: convert the array to an object listing the values and the count of the occurances, then find the max value and see if it is greater than the length of the array/2. 


function dominator(arr) {

    let obj = {}

    for (const value of arr) {
        obj[value] = (obj[value] || 0) + 1
    }


    let maxOccurrences = Math.max(...Object.values(obj))

    if (maxOccurrences > arr.length/2) {

        return Number(Object.keys(obj).find(key => obj[key] === maxOccurrences))
    } else {
        return -1
    }

 }
 
 console.log(dominator([3,4,3,2,3,1,3,3]),3)