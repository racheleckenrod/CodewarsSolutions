// Task
// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

// Example:
// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
// Good luck!


// const assert = require("chai").assert;

// describe("Ultimate Array Reverser Tests", () => {
//   it("should work on fixed tests", () => {
//     assert.deepEqual(
//       ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]),
//       ["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]
//     );
    
//     assert.deepEqual(
//       ultimateReverse(
//         ["?kn", "ipnr", "utotst", "ra", "tsn", "iksr", "uo", "yer", 
//          "ofebta", "eote", "vahu", "oyodpm", "ir", "hsyn", "amwoH"]
//       ),
//       ["How", "many", "shrimp", "do", "you", "have", "to", "eat",
//        "before", "your", "skin", "starts", "to", "turn", "pink?"]
//     );
//   });
// });

// PREP
// Parameters:
// we are given an array of strings
// Results:
// we are to return an array of strings that have the original string reversed, the length of the strings are to remain the same.
// Example:
// ["I", "have", "good", "ideas."]
// [".", "saed", "idoo", "gevahI"]

// Pseudocode:
// make a copy of the original, then refer to the original to get the length of the elements and fill them in with a reversed copy of the string. 

const ultimateReverse = s => {
    let copy = s.join("").split('').reverse()
    let arr = []
    let n = 0
    for(let i = 0; i < s.length; i++){
        arr.push(copy.slice(n, n + s[i].length).join(""))
        n += s[i].length
    }
  return arr
}
console.log(ultimateReverse(["I", "have", "good", "ideas."]))