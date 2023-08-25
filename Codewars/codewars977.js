// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
// const chai = require("chai");
// const assert = chai.assert;

// describe("Tests", function(){
//   it("Example tests", function(){
//     assert.strictEqual(nthFibo(1), 0,"1-st Fibo");
//     assert.strictEqual(nthFibo(2), 1,"2-nd Fibo");
//     assert.strictEqual(nthFibo(3), 1,"3-rd Fibo");
//     assert.strictEqual(nthFibo(4), 2,"4-th Fibo");
//   });
// });

// PREP
// P: we are given a number
// R: we are to return the nth fibonacci number
// E: if given n=3 we are toreturn 1, as the finonacci numbers are [0,1,1]
// P: the nth fibonacci number will be the index-1 of an array of the fibonacci numbers. we will create an array of index n-1 and return that number.
function nthFibo(n) {
    let fibs = [0,1]
    for (let i = 0; i < n - 2; i++) {
        fibs.push(fibs[i] + fibs[i+1] )
    }

    return fibs[n-1]
    // Return the n-th number in the Fibonacci Sequence
  }