// Given a non-empty array of integers, find the maximum product of elements from all available sequences.

// A sequence here is any pattern in which the elements are equally spaced apart in the array.

// The sequence should start at its place in the array: for example, the sequence of 3 elements apart should start at the third element.

// Example:

// Given the array [11, 6, -2, 0, 5, -4, 2]

// When the sequence is 1 element apart: Product = 11 × 6 × (-2) × 0 × 5 × (-4) × 2 = 0.

// When the sequence is 2 apart: Product = 6 × 0 × (-4) = 0.

// When the sequence is 3 apart: Product = (-2) × (-4) = 8.

// When the sequence is 4 apart: Product = 0

// When the sequence is 5 apart: Product = 5

// When the sequence is 6 apart: Product = -4.

// When the sequence is 7 apart: Product = 2.

// So, the function should return 8.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", () => {
//   it("should pass sample test", () => {
//     assert.strictEqual(findMaxProduct([4, 0, -19]), 0);
//     assert.strictEqual(findMaxProduct([11, 6, -2, 0, 5, -4, 2]), 8);
//     assert.strictEqual(findMaxProduct([8, -6, 4, 0, 4, 0, -5, 0]), 4);
//     assert.strictEqual(findMaxProduct([4, 6, 8, 11, 13, 5, 7, 9]), 8648640);
//   });
// });

// PREP
// Parameters:
// we are given an array of numbers, both pos and neg and may be zero.
// Results:
// we are to return the max value from the process of multiplying sequences of numbers. Starting with the first being everything muliplied together.(index + 1) the second, starts with index one of the array and goes every other number.(index + 2) the third goes with index 2 and then index + 3. 

function findMaxProduct(arr){
    let prods = []
    
    for(let i = 1; i <= arr.length; i++){
        let prod = 1
        for(let j = i; j <= arr.length; j += i){
            prod *= arr[j-1]
            console.log(prod, i,j)
        }
        prods.push(prod)
    }

    return Math.max(...prods)

}
console.log(findMaxProduct([11, 6, -2, 0, 5, -4, 2]), 8)