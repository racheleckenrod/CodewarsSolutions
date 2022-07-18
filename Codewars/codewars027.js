// The aspect ratio of an image describes the proportional relationship between its width and its height. Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.

// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.

// This kata is part of a series with Aspect Ratio Cropping - Part 2 .

// Example
// 374 × 280 pixel image with a 4:3 aspect ratio.

// PREP 
// Parameters -arbitrary X and Y resolutions
// aspect raito is X:Y  16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X
//Return:  convert them into resolutions with a 16:9 aspect ratio that maintain equal height

// from the example, width is x and height is y. a 4:3 aspect ratio is 374 x 280 pixel function is to maintain height,(Y) second number in the ratio. take first ratio, convert the x into 16 :9. keeping y the same. 
// so accept x and y, multiply the given y by 1.77 to get the x. return both given y and new x. 


    function aspectRatio(x,y){
        let arr = []
        arr[1] = y
        arr[0] = Math.ceil(y * (16/9))

        return arr
    }

    console.log(aspectRatio(640,480))