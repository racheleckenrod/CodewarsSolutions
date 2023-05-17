// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// Examples(num, nth --> output)
// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1

// Pseudocode:
// remove negative using math.abs()
// check nth for zero & negative and return -1 if it is.
// find the length of num and subtract nth from it, returning zero if less than 1

// const Test = require('@codewars/test-compat');

// describe("Test", function(){
//   it("Examples", function(){
//     Test.assertEquals(findDigit(5673, 4), 5);
//     Test.assertEquals(findDigit(129, 2), 2);
//     Test.assertEquals(findDigit(-2825, 3), 8);
//     Test.assertEquals(findDigit(-456, 4), 0);
//     Test.assertEquals(findDigit(0, 20), 0);
//     Test.assertEquals(findDigit(65, 0), -1);
//     Test.assertEquals(findDigit(24, -8), -1);
//   });
// });



var findDigit = function(num, nth){
    num = Math.abs(num)
    if(nth < 1) return -1
    let digits = num.toString().split('')
    if(!digits[(digits.length) - nth]) return 0
    return +digits[(digits.length) - nth]
}

console.log(findDigit(-2845, 3))