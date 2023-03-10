// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\          
//                     4/            4|          4\      
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*


// Fold 2-times:
// [1,2,3,4,5] -> [9,6]
// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.

// The input array should not be modified!

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

// const deepEquals = require('chai').assert.deepEqual;

// describe("Solution", function(){
//   it("basic tests", function(){
//     var input = [ 1, 2, 3, 4, 5 ];
//     var expected = [ 6, 6, 3 ];
//     deepEquals(foldArray(input, 1), expected);
    
//     expected = [ 9, 6 ];
//     deepEquals(foldArray(input, 2), expected);
    
//     expected = [ 15 ];
//     deepEquals(foldArray(input, 3), expected);
    
//     input = [ -9, 9, -8, 8, 66, 23 ];
//     expected = [ 14, 75, 0 ];
//     deepEquals(foldArray(input, 1), expected);
//   });
// });

// PREP
// P: we are given an array and a number of times to "fold" it
// R: we are to return an array that has been folded the number of times.
// E: given [1,2,3,4,5,6] we are to return [1+6, 2+5, 3+4] = [7,7,7] for the first fold, and if there are to be two folds, we would return [7+7, 7] = [14,7]
// P: first make a copy of the array since it is not to be modified, then take both ends, add them togther and push into new array, ending with the middle if the length is odd. repeat the process the number of times.

function foldArray(array, runs) {
    let arr = array.slice(0)

    for (let i = 0; i < runs; i++){
        let result = []

        while (arr.length > 1){
            result.push(arr.pop()+arr.shift())
        }
        if (arr.length === 1) {
            result.push(arr[0])
        }
        arr = result
        
    }
  return arr
}
console.log(foldArray([1,2,3,4,5], 3))