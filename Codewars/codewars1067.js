// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Slaphead", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(bald('/---------'), ['----------', 'Unicorn!']);
//     assert.deepEqual(bald('/-----/-'), ['--------', 'Homer!']);
//     assert.deepEqual(bald('--/--/---/-/---'), ['---------------', 'Careless!']);
//   });
// });

// PREP
// P: we are given a string of dashes "-" and posiibly "/"'s.
// R: we are to return the string with the "/"'s removed and a string with a word corresponding to the number of '/'s removed in an array.
// E: if given '---/-------' we are to return ['----------', 'unicorn']
// P: we can split the string into an array, check for the '/' char and add a count every time one is found and removed. then set up a conditional to replace the count number with the correct word.

function bald(x){
    x = x.split("");
    let count = 0;

    x.forEach((item) => { if(item === '/') {
        count++
    }})
    
    let dashes = x.filter(item => item === "-").join("") + "-".repeat(count)

    let comment; 

    if (count === 0) {
        comment = "Clean!"
    } else if (count === 1) {
        comment = "Unicorn!"
    } else if (count === 2) {
        comment = "Homer!"
    } else if (count > 2 && count < 6) {
        comment = "Careless!"
    } else {
        comment = "Hobo!"
    };

    return [dashes, comment]
}

console.log(bald('--/--/---/-/---'))