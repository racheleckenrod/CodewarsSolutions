// vowelOne

// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

// PREP
// Parameters:
// we are given a string
// Results:
// we are to return a string of 0's and 1's- a 1 for each vowel and a 0 for every other char, including spaces and other chars.
// Pseudocode:
// a simple for loop, then split the string into an array. check each element for being a vowel, and if it is, push a 1 into a new array if it is not a vowel, push a 0 into the new array. then turn the array into a string.


function vowelOne(s){
    let nums = []
    s = s.split("")
    for(let i = 0; i < s.length; i++){
        if(s[i].toLowerCase() === "a" || s[i].toLowerCase() === "e"  ||s[i].toLowerCase() === "i"  || s[i].toLowerCase()  === "o"  || s[i].toLowerCase() === "u"){
            nums.push(1)
        }else{
            nums.push(0)
        }
    }
    return nums.join("")
  }
  console.log(vowelOne("which try is going to pass"))