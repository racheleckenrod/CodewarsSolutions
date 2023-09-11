// Definition (Primorial Of a Number)
// Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

// Task
// Given a number N , calculate its primorial.!alt!alt
// Notes
// Only positive numbers will be passed (N > 0) .
// Input >> Output Examples:
// 1- numPrimorial (3) ==> return (30)
// Explanation:
// Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

// Mathematically written as , P3# = 30 .
// 2- numPrimorial (5) ==> return (2310)
// Explanation:
// Since the passed number is (5) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .

// Mathematically written as , P5# = 2310 .
// 3- numPrimorial (6) ==> return (30030)
// Explanation:
// Since the passed number is (6) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .

// Mathematically written as , P6# = 30030 .


// describe("Basic tests",() =>{
//     Test.assertEquals(numPrimorial(3),30);
//     Test.assertEquals(numPrimorial(4),210);
//     Test.assertEquals(numPrimorial(5),2310);
//     Test.assertEquals(numPrimorial(8),9699690);
//     Test.assertEquals(numPrimorial(9),223092870);
//   });

// PREP
// P: we are given an integer > 0
// R: we are to return the product of the given number of prime numbers, starting with 2
// E: if given 3 we aer to multiply the first three prime numbers together 2*3*5 and return 30
// P: we can run a for loop checking the length of the return array, filling it with prime numbers.


function numPrimorial(n){
    let result = []
    let num = 2

    while (result.length < n){
       if (isPrime(num)) {
        result.push(num)
       }
       num ++
    }
    return result.reduce((acc,c) => acc * c,1)
  }

  function isPrime(num) {
    if (num === 2 || num ===3) return true

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
  }
  console.log(numPrimorial(8),9699690)