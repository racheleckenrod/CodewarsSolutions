// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Array Array Array", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(explode([9, 3]), [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]);
//     assert.deepEqual(explode(['a', 3]), [['a', 3], ['a', 3], ['a', 3]] ); 
//     assert.deepEqual(explode([6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]); 
//     assert.deepEqual(explode(['a', 'b']), 'Void!');  
//     assert.deepEqual(explode(["a", 0]), []); 
//   })
// });


// PREP
// Parameters:
// we are given a 2 value array, that may contain 0,1,or 2 numbers. if two numbers, add them and return that many arrays, if one number, return that many sub arrays , if no numbers, return "void"
// example:
// if the given array is [2,3] you will return 2+3 arrays of the same as the array given:
// [[2,3],[2,3],[2,3],[2,3],[2,3]]
// pseudocode:
// first check to see if you can return "void"
// then push the given array  into a new array as many times as the elements in the array. No need to differientiate different ways to do it with the one or two numbers in the array, just check to see and then push it that many times.

function explode(x){
    if(typeof x[0] !== "number" && typeof x[1] !== "number") return "Void!"

    let arr = []
    for(let i = 0; i < x.length; i++){
        if(typeof x[i] == "number"){
            for(let j = x[i]; j > 0; j--){
                arr.push(x)
            }
           
        }
    }
    return arr
}
console.log(explode([9, 3]))