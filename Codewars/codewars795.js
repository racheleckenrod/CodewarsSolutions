// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47



// const Test = require('@codewars/test-compat');

// describe("Test Case", function() {
//   it("Test", function() {
//     Test.assertEquals(halvingSum(25),47);
//     Test.assertEquals(halvingSum(127),247);
//   });
// });

// PREP

// Parameters: we are given a number n

// Return: we are to return integer divison results  of summing them.

// example: n=35
// 35 + 17 + 8 + 4 + 2 + 1 = 70

// Pseudocode:

// take n and add n/2 to it, then continue that process until we reach 1.



function halvingSum(n) {
    let sum = []

    for(let i = n; i >= 1; (i/=2)){
        sum.push(Math.floor(i))
    }

    return sum.reduce((acc,c) => acc + c,0)
}

console.log(halvingSum(127))