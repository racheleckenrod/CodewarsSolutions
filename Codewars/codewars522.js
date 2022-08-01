// Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

// Example:

// 13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

// Hence the asnwer will be 2 (=13-11)

// const {assert} = require('chai')

// describe("bmi", function() {
//   it("should pass sample tests", function() {
//     assert.strictEqual(minDistance(8), 1);
//     assert.strictEqual(minDistance(25), 4);
//     assert.strictEqual(minDistance(13013), 2);
//     assert.strictEqual(minDistance(218683), 198);
//   });
// });

function minDistance(n){
    let factors = []
    let diffs = []
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            factors.push(i)
        }
    }
    for(let i = 0; i < factors.length - 1; i++){
        diffs.push(factors[i + 1] - factors[i])
    }
    return Math.min(...diffs)
  }
  console.log(minDistance(13013))