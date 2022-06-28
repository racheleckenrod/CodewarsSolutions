// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

// PREP
// parameters:
// given three values- the floors the two elevators are on and the floor that called an elevator. all are 0,1,or2.
// Results - to return either left or right, which ever elevator is closest to the floor that called an elevator, in case they are the same are to return right.
// example- (2,1,0) left-2, right-1, call 0 should return right, it is closer to call.
// pseudocode- will return the smaller difference or right if they are the same... Math.abs(call-left) < math.abs(call - right) return left, else return right.

function elevator(left, right, call){
    return Math.abs(call - left) < Math.abs(call - right) ? "left" : "right"
  }