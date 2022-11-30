// Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):

// Then add the letters in a clockwise direction: Then remove the circle: 
// If we read the result from left to right, we get csordaew.

// Decoding is the same process in reverse. If we decode csordaew, we get codewars.

// Examples:

// encode "codewars" -> "csordaew"
// decode "csordaew" -> "codewars"
// encode "white" -> "wehti"
// decode "wehti" -> "white"
// CIPHERSALGORITHMS

// const chai = require("chai");
// const assert = chai.assert;
// describe("solutionTest", function() {
//   it("encodeBasicTests", function() {
//     assert.strictEqual(encode("codewars"), "csordaew");
//     assert.strictEqual(encode("white"), "wehti");
//     assert.strictEqual(encode("Assert"), "Atsrse");
//     assert.strictEqual(encode("Hello world!"), "H!edlllroo w");
//     assert.strictEqual(encode("You have chosen to translate this kata."), "Y.oaut ahka vsei hcth oesteanl stnoa rt");  
//   });
  
//   it("decodeBasicTests", function() {
//     assert.strictEqual(decode("csordaew"), "codewars");
//     assert.strictEqual(decode("wehti"), "white");
//     assert.strictEqual(decode("Atsrse"), "Assert");
//     assert.strictEqual(decode("H!edlllroo w"), "Hello world!");
//     assert.strictEqual(decode("Y.oaut ahka vsei hcth oesteanl stnoa rt"), "You have chosen to translate this kata.");
//   });
// });

// PREP
// Parameters:
// we are to write two functions. each to take a string
// we are to return the encoded or decoded string. using the first, last, then second then second from last. perhaps a shift then a pop 

// for the decode, we need to do the first element into the first position in the new arr, then the second element to the last, the third element is then the second in the return array
// first, last, second, second to last, third, third to last, forth, forth to last...

function encode(s) {
    let arr = s.split("")
    let encode = []
    for(let i = 0; i < s.length/2; i++){
        let front = arr.shift()
        console.log(front)
        encode.push(front)
        let end = arr.pop()
        console.log(end)
        encode.push(end)
    }
    return encode.join('')
}
console.log(encode("white"))
function decode(s) {
    let arr = s.split("")
    let decode = []
    let odd = ""
    for(let i = 0; i < s.length; i++){
    //   decode[i] = arr[i]
    if (i % 2 ) {
        decode.unshift(arr[i])
        console.log(decode)
    }
   
    else{
        odd += arr[i]
    }
      
    }
    return odd + decode.join('')
}
console.log(decode("H!edlllroo w"), "Hello world!")