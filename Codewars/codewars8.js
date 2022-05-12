// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// pseudocode:
// using toUpper and toLower case...
// if variable to Upper and toLower case != then it is a letter.
// if variable to upper OR to lower case 

function sameCase(a, b){
    if(a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()){
        return -1
    }else if((a === a.toLowerCase() && b === b.toLowerCase()) || (a === a.toUpperCase() && b === b.toUpperCase())){
        return 1
    }else
        return 0

    // return 0;
  }

  console.log(sameCase("p", "m"))

//   I had lots of trouble with this one as I had forgotten my ()'s with the method(?)s I was using.. Took me looking
// it up again to find out what my error was, as I was pretty sure of my logic...