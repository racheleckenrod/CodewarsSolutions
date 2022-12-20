// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples

// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01"  
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.


// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// // Null or Empty
// Test.assertEquals(timeCorrect(null), null);
// Test.assertEquals(timeCorrect(""), "");

// // Invalid Format
// Test.assertEquals(timeCorrect("001122"), null);
// Test.assertEquals(timeCorrect("00;11;22"), null);
// Test.assertEquals(timeCorrect("0a:1c:22"), null);

// // Correction Tests
// Test.assertEquals(timeCorrect("09:10:01"), "09:10:01");
// Test.assertEquals(timeCorrect("11:70:10"), "12:10:10");
// Test.assertEquals(timeCorrect("19:99:09"), "20:39:09");
// Test.assertEquals(timeCorrect("19:99:99"), "20:40:39");
// Test.assertEquals(timeCorrect("24:01:01"), "00:01:01");
// Test.assertEquals(timeCorrect("52:01:01"), "04:01:01");
//   });
// });




function timeCorrect(timestring) {
    if(timestring === null) return null
    if(timestring === "") return ""

    let nums = timestring.split('')

    if(nums[2] != ":" || nums[5] != ":" ) return null

    let digits = timestring.split(":").join("")

    let reg =  /[0-9]/g

    let check = digits.match(reg)
    console.log(check,digits)

    if(check.length != digits.length) return null

    let sec = +timestring.slice(6,8)
    let min = +timestring.slice(3,5)
    let hour = +timestring.slice(0,2)
    console.log(hour,min,sec,timestring)

    while(sec > 59){
        sec -= 60
        min += 1
    }
    while(min > 59){
        min -= 60
        hour += 1
    }
    console.log(hour)
    while(hour > 24){
        console.log("ugh",hour)
        hour -= 24
    }
    
    if(hour == 24){
        console.log("pop")
        if(min > 0 || sec > 0){
            hour -= 24
        }
    }

console.log(hour.toString().padStart(2, '0'));
    hour = hour.toString().padStart(2,'0')
    min = min.toString().padStart(2,'0')
    sec = sec.toString().padStart(2,'0')

    return `${hour}:${min}:${sec}`
  }
  console.log(timeCorrect("19:99:09"), "20:39:09")