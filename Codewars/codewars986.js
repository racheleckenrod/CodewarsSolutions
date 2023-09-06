// Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

// Examples:
// 13 17 31 37 71 73 are Backwards Read Primes
// 13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

// Task
// Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

// Examples (in general form):
// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

// See "Sample Tests" for your language.

// Notes
// Forth Return only the first backwards-read prime between start and end or 0 if you don't find any
// Ruby Don't use Ruby Prime class, it's disabled.
// MATHEMATICSALGORITHMS

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// var a = [9923, 9931, 9941, 9967]
// Test.assertSimilar(backwardsPrime(9900, 10000), a)
//   });
// });

// PREP
// P: we are given two numbers
// R: we are to return an array of numbers between (inclusive) the given numbers that are prime- and reversing the digits of the prime number is also prime.
// E: if given (2, 50), we are to return [13, 17, 31, 37]
// P: we will have to perform an additional test when adding prime numbers to the return array, turn the prime number into a string, split it "", reverse, join, Number(), then test it for prime as well. only if the number passes both tests will we include it in the return array. 

function backwardsPrime(start, stop){
    const bwPrimes = []
    for (let i = start; i <= stop; i++){
        let bwi = Number(i.toString().split('').reverse().join(''))
        if (isPrime(i) && isPrime(bwi)) {
            bwPrimes.push(i)
        }
    }
    return bwPrimes
    // your code here
  }

  function isPrime(num){
    if (num <= 1) return false
    if (num <= 3) return true

    if(num % 2 ===0 || num % 3 === 0) return false

    for (let i = 5; i*i <= num; i += 6) {
        if (num % i === 0 || num % (i+2) === 0) return false
    }

    return true
  }
  console.log(backwardsPrime(9900, 10000))