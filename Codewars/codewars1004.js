// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
// Have fun! ;)

// FUNDAMENTALSSTRINGS

// describe("Sample tests", function() {
//     it("Tests", function() {
//       assert.equal(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
//       assert.equal(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
//       assert.equal(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");
//     });
//   });

// PREP
// P: we are given a string
// R: we are to return a string that has each letter, a colon and an astrick for each time the letter is given in the string
// E: if given "test", we are to return "t:**, e:*, s:*"
// P: we can create a result variable as an array. check to see if it contains the letter in the given word using indexOf(). if indexOf() is -1, add the letter, a colon and an astrick to the array. else, add an astrick to the index of the array that the letter is in. may need to use findIndex(). perhaps we can use two arrays... one to keep track of what letters are in the word, and then another to be returned that has the letters, the colon and the number of astricks needed to keep track of how many instances of each letter there are. if the letter is found in the letters array,at the findIndex(), add an astrick to the index of the results array, else add the combo to the results array

// function getStrings(city){
//     let letters = []
//     let results = []

//     city = city.toLowerCase()

//     for (let i = 0; i < city.length; i++){
//         if (city[i] === " ") {
//             continue
//         }
//         if (letters.indexOf(city[i]) === -1) {
//             letters.push(city[i])
//             results.push(city[i] + ":*")
//         } else {
//             results[results.findIndex(element => element.startsWith(city[i]))] += "*"
//         }
//     }
//     return results.join(",")
//   }

  console.log(getStrings("Las Vegas"))

//   a simplified version using findIndex() and startsWith()

function getStrings(city){
    city = city.toLowerCase()
    result = []

    for (let i = 0; i < city.length; i++) {
        if (city[i] === ' ') {
            continue
        }
        if (result.findIndex(element => element.startsWith(city[i])) === -1) {
            result.push(city[i] + ":*")
        } else {
            result[result.findIndex(element => element.startsWith(city[i]))] += "*"
        }
    }

    return result.join(",")
}