// Find the sum of the digits of all the numbers from 1 to N (both ends included).

// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

// const { assert } = require("chai");

// describe("Twisted sum sample tests", () => {
//   it("Sample test 1", () => { assert.strictEqual(twistedSum(3), 6, "n = 3"); });
//   it("Sample test 2", () => { assert.strictEqual(twistedSum(10), 46, "n = 10"); });
//   it("Sample test 3", () => { assert.strictEqual(twistedSum(11), 48, "n = 11"); });
//   it("Sample test 4", () => { assert.strictEqual(twistedSum(12), 51, "n = 12"); });
// });


function twistedSum(n) {
    let arr = []
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }
    return arr.join("").toString().split('').reduce((acc,c) => +acc + +c, 0) 
  }
  console.log(twistedSum(10))