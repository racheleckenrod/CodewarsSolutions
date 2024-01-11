// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
// FUNDAMENTALS

// const { assert, config } = require("chai");
// config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("Basic Tests", () => {
//     doTest(['abc:123', 'cde:456'], ['abc:456', 'cde:123']);
//     doTest(['a:12345', '777:xyz'], ['a:xyz', '777:12345']);
//   });
// });

// function doTest(arr, exp) {
//   const msg = "Test failed for " + JSON.stringify(arr);
//   assert.deepEqual(tailSwap(arr), exp, msg);
// }

// PREP
// P: we are given two strings
// R: we are to return two strings, but with the charaters after the colon switched
// E: if given ["abc:123", "xyz:789"], we are to return ["abc:789", "xyz:123"]
// P: we can split the strings at the colon, and build variables with the parts of the array and return them.


function tailSwap(arr) {
    let first = arr[0].split(":");
    let second = arr[1].split(":");

    return [(first[0] + ":" + second[1]), (second[0] + ":" + first[1])]
  }

  console.log(tailSwap(["abc:123", "xyz:789"]))

//   or could return the template literal:

// return [`${first[0]}:${second[1]}`, `${second[0]}:${first[1]}`]