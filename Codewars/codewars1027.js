// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

// The Challenge
// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

// Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.

// describe("test4:3", function() {
//     it("should return 1024x768", function(){
//         Test.assertEquals(findScreenHeight(1024,"4:3"), "1024x768");
//     });
// });
// describe("test16:9", function() {
//     it("should return 1280x720", function(){
//         Test.assertEquals(findScreenHeight(1280,"16:9"), "1280x720");
//     });
// });
// describe("test32:9", function() {
//     it("should return 3840x1080", function(){
//         Test.assertEquals(findScreenHeight(3840,"32:9"), "3840x1080");
//     });
// });

// PREP
// P: we are given a number and a string
// R: we are to return a string of the number we are given, an 'x' and the number calculated from the number we were given and the string aspect ratio.
// E: if given 1280 and "16:9" we are to return "1280x(1280*9/16)"
// P: we can split the given string by ":" then convert the two elements into numbers, calculate the height from the aspect ratio and return a string `${width}x${height}

function findScreenHeight(width, ratio) {
    let aspect = ratio.split(":").map(item => +item)
    let height = Math.trunc(width * aspect[1] / aspect[0])
    return `${width}x${height}`
    // Happy coding :)
}
console.log(findScreenHeight(3840, "32:9"))