// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)
// should return

// [5.0, 10.0, 15.0]

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertDeepEquals(multiples(3, 5), [5, 10, 15])
//     });
//   });
  
// PREP
// P: we are given two numbers, the first is the number of multiples and the second is the number to have the multiple of.
// R: we are to return an array of numbers being the number of multiple of the given number.
// E: if given 3,4 we are to return [4,8,12,16]
// P: In an effort to move past for loops, I'll attempt this using something else. I think a forEach() and I could add the value to it and push it into the array. that wont work as there isnt anything in the array. this problem may be a good one for the regular for loop.


function multiples(m, n){
    let arr = []

    for(let i = 1; i <= m; i++){
        arr.push(n * i)
    }

    return arr
    // code here
  }