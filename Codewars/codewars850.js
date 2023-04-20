// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1


// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(nextBigger(12),21)
// Test.assertEquals(nextBigger(513),531)
// Test.assertEquals(nextBigger(2017),2071)
// Test.assertEquals(nextBigger(414),441)
// Test.assertEquals(nextBigger(144),414)
//   });
// });

// PREP
// P: we are given a number
// R: we are to return the next biggest number made from the same digits. returing -1 if it is not possible.
// E: 114 returns 141.
// P: my initial approach is to start counting up until you reach a number that contains all the digits, but on second thought, perhaps I could make an array that contains the possibilities, and put them in order. Seems the answer is one digit nums return -1, two digit nums return the reverse or -1. three digit nums reverse the last two digits or -1, unless they are the same, and the first digit is less than the the repeating num. four digit nums, swap last two digits, also if nums are sorted in descending order, return -1

// function nextBigger(number){
//    const digits = number.toString().split('')
//    const nums = []

//    for (let i = 0; i < digits.length; i++){
//     for (let j = 0; j < digits.length; j++){
//         if(i !== j){
//             const num = swapDigits(digits, i, j)
//             nums.push(Number(num.join('')))
//         }
//     }
//    }
//    nums.sort((a,b) => a - b)
//     console.log(nums)

//    return nums.find(item => item > number) || -1
//   }

//   function swapDigits(digits, i, j) {
//     const digitsCopy = [...digits]
//     const temp = digitsCopy[i]
//     digitsCopy[i] = digitsCopy[j]
//     digitsCopy[j] = temp
//     return digitsCopy
//   }

//   console.log(nextBigger(2017))


// another approach:

function nextBigger(n){
    let digits = n.toString().split('')

    let i = digits.length - 2
    while (i >= 0 && digits[i] >= digits[i + 1]){
        i--
    }

    if(i === -1) {
        return -1
    }

    let j = digits.length - 1
    while (digits[j] <= digits[i]) {
        j--
    }

    [digits[i], digits[j]] = [digits[j], digits[i]]

    let sortedDigits = digits.slice(i + 1).sort()

    return +digits.slice(0, i + 1).concat(sortedDigits).join('')

}