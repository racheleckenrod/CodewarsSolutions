// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Pseudocode:
// do a count of each and return the comparison

function XO(str) {
    let o = 0
    let x = 0
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        if(str[i] === "o"){
            o += 1
        }
        if(srt[i] === "x"){
            x += 1
        }
    }
    return x === o
}