// Covfefe
// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

// For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Example tests", function(){
//   it("Should pass fixed tests", function(){
//     assert.strictEqual(covfefe("coverage"),"covfefe");
//     assert.strictEqual(covfefe("coverage coverage"),"covfefe covfefe");
//     assert.strictEqual(covfefe("nothing"),"nothing covfefe");
//     assert.strictEqual(covfefe("double space "),"double space  covfefe");
//     assert.strictEqual(covfefe("covfefe"),"covfefe covfefe");
//     assert.strictEqual(covfefe("erag"),"erag covfefe");
//   });
// });

// PREP
// P: we are given a string
// R: we are to return a string with the term "coverage" replaced with "covfefe" if present, else add the term "covfefe" to the end of the string and return it.
// E: if given "no coverage" we are to return "no covfefe"
// P: this seems a good candidate for the "replace" regex expression, although I am still working on getting the syntax down exactly.


function covfefe(str){
    if (str.includes('coverage')) {
        return str.replace('coverage', 'covfefe')
    } else {
        return str + 'covfefe'
    }
    //covfefe !
  }