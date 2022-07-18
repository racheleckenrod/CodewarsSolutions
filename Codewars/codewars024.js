// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Input

// PREP 
// parameters- given a number n.
// return- the number of positive odd numbers below n
// examples- see above 
// // Pseudocode- some kind of loop that will give odd numbers up to below n and add up how many , not value. perhaps start with one add two then check if it is less than n, add two more and check again. keep track of how many times you can add two to one and not get n.

function oddCount(n){
   
    return Math.floor(n / 2)
  }
  console.log(oddCount(33))