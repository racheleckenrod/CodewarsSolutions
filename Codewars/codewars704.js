// Description

// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration:

//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐       
// │------5-│        
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │     
// BANG!────┘  ├─────► OK! 
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘
// Input

// Start and finish shelf numbers (always positive integers, finish no smaller than start)

// Task

// Find the minimum number of jumps to go from start to finish

// Example

// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Example test cases", function() {
//   it("Test case in description", function() {
//     assert.strictEqual(solution(1, 5), 2);
//   });
// });

// PREP
// Parameters:
// we are given two positive integers
// Results:
// we are to return the number of jumps it takes to get from start to finish.
// cats cannot jump onto shelf directly above it (plus two from where it is, it can only jump plus one or plus three, not two)
// Pseudocode:
// find number of threes, then fill in with ones and keep track of how many increments.


function solution(start, finish) {
    let jumps = 0
    for(let i = start; i <= finish; i++){
        if(start + 3 <= finish){
            jumps += 1
            start += 3
        }else if(start + 1 <= finish){
            jumps += 1
            start += 1
        }
    }
    return jumps
  
}