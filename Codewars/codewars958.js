// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There are preloaded dictionary you can use, named NATO
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace
// FUNDAMENTALS

// const Test = require('@codewars/test-compat');

// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

// describe("Solution", function(){
//   it("Should return a correctly translated string", function(){
//     Test.assertEquals(to_nato('If you can read'), "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
//     Test.assertEquals(to_nato('Did not see that coming'), "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
//     Test.assertEquals(to_nato('go for it!'),"Golf Oscar Foxtrot Oscar Romeo India Tango !");
//   });
// });

// PREP
// P: we are given a string of words, spaces and punctuation.
// R: we are to return a string of words from a preloaded dictionary - NATO (I assume is an object) that corresponds to each letter of the words in the given string. there is to be a space between each return word and each punctuation mark. no trailing whitespace
// E: if given "I love you!" we are to return "India Lima Oscar Victor Echo Yankee Oscar Uniform !"
// P: the NATO uses lowercase letters for the keys of the object they call a dictionary. Make sure to change the letters to lowercase(). make a return variable array. push the values of NATO into it for each letter, and push the punctuation as is, join the array with a space. dont push anything into the array for a space.
let NATO = {
    a: 'Alfa',
    n: 'November',
    b: 'Bravo',
    o: 'Oscar',
    c: 'Charlie',
    p: 'Papa',
    d: 'Delta',
    q: 'Quebec',
    e: 'Echo',
    r: 'Romeo',
    f: 'Foxtrot',
    s: 'Sierra',
    g: 'Golf',
    t: 'Tango',
    h: 'Hotel',
    u: 'Uniform',
    i: 'India',
    v: 'Victor',
    j: 'Juliett',
    w: 'Whiskey',
    k: 'Kilo',
    x: 'Xray',
    l: 'Lima',
    y: 'Yankee',
    m: 'Mike',
    z: 'Zulu'
  }
  

function to_nato(words) {
    let arr = words.toLowerCase().split("")

    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (/[a-z]/.test(arr[i])) {
            result.push(NATO[arr[i]])
        } else if (arr[i] === ".") {
            result.push(".")
        } else if (arr[i] === "!") {
            result.push("!")
        } else if (arr[i] === ",") {
            result.push(",")
        } else if (arr[i] === "?") {
            result.push("?")
        }
    }
    return result.join(" ")

	// Go code
}
console.log(to_nato("Go for it!!!"))