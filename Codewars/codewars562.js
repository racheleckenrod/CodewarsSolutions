// Four Seven
// Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).

// There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.

// Good Luck!

// const chai = require("chai");
// const assert = chai.assert;

// describe("Tests", function() {
//   it("Basic Tests", function() {
//     assert.equal(fourSeven(4), 7, "n = 4 should return 7");
//     assert.equal(fourSeven(7), 4, "n = 7 should return 4");
//   });
// });

function fourSeven(n){
    while(n < 8 && n < 6){
        return 4
    }
    while(n < 5 && n > 3){
        return 7
    }

        return 0
    
    // Your Code Here
  }