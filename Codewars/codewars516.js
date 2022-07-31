// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// const strictEqual = require('chai').assert.strictEqual;

// function doTest (braces, expected) {
// 	const actual = validBraces(braces);
// 	strictEqual(actual, expected, `for braces:\n"${braces}"\n`);
// }

// describe("Tests suite", function() {
//   it("sample tests", function() {
// 	doTest("()))", false);
//     doTest("()", true);
//     doTest("[]", true);
//     doTest("{}", true);
//     doTest("(){}[]", true);
//     doTest("([{}])", true);
//     doTest("(}", false);
//     doTest("[(])", false);
//     doTest("({})[({})]", true);
//     doTest("(})", false);
//     doTest("(({{[[]]}}))", true);
//     doTest("{}({})[]", true);
//     doTest(")(}{][", false);
//     doTest("())({}}{()][][", false);
//     doTest("(((({{", false);
//     doTest("}}]]))}])", false);
//   });
// });

// PREP
// Parameters:
// given a string containing parentheses, square brackets, and curly braces: (),{},[].
// Results:
// we are to return a boolean checking to see if the string is "valid" or not.
// valid is when each left side has a matching right side, with either nothing inbetween, or other valids inbetween. 

// Pseudocode:
// I am thinking of trying to remove the valids, and have it return true if it becomes empty, false otherwise. so, to check for a right side immediately following a left side, remove it then check again.
// if i use a while loop- while arr.length > 0, I would need to include an alternate to return false if the length doesn't get to zero... I would probably be better off using an if() and resetting i every time a pair is found and taken out. then if the if statment runs to the end without finding any more matches, it would return false, otherwise, if the arr gets used up it should return true

function validBraces(braces){
    let arr = braces.split('')

    for(let i = 0; i < arr.length; i++){
        console.log(i,arr.length,"Test")
        if(arr.length > 0){
            console.log(arr, i)
            if(arr[i] === "(" && arr[i+1] === ")"){
                arr.splice(i,2)
                console.log(arr, "()")
                i = -1
                // if(arr.length < 1) return true
            }else if(arr[i] === "{" && arr[i+1] === "}"){
                arr.splice(i,2)
                i = -1
                console.log(arr, "{}")
                // if(arr.length < 1) return true
            }else if(arr[i] === "[" && arr[i+1] === "]"){
                arr.splice(i,2)
                i = -1
                console.log(arr, "[]")
                // if(arr.length < 1) return true
            }if(arr.length < 1) return true
        }
    }
    return false
  }
  console.log(validBraces("(({{[[]]}}))"))