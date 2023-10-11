// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']
// FUNDAMENTALS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Test Cases", function() {
//   it("basic example", function() {
//      assert.deepEqual(filterLongWords("The quick brown fox jumps over the lazy dog", 4), ['quick', 'brown', 'jumps']);
//   });
// });

// PREP
// P: we are given a string of words and a number.
// R: we are to return an array of string words that are longer than the given number of letters(not equal)
// E: if given "this is not too challenging", 3 , we are to return ['this', 'challenging']
// P: make result array, and push into it any elements that are longer than the given number (after converting the string to an array of words)

// function filterLongWords(sentence, n) {
//     let arr = sentence.split(' ')
//     let result = []

//     result.push(arr.filter(item => item.length > n))
//     //Solution here
//   }
//   the above solution returns a nested array...

// we can just return the filtered arr as so:

function filterLongWords(sentence, n) {
    let arr = sentence.split(' ')
    return arr.filter(item => item.length > n)
}

// and even more simply:

// function filterLongWords(sentance, n) {
    // return sentance.split(' ').filter(item => item.length > n)
// }