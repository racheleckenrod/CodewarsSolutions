// 953190% of 7142,088 of 4,686aweleshetu2 Issues Reported
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

// examples:

// [2, 10, 9, 3] is a nice array because

//  2 =  3 - 1
// 10 =  9 + 1
//  3 =  2 + 1
//  9 = 10 - 1

// [4, 2, 3] is a nice array because

// 4 = 3 + 1
// 2 = 3 - 1
// 3 = 2 + 1 (or 3 = 4 - 1)

// [4, 2, 1] is a not a nice array because

// for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.
// PREP 
// Parameters: 
// Given an array of numbers
// are to return true for a nice array else false
// a nice array  has a value n + 1 || n-1 for each value in the array. an empty array is not nice and should return false
// examples
// [1,2 ] is a nice array because 1 = 2-1 AND 2 = 1 +1

// Pseudocode:
// I'm thinking about using includes,  with an or.. not sure of another method



function isNice(arr){
    let newArr = []
    if(arr.length < 2){
        return false
    }else{
        for(let i = 0; i < arr.length; i++){
            newArr.push(arr.includes(arr[i] -1) || arr.includes(arr[i] + 1))
            console.log(newArr, arr[i])
        }return newArr.every(item => item === true)
    }
    
  }
  console.log(isNice([1,2,0,4,3]))