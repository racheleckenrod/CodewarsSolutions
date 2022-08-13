// 100th Kata
// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

// 'Hello World'

// would give:


// Words in your solution should be left-aligned.

// FUNDAMENTALSSTRINGSARRAYS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Framed Reflection", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(mirror('Hello World'), '* * * * * * * * * \n *   o l l e H   * \n* dlroW *\n*********');
//     assert.strictEqual(mirror('Codewars'), '************\n* srawedoC *\n************'); 
//   })
// });

// Sometimes better reading of the problem is a good idea , as I just wasted a bunch of tim etrying to find backwards letters. And this isn't even asking for that...

// need a length of the longest word + four "*"
// then a \n 
// then "*" " " word backwards another " " "*"
// \n 
// other words
// and the bottom astricks 

function mirror(text){
    // longest word length
    text = text.split(" ")
    let length = []
    for(let i = 0; i < text.length; i++){
        length.push(text[i].length)
    }
    let longest = Math.max(...length)

    let a = "*"
    let border = a.repeat(longest + 4)

    text = text.join(" ").split("").reverse().join('').split(" ").reverse()

    for(let i = 0; i < text.length; i++){
        if(text[i].length < longest){ 
            text[i] = text[i].toString()
            console.log(text[i].length,longest)
            text[i] = text[i].padEnd(longest)
            console.log(text)
        }
    }
   
    console.log(text)
    // text = text.join(" ").split("").reverse().join('').split(" ").reverse().join(" * \n* ")
    // console.log(text)

    text = text.join(" * \n* ")
    console.log(text)
    return `${border}\n${a} ${text} ${a}\n${border}`

}
console.log(mirror("Hello World new"))

function mirror(text){
    text = text.split(" ")
    let length = []
    for(let i = 0; i < text.length; i++){
        length.push(text[i].length)
    }
    let longest = Math.max(...length)

    let a = "*"
    let border = a.repeat(longest + 4)

    text = text.join(" ").split("").reverse().join('').split(" ").reverse()

    for(let i = 0; i < text.length; i++){
        if(text[i].length < longest){ 
            text[i] = text[i].toString()
            text[i] = text[i].padEnd(longest)
        }
    }

    text = text.join(" *\n* ")
    return `${border}\n${a} ${text} ${a}\n${border}`

}