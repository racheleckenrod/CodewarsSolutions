// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("By 3, or not by 3?  That is the question . . .", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(divisibleByThree('123'), true, "Should return true if the sum of the given digits is divisible by 3.")
//     assert.strictEqual(divisibleByThree('19254'), true, "Should return true if the sum of the given digits is divisible by 3.")
//     assert.strictEqual(divisibleByThree('88'), false, "Should return false if the sum of the given digits is not divisible by 3.")
//     assert.strictEqual(divisibleByThree('1'), false, "Should return false if the sum of the given digits is not divisible by 3.")
//   });
// })

// PREP
// P: we are given a string of numbers
// R: we are to return true if the number is divisable by three, false otherwise. Without using %
// E: given 123 we are to return true
// P: we are to add the values of the digits together and see if there is a remainder. can use floor to compare the result 


function divisibleByThree(str){
    let num = str.split('').reduce((acc,c) => acc + +c,0)

    if (num/3 === Math.floor(num/3)) {
        return true
    }else {
        return false
    }

}
console.log(divisibleByThree('19254'))