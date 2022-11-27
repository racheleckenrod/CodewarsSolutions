// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.
// const strictEqual = require('chai').assert.strictEqual;

// function doTest (input, expected) {
// 	const actual = swap(input);
// 	strictEqual(actual, expected, `for string:\n"${input}"\n`);
// }

// describe("Tests suite", () => {
// 	it("sample tests", () => {
// 		doTest("", "");
// 		doTest("   @@@", "   @@@");
// 		doTest("HelloWorld!", "HEllOWOrld!");
// 		doTest("Sunday", "SUndAy");
// 		doTest("Codewars", "COdEwArs");
// 		doTest("Monday", "MOndAy");
// 		doTest("Friday", "FrIdAy");
// 		doTest("abracadabra", "AbrAcAdAbrA");
// 		doTest("AbrAcAdAbrA", "AbrAcAdAbrA");
// 		doTest("ABRACADABRA", "ABRACADABRA");
// 		doTest("aBRaCaDaBRa", "ABRACADABRA");
// 	});
// });

function swap (string) {
    let arr = string.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "a"){
            arr.splice(i,1,"A")
        }else if(arr[i] == "e"){
            arr.splice(i,1,"E")
        }else if(arr[i] == "i"){
            arr.splice(i,1,"I")
        }else if(arr[i] == "o"){
            arr.splice(i,1,"O")
        }else if(arr[i] == "u"){
            arr.splice(i,1,"U")
        }
    }
    return arr.join('');
  }
  console.log(swap("hello World"))