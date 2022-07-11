// Calculate how many times a number can be divided by a given number.

// Example
// For example the number 6 can be divided by 2 two times:

// 1. 6 / 2 = 3
// 2. 3 / 2 = 1 remainder = 1
// 100 can be divided by 2 six times:

// 1. 100 / 2 = 50
// 2. 50 / 2 = 25
// 3. 25 / 2 = 12 remainder 1
// 4. 12 / 2 = 6
// 5. 6 / 2 = 3
// 6. 3 / 2 = 1 remainder 1
// PREP
// Parameters:
// given n- a number and divisor
// Results:
// are to return the number of times the number (n) can be divied by the divisor. From the looks of things it appears that remainders are ok.
// example:
// if n = 20 and divisor is 3, 20 / 3 = 6.6666 , 6/3 = 2. so return 2
// Pseudocode:
// use a loop and keep track of iterations

const divisions = (n, divisor) => {
    let times = 0
  if(n < divisor){
    return 0
  }
    for(let i = 1; n >= divisor; i++){
        n /= divisor 
      console.log(times)
        times = i
      
    }

    return times
  }

  console.log(divisions(20,3))