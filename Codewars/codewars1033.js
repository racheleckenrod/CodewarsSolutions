// You have to sort the inner content of every word of a string in descending order.

// The inner content is the content of a word without first and the last char.

// Some examples:

// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"
// Words are made up of lowercase letters.

// The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// STRINGSLOGICALGORITHMS


// const Test = require('@codewars/test-compat');

// describe("Kata tests", function(){
//   it("Example tests", function(){
//     Test.assertEquals(sortTheInnerContent("sort the inner content in descending order"), "srot the inner ctonnet in dsnnieedcg oredr");
//     Test.assertEquals(sortTheInnerContent("wait for me"), "wiat for me");
//     Test.assertEquals(sortTheInnerContent("this kata is easy"), "tihs ktaa is esay");
//   });
// });

// PREP
// P: we are given a string
// R: we are to return the first letter, then the sorted letters (descending) then the last letter of each word in the string.
// E: if given "sort it out" we are to return "srot it out"
// P: we split the string into an array on spaces, getting an array of words. then each word we create words[i].slice(0,1) + words[i].slice(1, words[i].length - 2).sort().reverse() + words[i].slice(words[i] - 1) for each element . then join them with a " " back into a string


function sortTheInnerContent(words){
    let arr = words.split(' ')

    let result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].slice(0,1) + arr[i].slice(1, arr[i].length - 1).split("").sort().reverse().join("") + (arr[i].length > 1 ?  arr[i].slice(arr[i].length - 1) : ""))
    }
  return result.join(" ")
  }
console.log(sortTheInnerContent("this kata s easy"))