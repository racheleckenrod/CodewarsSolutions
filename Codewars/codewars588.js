
// DESCRIPTION:
// There exist two zeroes: +0 (or just 0) and -0.

// Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

// In JavaScript / TypeScript / Coffeescript the input will be a number.

// In Python / Java / C / NASM / Haskell / the input will be a float.

// FUNDAMENTALS



function isNegativeZero(n) {
    console.log(n)
    return  -1/n === Infinity && n !== -5e-324
  }