// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// const chai = require("chai");
// const assert = chai.assert;

// describe("Tests", function() {
//   it("Sample tests", function() {
//     for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
//       assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
//     }
//   });
// });

// Pseudocode:
// will need to do two, one for upper and one for lower case.
// A = 65, Z = 90
// if charCode is 65 - (90-13), return charcode + 13,
// if from (90-13 = 77) - 90, return charcode - 13
// a = 97, z = 122
// 

function rot13(message){
    let arr = message.split("")
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].codePointAt(0), i, arr[i])
        if(arr[i].codePointAt(0) > 64 && arr[i].codePointAt(0) < 78){
            arr[i] = String.fromCharCode(arr[i].codePointAt(0) + 13)
        }
        else if(arr[i].codePointAt(0) > 77 && arr[i].codePointAt(0) < 91){
            arr[i] = String.fromCharCode(arr[i].codePointAt(0) - 13)
        }
        else if(arr[i].codePointAt(0) > 96 && arr[i].codePointAt(0) < 110){
            console.log("2")

            arr[i] = String.fromCharCode(arr[i].codePointAt(0) + 13)
        }
        else if(arr[i].codePointAt(0) > 108 && arr[i].codePointAt(0) < 123){
            console.log("3")

            arr[i] = String.fromCharCode(arr[i].codePointAt(0) - 13)
        }
    }
    return arr.join('')
}
console.log(rot13("ABCXYZ, Mmmmabcxyz"))