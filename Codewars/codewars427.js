// Write a simple converter for vowels.

//       Romaji:    a/A e/E i/I u/U o/O
//       Hiragana:  あ  え   い  う   お 
//       Katakana:  ア  エ   イ  ウ   オ
// Expect the above characters as input. There won't be invalid input.

// Rules:

// If there is no input return an empty string. 
// Do not change romaji. (a->a, A->A ... NOT A->a )
// Change Kana to lower case romaji. (あ->a ... NOT あ->A)
// Input can be mixed, but output should be consistent. (aAあア -> aAaa, for "romaji")
// Example 1:

// Input: "aeiou" 
// Output:"hiragana"

// Expected output: "あえいおう"
// Example 2:

// Input: "AえイOう"
// Output:"romaji"

// Expected output: "AeiOu"

// const chai = require("chai");
// const assert = chai.assert;

// describe("Fixed tests", function() {
  
//   it("Testing examples", function() {
//     assert.strictEqual(vowels("ouaei", "hiragana"), "おうあえい");
//     assert.strictEqual(vowels("AえイOう", "romaji"), "AeiOu");
//   });
  
//   it("Testing simple inputs", function() {
//     assert.strictEqual(vowels("aeiou", "romaji"), "aeiou");
//     assert.strictEqual(vowels("aeiou", "hiragana"), "あえいおう");
//     assert.strictEqual(vowels("aeiou", "katakana"), "アエイオウ");
    
//     assert.strictEqual(vowels("あえいおう", "romaji"), "aeiou");
//     assert.strictEqual(vowels("あえいおう", "hiragana"), "あえいおう");
//     assert.strictEqual(vowels("あえいおう", "katakana"), "アエイオウ");
    
//     assert.strictEqual(vowels("アエイオウ", "romaji"), "aeiou");
//     assert.strictEqual(vowels("アエイオウ", "hiragana"), "あえいおう");
//     assert.strictEqual(vowels("アエイオウ", "katakana"), "アエイオウ");
//   });
  
//   it("Testing empty input", function() {
//     assert.strictEqual(vowels("", "romaji"), "");
//     assert.strictEqual(vowels("", ""), "");
//   });
  
//   it("Testing uppercase", function() {
//     assert.strictEqual(vowels("aAeEoOUu", "romaji"), "aAeEoOUu");
//   });
  
// });

      
const romajiDictLow = "aeiou";
const romajiDictUp  = "AEIOU";
const hiraDict      = "あえいおう";
const kataDict      = "アエイオウ";

function vowels(input, output){
    let arr = input.split("")
    if(output === "romaji"){
       for(let i = 0; i < input.length; i++){
            if(hiraDict.includes(input[i])){
                arr[i] = romajiDictLow[hiraDict.indexOf(arr[i])]
                console.log(arr)
            }else if(kataDict.includes(input[i])){
                arr[i] = romajiDictLow[kataDict.indexOf(arr[i])]
                console.log(arr)
            }
       }
    }else if(output === "katakana"){
        for(let i = 0; i < input.length; i++){
            if(hiraDict.includes(input[i])){
                arr[i] = kataDict[hiraDict.indexOf(arr[i])]
                console.log(arr)
            }else if(romajiDictLow.includes(input[i])){
                arr[i] = kataDict[romajiDictLow.indexOf(arr[i])]
            }else if( romajiDictUp.includes(input[i])){
                arr[i] = kataDict[romajiDictUp.indexOf(arr[i])]
            }
        }
  
    }else if(output === "hiragana"){
        for(let i = 0; i < input.length; i++){
            if(kataDict.includes(input[i])){
                arr[i] = hiraDict[kataDict.indexOf(arr[i])]
                console.log(arr)
            }else if(romajiDictLow.includes(input[i])){
                arr[i] = hiraDict[romajiDictLow.indexOf(arr[i])]
            }else if( romajiDictUp.includes(input[i])){
                arr[i] = hiraDict[romajiDictUp.indexOf(arr[i])]
            }
        }

    }
  return arr.join('')
}
console.log(vowels("あえいおうアエイオウaeiouAEIOU","hiragana"))