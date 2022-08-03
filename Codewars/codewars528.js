// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(wordsToMarks("attitude"), 100);
//     assert.strictEqual(wordsToMarks("friends"), 75);
//     assert.strictEqual(wordsToMarks("family"), 66);
//     assert.strictEqual(wordsToMarks("selfness"), 99);
//     assert.strictEqual(wordsToMarks("knowledge"), 96);
//   });
// })

// a is 97, so all the letters and minus 96

function wordsToMarks(string){
    let arr = string.split("")
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(charCodeAt(i))
    }
    return newArr.join("")
  }