// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

// const { assert } = require('chai');

// describe("longestConsec",function() {
//   it("Basic tests",function() { 
//       assert.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
//       assert.strictEqual(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
//       assert.strictEqual(longestConsec([], 3), "")
//       assert.strictEqual(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
//       assert.strictEqual(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
//       assert.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
//       assert.strictEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
//       assert.strictEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
//       assert.strictEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
//   })
// })


// Parameters:
// we are given an array of strings and an integer
// we are to return the concatonation of the first longest string of k length.
// example
// if the array = [abc, wer,fgr,wws,you] & k = 3
// all the same length so first is return abcwerfgr
// P: make array of concatonations, then find longest element, return the first one in the array


function longestConsec(strarr, k) {
    let long = ''
   let temp = ''
   if(k<1)return ''
   for(let i = 0; i <= strarr.length - k; i++){
       temp = strarr.slice(i, i + k).join('')
       if(temp.length > long.length){
           long = temp
       }
      }

  return long
 }

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))