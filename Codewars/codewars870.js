// Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

// The next number that experiments this particular behaviour is 370 with the same power.

// Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.

// eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

// Let's see some cases:

// eqSumPowdig(100, 2) ----> []

// eqSumPowdig(1000, 2) ----> []

// eqSumPowdig(200, 3) ----> [153]

// eqSumPowdig(370, 3) ----> [153, 370]
// Enjoy it !!

// describe("Example Tests", function() {
//     Test.assertSimilar(eqSumPowdig(100, 2), [])
//     Test.assertSimilar(eqSumPowdig(1000, 2), [])
//     Test.assertSimilar(eqSumPowdig(2000, 2), [])
//     Test.assertSimilar(eqSumPowdig(200, 3), [153])
//     Test.assertSimilar(eqSumPowdig(370, 3), [153, 370])
//     Test.assertSimilar(eqSumPowdig(400, 3), [153, 370, 371])
//     Test.assertSimilar(eqSumPowdig(500, 3), [153, 370, 371, 407])
//     Test.assertSimilar(eqSumPowdig(1000, 3), [153, 370, 371, 407])
//     Test.assertSimilar(eqSumPowdig(1500, 3), [153, 370, 371, 407])
//   });

// PREP
// Parameters:
// we are given two numbers, the first- hMax is the upper limit to test, and the second, exp, is the exponent to raise the digits to.
// Results:
// we are to return the numbers, in an array, that have the property of being the same as the sum of the digits raised to the exp given.
// Example:
// the number 153, each digit raised to the 3rd power and added together is also equal to 153
// Pseudocode:
// will need to separate the digits of the number, raise them to the power of the munber given, sum them and compare to the original number.if theyare the same, add to the array



function eqSumPowdig(hMax, exp) {
    let arr = []
    for(let i = 2; i <= hMax; i++){
        if(i.toString().split('').map(item => Math.pow(item, exp)).reduce((acc,c) => acc + c,0) === i){
            arr.push(i)
        }
    }
    // Your code here
    return arr
  }
  console.log(eqSumPowdig(400, 3), [153, 370, 371])