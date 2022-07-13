// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.

// Note: This is an introductory Kata for a series... coming soon!
// simplify the fraction by finding the gcd Greatest common Denominator
function reduce(fraction) {
    a = fraction[0]
    b = fraction[1]
    let gcd = function gcd(a,b){
        return b ? gcd(b, a%b) : a
    }
    gcd = gcd(a,b)
    return [a/gcd, b/gcd]
  }
  console.log(reduce([80,120]))