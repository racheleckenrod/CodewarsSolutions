// When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

// Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

// Write a function which returns valid rating represented as moons ('o','c','x') in single string.
// You are given the following values preloaded (remember, since I can't use unicode characters, moons in brackets are here just to improve your imagination):

// examples

// More examples in test cases.


// const moons = {'o':'\u{1f315}', 'c': '\u{1f317}', 'x': '\u{1f311}'}


// let results = { 0: 'xxxxx',
//               0.6: 'cxxxx',
//               1.5: 'oxxxx',
//               3.9: 'ooxxx',
//               5: 'oocxx',
//               6: 'oooxx',
//               7.2: 'ooocx',
//               8.7: 'ooooc',
//               10: 'ooooo'}

// const stringMoons = string => {
//   return string.split('').map( letter => moons[letter] ).join('')
// }

// describe("Example Tests", function() {
//   Object.keys(results).forEach( key => { 
//     it(stringMoons(results[key]), function() {
//       Test.assertEquals(moonRating(Number(key)), results[key]);
//     });
//   });
// })

// Pseudocode:
// check if the rating is >= 2 (one moon), if it is, add a "o" to the array and subtract 2 from the rating, if it is not, check to see if rating is >= .5, if it is, add a "c" to the array, then add "x" til you get to five



   function moonRating(rating) {
    let array = []
       for(let i = 0; i < 5; i++){
           if(rating >= 1.5){
               array.push("o")
               rating -= 2
           }else if(rating >= .5){
               array.push("c")
               rating -= 2
           }else if(rating < .5){
               array.push("x")
           }
       }return array.join("")
      }