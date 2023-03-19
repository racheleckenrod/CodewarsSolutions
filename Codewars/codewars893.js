// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"
// FUNDAMENTALSSTRINGSREGULAR EXPRESSIONSARRAYSCIPHERSALGORITHMSCRYPTOGRAPHYSECURITY

// const assert = require("chai").assert;

// describe("Fixed Tests", function() {
//   it("should work with fixed tests", function() {
//     assert.strictEqual(encryptThis("A"), "65");
//     assert.strictEqual(encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
//     assert.strictEqual(encryptThis("The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
//     assert.strictEqual(encryptThis("The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
//     assert.strictEqual(encryptThis("Why can we not all be like that wise old bird"), "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
//     assert.strictEqual(encryptThis("Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");    
//   });
// });

// PREP
// P: we are given a string of space separated words.
// R: we are to return a string of space separated words that are encoded with the first letter being the ASCII code for that letter and the last letter swapped with the second letter.
// E: given "open for business" we are to return "111nep 102ro 98ssinesu"
// P: split string into array, regex replace the first char with charCodeAt(0)? then swap letters using a temp variable. combine into word, push into array, then join array when finished

var encryptThis = function(text) {
    // Implement me! :)
    let arr = text.split(' ')
    for (let i = 0; i < arr.length; i++) {
        let chars = arr[i].split('')
        let temp = chars[1]
        chars[1] = chars[chars.length-1]
        chars[chars.length - 1] = temp
        chars[0] = chars[0].charCodeAt(0)
        arr[i] = chars.join('')
       

    }
    console.log(arr)
    return arr.join(' ')
  }
  console.log(encryptThis("A wise old owl lived in an oak"))