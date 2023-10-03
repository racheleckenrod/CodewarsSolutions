// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// // simple examples
// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// // if two consecutive floors are the same,
// //distance travelled between them is 0
// elevatorDistance([3,3]) = 0
// Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(elevatorDistance([5,2,8]), 9);
//   Test.assertEquals(elevatorDistance([1,2,3]), 2);
//   Test.assertEquals(elevatorDistance([7,1,7,1]), 18);
  
  
  
//     });
//   });

// PREP
// P: we are given an arrary of numbers.
// R: we are to return the sum of the differences of the numbers.
// E: if given [2,6,3] we are to return  (6-2 = 4 ) + (6-3 = 3) = 7
// P: we will need to check for which number is bigger, and subtract the smaller number from it when comparing adjacent numbers. we will make a new array of the differences and then add them together.


function elevatorDistance(array) {
    let diff = []

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] >= array[i + 1]) {
            diff.push(array[i] - array[i + 1])
        } else  {
            diff.push(array[i + 1] - array[i])
        }
    }

    return diff.reduce((acc,c) => acc + c,0)
    // your code here
  }