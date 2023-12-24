// Task
// Create a function called one that accepts two params:

// a sequence
// a function
// and returns true only if the function in the params returns true for exactly one (1) item in the sequence.

// Example
// one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
// one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
// one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false
// If you need help, here is a resource ( in Ruby ).

// FUNDAMENTALS

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(one([1,2,3,4,5], function(item){ return item<2}), true)
//   Test.assertEquals(one([1,2,3,4,5], function(item){ return item%2 }), false, "more than 1 item are odd")
//   Test.assertEquals(one([1,2,3,4,5], function(item){ return item>5 }), false, "none item is greater than 5")
//     });
//   });
//   PREP:
// P: we are given an array and a function.
// R: we are to return true if the function returns true for exactly one of the elements in the array.
// E: if given [1,2,3,4,5] and item => item === 3, we are to return true
// P: we loop through the array and test for the function to be true, if it is we can set the return variable to true, and continue checking through the array untill we find another element that returns true then return false.

function one(arr, fun){
    let result = false
    for (let i = 0; i < arr.length; i++) {
        if (result === true && fun(arr[i]) === true) {
            return false
        } else if (fun(arr[i]) === true) {
            result = true
        }
    }
    return result
  }

  console.log((one([1,2,3,4,5], function(item){ return item>5 })))