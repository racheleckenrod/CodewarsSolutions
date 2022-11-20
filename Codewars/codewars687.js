// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

// Example

// unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
// //             "B---eg---in---n---er---"
// Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.
// FUNDAMENTALS
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(unscrambleEggs("ceggodegge heggeregge"), "code here");

// Test.assertEquals(unscrambleEggs("FeggUNegg KeggATeggA"),"FUN KATA");
//   });
// });

// Pseudocode:
// since there are two things, the placement after the consonant and the consistancy of the "egg" being inserted, we really only need to pick one way to filter out the "egg" either by searching for it directly and removing it by a splice, we could search for any consonants and remaove the egg the same way. if element is not a,e,i,o,u then splice(i+1,3)


function unscrambleEggs(word){
    let vowels = ['a','e','i','o','u',' ']
    let arr = word.split('')
    for(let i = 0; i < arr.length; i++){
        if(!vowels.includes(arr[i])){
            arr.splice(i + 1,3)
        }
    }
    return arr.join('')
  }
  console.log(unscrambleEggs("ceggodegge heggeregge"))

//   what a great solution from the web:
// function unscrambleEggs(word){
//   return word.split("egg").join("")
// }