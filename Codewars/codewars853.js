// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

// const { assert } = require('chai');

// it("Basic tests",() =>{
//   assert.strictEqual("test case".camelCase(), "TestCase");
//   assert.strictEqual("camel Case method".camelCase(), "CamelCaseMethod");
//   assert.strictEqual("say hello".camelCase(), "SayHello");
//   assert.strictEqual("camel case word".camelCase(), "CamelCaseWord");
//   assert.strictEqual("".camelCase(), "");
// })


String.prototype.camelCase=function(){
    //your code here
    let words = this.split(' ')

    let camelCaseWords = words.map((word,index) => {
        
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        
    })

    return camelCaseWords.join('')

  }

//   I didn't read that well enough to see that the first word was to be capitalized as well.