// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// Examples:

// isSquare([1, 4, 9, 16]) --> true

// isSquare([3, 4, 7, 9]) --> false

// isSquare([]) --> undefined
// is_square([1, 4, 9, 16]) --> True

// is_square([3, 4, 7, 9]) --> False

// is_square([]) --> None
// PREP
// parameters:
// we are given an array of positive integers
// Results:
// we are to return true if each number of the array is a square number and false if they are not
// Pseudocode:
// to check if a number is a square, can do 


var isSquare = function(arr){
    let bool = true
    if(arr.length < 1) return undefined
    else{
        for(let i = 0; i < arr.length; i++){
            if(Math.floor(Math.sqrt(arr[i])) === Math.ceil(Math.sqrt(arr[i]))){
                bool = true
            }else{
                return false
            }
        }
    }
    return bool
  }

//   went through all that and then put in the wrong date..