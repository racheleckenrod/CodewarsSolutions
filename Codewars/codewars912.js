// In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

// Here is the algorithm:

// Double every other digit, scanning from right to left, starting from the second digit (from the right).

// Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:

// 1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

// 12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

// 891 ==> [8, 9*, 1] ==> [8, 18, 1]
// If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):

// [8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

// or:

// [8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
// Sum all of the final digits:

// [8, 9, 1] ==> 8 + 9 + 1 = 18
// Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.

// 18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number


// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(validate(123), false);
// Test.assertEquals(validate(1), false);
// Test.assertEquals(validate(2121), true);
// Test.assertEquals(validate(1230), true);
//   });
// });

// PREP
// P: we are given a positive integer of up to 16 digits
// R: we are to return true if the number is a valid credit card number, false if not.
// E: see above
// P: seems to be some discrepency with the instructions and the references . I'll go with the instructions

function validate(n){
  
    let num = n.toString().split("")
    let doubleNums = []
    if(num.length % 2 === 0){
        for (let i = 0; i < num.length; i ++) {
            if (i % 2 === 0) {
                doubleNums.push(2* +num[i])
            } else {
                doubleNums.push(+num[i])
            }
        }
    } else {
        for (let i = 0; i < num.length; i ++) {
            if (i % 2 === 0) {
                doubleNums.push(+num[i])
            } else {
                doubleNums.push(2 * +num[i])
            }
        }
    }

    for (let i = 0; i < doubleNums.length; i++) {
        if (doubleNums[i] > 9){
            doubleNums[i] = doubleNums[i] - 9
        }
    }

    let sum = doubleNums.reduce((acc,c) => acc + +c,0)

    if (sum % 10 === 0) return true

    return false
}

console.log(validate(2121), true)