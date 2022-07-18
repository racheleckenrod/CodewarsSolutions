// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// looks like it is one quarter of the circumference of a circle.So- finding the radius and multiplying it by two will give the area of the square. 2pir= circumferenec. the A is 1/4 of the circumference.
// 4A = 2pi*r
// solve for r:
// 2A = Math.pi * r
// 2A/Math.pi = r

// the area of the square is r**2, so 

// Area = (2A/Math.PI)**2
// rounded to two decimals:
// Area = Area.toFixed(2)

function squareArea(A){
  let area = (2*A/Math.PI)**2
    return area.toFixed(2)
}

// the testing didn't like the toFixed two deciaml places and did like this:

function squareArea(A){
    let area = (2*A/Math.PI)**2
      return Math.round(area * 100)/100
  }