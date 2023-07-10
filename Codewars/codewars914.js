// Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

// For example,

// ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
// [7,70,17]
// Don't worry about bad input, you will always receive a finite list of integers.

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertDeepEquals( filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]), [7,70,17] );
// Test.assertDeepEquals( filterLucky([71,9907,69]), [71,9907] );
//   });
// });

// PREP
// P: we are given an array of integer
// R: we are to return all the elements that have the number 7 in them
// E: given [7,17,27,4] we are to return [7,17,27]
// P; check each element for including a 7, and push each one into an array.


var filterLucky=x=>{

    let sevens = []

    x.forEach(item => { if (item.toString().includes("7")) {
        sevens.push(item)
    }})

    return sevens;
  }

  console.log(filterLucky([2,7,17,77,56]))