// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

// const chai = require("chai");
// const assert = chai.assert;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(whatCentury("1999"), "20th", "With input '1999' solution produced wrong output");
//     assert.strictEqual(whatCentury("2011"), "21st", "With input '2011' solution produced wrong output");
//     assert.strictEqual(whatCentury("2154"), "22nd", "With input '2154' solution produced wrong output");
//     assert.strictEqual(whatCentury("2259"), "23rd", "With input '2259' solution produced wrong output");
//     assert.strictEqual(whatCentury("1234"), "13th", "With input '1234' solution produced wrong output");
//     assert.strictEqual(whatCentury("1023"), "11th", "With input '1023' solution produced wrong output");
//     assert.strictEqual(whatCentury("2000"), "20th", "With input '2000' solution produced wrong output");
//   });
// });

// PREP
// P: we are given a four digit string of numbers
// R: we are to return a string with the century that corresponds to the digit.
// E: if given '100' we are to return '1st', as we are to return '1st' for any number up to 100.
// P: since there are some overlapping results we can return- 4th,5th,6th,7th,8th,9th,10th,11th,12th,13th,14th,15th,16th,17th,18th,19th,20th all have the "th" added, while 1st,2nd,3rd have unique letters added, we can use some if/else statements concerning what to return. we will convert the given string to a number and compare greater and less than numbers for the century, using unique comparisons for 1st, 2nd and 3rd, then an additional conditional for  4th-20th, adding one to the number, unless the number is an even 00. then we check for what the second digit is, and then check for 00, adding one as necessary, 

function whatCentury(year){
  let num = Number(year)
  let digits = year.slice(2,4)
  let hunds = year.slice(1,2)

  if (num <= 100) {
    return "1st"
  }else if (num <= 200) {
    return "2nd"
  }else if (num <=300) {
    return "third"
  }else if (num <= 2000 ) {
    if (digits === "00") {
        return year.slice(0,2) + "th"
    } else {
        return (Number(year.slice(0,2)) + 1) + "th"
    }
  }else if (num <= 9999) {
    if (hunds === "0") {
        if (digits === "00"){
            return year.slice(0,2) + "th"
        } else {
            return (Number(year.slice(0,2)) + 1) +"st"
        }
    } else if (hunds === "1") {
        if (digits === "00"){
            return year.slice(0,2) + "st"
        } else {
            return (Number(year.slice(0,2)) + 1) +"nd"
        }
       
    } else if (hunds === "2") {
        if (digits === "00"){
            return year.slice(0,2) + "nd"
        } else {
            return (Number(year.slice(0,2)) + 1) +"rd"
        }
    } else if (hunds === "3") {
        if (digits === "00"){
            return year.slice(0,2) + "rd"
        } else {
            return (Number(year.slice(0,2)) + 1) +"th"
        }
    } else {
        if (digits === "00"){
            return year.slice(0,2) + "th"
        } else {
            return (Number(year.slice(0,2)) + 1) +"th"
        }
    }
  }
}
console.log(whatCentury('3400'))