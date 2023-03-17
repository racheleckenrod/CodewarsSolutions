// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Data Reverse", function(){
//   it("Example Tests", function(){
//     const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
//     const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
//     assert.deepEqual(dataReverse(data1),data2)
//     const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
//     const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
//     assert.deepEqual(dataReverse(data3),data4)
//   });
// });

// PREP
// P: we are given an array of comma separated 0's and 1's.
// R: we are to return an array of the same, but each series of eight digits is to be reversed.
// E: if given [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1] we are to return [0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
// P: we can make an array that is split into subarrays of length eight by taking slices. then reverse the array and join it.
function dataReverse(data) {
    let result = []

    for (let i = 0; i < data.length; i+=8) {
        result.push(data.slice(i, i+8))
    }

    result = result.reverse().flat()

    return result

    // Your code here
  }

  console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))