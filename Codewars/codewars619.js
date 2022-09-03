// Objective
// Given a number n we will define its scORe to be 0 | 1 | 2 | 3 | ... | n, where | is the bitwise OR operator.

// Write a function that takes n and finds it's scORe.

// n	scORe n
// 0	0
// 1	1
// 49	63
// 1000000	1048575
// Any feedback would be much appreciated

// 

function score(n){
    // let length = n.toString(2).length
    let one = "1"
    let num = one.repeat( n.toString(2).length)
    let or = parseInt(num, 2)

    return or
  }
 

//   function score(n){
//     let p = n - 1
//     let q = 1048575
//     console.log(n.toString(2).length)
//     console.log(q.toString(2).length)
  
//     return   2**(n.toString(2).length)-1
//   }
console.log(score(1000000))
  