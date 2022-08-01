// Help the frog to find a way to freedom
// You have an array of integers and have a frog at the first position

// [Frog, int, int, int, ..., int]

// The integer itself may tell you the length and the direction of the jump

// For instance:
//  2 = jump two indices to the right
// -3 = jump three indices to the left
//  0 = stay at the same position
// Your objective is to find how many jumps are needed to jump out of the array.

// Return -1 if Frog can't jump out of the array

// Example:
// array = [1, 2, 1, 5]; 
// jumps = 3  (1 -> 2 -> 5 -> <jump out>)
// All tests for this Kata are randomly generate

// describe("Frog jumping test case", function() {
//     it("simple tests", function() {
//       Test.assertEquals(solution([1, 2, 2, -1]), 4);
//       Test.assertEquals(solution([1, 2, 1, 5]), 3);
//       Test.assertEquals(solution([1, 1, 1, 1]), 4);
//       Test.assertEquals(solution([1, -1]), -1);
//       Test.assertEquals(solution([-3]), 1);
//     })
//   })
// PREP
// Parameters
// we are given an array of integers
// Results
// are to return the number of jumps it takes to get out of the array or -1 if you cant get out of the array.
// so if we start with x = 0, and check the value at that index, then go to x + that value and check the value there, add it to x etc til you get to the end and you are not out (return -1) or you exceed the length of the array (return the number of jumps it took to get out)

function solution(a) {

    let count = 0
    let x = 0
    for(let i = 0; i < a.length; i++){
        x += a[x]
    count += 1
    if(x > a.length){
        return count
    }
    console.log(count, x)
    }
    return -1
  }
  console.log(solution([1, 2, 1, 5]))