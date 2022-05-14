// Your task is to find the first element of an array that is not 
// consecutive.

// By not consecutive we mean not exactly 1 larger than the previous
//  element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 
// then 4 are all consecutive but 6 is not, so that's the first
//  non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements
// will be numbers. The numbers will also all be unique and in
// ascending order. The numbers could be positive or negative 
// and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next:
//  https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for 
// both [] and [ x ] though? (This is an empty array and one with
// a single number and is not tested for, but you can write
// your own example test. )
// PREP
// Parameters:
// can be pos or neg number unique and in ascending order
// Return:
// null if there are no nonsequentials, otherwise, return first value

// Examples:
// (-5,-4,-3,) -5 - (-4) = -1
// (6,7,8) 6 - 7 = -1  
// pseudocode
// iterate through array.length times, then return null,
// since integer may be positive or negative, subtract index 1 from 
// index 0 to see if it equals -1. if it does, it will be sequential
// then index 2 from index 1, up til you reach end of array.

function firstNonConsecutive (arr) {

    for(i = 1; i < arr.length; i++){
        let x = arr[i - 1] - arr[i]
     
        if(x !== -1){
           return arr[i]
           
       }
       
    }
        return null
       

}
console.log(firstNonConsecutive([0,1,2,3,4,5,6,7,8]))