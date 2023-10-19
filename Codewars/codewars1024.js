// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// Examples
// "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
// "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word.
// STRINGSALGORITHMS

// const Test = require('@codewars/test-compat');

// describe("GetMiddle", function() {
//   it("Tests", function() {
//     Test.assertEquals(validateWord("abcabc"),true, "The word was: \"abcabc\" \n");
//     Test.assertEquals(validateWord("Abcabc"),true, "The word was: \"Abcabc\" \n");
//     Test.assertEquals(validateWord("abc123"),true, "The word was: \"abc123\" \n");
//     Test.assertEquals(validateWord("abcabcd"),false, "The word was: \"abcabcd\" \n");
//     Test.assertEquals(validateWord("abc!abc!"),true, "The word was: \"abc!abc!\" \n");
//     Test.assertEquals(validateWord("abc:abc"),false, "The word was: \"abc:abc\" \n");
//   });
// });

// PREP
// P: we are given a string
// R: we are to return true if all characters in the string have the same number of occurrances, false otherwise
// E: if given "string" we are to return true since each letter in the string is only once.
// P: we first make an object that counts the occurrances of the characters in the string. Then make the values into an array and check the array for all the same values.




function validateWord(s){
    s = s.toLowerCase()
  let obj = {}
  
  for (const char of s) {
    if (obj[char]) {
        obj[char]++
    } else {
        obj[char] = 1
    }
  }

  let arr = Object.values(obj)

  return arr.every(value => value === arr[0])
}
console.log(validateWord('strings'))