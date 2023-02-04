// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// DATE TIMEMATHEMATICSALGORITHMS

// const strictEqual = require("chai").assert.strictEqual;

// describe('tests', function() {
//   it('should format correctly', function() {
//     strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
//     strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
//     strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
//     strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
//     strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
//     strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
//     strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
//     strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//     strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
//     strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
//   });
// });

// Pseudocode:
// check for hours: is equal to or greater than 3600?
// if so, get Math.floor(seconds/3600), then subtract that number times 3600 from the seconds variable, and place the hours value in the array
// then check for mins, add to the array, then 
// do the remaining seconds.


function humanReadable (seconds) {
    let hours
    let mins
    let secs
    let time = []
    if(seconds >= 3600){
        hours = Math.floor(seconds/3600).toString().padStart(2, '0')
        seconds -= hours * 3600
        time.push(`${hours}:`)
    }else {
        time.push("00:")
    }
    if(seconds >= 60){
        mins = Math.floor(seconds/60).toString().padStart(2, "0")
        seconds -= mins * 60
        secs = seconds.toString().padStart(2, "0")
        time.push(`${mins}:${secs}`)
    }else {
        secs = seconds.toString().padStart(2, "0")
        time.push(`00:${secs}`)
    }
    return time.join("")
  }
  console.log(humanReadable(359999), '99:59:59')