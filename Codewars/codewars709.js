// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.
// FUNDAMENTALSSTRINGSARRAYS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Drone Fly-By", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
//     assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
//     assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
//   })
// })

// PREP
// Parameters:
// we are given two strings, first one of x's and the second one for the drone.
// Results:
// from what I can tell, we are to return a string of the same length as string one, with the length of the drone string of o's, then the rest x's.




function flyBy(lamps, drone){
    lamps = lamps.split('')
    for(let i = 0; i < drone.length; i++){
        lamps[i] = 'o'
    }
    return lamps.join('')

}
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx')