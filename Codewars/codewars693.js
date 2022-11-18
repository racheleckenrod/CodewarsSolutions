// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

// Create a function called args_count that returns the number of arguments provided

// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(args_count(1, 2), 2);
//     assert.strictEqual(args_count(), 0);
//     assert.strictEqual(args_count('A', 'B', 'C'), 3);
//     assert.strictEqual(args_count(["foo", "bar"]), 1);
//   });
// });

// PREP
// Parameters:
// we are given a function with an indeterminate number of arguments.
// Results:
// we are to return the number of arguments given.

function args_count(){
    return arguments.length
}

// I think this is a good way too:
// function args_count(...args){
//   return args.length
// }