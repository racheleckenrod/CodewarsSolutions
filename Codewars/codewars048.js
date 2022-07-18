// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.
// PREP
// Parameters: will take in an array of numbers
// Return either the square root of the number - if % ===0 else square it. 
// Examples- 49 will return 7, where as 7 will return 49.
// Pseudocode: seems fairly straightforward- a conditional running through the array to check for square root % === 0, if so do it else, square it. math.sqrt? yep. seems to be.

function squareOrSquareRoot(array) {
    for(let i = 0; i < array.length; i++){
        if(  Math.sqrt(array[i]) % 1  === 0){
            array.splice([i], 1, Math.sqrt(array[i]))
        }else{
            array.splice([i], 1, (array[i] * array[i]))
        }
    }
    return array;  
  }