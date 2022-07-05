// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35), false);
//   Test.assertEquals(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28), true);
  
//     });
//   });
  

function periodIsLate(last, today, cycleLength){
    console.log(last)
    console.log(today)
    console.log((today - last)/86400000)

    if(( (today - last) /86400000) > cycleLength){
        return true
    }else{
        return false
    }
    
//   return false;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28))
