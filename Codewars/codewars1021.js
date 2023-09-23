// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
// Examples:
// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]
// FUNDAMENTALS
// Ad
// Don't let layoffs scare you. Landing a job in tech is st

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic Tests", () => {
//   it("d > 0", () => {
//     assert.deepEqual(lastDigit(1,1),[1])
//     assert.deepEqual(lastDigit(123767,4),[3,7,6,7])
//     assert.deepEqual(lastDigit(0,1),[0])
//     assert.deepEqual(lastDigit(34625647867585,10),[5,6,4,7,8,6,7,5,8,5])
//   })
//   it("d <= 0", () => {
//     assert.deepEqual(lastDigit(1234,0),[])
//     assert.deepEqual(lastDigit(24134,-4),[])
//   })
//   it("d > number of digits in n", () => {
//     assert.deepEqual(lastDigit(1343,5),[1,3,4,3])
//   })
// })

// PREP
// P: we are given a number n and a number d
// R: we are to return an array with the last d number of digits of the given number n  with one digit in each element of the array. we are to return [] for d < 1, and if d > n.length , return all digits in the return array.
// E: if given n = 123456 and d=3, we are to return [4,5,6]
// P: turn the number to a string, subtract n.length - d to find the starting point, then add each digit to the return array, converting the string value back to a number.




function lastDigit(n, d) {
    if (d < 1) return []
    let num = n.toString()

    if (d >= num.length) {
        return num.split("").map(item => +item)
    } else {
        num = num.split("").map(item => +item)
        return num.slice(num.length - d)
    }
  
}
console.log(lastDigit(1234567,3))