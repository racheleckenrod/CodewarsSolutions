// In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

// Result should be separated by comma and space.

// Example

// geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'
// More info: https://en.wikipedia.org/wiki/Geometric_progression
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(geometricSequenceElements(2, 3, 5), '2, 6, 18, 54, 162')
//   Test.assertEquals(geometricSequenceElements(2, 2, 10), '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024')
//   Test.assertEquals(geometricSequenceElements(1, -2, 10), '1, -2, 4, -8, 16, -32, 64, -128, 256, -512')
//     });
//   });
// in the return arr, the first number is just the a , then it is  that number times r, and repeat n-1 times. so that there are n elements in arr. 

function geometricSequenceElements(a, r, n){
    let arr = [a]
       for(let i = 0; i < n - 1; i++){
           arr.push(arr[i] * r )
       }
       return arr.join(", ")
   }