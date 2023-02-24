// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// const chai = require("chai");
// const assert = chai.assert;

// describe("Sample Tests", () => {
//   it("Should pass sample tests", () => {
//     assert.strictEqual(solution('camelCasing'), 'camel Casing', 'Unexpected result')
//     assert.strictEqual(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
//   });
// });

// PREP:
// P: we are given a string
// R: we are to return a string, with spaces before the capital letters
// E: if given camelCase, R=> camel Case
// P: split into array, and look at each element, replace .toUpperCase() with a space and the letter, then join the array?


// complete the function
function solution(string) {
    let arr = string.split('')

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i].toUpperCase()){
            arr[i] = ' ' + arr[i]
        }
    }
    return arr.join('')
}

console.log(solution('camelCaseTest'))