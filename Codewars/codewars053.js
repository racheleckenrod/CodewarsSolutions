// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.

// const chai = require("chai");
// const assert = chai.assert;

// // describe("Solution", function() {
//     const testCases = [
//         // input, expected -- feel free to add more cases if needed
//         [["PT92", 6], 2],
//         [["M4A1", 8], 1],
//         [["M16A2", 19], 2],
//         [["PSG1", 31], 19],
//         [["PT92", 19], 4],
//     ];
    
//     it("Should return the number of magazines a soldier needs", function() {
//       for (const [input, expected] of testCases) {    
//         assert.strictEqual(magNumber(input), expected);
//       }
//     });
// });

// PREP
// Parameters
// takes in a weapon and the number of streets in an array.
// Return: function to return an integer of number of magazines the soldiger will need to have three bullets per street. 
// Example:
// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets
// and then how many streets(three bullets each)

// ['PT92', 5] PT92 weapon takes 17 bullets per magazine, and the solidger will be crossing 5 streets. 5 * 3 is 15 and so one mag will be returned.

// Pseudocode:
// a conditional will be needed here to perform different calculations for each possible weapon, as they hold different number of bullets per mag. the modulus may be handy to use. bullets needed and bullets in mag. how many mags ? if bullets needed <= bullets in mag, return number of mags, else add one multiple of bullets in mag. first is to put two parameters in for info- or break down info into its arr. index [0] is the weapon, index[1] is streets
// how to set up the conditional so to get the number of mag needed. it will be the number + one if there is a remainder not equal to zero. perhaps I can set it up that way, that the number of magsneeded = streets*3/bullets per mag, plus one if % bulletsperMag !== 0.
function magNumber(info){
    let i 
    if(info[0] === 'PT92'){
        bulletsPerMag = 17
    }else if(info[0] === 'M4A1' || info[0] === 'M16A2'){
        bulletsPerMag = 30
    }else if(info[0] === 'PSG1'){
        bulletsPerMag = 5
    }
    console.log(bulletsPerMag)
    let streets = info[1]
    console.log(streets)

    let magNeeded = Math.ceil(((3 * streets) / bulletsPerMag ))
    console.log(magNeeded)
    return magNeeded
    }
magNumber(["PT92", 6])