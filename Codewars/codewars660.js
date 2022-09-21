// You received an array with two strings. Create a function that will return their product as a string. E.g.

// arrMultiply(['9','6']) should return '54'
// PREP
// Parameters:
// given an array of two string numbers
// Results:
// return the product of the two numbers as a string.
// Example:
// ['4','3'] returns '12'

// Pseudocode:
// I think this will be fairly straightforward, in the sense that we simply convert the strings to numbers and multiply , then return with the number.toString()



function arrMultiply(arr){
    let x = +arr[0] * +arr[1]
    return x.toString()
    //your solution
    
 }