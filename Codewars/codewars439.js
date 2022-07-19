// Your task is to rotate a matrix 90 degree to the left. The matrix is an array of integers with dimension n,m. So this kata checks some basics, it's not too difficult.

// There's nothing more to explain, no tricks, no "bad cases";-). Perhaps you take a look at the testcases...

// One easy example:

// Input: {{-1, 4, 5},
//         { 2, 3, 4}}

// Output: {{ 5, 4},
//          { 4, 3},
//          {-1, 2}}
// First there are some static tests, later on random tests too...


// Hope you have fun:-)!

// describe("Tests", () => {
//     it("test", () => {
//   var a = rotateMatrix([[-1,4,5],[2,3,4]]),
//       b = [[5,4],[4,3],[-1,2]];
//   Test.assertSimilar(a,b);
//     });
//   });
  
// pseudocode:
// looks like we return as many arrays as there are elements in the arrays with the first array returned being the last of the originals in order. pop()
// I want to pop off the number and push it into a new array, then make a new array and do the same, so that the new array has as many newarrays in it as the given array had elements in each array and the new array has as many elements in each array as the given array had arrays. To access the last item of each array im setting up nested for loops, but I dont think that will be a good way to do this

// I need to find a way to make a two element array from the popping off of the elements and then add each two element array to a return array


function rotateMatrix (arr){
    console.log(arr[0],arr[1])
    // let x = arr[0].pop()
    // let y = arr[1].pop()
    let x = []
    let y = []
    let miniArray = []
    let array = []
    let length = arr[0].length
    // x = arr[0].pop()
    console.log(x,y)
    // array.push([x,y])
    // console.log(array)
    
    // make a series of two element arrays
    for(let i = 0; i < length; i++){
        // i is for the number to be popped off
        for(let j = 0; j < arr.length; j++){
            console.log(arr.length, "length")
            // j is for the number of arrays in the array
            x = arr[j].pop()
            // then push them all into miniArray
            miniArray.push(x)
            console.log(miniArray)
        }
    array.push([miniArray])
    miniArray = []
    console.log(array)
    }
    console.log(array)
  
}
console.log(rotateMatrix([[-1,4,5],[2,3,4]]))