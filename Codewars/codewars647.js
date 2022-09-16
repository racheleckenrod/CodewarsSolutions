// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// The first array will always have at least one element.


// describe("Basic tests", function() {
//     Test.assertEquals(findMissing([1, 2, 3], [1, 3]), 2);
//     Test.assertEquals(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]), 8);
//     Test.assertEquals(findMissing([7], []), 7);
//     Test.assertEquals(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]), 3);
//     Test.assertEquals(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]), 0);
//   });
  

function findMissing(arr1, arr2) {
    if(arr1.length <= 1) return arr1[0]
    for(let i = 0; i < arr2.length; i++){
        for(let j = 0; j < arr1.length; j++){
            if(arr2[i] === arr1[j]){
                arr1.splice(j, 1)

            }
        }
    }
    return arr1[0]
  }
  console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]))