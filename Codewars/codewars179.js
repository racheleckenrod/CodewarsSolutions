// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

function isDigit(s) {
    if(s >= 0 || s<= 0 ){
        return true
    }else{
        return false
    }
    //your code
  }

  console.log(isDigit(" 56  34 "))

  function isDigit(s){
    if(Number(s) == s){
        return true
    }else{
        return false
    }
  }
//   the above code did not pass all tests..

function isDigit(s) {
    if(parseFloat(s) == s ){
          return true
      }else{
          return false
      }
  }

//   this code did pass tests... needed to look at solution to find a passable code