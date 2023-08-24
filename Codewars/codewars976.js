// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)
// ARRAYSPUZZLES

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Fixed Tests", () => {
//   it("Should work for Example tests", function(){
//         let tests = [
//           [['red','red'],1],
//           [['red','green','blue'],0],
//           [['gray','black','purple','purple','gray','black'],3]
//         ];

//         tests.forEach(a=>{
//            assert.strictEqual(numberOfPairs(a[0]),a[1], `Testing for ${a[0]}`);
//         });
//   });
// })

// PREP
// P: we are given an array of strings naming colors.
// R: we are to return the number of pairs that can be made from the string
// E: if given ['blue', 'blue', 'red', 'red', 'red', 'yellow', 'yellow'] we are to return 3
// P: we need to keep track of each color separately, so creating an object with a tally comes to mind. from there we can loop through the object and sum the Math.floor(tally % 2) for each value in the object. Alternatively we could sort the array grouping the same colors together and add a count to a tally if the first one is the same as the second one, eliminating them if they are, and eliminating just the first if they are not. or we could start with i = 0, if i + 1 === i, count += 1 and i++.

function numberOfPairs(gloves){
    let sorted = gloves.sort()
    let count = 0
    for (let i = 0; i < sorted.length; i++){
        if(sorted[i] === sorted[i+1]) {
            count += 1
            i++
        }
    }

    return count
}
console.log(numberOfPairs(['gray','black','purple','purple','gray','black']), 3)