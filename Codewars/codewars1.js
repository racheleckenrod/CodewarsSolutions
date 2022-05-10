// Complete the function that accepts a string parameter, 
// and reverses each word in the string.
// All spaces in the string should be retained.

// function reverseWords(str) {
//     return str.split(' ')
// }
//   reverseWords('I certainly hope this works out');

//   console.log(reverseWords())

//   const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// // expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // expected output: Array ["The quick brown fox jumps over the lazy dog."]


function reverseWords(str) {
     return str.split('').reverse().join('').split(' ').reverse().join(' ')
    }
    reverseWords('The quick brown fox jumps over the lazy dog.');
    // add some comments
    // add some more comments