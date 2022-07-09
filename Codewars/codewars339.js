// DESCRIPTION:
// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"
// FUNDAMENTALS


function replace(s){
    for(let i = 0; i < s.length; i++){
      s =  s.replace(/[aeiouAEIOU]/, "!")
    }
    return s
    
  }
  console.log(replace("aeiou"))