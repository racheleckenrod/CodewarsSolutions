// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

// PREP
// first make array of numbers 1 to n, then cube them them reduce

// try a forEach to **3 then reduce to single value


function sumCubes(n){
    let nums = []
    for(let i = 1; i <= n; i++){
        nums.push(i)
    }
console.log(nums)
 
    let cubes = nums.map(x => x**3)
    console.log(cubes)
    return cubes.reduce((acc,c) => acc + c,0)
  }

  console.log(sumCubes(3))