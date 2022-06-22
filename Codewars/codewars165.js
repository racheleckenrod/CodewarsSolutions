// Task
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True
// Help
// Here's a (Ruby) resource if you get stuck:

// http://www.rubycuts.com/enum-all

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(all([1,2,3,4,5], function(v){return v<9}), true)
//   Test.assertEquals(all([1,2,3,4,5], function(v){return v>9}), false)
  
//     });
//   });
  
// PREP 
// Parameters- sort of unclear on this.. takes in an array and a function that checks for something..
// Results should return true or false. True if the function tests true for each element of the array, otherwise returns false. also should return true for an empty ..
// examples. if the function tests for a value greater/less than a value, should return true if all the values in the array meet the comdition. else return false.
// I am stretching myself on this one as I am having to translate what they are asking for and also stretch my confort zone of the function within a function usage.
// I'm thinking of getting a for each involved, and see if I can pass each value through the function..
function all( arr, fun ){
    console.log(fun)
    
        return arr.every(fun)
    // ...
  }

  console.log(all([1,2,3,4,5], function(v){return v<9}))