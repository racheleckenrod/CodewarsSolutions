// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(insertDash(454793),'4547-9-3');
//     assert.strictEqual(insertDash(123456),'123456');
//     assert.strictEqual(insertDash(1003567),'1003-567');
//   })
// });

// PREP
// P: we are given a number
// R: we are to return a string with dashes insterted between two odd numbers
// E: if given 123567, we are to return '123-567'
// P: we will need to check each digit for even/odd and the following digit as well, inserting a dash between them if the digit and the one following it are odd. first we need to toString the number and split it into an array . then check %2 === 0 && next one %2===0, make the first one the number plus a dash?



function insertDash(num) {
    let nums = num.toString().split('')

    for (let i = 0; i < nums.length - 1; i++) {
        if(nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0) {
            console.log(nums[i + 1])
            nums[i] = nums[i] + '-'
        }

    }
return nums.join('')
    //code me
 }
 console.log(insertDash(454793))