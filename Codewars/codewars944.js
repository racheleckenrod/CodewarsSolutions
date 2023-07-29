// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals( bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE");
// Test.assertEquals( bingo([21,13,2,7,5,14,7,15,9,10]), "WIN");
//   });
// });

// PREP
// P: we are given an array of ten numbers
// R: we are to return "WIN" or "LOSE" depending on if the numbers corresponding to the letters in the word "bingo" are ALL contained in the array.
// E: see above
// P: make an array of numbers that correspond to the letters and use regex to match all. [b=2, i=9, n=14, g=7, o=15] so the number array must contain 2,7,9,14,15 to return a "WIN" else return "LOSE". researching shows me to use .every and .includes

// function bingo(a) {
//     numArr = [2,7,9,14,15]

//     if (numArr.every(num => a.includes(num))) {
//         return "WIN"
//     } else {
//         return "LOSE"
//     }


//     // your winning code here
//   }
  console.log(bingo([2,7,9,14,15]))

//   refactor into ternary

  function bingo(a) {
    

   return [2,7,9,14,15].every(num => a.includes(num)) ? "WIN" : "LOSE"
       


    // your winning code here
  }