// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("The Office IV - Find a Meeting Room", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(meeting(['X', 'O', 'X']), 1);
//     assert.strictEqual(meeting(['O','X','X','X','X']), 0);
//     assert.strictEqual(meeting(['X','X','X','X','X']), 'None available!');
//   });
// });

// PREP
// P: we are given an array of strings, "X" and "O"
// R: we are to return the indexOf the first "O" or a string "None available!" if there are no "O"'s
// E: see above
// P: return x.indexOf("O") should work, but do we need to put the srtingin a variable to check for it?

function meeting(x){
  
    if(x.indexOf("O") === -1){
        return "None available!"
    } else {
        return x.indexOf("O")

    }
}
console.log(meeting(["X","X","X"]))
