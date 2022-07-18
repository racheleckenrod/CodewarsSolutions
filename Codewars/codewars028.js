// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples (input -> output:
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

// d is either Left or Right
// a is array, where the numbers in the array represent the number of boxes in each column
// PREP 
// Pseudocode
// two scenerios- d === L || d ==== R
// for Left, numbers return largest to smallest, retaining duplicates.
// for right, numbers return smallest to largest.

// return a new array either way. left first, find largest num, push it into array. for right, find smallest num and push that into array.


const flip=(d, a)=>{
    if(d === "R"){
        a.sort((b,c)=> b - c)
    }else if(d === "L"){
        a.sort((b,c)=> c - b)
    }
    return a
  }

  console.log(flip("R", [ 6, 1, 3, 1 ] ))

//   a.sort((b,c)=>b-c)
//   if( d === "L")

// const flip=(d, a)=>{
//     if(d === "R"){
//         a.sort((b,c)=> b - c)
//     }else if(d === "L"){
//         a.sort((b,c)=> c - b)
//     }
//     return a
//   }
// // 
// Found out about .sort a.sort((b,c)=> b-c)returns smallest to largest, while c-b returns Largest to smallest!