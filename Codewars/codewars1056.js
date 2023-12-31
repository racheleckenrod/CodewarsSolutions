// Remove the parentheses
// In this kata you are given a string for example:

// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"
// Notes
// Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.
// The parentheses can be nested.
// STRINGSALGORITHMSREGULAR EXPRESSIONSFUNDAMENTALS

// const Test = require("@codewars/test-compat");

// describe("Solution", function() {
//     it("Basic Tests", function() {
//       assert.strictEqual(removeParentheses("example(unwanted thing)example"), "exampleexample")
//       assert.strictEqual(removeParentheses("example (unwanted thing) example"), "example  example")
//       assert.strictEqual(removeParentheses("a (bc d)e"), "a e")
//       assert.strictEqual(removeParentheses("a(b(c))"), "a")
//       assert.strictEqual(removeParentheses("hello example (words(more words) here) something"), "hello example  something")
//       assert.strictEqual(removeParentheses("(first group) (second group) (third group)"), "  ")
//     });
//   });

// PREP
// P: we are given a string that may include parentheses
// R: we are to return a string with the parentheses and what they contain removed.
// E: if given "I (and my sister) have a better life ahead", we are to return "I have a better life ahead"
// P: if it was a simple (one set), we could findIndexOf("(") and slice from 0 to there, then from  the ")" to the end, and return that. with more than one set, and nested parentheses possible, we need a more complex approach. we can make the string an array, check each element for being a "(", if it is, start a count of nesting, skipping the elements until the count of nesting is 0 again. if the element is ")" subtract one from the count of nesting.

function removeParentheses(s){
    let arr = s.split("");
    let count = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "(") {
            count++
        } else if (arr[i] === ")") {
            count--
        }
        if (count === 0 && arr[i] !== ")") {
            result.push(arr[i])
        }
    }

    return result.join("");
  
}

console.log(removeParentheses("I (and((not)) only I)cannot believe (good or not) my luck!!"))