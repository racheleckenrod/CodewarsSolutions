// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"


// describe( "String Merge Tests:", () => {

//     Test.assertEquals(stringMerge("person","here", "e"), "pere");
//     Test.assertEquals(stringMerge("apowiejfoiajsf","iwahfeijouh", "j"), "apowiejouh");
//     Test.assertEquals(stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz");
//     Test.assertEquals(stringMerge("12345654321","123456789", "6"), "123456789");
//     Test.assertEquals(stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd");
//     Test.assertEquals(stringMerge("incredible","people", "e"), "increople");
  
//   } );

// PREP
// P: we are given 3 strings, one of which is just a single letter.
// R: we are to return one string, a combination of the two strings joined by the letter.
// E: if given "hope", "people", "p" . we are to return "hopeople"
// P: using slice at the index where the letters are found and joining them, making sure to include the letter just once. So indexOf.






function stringMerge(string1, string2, letter){
    let first = string1.indexOf(letter)
    let second = string2.indexOf(letter)

    return string1.slice(0,(first)) + string2.slice(second)
    // Add code here :)
  }

  console.log(stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz")