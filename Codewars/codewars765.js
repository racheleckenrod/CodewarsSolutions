// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertDeepEquals(snail([[]]), []);
// Test.assertDeepEquals(snail([[1]]), [1]);
// Test.assertDeepEquals(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
// Test.assertDeepEquals(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
// Test.assertDeepEquals(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
// });
// });

// pseudocode:
// n x n , so find length of arr, say 5.
// I liked the approach I saw - realizing the pattern of that first row, stopping the forth pass, the upward addition of the elements on the left side, before getting to the next "full row"


// snail = function(array) {
//     let n = array.length
//     let arr = array[0]
  

//     for(let i = 1; i < array.length - 1; i++){
//         arr.push(array[i][n-1])
//     }
//     arr.push( array.slice(n - 1).flat().reverse())

//     for(let i = n - 2; i > 0; i--){
//         arr.push(array[i][0])
//     }
//     for(let i = 1; i < n - 1; i++){
//         arr.push(array[1][i])
//     }
//     for(let i = 2; i < n - 1; i++){
//         arr.push(array[i][n-2])
//     }
//     arr.push(array[n-2].slice(1, n-2).flat().reverse())

//     for(let i = n - 3; i > 2; i--){
//         arr.push(array[i][1])
//     }

//     for(let i = n - 4; i < n - 2; i++){
//         arr.push(array[2][i])
//     }

//     // arr.push(array[n-3].slice(2, n-2).flat().reverse())


//     return arr.flat()
//     // enjoy
//   }
// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13])

// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 17, 12, 13, 13]

const snail = (array) => {
    let arr = []
    while (array.length){
        arr.push(...array.shift())
        for (let i = 0; i <array.length; i++){
            arr.push(array[i].pop())
        }
        arr.push(...(array.pop() || []).reverse())
        for(let i = array.length - 1; i >= 0; i--){
            arr.push(array[i].shift())
        }
    }
    return arr
}
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13])
