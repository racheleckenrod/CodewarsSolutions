
// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// PREP
// we are given a string that may contain other than letters as well as lowercase letters.
// Results are to return the string reversed with anything but letters omitted.
// example:
// if given "a1%b2c3d(4e5^f" we would return "fedcba" , omitting all other charaters
// Pseudocode:
// we can check for the ascii value to between a-z, or could use the regex.. 
// to reverse the string we must put it into an array, strings being immutable, so while there we will check each element to see if it passes the letter test, push it into a new array if it does , then reverse it and join it back into a string and return it.



function reverseLetter(str) {
    let letters = []
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123){
            letters.push(str[i])
        }
    }
    let revLetters = letters.reverse().join("")
    return revLetters
  }
  console.log(reverseLetter("krish21an"))