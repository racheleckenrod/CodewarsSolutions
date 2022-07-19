// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// "Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"
// PREP

// Parameters:
// given a string
// Results:
// are to return a string with uppercase and lower case letters in a pattern
// see example.. there is only one
// Pseudocode:
// with only one example, the return string has capital letters at index
// 0,2,6,8,10,12,14,  appears to be the even indexes.. will try that first pass

// const {assert} = require('chai');
// describe("Example Test", () => {
//   it(`testing ${JSON.stringify("stop Making spongebob Memes!")}`, () => {
//     let actual = spongeMeme("stop Making spongebob Memes!");
//     assert.isDefined(actual,"The function didn't return anything. Did you print the result instead?");
//     assert.strictEqual(actual, 'StOp mAkInG SpOnGeBoB MeMeS!');
//   });
// });



function spongeMeme(sentence) {
    let output = sentence.split("")
     for(let i = 0; i < output.length; i++){
         if(i % 2 === 0){
             output[i] = output[i].toUpperCase()
         }else if(i % 2 !== 0){
             output[i] = output[i].toLowerCase()
         }
     }
   return output.join("")
 }
console.log(spongeMeme('stop Making spongebob Memes!'))

// a great solution using map

// const spongeMeme = sentence => 
//   sentence.split('').map((letter, i) => 
//   i % 2 ? letter.toLowerCase() : letter.toUpperCase()
// ).join('')