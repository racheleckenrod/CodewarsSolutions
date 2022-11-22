// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertSimilar(largest(2,[10,9,8,7,6,5,4,3,2,1]),[9,10])
//   Test.assertSimilar(largest(3,[5,1,5,2,3,1,2,3,5]),[5,5,5])
//   Test.assertSimilar(largest(7,[9,1,50,22,3,13,2,63,5]),[3, 5, 9, 13, 22, 50, 63])
//   Test.assertSimilar(largest(0,[1,2,3,4,8,7,6,5]),[])
//     });
//   });
  
  


function largest(n,xs){
    let arr = []
    let sorted = xs.sort((a,b) => a - b)
    arr = sorted.slice(xs.length - n)
    return arr 
    // Find the n highest elements in a list
}
console.log(largest(0,[9,1,50,22,3,13,2,63,5]),[3, 5, 9, 13, 22, 50, 63])