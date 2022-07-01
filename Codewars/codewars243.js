// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

// Write a function calculating circumference of a Circle.

// Tests round answers to 6 decimal places.
// circle is an object{
    // center {x: value
                // y: value}
        // radius: value 
    // 
// }


function circleCircumference(circle) {
    return Math.PI*2*circle.radius.toFixed(6)
}