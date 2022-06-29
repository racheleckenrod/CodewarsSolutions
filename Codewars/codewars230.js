// This series of katas will introduce you to basics of doing geometry with computers.

// Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
// The Circle class can be seen below:

// // Represents a Circle where center is a Point and radius is a Number
// class Circle {
//   constructor(center, radius) { 
//     this.center = center; 
//     this.radius = radius;
//   }
// }
// And the Point class can be seen below:

// // Represents a Point where x and y are Numbers
// class Point {
//   constructor (x,y) { 
//     this.x = x;
//     this.y = y; 
//   }
// }
// Tests round answers to 6 decimal places.

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals( +circleArea( new Circle( new Point(10, 10), 30)).toFixed(6), 2827.433388)
//   Test.assertEquals( +circleArea( new Circle( new Point(25, -70), 30)).toFixed(6), 2827.433388)
//   Test.assertEquals( +circleArea( new Circle( new Point(-15, 5), 0)).toFixed(6), 0)
//   Test.assertEquals( +circleArea( new Circle( new Point(-15, 5), 12.5)).toFixed(6), 490.873852)
  
//     });
//   });
// Math.PI*r**2
// PREP
// Parameters- given a cirlce object {} with a center point(that we dont use ) and a radius. 
// I think it will look like this:
// circle {
    // center: x,y
    // radius: radius
// }
// so to retrieve data from the object, will use circle.radius ??

function circleArea(circle){
    return Math.PI * (circle.radius**2).toFixed(6)

    
  }
