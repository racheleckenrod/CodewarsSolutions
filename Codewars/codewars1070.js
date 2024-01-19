// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null
// Good Luck!

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(uniqueSum([1,2,3]), 6)
//   Test.assertEquals(uniqueSum([1,3,8,1,8]), 12)
//   Test.assertEquals(uniqueSum([-1,-1,5,2,-7]), -1)
//   Test.assertEquals(uniqueSum([]), null)
//     });
//   });
  
// PREP
// P: we are given an array of positive and negative numbers.
// R: we are to return the sum of the numbers, but only include one instance of any number.
// E: ig given [1,1,2,2,3,3,4,4] we are to return 1 + 2 + 3 + 4 = 10
// P: we can make the array into a set, then back into an array, and reduce it.


function uniqueSum(lst){

    if (lst.length < 0) return null
    let nums = new Set (lst)
    console.log(nums)

    return Array.from(nums).reduce((acc,c) => acc + c, 0)
    //your magic code goes here
  }

  console.log(uniqueSum([1,-1,2,2,3,3,4,4]))