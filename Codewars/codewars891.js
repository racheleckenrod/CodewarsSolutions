// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".
// ALGORITHMSSTRINGS

// const chai = require('chai');
// const assert = chai.assert;

// function testing(actual, expected) {
//     assert.strictEqual(actual, expected)
// }

// describe("revrot",function() {
//     it("Basic tests",function() {    
//         testing(revrot("1234", 0), "")
//         testing(revrot("", 0), "")
//         testing(revrot("1234", 5), "")
//         s = "733049910872815764"
//         testing(revrot(s, 5), "330479108928157")
// })})

// PREP
// P: we are given a string of numbers and a sz- size of the chuncks to evaluate
// R: we are to return a string of integers manipulated in the following way: if the sum of the cubes of the chucncked digits, reverse the digits of that chunck, else rotate the digits to the left ( 123456 -> 234561) then join them together and return it. 

// first we have to get the chunks. I'm thinking to use slice, but test to make sure there are enough digits. then split it into array and cube the digits, sum them up and check for %2 === 0

function revrot(str, sz) {
    if (sz === 0 || str === "") return ""

    let chunks = []

    for (let i = 0; i < str.length; i+= sz) {
        let chunk = str.slice(i, i + sz).split('')
        chunks.push(chunk)
    }
    // check length of last chunk
    if(chunks[chunks.length-1].length < sz){
        chunks.pop()
    }
    // check the sum of the cubes for even
    console.log(chunks)
    
    for (let i = 0; i < chunks.length; i++){
        let cubesSum = chunks[i].map(item => item = item**3).reduce((acc,c) => acc + c,0)
        console.log(cubesSum) 
    
        if(cubesSum % 2 === 0){
            // REVERSE chunk[i]
            chunks[i] = chunks[i].reverse()

        }else {
            chunks[i] = chunks[i].slice(1).concat(chunks[i][0])
        }
    }
   
    return chunks.flat().join("")
}


// function revrot(str, sz) {
//     if (sz === 0 || str === "") return "";

//     let chunks = [];

//     for (let i = 0; i < str.length; i += sz) {
//         let chunk = str.slice(i, i + sz).split('');
//         chunks.push(chunk);
//     }

//     // Check length of last chunk
//     if (chunks[chunks.length - 1].length < sz) {
//         chunks.pop();
//     }

//     // Calculate sum of cubes and reverse/rotate chunks
//     for (let i = 0; i < chunks.length; i++) {
//         let cubesSum = chunks[i]
//             .map(item => item ** 3)
//             .reduce((acc, c) => acc + c, 0);

//         if (cubesSum % 2 === 0) {
//             // Reverse chunk[i]
//             chunks[i] = chunks[i].reverse();
//         } else {
//             // Rotate chunk[i]
//             chunks[i] = chunks[i].slice(1).concat(chunks[i][0]);
//         }
//     }

//     return chunks.flat().join("");
// }

console.log(revrot("563000655734469485", 4));

// console.log(revrot("563000655734469485", 4))