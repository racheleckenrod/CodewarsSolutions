// You have a string that consists of zeroes and ones. Now choose any two adjacent positions in the string: if one of them is 0, and the other one is 1, remove these two digits from the string.

// Return the length of the resulting (smallest) string that you can get after applying this operation multiple times?

// Note: after each operation, the remaining digits are separated by spaces and thus not adjacent anymore - see the examples below.

// Examples

// For "01010" the result should be 1:

// "01010"  -->  "  010"  -->  "    0"
// For "110100" the result should be 2:

// "110100"  -->  "1  100"  -->  "1    0"
// Input/Output

// [input] string s
// The initial string.

// [output] an integer
// The minimum length of the string that may remain after applying the described operations as many times as possible.
// PUZZLES


// const strictEqual = require('chai').assert.strictEqual;

// function doTest(input, expected) {
// 	const actual = zeroAndOne(input);
// 	strictEqual(actual, expected, `for string:\n"${input}"\n`);
// }

// describe("Tests suite", function () {
// 	it("It should work for basic tests.", function () {
// 		doTest("01010", 1);
// 		doTest("11101111", 6);
// 		doTest("01", 0);
// 		doTest("10", 0);
// 		doTest("110110", 2);
// 		doTest("110100", 2);
// 	});
// });

function zeroAndOne(s) {
    let arr = s.split('').slice()
    console.log(arr)
    for(let i = 0; i < s.length; i++){
        if(arr[i] == 0 && arr[i+1] == 1){
            arr.splice(i,2)
            i -= 1
        }else if(arr[i] == 1 && arr[i+1] == 0){
            arr.splice(i,2)
            i -= 1
        }
        console.log(i,arr)
    }
    console.log(arr)
    return arr.length
  }
  console.log(zeroAndOne("110110"))

//   great approach I didn't think to take:

// zeroAndOne=s=>s.replace(/01|10/g,'').length