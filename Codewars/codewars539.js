// In cryptanalysis, words patterns can be a useful tool in cracking simple ciphers.

// A word pattern is a description of the patterns of letters occurring in a word, where each letter is given an integer code in order of appearance. So the first letter is given the code 0, and second is then assigned 1 if it is different to the first letter or 0 otherwise, and so on.

// As an example, the word "hello" would become "0.1.2.2.3". For this task case-sensitivity is ignored, so "hello", "helLo" and "heLlo" will all return the same word pattern.

// Your task is to return the word pattern for a given word. All words provided will be non-empty strings of alphabetic characters only, i.e. matching the regex "[a-zA-Z]+".

// const chai = require("chai");
// const assert = chai.assert;

// describe("Example Tests", function() {
//   it("should pass fixed tests", function() {
//      assert.equal(wordPattern("hello"), "0.1.2.2.3");
//      assert.equal(wordPattern("heLlo"), "0.1.2.2.3");
//      assert.equal(wordPattern("helLo"), "0.1.2.2.3");
//      assert.equal(wordPattern("Hippopotomonstrosesquippedaliophobia"), "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13");
//   });
// });
// PREP
// Parameters
// given a string
// Results:
// we are to return a string of numbers separated with decimal points that correspond to a code for the letters, where the first number given is zero, and increases as you move along, except that it repeats the number for the same letters. in other words, each letter will have one number assigned to it, and that number is the first occurance of the letter in the string.

// example:
// example would return 0.1.2.3.4.5.0  where the second zero repeats  from the first occurance.

// pseudocode:
// I dont see another way to do this besides assigning a variable to each letter as it occurs.. checking if it is in say an array or object containing the letter and number. Maybe I could check the array for the letter, then if it is there, use the number from the inner array and add that to the .number string, and if it is not there, add the letter and the next number pair in an array to the "code" array or object.  

function wordPattern(word) {
    word = word.toLowerCase().split('')

    let code = word
    let nums = []

    code = [...new Set(code)]
    console.log(code)

    for(let i = 0; i < word.length; i++){
        for(let j = 0 ; j < code.length; j++){
            if(word[i] === code[j]){
                console.log("match", word[i], code[j])
                nums.push(code.indexOf(code[j]))
            }
        }
    }

    return nums.join(".")
  }

  console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"))