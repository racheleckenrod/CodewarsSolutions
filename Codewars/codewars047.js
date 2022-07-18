// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).

// PREP
// parameters: given an array
// Results:
// two step process I see, first sort in decending order,
// then subtract the second from the first and so on and then summ them up- so three steps, and really four if you count the reporting of the sum.
// examples:
// an array of 6 9 3 20 needs sorting to be 20,9,6,3. then 20-9,+ 9-6 + 6-3. and report the result.
// Pseudocode:
// first use .sort(), then maybe a .reduce() with a function with a loop to iterate through the subtracting parts and then sum them up? maybe a .map() would be better to do a new array of the subtracted bits and then run an accumulator to add up the new array.

function sumOfDifferences(arr) {
    let finalArr = []
    let superFinalArr = []
    arr.sort((a,b) => b - a)
    for(let i = 0; i < arr.length -1; i++){
        let newArr = [arr[i] - arr[i + 1]]
        finalArr.push(newArr)
    }
    superFinalArr = finalArr.reduce((acc, c) => +acc + +c, 0)
    return superFinalArr
}

console.log(sumOfDifferences([1, 2, 10]))