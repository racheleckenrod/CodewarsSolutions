// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// If you like substring Katas, please try:

// Non-even substrings

// Vowel-consonant lexicon

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", function(){
//   it("Test", () => {
//     assert.strictEqual(solve("codewarriors"),2);
//     assert.strictEqual(solve("suoidea"),3);
//     assert.strictEqual(solve("ultrarevolutionariees"),3);
//     assert.strictEqual(solve("strengthlessnesses"),1);
//     assert.strictEqual(solve("cuboideonavicuare"),2);
//     assert.strictEqual(solve("chrononhotonthuooaos"),5);
//     assert.strictEqual(solve("iiihoovaeaaaoougjyaw"),8);
//   })
// });

// PREp
// P: we are given a string of lowercase letters and no spaces"
// R: we are to return the length of consecutive vowels in the string.
// E: see above, 
// P: coming from the last kata, I'm thinking that I could replace all the consonants with spaces, split the string on spaces and get the longest element in the array.


function solve(s){

    let regex = /[^aeiou]/g
    let result = []

    let arr = s.replace(regex, ' ').split(' ')
    for(let item in arr){

        result.push(arr[item].length)
    }
    return Math.max(...result)
   }

   console.log(solve('iiihoovaeaaaoougjyaw'))