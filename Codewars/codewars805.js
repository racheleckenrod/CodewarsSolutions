// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

// describe("Simple remove duplicates",()=>{
//     it("Example tests",()=>{
//       assert.deepEqual(solve([3,4,4,3,6,3]),[4,6,3]);
//       assert.deepEqual(solve([1,2,1,2,1,2,3]),[1,2,3]);
//       assert.deepEqual(solve([1,2,3,4]),[1,2,3,4]);
//       assert.deepEqual(solve([1,1,4,5,1,2,1]),[4,5,2,1]);
//       assert.deepEqual(solve([1,2,1,2,1,1,3]),[2,1,3]);
//     });
//   });
// pseudocode:
// if(arr[i] = arr[j] ){
    // remove arr[i]
// }
// didn't work out so well, try reversing the array and reversing it back

function solve(arr) {
    arr = arr.reverse()
    let values = [... new Set(arr)]
   
    return values.reverse()
  }

  console.log(solve([1,1,4,5,1,2,1]))