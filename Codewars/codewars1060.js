// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false
// ARRAYSFUNDAMENTALS


// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Fixed Tests", () => {
//   it("Tests to see if your function returns the correct values.", () => {
//    assert.strictEqual(arrCheck([]), true);
//    assert.strictEqual(arrCheck([['string']]), true);
//    assert.strictEqual(arrCheck([[],{}]), false);
//    assert.strictEqual(arrCheck([[1],[2],[3]]), true);
//    assert.strictEqual(arrCheck(['A', 'R', 'R', 'A', 'Y']), false);
//   });
// });

const arrCheck = value => {
   return value.every((item) => Array.isArray(item));
}