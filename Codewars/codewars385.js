// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string
// PREP
// Parameters:
// given two arrays of strings of word-types
// Results: are to return the max of the Math.abs of first - second.
// not sure if we need to compare against the two edge cases I see- either the min or max of the two array minus the min or max of the other...
// for example max.x - min.y may or may not be larger than min.x - max.y and I think we will need to take that into account.

function mxdiflg(a1, a2) {
    let x = []
    let y = 0
    x = a1.map(item => item.length)
    y = a2.map(item => item.length)
    console.log(x, a1,y,a2)
    let xMax = Math.max(...x)
    let xMin = Math.min(...x)
    let yMax = Math.max(...y)
    let yMin = Math.min(...y)
    console.log(xMax,xMin,yMax,yMin)
    return Math.max(Math.abs(xMax - yMin),Math.abs(xMin - yMax))
    // your code
}

// var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
// var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"] ))