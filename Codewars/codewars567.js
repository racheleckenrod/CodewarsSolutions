// The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.

// For example, if n = 20, the resulting sequence will be:

// [ 20, 10, 5, 16, 8, 4, 2, 1 ]
// Write a program that will output the length of the Collatz Conjecture for any given n.
// In the example above, the output would be 8.

// For more reading see: http://en.wikipedia.org/wiki/Collatz_conjecture
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(collatz(20), 8)
//     assert.strictEqual(collatz(15), 18)
//   });
// });

function collatz(n) {
    let arr = [n]
    for(let i = n; i > 1; i--){
        if(i % 2 === 0){
            i = i / 2
        }else{
            i = (i * 3) + 1
        }
        arr.push(i)
        i++
    }
    console.log(arr)
    return arr.length
  }
  console.log(collatz(20))