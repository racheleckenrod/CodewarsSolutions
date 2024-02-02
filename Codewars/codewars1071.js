// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Even or Odd - Which is Greater?", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(evenOrOdd('12'), 'Even is greater than Odd');
//     assert.strictEqual(evenOrOdd('123'), 'Odd is greater than Even');
//     assert.strictEqual(evenOrOdd('112'), 'Even and Odd are the same');
//   });
// });

// PREP
// P: we are given a string of numbers.
// R: we are to sum the evens and the odd numbers and then compare the sums, returning the string "Even is greater than Odd", "Odd is gereater than Even", or "Even and Odd are the same" depending on the results of the comparrison.


function evenOrOdd(str) {
    let numbers = str.split("").map(Number);
    let odds = numbers.filter(item => item % 2 != 0);
    let evens = numbers.filter(item => item % 2 === 0)

    if (odds.reduce((acc, c) => acc + c, 0) > evens.reduce((acc, c) => acc + c)) {
        return "Odd is greater than Even"
    } else if (odds.reduce((acc, c) => acc + c, 0) < evens.reduce((acc, c) => acc + c)){
        return "Even is greater than Odd"
    } else if (odds.reduce((acc, c) => acc + c, 0) === evens.reduce((acc, c) => acc + c)) {
       return "Even and Odd are the same"
    }

}