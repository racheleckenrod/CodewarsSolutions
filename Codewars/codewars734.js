// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

// describe("Sample tests", () => {
//     it("Small tests", () => {
//       Test.assertEquals( sum(1), 1 )
//       Test.assertEquals( sum(1, 2), 3 )
//       Test.assertEquals( sum(5, 7, 9), 21 )
//       Test.assertEquals( sum(12, 1, 1, 1, 1), 16 )
//       Test.assertEquals( sum(12, 1, 1, 1, 1, 1, 1), 18 )
//     })
//   })

function sum(...nums) {
    return nums.reduce((acc, c) => +acc + +c, 0)
  }console.log( sum(12, 1, 1, 1, 1, 1, 1), 18 )