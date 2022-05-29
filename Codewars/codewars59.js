// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// //PREP
// Parameters 
// given a string
// Results
// return a string with each character repeated once
// Example- help would be hheellpp.
// Pseudocode
// will need to use .repeat(1), maybe the .map() would be good.oh, a string, map is for arrays. then I guess we could use a for loop with string(i) and maybe the best way would be to convert to an array and back again. and use map. 

function doubleChar(str) {
    str = str.split('').map(e => e.repeat(2)).join('')
    console.log(str)
    return str
  }
  
  console.log(doubleChar("Help"))