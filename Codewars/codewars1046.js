// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0

// example
// const arr = [1, -3, -4, 0, 5];

// /*
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// */

// catchSignChange(arr) == 2;
// FUNDAMENTALS

// const {assert} = require('chai');

// describe('Sample Tests', function() {
//   const tests = [
//     [[], 0],
//     [[1,3,4,5], 0],
//     [[-1,-3,-4,-5], 0],
//     [[1,-3,-4,0,5], 2],
//     [[-47,84,-30,-11,-5,74,77], 3],
//   ];

//   for (let [input, expected] of tests) {
//     it(`[${input}]`, function() {
//       assert.strictEqual(catchSignChange(input), expected);
//     });
//   }
// });

// PREP:
// P: we are given an array of pos and neg numbers.
// R: we are to return the number of times the sign of the numbers changes in the array. if given an empty array, we are to return 0.
// E: if given [1,-2,-3,4] we are to return 2
// P: we can loop through the array, check for pos or neg. if the array is > length 1, else return 0. initialize a count variable and a sign variable. set the sign variable = to the sign of the first element, then check the second element if it is the same, reset the sign variable to the sign (pos or neg) of the second element , add one to count every time we need to change the sign variable.

function catchSignChange(arr) {
    let sign;
    let count = 0;

    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0 && sign === 'pos') {
                sign = 'neg';
                count += 1;
            } else if (arr[i] < 0 ) {
                sign = 'neg';
            } else if (arr[i] >= 0 && sign === 'neg') {
                sign = 'pos';
                count += 1;
            } else {
                sign = 'pos';
            }
        }
    }
    
    return count
  }

  console.log(catchSignChange([-47,84,-30,-11,-5,74,77]))