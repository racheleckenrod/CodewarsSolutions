// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

// #Examples:

// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

// """So as you can see sum of consecutives 1 is 1 
// sum of 3 consecutives 4 is 12 
// sum of 0... and sum of 2 
// consecutives 3 is 6 ..."""

// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]

// const Test = require('@codewars/test-compat');

// describe("Sum of Consecutives",function() {
// it("Basic tests",function() {    
//     Test.assertSimilar(sumConsecutives([1,4,4,4,0,4,3,3,1]),[1,12,0,4,6,1], "on list [1,4,4,0,4,3,3,1] you get ")
//     Test.assertSimilar(sumConsecutives([1,1,7,7,3]),[2,14,3], "on list [1,1,7,7,3] you get ")
//     Test.assertSimilar(sumConsecutives([-5,-5,7,7,12,0]),[-10,14,12,0], "on list [-5,-5,7,7,12,0] you get ")
//     Test.assertSimilar(sumConsecutives([3,3,3,3,1]),[12, 1], "on list [3,3,3,3,1] you get " )
// })})

// PREP
// P: we are given an array of positive and negative numbers
// R: we are to return an array of positive and negative numbers that is equal to the sums of the consecutive numbers, where a single numbers sum is equal to the number itself.
// E: if given [1,2,2,3,4,4,4,0] we are to return [1,4,3,12,0]
// P: we need to start with the first element of the given array, and check to see if the next element is equal to it, if it is, add the next to the sum we have so far. if the next number is not equal, we push the sum so far into a results array. Taking the approach given by chat gpt, we set the sum equal to the first element, then start with the second element in the array and check it against i-1, the one before... this way can push the previous sum into the results array and set the new sum equal to the current element in the array. it also gives the correct answer instead of being wrong as I had it first.

// function sumConsecutives(s) {
//     let result = []
//     let sum = s[0]
//     for (let i = 1; i < s.length; i++) {
        
//         if (s[i] === s[i-1]) {
//             sum += s[i]
//         } else {
//             result.push(sum)
//             sum = s[i]
//         }
//     }
//     result.push(sum)
//     return result
// }
console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]),[1,12,0,4,6,1])

