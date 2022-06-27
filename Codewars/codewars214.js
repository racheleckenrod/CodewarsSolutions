// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// PREP
// parameters- given the width, height and depth of a box
// results:
// are to return the total surface area and the volume
// example:
// the box has six surfaces-  then the total surface area will be the sum of all six two dimentional areas. (2 * width * height) + (2 * height * depth) + (2 * width * depth) 
// we also need to return the area and that is the three values multiplied together (width * height * depth)

function getSize(width, height, depth){
    return [(2 * width * height) + (2 * height * depth) + (2 * width * depth), (width * height * depth)]
}

// not too sure about being able to just return the array with out declaring it first but I and going to try it to see if I can keep this very short
// happy that it did indeed pass on th efirst try this way!!