// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


// const {assert} = require('chai');

// describe("cleanString", () => {
//   it("should work correctly", () => {
//     assert.strictEqual(cleanString('abc#d##c'), 'ac');
//     assert.strictEqual(cleanString('abc####d##c#'), '');
//   });
// });

// PREP
// P: we are given a string containing #'s and other chars
// R: we are to return a string that has all chars before a # removed.
// E: if given 'a#bc##' we are to return ''
// P: find index of # and remove it and the preceeding char. the problem is in repeating the search for another # after one is removed. a while loop that is while arr includes #, remove it and the preceeding char



function cleanString(s) {
    let arr = []

    for (let char of s) {
        if (char === "#") {
            arr.pop()
        } else {
            arr.push(char)
        }
    }

    return arr.join("")
    // ... your code ...
  }

  console.log(cleanString('##abc####d##e#'))