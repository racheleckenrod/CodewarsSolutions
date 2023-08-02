// Implement a function that returns the minimal and the maximal value of a list (in this order).

// describe("Basic tests", function(){
//     Test.assertDeepEquals(getMinMax([1]),[1,1]);
//     Test.assertDeepEquals(getMinMax([1,2]),[1,2]);
//     Test.assertDeepEquals(getMinMax([2,1]),[1,2]);
//     });

// PREP
// P: we are given an array
// R: we are to return an array with the min value and the max value
// E: if given [1, 2, 3, 4, 5] we are to return [1, 5]
// P: use Math.min and Math.max to find the values and put them into array and return it.


function getMinMax(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min, max]
    //..
  };

//   refactored:
// function getMinMax(arr){
//     return [Math.min(...arr), Math.max(...arr)]
// };