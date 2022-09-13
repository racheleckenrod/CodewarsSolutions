// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

// If you like this Kata, please try:

// Sum of prime-indexed elements

// Sum of integer combinations

// ALGORITHMS
// PREP
// Parameters:
// we are given an array of integers
// Results:
// we are to return the sum of the two numbers that occur only once.
// Pseudocode"
// first and last index of will be the same for the numbers occurringonly once. we need to get two of them, this may be tricky. then sum them.
// glad I thought of putting the two values into an array and then reducing it. no so tricky that way.
// I had some trouble still using the indexOf() method getting the arr[i] inside the parentheses instead of using the index i, seem too much with the arr. and then using the arr[i], but it is correct.

function repeats(arr){
    let x = []
    
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            x.push(arr[i])
        }
    }
    return x.reduce((acc,c) => +acc + +c,0)
    };