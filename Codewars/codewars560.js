// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Move 10", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(moveTen("testcase"), "docdmkco");docdmkco
//     assert.strictEqual(moveTen("codewars"), "mynogkbc");
//     assert.strictEqual(moveTen("exampletesthere"), "ohkwzvodocdrobo");ohkw`vodocdrobo
//   })
// });

// charCodeAt()

// a is 97, z is 122

// 

// going to need to loop through the letters, changing each one to charCodeAt() + 10, but if the letter is less than 10 from the end, it will need to go back to the beginning...

// if charCodeAt() > 112, instead of adding 10, we will need to add 10 and subtract 26 or subtract 16. 


function moveTen(s){
    // s = s.split("")
    let a = []
    console.log(s,s.charCodeAt(1),s.charCodeAt(0),String.fromCharCode(70))
    for(let i = 0; i < s.length; i++){
        if(s.charCodeAt(i) < 113){
          
            a.push(String.fromCharCode(s.charCodeAt(i) + 10))
            
        }else{
            a.push(String.fromCharCode(s.charCodeAt(i) - 16))
        }
    }
    return a.join('')
}
console.log(moveTen("exampletesthere"))