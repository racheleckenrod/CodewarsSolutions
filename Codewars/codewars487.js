// Area of an arrow
// An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

// arrow

// a and b are integers and > 0

// Write a function which returns the area of the arrow.

// PREP
// Parameters:
// are given two integers greater than zero. representing the lengths of the sides of a rectangle.
// results:
// we are to return the area formed by the midpoint of the rectangle and the length of a.

// for example:
// if we are given a = 8, b = 4; the area (1/2 base * height)
// would be 1/2 * a * (1/2 * b) or 1/2 * 8 * 1/2 * 4 = 8


function arrowArea(a,b) {
    return 1/2 * a * 1/2 * b
  }

  console.log(arrowArea(25,25))

//   I think my code looks pretty, even if it can't be found on the solutions page