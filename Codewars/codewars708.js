// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:

// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
// FUNDAMENTALS

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(SeriesSum(1), "1.00")
// Test.assertEquals(SeriesSum(2), "1.25")
// Test.assertEquals(SeriesSum(3), "1.39")
// Test.assertEquals(SeriesSum(4), "1.49")
//   });
// });

// Pseudocode:
// because of the rounding to two decimal places, there is going to be a number that is the max value that will make a difference. .004 in fractions or 1/250. if the number is larger than 250, return for 250.
// make an array and reduce it or do a += with each fraction made

function SeriesSum(n){
    let one = 0
    let denominator = 1
  for(let i = 1; i < n && 250; i++){
    one += 1/denominator
    denominator += 3
  }
  return one.toFixed(2)
}