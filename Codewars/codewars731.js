// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]
// If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?

// ARRAYSALGORITHMS

// PREP
// Parameters:
// we are given an array of integers
// Results:
// we are to return an array of integers that tells how many numbers smaller than it to the right in the original array
// Example:
// [1,2,3] [0,0,0]
// Pseudocode:
// iterate as many times as elements in original array. for each one, compare the number with the rest of the numbers in the array, tally how many are smaller than it and push the tally into a new array to be returned

function smaller(nums) {
    let arr = []
   
    for(let i = 0; i < nums.length; i++){
        let count = 0
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] > nums[j]){
                count += 1
            }
           
        }
       
        arr.push(count)
    }
    return arr
    }
    console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0])