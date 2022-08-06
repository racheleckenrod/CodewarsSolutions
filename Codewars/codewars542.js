// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertDeepEquals(towerBuilder(1), ["*"]);
//   Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
//   Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
//     });
//   });
  
// PREP
// Parameters:
// we are given a number
// Results:
// we are to return an array of strings that will make a pyrimid of the number of floors
// for example..
// the number 4 would return an array of four strings, and even though it doesn't specifically show a \n that joins them I am goingto do it that way and see if it will pass the tests..  
// anyway, the four strings will be as follows:
// "   *   " 1 i=0
// "  ***  " 3 i=1
// " ***** " 5 i=2
// "*******" 7 i=3
// the first has n - 1 spaces then 1 astrick, then n-1 spaces.
// the second has n-2 spaces and 3 astricks, then n-2 spaces.
// the third has n - 3 spaces and then 5 astricks, then n-3 spaces.
// the forth(last) has n-4 (=0) spaces then 7astricks, then n-4 (0) spaces.

// The pattern I see is to start with a string with n-1 spaces, 1 astrick, then n-1 spaces.
// continue adding strings (or arrays that will be converted to strings) until you get to n-n spaces and continue adding +2 astricks to each astricks each time. How to build a three part array/string 

function towerBuilder(nFloors) {
    let arr = []
    let string = ""
    spaces = " "
    astricks = "*"
    let count = 1
    let n = nFloors
    for(let i = 0; i < nFloors; i++){
        string = `${spaces.repeat(n - 1)}${astricks.repeat(count)}${spaces.repeat(n-1)}`
        
        arr.push([string])
        count +=2
        n -= 1
        
    }
    return arr.join("\n")
  }

  console.log(towerBuilder(7))

//   as I suspected the testing didn't like the \n but the following code passed all tests:

function towerBuilder(nFloors) {
    let arr = []
    let string = ""
    spaces = " "
    astricks = "*"
    let count = 1
    let n = nFloors
    for(let i = 0; i < nFloors; i++){
        string = `${spaces.repeat(n - 1)}${astricks.repeat(count)}${spaces.repeat(n-1)}`
        
        arr.push(string)
        count +=2
        n -= 1
        
    }
    return arr
  }