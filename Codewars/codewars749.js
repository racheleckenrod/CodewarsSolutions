// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// // pigIt('Hello world !');     // elloHay orldway !

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
// });
// });

// Pseudocode:
// how to deal with punctuation, if charCodeAt...push it?
// split string into array of words. check each word for punctuation. if punct- just push it, else if no punctuation, push the other


function pigIt(str){
    let arr = str.split(" ")
    let pigged = arr.map( item => item.match(/[a-z]/gi) ? `${item.slice(1)}${item.slice(0,1)}ay` : item)
    
    return pigged
  }
  console.log(pigIt('Hello world !'))