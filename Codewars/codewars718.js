// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

// Examples

// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9
// FUNDAMENTALS

// const chai = require("chai");
// const assert = chai.assert;

// describe("Basic tests", function() {
//   const answer = [null, null, 36, 12, 9] ;
//   [1, 25, 36, 1244, 952406].forEach((q, i) =>
//     it(`n = ${q}`, function() {
//       assert.strictEqual( prevMultOfThree(q), answer[i] );
//     }));
//   });


const prevMultOfThree = n => {

    let  x = n.toString().split("")
    let y 
    if(n % 3 === 0) return n

    for(let i = 0; i < n.toString().length; i++){
        console.log(x)
       
        x.pop()
        console.log(x)
    y = x.join("")
    console.log(x,y)
    if(y % 3 === 0) return y
    console.log(x,y)
    x = y.toString().split("")
    }
    
  }
  console.log(prevMultOfThree(952406))