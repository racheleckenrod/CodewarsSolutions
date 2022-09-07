// Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

// initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

// sort(initialArray, sortingArray) => ['z', 'x', 'y']

// sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

// PREP
// Parameters:
// we are given two arrays
// the first is to be re-sorted into the order given in the second array.
// Results:
// we are to return the first array sorted in the manner of the second.
// Example:
// ["a","b","c"] , [1,2,0]
// will return the letters array in the new order of ["b","c","a"]
// Pseudocode:
// purhaps we can pass in the values of the second array into a indexOf() of the first.
function sort(initialArray, sortingArray) {
    let arr = []
    for(let i = 0; i < initialArray.length; i++){
        arr.push(initialArray[sortingArray[i]])
    }
  return arr
}
console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]))
//  [-1, 1, 0, 3, 2]
//  [1, 3, 2, 5, 4]
// [1, 3, 2, 5, 4]);

// second try:
function sort(initialArray, sortingArray) {
    let arr = []
     for(let i = 0; i < initialArray.length; i++){
         arr.push(initialArray[sortingArray.indexOf(i)])
     }
   return arr
 }