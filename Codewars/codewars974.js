// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

// How to sum two matrices:

// Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix.

// Visualization:

// |1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
// |3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
// |1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|
// Example
// matrixAddition(
//   [ [1, 2, 3],
//     [3, 2, 1],
//     [1, 1, 1] ],
// //      +
//   [ [2, 2, 1],
//     [3, 2, 3],
//     [1, 1, 3] ] )

// // returns:
//   [ [3, 4, 4],
//     [6, 4, 4],
//     [2, 2, 4] ]
// MATRIXARRAYSALGORITHMS

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertDeepEquals(matrixAddition(
//   [ [1, 2],
//     [1, 2] ],
// //    +
//   [ [2, 3],
//     [2, 3] ] ),
// //    =
//   [ [3, 5],
//     [3, 5] ] );

// Test.assertDeepEquals(matrixAddition(
//   [ [1] ],
// //   +
//   [ [2] ] ),
// //   =
//   [ [3] ] );

// Test.assertDeepEquals(matrixAddition(
//   [ [1, 2, 3],
//     [3, 2, 1],
//     [1, 1, 1] ],
// //      +
//   [ [2, 2, 1],
//     [3, 2, 3],
//     [1, 1, 3] ] ),
// //      =
//   [ [3, 4, 4],
//     [6, 4, 4],
//     [2, 2, 4] ] );
//   });
// });

// PREP
// P: we are given two  arrays of arrays
// R: we are to add the elements of the arrays together and return an array of arrays
// E: if given [[2,2], [3,3]] and [[1,1], [4,4]] we are to return [[3,3], [7,7]]
// P: the arrays are to be added the first element of each first array to produce the first element of the first return array. a nested for loop to drill down to the nested elements and add them together make an array of the sums and push each return array into an larger return array


// function matrixAddition(a, b){
//     let result = []
//     let arr = []

//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a[i].length; j++) {
//             let sum = a[i][j] + b[i][j]
//             arr.push(sum)
//         }
//         result.push(arr)
//         arr = []
//     }

//     return result
//     //TODO
//   }
  

  function matrixAddition(a,b) {

    return a.map((innerArray, i) => innerArray.map((element, j) => element + b[i][j])
    )

  }

  console.log(matrixAddition(
    [ [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1] ],
  
    [ [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3] ] )
  )