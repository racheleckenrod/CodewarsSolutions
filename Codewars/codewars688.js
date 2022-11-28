// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

// The task

// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

// Examples

// 7 ==> return "Balanced"
// Explanation:
// middle digit(s): 7
// sum of all digits to the left of the middle digit(s) -> 0
// sum of all digits to the right of the middle digit(s) -> 0
// 0 and 0 are equal, so it's balanced.
// 295591 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 55
// sum of all digits to the left of the middle digit(s) -> 11
// sum of all digits to the right of the middle digit(s) -> 10
// 11 and 10 are not equal, so it's not balanced.
// 959 ==> return "Balanced"
// Explanation:
// middle digit(s): 5
// sum of all digits to the left of the middle digit(s) -> 9
// sum of all digits to the right of the middle digit(s) -> 9
// 9 and 9 are equal, so it's balanced.
// 27102983 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 02
// sum of all digits to the left of the middle digit(s) -> 10
// sum of all digits to the right of the middle digit(s) -> 20
// 10 and 20 are not equal, so it's not balanced.
// Playing with Numbers Series

// Playing With Lists/Arrays Series

// const Test = require('@codewars/test-compat');

// describe("Check less than thousand", function()
// {
//     it("Check balanced number", function()
//     {
//         Test.assertEquals(balancedNum(7), "Balanced")
//         Test.assertEquals(balancedNum(959), "Balanced")
//         Test.assertEquals(balancedNum(13), "Balanced")
//         Test.assertEquals(balancedNum(432), "Not Balanced")
//         Test.assertEquals(balancedNum(424), "Balanced")
//     })
//     it("Check Larger number", function()
//     {
//         Test.assertEquals(balancedNum(1024), "Not Balanced")
//         Test.assertEquals(balancedNum(66545), "Not Balanced")
//         Test.assertEquals(balancedNum(295591), "Not Balanced")
//         Test.assertEquals(balancedNum(1230987), "Not Balanced")
//         Test.assertEquals(balancedNum(56239814), "Balanced")
//     })
// })
// PREP
// Parameters:
// we are given a number
// Results:
// we are to return either "Balanced" or "Not Balanced" depending on the number, if it has an odd number of digits, there is one middle, if it is even, there are two middle digits, and the numbers to the left and right of the "middle" are compared. if equal to each other, return "Balanced", if not, "Not Balanced". 
// example:
// even # of digits: 1234. "Not Balanced" as 1 != 4, and we do not consider the middle digits.
// with an odd number of digits like 456, "Not Balanced" as 4 != 6. all single digit numbers and two digit numbers are balanced.
// Pseudocode:
// make the number into a string, split it into an array, find the middle either one or two by index and length of the array.
// then split the array into two, more accurately- make two shallow copies of the array,(slice()) left and right then reduce them and compare for equality.

function balancedNum(number){
    let arr = number.toString().split("")
    let left = []
    let right = []
    console.log(arr)
    if(arr.length % 2 === 0){
      left = arr.slice(0, Math.floor(arr.length/2 -1))
      right = arr.slice(Math.ceil(arr.length/2 + 1))
    }else{
      left = arr.slice(0, Math.floor(arr.length/2))
      right = arr.slice(Math.ceil(arr.length/2))
    }
  
    console.log(left,right,arr)
    if(left.reduce((acc,c) => +acc + +c, 0) == right.reduce((acc,c) => +acc + +c,0)){
        return "Balanced"
    }else{
        return "Not Balanced"
    }
}
console.log(balancedNum(56239814))