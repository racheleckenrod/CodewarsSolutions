// John wants to decorate the walls of a room with wallpaper. He wants a fool-proof method for getting it right.

// John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.

// Last time he did these calculations he got a headache, so could you help John?

// Task
// Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.

// Example:
// wallpaper(4.0, 3.5, 3.0) should return "ten"

// wallpaper(0.0, 3.5, 3.0) should return "zero"

// Notes:
// all rolls (even with incomplete width) are put edge to edge

// 0 <= l, w, h (floating numbers); it can happens that w * h * l is zero

// the integer r (number of rolls) will always be less or equal to 20

// FORTH: the number of rolls will be a positive or null integer (not a plain English word; this number can be greater than 20)

// In Javascript English numbers are preloaded and can be accessed as:

// numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
// For other languages it is not preloaded but you can use the above one if you need it.

// describe("wallpaper",function() {
//     it("Basic tests",function() { 
//         testing(wallpaper(6.3, 4.5, 3.29), "sixteen");71.064
//         testing(wallpaper(7.8, 2.9, 3.29), "sixteen");
//         testing(wallpaper(6.3, 5.8, 3.13), "seventeen");
//         testing(wallpaper(6.1, 6.7, 2.81), "sixteen");
//     })})

// PREP
// Parameters:
// given length width and height in meters of a room to wallpaper
// Results:
// are to return in lowercase english word the numbr of rolls of wallpaper.
// rolls are .52 meters wide and 10 meters long. we need 15% more than needed
// to calculate the sq meters and not the volume, we add l*H*2 + w*h*2
// then divide by .52 and divide by 10 and multiply by 1.15% and round up 

function wallpaper(l, w, h) {
    let x = Math.ceil(((((2*((l*h) + (w*h)))/.52)/10) * 1.15))
    return numbers[x]
}
console.log(wallpaper(6.1, 6.7, 2.81))