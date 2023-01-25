// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// const { assert } = require ('chai');

// describe( "maxSequence", function(){
//   it("should work on an empty array",function(){
//     assert.strictEqual(maxSequence([]), 0);
//   });
//   it("should work on the example",function(){
//     assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
//   });
// });

// Pseudocode:
// make array of possible values and return highest. 
// possible values are an array of lengths 1 - the whole array
// instead of doing all the one length arrays, I could loop through and do all that start with zero index, then do index one, etc..
// make slices() then reduce

var maxSequence = function(arr){
    if(arr.every((item) => item <= 0)) return 0

    let poss = []
    let sum2
    for(let i = 0; i < arr.length; i++){
        let sum = arr.slice(i)
        
        for(let j = 0; j < arr.length - i; j++){
            sum2 = sum.reduce((acc,c) => acc + c, 0)
            console.log(sum, sum2)
            poss.push(sum2)
            sum.pop()
        }
       
    }
    console.log(poss)
    if (poss.length === 0) return 0
    return Math.max(...poss)
    // ...
  }
  console.log(maxSequence([-2,-1,-3,-4,-1,-2,-1,-5,-4]))