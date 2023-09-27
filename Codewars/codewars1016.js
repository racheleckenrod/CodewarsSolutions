// Description:
// Count the number of exclamation marks and question marks, return the product.

// Examples
// ""          --->   0
// "!"         --->   0
// "!ab? ?"    --->   2
// "!!"        --->   0
// "!??"       --->   2
// "!???"      --->   3
// "!!!??"     --->   6
// "!!!???"    --->   9
// "!???!!"    --->   9
// "!????!!!?" --->  20
// FUNDAMENTALS

// const strictEqual = require("chai").assert.strictEqual;

// function doTest(input, expected) {
// 	const actual = product(input);
// 	strictEqual(actual, expected, `for string:\n"${input}"\n`);
// }

// describe("Tests suite", function () {
// 	it("It should work for basic tests", function () {
// 		doTest("", 0);
// 		doTest("!", 0);
// 		doTest("!!", 0);
// 		doTest("!??", 2);
// 		doTest("!???", 3);
// 		doTest("!!!??", 6);
// 		doTest("!!!???", 9);
// 		doTest("!???!!", 9);
// 		doTest("!ab? ?", 2);
// 		doTest("!????!!!?", 20);
// 	});
// });

// PREP
// P: we are given a string
// R: we are to return the product of the number of exclaimation point times thee number of question marks.
// E: if given '!!!??' we are to return 3 * 2 = 6
// P: I'll use filter twice to get the number of each, then return the product.
function product (string) {

    let questions = string.slice().split('').filter(item => item === "?").length || 0
    let exclaination = string.slice().split('').filter(item => item === "!").length || 0
    //coding and coding....
    return questions * exclaination
  }
  console.log(product("!????!!!?"))