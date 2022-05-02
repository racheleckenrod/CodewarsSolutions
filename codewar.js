// The cockroach is one of the fastest insects. Write a function
//  which takes its speed in km per hour and returns it in cm per second, 
//  rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent)
//  and is >= 0. The result should be an Integer.

// <><><><><>><><><><><><><><
// Real number: can contain decimal points, integers do not.
// convert  km/hour to cm/sec.
// 1 km = 100000cm and 1 hour = 60 sec
//  1km/hour = 1000m / 3600sec
// reduces to 1km/hour = 5/18 m/sec
// to find cm/sec need to

//  multiply meters/sec by 100 to get centimeters/second.

// SO, 1 km/hr = (5/18) * 100 cm/sec.

// then take the real number (in km/hr) and convert it 
// to an integer in (cm/sec.)

// real number (X) km/hr = integer (Y) * (5/18) * 100 cm/sec

// Math.round(number);

// The round() function returns a number rounded to the nearest integer.
//  In other words, the number is rounded to 0 decimal places.

// If the number is a negative value, the round() function rounds up 
// The round() function returns a number rounded to the nearest integer. 
// In other words, the number is rounded to 0 decimal places.

// (5/18) * 100
// let s 
function cockroachSpeed(s) {
   
    return Math.floor(((5/18) * 100) * s)
  }

console.log(cockroachSpeed(45.5))

