// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// Example:

// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7
// This kata is following kata: http://www.codewars.com/kata/is-n-divisible-by-x-and-y

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertSimilar(isDivisible(3,3,4),false);
//   Test.assertSimilar(isDivisible(12,3,4),true);
//   Test.assertSimilar(isDivisible(8,3,4,2,5),false);
//     });
//   });

// PREP
// P: we are given a varying number of arguments
// R: we are to return true if all the arguments are divisable into the first one with no remainder.
// E: if given 12,3,4 we are to return true
// P: we need to handle the varying number of arguments. we can do this by putting them into an array then check to see if the first element of the array is divisible by all the elements. I think we can use [...args] to put all the given arguments into the array.

function isDivisible(...args){
    let arr = [...args]

    if (arr.every( item => arr[0] % item === 0)) return true

    return false

  }
  