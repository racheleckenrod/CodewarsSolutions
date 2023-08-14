// Write a function that reverses the bits in an integer.

// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

// You can assume that the number is not negative.

// BITSFUNDAMENTALS

// const Test = require('@codewars/test-compat');

// const assert = require("chai").assert;

// describe("Sample tests", function() {
//   it("should work for some integers", function() {
//     Test.assertEquals(reverseBits(417), 267);
//     Test.assertEquals(reverseBits(267), 417); 
//     Test.assertEquals(reverseBits(0), 0); 
//     Test.assertEquals(reverseBits(2017), 1087); 
//     Test.assertEquals(reverseBits(1023), 1023); 
//     Test.assertEquals(reverseBits(1024), 1); 
//     Test.assertEquals(reverseBits(Number.MAX_SAFE_INTEGER), Number.MAX_SAFE_INTEGER);   
//   });
// });

// PREP
// P: we are given a number
// R: we are to return a number that is the reverse in binary of the given number
// E: see above
// P: we need to convert the number to binary, reverse it then convert it back to a number. to do this, we take the number.toString(2).split("").reverse().join("").toString(10), and wrap the whole thing in Number


// function reverseBits (n) {

//     let binary = Number(n.toString(2).split("").reverse().join(""))

//     return parseInt(binary, 2)
//     // your code here
//   }

//   console.log(reverseBits(417))

//   function reverseBits(n) {
//     let result = 0;

//     while (n > 0) {
//         console.log(`Before shift: result = ${result.toString(2)}, n = ${n.toString(2)}`);
//         result = (result << 1) | (n & 1);
//         console.log(`After shift and OR: result = ${result.toString(2)}, n = ${n.toString(2)}`);
//         n >>= 1;
//         console.log(`After right shift: result = ${result.toString(2)}, n = ${n.toString(2)}`);
//         console.log('------------------------');
//     }

//     return result;
// }

// console.log(reverseBits(417)); // Output: 267


function reverseBits(n) {
    let result = BigInt(0);
  let num = BigInt(n);

  while (num > 0n) {
      result = (result << 1n) | (num & 1n);
      num >>= 1n;
  }

  return Number(result);

}
console.log(reverseBits(Number.MAX_SAFE_INTEGER), Number.MAX_SAFE_INTEGER);   
