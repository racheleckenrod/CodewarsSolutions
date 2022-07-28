// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// takingt the warning seriously about large numbers, a quick internet search gives a formula for finding the greatest common divisor of large numbers called Euclid's Algorithm without giving the code.
// I'll use that as a basis for this kata.

// we need to know which number is larger. Take the larger number and set it equal to  the other times a variable plus the remainder take the remainder


function mygcd(x,y){
    let remainder = x % y
    // let number
    while(remainder > 0){
        x = y
        y = remainder
        remainder = x % y
        console.log(remainder, x, y)
    }
    
    // remainder = x % y
    console.log(remainder)
   
    
    return y
  }
  console.log(mygcd(210,45))