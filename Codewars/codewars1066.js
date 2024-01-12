// Task
// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example
// For n = 152, the output should be 52;

// For n = 1001, the output should be 101.

// Input/Output
// [input] integer n

// Constraints: 10 ≤ n ≤ 1000000.

// [output] an integer

// const Test = require('@codewars/test-compat');

// describe("Basic Tests", function(){
// it("It should works for basic tests.", function(){

// Test.assertEquals(deleteDigit(152),52)

// Test.assertEquals(deleteDigit(1001),101)

// Test.assertEquals(deleteDigit(10),1)

// })})

// PREP
// P: we are given a number
// R: we are to return the largest number possible by omitting one of the digits
// E: if given 435 we are to return 45.
// P: we convert the number to a string then split it into an array. make an array that has all possibilities and take Math.max of the array.

function deleteDigit(n) {
    let digits = n.toString().split('').map(item => Number(item))

    let nums = [];

    for(let i = 0; i < digits.length; i++) {
        let copy = digits.slice()
        copy.splice(i, 1);
        
        let num = Number(copy.join(""))

        nums.push(num)
    }

    return Math.max(...nums)    
    
  }
  console.log(deleteDigit(435))