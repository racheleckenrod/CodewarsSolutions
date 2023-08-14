// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified
// STRINGSREGULAR EXPRESSIONSFUNDAMENTALS

// describe("Example Test Cases", function(){
//     Test.assertEquals(nicknameGenerator("Jimmy"), "Jim");
//     Test.assertEquals(nicknameGenerator("Samantha"), "Sam");
//     Test.assertEquals(nicknameGenerator("Sam"), "Error: Name too short");
//     Test.assertEquals(nicknameGenerator("Kayne"), "Kay", "'y' is not a vowel");
//     Test.assertEquals(nicknameGenerator("Melissa"), "Mel");
//     Test.assertEquals(nicknameGenerator("James"), "Jam");
//   })
  
// PREP
// P: we are given a string
// R: we are to return a shortened string- first three chars if third is not a vowel, else return the first four chars
// E: if given "Robert" we are to return "Rob"
// P: use regex to test for third char being a vowel and return name.slice(0,3) if not or name.slice(0,4) if it is

function nicknameGenerator(name){
    if (name.length <= 3) {
        return 'Error: Name too short'
    } else if ((/[aeiou]/).test(name[2])) {
        return name.slice(0,4)
    } else {
        return name.slice(0,3)
    }
  }