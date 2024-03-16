// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Numbers  to Objects", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(numObj([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}]);
//     assert.deepEqual(numObj([101,121,110,113,113,103]),[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]);
//   });
// });

// PREP
// P: we are given an array of numbers.
// R: we are to return an array of objects with the key being the number from the numbers array and the value being the ascii character of the number in string form.
// E: if given [65,66,67] we are to return [{'65':"A"}, {'66':"B"}, '{67':'"C"}]
// P: 

function numObj(s){

    return s.map(number => {
        const obj = {}

        obj[number.toString()] = String.fromCharCode(number)
        return obj
    })
  
}