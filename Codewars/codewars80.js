// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// PREP
// Parameters
// given an array of numbers- zero is neither pos nor neg. 
// Results:
// count the number of positive numbers. sum the value of the negative numbers.
// examples-  [1,2,3,0,-3,-4,-5] yeilds [3, -12]
// pseudocode:
// two separate things to do. first, determine how many positive numbers, then sum the negative values.
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    // let actual = countPositivesSumNegatives(testData);


function countPositivesSumNegatives(input) {
    let arr = []
    let a = 0
    let b = 0
    for(let i = 0; i <= input.length; i++){
        if(input[i] > 0){
            a += 1
        }else if(input[i] < 0){
            b += input[i]
            console.log(b)
        }
    }arr.push(a)
    arr.push(b)
    return arr
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))


function countPositivesSumNegatives(input) {
    let arr = []
    let a = 0
    let b = 0
    if(input == []){
      return []
    }else if(input == 0){
      return []
    }else if(input == null){
      return []
    }else{
    for(let i = 0; i < input.length; i++){
        if(input[i] > 0){
            a += 1
        }else if(input[i] < 0){
            b += input[i]
        }
    }arr.push(a)
    arr.push(b)
    return arr
  }
}
// to pass tests, needed to add responses for null, [], and 0 for input, and was NECESSARY to use == and not === for the tests to pass.