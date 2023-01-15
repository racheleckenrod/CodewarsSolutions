// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"

// PREP
// Paramaters:
// we are given a string and a special char
// Results:
// we are to return a string that has a number representing the number of times the letter/char/space occurs in the string alternating with the special char.
// Example:
// given "hope floats", "*"
// returns "1*2*1*1*1*1*1*2*1*1"
// Pseudocode:
// split/join with special char, as it is only inbetween.
// going to have to count how many occurrances of the char there are 
// using filter on the original array for each element
// definately could have used map here

function freqSeq(str, sep) {
    let arr = str.split("")
    let numArr = []
    for(let i = 0; i < arr.length; i++){
        let num = arr.filter(item => item === arr[i]).length
        numArr.push(num)
    }
    return numArr.join(sep)
  }
  console.log(freqSeq('^^^**$',      'x'), '3x3x3x2x2x1');