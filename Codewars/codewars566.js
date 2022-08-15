// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// const { assert } = require('chai');

// describe("Split Strings", () => {
//   it("Basic tests", () => {
//     assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//     assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//     assert.deepEqual(solution(""), []);
//   });
// });
// ma

function solution(str){
   str.split("")
   let arr = []
   for(let i = 0; i < str.length; i+=2){
    if(i === str.length -1){
        arr.push(str[i] + "_")
    }
    else{
        arr.push(str.slice(i, i+2))
    }
   }
   return arr
}
console.log(solution("abcdefg"))