// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

// describe('basic tests', () => {
//     it("Testing for 0", () => assert.deepEqual(pyramid(0), []));
//     it("Testing for 1", () => assert.deepEqual(pyramid(1), [[1]]));
//     it("Testing for 2", () => assert.deepEqual(pyramid(2), [[1], [1, 1]]));
//     it("Testing for 3", () => assert.deepEqual(pyramid(3), [[1], [1, 1], [1, 1, 1]]));
//   });

// PREP
// P: we are given a number greater than or equal to 0
// R: we are to return an array of arrays containing 1's starting with [1] and concluding with the given number of repeating 1's
// E: if given 3, we are to return [[1], [1,1], [1,1,1]]
// P: we can build this array using a for loop and pushing the number 1 to a temp arr and pushing it to the return array, making an edge case for 0 to return an empty array.Actually, no need to set the conditional for 0 when we set the result to [] and return it.


function pyramid(n) {
    // if (n === 0) return []
    let result = []
    let temp = []
    for (i = 0; i < n; i++) {
        temp.push(1)
        result.push(temp.slice())
    }
    return result
  }
  console.log(pyramid(3))