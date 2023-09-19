// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// ARRAYSFUNDAMENTALS

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(evenLast([2, 3, 4, 5]), 30)
//   });
// });

// PREP
// P: we are given an array of integers
// R: we are to return a number equal to the sum of the products of the even indicies muliplied by the last number in the array.
// E: if given [0,1,2,3,4,5] we are to return (0*5) + (2*5) + (4*5) = 30
// P: make a new array that muliplies the even indexed elements by the last element and puts the products into a new array using map, then reduce and return it. use fiklter first I guess

function evenLast(numbers) {
    return numbers.map((item, index) => (index % 2 === 0 ? (item * numbers[numbers.length - 1]) : 0)).reduce((acc,c) => acc + c,0)
    // Good luck
  }
  console.log(evenLast([2,3,4,5]))