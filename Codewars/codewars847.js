// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// For C: The result is freed.

// const { assert } = require('chai');

// describe("Order Weights",function() {
//   it("Basic tests",function() {
//     assert.strictEqual(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
//     assert.strictEqual(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
//   })
// })

// PREP
// P: we are given a string that has spaces and numbers. it may contain trailing spaces and more than one space between numbers.
// R: we are to return the numbers in a string in a particular order. The order is based on the "weight" of the number. the "weight" of the number is the digits added together. and any numbers with the same weight are to be returned based on the alphabetical order of the numbers with the smallest first.
// E: if 15 and 51 are two of the numbers, 15 is to be returned first, even though they both have the same weight of 6. 
// P: I'm thinking these numbers need to become objects so that we can keep the weight with the number, reorder them and refer back to the original after the position has changed. So that we would possibly have an array of objects with the key being the number and the value being the weight. empty strings would have a value of zero? after some research, creating a separate function to pass the number into to get the sum of the digits (weight) is another way to go. when sorting, weight(a) - weight(b) if zero, goes on to check if a > b evauluating to true(1) or false(0) if false, checks for a < b and return -1 for that case and -0 (0) if false (equal). Altenatively, the OR statements can be written as
//  || (a > b ? 1 : -1)  the || statements are for when the weights are equal.

function weight(num) {
    return num.split('').reduce((a, b) => a + +b, 0)
}


function orderWeight(strng) {
    let arr = strng.split(' ')
    arr.sort((a, b) => weight(a) - weight(b) || a > b || -(a < b) )
    console.log(arr)
    return arr.join(' ')
}

console.log(orderWeight("103  123 4444 99 2002"))