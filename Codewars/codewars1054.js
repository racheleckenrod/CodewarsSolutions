// Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

// At long last, we need a way to unscramble what these pirates are saying.

// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

// For example:

// grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Should return ["sport", "ports"].

// Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

// Good luck!

// STRINGSALGORITHMS

// const {assert} = require("chai");

// describe("grabscrab", function() {
//   it("should pass sample test cases", function() {
//     assert.deepEqual(grabscrab("trisf", ["first"]), ["first"], "Should have found 'first'");
//     assert.deepEqual(grabscrab("oob", ["bob", "baobab"]), [], "Should not have found anything");
//     assert.deepEqual(grabscrab("ainstuomn", ["mountains", "hills", "mesa"]), ["mountains"], "Should have found 'mountains'");
//     assert.deepEqual(grabscrab("oolp", ["donkey", "pool", "horse", "loop"]), ["pool", "loop"], "Should have found 'pool' and 'loop'");
//     assert.deepEqual(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]), ["sport", "ports"], "Should have found 'sport' and 'ports'");
//     assert.deepEqual(grabscrab("ourf", ["one","two","three"]), [], "Should not have found anything");
//   });
// });

// PREP
// P: we are given a string and an array of strings
// R: we are to return (in the same order) the strings from the array that contain all the letters and only the letters of the string we are given.
// E: if given 'levo' ['olive', 'love', 'oven', 'lveo'] we are to return ['love', 'lveo']
// P: use forEach to test each element of the array for containing the letters of the anagram, push the matches into a results array and return it. can sort the letters of each and check for ===.


function grabscrab(anagram, dictionary) {
    let word = anagram.split('').sort().join('');
    let results = [];

    dictionary.forEach(el => {
        if (el.split('').sort().join('') === word) {
             results.push(el)
        }
    });
    return results
  }