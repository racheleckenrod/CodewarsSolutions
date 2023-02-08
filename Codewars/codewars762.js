// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// // Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test1", () => {
//     var string = "The quick brown fox jumps over the lazy dog."
//     assert.strictEqual(isPangram(string), true)
//   })
//   it("test2", () => {
//     var string = "This is not a pangram."
//     assert.strictEqual(isPangram(string), false)
//   });
// });

// Pseudocode:
// create string of alphabet, and check the string given to see that it contains each on, else return false

function isPangram(string){
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for (let i = 0; i < letters.length; i++){
        console.log(letters[i])
        if(!string.toLowerCase().includes(letters[i])){
            return false
        }
    }
    return true
  }
  console.log(isPangram("abcdefghijmnopqursuvwxyz"))