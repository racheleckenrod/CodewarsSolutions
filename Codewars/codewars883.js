// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

// const {assert} = require('chai');

// describe("Sample tests", () => {
//   it("Examples", () => {
//     assert.strictEqual(isValidIP("0.0.0.0"        ),  true);
//     assert.strictEqual(isValidIP("12.255.56.1"    ),  true);
//     assert.strictEqual(isValidIP("137.255.156.100"),  true);
//     assert.strictEqual(isValidIP(''               ), false);
//     assert.strictEqual(isValidIP('abc.def.ghi.jkl'), false);
//     assert.strictEqual(isValidIP('123.456.789.0'  ), false);
//     assert.strictEqual(isValidIP('12.34.56'       ), false);
//     assert.strictEqual(isValidIP('01.02.03.04'    ), false);
//     assert.strictEqual(isValidIP('256.1.2.3'      ), false);
//     assert.strictEqual(isValidIP('1.2.3.4.5'      ), false);
//     assert.strictEqual(isValidIP('123,45,67,89'   ), false);
//     assert.strictEqual(isValidIP('1e0.1e1.1e2.2e2'), false);
//     assert.strictEqual(isValidIP(' 1.2.3.4'       ), false);
//     assert.strictEqual(isValidIP('1.2.3.4 '       ), false);
//     assert.strictEqual(isValidIP('12.34.56.-7'    ), false);
//     assert.strictEqual(isValidIP('1.2.3.4\n'      ), false);
//     assert.strictEqual(isValidIP('\n1.2.3.4'      ), false);
//   });
// });

// PREP
// P: we are given a string
// R: we are to return true if the string is a valid IPv4 address in dot-decimal format consisting of four octets with values between 0 and 255 inclusive. Leading 0's are invalid
// E: see above
// P: I see to split the string on '.'s and check the values of the elements of the arrays to not start with zero, be <=255, be of length 4, and contain only digits


function isValidIP(str) {

    let arr = str.split('.')
    if(arr.length != 4) {
        return false
    }
    for (let i = 0; i < arr.length; i++){
        if(arr[i].length > 1 && arr[i][0] == 0){
            return false
        } else if (arr[i] > 255) {
            return false
        } else if (arr[i].length < 1) {
            return false
        } else if (/[^0-9]/gi.test(arr[i])){
            return false
        }
    }
    return true
  }