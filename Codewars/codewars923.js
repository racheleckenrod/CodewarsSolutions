// Task
// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

// At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

// For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.

// Example
// For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11.

// The answer was obtained as 5 + 1 + 2 + 3 = 11.

// Input/Output
// [input] integer array inputArray

// Constraints: 5 ≤ inputArray.length ≤ 50, 0 ≤ inputArray[i] ≤ 10.

// [output] an integer


// const Test = require('@codewars/test-compat');

// describe("Basic Tests", function(){
// it("It should works for basic tests.", function(){

// Test.assertEquals( houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]),11)

// Test.assertEquals( houseNumbersSum([4, 2, 1, 6, 0]),13)

// Test.assertEquals( houseNumbersSum([4, 1, 2, 3, 0, 10, 2]),10)

// Test.assertEquals( houseNumbersSum([0, 1, 2, 3, 4, 5]),0)

// })})

// PREP
// P: we are given an array of numbers containing at least one zero
// R: we are to return a sum of the numbers up to the first zero
// E: see above
// P: split the array on zeros and sum the first one. may need to join it first.




function houseNumbersSum(inputArray) {

    let nums = inputArray.slice(0, inputArray.indexOf(0))

    return nums.reduce((acc,c) => acc + +c, 0)
    //coding and coding..
    
    
  }

  console.log(houseNumbersSum([4, 1, 2, 3, 0, 10, 2]),10)