// Recreation of Project Euler problem #6

// Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

// Example
// For example, when n = 10:

// The square of the sum of the numbers is:

// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

// The sum of the squares of the numbers is:

// 12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

// Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(differenceOfSquares(5), 170)
//   Test.assertEquals(differenceOfSquares(10), 2640)
//   Test.assertEquals(differenceOfSquares(100), 25164150)
  
//     });
//   });
  
// PREP
// P: we are given a number between 1 and 100
// R: we are to return the difference between the sum of the squares and the square of the sum of the numbers
// E: if given 5, the sum of the squares (1**2 + 2**2 + 3**2 + 4**2 + 5**2) - (1 + 2 + 3 + 4 + 5)**2
// P: create two variables and subtract them

function differenceOfSquares(n){
    let sum = []
    let squares = []

    for(let i = 1; i <= n; i++){
        sum.push(i)
    }

    for(let i = 1; i <= n; i++){
        squares.push(i**2)
    }

    sum = sum.reduce((acc, c) => +acc + +c, 0)
    sum = sum**2

    squares = squares.reduce((acc, c) => +acc + +c, 0)

    return  sum - squares
    // ...
  }

  console.log(differenceOfSquares(100),  25164150)