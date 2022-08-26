// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal


// const strictEqual = require("chai").assert.strictEqual;

// function doTest (s1, s2, expected) {
// 	const actual = compare(s1, s2);
//   const quote = str => str === null ? null : `"${str}"`;
// 	strictEqual(actual, expected, `for strings:\n${quote(s1)}\n${quote(s2)}\n`);
// }

// describe("Tests", () => {
//   it("sample tests", () => {
//     doTest("AD", "BC", true);
//     doTest("AD", "DD", false);
//     doTest("gf", "FG", true);
//     doTest("Ad", "DD", false);
//     doTest("zz1", "", true);
//     doTest("ZzZz", "ffPFF", true);
//     doTest("kl", "lz", false);
//     doTest("!!", "7476", true);
//     doTest("##", "1176", true);

//     doTest(null, "BC", false);
//     doTest(null, null, true);
//     doTest(null, "", true);
//     doTest("", "", true);
//   });
// });

// PREP
// Parameters:
// we are given two strings
// results:
// we are to return true if the values of the charachters in the two strings are equal, false otherwise. if there is a charachter that is not a letter present in a string, the whole string is to be treated as null, which is to be treated as "" empty string. all chars are to be treated as uppercase.

// example:
// any string containing punctuation = 0
// 65 - 90 are the values for uppercase letters, any codePtAt() value < || > those, sets the whole string to 0.


function compare(s1, s2) {
    if(s1 === null){s1 = ""}
    if(s2 === null){s2 = ""}
    s1 = s1.toUpperCase().split("")
    s2 = s2.toUpperCase().split("")
    
    let sum1 = s1.map(item => item.codePointAt())
    if(!sum1.every(item => item > 64 && item < 91)){
        sum1 = ""
    }

    let sum2 = s2.map(item => item.codePointAt())
    if(!sum2.every(item => item > 64 && item < 91)){
        sum2 = []
    }

    sum1 = sum1.reduce((acc,c) => +acc + +c,0)
    sum2 = sum2.reduce((acc,c) => +acc + +c,0)

    return sum1 === sum2

}
console.log(compare(null, "abc!"))