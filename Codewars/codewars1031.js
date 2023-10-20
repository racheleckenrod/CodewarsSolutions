// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

// const Test = require('@codewars/test-compat');

// describe("Basic Tests", function(){
//   it("It should works for basic tests", function(){

// Test.assertSimilar(balance("!!","??") , "Right")
// Test.assertSimilar(balance("!??","?!!") , "Left")
// Test.assertSimilar(balance("!?!!","?!?") , "Left")
// Test.assertSimilar(balance("!!???!????","??!!?!!!!!!!") , "Balance")

// })})

// PREP
// P: we are given two strings
// R: we are to return "Left", "Right", or "Balance" depending on the numbers of "!" and "?" in each string
// E: if given "!!!". "???" we are to return (2+2+2) < (3+3+3) or 6<9, "Right" side is heavier so return "Right"
// P: convert left and right variables into numbers and compare them, returning "left", "Right", or "Balance" depending on the values obtained. can make a new variable, pushing 2 or 3 into it depending on the value, then reduce it and compare values to determine what to return.



function balance(left,right){

    let Lnum = left.split('').map(item => item === "?" ? 3 : item === "!" ? 2 : 0).reduce((acc,c) => acc + c, 0)

    let Rnum = right.split('').map(item => item === "?" ? 3 : item === "!" ? 2 : 0).reduce((acc,c) => acc + c, 0)

    if (Lnum > Rnum) return "Left"
    else if (Rnum > Lnum) return "Right"
    else {
        return "Balance"
    }
    //coding and coding....
    
    
  }