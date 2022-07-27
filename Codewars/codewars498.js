// Given a grid of size m x n, calculate the total number of rectangles contained in this rectangle. All integer sizes and positions are counted.

// Examples:

// numberOfRectangles(3, 2) == 18
// numberOfRectangles(4, 4) == 100
// Here is how the 3x2 grid works (Thanks to GiacomoSorbi for the idea):

// 1 rectangle of size 3x2:

// [][][]
// [][][]
// 2 rectangles of size 3x1:

// [][][]
// 4 rectangles of size 2x1:

// [][]
// 2 rectangles of size 2x2

// [][]
// [][]
// 3 rectangles of size 1x2:

// []
// []
// 6 rectangles of size 1x1:

// []
// As you can see (1 + 2 + 4 + 2 + 3 + 6) = 18, and is the solution for the 3x2 grid.

// There is a very simple solution to this!

// Instead of doing something else, I googled it and found this:
// Let us derive a formula for number of rectangles.
// If the grid is 1×1, there is 1 rectangle. 
// If the grid is 2×1, there will be 2 + 1 = 3 rectangles 
// If it grid is 3×1, there will be 3 + 2 + 1 = 6 rectangles. 
// we can say that for N*1 there will be N + (N-1) + (n-2) … + 1 = (N)(N+1)/2 rectangles
// If we add one more column to N×1, firstly we will have as many rectangles in the 2nd column as the first, 
// and then we have that same number of 2×M rectangles. 
// So N×2 = 3 (N)(N+1)/2
// After deducing this we can say 
// For N*M we’ll have (M)(M+1)/2 (N)(N+1)/2 = M(M+1)(N)(N+1)/4
// So the formula for total rectangles will be M(M+1)(N)(N+1)/4 

// .

// Combinatorial Logic:

// N*M grid can be represented as (N+1) vertical lines and (M+1) horizontal lines.
// In a rectangle, we need two distinct horizontal and two distinct verticals.
// So going by the logic of Combinatorial Mathematics we can choose 2 vertical lines and 2 horizontal lines to form a rectangle. And total number of these combinations is the number of rectangles possible in the grid.

// Total Number of Rectangles in N*M grid: N+1C2 * M+1C2 = (N*(N+1)/2!)*(M*(M+1)/2!) = N*(N+1)*M*(M+1)/4
 
// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(numberOfRectangles(4, 4), 100, "");
//       assert.strictEqual(numberOfRectangles(5, 5), 225, "");
//     });  
//   });
  

// GEOMETRYPUZZLES



function numberOfRectangles(m, n) {
    return  m*(m+1)*(n)*(n+1)/4 
  }


//   another solution I like:
// HarrySlaughter
// function numberOfRectangles(m, n) {
//   var result = 0;
//   for (var i = 1; i <= m; i++) {
//     for (var j = 1; j <= n; j++) {
//       result = result + i * j;
//     }
//   }
//   return result;
// }