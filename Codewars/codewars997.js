// Task:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false
// FUNDAMENTALS

// const chai = require("chai");
// const assert = chai.assert;
// describe("Tests", () => {
//   it("Example tests", function example_tests() {
//     assert.strictEqual(twoArePositive(2, 4, -3), true, '(2, 4, -3)');
//     assert.strictEqual(twoArePositive(-4, 6, 8), true, '(-4, 6, 8)');
//     assert.strictEqual(twoArePositive(4, -6, 9), true, '(4, -6, 9)');
//     assert.strictEqual(twoArePositive(4, 6, 0), true, '(4, 6, 0)');
//     assert.strictEqual(twoArePositive(-4, 6, 0), false, '(-4, 6, 0)');
//     assert.strictEqual(twoArePositive(4, 6, 10), false, '(4, 6, 10)');
//     assert.strictEqual(twoArePositive(-14, -3, -4), false, '(-14, -3, -4)');
//   });
// });


// PREP
// P: we are given three integers
// R: we are to return true if exactly 2 are greater than zero.
// E: if given 1,-2,0 we are to return false
// P: make a variable pos, and set to zero, add one to it for each number greater than zero, then check if it equals two, and return true if it does.



function twoArePositive(a, b, c) {
    let pos = 0
    if (a > 0) {
        pos += 1
    } 
    if (b > 0) {
        pos += 1
    }
    if (c > 0) {
        pos += 1
    }

    if (pos === 2) {
        return true
    } else {
        return false
    }
    // Happy Coding
  }