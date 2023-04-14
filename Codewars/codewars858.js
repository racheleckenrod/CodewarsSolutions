// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

// alternative text

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

// Examples in general form:
// (depending on the language)

//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]
  
//   You can see examples for your language in **"SAMPLE TESTS".**
// Notes:
// lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. (See kata, Square into Squares. Protect trees! http://www.codewars.com/kata/54eb33e5bc1a25440d000891 for this problem).

// When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing or return {} with C++, Array() with Scala, [] with Perl, Raku.

// In that case the returned structure of C will have its sz component equal to 0.

// Return the string "nil" with Bash, PowerShell, Pascal and Fortran.

// const chai=require('chai')
// const assert=chai.assert
// chai.config.truncateThreshold = 0;

// describe("Basic tests",function(){
//   it("Basic tests",function(){
//     assert.deepEqual(sqInRect(5, 5), null)
//     assert.deepEqual(sqInRect(5, 3), [3, 2, 1, 1])
//     assert.deepEqual(sqInRect(3, 5), [3, 2, 1, 1])
//     assert.deepEqual(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])
//   })
// });

// PREP
// P: we are given 2 numbers representing the length and the width of a rectangle.
// R: we are to return the length(and width) of the squares that make up the rectangle by decreasing order.
// E: if given (20, 14) we are to return [the smaller num 14, the difference 6, 6 again as another 6x6 square can be made, then the squares that are left, 6x2- so three 2s]
// P: finding a formula for this.. first push the shortest side and subtract it from the larger. make a temp variable with the difference. 

// function sqInRect(lng, wdth){
//     let result = []
//     let long = 0
//     let short = 0
//     // find longer side
//     if(lng > wdth){
//         long = lng
//         short = wdth
//     } else {
//         long = wdth
//         short = lng
//     }



//     result.push(short)

//     let difference = long - short

//     result.push(difference)

//     if(short - difference > 0){
//         result.push(difference)
//         let temp = short - difference - difference

//         let repeatTimes = difference/temp

//         for(let i = repeatTimes; i > 0; i--){
//             result.push(temp)
//         }


//         // repeat diff/temp times temp?



//     }

// return result

//     //your code here
//   }

//   console.log(sqInRect(20,12))


// using chat gpt: we get a while loop.

function sqInRect(length, width) {
    if (length === width) return null

    let result = []

    while(length !== width){
        let shortSide = Math.min(length, width)
        result.push(shortSide)

        if (length === shortSide) {
            width -= shortSide
        } else {
            length -= shortSide
        }
    }

    result.push(length)
    return result
}