// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Divide and Conquer", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(divCon([9, 3, '7', '3']), 2);
//     assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
//     assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 
//   })
// });


function divCon(x){
    let num = x.filter(item => typeof item === "number")
    let str = x.filter(item => typeof item === "string")
    strSum = str.reduce((acc,c) => +acc + +c, 0)
    numSum = num.reduce((acc,c) => +acc + +c,0)
    let total = numSum - strSum
    console.log(num, x, str,strSum,numSum,total)
    return total
}

console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))

function divCon(x){
    let num = x.filter(item => typeof item === "number")
    let str = x.filter(item => typeof item === "string")
    let strSum = str.reduce((acc,c) => +acc + +c, 0)
    let numSum = num.reduce((acc,c) => +acc + +c,0)
    let total = numSum - strSum
    return total
  }

//   Here's a good solution from the others:
// const divCon=x=>x.reduce((a,b)=>a+(0+b==b?b:-+b),0)
// where instead of following the "instructions" the effect of what following the instructions would be is done- subtracting each value that is a string one at a time instead of summing them all up and then subtracting as I did.