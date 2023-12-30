// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""
// STRINGSALGORITHMS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Format words into a sentence", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(formatWords(['one', 'two', 'three', 'four']), 'one, two, three and four', "formatWords(['one', 'two', 'three', 'four'] should return 'one, two, three and four'")
//     assert.strictEqual(formatWords(['one']), 'one', "formatWords(['one']) should return 'one'")
//     assert.strictEqual(formatWords(['one', '', 'three']), 'one and three', "formatWords(['one', '', 'three']) should return 'one and three'")
//     assert.strictEqual(formatWords(['', '', 'three']), 'three', "formatWords(['', '', 'three']) should return 'three'")
//     assert.strictEqual(formatWords(['one', 'two', '']), 'one and two', "formatWords(['one', 'two', '']) should return 'one and two'")
//     assert.strictEqual(formatWords([]),'', 'formatWords([]) should return ""')
//     assert.strictEqual(formatWords(null), '', 'formatWords(null) should return ""')
//     assert.strictEqual(formatWords(['']), '', 'formatWords([""]) should return ""')
//   });
// })

// PREP
// P: we are given an array of strings
// R: we are to return a string with comma separated values, except for the last one which should be an "and"
// E: if given ['tomatoes', 'carrots', 'cucumbers', 'lettuce'] , we should return 'tomatoes, carrots, cucumbers and lettuce'
// P: we can join the array with commas, then find the last index of the comma and replace it with 'and'.



function formatWords(words){
    if (words === null) return ""
    words = words.filter(item => item !== "");
    if (words.length <= 1) {
        return words.toString();
    }
   

    let result = words.join(', ');
    let andIndex = result.lastIndexOf(',');
    result = result.slice(0, andIndex);
    
    return result + ` and ${words[words.length-1]}`
}
console.log(formatWords(['one', 'two', 'three', 'four']))