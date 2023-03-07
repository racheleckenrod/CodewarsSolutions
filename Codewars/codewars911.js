// This Kata is intended as a small challenge for my students

// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// removeVowels("drake") // => "drk"
// removeVowels("aeiou") // => ""

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(removeVowels("drake"),"drk");
// Test.assertEquals(removeVowels("aeiou"),"");
//   });
// });

// PREP
// P: we are given a string
// R: we are to return a string with all the vowels removed
// E: given "Hello" => "hll"
// P: using regex to replace the /[aeiou]/g with ""



var removeVowels = function(str){
    //code here
    return str.replace(/[aeiou]/gi, "")

    
    }
    console.log(removeVowels("Hello"))