// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


function findUniq(arr) {
   return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))
  }
  
//   oops.. pushed it the first time and then remembered this code didn't pass- it was returning an array and they only wanted a number

// here is the code I actually posted:

function findUniq(arr) { 
    let num = arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))
    return +num.toString()
  }