// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]


// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(digitize(123), [1,2,3])
//     assert.deepEqual(digitize(1), [1])
//     assert.deepEqual(digitize(0), [0])
//     assert.deepEqual(digitize(1230), [1,2,3, 0])
//     assert.deepEqual(digitize(8675309), [8,6,7,5,3,0,9])
//     })
//   })

// PREP
// P: we are given a number
// R: we are to return an array of the digits of that number, in the same order as the number.
// E: given 12345 we are to return [1,2,3,4,5]
// P: split the number to a string, push each as a number into an array.

function digitize(n) {
    let nums = []

    n = n.toString().split('')

    n.forEach(item => nums.push(Number(item)))

    return nums

}
console.log(digitize(1234555))