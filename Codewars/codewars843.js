// The number 
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
// 89
// =
// 8
// 1
// +
// 9
// 2
// 89=8 
// 1
//  +9 
// 2
 

// The next number in having this property is 
// 135
// 135:

// See this property again: 
// 135
// =
// 1
// 1
// +
// 3
// 2
// +
// 5
// 3
// 135=1 
// 1
//  +3 
// 2
//  +5 
// 3
 

// Task
// We need a function to collect these numbers, that may receive two integers 
// �
// a, 
// �
// b that defines the range 
// [
// �
// ,
// �
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [
// �
// ,
// �
// ]
// [a,b] the function should output an empty list.

// 90, 100 --> []
// Enjoy it!!


// const chai = require("chai");
// const assert = chai.assert;

// describe("Tests", function() {
//   it("Fixed tests", function() {
//       assert.deepEqual(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
//       assert.deepEqual(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
//       assert.deepEqual(sumDigPow(10, 100),  [89])
//       assert.deepEqual(sumDigPow(90, 100), [])
//       assert.deepEqual(sumDigPow(90, 150), [135])
//       assert.deepEqual(sumDigPow(50, 150), [89, 135])
//       assert.deepEqual(sumDigPow(10, 150), [89, 135])
//   });
// });

// PREP 
// P: we are given two integers. a range of values to check for conditions
// R: we are to return an array of integers the fullfil the following conditions: the number is equal to the number split into single digits and raised to the power of the digit's place in the number.
// E: 135. 1**1 + 3**2 + 5**3 = 135; 1 + 9 + 125 = 135
// P: to check for this condition, we will convert the number to a string, split it, raise the number to the index + 1 , push into an array and reduce the array. then check for equal to the number we started with. if is is, push it to a new array and return that array, if no numbers match, we are to return an empty array. need to produce the numbers to check with a for loop.

function sumDigPow(a, b) {
    let returnArr = []
    let tempArr = []
    let temp2Arr =[]

    for(let i = a; i <= b; i++){
        tempArr = i.toString().split('')
        // sum the digits raised to the power of index+1
        for(let j = 0; j < tempArr.length; j++){
            
            temp2Arr.push(tempArr[j]**(j+1))
            if(Number(tempArr.join('')) === Number(temp2Arr.reduce((acc,c) => acc + c,0))){
                returnArr.push(i)
            }
           
        }
        temp2Arr = []
    }
    return returnArr
  }

  console.log(sumDigPow(50,150))
  