// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")
//   Test.assertEquals(reverse("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts")
//     });
//   });

// PREP

// P: we are given a string containing words, punctuation, and white space.
// R: we are to return a string with every other word reversed and exactly one space between words. there is to be no trailing white space
// E: if given "this is fun time!", we are to return "this si fun !emit"
// P: make sure to trim each word after splitting the string into an array. use a conditional to reverse the odd indecies before joining the array back into a string.

function reverse(str){
    str = str.trim()
    let arr = str.split(" ")

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim()
        if (i % 2 != 0) {
            arr[i] = arr[i].split("").reverse().join("")
        }
    }

    return arr.join(" ")
    //WRITE SOME MAGIC
  }
  console.log(reverse("I really don't like reversing strings!"))