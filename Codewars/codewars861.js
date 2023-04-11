// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// describe("Basic Tests",() =>{
//     Test.assertEquals(unluckyDays(1586), 1, "should be: 1");
//     Test.assertEquals(unluckyDays(1001), 3, "should be: 3");
//     Test.assertEquals(unluckyDays(2819), 2, "should be: 2");
//     Test.assertEquals(unluckyDays(2792), 2, "should be: 2");
//     Test.assertEquals(unluckyDays(2723), 2, "should be: 2");
//     Test.assertEquals(unluckyDays(1909), 1, "should be: 1");
//     Test.assertEquals(unluckyDays(1812), 2, "should be: 2");
//     Test.assertEquals(unluckyDays(1618), 2, "should be: 2");
//     Test.assertEquals(unluckyDays(2132), 1, "should be: 1");
//     Test.assertEquals(unluckyDays(2065), 3, "should be: 3");
//     })

// PREP
// P: we are given a year in integer
// R: we are to return the number of friday the 13th's in the given year.
// E: example from aboe, given 2065 we are to return 3
// P: we will pass the 13th of each month into the date function and see if it returns friday for the given year. Since we can use the format "YYYY-MM-DD" we will use a for loop incrementing the number for each month. it may need to be padded


function unluckyDays(year){
    let count = 0
    
    for(let i = 1; i <= 12; i++){
        let month = i.toString().padStart(2,"0")
        let theFifteenth = new Date(`${year}-${month}-15`).toString()

        if(theFifteenth.startsWith('Fri')){
            count += 1
        }
    }

    return count
  }

  console.log(unluckyDays(2065))