// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

// describe("Tests", function() {

//     const chai = require('chai');
//     chai.config.truncateThreshold = 0;
//       const { strictEqual } = chai.assert;
  
//       function doTest(input, expected) {
//           const actual = removeConsecutiveDuplicates(input);
//           strictEqual(actual, expected, `for string = "${input}"\n`);
//       }
  
//       it("Fixed tests", function() {
//           doTest("", "");
//           doTest("alpha", "alpha");
//           doTest("alpha alphaalpha alphaalphaalpha", "alpha alphaalpha alphaalphaalpha");
//           doTest(
//               "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta",
//               "alpha beta gamma delta alpha beta gamma delta"
//           );
//           doTest("alpha alpha alpha alpha", "alpha");
//           doTest("alpha beta alpha", "alpha beta alpha");
//           doTest("alpha alphabeta alphagamma", "alpha alphabeta alphagamma");
//           doTest("alpha alpha beta alpha alpha", "alpha beta alpha");
//           doTest("alpha beta beta", "alpha beta");
//       });
//   });

// PREP
// P: we are given a string of space separated words
// R: we are to return a string with all the duplicate consecutive words removed.
// E: see above
// P: a for loop, checking if the array element of the next index is the same, if it is, remove it using slice, but then you would have to change the index.. perhaps better to push the first index if it is not equal to the second.. into a results array.

function removeConsecutiveDuplicates(string) {
    let arr = string.split(" ")
    let results = []

    for (let i = 0; i < arr.length; i++){
        if(arr[i] != arr[i+1]){
            results.push(arr[i])
        }
    }
    return results
  }

  console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"),
                "alpha beta gamma delta alpha beta gamma delta"
            )