// A rectangle is can be defined by two factors: height and width.

// Its area is defined as the multiplication of the two: height * width.

// Its perimeter is the sum of its four edges: height + height + width + width.

// It is possible to create rectangles of the same area but different perimeters. For example, given an area of 45, the possible heights, widths and resultant perimeters would be:

// (1, 45) = 92

// (9, 5) = 28

// (15, 3) = 36

// Note that (6, 7.5) has an area of 45 too, but is discarded in this kata because its width is non integral.

// The task is to write a function that, given an area as a positive integer, returns the smallest perimeter possible of a rectangle with integral side lengths.

// Input range:
// 1 <= area <= 5 x 10 ^ 10
// How fun
// PREP
// Parameters:
// we are just given an integer that is an area of a rectangle

// are to return the smallest perimeter with the area given, using just whole integers

// Pseudocode:
// loop through integers from number given to 1 to find what ones are divisable into the area with no remainder. when we find a pair of numbers, will run them through the perimeter equation and push the values into an array, then return the Math.min of the array.


function minimumPerimeter(area) {
    let array = []
    for(let i = 1; i < area; i++){
        if(area % i === 0  && i <= area/i){
            array.push(2*(i + area/i))
            console.log(array,i)
        }
    }
    // let perimeters = array.map(element => element[0]*2 + element[1]*2)
    console.log(perimeters)
    return Math.min(...perimeters)
  }
  
console.log(minimumPerimeter(45))

function minimumPerimeter(area) {
 
    for(let i =  Math.floor(Math.sqrt(area)); i > 0; i--){
      if(area % i === 0){
        return 2 * (i + area/i)
      }
    }
     
     
    }
    
      