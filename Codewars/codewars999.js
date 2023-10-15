// ###Lucky number

// Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

// 1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.

// Function will return true for lucky numbers and false for others.

// const Test = require('@codewars/test-compat');

// describe("Testing if number is lucky", function(){
//   it("Basic testing", function(){
//     Test.assertEquals(isLucky(1892376), true, "Wrong result for 1892376");
//     Test.assertEquals(isLucky(189237), false, "Wrong result for 189237");
//     Test.assertEquals(isLucky(1098), true, "Wrong result for 1098");
//     Test.assertEquals(isLucky(22869), true, "Wrong result for 22869");
//     Test.assertEquals(isLucky(0), true, "Wrong result for 0");
//   });
// });

// PREP
// P: we are given an integer 
// R: we are to return true if the sum of the digits is a multiple of 9 or 0.
// E: if given 90 we are to return true because 9 + 0 = 9
// P: first turn the integer into a string then split it into an array, then reduce the array (turning the string numbers back into t=integers if needed) then compare the result with 9 or zero and return true/false

function isLucky(n) {
    let sum = n.toString().split("").reduce((acc, c) => +acc + +c, 0)
    console.log(sum)
    return sum % 9 === 0 || sum === 0
    //your code here
  }

  console.log(isLucky(1892376))