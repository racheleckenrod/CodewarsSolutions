// Two Joggers
// Description
// Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.

// Illustration
// Example where Charles (dashed line) runs a shorter lap than Bob:

// Example laps

// Task
// Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

// The function takes two arguments:

// The length of Bob's lap (larger than 0)
// The length of Charles' lap (larger than 0)

// The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:

// The first number is the number of laps that Bob has to run
// The second number is the number of laps that Charles has to run

// Examples:

// nbrOfLaps(5, 3); // returns [3, 5]
// nbrOfLaps(4, 6); // returns [3, 2]

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertDeepEquals(nbrOfLaps(5, 3), [3,5])
// Test.assertDeepEquals(nbrOfLaps(4, 6), [3,2])
// Test.assertDeepEquals(nbrOfLaps(5, 5), [1,1])
//   });
// });

// PREP
// P: we are given two integers - the length of each lap of each runner
// R: we are to return two integers - the number of laps each runner has to run to meet the other runner at the start.
// E: if we are given (5,5) we are to return [1,1]
// P: 

var nbrOfLaps = function (x, y) {
    // find gcd
    let a = x
    let b = y
    while (a !== b) {
        if (a > b) {
            a = a - b
        } else {
            b = b - a
        }
    }
    gcd = a

    return [y/gcd, x/gcd]
  }