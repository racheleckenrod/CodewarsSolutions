// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

// eg.

// Array [11,4,9,2,8] is odd-heavy 
// because:- its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy
// because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
// write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.

// PREP
// Parameters:
// we are given an array of integers
// Results- we are to return true if the array meets the conditions of being "odd-heavy" It is odd-heavy only when all the even elements it contains are less than the least odd integer in the array.
// example:
// array [4,6,8,13,15,17] would return true, as its lowest odd value (13) is greater than the largest even number (8).
// Pseudocode:
// We will filter the array into two arrays even and odd, then compare the Math.min of the odd and Math.max of the even to see if the evens are all smaller than the least odd number.

function isOddHeavy(n){
    let y = n.filter(el => el % 2 === 0)
    let z = n.filter(el => el % 2 !== 0)

    console.log(y,z)
    let odd = Math.min(...z)
    let even = Math.max(...y)

    return even < odd && z.length > 0
  }
  console.log(isOddHeavy([0,2,19,4,4]))