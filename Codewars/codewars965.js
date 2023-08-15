// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

// const chai = require('chai')
// const assert = chai.assert;
// chai.config.truncateThreshold=0;


// describe("Example tests", function(){
//   it("Tests", function(){
//       assert.deepEqual(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
//       assert.deepEqual(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
//       assert.deepEqual(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
//       assert.deepEqual(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"]);
//       assert.deepEqual(dbSort(["C", "W", "W", "W", 1, 2, 0]), [0,1,2,"C","W","W","W"]);
//       assert.deepEqual(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'] )
//   });
// });

// PREP
// P: we are given an array of strings and numbers
// R: we are to return an array sorted with numbers followed by strings
// E: see above
// P: make a numbers array and sort it, then a strings array and sort it, then join the two arrays with the numbers one first

function dbSort(a){
    let nums = []
    let strs = []
    let result = []

    a.forEach((item => {
        if (item === Number(item)) {
            nums.push(item)
        } else {
            strs.push(item)
        }
    }))

    nums = nums.sort((a,b) => a - b)
    strs = strs.sort()
     result.push(nums)
     result.push(strs)
     return result.flat()
    // Code here
    }
    console.log(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'] )