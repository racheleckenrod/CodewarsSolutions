// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Inside Out Strings", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(insideOut('man i need a taxi up to ubud'), 'man i ende a atix up to budu');
//     assert.strictEqual(insideOut('what time are we climbing up the volcano'), 'hwta item are we milcgnib up the lovcona'); 
//     assert.strictEqual(insideOut('take me to semynak'), 'atek me to mesykan'); 
//   })
// });

// PREP
// Parameters: we are given a string of words.
// we are to return a string with each word turned "inside out" meaning that, if odd, the middle letter of the word stays the middle letter, but the other letters change (sort of, second and second to last stay where they are too in a 7 letter word) 

// pseudocode:
// we will split the string into an array, and handle each word separatly. then check to see if it's length is even or odd. if even, divide in half, say 6 letter word, half is three, and the word, being zero indexed, will then start with index 2 of original word (half - 1, then go till 0) and add word.length - the half (word.length/2) then subtract one less each time til you get to subtracting one. 

// so it would look something like this with a word of length 6:
//newWord = word[(word.length/2) - 1] + word[(word.length/2 - 2)] + word[(word.length/2 - 3)] ((got to zero now on to the second half of the word)) + word[word.length(6) - 1 ] + word[word.length - 2] + word[word.length - 3]

// stops at three because word.length/2 = 3  so can we make code that adds up a variable then subtracts it and quits when it gets to zero? like a for loop that has a if(count === .length) run the second part. we have to do this for each word (even number of letters)

// function insideOut(x){
//     x = x.split(' ')
//     let y = []
//     let word = []
//     let count = 0
//     for(let i = 0; i < x.length; i++){
//         // is word even or odd
//         if( x[i].length % 2 === 0){
//             console.log("even")
//             // for even lettered words

//             for(let j = 0; j < x[i].length/2; j++){
//                 console.log(x[i][x[i].length/2 - 1 - j])
//                 word.push(x[i][x[i].length/2 - 1 - j])
//                 count += 1
//             }
//             if(count >= x[i].length/2){
//                 for(let k = 0; k < count; k++){
//                     console.log("second")
//                     word.push(x[i][x[i].length - (k + 1)])
                
//                 }
               
//             }
//             count = 0
//             y.push(word.join(""))
//             word = []
//         }else if(x[i].length === 1){
//             y.push(x[i])

//         }else{
//             console.log("ODD")
//             for(let j = 0; j < Math.floor(x[i].length/2) ; j++){
//                 console.log(x[i][Math.floor(x[i].length/2) - 1 - j])
//                 word.push(x[i][Math.floor(x[i].length/2) - 1 - j])
//                 count += 1
            
//             if(count === Math.floor(x[i].length/2)){
//                 console.log("Middle", Math.floor(x[i].length/2), x[i])
//                 word.push(x[i][Math.floor(x[i].length/2)])
//                 console.log("word", word)
//                 count +=1
//             }
//             if(count > x[i].length/2){
//                 for(let k = 0; k < count -1; k++){
//                     console.log("second Odd")
//                     word.push(x[i][x[i].length - (k + 1)])
//                     console.log(word, "after")
                
//                 }
               
//             }
//         }
//             count = 0
//             y.push(word.join(""))
//             word = []
        
//         }
//     }
//     return y.join(" ")

// }
console.log(insideOut('man i need a taxi up to ubud'))

// a little cleaned up:

function insideOut(x){
    x = x.split(' ')
    let y = []
    let word = []
    let count = 0
    for(let i = 0; i < x.length; i++){
        // is word even or odd
        if( x[i].length % 2 === 0){
            // for even lettered words
            for(let j = 0; j < x[i].length/2; j++){
                word.push(x[i][x[i].length/2 - 1 - j])
                count += 1
            }
            if(count >= x[i].length/2){
                for(let k = 0; k < count; k++){
                    word.push(x[i][x[i].length - (k + 1)])
                }
            }
            count = 0
            y.push(word.join(""))
            word = []
        }else if(x[i].length === 1){
            y.push(x[i])
        }else{
            for(let j = 0; j < Math.floor(x[i].length/2) ; j++){
                word.push(x[i][Math.floor(x[i].length/2) - 1 - j])
                count += 1
            
            if(count === Math.floor(x[i].length/2)){
                word.push(x[i][Math.floor(x[i].length/2)])
                count +=1
            }
            if(count > x[i].length/2){
                for(let k = 0; k < count -1; k++){
                    word.push(x[i][x[i].length - (k + 1)])
                }  
            }
        }
            count = 0
            y.push(word.join(""))
            word = []
        
        }
    }
    return y.join(" ")

}