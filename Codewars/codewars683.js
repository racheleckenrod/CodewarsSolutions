// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

// the formula is:
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// 15 + 6 = 21

// Then sum all the numbers up to and including the number given. 

// could make an array then reduce the array.

function sumTriangularNumbers(n) {
    let arr = []
    let temp = 0
    if(n <=0) return 0;
    for(let i = 1; i <= n; i++){
        arr.push(temp + i)
        temp += i
    }
    return arr.reduce((acc,c) => +acc + +c, 0)

  }
  console.log(sumTriangularNumbers(4))