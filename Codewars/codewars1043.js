// n this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

// For example:

// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo". 
// -- However, there is a space at index 3, so the string becomes "edo cruo"

// solve("your code rocks") = "skco redo cruoy". 
// solve("codewars") = "srawedoc"
// More examples in the test cases. All input will be lower case letters and in some cases spaces.

// Good luck!

// Please also try:

// Simple time difference

// Simple remove duplicates

// PREP
// P: we are given a string of lowercase letters and spaces.
// R: we are to return a string with the letters reversed and the spaces intact.
// E: if given: "this is a test" we are to return "tset as i siht" 
// P: we can create an array of letters without spaces, reverse them, then loop through the original string and push a letter from the reversed array if the index is a letter, else push a space, then join the array and return it.


// describe("Basic tests", function(){
//     Test.assertEquals(solve("codewars"),"srawedoc");
//     Test.assertEquals(solve("your code"),"edoc ruoy");
//     Test.assertEquals(solve("your code rocks"),"skco redo cruoy");
//     Test.assertEquals(solve("i love codewars"),"s rawe docevoli");
//     });


function solve(str){

    let arr = [];
    let result = [];

    for(let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            arr.push(str[i])
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result.push(' ')
        } else {
            result.push(arr.pop())
        }
    }

    return result.join('')
    
 }
 console.log(solve("your code rocks"))