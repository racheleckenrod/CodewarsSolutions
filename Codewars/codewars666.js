// Introduction and Warm-up (Highly recommended)

// Playing With Lists/Arrays Series

// Definition

// An element is leader if it is greater than The Sum all the elements to its right side.

// Task

// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes

// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Returned Array/list should store the leading numbers in the same order in the original array/list .

// Input >> Output Examples

// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
// Explanation:

// 4 is greater than the sum all the elements to its right side

// Note : The last element 0 is equal to right sum of its elements (abstract zero).

// arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
// Explanation:

// 17 is greater than the sum all the elements to its right side

// 5 is greater than the sum all the elements to its right side

// Note : The last element  2 is greater than the sum of its right elements (abstract zero).

// arrayLeaders ({5, 2, -1}) ==> return {5, 2}
// Explanation:

// 5 is greater than the sum all the elements to its right side

// 2 is greater than the sum all the elements to its right side

// Note : The last element  -1 is less than the sum of its right elements (abstract zero).

// arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
// Explanation:

// 0 is greater than the sum all the elements to its right side

// -1 is greater than the sum all the elements to its right side

// 3 is greater than the sum all the elements to its right side

// Note : The last element  2 is greater than the sum of its right elements (abstract zero).

// Playing with Numbers Series

// Playing With Lists/Arrays Series

// For More Enjoyable Katas

// ALL translations are welcomed

// Enjoy Learning !!

// Zizou

// PREP
// Parameters:
// we are given an array of integers. can be pos or neg or zero. will be longer than 2 (at least 3)

// we are to return an array of "leaders"- that is all integers greater than the sul of the rest of the elements in the array (to the right). 

// to  be returned in the order  given- 

// Example
// if given array is [2,-4,6,5,4,0,-2]
// expected return is 
// [5,4,0]

// Pseudocode:
// since we have positive and negative numbers, I think it would be best to take each element and compare it to the summ of the rest and push it into a new array if it is. use a for loop that starts at index 0, checks for edge case that it is the last one, compare to zero and push it if it is greater than zero. else, sum the array at index + 1 to the end and then compare that to see if element index 0 is greater than the sum, and if it is, push it to the new array.

// I'm thinking to split the original array at the index slice worked well.


function arrayLeaders(numbers){
    let leaders = []
    for(let i = 0; i < numbers.length; i++){
        if(i === numbers.length - 1 && numbers[i] > 0){
            leaders.push(numbers[i])
        }
        if(numbers[i] > numbers.slice(i+1).reduce((acc,c) => acc + c, 0)){
            leaders.push(numbers[i])
            console.log(leaders)
        }
    }


    return leaders
  }

  console.log(arrayLeaders([2,-4,6,5,4,0,-2]))