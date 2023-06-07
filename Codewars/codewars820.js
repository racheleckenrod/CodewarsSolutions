// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"

// const assert = require('chai').assert;
// describe("Example tests", () => {
//   const tests = [
//     ["312", "333122"],
//     ["102269", "12222666666999999999"],
//     ["0", ""],
//     ["000", ""],
//     ["123", "122333"]
//   ];
//   for(const [input, expected] of tests)
//     it(JSON.stringify(input), () => assert.strictEqual(explode(input), expected));
// });

// PREP
// params: we are given a string of numbers
// results: we are to return a string of numbers with a repeat of the digits as many times as its value. zero is omitted
// ex: 0123 => 122333
// pseudocode: make array, loop through and repeat i times


function explode(s) {
    let nums = s.split('')
    for(let i = 0; i < nums.length; i++){
       
            nums[i] = nums[i].repeat(nums[i])
        
    }
    return nums.join('');
  }

  console.log(explode("012345"))