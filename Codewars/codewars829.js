// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn
// Examples:
// pattern(5):

// 1
// 22
// 333
// 4444
// 55555
// pattern(11):

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(pattern(1),"1");
// Test.assertEquals(pattern(2),"1\n22");
// Test.assertEquals(pattern(5),"1\n22\n333\n4444\n55555");
//   });
// });

// PREP
// P: we are given a number
// R: we are to return a pattern of numbers joined by a new line \n where there are as many digits of a number that the value of the number is.
// E: 1\n22\n333\n4444
// P: use .repeat() (a string method) to generate the individual series of digits into an array, convert to numbers, join the array with \n and return as a string

function pattern(n){
   let arr = []
   let temp =''
   for(let i = 1; i <= n; i++){
   let temp = i.toString()
   temp = temp.repeat(i)
   arr.push(temp)
   }
   return arr.join('\n')
   }

   console.log(pattern(8))