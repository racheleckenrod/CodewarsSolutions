// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:
// (depend on the language)

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 
// -----
// productFib(714) # should return {21, 34, 1}, 
// productFib(800) # should return {34, 55, 0},        
// -----
// productFib(714) # should return {21, 34, true}, 
// productFib(800) # should return {34, 55, false}, 
// Note:
// You can see examples for your language in "Sample Tests".
// ALGORITHMSMATHEMATICS
// Ad

// PREP 
// P: we are given a positive integer
// R: we are to return the two smallest fibonaci numbers that multiply to be greater than or equal to the number, and true if it is equal and false otherwise. need to account for 0 and return it if it is given instead of the boolean.
// E: given 0 we are to return [0,1,0]
// P: we need to know what the fibanocci numbers are so we will need a function to print out the numbers? up to and then one more of the sqrt of the given number.. then test to see if those two numbers multiply to equal given num, returning false or true

// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.sameOrderedMembers(productFib(4895), [55, 89, true])
//     assert.sameOrderedMembers(productFib(5895), [89, 144, false])
//     assert.sameOrderedMembers(productFib(74049690), [6765, 10946, true])
//     assert.sameOrderedMembers(productFib(84049690), [10946, 17711, false])
//     assert.sameOrderedMembers(productFib(193864606), [10946, 17711, true])
//     assert.sameOrderedMembers(productFib(447577), [610, 987, false])
//     assert.sameOrderedMembers(productFib(602070), [610, 987, true])
//   });
// });


function productFib(prod){
    let count = 3
    let fibs = [0,1]
    for(let i = 2; i < count; i++){
        count += 1
        let nextNum = fibs[i-1] + fibs[i-2]
        fibs.push(nextNum)
        if(fibs[fibs.length - 2] * fibs[fibs.length - 1] >= prod){
            break
        }
    }
    return [fibs[fibs.length - 2], fibs[fibs.length - 1], fibs[fibs.length - 2] * fibs[fibs.length - 1] === prod]
  }

  console.log(productFib(5895))