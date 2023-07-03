// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

// Good luck!

// const chai = require('chai');
// chai.config.truncateThreshold = 0;
// const { deepEqual } = chai.assert;

// function doTest (string, expected) {
// 	const actual = permutations(string);
// 	deepEqual(actual.sort(), expected.sort(), `for string "${string}"\n`);
// }

// describe('permutations', function () {
// 	it('sample tests', function () {
// 		doTest('a', ['a']);
// 		doTest('ab', ['ab', 'ba']);

// 		doTest('aabb', ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
// 	});
// });

function permutations(string) {

    // base case
    if(string.length === 1) {
        return [string]
    }
	
// array to store permutations:
const permutationsArr = []

// iterate through each character in the string
for(let i = 0; i < string.length; i++) {
    // fix the current character as the starting element
    const currentChar = string[i]

    // generate permutations of the remaining characters (excluding the currentChar)
    const remainingChars = string.slice(0,i) + string.slice(i + 1)

    const subPermutations = permutations(remainingChars)


    // insert the fixed char at different positions in each subPermutations
    for (let j = 0; j < subPermutations.length; j++) {
        console.log("string=", string,"i=",i,"j=",j, "remainingChars=", remainingChars,currentChar,  subPermutations[j])
        permutationsArr.push(currentChar + subPermutations[j])
    }



}
// now to check for duplicates/create a unique Set
 return [...new Set(permutationsArr)]


}
console.log(permutations("abcd"))