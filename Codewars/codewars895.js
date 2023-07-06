// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

// For example:

// x=
// [[_,_,_,_,_,_]
// [_,_,_,_,@,_]
// [@,_,_,_,_,_]]

// bags = 2, cap = 2

// return --> 'Clean'

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Clean up after your dog", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2), "Clean");
//     assert.strictEqual(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1), "Cr@p");
//     assert.strictEqual(crap([['_','_'], ['_','@'], ['D','_']], 2, 2), "Dog!!");
//   });
// });

// PREP
// P: we are given three variables. an array of arrays containing "_", "@" and/or "D", and two integers- the number of bags and each bags capacity.
// R: if the array contains "D" we are to return "Dog!!", else if the list contains "@" we are to return "clean" if there is enough capacity in the bags(bags != 0) 
// E: see above
// P: first check the array for "D", then "@" and check for if the capacity of bags (multiply bag # by capacity) to clean all the @ if there is, return "clean" else return "Cr@p"



// function crap(x, bags, cap){
//     let capacity = bags * cap
//     x = x.flat()
//     // check for "D"
//     if (x.includes("D")) return "Dog!!"

//     // count "@" and compare to capacity
//     // let craps = x.filter(item => item === "@").length

//     if (x.filter(item => item === "@").length > capacity) return "Cr@p!!"

//     return "Clean"
//     console.log(craps)
// }

function crap(x, bags, cap){
    let capacity = bags * cap
      x = x.flat()
      if (x.includes("D")) return "Dog!!"
  
      if (x.filter(item => item === "@").length > capacity) return "Cr@p"
  
      return "Clean"
  }

console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1))