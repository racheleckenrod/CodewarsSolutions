// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// Other Examples:
// ls = [1, 2, 3, 4, 5, 6] 
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
// Notes
// Take a look at performance: some lists have thousands of elements.
// Please ask before translating.
// FUNDAMENTALSPERFORMANCEALGORITHMS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("partsSums",function() {

// function dotest(ls, expect) {
//     let actual = partsSums(ls);
//     assert.deepEqual(actual, expect);
// }

// it("Basic tests",function() {
//     dotest([], [0]);
//     dotest([0, 1, 3, 6, 10], [20, 20, 19, 16, 10, 0]); 
//     dotest([1, 2, 3, 4, 5, 6], [21, 20, 18, 15, 11, 6, 0]); 
//     dotest([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358], 
//             [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]); 
// })})
// å

// PREP
// P: we are given an array
// R: we are to return an array of the sums of the elements of the array, removing the first element in the array.
// E: see above
// P: since unshift is ineffiecent, perhaps to reverse it once then pop the elements off would be better. then reduce the new array and push those values to the return array.ending the array with pushing zero.

function partsSums(ls) {
    let revArr = ls.slice(0)
    revArr.reverse()
    let result = []

    for (let i = 0; i <= ls.length; i++) {
        result.push(revArr.reduce((acc,c) => acc + c,0))
        revArr.pop()
    }
    return result
}
console.log(partsSums([0, 1, 3, 6, 10]))

// this first attempt did not pass the time test

function partsSum(ls) {
    let result = []
    let sum = 0

    for(let i = ls.length - 1; i >= 0; i--) {
        sum += ls[i]
        result.push(sum)
    }

    result.reverse()
    result.push(0)
    return result
}