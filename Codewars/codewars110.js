// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


function shortcut (string) {
    string = string.split('')
    console.log(string)
    for(let i = 0; i < string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            string.splice([i], 1)
            i--
            console.log(string)
        }
    }
    return string.join('')
  }

  console.log(shortcut("there are no where near enough vowels"))

//   I did not know that we can grounp the vowels together