// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!
// PREP
// Parameters- two arrays
// return true if the sum of the squares of the first array is greater than the sum of the cubes of the second array.
// examples- see above
// pseudocode:
// we will use two reduce methods and then compare the results. First we need to square or cube them though...
function arrayMadness(a, b) {
    let newA = a.map(item => item**2)
    let x = newA.reduce((acc,c) => +acc + +c, 0) 
    let bigB = b.map(item => item**3)
    let y = bigB.reduce((acc,c) => +acc + +c, 0)
    console.log(bigB)
    return x > y
    // Ready, get set, GO!!!
  }

  console.log(arrayMadness([4,5,6],[1,2,3]))