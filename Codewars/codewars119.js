// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic Tests", () =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(quarterOf(3), 1)
//     assert.strictEqual(quarterOf(8), 3)
//     assert.strictEqual(quarterOf(11), 4)
//   });
// });
// parameters- given a number(month) of the years
// return the quarter of the year that the month is in .
// example - the months 123 are in the first quarter.
// I want to do a mathematical equation that will return the correct answer instead of a conditional. month number divided by 12 then times four? and rounded to ceiling? divided by twelve and multiplied by four is the same as divided by 3?

const quarterOf = (month) => {
    // Your code here
    return Math.ceil(month/3)
  }

//   very happy with this one. My idea of doing the pseudocode as a way to essentially refactor is treating me very well, as I was able to get this first try!!