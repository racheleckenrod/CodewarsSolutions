// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Hells Kitchen", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
//     assert.strictEqual(gordon('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'); 
//     assert.strictEqual(gordon('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!');    
//   })
// });

function gordon(a){
    a = a.split(" ").map((item) => item.toUpperCase() + "!!!!").join(' ')
    console.log(a.length)
    // a = a.split("")
    console.log(a)
    // a = a.replaceAll("A", "@")
    // a = a.replaceAll(/[EIOU]/g, "*")
    while(a.search("A") !== -1){
        a = a.replace("A", "@")
    }
    while(a.search(/[EIOU]/g ) !== -1){
        a = a.replace(/[EIOU]/g, "*")
    }
    console.log(a)
    // for(let i = 0; i < a.length; i++){
    //     console.log(a, "test")
    //     for(let j = 0; j < a[i].length; j++){
    //         console.log(a[i][j])
    //         if(a[i][j] == "A"){
    //             a[i][j] = a[i].replace("A","@")
    //             console.log(a[i][j],"whaaa", a[i][j].replace("@"))
        
    //         }else if(a[i][j] == /[E,I,O,U]/){
    //             a[i][j] = "*"
    //             console.log("hmm")
    //         }
    //     }
    // }
    return a
}

console.log(gordon('are you stua pid'))