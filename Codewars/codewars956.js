// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// Example
// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Sample Tests", () => {
//   it("test", () => {
//     const numbers = [1, 2, 3, 4, 5];
//     assert.deepEqual(numbers.square(), [1, 4, 9, 16, 25]);
//     assert.deepEqual(numbers.cube(), [1, 8, 27, 64, 125]);
//     assert.strictEqual(numbers.sum(), 15, 'Wrong sum');
//     assert.strictEqual(numbers.average(), 3, 'Wrong average');
//     assert.deepEqual(numbers.even(), [2, 4], 'Wrong result for even()');
//     assert.deepEqual(numbers.odd(), [1, 3, 5], 'Wrong result for odd()');
//   });
// });

// PREP
// P: we are given an array of numbers
// R: we are to extend the class Array to perform six functions on the array
// E: we are to create functions for square, cube, sum, average, even, and odd methods.
// P: we will use Array.prototype.method = function () {
    // return this.builtInMethod()orOtherCodeToProduceDesiredOutcome()
// }

Array.prototype.square = function () {
    return this.map(num => num **2)
}
Array.prototype.cube = function () {
    return this.map(num => num **3)
}
Array.prototype.sum = function () {
    return this.reduce((acc,c) => acc + c, 0)
}
Array.prototype.average = function () {
    return (this.reduce((acc,c) => acc + c,0))/this.length
}
Array.prototype.evens = function () {
    return this.filter(num => num % 2 === 0)
}
Array.prototype.odds = function () {
    return this.filter(num => num %2 !== 0)
}