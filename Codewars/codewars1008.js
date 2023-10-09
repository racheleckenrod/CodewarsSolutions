// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// tripleX("abraxxxas") → true
// tripleX("xoxotrololololololoxxx") → false
// tripleX("softX kitty, warm kitty, xxxxx") → true
// tripleX("softx kitty, warm kitty, xxxxx") → false
// Note :

// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false
// STRINGSREGULAR EXPRESSIONSFUNDAMENTALS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(tripleX("abraxxxas"),true);
//     assert.strictEqual(tripleX("xoxotrololololololoxxx"),false);
//     assert.strictEqual(tripleX("soft kitty, warm kitty, xxxxx"),true);
//     assert.strictEqual(tripleX("softx kitty, warm kitty, xxxxx"),false);
//   });
// });

// PREP
// P: we are given a string
// R: we are to return true if the first instance of "x" (lowercase) is followed immediately by "xx", false otherwise
// E: we return true for "hexxxo"
// P: i'm thinkning to turn string into array, find indexOf, then check the two elements following to see if they both are "x" and return true if they are and false otherwise.

function tripleX(str){
    let arr = str.split("")

    let x = arr.indexOf("x")

    if (x === -1) return false

    if (arr[x + 1] === "x"  && arr[x + 2] === "x") {
        return true
    }

    return false
  
}
console.log(tripleX("hoxxxpefully"))
