// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// alternative text

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216

// const chai = require('chai');
// const assert = chai.assert;

// describe("Basic tests",function() {
// it("Small numbers",function() {
//     assert.strictEqual(perimeter(0), 4)
//     assert.strictEqual(perimeter(5), 80)
//     assert.strictEqual(perimeter(7), 216)
//     assert.strictEqual(perimeter(20), 114624)
//     assert.strictEqual(perimeter(30), 14098308)
// })})

// PREP
// P: we are given a number, n
// R: we are to return the sum of the perimeter of n + 1 squares making up a fibinacci rectangle. 
// E: if given 0, we are to return 4 
// P: first we find the fibonacci array to index n, then sum the numbers and multiply by 4. then return the number.

function perimeter(n) {

    let fibArr = [0,1]

    for (let i = 2; i <= n + 1; i++) {
        let nextNum = fibArr[i-1] + fibArr[i-2]
        fibArr.push(nextNum)
    }

    return 4 * fibArr.reduce((acc,c) => acc + +c,0)
    
}

console.log(perimeter(5))