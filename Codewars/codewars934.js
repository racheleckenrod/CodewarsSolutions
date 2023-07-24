// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals( longestWord('a b c d e fgh') , "fgh" );
//   Test.assertEquals( longestWord('one two three') , "three" );
//   Test.assertEquals( longestWord('red blue grey') , "grey" );
//     });
//   });
  
// PREP
// P: we are given a string of words separated by spaces
// R: we are to return the last longest word.
// E: if given "apple banana pear" we are to return "banana"
// P: convert string to array, find longest .length then findLast with that length.


function longestWord(stringOfWords){

    let arr = stringOfWords.split(" ")
    let lengths = []

    for(let i = 0; i < arr.length; i++){
        lengths.push(arr[i].length)
    }
    let longestLength = Math.max(...lengths)

    let longestWord = arr.reverse().find((item) => item.length === longestLength)

    return longestWord
    //Give me back the longest word!
  }

  console.log(longestWord('red blue grey'))