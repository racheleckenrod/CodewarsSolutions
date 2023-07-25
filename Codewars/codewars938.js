// You are provided with an array of positive integers and an additional integer n (n > 1).

// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

// Examples
// {1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
// {1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30

// const Test = require('@codewars/test-compat');

// describe('Your "modifiedSum" function', function () {
//   it('should work for the examples provided in the Description', function () {
//     Test.assertEquals(modifiedSum([1, 2, 3], 3), 30); 
//     Test.assertEquals(modifiedSum([1, 2], 5), 30);
//   });
// });

// PREP
// P: we are given an array of positive integers and an additional integer.
// R: we are to return a number equal to the sum of the integers raised to the additional number's power minus the sum of the integers of the original array.
// E: given [1,3,5], 2, we are to return (1**2 + 3**2 + 5**2) - (1 + 3 + 5) or
// (1 + 9 + 25) - (9) or (35 - 9) or 24.
// P: map a new array with the integers raised to the power of the given number, then reduce it and subtract the reduced original array (or a slice of it)

function modifiedSum(a, n) {
    let powers = a.map(item => item**n)
    return powers.reduce((acc,c) => acc + +c, 0) - a.reduce((acc,c) => acc + +c,0)
    // Write your code here
  }

  console.log(modifiedSum([1, 2, 3], 3), 30)