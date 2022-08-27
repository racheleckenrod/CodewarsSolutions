// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29
// Note:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.


// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(evaporator(10,10,10),22);
//     });
//   });
  
// PREP
// Parameters 
// we are given three params... the content in mL of the evaporator, the evap_per_day which is the percentage of foam or gas lost every day, and the threshold in percentage beyound which the evaporator is no longer useful.... 

// Results:
// we are to return the day that the evaporator is not longer useful.

// the example is (10,10,5) results in 29
// so the content doesn't matter, lets do without.
// is it the day that the evaporator contains less than 5%...? if 10% per day...
// how many days until evaporator contains 5% or less?
// we can use the given content...
// so instead of the percent lost we can do percent remaining, which would be 90%
// 

function evaporator(content, evap_per_day, threshold){ 
    let count = 0
    let remainingPercent = (100 - evap_per_day)/100
    let stop = content * (threshold/100)
    let currentContent = content
    for(let i = 0; stop < currentContent; i++){
        currentContent *= remainingPercent
        count += 1
    }
    return i
  }
  console.log(evaporator(10,10,10))

  function evaporator(content, evap_per_day, threshold){ 
    let count = 0
    let remainingPercent = (100 - evap_per_day)/100
    let stop = content * (threshold/100)
    let currentContent = content
    do{
        currentContent *= remainingPercent
        count += 1
    }while(stop < currentContent)
    // for(let i = 0; stop < currentContent; i++){
    //     currentContent *= remainingPercent
    //     count += 1
    // }
    return count
  }