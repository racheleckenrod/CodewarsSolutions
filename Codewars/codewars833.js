// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(expandedForm(12), '10 + 2');
//     assert.strictEqual(expandedForm(42), '40 + 2');
//     assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
//   });
// });

// PREP:
// P: we are given a positive integer
// R: we are to return a string consisting of the number broken down into numbers that sum to the number given based on the place holder of the digit.
// E: if given 456 we are to return '400 + 50 + 6'
// P: seeing the "+" sign in between gives the idea to join with a "+", so to turn the number to a string, split it, add the correct number of zeros, perhaps with the .length of original number, making an exception for if the number in the original is a zero. so it would be something like 7034 toString().length to get the number of zeros, then minus one , and for each one. I wonder if using math to subtract would be better, so you would split the number 7034 - 034 = 7000 then push that into array, , 034 - 34 = 000, omit that with conditional, then 34 - 4 = 30, push that into array, and finally push the single digit into array. join array with "+".

// could get the number of zeros to add from reversing the arr and using the index.

function expandedForm(num) {
    let str = num.toString()
    let arr = str.split('').reverse()
    let nums = []

    console.log(arr)

    for(let i = 0; i < arr.length; i++){
        nums.push(arr[i] + "0".repeat(i))
    }

    return nums.reverse().filter(item =>  !item.startsWith("0") ).join('+').toString()
    // Your code here
  }

  console.log(expandedForm(70304))