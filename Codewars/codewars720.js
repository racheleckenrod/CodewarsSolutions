// You are given an input (n) which represents the amount of lines you are given, your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.

// Note: A perpendicular bisector is one that forms a 90 degree angle

// n will always be greater than or equal to 0
// Examples with 3 and 4 lines 

// FUNDAMENTALSALGORITHMSGEOMETRY

// const { assert } = require('chai');

// describe('Solution test', () => {
  
//   function act(n, expected) {
//     const userSolution = maxBisectors(n);
//     assert.equal(userSolution, expected, `Invalid result for n = ${n}`)
//   }
  
//   describe('Fixed tests', () => {
//     it('Basic tests', () => {
//       act(0, 0);
//       act(1, 0);
//       act(2, 1);
//       act(3, 2);
//       act(4, 4);
//       act(5, 6);
//       act(6, 9);
//       act(51, 650);
//     });
//   });
  
// });

// You are given an input (n) which represents the amount of lines you are given.
// Your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.

function maxBisectors(n) {
    return ((Math.floor(n / 2)) ** 2 ) + (n % 2)*(Math.floor(n / 2))
  }
  console.log(maxBisectors(51))