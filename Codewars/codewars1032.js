// Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

// If the second string isn't a valid rotation of the first string, the method returns -1.
// Examples:
// "coffee", "eecoff" => 2
// "eecoff", "coffee" => 4
// "moose", "Moose" => -1
// "isn't", "'tisn" => 2
// "Esham", "Esham" => 0
// "dog", "god" => -1
// STRINGSARRAYSALGORITHMS

// const strictEqual = require('chai').assert.strictEqual;

// function doTest(s1, s2, expected) {
// 	const actual = shiftedDiff(s1, s2);
// 	const log = `for strings:\n"${s1}"\n"${s2}"\n`;
// 	strictEqual(actual, expected, log);
// }

// describe("sample Tests", () => {
// 	it("sample tests", () => {
// 		doTest("eecoff","coffee", 4);
// 		doTest("Moose","moose", -1);
// 		doTest("isn't","'tisn", 2);
// 		doTest("Esham","Esham", 0);
// 		doTest(" "," ", 0);
// 		doTest("hoop","pooh", -1);
// 		doTest("  "," ", -1);
// 	});
// });

// PREP
// P: we are given two strings
// R: we are to return a number corresponding to the number of times the sceond word is shifted to match the first word given, or -1 if the second word doesn't match.
// E: if given "test" and "ttes" we are to return 1
// P: we will set up a loop that takes the last char and puts it in the front. Then adds one to the count and checks for equality. if we reach the end and it is still not equal we return -1


function shiftedDiff(first,second){
    let count = 0
    let temp = second

    for (let i = 0; i < first.length; i++) {
        if (first === temp) {
            return count
        }
        temp = temp.slice(1) + temp.slice(0, 1)
        console.log(temp)
        count++
    }

    return -1
    // ...
  }
  console.log(shiftedDiff("first", "irstf"))