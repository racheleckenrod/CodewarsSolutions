// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

// Example:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see "Sample Tests".

// Note
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// FUNDAMENTALSALGORITHMS

// const {assert,config} = require('chai')
// config.truncateThreshold = 0

// describe('Testing...', function(){
//   it("Basic tests",function() {
//     assert.deepEqual(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
//     assert.deepEqual(listSquared(42, 250), [[42, 2500], [246, 84100]])
//     assert.deepEqual(listSquared(250, 500), [[287, 84100]])
//   })
// })

// PREP
// P: we are given two numbers
// R: we are to return an array of subarrays that contains all numbers between the two given numbers(inclusive) that have the sum of the squares of their divisors equal to a square itself, and the sum of that square.
// E: 42 the divisors of 42 are [1, 42, 2, 21, 3, 14, 6, 7] and the sum of the squares of those numbers is 2500, and the sqrt of 2500 is 50, so it passes and we are to return [42, 2500]

function listSquared(m, n) {
    let result = []

    for (let i = m; i <= n; i++){
        let divisors = []
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0){
                divisors.push(j)
                if (j !== Math.sqrt(i)) {
                    divisors.push(i/j)
                    // console.log("divisori/j",i/j)
                }
            }
        }
            let divisorSum = divisors.reduce((acc,c) => acc + c**2,0)
            console.log("diviorSum=", divisorSum, "divisors=", divisors)

            if (Math.floor(Math.sqrt(divisorSum)) === Math.sqrt(divisorSum)) {
                result.push([i, divisorSum])
                console.log("result=", i, divisorSum)
            }
        
    }
    return result
}
console.log(listSquared(1, 250))