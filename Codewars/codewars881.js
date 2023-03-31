// Reverse Number is a number which is the same when reversed.

// For example, the first 20 Reverse Numbers are:

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101
// TASK:

// You need to return the nth reverse number. (Assume that reverse numbers start from 0 as shown in the example.)
// NOTES:

// 1 < n <= 100000000000
// You need to use BigInt as return type in JS since it exceeds max integer size.
// If this is too hard, you can try https://www.codewars.com/kata/600bfda8a4982600271d6069

// ```if:rust

// 1 < n <= 10000000000

// describe("FindReverseNumberTests", function() {
//     const chai = require("chai");
//     const assert = chai.assert;
    
//     it("test1", function() {
//       tester(findReverseNumber(1), 0n);
//     });
    
//     it("test2", function() {
//       tester(findReverseNumber(2), 1n);
//     });
    
//     it("test3", function() {
//       tester(findReverseNumber(10), 9n);
//     });
    
//     it("test4", function() {
//       tester(findReverseNumber(100), 909n);
//     });
    
//     it("test5", function() {
//       tester(findReverseNumber(100000000000), 900000000000000000009n);
//     });
    
//     function tester(actual, expected) {
//       // to show expected and actual in fail
//       assert.equal(actual.toString(), expected.toString());
//     }
    
//   });
  
// PREP

// P: we are given a number, n
// R: we are to return the nth reversable number, using bigInt as the given n is expected to exceed max allowed integer size of 9 quadrillion
// E: given n =20, we would create an array of length 20 and return the last value. 0,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,101. so return 101. I see we are to start with 0 as the first number, not 1. so n=20, return 101.
// P: we want to use reverse and so will need to put the n into an array, which you will need to put it into a string first. then test to see if the reversed number (the joined array wrapped in Number )is equal to the number you are testing. If it is, push it into a numbers array. continue until you reach the given n. 


// function findReverseNumber(n) {
//     let count = 0n
//     let num = 0n

//     while ( count < n) {
//         if(num === BigInt(num.toString().split('').reverse().join(''))) {
//             console.log(num)
//             count += 1n
           
//         }
//         num += 1n
//     }
//     // console.log(numsArr)
//     return num - 1n
//     // your code
//   }

//   since we need only the last number here, I like the approach of using count instead of the array. too large of numbers

// function findReverseNumber(n) {
//     let numsArr = [];
//     let num = 0;
  
//     while (numsArr.length < n) {
//       if (isReverseNumber(num)) {
//         numsArr.push(num);
//       }
//       num += 1;
//     }
  
//     console.log(numsArr); // Optional: Logging the reverse numbers array for debugging
//     return numsArr[numsArr.length - 1];
//   }
  
//   function isReverseNumber(num) {
//     const reversed = Number(num.toString().split('').reverse().join(''));
//     return num === reversed;
//   }


// function findReverseNumber(n) {
//     let numsArr = [];
//     let num = 0;
  
//     while (numsArr.length < n) {
//       if (num.toString() === num.toString().split('').reverse().join('')) {
//         numsArr.push(num);
//       }
//       num++;
//     }
  
//     return numsArr[numsArr.length - 1];
//   }

// function findReverseNumber(n) {
//     let numsArr = [];
//     let num = 0;
  
//     while (numsArr.length < n) {
//       if (num === reverseNumber(num)) {
//         numsArr.push(num);
//       }
//       num++;
//     }
  
//     return numsArr[numsArr.length - 1];
//   }
  
//   function reverseNumber(num) {
//     let reversed = 0;
  
//     while (num > 0) {
//       reversed = reversed * 10 + num % 10;
//       num = Math.floor(num / 10);
//     }
  
//     return reversed;
//   }
  



// I gave up on trying to work with chat gpt after my code was not passing the timed tests. Here is the top solution provided:


function findReverseNumber(n) {
  
    if (n <= 10)
      return n - 1;
  
    let str = `${n}`;
    let overlap = true;
  
    if (str[0] === '1') {
      if (str[1] === '0') {
        str = 9 + str.slice(2);
      }
      else {
        str = str.slice(1);
        overlap = false;
      }
    }
    else {
      str = +str.slice(0, 2) - 10 + str.slice(2);
    }
    
    let flip = [ ...str ].reverse().join('').slice(+overlap);  
    
    return BigInt(str + flip);
    
  } 

  console.log(findReverseNumber(105960))

