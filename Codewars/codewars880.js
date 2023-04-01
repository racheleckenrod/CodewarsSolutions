// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

// const Test = require('@codewars/test-compat');

// describe("Sample Tests", function() {
//   it("Should pass sample tests", function() {
//     Test.assertEquals(zeros(0), 0, "Testing with n = 0")
//     Test.assertEquals(zeros(5), 1, "Testing with n = 5")
//     Test.assertEquals(zeros(6), 1, "Testing with n = 6")
//     Test.assertEquals(zeros(30), 7, "Testing with n = 30")
//   });
// });


// PREP
// P: we are given a number
// R: we are to return the number of trailing zeros in the factorial of the given number.
// E: see above
// P: since we are asked not to calulate the actual factorial and count the zeros, and instead find another way to calulate trailing zeros, the link provided shows a matematical formula:As n grows large, factorials begin acquiring tails of trailing zeros. To calculate the number Z of trailing zeros for n!, use

//  Z=sum_(k=1)^(k_(max))|_n/(5^k)_|, 	
//  (3)
//  where
 
//   k_(max)=|_log_5n_| 	
//  (4)
//  and |_x_| is the floor function (Gardner 1978, p. 63; Ogilvy and Anderson 1988, pp. 112-114). For n=1, 2, ..., the number of trailing zeros are 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, ... (OEIS A027868). This is a special application of the general result first discovered by Legendre in 1808 that the largest power of a prime p dividing n! is
 
//   epsilon_p(n)=sum_(k=1)^(|_log_pn_|)|_n/(p^k)_| 

// The notation in this explanation is unfamiliar to me so to try to decode it into something I can use is futile. Instead I checked with chat gpt and found a simplier formula.

// that we can add the number of times that 5 goes into n. having to do with 2 and 5 going into the n and 2 * 5 = 10. 

function zeros (n) {

    let count = 0
    while (n >= 5) {
        count += Math.floor(n/5)
        n = Math.floor(n/5)
    }

    return count
    // your code here  
  }
  console.log(zeros(25))