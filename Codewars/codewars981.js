// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(stringTransformer('Example string'), 'STRING eXAMPLE');
//   });
// });

// PREP
// P: we are given a string
// R: we are to return a string with the order of the words in the string reversed, and the cases of the letters changed to the opposite
// E: if given "string Example" we are to return "eXAMPLE STRING"
// P: to reverse the order of the words in the string, we will split(" ").reverse().join(" "). then split the string by char and loop through and check each one for the case and if it is lowercase, change to upper and vice versa. finally join the string and return it


function stringTransformer(str) {

    let arr = str.split(" ").reverse().join(" ")

    arr = arr.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]  === arr[i].toLowerCase()) {
            arr[i] = arr[i].toUpperCase()
        } else if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase()
        }
    }

    return arr.join("")
    // Your code here
  }
  console.log(stringTransformer('Example string'))