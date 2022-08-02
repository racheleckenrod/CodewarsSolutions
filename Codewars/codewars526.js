// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
// Example
// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(abbreviate("internationalization"), "i18n");
//   Test.assertEquals(abbreviate("accessibility"), "a11y");
//   Test.assertEquals(abbreviate("Accessibility"), "A11y");
//   Test.assertEquals(abbreviate("elephant-ride"), "e6t-r2e");
//     });
//   });
  


// function abbreviate(string) {
//     // arr = string.split("-")
//     // console.log(arr)
//     // arr = string.split(" ")
//     // console.log(arr)
//     if(string.includes("-")){
//         arr = string.split("-")
//         for(let i = 0; i < arr.length; i++){
//             for(let j = 0; j < arr[i].length; j++){
//                 if(arr[i].length > 3){
//                     arr[i] = arr[i][0] + (arr[i].length - 2) + arr[i][arr.length - 1]
//                 }
//             }
//             console.log(arr)
//         }
//         arr = arr.join("-")
//     }else{
//         arr = string.split(" ")
//         console.log(arr)
//         for(let i = 0; i < arr.length; i++){
//             for(let j = 0; j < arr.length; j++){
//                 if(arr[i].length > 3){
//                     arr[i] = arr[i][0] + (arr[i].length - 2) + arr[i][arr[i][j].length - 1]
                    
//                     console.log(arr,arr[0][arr.length - 1],arr[j].length )
//                 }
//              } 
//         }
//         arr = arr.join(" ")
//   }
//   return arr
// }
//   console.log(abbreviate("internationalization"))

//   as I suspected we are given strings of mixed formats... 
// the last test brought up a couple issues- what to do with commas and the mixed format where only one word of many is hyphenated. will also need to deal with other punctuation at the end.


// PREP
// Parameters:
// we are given a string
// we are expected to return a string, that contains all the same punctuation, and short words, and replaces the wodr longer than 4 with an abbreviation - the first and last letters,and the number of removed letters in between.
// because we dont want to test for all the different possibilities that could be present, we can test for a string of letters using regex.. then convert it and move on the the next.. maybe use match? /[a-z]/-gi/ or whatever that format is...
// not exactly sure how that would go... maybe make a little array, and push each letter, then stop if it is not a letter. check if it is longer than 3, if it is  convert it to the abbreviation, else just push it into the bigger array... 

function abbreviate(string) {
    let arr = string.split("") //this will keep the originals
    // console.log(arr)
    let word = []
    let result = []
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i])
        if(arr[i].match(/[a-z]/i)){
            console.log("bugger")
            word.push(arr[i])
            console.log(word)
            if(i === arr.length - 1){
                if(word.length < 4){
                    result.push(word.join(""))
    
                }else if(word.length > 3){
                    console.log("OK")
                    result.push(word[0] + (word.length - 2) + word[word.length - 1])
                }
                // result.push(word.join(""))
            }
        }else{
            if(word.length < 4){
                result.push(word.join(""))

            }else if(word.length > 3){
                console.log("OK")
                result.push(word[0] + (word.length - 2) + word[word.length - 1])
            }
            result.push(arr[i])
            console.log(arr[i],word)

               
            word = []
        }
    }
return result.join("")
}

console.log(abbreviate("Elephant-ride"))