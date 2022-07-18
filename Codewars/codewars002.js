// Sentence Smash
// Write a function that takes an array of words and smashes 
// them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, 
// but you should add spaces between each word. Be careful, 
// there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// Pseudocode:
// find a method(?) that will make a string from an array, adding sapces between 
// elements without adding one in the beginning or at the end.
// .toString() makes a string with commas inbetween. Maybe I can 
// replace commas with spaces.
// var myStr = 'this,is,a,test';
// var newStr = myStr.replace(/,/g, '-');
// 
// the /g is for global.

// console.log( newStr );  // "this-is-a-test"

// so it would look like this:
// smash.toString().replace(/,/g, ' ');
// or some syntactically correct version of that.


function smash (words) {
    return words.toString().replace(/,/g, ' ');
   
 };

 console.log("try", "this", "console", "logging")
 console.log("not on the first try")

//  here is a solution that seems simplier and more straight forward:
// smash = function (words) {
//   return words.join(" ");
// };
