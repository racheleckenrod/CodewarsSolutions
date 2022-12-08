// Ronny the robot is watching someone perform the Cups and Balls magic trick. The magician has one ball and three cups, he shows Ronny which cup he hides the ball under (b), he then mixes all the cups around by performing multiple two-cup switches (arr). Ronny can record the switches but can't work out where the ball is. Write a programme to help him do this.

// Rules:

// There will only ever be three cups.
// Only two cups will be swapped at a time.
// The cups and their switches will be refered to by their index in a row of three, beginning at one. So [[1,2]] means the cup at position one, is swapped with the cup at position two.
// Arr will be an array of integers 1 - 3 organised in pairs.
// There won't be any empty sub-arrays.
// If arr is just an empty array b should be returned.
// Examples:

// (b) = 2, (arr) = [[1,2]]

// The ball is under cup number : 1

// (b) = 1, (arr) = [[2,3],[1,2],[1,2]]

// The ball is under cup number : 1

// (b) = 2, (arr) = [[1,3],[1,2],[2,1],[2,3]]

// The ball is under cup number : 3
// ARRAYSFUNDAMENTALS

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertSimilar(cupAndBalls(2,[[1,2]]), 1)
// Test.assertSimilar(cupAndBalls(1,[[2,3],[1,2],[1,2]]), 1)
// Test.assertSimilar(cupAndBalls(2,[[1,3],[1,2],[2,1],[2,3]]), 3)

//   });
// });

// PREP
// Parameters:
// we are given a number(position ot the ball (will be 1,2,or 3)) and an array of arrays of length two containing numbers 1-3 (the swithing of places of the cups).
// Results:
// we are to return a number representing the position the ball ended up in.
// Example:
// if we are given b= 3 and array of switches [1,2],[3,1],[1,2] we expect 2 to be returned.
// Pseudocode: make note of what b is then check each array for it, and if found, replace the value of b with the other number in the array, and continue to check the array for the updated value of be, and return that value at the end of traversing the array. 

function cupAndBalls(b, arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].includes(b)){
            b = arr[i].reduce((acc,c) => +acc + c,0) - b
        }
    }
    return b
};
console.log(cupAndBalls(2,[[1,3],[1,2],[2,1],[2,3]]), 3)