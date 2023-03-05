// Task
// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

// * 'Hello world'   => true
// * ' Hello world'  => false
// * 'Hello world  ' => false
// * 'Hello  world'  => false
// * 'Hello'         => true

// Even though there are no spaces, it is still valid because none are needed:
// * 'Helloworld'    => true
// * 'Helloworld '   => false
// * ' '             => false
// * ''              => true
// Note - there will be no punctuation or digits in the input string, only letters.

// FUNDAMENTALS

// const chai = require("chai");
// const assert = chai.assert;
// // chai.config.truncateThreshold=0;

// describe("Fixed Tests", function() {
//   it("Testing 'Hello world'",function (){
//     assert.strictEqual(validSpacing('Hello world'), true);
//   });
//   it("Testing ' Hello world'", function(){
//     assert.strictEqual(validSpacing(' Hello world'), false);
//   });
//   it("Testing 'Hello  world '", function(){
//     assert.strictEqual(validSpacing('Hello  world '), false);
//   });
//   it("Testing 'Hello'", function(){
//     assert.strictEqual(validSpacing('Hello'), true);
//   });
//   it("Testing 'Helloworld'", function(){
//     assert.strictEqual(validSpacing('Helloworld'), true);
//   });
// });


// PREP
// P: we are given a string with letters and spaces
// R: we are to return true if the spacing is just one space between groups of letters. false otherwise, including double spaces or leading or trailing spaces. an empty string returns true while an empty string with a space returns false
// E: given " hope floats" we are to return false while "hope floats" returns true
// P: I can do a test for if trim() is equal to the original string to test for the ends, and a regex expression to test for two or more spaces

// function validSpacing(s) {
//     if (s.trim() !== s) return false
//     if (/  +/.test(s)) return false

//     return true
//     // write your code here
//   }

//   refactored a bit:

function validSpacing(s) {
    if (s.trim() !== s || /  +/.test(s)) return false
    
    return true
    // write your code here
  }