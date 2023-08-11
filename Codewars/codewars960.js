// In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula

 
// where n denotes a row of the triangle, and k is a position of a term in the row.

// Pascal's Triangle

// You can read Wikipedia article on Pascal's Triangle for more information.

// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
// Note
// Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.

// const chai = require("chai");
// const assert = chai.assert;

// describe("Basic tests", function() {
//   it("Level 1 triangle", function() {
//     assert.deepEqual(pascalsTriangle(1), [1],"1 level triangle incorrect");
//   });
//   it("Level 2 triangle", function() {
//     assert.deepEqual(pascalsTriangle(2), [1,1,1],"2 level triangle incorrect");
//   });
//   it("Level 4 triangle", function() {
//     assert.deepEqual(pascalsTriangle(4), [1,1,1,1,2,1,1,3,3,1],"4 level triangle incorrect");
//   });
//   it("Level 6 triangle", function() {    
//     assert.deepEqual(pascalsTriangle(6), [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1,1,5,10,10,5,1],"6 level triangle incorrect");
//   });  
// });


function pascalsTriangle(n) {

    let triangle = [[1]]

    for (let i = 1; i < n; i++) {
        let prevRow = triangle[i-1]
        let newRow = [1]

        for (let j = 1; j < i; j++) {

            newRow.push(prevRow[j - 1] + prevRow[j])
        }

        newRow.push(1)
        triangle.push(newRow)
    }

    return triangle.flat()
    //return a flat array representing the values of Pascal's Triangle to the n-th level
  }
  console.log(pascalsTriangle(3))