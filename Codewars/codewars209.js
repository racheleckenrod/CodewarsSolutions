// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

// PREP
// I feel some anxiety from this as it looks similar to the mario program from cs50 that was one of the first programs I did... with the newline hint this one looks so simple and easy I am sort of afraid that it wont be
// I see I will need to not only add a newline, but also an additional space padStart() could be useful here... 
// getting that last I to be without the newline... 


function drawStairs(n) {
    let output = ""
      for(let i = 2; i <= n+1; i++){
          output += "I\n".padStart(i, " ")
      }
          return output.slice(0,-1)
    }
console.log(drawStairs(3))