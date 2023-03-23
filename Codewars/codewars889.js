// Description
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

// ALGORITHMS

// const {assert} = require("chai");

// describe("Sample tests", () => {
//   it("Tests", () => {
//     assert.equal(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
//     assert.equal(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil');
//     assert.equal(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field');
//   });
// });

// PREP
// P: we are given two strings of numbers corresponding to the numbers of charaters that each have a value.
// R: we are to return the result of tallying the two sides of good and evil with a string and a different string if itis a tie.
// E: see above
// P: I see to make an object for good and for evil, convert the strings into arrays, multiply the string index by the object value and tally then compare the results and return the appropriate string.



function goodVsEvil(good, evil){
    let goodObj = {
        "Hobbits" : 1,
        "Men" : 2,
        "Elves" : 3,
        "Dwarves" : 3,
        "Eagles" : 4,
        "Wizards" : 10
    }

    let evilObj = {
        "Orcs" : 1,
        "Men" : 2,
        "Wargs" : 2,
        "Goblins" : 2,
        "Uruk Hai" : 3,
        "Trolls" : 5,
        "Wizards" : 10
    }

    good = good.split(" ")
    evil = evil.split(" ")

    let goodSum = []
    let evilSum = []

    for (let i = 0; i < good.length; i++){
        goodSum.push(good[i] * Object.values(goodObj)[i])
    }

    for (let i = 0; i < evil.length; i++) {
        evilSum.push(evil[i] * Object.values(evilObj)[i])
    }

    goodSum = goodSum.reduce((acc,c) => acc + +c,0)
    evilSum = evilSum.reduce((acc,c) => acc + +c,0)

    if(goodSum > evilSum) {
        return "Battle Result: Good triumphs over Evil"
    } else if (goodSum < evilSum) {
        return "Battle Result: Evil eradicates all trace of Good"
    } else {
        return "Battle Result: No victor on this battle field"
    }
    
    
}
console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))