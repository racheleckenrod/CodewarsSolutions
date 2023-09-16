// Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Don't round the numbers! Just cut them after two decimal places!

// Right examples:  
// 32.8493 is 32.84  
// 14.3286 is 14.32

// Incorrect examples (e.g. if you round the numbers):  
// 32.8493 is 32.85  
// 14.3286 is 14.33

// PREP
// P: we are given a number
// R: we are to return a number with two decimal places and not rounded.
// E: if given 4.999 we are to return 4.99
// P: we can multiply the given number by 100 then parseInt it, then divide the result by 100 to get the decimal places, I may need to add the toFixed to retain the trailing zeros..


// function twoDecimalPlaces(number) {

//     return parseFloat((parseInt(number * 100)/100).toFixed(2))
//     // Your code here
//   }
function twoDecimalPlaces(number) {
    return +((parseInt(number * 100)/100).toFixed(2))
     // Your code here
   }
  console.log(twoDecimalPlaces(5))