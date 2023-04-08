// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Cat and Mouse - Easy Version", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(catMouse('C....m'), "Escaped!");
//     assert.strictEqual(catMouse('C..m'), "Caught!");
//     assert.strictEqual(catMouse('C.....m'), "Escaped!");
//   })
// });

// PREP
// P: this does not tell us if the string we are given will always start with C and end with m, or not, only that is is made up of a "C" and an "m"  and the rest"...."
// R: we are to return a string either "Escaped"- if there are more than three periods or "Caught" if there are three or less.
// E: see above.
// P: I'll try it first with a simple .length test, seeing if indeed the string always starts with "C" and ends with 'm' it will be length 5 or less "caught", else "escaped"

function catMouse(x){
    if(x.length <= 5){
        return "Caught!"
    }else {
        return "Escaped!"
    }
}

// I could have refactored into a ternary:

function catMouse(x){
    return x.length <= 5 ? "Caught" : "Escaped!"
}