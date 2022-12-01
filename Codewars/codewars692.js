// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:

// For example: (Input --> Output)

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0
// ALGORITHMSMATHEMATICS

// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual( triangular(2), 3 )
//     assert.strictEqual( triangular(4), 10 )
//     assert.strictEqual( triangular(-454), 0 )
//   })
// })

// PREP
// Parameters:
// we are given a  number
// Results:
// we are to return 0 for all numbers <= 0,
// and for positive integers, we are to return how many "dots" there are in the triangle made by the number n + one less to zero, in other words, factorial? I think.
// Return the nth triangular number
function triangular( n ) {
    let dots = 0
    if(n > 0){
        for(let i = n; i > 0; i--){
            dots += i
        }
    }
        return dots
}


console.log(triangular(-4))

