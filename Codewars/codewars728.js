// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

// You solution should return an array [smallest, minimumAbsent, largest]

// The smallest integer should be the integer from the array with the lowest value.

// The largest integer should be the integer from the array with the highest value.

// The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

// minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
// minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
// minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]

// PREP
// Parameters:
// we are given an array of pos and neg integers
// Results:
// we are to return three values: the smallest, the smallest not in the array and the largest in an array.
// Example: [1,3,4,5] returns 1,2,5
// pseudocode:
// math.max and math.min, but for the middle value will have to check to see if the next value is in the array or not and either return it or add one to it and recheck.

function minMinMax(array) {
    let arr = []
    arr.push(Math.min(...array))
    for(let i = 0; i < Math.max(...array); i++){
        let mid = Math.min(...array) + 1
        if(array.includes(mid)){
            mid += 1
        }else{
            arr.push(mid)
        }
    }
    arr.push(Math.max(...array))
    return arr
    // solution goes here!
  }
  console.log(minMinMax([-1, 4, 5, -23, 24]), [-23, -22, 24])