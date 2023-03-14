// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1" for others.

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
// Note:
// See other examples in "Your test cases".

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

// Tortoises don't care about fractions of seconds
// Think of calculation by hand using only integers (in your code use or simulate integer division)
// or Google: "convert decimal time to hours minutes seconds"

// const chai = require('chai');
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Tortoise Racing",function() {
//   it("Basic tests ",function() {            
//     assert.deepEqual(race(720, 850, 70), [0, 32, 18])
//     assert.deepEqual(race(80, 91, 37), [3, 21, 49])
//     assert.deepEqual(race(80, 100, 40), [2, 0, 0])
//     assert.deepEqual(race(720, 850, 37), [0, 17, 4])
// })})

// PREP
// P: we are given two speeds and the length of the head start.
// R: we are to return the time it takes the faster speed to catch the slower speed. 
// E: see above. If "A" travels at 720 ft/sec and "B" travels at 850 ft/sec and "A" has a 70 ft head start, we should return [0, 32, 18] meaning 0 hours, 32 mins and 18 seconds. 
// P: we need to calculate the time to catch a moving object. Subtract the slow rate from the fast rate, and calculate the time it takes to go the head start distance at the difference. 850 - 720 = 130ft/hour how long does it take to go 70 ft @ 130ft/hr? = 


function race(v1, v2, g) {

    if ( v1 >= v2) return null


    let newRate = v2 - v1

    let time = g / newRate

    let hours = Math.floor(time)
    let mins = Math.floor((time - hours) * 60)
    let seconds = Math.floor((((time - hours) * 60) - mins) * 60)


    
    if ((((time - hours) * 60) - mins) * 60 >= 59.9999) {
        seconds = 0
        mins += 1
    } else if (   ((((time - hours) * 60) - mins) * 60) - seconds >= .9999) {
        seconds += 1
    }

    if ((time - hours) * 60 >= 59.99) {
        mins = 0
        hours += 1
    } else if ( ((time - hours) * 60) - mins >= .9999) {
        mins += 1
    }
    return[hours, mins, seconds]
    // your code
}

console.log(race(546, 816, 120), [0, 26,40])