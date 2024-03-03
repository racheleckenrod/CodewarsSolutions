// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.

// The Office I - Outed
// The Office II - Boredeom Score
// The Office IV - Find a Meeting Room
// The Office V - Find a Chair

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("The Office III - Broken Photocopier", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(broken("1"), "0");
//     assert.strictEqual(broken("10000000101101111110011001000"), "01111111010010000001100110111");
//     assert.strictEqual(broken("100010"), "011101");
//   });
// });

// PREP
// P: we are given a string of 0s and 1s.
// R: we are to return a string of 1s and 0s- the opposite of what we are given- replace a 0 with a 1 and a 1 with a 0.
// E: if given "111000" we are to return "000111"
// P: we can split the string into an array, check each element and push either a 0 or a 1 into a new array, then join the array and return it.



function broken(x){
    let arr = []

    for (let i = 0; i < x.length; i++) {
        if( x[i] === "0"){
            arr.push('1')
        } else {
            arr.push('0')
        }
    }

    return arr.join('')

}
console.log(broken("111000"))