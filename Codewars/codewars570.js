// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// describe("maskify", function(){
//     it("should work for some examples", function(){
//       Test.assertEquals(maskify('4556364607935616'), '############5616');
//       Test.assertEquals(maskify('1'), '1');
//       Test.assertEquals(maskify('11111'), '#1111');
//     });
//   });
// PREP
// Parameters:
// we are given a string
// results:
// we are to return a string with the characters replaced except for the last four, that are to be returned.
// example :
// given 'greatBigTest'
// expected to return '########Test'

// regex's replacecould work here, but so could a for loop.. split the string, set the length to .length - 4, make each a '#' then join()

// return masked string
function maskify(cc) {
     cc = cc.split('')
     for(let i = 0; i < cc.length-4; i++){
        cc[i] = '#'
     }
     return cc.join('')
}
console.log(maskify('4556364607935616'))