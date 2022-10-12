// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples

// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0

// PREP
// Parameters:
// we are given an array of numbers: integers and/or floats.
// Results:
//  we are to return the sum of all the even numbers - only floats with a .0 can be even.
// Pseudocode:
// if element % 2 === 0 push into array called sum, then reduce and return that array.

function sumEvenNumbers(input) {
    let sum = input.filter(item => item % 2 === 0)
    return sum.reduce((acc, c) => +acc + +c, 0)
  }
  
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//   looks like I chose the wrong time to use map here, as I want to push only those that pass the test into the array- this sounds like filter now that I type it out.