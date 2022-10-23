// A perfect number is a number in which the sum of its divisors (excluding itself) are equal to itself.

// Write a function that can verify if the given integer n is a perfect number, and return True if it is, or return False if not.

// Examples

// n = 28 has the following divisors: 1, 2, 4, 7, 14, 28

// 1 + 2 + 4 + 7 + 14 = 28 therefore 28 is a perfect number, so you should return True

// Another example:

// n = 25 has the following divisors: 1, 5, 25

// 1 + 5 = 6 therefore 25 is not a perfect number, so you should return False
// ALGORITHMS

// const Test = require('@codewars/test-compat');

// describe("isPerfect", function() {
//   it("works for some examples", function() {
//     Test.assertEquals(isPerfect(6), true);
//     Test.assertEquals(isPerfect(1), false);
//     Test.assertEquals(isPerfect(28), true);
//     Test.assertEquals(isPerfect(4986), false);
//     Test.assertEquals(isPerfect(10), false);
//     Test.assertEquals(isPerfect(496), true);
//     Test.assertEquals(isPerfect(8128), true);
//     Test.assertEquals(isPerfect(23459879034), false);
//     Test.assertEquals(isPerfect(1098), false);
//     Test.assertEquals(isPerfect(33550336), true);
//   });
// });

// PREP
// Parameters:
// we are given a number
// Results:
// we are to return wether or not the number given is "perfect" or not. A number is perfect if all of its divisors add up to the number (excluding it and one)
// Pseudocode:
// run a loop to find all the divisors, reduce them and check if it equals the given number.



function isPerfect(n) {
    let sum = [1]
    for(let i = 2; i <= n ** .5; i++){
        if(n % i === 0){
            sum.push(i)
            sum.push(n/i)
        }
    }
    console.log(sum, n**.5,  sum.reduce((acc,c) => +acc + +c, 0))
    return n === sum.reduce((acc,c) => +acc + +c, 0) && n > 1
    // Your code here
  }
  console.log(isPerfect((33550336)), true)