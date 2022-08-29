// Background
// A spider web is defined by

// "rings" numbered out from the centre as 0, 1, 2, 3, 4

// "radials" labelled clock-wise from the top as A, B, C, D, E, F, G, H

// Here is a picture to help explain:

// source: imgur.com
// Web Coordinates
// As you can see, each point where the rings and the radials intersect can be described by a "web coordinate".

// So in this example the spider is at H3 and the fly is at E2

// Kata Task
// Our friendly jumping spider is resting and minding his own spidery business at web-coordinate spider.

// An inattentive fly bumbles into the web at web-coordinate fly and gets itself stuck.

// Your task is to calculate and return the distance the spider must jump to get to the fly.

// Example
// The solution to the scenario described by the picture is 4.63522

// Notes
// The centre of the web will always be referred to as A0
// The rings intersect the radials at evenly spaced distances of 1 unit

// use the law of sines.

// from the data given we can calculate the angle and we have the length of two sides

// c**2 = a**2 + b**2 - 2*a*b*cos C

// to find the angle, we need to use the letters for the fly and the spider. 
// there are 45 degrees between each letter. we can use the codept values and subtract, but that doesn't really work out for the ones that go between A and H. I think there is a modulus way this works... But I am not exactly sure how. 
// in the meantime we can do some conditionals. 
// 

var spiderToFly = function(spider, fly) {
    let angle =((Math.PI)/4) * Math.abs(spider.codePointAt(0) - fly.codePointAt(0))
    console.log(angle,spider.codePointAt(0) , fly.codePointAt(0),spider.codePointAt(0) - fly.codePointAt(0))
  
    console.log(angle)

    return Math.sqrt(spider[1]**2 + fly[1]**2 - (2*spider[1]*fly[1]*Math.cos(angle)))
    // Your code here
   
  }
  console.log(spiderToFly("H3", "E2"))