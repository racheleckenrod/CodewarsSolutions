// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

// const strictEqual = require('chai').assert.strictEqual;

// function doTest (string, expected) {
//   const actual = uniTotal(string);
//   strictEqual(actual, expected, `for string "${string}":\n`);
// }

// it("sample tests", () => {
//   doTest("", 0);
//   doTest("a", 97);
//   doTest("b", 98);
//   doTest("c", 99);
//   doTest("d", 100);
//   doTest("e", 101);
//   doTest("aaa", 291);
//   doTest("Mary Had A Little Lamb", 1873);
// });

function uniTotal (string) {
    let sum = 0
    console.log(string.charCodeAt(0))
    for(let i = 0; i < string.length; i++){
        sum += string.charCodeAt(i)
    }
    return sum
    }
   

    // function uniTotal(str) {
    //     var count = 0;
    //     for (var i = 0; i < str.length; i++) {
    //       count += str.charCodeAt(i);
    //     }
    //     return count;
    //   }
      console.log(uniTotal('6'))


    //   REALLY needed help with this one and still not too sure why my first solution worked with the first set of tests but not the second...