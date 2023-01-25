// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(generateHashtag(""), false, "Expected an empty string to return false")
// Test.assertEquals(generateHashtag(" ".repeat(200)), false, "Still an empty string")
// Test.assertEquals(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
// Test.assertEquals(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
// Test.assertEquals(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
// Test.assertEquals(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
// Test.assertEquals(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
// Test.assertEquals(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
// Test.assertEquals(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
// Test.assertEquals(generateHashtag("a".repeat(140)), false, "Too long")
// });
// });


function generateHashtag (str) {
    str.trim()
    str = str.split(" ").join("")
    if(str.length < 1 || str.length > 140) return false

    let arr = str.split(" ")
    let camel = arr.map(item => item.slice(0, 1).toUpperCase() + item.slice(1) ).join("")
    camel = `#${camel}`
    console.log(camel)
}
console.log(generateHashtag("Do we have a hashtag?"))


console.log(generateHashtag(""))
