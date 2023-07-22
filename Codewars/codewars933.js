// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(bandNameGenerator('knife'), 'The Knife');
// Test.assertEquals(bandNameGenerator('tart'), 'Tartart');
// Test.assertEquals(bandNameGenerator('sandles'), 'Sandlesandles');
// Test.assertEquals(bandNameGenerator('bed'), 'The Bed');
//   });
// });

// PREP
// P: we are given a string
// R; we are to return a string in one of two formats, if the word starts and end with the same letter, we are to repeat the word using only one of the repeating letters (capitalized), else we are to return the word "the" (capitalized) and the word capitalized.
// E: if given the string "october" we are to return "The October", and if given "sugars" we are to return "Sugarsugars"
// P: first we check to see if the string begins and ends with the same letter. if it does we concatonate a slice of it on to the original, if not, we return the "The" + a slice of the first letter toUpperCase() then a slice of the rest of the word.

function bandNameGenerator(str) {
    if( str[0] === str[str.length - 1]) {
        return str.slice(0,1).toUpperCase() + str.slice(1) + str.slice(1)
    } else {
        return `The ${str.slice(0,1).toUpperCase()}${str.slice(1)}`
    }
  }
  console.log(bandNameGenerator('tarts'))