// Special thanks to SteffenVogel_79 for the idea.

// Challenge:

// Given a string, return a copy of the string with the vowels' case swapped.

// For this kata, assume that vowels are in the set "aeouiAEOUI".

// Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

// Addendum: Your solution is only required to work for the ASCII character set.

// Please make sure you only swap cases for the vowels.

// pseudocode:
// first get a match for vowels, then check the value of codePt, to see if it is upper or lowercase, then switch it. 



function swapVowelCase(str) {
    str = str.split("")
    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i].match(/[aeiou]/gi)){
            if( str[i].codePointAt() > 96){
                str[i] = str[i].toUpperCase()
            }else{
                str[i] = str[i].toLowerCase()
            }
        } 
    }
    return str.join("")
  }
  console.log(swapVowelCase("I have the best Ideas"))