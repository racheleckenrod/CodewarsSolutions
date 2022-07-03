// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.
// PREP
// almost went ahead with this in an incorrect and very simple way.
// Given two coordinates a(x,y) and b(x,y)
// results: we are to return the distance between the two points. I guess this could be essentially a triangle problem  where the values of a**2 and b**2 can be done with subtraction and the c**2 would be the distance between the points.. Lets see how that works out
// example: to find a and b from the given coordinates...
// a(1,5) and b(2,6)

// the triangle uses the x and y axises to be the a and b and then the c is the length between the points... so to make it a little simplier,we will change the names of the variables given to i and j so we can still use the a**2 + b**2 = c**2 formula without getting too confused.

// i(1,5) and j(2,6)
// goes into pathagorem theorem as
//(Math.abs(i.x-j.x))**2 + (Math.abs(i.y-j.y)**2) = length**2

// then to get just the length we need to take the square root of the left side of the equation.. lets put that into the function changing back the variables to a and b 

function distanceBetweenPoints(a, b) {
    return Math.sqrt((Math.abs(a.x-b.x))**2 + (Math.abs(a.y-b.y)**2))
  }