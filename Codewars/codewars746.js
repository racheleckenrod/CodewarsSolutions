// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
// FUNDAMENTALS

// Pseudocode:
// check length,
// split number into digits
// reduce
// add one to count
// check length, repeat


function persistence(num) {
    let count = 0
    if(num.toString().length === 1) return count

    let nums = num.toString().split("")
    while(nums.length > 1){
        nums = nums.reduce((acc, c) => +acc * +c, 1).toString().split("")
        count += 1
    }
  
    return count
 }
 console.log(persistence(999),4)