// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]
// ARRAYSFUNDAMENTALS

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertSimilar(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
//   });
// });

// PREP
// P: we are given a number
// R: we are to return an array of arrays showing a multiplication table.
// E: if given 4, we are to return [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]]
// P: use a nested loop to multiply by i = 1, j = 1 then increment i up to n, push each one into an array, then push the array into result array. restart temp and increment j by one and make a i=2 array, push it into result array, continue process until j = n

multiplicationTable = function(size) {
    let result = []

    for (let i = 1; i <= size; i++){
        let temp = []
        for (let j = 1; j <= size; j++) {
            temp.push(i * j)
        }
        result.push(temp)
    }

    return result
    // insert code here
  }

  console.log(multiplicationTable(4))
  