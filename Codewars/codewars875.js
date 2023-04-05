// This Kata is intended as a small challenge for my students

// All Star Code Challenge #22

// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

// For example:

// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 323500 --> "89 hour(s) and 51 minute(s)"

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(toTime(3600), '1 hour(s) and 0 minute(s)');
// Test.assertEquals(toTime(3601), '1 hour(s) and 0 minute(s)');
// Test.assertEquals(toTime(3500), '0 hour(s) and 58 minute(s)');
// Test.assertEquals(toTime(323500), '89 hour(s) and 51 minute(s)');
// Test.assertEquals(toTime(0), '0 hour(s) and 0 minute(s)');  
//   });
// });

// PREP
// P: we are given a number of seconds
// R: we are to return the number of hours and minutes and discard remaining seconds. in the format 'X hour(s) and X minutes(s)'


function toTime(seconds) {
    let hour = 0
    let minute = 0

    while(seconds >= 3600){
        hour += 1
        seconds -= 3600
    }

    minute = Math.floor(seconds/60)

    return `${hour} hour(s) and ${minute} minute(s)`
    //code here
    
    }