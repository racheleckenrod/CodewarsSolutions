// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// Pseudocode:
// a little bit of additional info in the one, where the decimal numbers are to be treated as uneven- floats. 
// Return either true (even)  or false(odd)

// even with the heads up about the floats, this kata took me two tries, I didn't put the else return false the first try...
function testEven(n) {
    if(n % 2 === 0){
        return true
    }else{
        return false
    }
}