// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!

// describe("Basic tests", function(){
//     Test.assertEquals(solve([1,-1,2,-2,3]),3);
//     Test.assertEquals(solve([-3,1,2,3,-1,-4,-2]),-4);
//     Test.assertEquals(solve([1,-1,2,-2,3,3]),3);
//     Test.assertEquals(solve([-110,110,-38,-38,-62,62,-38,-38,-38]),-38);
//     Test.assertEquals(solve([ -9,-105,-9,-9,-9,-9,105]),-9);
//     });

// PREP
// Pseudocode: sum all to get the one that has no matching opposite value does not work.
// P: we are given an array of pos and neg numbers
// R: we are to return the value that does no have a matching pos or negative num.
// E: [-1,1,-2,2,3,3,3,3] should return 3
// P: if num * -1 does not exsist in array, return num

function solve(arr){
    for(let i = 0; i < arr.length; i++){
        if(!arr.includes(arr[i] * -1)){
            return arr[i]
        }
    }
};