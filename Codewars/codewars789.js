// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

// PREP
// 


function reverseNumber(n) {
    if(n < 0){
        n = Math.abs(n).toString().split("").reverse().join("")
        return -n
    }else{
        return +n.toString().split("").reverse().join("")
    }
  }

  console.log(reverseNumber(5678))