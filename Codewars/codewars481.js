// Introduction
// Digital Cypher assigns to each letter of the alphabet unique number. For example:

//  a  b  c  d  e  f  g  h  i  j  k  l  m
//  1  2  3  4  5  6  7  8  9 10 11 12 13
//  n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26
// Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

//  s  c  o  u  t
// 19  3 15 21 20
// Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

//    s  c  o  u  t
//   19  3 15 21 20
//  + 1  9  3  9  1
//  ---------------
//   20 12 18 30 21
  
//    m  a  s  t  e  r  p  i  e  c  e
//   13  1 19 20  5 18 16  9  5  3  5
// +  1  9  3  9  1  9  3  9  1  9  3
//   --------------------------------
//   14 10 22 29  6 27 19 18  6  12 8
// Task
// Write a function that accepts an array of integers code and a key number. As the result, it should return string containg a decoded message from the code.

// Input / Output
// The code is a array of positive integers.
// The key input is a positive integer.

// Example
// decode([ 20, 12, 18, 30, 21],1939);  ==> "scout"
// decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],1939);  ==>  "masterpiece"


// function encode(str,  n){
//     n = n.toString().split("")
//     let arr = []
//     let j = 0
//     for(let i = 0; i < str.length; i++){
//         arr.push(str.charCodeAt(i) - 96)
//     }
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//         if(j < n.length){
//             arr[i] += Number(n[j])
//             j++
//         }else{
//             j = 0
//             i--
//         }
//     }
//   return arr;
// }
// console.log(encode("masterpiece",1939))
// 
// PREP
// Parameters:
// given an array of numbers and a code
// first we need to get the code off the numbers, then use fromCharCode() to get the letters from the numbers and return a string

function decode  (code, n) {
    
    let arr = []
    let j = 0
    n = n.toString().split("")
    console.log(arr)
    for(let i = 0; i < code.length; i++){
        if(j < n.length){
            code[i] -= Number(n[j]) - 96
            j++
        }else{
            j = 0
            i--
        }
    }
    
    for(let i = 0; i < code.length; i++){
        arr.push(String.fromCharCode(code[i]))
    }
  return arr.join('')
    
}
console.log( decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],1939))
