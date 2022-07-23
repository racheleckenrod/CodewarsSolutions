// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.


// describe('leap year', function() {
//     it('should detect leap years', function() {
//       Test.assertEquals(isLeapYear(1234), false, 'Year 1234');
//       Test.assertEquals(isLeapYear(1984), true, 'Year 1984');
//       Test.assertEquals(isLeapYear(2000), true, 'Year 2000');
//       Test.assertEquals(isLeapYear(2010), false, 'Year 2010');
//       Test.assertEquals(isLeapYear(2013), false, 'Year 2013');
//     });
//   });
// Pseudocode:
// Ive done one of these leap year katas before, I dont remember off hand the trick to it... 

function isLeapYear(year) {
    let leapYear
   if(year % 4 === 0){
    leapYear = true
   }
   if(year % 100 === 0){
    leapYear = false
   }
   if(year % 400 === 0){
    leapYear = true
   }
   return leapYear
  }

// the code I couldn't come up with on my own today::
// I was close and tried a bunch of statements like this but the actual solution I didnt get today....
//   return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;

// Here is another one liner:
//  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);