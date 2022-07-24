// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
// in the first row there is one, second row,two,  third row three... nth row, n. then the numbers to add are n + (n-1) + n-2 + n-3 til you get to n-n...  times two. then minus one to start and two less for n times...

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(rowSumOddNumbers(1), 1);
//     assert.strictEqual(rowSumOddNumbers(42), 74088);
//   });
// });




function rowSumOddNumbers(n) {
    let arr = []
   for(let i = 0; i < n; i++){
       arr.push(n - i)
   }
   let num = (arr.reduce((acc,c) => acc + +c, 0) * 2) - 1
   console.log(num)
   let sum = [num]
   for(let i = 1; i < n; i++){
       num -= 2
       sum.push(num)
       console.log(num,sum)
   }
   return sum.reduce((acc,c) => acc + +c, 0)
}
console.log(rowSumOddNumbers(5))

// I thought there might be a simplier way of solving this problem but I didn't think of the simpliest... n**3 or n*n*n