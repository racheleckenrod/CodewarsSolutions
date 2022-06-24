// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

// Examples:
// countSquares(2) --> 26
// countSquares(4) --> 98
// PREP
// parameters- given the number of cuts on each side or plane. 
// results: are to return the number of smaller cubes that essentially have an original outside surface. So the number of cubes minus the number of inner cubes. or the number of squares * 2(front and back) + the number in the middle- that arent inner, so that if the number was 3
// example cuts = 3, four squares across, 4 * 4 = 16, * 2 (for front and back)
//  we are at 32 , plus cuts + 1 - 2(equals the number of middle layers) so that's 2...middle layers  now we have to figure out the number to add for each of those, how many cubes are around the outside... So if we take top, bottom, and two sides (for each one, but just do one at a time), top and bottom will each have cuts + 1 (2 * 4)so that is eight(8), then each of the two remaining sides will have cuts + 1 - 2 so (2 * (3 + 1 - 2)) or 4 more per layer.And we have (cuts + 1 - top and bottom) layers (2)  so to sum it all up,
// front = 16
// back = 16
// layer1 = 8 + 4 (top 4 + bottom 4 + 2 more on each side)
// layer2 = 8 + 4

// ok I got confused by top and bottom and front and back...
// to code it out then... we will need a variable of (cuts + 1) called number, the answer should be slightly less than number **3, in fact it probably is number**3 - (number-1 **3) oh... number - 2 or cuts - 1 **3


var countSquares = function(cuts){
    let number = +cuts + 1
    let middle = +cuts - 1
    return (number**3) - (middle**3)

}

// Yes!! and refactored a bit:

var countSquares = function(cuts){
    return ((+cuts + 1)**3) - ((+cuts - 1)**3)
}

// not working for 0

console.log(countSquares(0))

// had to put in a conditional for zero..

var countSquares = function(cuts){
    if(cuts === 0){
        return 1
    }else{
        return ((+cuts + 1)**3) - ((+cuts - 1)**3)
    }
    
}